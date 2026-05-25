const QUESTIONS = [
  {
    id: "heavy-rain",
    category: "Weather",
    jaPrompt: "雨が強い",
    answer: "heavy rain",
    distractors: ["strong rain", "big rain", "hard rain"],
    explanationJa: "rain には heavy を使うのが自然です。strong は wind、hard は work などと結びつきやすい語です。",
    sourceRefs: ["Oxford Collocations Dictionary", "OZDIC"]
  },
  {
    id: "make-a-decision",
    category: "Action",
    jaPrompt: "決断する",
    answer: "make a decision",
    distractors: ["do a decision", "create a decision", "build a decision"],
    explanationJa: "decision は make と組み合わせて「決断する」と言います。take a decision は一部の英語で使われますが、初期学習では make a decision を優先します。",
    sourceRefs: ["Oxford Collocations Dictionary", "WordReference"]
  },
  {
    id: "make-a-mistake",
    category: "Action",
    jaPrompt: "間違いを犯す",
    answer: "make a mistake",
    distractors: ["do a mistake", "take a mistake", "create a mistake"],
    explanationJa: "mistake は make と結びつきます。日本語の「する」に引っ張られて do a mistake としないようにします。",
    sourceRefs: ["Oxford Collocations Dictionary", "OZDIC"]
  },
  {
    id: "take-a-photo",
    category: "Daily Life",
    jaPrompt: "写真を撮る",
    answer: "take a photo",
    distractors: ["make a photo", "do a photo", "catch a photo"],
    explanationJa: "photo は take と組み合わせて「写真を撮る」と言います。make は制作するニュアンスになりやすいです。",
    sourceRefs: ["Oxford Learner's Dictionaries", "WordReference"]
  },
  {
    id: "keep-a-promise",
    category: "People",
    jaPrompt: "約束を守る",
    answer: "keep a promise",
    distractors: ["hold a promise", "protect a promise", "save a promise"],
    explanationJa: "promise は keep と結びついて「約束を守る」になります。break a promise は「約束を破る」です。",
    sourceRefs: ["Oxford Collocations Dictionary", "OZDIC"]
  },
  {
    id: "meet-a-deadline",
    category: "Work",
    jaPrompt: "締切に間に合う",
    answer: "meet a deadline",
    distractors: ["catch a deadline", "touch a deadline", "arrive a deadline"],
    explanationJa: "deadline は meet と組み合わせて「締切に間に合う」と言います。仕事・試験・提出物でよく使います。",
    sourceRefs: ["Oxford Collocations Dictionary", "WordReference"]
  },
  {
    id: "pay-attention",
    category: "Learning",
    jaPrompt: "注意を払う",
    answer: "pay attention",
    distractors: ["send attention", "give attention", "put attention"],
    explanationJa: "attention は pay と組み合わせて「注意を払う」と言います。pay はお金以外にも attention/respect などと結びつきます。",
    sourceRefs: ["Oxford Collocations Dictionary", "OZDIC"]
  },
  {
    id: "strong-wind",
    category: "Weather",
    jaPrompt: "強い風",
    answer: "strong wind",
    distractors: ["heavy wind", "big wind", "hard wind"],
    explanationJa: "wind には strong を使うのが自然です。rain は heavy rain、wind は strong wind と塊で覚えます。",
    sourceRefs: ["Oxford Collocations Dictionary", "OZDIC"]
  },
  {
    id: "deeply-asleep",
    category: "Daily Life",
    jaPrompt: "ぐっすり眠っている",
    answer: "deeply asleep",
    distractors: ["strongly asleep", "big asleep", "hard asleep"],
    explanationJa: "asleep は deeply と組み合わせて「ぐっすり眠っている」と表現できます。形容詞や副詞の自然な結びつきを意識します。",
    sourceRefs: ["Oxford Collocations Dictionary", "WordReference"]
  },
  {
    id: "conduct-research",
    category: "Academic",
    jaPrompt: "研究を行う",
    answer: "conduct research",
    distractors: ["make research", "create research", "play research"],
    explanationJa: "research は conduct と結びついて「研究を行う」と言えます。do research も自然ですが、この問題ではよりフォーマルな conduct research を正解にしています。",
    sourceRefs: ["Oxford Collocations Dictionary", "COCA"]
  }
];

const STORAGE_KEY = "chunkCollocationQuizProgress";

const state = {
  turn: 0,
  currentQuestion: null,
  selectedAnswer: "",
  answered: false,
  progress: loadProgress()
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
  feedbackTitle: $("feedbackTitle"),
  correctAnswerText: $("correctAnswerText"),
  explanationText: $("explanationText"),
  nextQuestionButton: $("nextQuestionButton"),
  coverageText: $("coverageText"),
  accuracyText: $("accuracyText"),
  unseenText: $("unseenText"),
  dueText: $("dueText"),
  streakText: $("streakText"),
  masteredText: $("masteredText"),
  weakList: $("weakList"),
  recentWrongList: $("recentWrongList")
};

function loadProgress() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
    return {
      turn: Number(saved.turn) || 0,
      streak: Number(saved.streak) || 0,
      questions: saved.questions || {}
    };
  } catch {
    return { turn: 0, streak: 0, questions: {} };
  }
}

function saveProgress() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state.progress));
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
  showView("quiz");
  nextQuestion();
}

function nextQuestion() {
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
  state.progress.turn += 1;
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
  els.feedbackTitle.textContent = isCorrect ? "You got it!" : "Review this chunk";
  els.correctAnswerText.textContent = isCorrect ? question.answer : `正解: ${question.answer}`;
  els.explanationText.textContent = question.explanationJa;
  els.feedbackPanel.classList.remove("hidden");
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
  renderProgress();
  showView("progress");
});
els.backToMenuFromQuizButton.addEventListener("click", () => showView("menu"));
els.backToMenuFromProgressButton.addEventListener("click", () => showView("menu"));
els.nextQuestionButton.addEventListener("click", nextQuestion);
