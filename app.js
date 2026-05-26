const STORAGE_KEY = "chunkCollocationQuizProgress";
const SPEECH_LANG = "en-US";
const SPEECH_RATE = 0.9;
const FEEDBACK_VOLUME = 0.14;
const QUESTIONS = window.QUESTIONS || [];

const state = {
  turn: 0,
  currentQuestion: null,
  selectedAnswer: "",
  answered: false,
  progress: loadProgress(),
  audioContext: null,
  feedbackPlaybackId: 0
};

const $ = (id) => document.getElementById(id);
const els = {
  menuView: $("menuView"),
  quizView: $("quizView"),
  progressView: $("progressView"),
  startQuizButton: $("startQuizButton"),
  showProgressButton: $("showProgressButton"),
  backToMenuFromQuizButton: $("backToMenuFromQuizButton"),
  backToMenuFromProgressButton: $("backToMenuFromProgressButton"),
  quizCategory: $("quizCategory"),
  promptText: $("promptText"),
  choiceGrid: $("choiceGrid"),
  feedbackPanel: $("feedbackPanel"),
  feedbackMark: $("feedbackMark"),
  correctAnswerText: $("correctAnswerText"),
  explanationText: $("explanationText"),
  nextQuestionButton: $("nextQuestionButton"),
  coverageText: $("coverageText"),
  accuracyText: $("accuracyText"),
  unseenText: $("unseenText"),
  dueText: $("dueText"),
  streakText: $("streakText"),
  masteredText: $("masteredText"),
  todayAnsweredText: $("todayAnsweredText"),
  weakList: $("weakList"),
  recentWrongList: $("recentWrongList")
};

function loadProgress() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
    return {
      turn: Number(saved.turn) || 0,
      streak: Number(saved.streak) || 0,
      daily: normalizeDailyProgress(saved.daily),
      questions: saved.questions || {}
    };
  } catch {
    return { turn: 0, streak: 0, daily: normalizeDailyProgress(), questions: {} };
  }
}

function saveProgress() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state.progress));
}

function todayKey() {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function normalizeDailyProgress(savedDaily = {}) {
  const today = todayKey();
  if (savedDaily.date === today) {
    return {
      date: today,
      answeredCount: Number(savedDaily.answeredCount) || 0
    };
  }

  return {
    date: today,
    answeredCount: 0
  };
}

function ensureDailyProgress() {
  state.progress.daily = normalizeDailyProgress(state.progress.daily);
  return state.progress.daily;
}

function ensureRecord(questionId) {
  if (!state.progress.questions[questionId]) {
    state.progress.questions[questionId] = {
      seenCount: 0,
      correctCount: 0,
      wrongCount: 0,
      recentResults: [],
      nextDueTurn: 0,
      lastAnsweredTurn: 0
    };
  }
  return state.progress.questions[questionId];
}

function showView(viewName) {
  els.menuView.classList.toggle("hidden", viewName !== "menu");
  els.quizView.classList.toggle("hidden", viewName !== "quiz");
  els.progressView.classList.toggle("hidden", viewName !== "progress");
}

function startQuiz() {
  if (!ensureQuestionsLoaded()) return;
  showView("quiz");
  nextQuestion();
}

function nextQuestion() {
  stopFeedbackPlayback();
  state.currentQuestion = pickNextQuestion();
  state.selectedAnswer = "";
  state.answered = false;
  renderQuestion();
}

function pickNextQuestion() {
  const turn = state.progress.turn;
  const unseen = QUESTIONS.filter((question) => ensureRecord(question.id).seenCount === 0);
  if (unseen.length) return randomItem(unseen);

  const due = QUESTIONS.filter((question) => ensureRecord(question.id).nextDueTurn <= turn);
  if (due.length) {
    return weightedPick(due, (question) => {
      const record = ensureRecord(question.id);
      const wrongBias = record.wrongCount * 4;
      const recentWrongBias = record.recentResults.includes(false) ? 5 : 0;
      const delayBias = Math.max(0, turn - record.nextDueTurn);
      return 1 + wrongBias + recentWrongBias + delayBias;
    });
  }

  return weightedPick(QUESTIONS, (question) => {
    const record = ensureRecord(question.id);
    return 1 + record.wrongCount * 3 - Math.min(record.correctCount, 3);
  });
}

function ensureQuestionsLoaded() {
  if (QUESTIONS.length) return true;

  window.alert("問題データを読み込めませんでした。questions.js が同じフォルダにあるか確認してください。");
  return false;
}

function renderQuestion() {
  const question = state.currentQuestion;
  els.quizCategory.textContent = question.category;
  els.promptText.textContent = question.jaPrompt;
  els.feedbackPanel.classList.add("hidden");
  els.feedbackPanel.classList.remove("wrong");
  els.choiceGrid.classList.remove("hidden");
  els.choiceGrid.innerHTML = "";

  const choices = shuffle([question.answer, ...question.distractors]);
  choices.forEach((choice) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "choice-button";
    button.textContent = choice;
    button.addEventListener("click", () => answerQuestion(choice));
    els.choiceGrid.appendChild(button);
  });
}

function answerQuestion(choice) {
  if (state.answered) return;
  const question = state.currentQuestion;
  const isCorrect = choice === question.answer;
  state.selectedAnswer = choice;
  state.answered = true;
  updateProgress(question, isCorrect);
  renderAnsweredState(isCorrect);
}

function updateProgress(question, isCorrect) {
  const record = ensureRecord(question.id);
  const daily = ensureDailyProgress();
  state.progress.turn += 1;
  daily.answeredCount += 1;
  record.seenCount += 1;
  record.lastAnsweredTurn = state.progress.turn;
  record.recentResults = [...record.recentResults.slice(-2), isCorrect];

  if (isCorrect) {
    record.correctCount += 1;
    state.progress.streak += 1;
    const consecutiveCorrect = countTrailingCorrect(record.recentResults);
    record.nextDueTurn = state.progress.turn + (consecutiveCorrect >= 3 ? 25 : consecutiveCorrect === 2 ? 15 : 8);
  } else {
    record.wrongCount += 1;
    state.progress.streak = 0;
    record.nextDueTurn = state.progress.turn + (record.seenCount === 1 ? 2 : 4);
  }

  saveProgress();
}

function renderAnsweredState(isCorrect) {
  const question = state.currentQuestion;
  els.choiceGrid.classList.add("hidden");

  els.feedbackPanel.classList.toggle("wrong", !isCorrect);
  els.feedbackMark.textContent = isCorrect ? "○" : "×";
  els.correctAnswerText.textContent = `正解: ${question.answer}`;
  els.explanationText.textContent = question.explanationJa;
  els.feedbackPanel.classList.remove("hidden");
  playFeedbackSequence(isCorrect, question.answer);
}

function renderProgress() {
  const records = QUESTIONS.map((question) => ({ question, record: ensureRecord(question.id) }));
  const seen = records.filter((item) => item.record.seenCount > 0);
  const due = records.filter((item) => item.record.seenCount > 0 && item.record.nextDueTurn <= state.progress.turn);
  const recentResults = seen.flatMap((item) => item.record.recentResults);
  const correctRecent = recentResults.filter(Boolean).length;
  const accuracy = recentResults.length ? Math.round((correctRecent / recentResults.length) * 100) : 0;
  const mastered = records.filter((item) => countTrailingCorrect(item.record.recentResults) >= 3).length;

  els.coverageText.textContent = `${Math.round((seen.length / QUESTIONS.length) * 100)}%`;
  els.accuracyText.textContent = `${accuracy}%`;
  els.unseenText.textContent = QUESTIONS.length - seen.length;
  els.dueText.textContent = due.length;
  els.streakText.textContent = state.progress.streak || 0;
  els.masteredText.textContent = mastered;
  els.todayAnsweredText.textContent = ensureDailyProgress().answeredCount;

  renderPhraseList(els.weakList, weakItems(records), "苦手フレーズはまだありません。");
  renderPhraseList(els.recentWrongList, recentWrongItems(records), "直近で間違えたフレーズはまだありません。");
}

function weakItems(records) {
  return records
    .filter((item) => item.record.wrongCount > 0)
    .sort((a, b) => b.record.wrongCount - a.record.wrongCount || a.record.correctCount - b.record.correctCount)
    .slice(0, 5);
}

function recentWrongItems(records) {
  return records
    .filter((item) => item.record.recentResults.at(-1) === false)
    .sort((a, b) => b.record.lastAnsweredTurn - a.record.lastAnsweredTurn)
    .slice(0, 5);
}

function renderPhraseList(container, items, emptyMessage) {
  container.innerHTML = "";
  if (!items.length) {
    const empty = document.createElement("p");
    empty.className = "empty-text";
    empty.textContent = emptyMessage;
    container.appendChild(empty);
    return;
  }

  items.forEach(({ question, record }) => {
    const item = document.createElement("div");
    item.className = "phrase-item";
    item.innerHTML = `
      <div>
        <strong>${escapeHtml(question.answer)}</strong>
        <span>${escapeHtml(question.jaPrompt)}</span>
      </div>
      <small>Miss ${record.wrongCount} / Seen ${record.seenCount}</small>
    `;
    container.appendChild(item);
  });
}

function getAudioContext() {
  const AudioContextClass = window.AudioContext || window.webkitAudioContext;
  if (!AudioContextClass) return null;

  if (!state.audioContext) {
    state.audioContext = new AudioContextClass();
  }

  if (state.audioContext.state === "suspended") {
    state.audioContext.resume();
  }

  return state.audioContext;
}

function playFeedbackSequence(isCorrect, phrase) {
  const playbackId = ++state.feedbackPlaybackId;
  window.speechSynthesis?.cancel();
  playResultSound(isCorrect).finally(() => {
    if (playbackId === state.feedbackPlaybackId && state.answered) {
      speakPhrase(phrase);
    }
  });
}

function playResultSound(isCorrect) {
  const context = getAudioContext();
  if (!context) return Promise.resolve();

  const notes = isCorrect
    ? [
        { frequency: 880, start: 0, duration: 0.12, type: "sine" },
        { frequency: 1174, start: 0.13, duration: 0.16, type: "sine" }
      ]
    : [
        { frequency: 180, start: 0, duration: 0.16, type: "sawtooth" },
        { frequency: 120, start: 0.17, duration: 0.18, type: "sawtooth" }
      ];

  const startTime = context.currentTime + 0.01;
  notes.forEach((note) => {
    const oscillator = context.createOscillator();
    const gain = context.createGain();
    oscillator.type = note.type;
    oscillator.frequency.setValueAtTime(note.frequency, startTime + note.start);
    gain.gain.setValueAtTime(0.0001, startTime + note.start);
    gain.gain.exponentialRampToValueAtTime(FEEDBACK_VOLUME, startTime + note.start + 0.02);
    gain.gain.exponentialRampToValueAtTime(0.0001, startTime + note.start + note.duration);
    oscillator.connect(gain);
    gain.connect(context.destination);
    oscillator.start(startTime + note.start);
    oscillator.stop(startTime + note.start + note.duration + 0.03);
  });

  const totalDuration = Math.max(...notes.map((note) => note.start + note.duration));
  return new Promise((resolve) => {
    window.setTimeout(resolve, Math.ceil((totalDuration + 0.08) * 1000));
  });
}

function speakPhrase(phrase) {
  if (!("speechSynthesis" in window)) return;

  const utterance = new SpeechSynthesisUtterance(phrase);
  utterance.lang = SPEECH_LANG;
  utterance.rate = SPEECH_RATE;
  window.speechSynthesis.cancel();
  window.speechSynthesis.speak(utterance);
}

function stopFeedbackPlayback() {
  state.feedbackPlaybackId += 1;
  window.speechSynthesis?.cancel();
}

function countTrailingCorrect(results) {
  let count = 0;
  for (let i = results.length - 1; i >= 0; i -= 1) {
    if (!results[i]) break;
    count += 1;
  }
  return count;
}

function randomItem(items) {
  return items[Math.floor(Math.random() * items.length)];
}

function weightedPick(items, weightFn) {
  const weights = items.map((item) => Math.max(1, weightFn(item)));
  const total = weights.reduce((sum, weight) => sum + weight, 0);
  let roll = Math.random() * total;
  for (let i = 0; i < items.length; i += 1) {
    roll -= weights[i];
    if (roll <= 0) return items[i];
  }
  return items[items.length - 1];
}

function shuffle(items) {
  return [...items].sort(() => Math.random() - 0.5);
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll("\"", "&quot;");
}

els.startQuizButton.addEventListener("click", startQuiz);
els.showProgressButton.addEventListener("click", () => {
  if (!ensureQuestionsLoaded()) return;
  renderProgress();
  showView("progress");
});
els.backToMenuFromQuizButton.addEventListener("click", () => {
  stopFeedbackPlayback();
  showView("menu");
});
els.backToMenuFromProgressButton.addEventListener("click", () => showView("menu"));
els.nextQuestionButton.addEventListener("click", nextQuestion);
