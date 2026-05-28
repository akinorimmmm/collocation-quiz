// Static question data for the collocation quiz.
// Each question keeps its examples directly in data; no example-generation helpers are used.
window.QUESTIONS = [
  {
    "id": "heavy-rain",
    "category": "Weather",
    "jaPrompt": "激しい雨",
    "answer": "heavy rain",
    "distractors": [
      "strong rain",
      "big rain",
      "hard rain"
    ],
    "explanationJa": "rain には heavy を使うのが自然です。strong は wind、hard は work などと結びつきやすい語です。",
    "sourceRefs": [
      "Oxford Collocations Dictionary",
      "OZDIC"
    ],
    "examples": [
      {
        "en": "Heavy rain delayed the morning train.",
        "ja": "激しい雨で朝の電車が遅れました。"
      },
      {
        "en": "The game was canceled because of heavy rain.",
        "ja": "激しい雨のため試合は中止されました。"
      }
    ]
  },
  {
    "id": "make-a-decision",
    "category": "Action",
    "jaPrompt": "決断する",
    "answer": "make a decision",
    "distractors": [
      "do a decision",
      "create a decision",
      "build a decision"
    ],
    "explanationJa": "decision は make と組み合わせて「決断する」と言います。take a decision は一部の英語で使われますが、初期学習では make a decision を優先します。",
    "sourceRefs": [
      "Oxford Collocations Dictionary",
      "WordReference"
    ],
    "examples": [
      {
        "en": "We need to make a decision by Friday.",
        "ja": "金曜日までに決断する必要があります。"
      },
      {
        "en": "She made a decision after comparing the two plans.",
        "ja": "彼女は2つの案を比較したうえで、方針を決めました。"
      }
    ]
  },
  {
    "id": "make-a-mistake",
    "category": "Action",
    "jaPrompt": "間違いを犯す",
    "answer": "make a mistake",
    "distractors": [
      "do a mistake",
      "take a mistake",
      "create a mistake"
    ],
    "explanationJa": "mistake は make と結びつきます。日本語の「する」に引っ張られて do a mistake としないようにします。",
    "sourceRefs": [
      "Oxford Collocations Dictionary",
      "OZDIC"
    ],
    "examples": [
      {
        "en": "It is easy to make a mistake when you are tired.",
        "ja": "疲れていると間違いを犯しやすいです。"
      },
      {
        "en": "He made a mistake in the report.",
        "ja": "彼は報告書でミスをしました。"
      }
    ]
  },
  {
    "id": "take-a-photo",
    "category": "Daily Life",
    "jaPrompt": "写真を撮る",
    "answer": "take a photo",
    "distractors": [
      "make a photo",
      "do a photo",
      "catch a photo"
    ],
    "explanationJa": "photo は take と組み合わせて「写真を撮る」と言います。make は制作するニュアンスになりやすいです。",
    "sourceRefs": [
      "Oxford Learner's Dictionaries",
      "WordReference"
    ],
    "examples": [
      {
        "en": "Can you take a photo of this document?",
        "ja": "この書類の写真を撮ってくれますか。"
      },
      {
        "en": "She took a photo before leaving the office.",
        "ja": "彼女はオフィスを出る前に写真を撮りました。"
      }
    ]
  },
  {
    "id": "keep-a-promise",
    "category": "People",
    "jaPrompt": "約束を守る",
    "answer": "keep a promise",
    "distractors": [
      "hold a promise",
      "protect a promise",
      "save a promise"
    ],
    "explanationJa": "promise は keep と結びついて「約束を守る」になります。break a promise は「約束を破る」です。",
    "sourceRefs": [
      "Oxford Collocations Dictionary",
      "OZDIC"
    ],
    "examples": [
      {
        "en": "It is important to keep a promise.",
        "ja": "約束を守ることは大切です。"
      },
      {
        "en": "He kept a promise he made to his team.",
        "ja": "彼はチームにした約束を守りました。"
      }
    ]
  },
  {
    "id": "meet-a-deadline",
    "category": "Work",
    "jaPrompt": "締切に間に合う",
    "answer": "meet a deadline",
    "distractors": [
      "catch a deadline",
      "touch a deadline",
      "arrive a deadline"
    ],
    "explanationJa": "deadline は meet と組み合わせて「締切に間に合う」と言います。仕事・試験・提出物でよく使います。",
    "sourceRefs": [
      "Oxford Collocations Dictionary",
      "WordReference"
    ],
    "examples": [
      {
        "en": "We worked late to meet a deadline.",
        "ja": "締切に間に合わせるために遅くまで働きました。"
      },
      {
        "en": "The team met a deadline despite the delay.",
        "ja": "遅れがあったにもかかわらず、チームは締切に間に合わせました。"
      }
    ]
  },
  {
    "id": "pay-attention",
    "category": "Learning",
    "jaPrompt": "注意する",
    "answer": "pay attention",
    "distractors": [
      "send attention",
      "give attention",
      "put attention"
    ],
    "explanationJa": "attention は pay と組み合わせて「注意を払う」と言います。pay はお金以外にも attention/respect などと結びつきます。",
    "sourceRefs": [
      "Oxford Collocations Dictionary",
      "OZDIC"
    ],
    "examples": [
      {
        "en": "Please pay attention to the instructions.",
        "ja": "説明をよく聞いて、その通りに進めてください。"
      },
      {
        "en": "You need to pay attention when entering data.",
        "ja": "データを入力するときは、入力内容に注意してください。"
      }
    ]
  },
  {
    "id": "strong-wind",
    "category": "Weather",
    "jaPrompt": "強い風",
    "answer": "strong wind",
    "distractors": [
      "heavy wind",
      "big wind",
      "hard wind"
    ],
    "explanationJa": "wind には strong を使うのが自然です。rain は heavy rain、wind は strong wind と塊で覚えます。",
    "sourceRefs": [
      "Oxford Collocations Dictionary",
      "OZDIC"
    ],
    "examples": [
      {
        "en": "Strong wind made it difficult to walk.",
        "ja": "強い風で歩くのが大変でした。"
      },
      {
        "en": "The bridge was closed because of strong wind.",
        "ja": "強い風のため橋は閉鎖されました。"
      }
    ]
  },
  {
    "id": "deeply-asleep",
    "category": "Daily Life",
    "jaPrompt": "ぐっすり眠っている",
    "answer": "deeply asleep",
    "distractors": [
      "strongly asleep",
      "big asleep",
      "hard asleep"
    ],
    "explanationJa": "asleep は deeply と組み合わせて「ぐっすり眠っている」と表現できます。形容詞や副詞の自然な結びつきを意識します。",
    "sourceRefs": [
      "Oxford Collocations Dictionary",
      "WordReference"
    ],
    "examples": [
      {
        "en": "The child was deeply asleep.",
        "ja": "その子どもはぐっすり眠っていました。"
      },
      {
        "en": "He was deeply asleep when the phone rang.",
        "ja": "電話が鳴ったとき、彼はぐっすり眠っていました。"
      }
    ]
  },
  {
    "id": "conduct-research",
    "category": "Academic",
    "jaPrompt": "研究を行う",
    "answer": "conduct research",
    "distractors": [
      "make research",
      "create research",
      "play research"
    ],
    "explanationJa": "research は conduct と結びついて「研究を行う」と言えます。do research も自然ですが、この問題ではよりフォーマルな conduct research を正解にしています。",
    "sourceRefs": [
      "Oxford Collocations Dictionary",
      "COCA"
    ],
    "examples": [
      {
        "en": "The university will conduct research on climate change.",
        "ja": "その大学は気候変動に関する研究を行います。"
      },
      {
        "en": "We conducted research before launching the product.",
        "ja": "製品を発売する前に調査研究を行いました。"
      }
    ]
  },
  {
    "id": "v-make-an-effort",
    "category": "Core Verb",
    "jaPrompt": "努力する",
    "answer": "make an effort",
    "distractors": [
      "do an effort",
      "take an effort",
      "build an effort"
    ],
    "explanationJa": "an effort は make と結びつくと「努力する」という自然な英語になります。動詞を入れ替えると不自然になりやすいので、make an effort を塊で覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "We need to make an effort to reach this month's target.",
        "ja": "今月の目標を達成するために、もう少し頑張る必要があります。"
      },
      {
        "en": "He made an effort to improve his English every day.",
        "ja": "彼は毎日英語を伸ばそうと努力しました。"
      }
    ]
  },
  {
    "id": "v-make-progress",
    "category": "Core Verb",
    "jaPrompt": "進捗を出す",
    "answer": "make progress",
    "distractors": [
      "do progress",
      "take progress",
      "build progress"
    ],
    "explanationJa": "progress は make と結びつくと「進捗を出す」という自然な英語になります。動詞を入れ替えると不自然になりやすいので、make progress を塊で覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "We made progress on the project this week.",
        "ja": "今週、そのプロジェクトは前に進みました。"
      },
      {
        "en": "She is making progress with her English study.",
        "ja": "彼女の英語学習は少しずつ進んでいます。"
      }
    ]
  },
  {
    "id": "v-make-a-suggestion",
    "category": "Core Verb",
    "jaPrompt": "提案する",
    "answer": "make a suggestion",
    "distractors": [
      "do a suggestion",
      "take a suggestion",
      "build a suggestion"
    ],
    "explanationJa": "a suggestion は make と結びつくと「提案する」という自然な英語になります。動詞を入れ替えると不自然になりやすいので、make a suggestion を塊で覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "She made a suggestion during the meeting.",
        "ja": "彼女は会議で改善案を出しました。"
      },
      {
        "en": "Can I make a suggestion about the schedule?",
        "ja": "スケジュールについて一つ提案してもいいですか。"
      }
    ]
  },
  {
    "id": "v-make-a-choice",
    "category": "Core Verb",
    "jaPrompt": "選択する",
    "answer": "make a choice",
    "distractors": [
      "do a choice",
      "take a choice",
      "build a choice"
    ],
    "explanationJa": "a choice は make と結びつくと「選択する」という自然な英語になります。動詞を入れ替えると不自然になりやすいので、make a choice を塊で覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "Customers can make a choice from three plans.",
        "ja": "顧客は3つのプランから選べます。"
      },
      {
        "en": "She had to make a choice between speed and quality.",
        "ja": "彼女は速さを優先するか品質を優先するかを選ばなければなりませんでした。"
      }
    ]
  },
  {
    "id": "v-make-a-complaint",
    "category": "Core Verb",
    "jaPrompt": "苦情を言う",
    "answer": "make a complaint",
    "distractors": [
      "do a complaint",
      "take a complaint",
      "build a complaint"
    ],
    "explanationJa": "a complaint は make と結びつくと「苦情を言う」という自然な英語になります。動詞を入れ替えると不自然になりやすいので、make a complaint を塊で覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "The customer made a complaint about the delivery delay.",
        "ja": "その顧客は配送の遅れについて苦情を言いました。"
      },
      {
        "en": "If the product is damaged, you can make a complaint.",
        "ja": "商品が破損している場合は、苦情を申し立てることができます。"
      }
    ]
  },
  {
    "id": "v-make-an-appointment",
    "category": "Core Verb",
    "jaPrompt": "予約・約束をする",
    "answer": "make an appointment",
    "distractors": [
      "do an appointment",
      "take an appointment",
      "build an appointment"
    ],
    "explanationJa": "an appointment は make と結びつくと「予約・約束をする」という自然な英語になります。動詞を入れ替えると不自然になりやすいので、make an appointment を塊で覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "I need to make an appointment with the doctor.",
        "ja": "医師の診察を予約する必要があります。"
      },
      {
        "en": "She made an appointment for next Monday.",
        "ja": "彼女は次の月曜日に予約を入れました。"
      }
    ]
  },
  {
    "id": "v-make-a-plan",
    "category": "Core Verb",
    "jaPrompt": "計画を立てる",
    "answer": "make a plan",
    "distractors": [
      "do a plan",
      "take a plan",
      "build a plan"
    ],
    "explanationJa": "a plan は make と結びつくと「計画を立てる」という自然な英語になります。動詞を入れ替えると不自然になりやすいので、make a plan を塊で覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "We made a plan for the next project.",
        "ja": "私たちは次のプロジェクトに向けて計画を立てました。"
      },
      {
        "en": "Let's make a plan before we start.",
        "ja": "始める前に計画を立てましょう。"
      }
    ]
  },
  {
    "id": "v-make-a-profit",
    "category": "Core Verb",
    "jaPrompt": "利益を出す",
    "answer": "make a profit",
    "distractors": [
      "do a profit",
      "take a profit",
      "build a profit"
    ],
    "explanationJa": "a profit は make と結びつくと「利益を出す」という自然な英語になります。動詞を入れ替えると不自然になりやすいので、make a profit を塊で覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "The company made a profit for the first time this year.",
        "ja": "その会社は今年初めて利益を出しました。"
      },
      {
        "en": "Small businesses need to make a profit to survive.",
        "ja": "小規模企業が存続するには利益を出す必要があります。"
      }
    ]
  },
  {
    "id": "v-make-a-request",
    "category": "Core Verb",
    "jaPrompt": "依頼する",
    "answer": "make a request",
    "distractors": [
      "do a request",
      "take a request",
      "build a request"
    ],
    "explanationJa": "a request は make と結びつくと「依頼する」という自然な英語になります。動詞を入れ替えると不自然になりやすいので、make a request を塊で覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "You can make a request through the online form.",
        "ja": "オンラインフォームから依頼できます。"
      },
      {
        "en": "She made a request for additional information.",
        "ja": "彼女は追加情報を依頼しました。"
      }
    ]
  },
  {
    "id": "v-make-a-promise",
    "category": "Core Verb",
    "jaPrompt": "約束する",
    "answer": "make a promise",
    "distractors": [
      "do a promise",
      "take a promise",
      "build a promise"
    ],
    "explanationJa": "a promise は make と結びつくと「約束する」という自然な英語になります。動詞を入れ替えると不自然になりやすいので、make a promise を塊で覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "He made a promise to call his parents.",
        "ja": "彼は両親に電話すると約束しました。"
      },
      {
        "en": "Don't make a promise you cannot keep.",
        "ja": "守れない約束はしないでください。"
      }
    ]
  },
  {
    "id": "v-make-a-difference",
    "category": "Core Verb",
    "jaPrompt": "違い・影響を生む",
    "answer": "make a difference",
    "distractors": [
      "do a difference",
      "take a difference",
      "build a difference"
    ],
    "explanationJa": "a difference は make と結びつくと「違い・影響を生む」という自然な英語になります。動詞を入れ替えると不自然になりやすいので、make a difference を塊で覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "Small changes can make a difference.",
        "ja": "小さな変更でも効果が出ることがあります。"
      },
      {
        "en": "Your support made a difference to the team.",
        "ja": "あなたの支援はチームにとって大きな助けになりました。"
      }
    ]
  },
  {
    "id": "v-make-a-reservation",
    "category": "Core Verb",
    "jaPrompt": "予約する",
    "answer": "make a reservation",
    "distractors": [
      "do a reservation",
      "take a reservation",
      "build a reservation"
    ],
    "explanationJa": "a reservation は make と結びつくと「予約する」という自然な英語になります。動詞を入れ替えると不自然になりやすいので、make a reservation を塊で覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "I made a reservation at the hotel.",
        "ja": "ホテルを予約しました。"
      },
      {
        "en": "Please make a reservation before you visit.",
        "ja": "訪問前に予約してください。"
      }
    ]
  },
  {
    "id": "v-make-a-phone-call",
    "category": "Core Verb",
    "jaPrompt": "電話する",
    "answer": "make a phone call",
    "distractors": [
      "do a phone call",
      "take a phone call",
      "build a phone call"
    ],
    "explanationJa": "a phone call は make と結びつくと「電話する」という自然な英語になります。動詞を入れ替えると不自然になりやすいので、make a phone call を塊で覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "I need to make a phone call before the meeting.",
        "ja": "会議の前に電話をかける必要があります。"
      },
      {
        "en": "She made a phone call to confirm the schedule.",
        "ja": "彼女は予定を確認するために電話をしました。"
      }
    ]
  },
  {
    "id": "v-make-a-list",
    "category": "Core Verb",
    "jaPrompt": "一覧を作る",
    "answer": "make a list",
    "distractors": [
      "do a list",
      "take a list",
      "build a list"
    ],
    "explanationJa": "a list は make と結びつくと「一覧を作る」という自然な英語になります。動詞を入れ替えると不自然になりやすいので、make a list を塊で覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "Let's make a list of required documents.",
        "ja": "必要な書類のリストを作りましょう。"
      },
      {
        "en": "She made a list before going shopping.",
        "ja": "彼女は買い物に行く前にリストを作りました。"
      }
    ]
  },
  {
    "id": "v-make-a-change",
    "category": "Core Verb",
    "jaPrompt": "変更する",
    "answer": "make a change",
    "distractors": [
      "do a change",
      "take a change",
      "build a change"
    ],
    "explanationJa": "a change は make と結びつくと「変更する」という自然な英語になります。動詞を入れ替えると不自然になりやすいので、make a change を塊で覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "We need to make a change to the schedule.",
        "ja": "スケジュールを変更する必要があります。"
      },
      {
        "en": "The team made a change after receiving feedback.",
        "ja": "チームはフィードバックを受けて変更しました。"
      }
    ]
  },
  {
    "id": "v-make-an-excuse",
    "category": "Core Verb",
    "jaPrompt": "言い訳をする",
    "answer": "make an excuse",
    "distractors": [
      "do an excuse",
      "take an excuse",
      "build an excuse"
    ],
    "explanationJa": "an excuse は make と結びつくと「言い訳をする」という自然な英語になります。動詞を入れ替えると不自然になりやすいので、make an excuse を塊で覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "He tried to make an excuse for being late.",
        "ja": "彼は遅刻した言い訳をしようとしました。"
      },
      {
        "en": "Don't make an excuse when you miss a deadline.",
        "ja": "締切に遅れたときに言い訳をしないでください。"
      }
    ]
  },
  {
    "id": "v-make-an-attempt",
    "category": "Core Verb",
    "jaPrompt": "試みる",
    "answer": "make an attempt",
    "distractors": [
      "do an attempt",
      "take an attempt",
      "build an attempt"
    ],
    "explanationJa": "an attempt は make と結びつくと「試みる」という自然な英語になります。動詞を入れ替えると不自然になりやすいので、make an attempt を塊で覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "She made an attempt to solve the problem.",
        "ja": "彼女はその問題を解決しようと試みました。"
      },
      {
        "en": "The team made an attempt to reduce costs.",
        "ja": "チームはコスト削減を試みました。"
      }
    ]
  },
  {
    "id": "v-make-a-contribution",
    "category": "Core Verb",
    "jaPrompt": "貢献する",
    "answer": "make a contribution",
    "distractors": [
      "do a contribution",
      "take a contribution",
      "build a contribution"
    ],
    "explanationJa": "a contribution は make と結びつくと「貢献する」という自然な英語になります。動詞を入れ替えると不自然になりやすいので、make a contribution を塊で覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "He made a contribution to the project.",
        "ja": "彼はそのプロジェクトに貢献しました。"
      },
      {
        "en": "Everyone can make a contribution in a different way.",
        "ja": "誰でもそれぞれの形で貢献できます。"
      }
    ]
  },
  {
    "id": "v-take-a-break",
    "category": "Core Verb",
    "jaPrompt": "休憩する",
    "answer": "take a break",
    "distractors": [
      "make a break",
      "do a break",
      "catch a break"
    ],
    "explanationJa": "a break は take と結びつくと「休憩する」という自然な英語になります。動詞を入れ替えると不自然になりやすいので、take a break を塊で覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "Let's take a break after this section.",
        "ja": "この部分が終わったら休憩しましょう。"
      },
      {
        "en": "She took a short break before the next meeting.",
        "ja": "彼女は次の会議の前に短い休憩を取りました。"
      }
    ]
  },
  {
    "id": "v-take-notes",
    "category": "Core Verb",
    "jaPrompt": "メモを取る",
    "answer": "take notes",
    "distractors": [
      "make notes",
      "do notes",
      "catch notes"
    ],
    "explanationJa": "notes は take と結びつくと「メモを取る」という自然な英語になります。動詞を入れ替えると不自然になりやすいので、take notes を塊で覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "Please take notes during the meeting.",
        "ja": "会議中にメモを取ってください。"
      },
      {
        "en": "She took notes while listening to the lecture.",
        "ja": "彼女は講義を聞きながらメモを取りました。"
      }
    ]
  },
  {
    "id": "v-take-responsibility",
    "category": "Core Verb",
    "jaPrompt": "責任を負う",
    "answer": "take responsibility",
    "distractors": [
      "make responsibility",
      "do responsibility",
      "catch responsibility"
    ],
    "explanationJa": "responsibility は take と結びつくと「責任を負う」という自然な英語になります。動詞を入れ替えると不自然になりやすいので、take responsibility を塊で覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "The manager took responsibility for the mistake.",
        "ja": "マネージャーはそのミスの責任を取りました。"
      },
      {
        "en": "You should take responsibility for your own work.",
        "ja": "自分の仕事には責任を持つべきです。"
      }
    ]
  },
  {
    "id": "v-take-action",
    "category": "Core Verb",
    "jaPrompt": "行動する",
    "answer": "take action",
    "distractors": [
      "make action",
      "do action",
      "catch action"
    ],
    "explanationJa": "action は take と結びつくと「行動する」という自然な英語になります。動詞を入れ替えると不自然になりやすいので、take action を塊で覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "We need to take action before the problem gets worse.",
        "ja": "問題が悪化する前に対応する必要があります。"
      },
      {
        "en": "The company took action to improve safety.",
        "ja": "会社は安全性を高めるために対策を取りました。"
      }
    ]
  },
  {
    "id": "v-take-advantage",
    "category": "Core Verb",
    "jaPrompt": "利点を利用する",
    "answer": "take advantage",
    "distractors": [
      "make advantage",
      "do advantage",
      "catch advantage"
    ],
    "explanationJa": "advantage は take と結びつくと「利点を利用する」という自然な英語になります。動詞を入れ替えると不自然になりやすいので、take advantage を塊で覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "You should take advantage of this opportunity.",
        "ja": "この機会を活用すべきです。"
      },
      {
        "en": "Many students take advantage of online lessons.",
        "ja": "多くの学生がオンライン授業を活用しています。"
      }
    ]
  },
  {
    "id": "v-take-part",
    "category": "Core Verb",
    "jaPrompt": "参加する",
    "answer": "take part",
    "distractors": [
      "make part",
      "do part",
      "catch part"
    ],
    "explanationJa": "part は take と結びつくと「参加する」という自然な英語になります。動詞を入れ替えると不自然になりやすいので、take part を塊で覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "She will take part in the training session.",
        "ja": "彼女はその研修に参加します。"
      },
      {
        "en": "Many employees took part in the survey.",
        "ja": "多くの従業員がその調査に参加しました。"
      }
    ]
  },
  {
    "id": "v-take-place",
    "category": "Core Verb",
    "jaPrompt": "発生する",
    "answer": "take place",
    "distractors": [
      "make place",
      "do place",
      "catch place"
    ],
    "explanationJa": "place は take と結びつくと「発生する」という自然な英語になります。動詞を入れ替えると不自然になりやすいので、take place を塊で覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "The meeting will take place on Friday.",
        "ja": "会議は金曜日に行われます。"
      },
      {
        "en": "The event took place in Tokyo last year.",
        "ja": "そのイベントは昨年東京で開催されました。"
      }
    ]
  },
  {
    "id": "v-take-care",
    "category": "Core Verb",
    "jaPrompt": "世話をする・注意する",
    "answer": "take care",
    "distractors": [
      "make care",
      "do care",
      "catch care"
    ],
    "explanationJa": "care は take と結びつくと「世話をする・注意する」という自然な英語になります。動詞を入れ替えると不自然になりやすいので、take care を塊で覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "Please take care of this customer request.",
        "ja": "この顧客からの依頼に対応してください。"
      },
      {
        "en": "She takes care of her younger brother after school.",
        "ja": "彼女は放課後、弟の世話をしています。"
      }
    ]
  },
  {
    "id": "v-take-a-risk",
    "category": "Core Verb",
    "jaPrompt": "リスクを取る",
    "answer": "take a risk",
    "distractors": [
      "make a risk",
      "do a risk",
      "catch a risk"
    ],
    "explanationJa": "a risk は take と結びつくと「リスクを取る」という自然な英語になります。動詞を入れ替えると不自然になりやすいので、take a risk を塊で覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "Starting a new business means taking a risk.",
        "ja": "新しい事業を始めることはリスクを取るということです。"
      },
      {
        "en": "He took a risk and changed jobs.",
        "ja": "彼はリスクを取って転職しました。"
      }
    ]
  },
  {
    "id": "v-take-a-look",
    "category": "Core Verb",
    "jaPrompt": "確認する",
    "answer": "take a look",
    "distractors": [
      "make a look",
      "do a look",
      "catch a look"
    ],
    "explanationJa": "a look は take と結びつくと「確認する」という自然な英語になります。動詞を入れ替えると不自然になりやすいので、take a look を塊で覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "Can you take a look at this report?",
        "ja": "この報告書を確認してもらえますか。"
      },
      {
        "en": "She took a look at the numbers before the meeting.",
        "ja": "彼女は会議の前に数字を確認しました。"
      }
    ]
  },
  {
    "id": "v-take-time",
    "category": "Core Verb",
    "jaPrompt": "時間がかかる",
    "answer": "take time",
    "distractors": [
      "make time",
      "do time",
      "catch time"
    ],
    "explanationJa": "time は take と結びつくと「時間がかかる」という自然な英語になります。動詞を入れ替えると不自然になりやすいので、take time を塊で覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "Learning a language takes time.",
        "ja": "言語を学ぶには時間がかかります。"
      },
      {
        "en": "It took time to solve the problem.",
        "ja": "その問題を解決するには時間がかかりました。"
      }
    ]
  },
  {
    "id": "v-take-a-test",
    "category": "Core Verb",
    "jaPrompt": "試験を受ける",
    "answer": "take a test",
    "distractors": [
      "make a test",
      "do a test",
      "catch a test"
    ],
    "explanationJa": "a test は take と結びつくと「試験を受ける」という自然な英語になります。動詞を入れ替えると不自然になりやすいので、take a test を塊で覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "I will take a test next Monday.",
        "ja": "来週の月曜日に試験を受けます。"
      },
      {
        "en": "She took a test to check her English level.",
        "ja": "彼女は英語力を確認するために試験を受けました。"
      }
    ]
  },
  {
    "id": "v-take-a-chance",
    "category": "Core Verb",
    "jaPrompt": "チャンスをつかむ",
    "answer": "take a chance",
    "distractors": [
      "make a chance",
      "do a chance",
      "catch a chance"
    ],
    "explanationJa": "a chance は take と結びつくと「チャンスをつかむ」という自然な英語になります。動詞を入れ替えると不自然になりやすいので、take a chance を塊で覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "He decided to take a chance and apply for the job.",
        "ja": "彼は思い切ってその仕事に応募することにしました。"
      },
      {
        "en": "Sometimes you have to take a chance.",
        "ja": "ときには思い切って挑戦する必要があります。"
      }
    ]
  },
  {
    "id": "v-take-a-seat",
    "category": "Core Verb",
    "jaPrompt": "席に座る",
    "answer": "take a seat",
    "distractors": [
      "make a seat",
      "do a seat",
      "catch a seat"
    ],
    "explanationJa": "a seat は take と結びつくと「席に座る」という自然な英語になります。動詞を入れ替えると不自然になりやすいので、take a seat を塊で覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "Please take a seat near the window.",
        "ja": "窓の近くの席にお座りください。"
      },
      {
        "en": "He took a seat at the back of the room.",
        "ja": "彼は部屋の後ろの席に座りました。"
      }
    ]
  },
  {
    "id": "v-take-a-shower",
    "category": "Core Verb",
    "jaPrompt": "シャワーを浴びる",
    "answer": "take a shower",
    "distractors": [
      "make a shower",
      "do a shower",
      "catch a shower"
    ],
    "explanationJa": "a shower は take と結びつくと「シャワーを浴びる」という自然な英語になります。動詞を入れ替えると不自然になりやすいので、take a shower を塊で覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "I usually take a shower before breakfast.",
        "ja": "私はたいてい朝食前にシャワーを浴びます。"
      },
      {
        "en": "She took a shower after the workout.",
        "ja": "彼女は運動の後にシャワーを浴びました。"
      }
    ]
  },
  {
    "id": "v-take-a-deep-breath",
    "category": "Core Verb",
    "jaPrompt": "深呼吸する",
    "answer": "take a deep breath",
    "distractors": [
      "make a deep breath",
      "do a deep breath",
      "catch a deep breath"
    ],
    "explanationJa": "a deep breath は take と結びつくと「深呼吸する」という自然な英語になります。動詞を入れ替えると不自然になりやすいので、take a deep breath を塊で覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "Take a deep breath before you start speaking.",
        "ja": "話し始める前に深呼吸してください。"
      },
      {
        "en": "She took a deep breath and opened the door.",
        "ja": "彼女は深呼吸してドアを開けました。"
      }
    ]
  },
  {
    "id": "v-take-control",
    "category": "Core Verb",
    "jaPrompt": "主導権を握る",
    "answer": "take control",
    "distractors": [
      "make control",
      "do control",
      "catch control"
    ],
    "explanationJa": "control は take と結びつくと「主導権を握る」という自然な英語になります。動詞を入れ替えると不自然になりやすいので、take control を塊で覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "The new leader took control of the project.",
        "ja": "新しいリーダーがそのプロジェクトの主導権を握りました。"
      },
      {
        "en": "You need to take control of your schedule.",
        "ja": "自分の予定をきちんと管理する必要があります。"
      }
    ]
  },
  {
    "id": "v-take-effect",
    "category": "Core Verb",
    "jaPrompt": "効力を持つ",
    "answer": "take effect",
    "distractors": [
      "make effect",
      "do effect",
      "catch effect"
    ],
    "explanationJa": "effect は take と結びつくと「効力を持つ」という自然な英語になります。動詞を入れ替えると不自然になりやすいので、take effect を塊で覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "The new rule will take effect next month.",
        "ja": "新しい規則は来月から有効になります。"
      },
      {
        "en": "The change took effect immediately.",
        "ja": "その変更はすぐに適用されました。"
      }
    ]
  },
  {
    "id": "v-take-measures",
    "category": "Core Verb",
    "jaPrompt": "対策を講じる",
    "answer": "take measures",
    "distractors": [
      "make measures",
      "do measures",
      "catch measures"
    ],
    "explanationJa": "measures は take と結びつくと「対策を講じる」という自然な英語になります。動詞を入れ替えると不自然になりやすいので、take measures を塊で覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "The company will take measures to improve safety.",
        "ja": "会社は安全性を高めるための対策を講じます。"
      },
      {
        "en": "We took measures to prevent the same mistake.",
        "ja": "同じミスを防ぐために対策を取りました。"
      }
    ]
  },
  {
    "id": "v-have-a-meeting",
    "category": "Core Verb",
    "jaPrompt": "会議がある",
    "answer": "have a meeting",
    "distractors": [
      "make a meeting",
      "do a meeting",
      "get a meeting"
    ],
    "explanationJa": "a meeting は have と結びつくと「会議がある」という自然な英語になります。動詞を入れ替えると不自然になりやすいので、have a meeting を塊で覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "We have a meeting at ten tomorrow.",
        "ja": "明日10時に会議があります。"
      },
      {
        "en": "She had a meeting with the client.",
        "ja": "彼女は顧客と会議をしました。"
      }
    ]
  },
  {
    "id": "v-have-a-problem",
    "category": "Core Verb",
    "jaPrompt": "問題がある",
    "answer": "have a problem",
    "distractors": [
      "make a problem",
      "do a problem",
      "get a problem"
    ],
    "explanationJa": "a problem は have と結びつくと「問題がある」という自然な英語になります。動詞を入れ替えると不自然になりやすいので、have a problem を塊で覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "We have a problem with the new system.",
        "ja": "新しいシステムに問題があります。"
      },
      {
        "en": "Please tell me if you have a problem.",
        "ja": "問題があれば教えてください。"
      }
    ]
  },
  {
    "id": "v-have-an-idea",
    "category": "Core Verb",
    "jaPrompt": "考えがある",
    "answer": "have an idea",
    "distractors": [
      "make an idea",
      "do an idea",
      "get an idea"
    ],
    "explanationJa": "an idea は have と結びつくと「考えがある」という自然な英語になります。動詞を入れ替えると不自然になりやすいので、have an idea を塊で覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "I have an idea for the next lesson.",
        "ja": "次のレッスンについて一つアイデアがあります。"
      },
      {
        "en": "She had an idea during the meeting.",
        "ja": "彼女は会議中にアイデアを思いつきました。"
      }
    ]
  },
  {
    "id": "v-have-a-chance",
    "category": "Core Verb",
    "jaPrompt": "機会がある",
    "answer": "have a chance",
    "distractors": [
      "make a chance",
      "do a chance",
      "get a chance"
    ],
    "explanationJa": "a chance は have と結びつくと「機会がある」という自然な英語になります。動詞を入れ替えると不自然になりやすいので、have a chance を塊で覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "You will have a chance to ask questions.",
        "ja": "質問する機会があります。"
      },
      {
        "en": "I had a chance to speak with the manager.",
        "ja": "マネージャーと話す機会がありました。"
      }
    ]
  },
  {
    "id": "v-have-a-conversation",
    "category": "Core Verb",
    "jaPrompt": "会話がある",
    "answer": "have a conversation",
    "distractors": [
      "make a conversation",
      "do a conversation",
      "get a conversation"
    ],
    "explanationJa": "a conversation は have と結びつくと「会話がある」という自然な英語になります。動詞を入れ替えると不自然になりやすいので、have a conversation を塊で覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "We had a conversation about the project.",
        "ja": "私たちはそのプロジェクトについて話し合いました。"
      },
      {
        "en": "She had a conversation with her teammate.",
        "ja": "彼女はチームメイトと会話しました。"
      }
    ]
  },
  {
    "id": "v-have-an-effect",
    "category": "Core Verb",
    "jaPrompt": "効果がある",
    "answer": "have an effect",
    "distractors": [
      "make an effect",
      "do an effect",
      "get an effect"
    ],
    "explanationJa": "an effect は have と結びつくと「効果がある」という自然な英語になります。動詞を入れ替えると不自然になりやすいので、have an effect を塊で覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "The change had an effect on sales.",
        "ja": "その変更は売上に影響しました。"
      },
      {
        "en": "Training can have an effect on performance.",
        "ja": "研修は成果に影響することがあります。"
      }
    ]
  },
  {
    "id": "v-have-an-impact",
    "category": "Core Verb",
    "jaPrompt": "影響がある",
    "answer": "have an impact",
    "distractors": [
      "make an impact",
      "do an impact",
      "get an impact"
    ],
    "explanationJa": "an impact は have と結びつくと「影響がある」という自然な英語になります。動詞を入れ替えると不自然になりやすいので、have an impact を塊で覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "The update had an impact on the workflow.",
        "ja": "その更新は作業手順に影響しました。"
      },
      {
        "en": "Small changes can have an impact.",
        "ja": "小さな変更でも影響を与えることがあります。"
      }
    ]
  },
  {
    "id": "v-have-breakfast",
    "category": "Core Verb",
    "jaPrompt": "朝食をとる",
    "answer": "have breakfast",
    "distractors": [
      "make breakfast",
      "do breakfast",
      "get breakfast"
    ],
    "explanationJa": "breakfast は have と結びつくと「朝食をとる」という自然な英語になります。動詞を入れ替えると不自然になりやすいので、have breakfast を塊で覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "I usually have breakfast at seven.",
        "ja": "私はたいてい7時に朝食をとります。"
      },
      {
        "en": "She had breakfast before work.",
        "ja": "彼女は仕事の前に朝食をとりました。"
      }
    ]
  },
  {
    "id": "v-have-difficulty",
    "category": "Core Verb",
    "jaPrompt": "苦労する",
    "answer": "have difficulty",
    "distractors": [
      "make difficulty",
      "do difficulty",
      "get difficulty"
    ],
    "explanationJa": "difficulty は have と結びつくと「苦労する」という自然な英語になります。動詞を入れ替えると不自然になりやすいので、have difficulty を塊で覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "I have difficulty understanding this rule.",
        "ja": "この規則を理解するのに苦労しています。"
      },
      {
        "en": "She had difficulty opening the file.",
        "ja": "彼女はそのファイルを開くのに苦労しました。"
      }
    ]
  },
  {
    "id": "v-have-fun",
    "category": "Core Verb",
    "jaPrompt": "楽しい時間を過ごす",
    "answer": "have fun",
    "distractors": [
      "make fun",
      "do fun",
      "get fun"
    ],
    "explanationJa": "fun は have と結びつくと「楽しい時間を過ごす」という自然な英語になります。動詞を入れ替えると不自然になりやすいので、have fun を塊で覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "We had fun during the event.",
        "ja": "イベント中は楽しく過ごしました。"
      },
      {
        "en": "I hope you have fun learning English.",
        "ja": "英語学習を楽しんでください。"
      }
    ]
  },
  {
    "id": "v-have-access",
    "category": "Core Verb",
    "jaPrompt": "アクセスできる",
    "answer": "have access",
    "distractors": [
      "make access",
      "do access",
      "get access"
    ],
    "explanationJa": "access は have と結びつくと「アクセスできる」という自然な英語になります。動詞を入れ替えると不自然になりやすいので、have access を塊で覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "Do you have access to this folder?",
        "ja": "このフォルダにアクセスできますか。"
      },
      {
        "en": "Only managers have access to the report.",
        "ja": "その報告書にアクセスできるのはマネージャーだけです。"
      }
    ]
  },
  {
    "id": "v-have-experience",
    "category": "Core Verb",
    "jaPrompt": "経験がある",
    "answer": "have experience",
    "distractors": [
      "make experience",
      "do experience",
      "get experience"
    ],
    "explanationJa": "experience は have と結びつくと「経験がある」という自然な英語になります。動詞を入れ替えると不自然になりやすいので、have experience を塊で覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "She has experience in customer support.",
        "ja": "彼女は顧客サポートの経験があります。"
      },
      {
        "en": "Do you have experience with this tool?",
        "ja": "このツールを使った経験はありますか。"
      }
    ]
  },
  {
    "id": "v-have-a-look",
    "category": "Core Verb",
    "jaPrompt": "確認する",
    "answer": "have a look",
    "distractors": [
      "make a look",
      "do a look",
      "get a look"
    ],
    "explanationJa": "a look は have と結びつくと「確認する」という自然な英語になります。動詞を入れ替えると不自然になりやすいので、have a look を塊で覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "Can you have a look at this file?",
        "ja": "このファイルを確認してもらえますか。"
      },
      {
        "en": "I had a look at the report.",
        "ja": "その報告書を確認しました。"
      }
    ]
  },
  {
    "id": "v-have-a-rest",
    "category": "Core Verb",
    "jaPrompt": "休む",
    "answer": "have a rest",
    "distractors": [
      "make a rest",
      "do a rest",
      "get a rest"
    ],
    "explanationJa": "a rest は have と結びつくと「休む」という自然な英語になります。動詞を入れ替えると不自然になりやすいので、have a rest を塊で覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "You should have a rest after lunch.",
        "ja": "昼食後に少し休んだほうがいいです。"
      },
      {
        "en": "She had a rest before the meeting.",
        "ja": "彼女は会議の前に休憩しました。"
      }
    ]
  },
  {
    "id": "v-have-a-good-time",
    "category": "Core Verb",
    "jaPrompt": "楽しい時間を過ごす",
    "answer": "have a good time",
    "distractors": [
      "make a good time",
      "do a good time",
      "get a good time"
    ],
    "explanationJa": "a good time は have と結びつくと「楽しい時間を過ごす」という自然な英語になります。動詞を入れ替えると不自然になりやすいので、have a good time を塊で覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "We had a good time at the event.",
        "ja": "イベントで楽しい時間を過ごしました。"
      },
      {
        "en": "I hope you have a good time.",
        "ja": "楽しい時間を過ごしてください。"
      }
    ]
  },
  {
    "id": "v-have-a-headache",
    "category": "Core Verb",
    "jaPrompt": "頭痛がする",
    "answer": "have a headache",
    "distractors": [
      "make a headache",
      "do a headache",
      "get a headache"
    ],
    "explanationJa": "a headache は have と結びつくと「頭痛がする」という自然な英語になります。動詞を入れ替えると不自然になりやすいので、have a headache を塊で覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "I have a headache today.",
        "ja": "今日は頭が痛いです。"
      },
      {
        "en": "She had a headache after the long meeting.",
        "ja": "長い会議の後、彼女は頭痛がしました。"
      }
    ]
  },
  {
    "id": "v-have-confidence",
    "category": "Core Verb",
    "jaPrompt": "自信がある",
    "answer": "have confidence",
    "distractors": [
      "make confidence",
      "do confidence",
      "get confidence"
    ],
    "explanationJa": "confidence は have と結びつくと「自信がある」という自然な英語になります。動詞を入れ替えると不自然になりやすいので、have confidence を塊で覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "She has confidence in her English.",
        "ja": "彼女は自分の英語に自信があります。"
      },
      {
        "en": "Practice helps you have confidence.",
        "ja": "練習すると自信がつきます。"
      }
    ]
  },
  {
    "id": "v-have-permission",
    "category": "Core Verb",
    "jaPrompt": "許可がある",
    "answer": "have permission",
    "distractors": [
      "make permission",
      "do permission",
      "get permission"
    ],
    "explanationJa": "permission は have と結びつくと「許可がある」という自然な英語になります。動詞を入れ替えると不自然になりやすいので、have permission を塊で覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "Do you have permission to access this folder?",
        "ja": "このフォルダにアクセスする許可はありますか。"
      },
      {
        "en": "We need to have permission before sharing the file.",
        "ja": "そのファイルを共有する前に許可が必要です。"
      }
    ]
  },
  {
    "id": "v-have-trouble",
    "category": "Core Verb",
    "jaPrompt": "困っている",
    "answer": "have trouble",
    "distractors": [
      "make trouble",
      "do trouble",
      "get trouble"
    ],
    "explanationJa": "trouble は have と結びつくと「困っている」という自然な英語になります。動詞を入れ替えると不自然になりやすいので、have trouble を塊で覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "I have trouble logging in.",
        "ja": "ログインできずに困っています。"
      },
      {
        "en": "She had trouble finding the right file.",
        "ja": "彼女は正しいファイルを見つけるのに苦労しました。"
      }
    ]
  },
  {
    "id": "v-have-a-point",
    "category": "Core Verb",
    "jaPrompt": "一理ある",
    "answer": "have a point",
    "distractors": [
      "make a point",
      "do a point",
      "get a point"
    ],
    "explanationJa": "a point は have と結びつくと「一理ある」という自然な英語になります。動詞を入れ替えると不自然になりやすいので、have a point を塊で覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "You have a point about the schedule.",
        "ja": "スケジュールについては一理あります。"
      },
      {
        "en": "He had a point, so we changed the plan.",
        "ja": "彼の意見には一理あったので、計画を変更しました。"
      }
    ]
  },
  {
    "id": "v-do-homework",
    "category": "Core Verb",
    "jaPrompt": "宿題をする",
    "answer": "do homework",
    "distractors": [
      "make homework",
      "take homework",
      "play homework"
    ],
    "explanationJa": "homework は do と結びつくと「宿題をする」という自然な英語になります。動詞を入れ替えると不自然になりやすいので、do homework を塊で覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "I do homework after dinner every night.",
        "ja": "私は毎晩、夕食の後に宿題をします。"
      },
      {
        "en": "The children did their homework before watching TV.",
        "ja": "子どもたちはテレビを見る前に宿題を済ませました。"
      }
    ]
  },
  {
    "id": "v-do-business",
    "category": "Core Verb",
    "jaPrompt": "取引する",
    "answer": "do business",
    "distractors": [
      "make business",
      "take business",
      "play business"
    ],
    "explanationJa": "business は do と結びつくと「取引する」という自然な英語になります。動詞を入れ替えると不自然になりやすいので、do business を塊で覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "Our company does business with clients overseas.",
        "ja": "私たちの会社は海外の顧客と取引しています。"
      },
      {
        "en": "It is difficult to do business without trust.",
        "ja": "信頼がなければ取引を続けるのは難しいです。"
      }
    ]
  },
  {
    "id": "v-do-research",
    "category": "Core Verb",
    "jaPrompt": "研究する",
    "answer": "do research",
    "distractors": [
      "make research",
      "take research",
      "play research"
    ],
    "explanationJa": "research は do と結びつくと「研究する」という自然な英語になります。動詞を入れ替えると不自然になりやすいので、do research を塊で覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "She does research on language learning.",
        "ja": "彼女は語学学習について研究しています。"
      },
      {
        "en": "We need to do more research before making a decision.",
        "ja": "決定する前に、さらに調査する必要があります。"
      }
    ]
  },
  {
    "id": "v-do-the-dishes",
    "category": "Core Verb",
    "jaPrompt": "皿を洗う",
    "answer": "do the dishes",
    "distractors": [
      "make the dishes",
      "take the dishes",
      "play the dishes"
    ],
    "explanationJa": "the dishes は do と結びつくと「皿を洗う」という自然な英語になります。動詞を入れ替えると不自然になりやすいので、do the dishes を塊で覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "I will do the dishes after dinner.",
        "ja": "夕食の後で私が皿を洗います。"
      },
      {
        "en": "He did the dishes while she cleaned the table.",
        "ja": "彼女がテーブルを片付けている間、彼は皿を洗いました。"
      }
    ]
  },
  {
    "id": "v-do-your-best",
    "category": "Core Verb",
    "jaPrompt": "最善を尽くす",
    "answer": "do your best",
    "distractors": [
      "make your best",
      "take your best",
      "play your best"
    ],
    "explanationJa": "your best は do と結びつくと「最善を尽くす」という自然な英語になります。動詞を入れ替えると不自然になりやすいので、do your best を塊で覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "Please do your best on the test.",
        "ja": "試験では全力を尽くしてください。"
      },
      {
        "en": "She did her best during the presentation.",
        "ja": "彼女はプレゼンで精一杯頑張りました。"
      }
    ]
  },
  {
    "id": "v-do-exercise",
    "category": "Core Verb",
    "jaPrompt": "運動する",
    "answer": "do exercise",
    "distractors": [
      "make exercise",
      "take exercise",
      "play exercise"
    ],
    "explanationJa": "exercise は do と結びつくと「運動する」という自然な英語になります。動詞を入れ替えると不自然になりやすいので、do exercise を塊で覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "I try to do exercise three times a week.",
        "ja": "私は週に3回は運動するようにしています。"
      },
      {
        "en": "Doing exercise in the morning helps me focus.",
        "ja": "朝に運動すると集中しやすくなります。"
      }
    ]
  },
  {
    "id": "v-do-a-favor",
    "category": "Core Verb",
    "jaPrompt": "頼みを聞く",
    "answer": "do a favor",
    "distractors": [
      "make a favor",
      "take a favor",
      "play a favor"
    ],
    "explanationJa": "a favor は do と結びつくと「頼みを聞く」という自然な英語になります。動詞を入れ替えると不自然になりやすいので、do a favor を塊で覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "Could you do me a favor and check this file?",
        "ja": "お願いがあるのですが、このファイルを確認してもらえますか。"
      },
      {
        "en": "She did him a favor by calling the office.",
        "ja": "彼女は彼のために会社へ電話してあげました。"
      }
    ]
  },
  {
    "id": "v-do-damage",
    "category": "Core Verb",
    "jaPrompt": "損害を与える",
    "answer": "do damage",
    "distractors": [
      "make damage",
      "take damage",
      "play damage"
    ],
    "explanationJa": "damage は do と結びつくと「損害を与える」という自然な英語になります。動詞を入れ替えると不自然になりやすいので、do damage を塊で覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "The storm did damage to many houses.",
        "ja": "嵐で多くの家が被害を受けました。"
      },
      {
        "en": "A small mistake can do damage to customer trust.",
        "ja": "小さなミスが顧客の信頼を損なうことがあります。"
      }
    ]
  },
  {
    "id": "v-do-work",
    "category": "Core Verb",
    "jaPrompt": "仕事をする",
    "answer": "do work",
    "distractors": [
      "make work",
      "take work",
      "play work"
    ],
    "explanationJa": "work は do と結びつくと「仕事をする」という自然な英語になります。動詞を入れ替えると不自然になりやすいので、do work を塊で覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "I do most of my work in the morning.",
        "ja": "私は仕事の大半を午前中に片付けます。"
      },
      {
        "en": "It is easier to do focused work in a quiet room.",
        "ja": "静かな部屋の方が集中して作業しやすいです。"
      }
    ]
  },
  {
    "id": "v-do-a-task",
    "category": "Core Verb",
    "jaPrompt": "作業する",
    "answer": "do a task",
    "distractors": [
      "make a task",
      "take a task",
      "play a task"
    ],
    "explanationJa": "a task は do と結びつくと「作業する」という自然な英語になります。動詞を入れ替えると不自然になりやすいので、do a task を塊で覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "The robot can do a simple task repeatedly.",
        "ja": "そのロボットは簡単な作業を繰り返し行えます。"
      },
      {
        "en": "Please do this task before you open the next file.",
        "ja": "次のファイルを開く前に、この作業を済ませてください。"
      }
    ]
  },
  {
    "id": "v-do-the-shopping",
    "category": "Core Verb",
    "jaPrompt": "買い物をする",
    "answer": "do the shopping",
    "distractors": [
      "make the shopping",
      "take the shopping",
      "play the shopping"
    ],
    "explanationJa": "the shopping は do と結びつくと「買い物をする」という自然な英語になります。動詞を入れ替えると不自然になりやすいので、do the shopping を塊で覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "I usually do the shopping on Saturday morning.",
        "ja": "私はたいてい土曜の朝に買い物をします。"
      },
      {
        "en": "She did the shopping on her way home.",
        "ja": "彼女は帰宅途中に買い物を済ませました。"
      }
    ]
  },
  {
    "id": "v-do-the-laundry",
    "category": "Core Verb",
    "jaPrompt": "洗濯する",
    "answer": "do the laundry",
    "distractors": [
      "make the laundry",
      "take the laundry",
      "play the laundry"
    ],
    "explanationJa": "the laundry は do と結びつくと「洗濯する」という自然な英語になります。動詞を入れ替えると不自然になりやすいので、do the laundry を塊で覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "I need to do the laundry this evening.",
        "ja": "今晩、洗濯をしなければなりません。"
      },
      {
        "en": "He did the laundry before leaving for work.",
        "ja": "彼は仕事に出かける前に洗濯を済ませました。"
      }
    ]
  },
  {
    "id": "v-do-the-cleaning",
    "category": "Core Verb",
    "jaPrompt": "掃除する",
    "answer": "do the cleaning",
    "distractors": [
      "make the cleaning",
      "take the cleaning",
      "play the cleaning"
    ],
    "explanationJa": "the cleaning は do と結びつくと「掃除する」という自然な英語になります。動詞を入れ替えると不自然になりやすいので、do the cleaning を塊で覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "We do the cleaning every Friday afternoon.",
        "ja": "私たちは毎週金曜の午後に掃除をします。"
      },
      {
        "en": "She did the cleaning before the guests arrived.",
        "ja": "彼女はお客さんが来る前に掃除を済ませました。"
      }
    ]
  },
  {
    "id": "v-do-a-course",
    "category": "Core Verb",
    "jaPrompt": "講座を受ける",
    "answer": "do a course",
    "distractors": [
      "make a course",
      "take a course",
      "play a course"
    ],
    "explanationJa": "a course は do と結びつくと「講座を受ける」という自然な英語になります。動詞を入れ替えると不自然になりやすいので、do a course を塊で覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "She decided to do a course in business English.",
        "ja": "彼女はビジネス英語の講座を受けることにしました。"
      },
      {
        "en": "She had to do a course after work.",
        "ja": "彼女は仕事の後で講座を受ける必要がありました。"
      }
    ]
  },
  {
    "id": "v-do-harm",
    "category": "Core Verb",
    "jaPrompt": "害を及ぼす",
    "answer": "do harm",
    "distractors": [
      "make harm",
      "take harm",
      "play harm"
    ],
    "explanationJa": "harm は do と結びつくと「害を及ぼす」という自然な英語になります。動詞を入れ替えると不自然になりやすいので、do harm を塊で覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "Too much stress can do harm to your health.",
        "ja": "過度なストレスは健康に悪影響を及ぼすことがあります。"
      },
      {
        "en": "A small mistake can do serious harm in this system.",
        "ja": "このシステムでは小さなミスが大きな被害につながることがあります。"
      }
    ]
  },
  {
    "id": "v-do-well",
    "category": "Core Verb",
    "jaPrompt": "うまくやる",
    "answer": "do well",
    "distractors": [
      "make well",
      "take well",
      "play well"
    ],
    "explanationJa": "well は do と結びつくと「うまくやる」という自然な英語になります。動詞を入れ替えると不自然になりやすいので、do well を塊で覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "She did well in the interview.",
        "ja": "彼女は面接でうまく受け答えできました。"
      },
      {
        "en": "The team did well under pressure.",
        "ja": "そのチームはプレッシャーの中でもよくやりました。"
      }
    ]
  },
  {
    "id": "v-do-badly",
    "category": "Core Verb",
    "jaPrompt": "悪くやる",
    "answer": "do badly",
    "distractors": [
      "make badly",
      "take badly",
      "play badly"
    ],
    "explanationJa": "badly は do と結びつくと「悪くやる」という自然な英語になります。動詞を入れ替えると不自然になりやすいので、do badly を塊で覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "He did badly on the first test.",
        "ja": "彼は最初のテストの出来がよくありませんでした。"
      },
      {
        "en": "The company did badly during the recession.",
        "ja": "その会社は不況の間、業績が振るいませんでした。"
      }
    ]
  },
  {
    "id": "v-do-a-job",
    "category": "Core Verb",
    "jaPrompt": "仕事をする",
    "answer": "do a job",
    "distractors": [
      "make a job",
      "take a job",
      "play a job"
    ],
    "explanationJa": "a job は do と結びつくと「仕事をする」という自然な英語になります。動詞を入れ替えると不自然になりやすいので、do a job を塊で覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "She did a good job on the report.",
        "ja": "彼女はその報告書をうまく仕上げました。"
      },
      {
        "en": "The repair worker did a careful job.",
        "ja": "修理担当者は丁寧な仕事をしました。"
      }
    ]
  },
  {
    "id": "v-do-the-right-thing",
    "category": "Core Verb",
    "jaPrompt": "正しいことをする",
    "answer": "do the right thing",
    "distractors": [
      "make the right thing",
      "take the right thing",
      "play the right thing"
    ],
    "explanationJa": "the right thing は do と結びつくと「正しいことをする」という自然な英語になります。動詞を入れ替えると不自然になりやすいので、do the right thing を塊で覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "It is not always easy to do the right thing.",
        "ja": "正しいことをするのは、いつも簡単とは限りません。"
      },
      {
        "en": "He tried to do the right thing for the customer.",
        "ja": "彼は顧客のために正しい対応をしようとしました。"
      }
    ]
  },
  {
    "id": "v-do-nothing",
    "category": "Core Verb",
    "jaPrompt": "何もしない",
    "answer": "do nothing",
    "distractors": [
      "make nothing",
      "take nothing",
      "play nothing"
    ],
    "explanationJa": "nothing は do と結びつくと「何もしない」という自然な英語になります。動詞を入れ替えると不自然になりやすいので、do nothing を塊で覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "If we do nothing, the problem will get worse.",
        "ja": "何もしなければ、問題は悪化します。"
      },
      {
        "en": "She decided to do nothing until she had more information.",
        "ja": "彼女は情報が増えるまで何もしないことにしました。"
      }
    ]
  },
  {
    "id": "v-give-advice",
    "category": "Business",
    "jaPrompt": "助言を与える",
    "answer": "give advice",
    "distractors": [
      "make advice",
      "take advice",
      "send advice"
    ],
    "explanationJa": "advice は give と結びつくと「助言を与える」という自然な英語になります。動詞を入れ替えると不自然になりやすいので、give advice を塊で覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "My teacher gave me advice about studying abroad.",
        "ja": "先生は留学について私に助言してくれました。"
      },
      {
        "en": "He often gives practical advice to new employees.",
        "ja": "彼は新入社員によく実践的な助言をします。"
      }
    ]
  },
  {
    "id": "v-give-a-presentation",
    "category": "Business",
    "jaPrompt": "プレゼンをする",
    "answer": "give a presentation",
    "distractors": [
      "make a presentation",
      "take a presentation",
      "send a presentation"
    ],
    "explanationJa": "a presentation は give と結びつくと「プレゼンをする」という自然な英語になります。動詞を入れ替えると不自然になりやすいので、give a presentation を塊で覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "She will give a presentation at the conference.",
        "ja": "彼女はその会議でプレゼンを行う予定です。"
      },
      {
        "en": "I gave a short presentation about our project.",
        "ja": "私は私たちのプロジェクトについて短い発表をしました。"
      }
    ]
  },
  {
    "id": "v-give-a-speech",
    "category": "Business",
    "jaPrompt": "スピーチをする",
    "answer": "give a speech",
    "distractors": [
      "make a speech",
      "take a speech",
      "send a speech"
    ],
    "explanationJa": "a speech は give と結びつくと「スピーチをする」という自然な英語になります。動詞を入れ替えると不自然になりやすいので、give a speech を塊で覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "The mayor gave a speech at the ceremony.",
        "ja": "市長は式典でスピーチをしました。"
      },
      {
        "en": "He gave a speech about the future of education.",
        "ja": "彼は教育の未来について演説しました。"
      }
    ]
  },
  {
    "id": "v-give-a-reason",
    "category": "Business",
    "jaPrompt": "理由を与える",
    "answer": "give a reason",
    "distractors": [
      "make a reason",
      "take a reason",
      "send a reason"
    ],
    "explanationJa": "a reason は give と結びつくと「理由を与える」という自然な英語になります。動詞を入れ替えると不自然になりやすいので、give a reason を塊で覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "Please give a reason for your answer.",
        "ja": "回答の理由を述べてください。"
      },
      {
        "en": "She did not give a clear reason for the delay.",
        "ja": "彼女は遅れた理由をはっきり説明しませんでした。"
      }
    ]
  },
  {
    "id": "v-give-an-example",
    "category": "Business",
    "jaPrompt": "例を与える",
    "answer": "give an example",
    "distractors": [
      "make an example",
      "take an example",
      "send an example"
    ],
    "explanationJa": "an example は give と結びつくと「例を与える」という自然な英語になります。動詞を入れ替えると不自然になりやすいので、give an example を塊で覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "Can you give an example of this rule?",
        "ja": "このルールの例を挙げてもらえますか。"
      },
      {
        "en": "The teacher gave an example to make the point clear.",
        "ja": "先生は要点をわかりやすくするために例を示しました。"
      }
    ]
  },
  {
    "id": "v-give-permission",
    "category": "Business",
    "jaPrompt": "許可を与える",
    "answer": "give permission",
    "distractors": [
      "make permission",
      "take permission",
      "send permission"
    ],
    "explanationJa": "permission は give と結びつくと「許可を与える」という自然な英語になります。動詞を入れ替えると不自然になりやすいので、give permission を塊で覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "The manager gave permission to use the meeting room.",
        "ja": "マネージャーは会議室の使用を許可しました。"
      },
      {
        "en": "Parents must give permission before the trip.",
        "ja": "旅行の前に保護者の許可が必要です。"
      }
    ]
  },
  {
    "id": "v-give-notice",
    "category": "Business",
    "jaPrompt": "通知する",
    "answer": "give notice",
    "distractors": [
      "make notice",
      "take notice",
      "send notice"
    ],
    "explanationJa": "notice は give と結びつくと「通知する」という自然な英語になります。動詞を入れ替えると不自然になりやすいので、give notice を塊で覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "Employees must give notice before leaving the company.",
        "ja": "退職する前に従業員は事前に通知しなければなりません。"
      },
      {
        "en": "The landlord gave notice that the rent would increase.",
        "ja": "大家は家賃を上げると通知しました。"
      }
    ]
  },
  {
    "id": "v-give-a-warning",
    "category": "Business",
    "jaPrompt": "警告する",
    "answer": "give a warning",
    "distractors": [
      "make a warning",
      "take a warning",
      "send a warning"
    ],
    "explanationJa": "a warning は give と結びつくと「警告する」という自然な英語になります。動詞を入れ替えると不自然になりやすいので、give a warning を塊で覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "The system gave a warning before deleting the file.",
        "ja": "システムはファイルを削除する前に警告を表示しました。"
      },
      {
        "en": "The police gave a warning about the icy roads.",
        "ja": "警察は凍結した道路について注意を呼びかけました。"
      }
    ]
  },
  {
    "id": "v-give-an-answer",
    "category": "Business",
    "jaPrompt": "答える",
    "answer": "give an answer",
    "distractors": [
      "make an answer",
      "take an answer",
      "send an answer"
    ],
    "explanationJa": "an answer は give と結びつくと「答える」という自然な英語になります。動詞を入れ替えると不自然になりやすいので、give an answer を塊で覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "Please give an answer by the end of the day.",
        "ja": "今日中に回答してください。"
      },
      {
        "en": "He gave a clear answer to the question.",
        "ja": "彼はその質問にはっきり答えました。"
      }
    ]
  },
  {
    "id": "v-give-feedback",
    "category": "Business",
    "jaPrompt": "フィードバックを与える",
    "answer": "give feedback",
    "distractors": [
      "make feedback",
      "take feedback",
      "send feedback"
    ],
    "explanationJa": "feedback は give と結びつくと「フィードバックを与える」という自然な英語になります。動詞を入れ替えると不自然になりやすいので、give feedback を塊で覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "The instructor gave feedback on my pronunciation.",
        "ja": "講師は私の発音についてフィードバックしてくれました。"
      },
      {
        "en": "Please give feedback after using the new tool.",
        "ja": "新しいツールを使った後で感想を聞かせてください。"
      }
    ]
  },
  {
    "id": "v-give-support",
    "category": "Business",
    "jaPrompt": "支援する",
    "answer": "give support",
    "distractors": [
      "make support",
      "take support",
      "send support"
    ],
    "explanationJa": "support は give と結びつくと「支援する」という自然な英語になります。動詞を入れ替えると不自然になりやすいので、give support を塊で覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "The team gave support to the new member.",
        "ja": "チームは新しいメンバーを支援しました。"
      },
      {
        "en": "This service gives support to small businesses.",
        "ja": "このサービスは小規模事業者を支援しています。"
      }
    ]
  },
  {
    "id": "v-give-priority",
    "category": "Business",
    "jaPrompt": "優先する",
    "answer": "give priority",
    "distractors": [
      "make priority",
      "take priority",
      "send priority"
    ],
    "explanationJa": "priority は give と結びつくと「優先する」という自然な英語になります。動詞を入れ替えると不自然になりやすいので、give priority を塊で覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "We should give priority to urgent requests.",
        "ja": "緊急の依頼を優先すべきです。"
      },
      {
        "en": "The hospital gives priority to serious cases.",
        "ja": "その病院は重症の患者を優先します。"
      }
    ]
  },
  {
    "id": "v-give-a-call",
    "category": "Business",
    "jaPrompt": "電話する",
    "answer": "give a call",
    "distractors": [
      "make a call",
      "take a call",
      "send a call"
    ],
    "explanationJa": "a call は give と結びつくと「電話する」という自然な英語になります。動詞を入れ替えると不自然になりやすいので、give a call を塊で覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "I will give you a call after the meeting.",
        "ja": "会議の後であなたに電話します。"
      },
      {
        "en": "Please give me a call when you arrive.",
        "ja": "到着したら電話してください。"
      }
    ]
  },
  {
    "id": "v-give-a-smile",
    "category": "Business",
    "jaPrompt": "微笑む",
    "answer": "give a smile",
    "distractors": [
      "make a smile",
      "take a smile",
      "send a smile"
    ],
    "explanationJa": "a smile は give と結びつくと「微笑む」という自然な英語になります。動詞を入れ替えると不自然になりやすいので、give a smile を塊で覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "She gave a warm smile to the child.",
        "ja": "彼女はその子どもに優しく微笑みかけました。"
      },
      {
        "en": "He gave a small smile when he heard the news.",
        "ja": "彼はその知らせを聞いて少し笑みを見せました。"
      }
    ]
  },
  {
    "id": "v-give-a-hand",
    "category": "Business",
    "jaPrompt": "手助けする",
    "answer": "give a hand",
    "distractors": [
      "make a hand",
      "take a hand",
      "send a hand"
    ],
    "explanationJa": "a hand は give と結びつくと「手助けする」という自然な英語になります。動詞を入れ替えると不自然になりやすいので、give a hand を塊で覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "Could you give me a hand with these boxes?",
        "ja": "この箱を運ぶのを手伝ってもらえますか。"
      },
      {
        "en": "She gave him a hand with the presentation slides.",
        "ja": "彼女は彼のプレゼン資料作りを手伝いました。"
      }
    ]
  },
  {
    "id": "v-give-credit",
    "category": "Business",
    "jaPrompt": "評価する",
    "answer": "give credit",
    "distractors": [
      "make credit",
      "take credit",
      "send credit"
    ],
    "explanationJa": "credit は give と結びつくと「評価する」という自然な英語になります。動詞を入れ替えると不自然になりやすいので、give credit を塊で覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "We should give credit to everyone who helped.",
        "ja": "協力してくれた全員をきちんと評価すべきです。"
      },
      {
        "en": "The article gives credit to the original researcher.",
        "ja": "その記事は元の研究者に功績を認めています。"
      }
    ]
  },
  {
    "id": "v-give-details",
    "category": "Business",
    "jaPrompt": "詳細を伝える",
    "answer": "give details",
    "distractors": [
      "make details",
      "take details",
      "send details"
    ],
    "explanationJa": "details は give と結びつくと「詳細を伝える」という自然な英語になります。動詞を入れ替えると不自然になりやすいので、give details を塊で覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "Please give details about the problem.",
        "ja": "その問題について詳しく説明してください。"
      },
      {
        "en": "The report gives details of the new policy.",
        "ja": "その報告書には新しい方針の詳細が書かれています。"
      }
    ]
  },
  {
    "id": "v-give-instructions",
    "category": "Business",
    "jaPrompt": "指示する",
    "answer": "give instructions",
    "distractors": [
      "make instructions",
      "take instructions",
      "send instructions"
    ],
    "explanationJa": "instructions は give と結びつくと「指示する」という自然な英語になります。動詞を入れ替えると不自然になりやすいので、give instructions を塊で覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "The trainer gave instructions before the exercise.",
        "ja": "トレーナーは練習の前に指示を出しました。"
      },
      {
        "en": "Please give clear instructions to the new staff.",
        "ja": "新しいスタッフには明確に指示してください。"
      }
    ]
  },
  {
    "id": "v-give-a-demonstration",
    "category": "Business",
    "jaPrompt": "実演する",
    "answer": "give a demonstration",
    "distractors": [
      "make a demonstration",
      "take a demonstration",
      "send a demonstration"
    ],
    "explanationJa": "a demonstration は give と結びつくと「実演する」という自然な英語になります。give a demonstration を塊で覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "The engineer gave a demonstration of the new app.",
        "ja": "エンジニアは新しいアプリの実演をしました。"
      },
      {
        "en": "She gave a short demonstration before the training began.",
        "ja": "研修が始まる前に、彼女は短い実演を行いました。"
      }
    ]
  },
  {
    "id": "v-give-evidence",
    "category": "Business",
    "jaPrompt": "証拠を示す",
    "answer": "give evidence",
    "distractors": [
      "make evidence",
      "take evidence",
      "send evidence"
    ],
    "explanationJa": "evidence は give と結びつくと「証拠を示す」という自然な英語になります。動詞を入れ替えると不自然になりやすいので、give evidence を塊で覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "The study gives evidence that sleep affects memory.",
        "ja": "その研究は睡眠が記憶に影響する証拠を示しています。"
      },
      {
        "en": "He could not give evidence to support his claim.",
        "ja": "彼は自分の主張を裏づける証拠を示せませんでした。"
      }
    ]
  },
  {
    "id": "v-provide-information",
    "category": "Business",
    "jaPrompt": "情報を提供する",
    "answer": "provide information",
    "distractors": [
      "make information",
      "give out information",
      "prepare information"
    ],
    "explanationJa": "information は provide と結びつくと「情報を提供する」という自然な英語になります。動詞を入れ替えると不自然になりやすいので、provide information を塊で覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "The guide provides information about local transportation.",
        "ja": "その案内書には現地の交通機関についての情報が載っています。"
      },
      {
        "en": "The company provided information about the new policy.",
        "ja": "会社は新しい方針について情報を共有しました。"
      }
    ]
  },
  {
    "id": "v-provide-support",
    "category": "Business",
    "jaPrompt": "支援を提供する",
    "answer": "provide support",
    "distractors": [
      "make support",
      "give out support",
      "prepare support"
    ],
    "explanationJa": "support は provide と結びつくと「支援を提供する」という自然な英語になります。動詞を入れ替えると不自然になりやすいので、provide support を塊で覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "The support team provides help by phone and email.",
        "ja": "サポートチームは電話とメールで対応しています。"
      },
      {
        "en": "The school provided support for students with questions.",
        "ja": "学校は質問のある学生を支援しました。"
      }
    ]
  },
  {
    "id": "v-provide-evidence",
    "category": "Business",
    "jaPrompt": "証拠を提供する",
    "answer": "provide evidence",
    "distractors": [
      "make evidence",
      "give out evidence",
      "prepare evidence"
    ],
    "explanationJa": "evidence は provide と結びつくと「証拠を提供する」という自然な英語になります。動詞を入れ替えると不自然になりやすいので、provide evidence を塊で覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "The report provides evidence of a steady increase in sales.",
        "ja": "その報告書は売上が着実に増えている証拠を示しています。"
      },
      {
        "en": "Researchers provided evidence to support the theory.",
        "ja": "研究者たちはその理論を裏づける証拠を示しました。"
      }
    ]
  },
  {
    "id": "v-provide-guidance",
    "category": "Business",
    "jaPrompt": "案内を提供する",
    "answer": "provide guidance",
    "distractors": [
      "make guidance",
      "give out guidance",
      "prepare guidance"
    ],
    "explanationJa": "guidance は provide と結びつくと「案内を提供する」という自然な英語になります。動詞を入れ替えると不自然になりやすいので、provide guidance を塊で覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "The manual provides guidance for setting up the software.",
        "ja": "そのマニュアルにはソフトウェアの設定手順が示されています。"
      },
      {
        "en": "The teacher provided guidance during the writing exercise.",
        "ja": "先生は作文練習中に助言をしてくれました。"
      }
    ]
  },
  {
    "id": "v-provide-details",
    "category": "Business",
    "jaPrompt": "詳細を提供する",
    "answer": "provide details",
    "distractors": [
      "make details",
      "give out details",
      "prepare details"
    ],
    "explanationJa": "details は provide と結びつくと「詳細を提供する」という自然な英語になります。動詞を入れ替えると不自然になりやすいので、provide details を塊で覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "Please provide details about the error message.",
        "ja": "エラーメッセージについて詳しく教えてください。"
      },
      {
        "en": "The email provided details of the meeting schedule.",
        "ja": "そのメールには会議日程の詳細が書かれていました。"
      }
    ]
  },
  {
    "id": "v-provide-access",
    "category": "Business",
    "jaPrompt": "アクセスを提供する",
    "answer": "provide access",
    "distractors": [
      "make access",
      "give out access",
      "prepare access"
    ],
    "explanationJa": "access は provide と結びつくと「アクセスを提供する」という自然な英語になります。動詞を入れ替えると不自然になりやすいので、provide access を塊で覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "The system provides access to shared files.",
        "ja": "そのシステムでは共有ファイルにアクセスできます。"
      },
      {
        "en": "The administrator provided access to the project folder.",
        "ja": "管理者はプロジェクトフォルダーへのアクセス権を付与しました。"
      }
    ]
  },
  {
    "id": "v-provide-training",
    "category": "Business",
    "jaPrompt": "研修を提供する",
    "answer": "provide training",
    "distractors": [
      "make training",
      "give out training",
      "prepare training"
    ],
    "explanationJa": "training は provide と結びつくと「研修を提供する」という自然な英語になります。動詞を入れ替えると不自然になりやすいので、provide training を塊で覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "The company provides training for new employees.",
        "ja": "その会社は新入社員向けの研修を行っています。"
      },
      {
        "en": "The vendor provided training on the new software.",
        "ja": "ベンダーは新しいソフトウェアの研修を実施しました。"
      }
    ]
  },
  {
    "id": "v-provide-services",
    "category": "Business",
    "jaPrompt": "サービスを提供する",
    "answer": "provide services",
    "distractors": [
      "make services",
      "give out services",
      "prepare services"
    ],
    "explanationJa": "services は provide と結びつくと「サービスを提供する」という自然な英語になります。動詞を入れ替えると不自然になりやすいので、provide services を塊で覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "The clinic provides services for local families.",
        "ja": "その診療所は地域の家庭向けにサービスを提供しています。"
      },
      {
        "en": "The agency provides translation services for businesses.",
        "ja": "その代理店は企業向けに翻訳サービスを提供しています。"
      }
    ]
  },
  {
    "id": "v-provide-feedback",
    "category": "Business",
    "jaPrompt": "フィードバックを提供する",
    "answer": "provide feedback",
    "distractors": [
      "make feedback",
      "give out feedback",
      "prepare feedback"
    ],
    "explanationJa": "feedback は provide と結びつくと「フィードバックを提供する」という自然な英語になります。動詞を入れ替えると不自然になりやすいので、provide feedback を塊で覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "The reviewer provided feedback on the first draft.",
        "ja": "レビュー担当者は初稿について意見を伝えました。"
      },
      {
        "en": "The app provides feedback after each answer.",
        "ja": "そのアプリは回答ごとにフィードバックを表示します。"
      }
    ]
  },
  {
    "id": "v-provide-a-solution",
    "category": "Business",
    "jaPrompt": "解決策を提供する",
    "answer": "provide a solution",
    "distractors": [
      "make a solution",
      "give out a solution",
      "prepare a solution"
    ],
    "explanationJa": "a solution は provide と結びつくと「解決策を提供する」という自然な英語になります。動詞を入れ替えると不自然になりやすいので、provide a solution を塊で覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "The engineer provided a solution to the network problem.",
        "ja": "エンジニアはネットワークの問題に対する解決策を示しました。"
      },
      {
        "en": "This tool provides a simple solution for file conversion.",
        "ja": "このツールはファイル変換の簡単な解決策になります。"
      }
    ]
  },
  {
    "id": "v-provide-an-opportunity",
    "category": "Business",
    "jaPrompt": "機会を提供する",
    "answer": "provide an opportunity",
    "distractors": [
      "make an opportunity",
      "give out an opportunity",
      "prepare an opportunity"
    ],
    "explanationJa": "an opportunity は provide と結びつくと「機会を提供する」という自然な英語になります。動詞を入れ替えると不自然になりやすいので、provide an opportunity を塊で覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "The program provides an opportunity to practice speaking.",
        "ja": "そのプログラムでは話す練習をする機会があります。"
      },
      {
        "en": "The internship provided an opportunity to learn about sales.",
        "ja": "そのインターンでは営業について学ぶ機会がありました。"
      }
    ]
  },
  {
    "id": "v-provide-resources",
    "category": "Business",
    "jaPrompt": "資源を提供する",
    "answer": "provide resources",
    "distractors": [
      "make resources",
      "give out resources",
      "prepare resources"
    ],
    "explanationJa": "resources は provide と結びつくと「資源を提供する」という自然な英語になります。動詞を入れ替えると不自然になりやすいので、provide resources を塊で覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "The library provides resources for language learners.",
        "ja": "その図書館には語学学習者向けの資料があります。"
      },
      {
        "en": "The website provided resources for exam preparation.",
        "ja": "そのウェブサイトには試験対策用の教材が掲載されていました。"
      }
    ]
  },
  {
    "id": "v-provide-a-summary",
    "category": "Business",
    "jaPrompt": "要約を提供する",
    "answer": "provide a summary",
    "distractors": [
      "make a summary",
      "give out a summary",
      "prepare a summary"
    ],
    "explanationJa": "a summary は provide と結びつくと「要約を提供する」という自然な英語になります。動詞を入れ替えると不自然になりやすいので、provide a summary を塊で覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "The article provides a summary of the latest research.",
        "ja": "その記事は最新研究の要点をまとめています。"
      },
      {
        "en": "Please provide a summary at the end of the report.",
        "ja": "報告書の最後に要約を入れてください。"
      }
    ]
  },
  {
    "id": "v-provide-documentation",
    "category": "Business",
    "jaPrompt": "文書を提供する",
    "answer": "provide documentation",
    "distractors": [
      "make documentation",
      "give out documentation",
      "prepare documentation"
    ],
    "explanationJa": "documentation は provide と結びつくと「文書を提供する」という自然な英語になります。動詞を入れ替えると不自然になりやすいので、provide documentation を塊で覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "The vendor provides documentation for the API.",
        "ja": "ベンダーはそのAPIのドキュメントを公開しています。"
      },
      {
        "en": "The developer provided documentation with the sample code.",
        "ja": "開発者はサンプルコードと一緒に説明資料を用意しました。"
      }
    ]
  },
  {
    "id": "v-provide-assistance",
    "category": "Business",
    "jaPrompt": "援助を提供する",
    "answer": "provide assistance",
    "distractors": [
      "make assistance",
      "give out assistance",
      "prepare assistance"
    ],
    "explanationJa": "assistance は provide と結びつくと「援助を提供する」という自然な英語になります。動詞を入れ替えると不自然になりやすいので、provide assistance を塊で覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "Staff members provide assistance at the information desk.",
        "ja": "スタッフは案内窓口で手助けをしています。"
      },
      {
        "en": "The city provided assistance after the storm.",
        "ja": "市は嵐の後に支援を行いました。"
      }
    ]
  },
  {
    "id": "v-meet-requirements",
    "category": "Business",
    "jaPrompt": "要件を満たす",
    "answer": "meet requirements",
    "distractors": [
      "catch requirements",
      "touch requirements",
      "arrive requirements"
    ],
    "explanationJa": "requirements は meet と結びつくと「要件を満たす」という自然な英語になります。動詞を入れ替えると不自然になりやすいので、meet requirements を塊で覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "We need to meet requirements before launch.",
        "ja": "公開前に要件を満たす必要があります。"
      },
      {
        "en": "The team worked hard to meet requirements.",
        "ja": "チームは要件を満たすために懸命に取り組みました。"
      }
    ]
  },
  {
    "id": "v-meet-expectations",
    "category": "Business",
    "jaPrompt": "期待を満たす",
    "answer": "meet expectations",
    "distractors": [
      "catch expectations",
      "touch expectations",
      "arrive expectations"
    ],
    "explanationJa": "expectations は meet と結びつくと「期待を満たす」という自然な英語になります。動詞を入れ替えると不自然になりやすいので、meet expectations を塊で覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "We need to meet expectations before launch.",
        "ja": "公開前に期待を満たす必要があります。"
      },
      {
        "en": "The team worked hard to meet expectations.",
        "ja": "チームは期待を満たすために懸命に取り組みました。"
      }
    ]
  },
  {
    "id": "v-meet-demand",
    "category": "Business",
    "jaPrompt": "需要に応える",
    "answer": "meet demand",
    "distractors": [
      "catch demand",
      "touch demand",
      "arrive demand"
    ],
    "explanationJa": "demand は meet と結びつくと「需要に応える」という自然な英語になります。動詞を入れ替えると不自然になりやすいので、meet demand を塊で覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "We need to meet demand before launch.",
        "ja": "公開前に需要に応える必要があります。"
      },
      {
        "en": "The team worked hard to meet demand.",
        "ja": "チームは需要に応えるために懸命に取り組みました。"
      }
    ]
  },
  {
    "id": "v-meet-standards",
    "category": "Business",
    "jaPrompt": "基準を満たす",
    "answer": "meet standards",
    "distractors": [
      "catch standards",
      "touch standards",
      "arrive standards"
    ],
    "explanationJa": "standards は meet と結びつくと「基準を満たす」という自然な英語になります。動詞を入れ替えると不自然になりやすいので、meet standards を塊で覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "We need to meet standards before launch.",
        "ja": "公開前に基準を満たす必要があります。"
      },
      {
        "en": "The team worked hard to meet standards.",
        "ja": "チームは基準を満たすために懸命に取り組みました。"
      }
    ]
  },
  {
    "id": "v-meet-targets",
    "category": "Business",
    "jaPrompt": "目標を満たす",
    "answer": "meet targets",
    "distractors": [
      "catch targets",
      "touch targets",
      "arrive targets"
    ],
    "explanationJa": "targets は meet と結びつくと「目標を満たす」という自然な英語になります。動詞を入れ替えると不自然になりやすいので、meet targets を塊で覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "We need to meet targets before launch.",
        "ja": "公開前に目標を満たす必要があります。"
      },
      {
        "en": "The team worked hard to meet targets.",
        "ja": "チームは目標を満たすために懸命に取り組みました。"
      }
    ]
  },
  {
    "id": "v-meet-needs",
    "category": "Business",
    "jaPrompt": "ニーズを満たす",
    "answer": "meet needs",
    "distractors": [
      "catch needs",
      "touch needs",
      "arrive needs"
    ],
    "explanationJa": "needs は meet と結びつくと「ニーズを満たす」という自然な英語になります。動詞を入れ替えると不自然になりやすいので、meet needs を塊で覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "We need to meet needs before launch.",
        "ja": "公開前にニーズを満たす必要があります。"
      },
      {
        "en": "The team worked hard to meet needs.",
        "ja": "チームはニーズを満たすために懸命に取り組みました。"
      }
    ]
  },
  {
    "id": "v-meet-criteria",
    "category": "Business",
    "jaPrompt": "基準を満たす",
    "answer": "meet criteria",
    "distractors": [
      "catch criteria",
      "touch criteria",
      "arrive criteria"
    ],
    "explanationJa": "criteria は meet と結びつくと「基準を満たす」という自然な英語になります。動詞を入れ替えると不自然になりやすいので、meet criteria を塊で覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "We need to meet criteria before launch.",
        "ja": "公開前に基準を満たす必要があります。"
      },
      {
        "en": "The team worked hard to meet criteria.",
        "ja": "チームは基準を満たすために懸命に取り組みました。"
      }
    ]
  },
  {
    "id": "v-meet-a-goal",
    "category": "Business",
    "jaPrompt": "目標を満たす",
    "answer": "meet a goal",
    "distractors": [
      "catch a goal",
      "touch a goal",
      "arrive a goal"
    ],
    "explanationJa": "a goal は meet と結びつくと「目標を満たす」という自然な英語になります。動詞を入れ替えると不自然になりやすいので、meet a goal を塊で覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "We need to meet a goal before launch.",
        "ja": "公開前に目標を満たす必要があります。"
      },
      {
        "en": "The team worked hard to meet a goal.",
        "ja": "チームは目標を満たすために懸命に取り組みました。"
      }
    ]
  },
  {
    "id": "v-meet-conditions",
    "category": "Business",
    "jaPrompt": "条件を満たす",
    "answer": "meet conditions",
    "distractors": [
      "catch conditions",
      "touch conditions",
      "arrive conditions"
    ],
    "explanationJa": "conditions は meet と結びつくと「条件を満たす」という自然な英語になります。動詞を入れ替えると不自然になりやすいので、meet conditions を塊で覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "We need to meet conditions before launch.",
        "ja": "公開前に条件を満たす必要があります。"
      },
      {
        "en": "The team worked hard to meet conditions.",
        "ja": "チームは条件を満たすために懸命に取り組みました。"
      }
    ]
  },
  {
    "id": "v-meet-a-challenge",
    "category": "Business",
    "jaPrompt": "課題に対応する",
    "answer": "meet a challenge",
    "distractors": [
      "catch a challenge",
      "touch a challenge",
      "arrive a challenge"
    ],
    "explanationJa": "a challenge は meet と結びつくと「課題に対応する」という自然な英語になります。動詞を入れ替えると不自然になりやすいので、meet a challenge を塊で覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "We need to meet a challenge before launch.",
        "ja": "公開前に課題に対応する必要があります。"
      },
      {
        "en": "The team worked hard to meet a challenge.",
        "ja": "チームは課題に対応するために懸命に取り組みました。"
      }
    ]
  },
  {
    "id": "v-meet-a-request",
    "category": "Business",
    "jaPrompt": "依頼に応える",
    "answer": "meet a request",
    "distractors": [
      "catch a request",
      "touch a request",
      "arrive a request"
    ],
    "explanationJa": "a request は meet と結びつくと「依頼に応える」という自然な英語になります。動詞を入れ替えると不自然になりやすいので、meet a request を塊で覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "We need to meet a request before launch.",
        "ja": "公開前に依頼に応える必要があります。"
      },
      {
        "en": "The team worked hard to meet a request.",
        "ja": "チームは依頼に応えるために懸命に取り組みました。"
      }
    ]
  },
  {
    "id": "v-meet-obligations",
    "category": "Business",
    "jaPrompt": "義務を満たす",
    "answer": "meet obligations",
    "distractors": [
      "catch obligations",
      "touch obligations",
      "arrive obligations"
    ],
    "explanationJa": "obligations は meet と結びつくと「義務を満たす」という自然な英語になります。動詞を入れ替えると不自然になりやすいので、meet obligations を塊で覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "We need to meet obligations before launch.",
        "ja": "公開前に義務を満たす必要があります。"
      },
      {
        "en": "The team worked hard to meet obligations.",
        "ja": "チームは義務を満たすために懸命に取り組みました。"
      }
    ]
  },
  {
    "id": "v-meet-a-schedule",
    "category": "Business",
    "jaPrompt": "予定に間に合う",
    "answer": "meet a schedule",
    "distractors": [
      "catch a schedule",
      "touch a schedule",
      "arrive a schedule"
    ],
    "explanationJa": "a schedule は meet と結びつくと「予定に間に合う」という自然な英語になります。動詞を入れ替えると不自然になりやすいので、meet a schedule を塊で覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "We need to meet a schedule before launch.",
        "ja": "公開前に予定に間に合う必要があります。"
      },
      {
        "en": "The team worked hard to meet a schedule.",
        "ja": "チームは予定に間に合うために懸命に取り組みました。"
      }
    ]
  },
  {
    "id": "v-meet-quality-standards",
    "category": "Business",
    "jaPrompt": "品質基準を満たす",
    "answer": "meet quality standards",
    "distractors": [
      "catch quality standards",
      "touch quality standards",
      "arrive quality standards"
    ],
    "explanationJa": "quality standards は meet と結びつくと「品質基準を満たす」という自然な英語になります。動詞を入れ替えると不自然になりやすいので、meet quality standards を塊で覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "We need to meet quality standards before launch.",
        "ja": "公開前に品質基準を満たす必要があります。"
      },
      {
        "en": "The team worked hard to meet quality standards.",
        "ja": "チームは品質基準を満たすために懸命に取り組みました。"
      }
    ]
  },
  {
    "id": "v-pay-respect",
    "category": "Learning",
    "jaPrompt": "敬意を払う",
    "answer": "pay respect",
    "distractors": [
      "send respect",
      "put respect",
      "give respect"
    ],
    "explanationJa": "respect は pay と結びつくと「敬意を払う」という自然な英語になります。動詞を入れ替えると不自然になりやすいので、pay respect を塊で覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "Please pay respect by the end of the month.",
        "ja": "月末までに敬意を払ってください。"
      },
      {
        "en": "She remembered to pay respect before leaving.",
        "ja": "彼女は出発前に敬意を払うことを忘れませんでした。"
      }
    ]
  },
  {
    "id": "v-pay-a-fee",
    "category": "Learning",
    "jaPrompt": "料金を払う",
    "answer": "pay a fee",
    "distractors": [
      "send a fee",
      "put a fee",
      "give a fee"
    ],
    "explanationJa": "a fee は pay と結びつくと「料金を払う」という自然な英語になります。動詞を入れ替えると不自然になりやすいので、pay a fee を塊で覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "Please pay a fee by the end of the month.",
        "ja": "月末までに料金を払ってください。"
      },
      {
        "en": "She remembered to pay a fee before leaving.",
        "ja": "彼女は出発前に料金を払うことを忘れませんでした。"
      }
    ]
  },
  {
    "id": "v-pay-a-fine",
    "category": "Learning",
    "jaPrompt": "罰金を払う",
    "answer": "pay a fine",
    "distractors": [
      "send a fine",
      "put a fine",
      "give a fine"
    ],
    "explanationJa": "a fine は pay と結びつくと「罰金を払う」という自然な英語になります。動詞を入れ替えると不自然になりやすいので、pay a fine を塊で覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "Please pay a fine by the end of the month.",
        "ja": "月末までに罰金を払ってください。"
      },
      {
        "en": "She remembered to pay a fine before leaving.",
        "ja": "彼女は出発前に罰金を払うことを忘れませんでした。"
      }
    ]
  },
  {
    "id": "v-pay-interest",
    "category": "Learning",
    "jaPrompt": "利息・関心を払う",
    "answer": "pay interest",
    "distractors": [
      "send interest",
      "put interest",
      "give interest"
    ],
    "explanationJa": "interest は pay と結びつくと「利息・関心を払う」という自然な英語になります。動詞を入れ替えると不自然になりやすいので、pay interest を塊で覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "Please pay interest by the end of the month.",
        "ja": "月末までに利息・関心を払ってください。"
      },
      {
        "en": "She remembered to pay interest before leaving.",
        "ja": "彼女は出発前に利息・関心を払うことを忘れませんでした。"
      }
    ]
  },
  {
    "id": "v-pay-the-bill",
    "category": "Learning",
    "jaPrompt": "請求を払う",
    "answer": "pay the bill",
    "distractors": [
      "send the bill",
      "put the bill",
      "give the bill"
    ],
    "explanationJa": "the bill は pay と結びつくと「請求を払う」という自然な英語になります。動詞を入れ替えると不自然になりやすいので、pay the bill を塊で覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "Please pay the bill by the end of the month.",
        "ja": "月末までに請求を払ってください。"
      },
      {
        "en": "She remembered to pay the bill before leaving.",
        "ja": "彼女は出発前に請求を払うことを忘れませんでした。"
      }
    ]
  },
  {
    "id": "v-pay-taxes",
    "category": "Learning",
    "jaPrompt": "税金を払う",
    "answer": "pay taxes",
    "distractors": [
      "send taxes",
      "put taxes",
      "give taxes"
    ],
    "explanationJa": "taxes は pay と結びつくと「税金を払う」という自然な英語になります。動詞を入れ替えると不自然になりやすいので、pay taxes を塊で覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "You must pay taxes by the deadline.",
        "ja": "期限までに税金を納めなければなりません。"
      },
      {
        "en": "The company paid taxes on its profits.",
        "ja": "その会社は利益に対して税金を納めました。"
      }
    ]
  },
  {
    "id": "v-pay-a-visit",
    "category": "Learning",
    "jaPrompt": "訪問する",
    "answer": "pay a visit",
    "distractors": [
      "send a visit",
      "put a visit",
      "give a visit"
    ],
    "explanationJa": "a visit は pay と結びつくと「訪問する」という自然な英語になります。動詞を入れ替えると不自然になりやすいので、pay a visit を塊で覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "Please pay a visit by the end of the month.",
        "ja": "月末までに訪問してください。"
      },
      {
        "en": "She remembered to pay a visit before leaving.",
        "ja": "彼女は出発前に訪問することを忘れませんでした。"
      }
    ]
  },
  {
    "id": "v-pay-a-compliment",
    "category": "Learning",
    "jaPrompt": "褒める",
    "answer": "pay a compliment",
    "distractors": [
      "send a compliment",
      "put a compliment",
      "give a compliment"
    ],
    "explanationJa": "a compliment は pay と結びつくと「褒める」という自然な英語になります。動詞を入れ替えると不自然になりやすいので、pay a compliment を塊で覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "Please pay a compliment by the end of the month.",
        "ja": "月末までに褒めるしてください。"
      },
      {
        "en": "She remembered to pay a compliment before leaving.",
        "ja": "彼女は出発前に褒めることを忘れませんでした。"
      }
    ]
  },
  {
    "id": "v-pay-tribute",
    "category": "Learning",
    "jaPrompt": "敬意を表す",
    "answer": "pay tribute",
    "distractors": [
      "send tribute",
      "put tribute",
      "give tribute"
    ],
    "explanationJa": "tribute は pay と結びつくと「敬意を表す」という自然な英語になります。動詞を入れ替えると不自然になりやすいので、pay tribute を塊で覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "Please pay tribute by the end of the month.",
        "ja": "月末までに敬意を表してください。"
      },
      {
        "en": "She remembered to pay tribute before leaving.",
        "ja": "彼女は出発前に敬意を表すことを忘れませんでした。"
      }
    ]
  },
  {
    "id": "v-pay-compensation",
    "category": "Learning",
    "jaPrompt": "補償を払う",
    "answer": "pay compensation",
    "distractors": [
      "send compensation",
      "put compensation",
      "give compensation"
    ],
    "explanationJa": "compensation は pay と結びつくと「補償を払う」という自然な英語になります。動詞を入れ替えると不自然になりやすいので、pay compensation を塊で覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "Please pay compensation by the end of the month.",
        "ja": "月末までに補償を払ってください。"
      },
      {
        "en": "She remembered to pay compensation before leaving.",
        "ja": "彼女は出発前に補償を払うことを忘れませんでした。"
      }
    ]
  },
  {
    "id": "v-pay-rent",
    "category": "Learning",
    "jaPrompt": "家賃を払う",
    "answer": "pay rent",
    "distractors": [
      "send rent",
      "put rent",
      "give rent"
    ],
    "explanationJa": "rent は pay と結びつくと「家賃を払う」という自然な英語になります。動詞を入れ替えると不自然になりやすいので、pay rent を塊で覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "Please pay rent by the end of the month.",
        "ja": "月末までに家賃を払ってください。"
      },
      {
        "en": "She remembered to pay rent before leaving.",
        "ja": "彼女は出発前に家賃を払うことを忘れませんでした。"
      }
    ]
  },
  {
    "id": "v-pay-wages",
    "category": "Learning",
    "jaPrompt": "賃金を払う",
    "answer": "pay wages",
    "distractors": [
      "send wages",
      "put wages",
      "give wages"
    ],
    "explanationJa": "wages は pay と結びつくと「賃金を払う」という自然な英語になります。動詞を入れ替えると不自然になりやすいので、pay wages を塊で覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "Please pay wages by the end of the month.",
        "ja": "月末までに賃金を払ってください。"
      },
      {
        "en": "She remembered to pay wages before leaving.",
        "ja": "彼女は出発前に賃金を払うことを忘れませんでした。"
      }
    ]
  },
  {
    "id": "v-pay-cash",
    "category": "Learning",
    "jaPrompt": "現金を払う",
    "answer": "pay cash",
    "distractors": [
      "send cash",
      "put cash",
      "give cash"
    ],
    "explanationJa": "cash は pay と結びつくと「現金を払う」という自然な英語になります。動詞を入れ替えると不自然になりやすいので、pay cash を塊で覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "Please pay cash by the end of the month.",
        "ja": "月末までに現金を払ってください。"
      },
      {
        "en": "She remembered to pay cash before leaving.",
        "ja": "彼女は出発前に現金を払うことを忘れませんでした。"
      }
    ]
  },
  {
    "id": "v-pay-close-attention",
    "category": "Learning",
    "jaPrompt": "細心の注意を払う",
    "answer": "pay close attention",
    "distractors": [
      "send close attention",
      "put close attention",
      "give close attention"
    ],
    "explanationJa": "close attention は pay と結びつくと「細心の注意を払う」という自然な英語になります。動詞を入れ替えると不自然になりやすいので、pay close attention を塊で覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "Please pay close attention by the end of the month.",
        "ja": "月末までに細心の注意を払ってください。"
      },
      {
        "en": "She remembered to pay close attention before leaving.",
        "ja": "彼女は出発前に細心の注意を払うことを忘れませんでした。"
      }
    ]
  },
  {
    "id": "v-conduct-a-survey",
    "category": "Academic",
    "jaPrompt": "調査を行う",
    "answer": "conduct a survey",
    "distractors": [
      "make a survey",
      "create a survey",
      "play a survey"
    ],
    "explanationJa": "a survey は conduct と結びつくと「調査を行う」という自然な英語になります。動詞を入れ替えると不自然になりやすいので、conduct a survey を塊で覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "The team will conduct a survey next month.",
        "ja": "チームは来月調査を行う予定です。"
      },
      {
        "en": "We conducted a survey before making a decision.",
        "ja": "決定する前に調査を行いました。"
      }
    ]
  },
  {
    "id": "v-conduct-an-experiment",
    "category": "Academic",
    "jaPrompt": "実験を行う",
    "answer": "conduct an experiment",
    "distractors": [
      "make an experiment",
      "create an experiment",
      "play an experiment"
    ],
    "explanationJa": "an experiment は conduct と結びつくと「実験を行う」という自然な英語になります。動詞を入れ替えると不自然になりやすいので、conduct an experiment を塊で覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "The team will conduct an experiment next month.",
        "ja": "チームは来月実験を行う予定です。"
      },
      {
        "en": "We conducted an experiment before making a decision.",
        "ja": "決定する前に実験を行いました。"
      }
    ]
  },
  {
    "id": "v-conduct-an-interview",
    "category": "Academic",
    "jaPrompt": "面接・聞き取りを行う",
    "answer": "conduct an interview",
    "distractors": [
      "make an interview",
      "create an interview",
      "play an interview"
    ],
    "explanationJa": "an interview は conduct と結びつくと「面接・聞き取りを行う」という自然な英語になります。動詞を入れ替えると不自然になりやすいので、conduct an interview を塊で覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "The team will conduct an interview next month.",
        "ja": "チームは来月面接・聞き取りを行う予定です。"
      },
      {
        "en": "We conducted an interview before making a decision.",
        "ja": "決定する前に面接・聞き取りを行いました。"
      }
    ]
  },
  {
    "id": "v-conduct-a-study",
    "category": "Academic",
    "jaPrompt": "研究を行う",
    "answer": "conduct a study",
    "distractors": [
      "make a study",
      "create a study",
      "play a study"
    ],
    "explanationJa": "a study は conduct と結びつくと「研究を行う」という自然な英語になります。動詞を入れ替えると不自然になりやすいので、conduct a study を塊で覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "The team will conduct a study next month.",
        "ja": "チームは来月研究を行う予定です。"
      },
      {
        "en": "We conducted a study before making a decision.",
        "ja": "決定する前に研究を行いました。"
      }
    ]
  },
  {
    "id": "v-conduct-an-investigation",
    "category": "Academic",
    "jaPrompt": "調査を行う",
    "answer": "conduct an investigation",
    "distractors": [
      "make an investigation",
      "create an investigation",
      "play an investigation"
    ],
    "explanationJa": "an investigation は conduct と結びつくと「調査を行う」という自然な英語になります。動詞を入れ替えると不自然になりやすいので、conduct an investigation を塊で覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "The team will conduct an investigation next month.",
        "ja": "チームは来月調査を行う予定です。"
      },
      {
        "en": "We conducted an investigation before making a decision.",
        "ja": "決定する前に調査を行いました。"
      }
    ]
  },
  {
    "id": "v-conduct-a-review",
    "category": "Academic",
    "jaPrompt": "レビューを行う",
    "answer": "conduct a review",
    "distractors": [
      "make a review",
      "create a review",
      "play a review"
    ],
    "explanationJa": "a review は conduct と結びつくと「レビューを行う」という自然な英語になります。動詞を入れ替えると不自然になりやすいので、conduct a review を塊で覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "The team will conduct a review next month.",
        "ja": "チームは来月レビューを行う予定です。"
      },
      {
        "en": "We conducted a review before making a decision.",
        "ja": "決定する前にレビューを行いました。"
      }
    ]
  },
  {
    "id": "v-conduct-an-analysis",
    "category": "Academic",
    "jaPrompt": "分析を行う",
    "answer": "conduct an analysis",
    "distractors": [
      "make an analysis",
      "create an analysis",
      "play an analysis"
    ],
    "explanationJa": "an analysis は conduct と結びつくと「分析を行う」という自然な英語になります。動詞を入れ替えると不自然になりやすいので、conduct an analysis を塊で覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "The team will conduct an analysis next month.",
        "ja": "チームは来月分析を行う予定です。"
      },
      {
        "en": "We conducted an analysis before making a decision.",
        "ja": "決定する前に分析を行いました。"
      }
    ]
  },
  {
    "id": "v-conduct-a-test",
    "category": "Academic",
    "jaPrompt": "試験を行う",
    "answer": "conduct a test",
    "distractors": [
      "make a test",
      "create a test",
      "play a test"
    ],
    "explanationJa": "a test は conduct と結びつくと「試験を行う」という自然な英語になります。動詞を入れ替えると不自然になりやすいので、conduct a test を塊で覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "The team will conduct a test next month.",
        "ja": "チームは来月試験を行う予定です。"
      },
      {
        "en": "We conducted a test before making a decision.",
        "ja": "決定する前に試験を行いました。"
      }
    ]
  },
  {
    "id": "v-conduct-a-trial",
    "category": "Academic",
    "jaPrompt": "試験運用を行う",
    "answer": "conduct a trial",
    "distractors": [
      "make a trial",
      "create a trial",
      "play a trial"
    ],
    "explanationJa": "a trial は conduct と結びつくと「試験運用を行う」という自然な英語になります。動詞を入れ替えると不自然になりやすいので、conduct a trial を塊で覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "The team will conduct a trial next month.",
        "ja": "チームは来月試験運用を行う予定です。"
      },
      {
        "en": "We conducted a trial before making a decision.",
        "ja": "決定する前に試験運用を行いました。"
      }
    ]
  },
  {
    "id": "v-conduct-a-campaign",
    "category": "Academic",
    "jaPrompt": "キャンペーンを行う",
    "answer": "conduct a campaign",
    "distractors": [
      "make a campaign",
      "create a campaign",
      "play a campaign"
    ],
    "explanationJa": "a campaign は conduct と結びつくと「キャンペーンを行う」という自然な英語になります。動詞を入れ替えると不自然になりやすいので、conduct a campaign を塊で覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "The team will conduct a campaign next month.",
        "ja": "チームは来月キャンペーンを行う予定です。"
      },
      {
        "en": "We conducted a campaign before making a decision.",
        "ja": "決定する前にキャンペーンを行いました。"
      }
    ]
  },
  {
    "id": "v-conduct-training",
    "category": "Academic",
    "jaPrompt": "研修を行う",
    "answer": "conduct training",
    "distractors": [
      "make training",
      "create training",
      "play training"
    ],
    "explanationJa": "training は conduct と結びつくと「研修を行う」という自然な英語になります。動詞を入れ替えると不自然になりやすいので、conduct training を塊で覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "The team will conduct training next month.",
        "ja": "チームは来月研修を行う予定です。"
      },
      {
        "en": "We conducted training before making a decision.",
        "ja": "決定する前に研修を行いました。"
      }
    ]
  },
  {
    "id": "v-conduct-an-audit",
    "category": "Academic",
    "jaPrompt": "監査を行う",
    "answer": "conduct an audit",
    "distractors": [
      "make an audit",
      "create an audit",
      "play an audit"
    ],
    "explanationJa": "an audit は conduct と結びつくと「監査を行う」という自然な英語になります。動詞を入れ替えると不自然になりやすいので、conduct an audit を塊で覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "The team will conduct an audit next month.",
        "ja": "チームは来月監査を行う予定です。"
      },
      {
        "en": "We conducted an audit before making a decision.",
        "ja": "決定する前に監査を行いました。"
      }
    ]
  },
  {
    "id": "v-conduct-fieldwork",
    "category": "Academic",
    "jaPrompt": "現地調査を行う",
    "answer": "conduct fieldwork",
    "distractors": [
      "make fieldwork",
      "create fieldwork",
      "play fieldwork"
    ],
    "explanationJa": "fieldwork は conduct と結びつくと「現地調査を行う」という自然な英語になります。動詞を入れ替えると不自然になりやすいので、conduct fieldwork を塊で覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "The team will conduct fieldwork next month.",
        "ja": "チームは来月現地調査を行う予定です。"
      },
      {
        "en": "We conducted fieldwork before making a decision.",
        "ja": "決定する前に現地調査を行いました。"
      }
    ]
  },
  {
    "id": "v-conduct-a-meeting",
    "category": "Academic",
    "jaPrompt": "会議を行う",
    "answer": "conduct a meeting",
    "distractors": [
      "make a meeting",
      "create a meeting",
      "play a meeting"
    ],
    "explanationJa": "a meeting は conduct と結びつくと「会議を行う」という自然な英語になります。動詞を入れ替えると不自然になりやすいので、conduct a meeting を塊で覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "The team will conduct a meeting next month.",
        "ja": "チームは来月会議を行う予定です。"
      },
      {
        "en": "We conducted a meeting before making a decision.",
        "ja": "決定する前に会議を行いました。"
      }
    ]
  },
  {
    "id": "v-set-a-goal",
    "category": "Business",
    "jaPrompt": "目標を設定する",
    "answer": "set a goal",
    "distractors": [
      "make a goal",
      "put a goal",
      "open a goal"
    ],
    "explanationJa": "a goal は set と結びつくと「目標を設定する」という自然な英語になります。動詞を入れ替えると不自然になりやすいので、set a goal を塊で覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "Please set a goal before the project starts.",
        "ja": "プロジェクト開始前に目標を設定してください。"
      },
      {
        "en": "The manager set a goal during the meeting.",
        "ja": "マネージャーは会議中に目標を設定しました。"
      }
    ]
  },
  {
    "id": "v-set-a-target",
    "category": "Business",
    "jaPrompt": "目標を設定する",
    "answer": "set a target",
    "distractors": [
      "make a target",
      "put a target",
      "open a target"
    ],
    "explanationJa": "a target は set と結びつくと「目標を設定する」という自然な英語になります。動詞を入れ替えると不自然になりやすいので、set a target を塊で覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "Please set a target before the project starts.",
        "ja": "プロジェクト開始前に目標を設定してください。"
      },
      {
        "en": "The manager set a target during the meeting.",
        "ja": "マネージャーは会議中に目標を設定しました。"
      }
    ]
  },
  {
    "id": "v-set-a-deadline",
    "category": "Business",
    "jaPrompt": "締切を設定する",
    "answer": "set a deadline",
    "distractors": [
      "make a deadline",
      "put a deadline",
      "open a deadline"
    ],
    "explanationJa": "a deadline は set と結びつくと「締切を設定する」という自然な英語になります。動詞を入れ替えると不自然になりやすいので、set a deadline を塊で覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "Please set a deadline before the project starts.",
        "ja": "プロジェクト開始前に締切を設定してください。"
      },
      {
        "en": "The manager set a deadline during the meeting.",
        "ja": "マネージャーは会議中に締切を設定しました。"
      }
    ]
  },
  {
    "id": "v-set-a-date",
    "category": "Business",
    "jaPrompt": "日付を設定する",
    "answer": "set a date",
    "distractors": [
      "make a date",
      "put a date",
      "open a date"
    ],
    "explanationJa": "a date は set と結びつくと「日付を設定する」という自然な英語になります。動詞を入れ替えると不自然になりやすいので、set a date を塊で覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "Please set a date before the project starts.",
        "ja": "プロジェクト開始前に日付を設定してください。"
      },
      {
        "en": "The manager set a date during the meeting.",
        "ja": "マネージャーは会議中に日付を設定しました。"
      }
    ]
  },
  {
    "id": "v-set-a-limit",
    "category": "Business",
    "jaPrompt": "制限を設定する",
    "answer": "set a limit",
    "distractors": [
      "make a limit",
      "put a limit",
      "open a limit"
    ],
    "explanationJa": "a limit は set と結びつくと「制限を設定する」という自然な英語になります。動詞を入れ替えると不自然になりやすいので、set a limit を塊で覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "Please set a limit before the project starts.",
        "ja": "プロジェクト開始前に制限を設定してください。"
      },
      {
        "en": "The manager set a limit during the meeting.",
        "ja": "マネージャーは会議中に制限を設定しました。"
      }
    ]
  },
  {
    "id": "v-set-a-standard",
    "category": "Business",
    "jaPrompt": "基準を設定する",
    "answer": "set a standard",
    "distractors": [
      "make a standard",
      "put a standard",
      "open a standard"
    ],
    "explanationJa": "a standard は set と結びつくと「基準を設定する」という自然な英語になります。動詞を入れ替えると不自然になりやすいので、set a standard を塊で覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "Please set a standard before the project starts.",
        "ja": "プロジェクト開始前に基準を設定してください。"
      },
      {
        "en": "The manager set a standard during the meeting.",
        "ja": "マネージャーは会議中に基準を設定しました。"
      }
    ]
  },
  {
    "id": "adj-strong-evidence",
    "category": "Adjective + Noun",
    "jaPrompt": "強い証拠",
    "answer": "strong evidence",
    "distractors": [
      "heavy evidence",
      "big evidence",
      "hard evidence"
    ],
    "explanationJa": "evidence は strong と組み合わせると「強い証拠」を表しやすいです。日本語の「強い・大きい」に引っ張られず、strong evidence をまとまりで覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "The police found strong evidence at the scene.",
        "ja": "警察は現場で有力な証拠を見つけました。"
      },
      {
        "en": "There is strong evidence that the treatment works.",
        "ja": "その治療が効果を持つことを示す有力な証拠があります。"
      }
    ]
  },
  {
    "id": "adj-strong-support",
    "category": "Adjective + Noun",
    "jaPrompt": "強い支持",
    "answer": "strong support",
    "distractors": [
      "heavy support",
      "big support",
      "hard support"
    ],
    "explanationJa": "support は strong と組み合わせると「強い支持」を表しやすいです。日本語の「強い・大きい」に引っ張られず、strong support をまとまりで覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "The proposal received strong support from local residents.",
        "ja": "その提案は地元住民から強い支持を得ました。"
      },
      {
        "en": "She has strong support from her team.",
        "ja": "彼女はチームから強く支持されています。"
      }
    ]
  },
  {
    "id": "adj-strong-argument",
    "category": "Adjective + Noun",
    "jaPrompt": "強い主張",
    "answer": "strong argument",
    "distractors": [
      "heavy argument",
      "big argument",
      "hard argument"
    ],
    "explanationJa": "argument は strong と組み合わせると「強い主張」を表しやすいです。日本語の「強い・大きい」に引っ張られず、strong argument をまとまりで覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "He made a strong argument for changing the rule.",
        "ja": "彼はそのルールを変えるべきだと説得力のある主張をしました。"
      },
      {
        "en": "The article presents a strong argument against the plan.",
        "ja": "その記事はその計画に反対する説得力のある論拠を示しています。"
      }
    ]
  },
  {
    "id": "adj-strong-smell",
    "category": "Adjective + Noun",
    "jaPrompt": "強いにおい",
    "answer": "strong smell",
    "distractors": [
      "heavy smell",
      "big smell",
      "hard smell"
    ],
    "explanationJa": "smell は strong と組み合わせると「強いにおい」を表しやすいです。日本語の「強い・大きい」に引っ張られず、strong smell をまとまりで覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "There was a strong smell of coffee in the room.",
        "ja": "部屋にはコーヒーの強い香りが漂っていました。"
      },
      {
        "en": "A strong smell came from the kitchen.",
        "ja": "台所から強いにおいがしてきました。"
      }
    ]
  },
  {
    "id": "adj-strong-connection",
    "category": "Adjective + Noun",
    "jaPrompt": "強いつながり",
    "answer": "strong connection",
    "distractors": [
      "heavy connection",
      "big connection",
      "hard connection"
    ],
    "explanationJa": "connection は strong と組み合わせると「強いつながり」を表しやすいです。日本語の「強い・大きい」に引っ張られず、strong connection をまとまりで覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "There is a strong connection between sleep and memory.",
        "ja": "睡眠と記憶には強いつながりがあります。"
      },
      {
        "en": "The study found a strong connection between stress and health.",
        "ja": "その研究ではストレスと健康の間に強い関連が見つかりました。"
      }
    ]
  },
  {
    "id": "adj-strong-leadership",
    "category": "Adjective + Noun",
    "jaPrompt": "強いリーダーシップ",
    "answer": "strong leadership",
    "distractors": [
      "heavy leadership",
      "big leadership",
      "hard leadership"
    ],
    "explanationJa": "leadership は strong と組み合わせると「強いリーダーシップ」を表しやすいです。日本語の「強い・大きい」に引っ張られず、strong leadership をまとまりで覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "The company needs strong leadership during a crisis.",
        "ja": "危機の時には、会社には強いリーダーシップが必要です。"
      },
      {
        "en": "Strong leadership helped the team stay focused.",
        "ja": "強いリーダーシップのおかげで、チームは集中を保てました。"
      }
    ]
  },
  {
    "id": "adj-strong-demand",
    "category": "Adjective + Noun",
    "jaPrompt": "強い需要",
    "answer": "strong demand",
    "distractors": [
      "heavy demand",
      "big demand",
      "hard demand"
    ],
    "explanationJa": "demand は strong と組み合わせると「強い需要」を表しやすいです。日本語の「強い・大きい」に引っ張られず、strong demand をまとまりで覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "There is strong demand for skilled engineers.",
        "ja": "熟練したエンジニアへの需要は高いです。"
      },
      {
        "en": "Strong demand pushed prices higher.",
        "ja": "旺盛な需要によって価格が上がりました。"
      }
    ]
  },
  {
    "id": "adj-strong-economy",
    "category": "Adjective + Noun",
    "jaPrompt": "堅調な経済",
    "answer": "strong economy",
    "distractors": [
      "heavy economy",
      "big economy",
      "hard economy"
    ],
    "explanationJa": "economy は strong と組み合わせると「強い経済」を表しやすいです。日本語の「強い・大きい」に引っ張られず、strong economy をまとまりで覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "A strong economy can create more jobs.",
        "ja": "堅調な経済は雇用を増やすことがあります。"
      },
      {
        "en": "The country has maintained a strong economy for several years.",
        "ja": "その国は数年にわたって堅調な経済を維持しています。"
      }
    ]
  },
  {
    "id": "adj-strong-foundation",
    "category": "Adjective + Noun",
    "jaPrompt": "しっかりした基盤",
    "answer": "strong foundation",
    "distractors": [
      "heavy foundation",
      "big foundation",
      "hard foundation"
    ],
    "explanationJa": "foundation は strong と組み合わせると「強い基盤」を表しやすいです。日本語の「強い・大きい」に引っ張られず、strong foundation をまとまりで覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "Good grammar gives learners a strong foundation.",
        "ja": "文法をしっかり学ぶと、学習者に確かな基盤ができます。"
      },
      {
        "en": "The course provides a strong foundation in business English.",
        "ja": "その講座ではビジネス英語のしっかりした基礎を身につけられます。"
      }
    ]
  },
  {
    "id": "adj-strong-preference",
    "category": "Adjective + Noun",
    "jaPrompt": "強い好み・希望",
    "answer": "strong preference",
    "distractors": [
      "heavy preference",
      "big preference",
      "hard preference"
    ],
    "explanationJa": "preference は strong と組み合わせると「強い好み」を表しやすいです。日本語の「強い・大きい」に引っ張られず、strong preference をまとまりで覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "Many users have a strong preference for dark mode.",
        "ja": "多くのユーザーはダークモードを強く好んでいます。"
      },
      {
        "en": "She expressed a strong preference for working from home.",
        "ja": "彼女は在宅勤務を強く希望していると伝えました。"
      }
    ]
  },
  {
    "id": "adj-strong-commitment",
    "category": "Adjective + Noun",
    "jaPrompt": "強い責任感・熱意",
    "answer": "strong commitment",
    "distractors": [
      "heavy commitment",
      "big commitment",
      "hard commitment"
    ],
    "explanationJa": "commitment は strong と組み合わせると「強い約束・責任感」を表しやすいです。日本語の「強い・大きい」に引っ張られず、strong commitment をまとまりで覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "The team showed a strong commitment to quality.",
        "ja": "そのチームは品質への強いこだわりを示しました。"
      },
      {
        "en": "Her strong commitment helped the project succeed.",
        "ja": "彼女の強い責任感がプロジェクトの成功につながりました。"
      }
    ]
  },
  {
    "id": "adj-strong-candidate",
    "category": "Adjective + Noun",
    "jaPrompt": "有力な候補",
    "answer": "strong candidate",
    "distractors": [
      "heavy candidate",
      "big candidate",
      "hard candidate"
    ],
    "explanationJa": "candidate は strong と組み合わせると「強い候補」を表しやすいです。日本語の「強い・大きい」に引っ張られず、strong candidate をまとまりで覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "She is a strong candidate for the manager position.",
        "ja": "彼女はマネージャー職の有力な候補です。"
      },
      {
        "en": "The company interviewed three strong candidates.",
        "ja": "その会社は有力な候補者を3人面接しました。"
      }
    ]
  },
  {
    "id": "adj-strong-signal",
    "category": "Adjective + Noun",
    "jaPrompt": "強い信号",
    "answer": "strong signal",
    "distractors": [
      "heavy signal",
      "big signal",
      "hard signal"
    ],
    "explanationJa": "signal は strong と組み合わせると「強い信号」を表しやすいです。日本語の「強い・大きい」に引っ張られず、strong signal をまとまりで覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "The phone has a strong signal near the window.",
        "ja": "窓の近くでは携帯電話の電波が強いです。"
      },
      {
        "en": "A strong signal is important for stable video calls.",
        "ja": "安定したビデオ通話には強い電波が重要です。"
      }
    ]
  },
  {
    "id": "adj-strong-influence",
    "category": "Adjective + Noun",
    "jaPrompt": "強い影響力",
    "answer": "strong influence",
    "distractors": [
      "heavy influence",
      "big influence",
      "hard influence"
    ],
    "explanationJa": "influence は strong と組み合わせると「強い影響力」を表しやすいです。日本語の「強い・大きい」に引っ張られず、strong influence をまとまりで覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "Her teacher had a strong influence on her career.",
        "ja": "先生は彼女の進路に大きな影響を与えました。"
      },
      {
        "en": "Social media has a strong influence on public opinion.",
        "ja": "SNSは世論に大きな影響を与えます。"
      }
    ]
  },
  {
    "id": "adj-heavy-traffic",
    "category": "Adjective + Noun",
    "jaPrompt": "激しい交通渋滞",
    "answer": "heavy traffic",
    "distractors": [
      "strong traffic",
      "big traffic",
      "deep traffic"
    ],
    "explanationJa": "heavy traffic は「激しい交通渋滞」を表す自然な英語のまとまりです。形容詞と名詞の相性を、フレーズとして覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "We were late because of heavy traffic.",
        "ja": "交通渋滞がひどくて遅れました。"
      },
      {
        "en": "Heavy traffic is common during the morning rush hour.",
        "ja": "朝の通勤時間帯は交通渋滞がよく起こります。"
      }
    ]
  },
  {
    "id": "adj-heavy-snow",
    "category": "Adjective + Noun",
    "jaPrompt": "大雪",
    "answer": "heavy snow",
    "distractors": [
      "strong snow",
      "big snow",
      "deep snow"
    ],
    "explanationJa": "heavy snow は「大雪」を表す自然な英語のまとまりです。形容詞と名詞の相性を、フレーズとして覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "Heavy snow closed the airport.",
        "ja": "大雪で空港が閉鎖されました。"
      },
      {
        "en": "The train was delayed because of heavy snow.",
        "ja": "大雪のため電車が遅れました。"
      }
    ]
  },
  {
    "id": "adj-heavy-damage",
    "category": "Adjective + Noun",
    "jaPrompt": "大きな被害",
    "answer": "heavy damage",
    "distractors": [
      "strong damage",
      "big damage",
      "deep damage"
    ],
    "explanationJa": "heavy damage は「大きな被害」を表す自然な英語のまとまりです。形容詞と名詞の相性を、フレーズとして覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "The storm caused heavy damage to the town.",
        "ja": "嵐は町に大きな被害をもたらしました。"
      },
      {
        "en": "The building suffered heavy damage in the fire.",
        "ja": "その建物は火災で大きな被害を受けました。"
      }
    ]
  },
  {
    "id": "adj-heavy-losses",
    "category": "Adjective + Noun",
    "jaPrompt": "大きな損失",
    "answer": "heavy losses",
    "distractors": [
      "strong losses",
      "big losses",
      "deep losses"
    ],
    "explanationJa": "heavy losses は「大きな損失」を表す自然な英語のまとまりです。形容詞と名詞の相性を、フレーズとして覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "The company reported heavy losses last year.",
        "ja": "その会社は昨年、大きな損失を報告しました。"
      },
      {
        "en": "Heavy losses forced the store to close.",
        "ja": "大きな損失により、その店は閉店に追い込まれました。"
      }
    ]
  },
  {
    "id": "adj-heavy-use",
    "category": "Adjective + Noun",
    "jaPrompt": "頻繁な使用",
    "answer": "heavy use",
    "distractors": [
      "strong use",
      "big use",
      "deep use"
    ],
    "explanationJa": "heavy use は「頻繁な使用」を表す自然な英語のまとまりです。形容詞と名詞の相性を、フレーズとして覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "The battery wears out quickly under heavy use.",
        "ja": "頻繁に使うとバッテリーは早く消耗します。"
      },
      {
        "en": "This chair is designed for heavy use in offices.",
        "ja": "この椅子はオフィスでの頻繁な使用を想定して作られています。"
      }
    ]
  },
  {
    "id": "adj-heavy-workload",
    "category": "Adjective + Noun",
    "jaPrompt": "重い仕事量",
    "answer": "heavy workload",
    "distractors": [
      "strong workload",
      "big workload",
      "deep workload"
    ],
    "explanationJa": "heavy workload は「重い仕事量」を表す自然な英語のまとまりです。形容詞と名詞の相性を、フレーズとして覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "She has a heavy workload this month.",
        "ja": "彼女は今月、仕事量がかなり多いです。"
      },
      {
        "en": "A heavy workload can lead to stress.",
        "ja": "仕事量が多すぎるとストレスにつながることがあります。"
      }
    ]
  },
  {
    "id": "adj-heavy-industry",
    "category": "Adjective + Noun",
    "jaPrompt": "重工業",
    "answer": "heavy industry",
    "distractors": [
      "strong industry",
      "big industry",
      "deep industry"
    ],
    "explanationJa": "heavy industry は「重工業」を表す自然な英語のまとまりです。形容詞と名詞の相性を、フレーズとして覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "Heavy industry uses large machines and factories.",
        "ja": "重工業では大型機械や工場が使われます。"
      },
      {
        "en": "The city grew because of heavy industry.",
        "ja": "その都市は重工業によって発展しました。"
      }
    ]
  },
  {
    "id": "adj-heavy-drinking",
    "category": "Adjective + Noun",
    "jaPrompt": "大量飲酒",
    "answer": "heavy drinking",
    "distractors": [
      "strong drinking",
      "big drinking",
      "deep drinking"
    ],
    "explanationJa": "heavy drinking は「大量飲酒」を表す自然な英語のまとまりです。形容詞と名詞の相性を、フレーズとして覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "Heavy drinking can damage your health.",
        "ja": "大量飲酒は健康を損なうことがあります。"
      },
      {
        "en": "The doctor warned him about heavy drinking.",
        "ja": "医師は彼に飲み過ぎについて注意しました。"
      }
    ]
  },
  {
    "id": "adj-heavy-investment",
    "category": "Adjective + Noun",
    "jaPrompt": "大規模な投資",
    "answer": "heavy investment",
    "distractors": [
      "strong investment",
      "big investment",
      "deep investment"
    ],
    "explanationJa": "heavy investment は「大規模な投資」を表す自然な英語のまとまりです。形容詞と名詞の相性を、フレーズとして覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "The project requires heavy investment.",
        "ja": "そのプロジェクトには大規模な投資が必要です。"
      },
      {
        "en": "The company made a heavy investment in new technology.",
        "ja": "その会社は新技術に大規模な投資を行いました。"
      }
    ]
  },
  {
    "id": "adj-heavy-fighting",
    "category": "Adjective + Noun",
    "jaPrompt": "激しい戦闘",
    "answer": "heavy fighting",
    "distractors": [
      "strong fighting",
      "big fighting",
      "deep fighting"
    ],
    "explanationJa": "heavy fighting は「激しい戦闘」を表す自然な英語のまとまりです。形容詞と名詞の相性を、フレーズとして覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "Heavy fighting continued near the border.",
        "ja": "国境付近で激しい戦闘が続きました。"
      },
      {
        "en": "Many people left the area because of heavy fighting.",
        "ja": "激しい戦闘のため、多くの人がその地域を離れました。"
      }
    ]
  },
  {
    "id": "adj-heavy-costs",
    "category": "Adjective + Noun",
    "jaPrompt": "大きな費用負担",
    "answer": "heavy costs",
    "distractors": [
      "strong costs",
      "big costs",
      "deep costs"
    ],
    "explanationJa": "heavy costs は「大きな費用負担」を表す自然な英語のまとまりです。形容詞と名詞の相性を、フレーズとして覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "The plan would involve heavy costs.",
        "ja": "その計画には大きな費用がかかります。"
      },
      {
        "en": "Small companies may struggle with heavy costs.",
        "ja": "小規模企業は大きな費用負担に苦しむことがあります。"
      }
    ]
  },
  {
    "id": "adj-heavy-pressure",
    "category": "Adjective + Noun",
    "jaPrompt": "大きな圧力",
    "answer": "heavy pressure",
    "distractors": [
      "strong pressure",
      "big pressure",
      "deep pressure"
    ],
    "explanationJa": "heavy pressure は「大きな圧力」を表す自然な英語のまとまりです。形容詞と名詞の相性を、フレーズとして覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "The team was under heavy pressure to finish on time.",
        "ja": "チームは期限内に終えるよう強いプレッシャーを受けていました。"
      },
      {
        "en": "Heavy pressure can make simple tasks feel difficult.",
        "ja": "強いプレッシャーがあると、簡単な作業も難しく感じることがあります。"
      }
    ]
  },
  {
    "id": "adj-heavy-machinery",
    "category": "Adjective + Noun",
    "jaPrompt": "重機",
    "answer": "heavy machinery",
    "distractors": [
      "strong machinery",
      "big machinery",
      "deep machinery"
    ],
    "explanationJa": "heavy machinery は「重機」を表す自然な英語のまとまりです。形容詞と名詞の相性を、フレーズとして覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "Workers used heavy machinery to clear the road.",
        "ja": "作業員たちは道路を片付けるために重機を使いました。"
      },
      {
        "en": "Only trained staff can operate heavy machinery.",
        "ja": "重機を操作できるのは訓練を受けたスタッフだけです。"
      }
    ]
  },
  {
    "id": "adj-heavy-emphasis",
    "category": "Adjective + Noun",
    "jaPrompt": "強い重点",
    "answer": "heavy emphasis",
    "distractors": [
      "strong emphasis",
      "big emphasis",
      "deep emphasis"
    ],
    "explanationJa": "heavy emphasis は「強い重点」を表す自然な英語のまとまりです。形容詞と名詞の相性を、フレーズとして覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "The course places heavy emphasis on speaking practice.",
        "ja": "その講座は会話練習に重点を置いています。"
      },
      {
        "en": "The report puts heavy emphasis on safety.",
        "ja": "その報告書は安全性を強く重視しています。"
      }
    ]
  },
  {
    "id": "adj-high-quality",
    "category": "Adjective + Noun",
    "jaPrompt": "高品質",
    "answer": "high quality",
    "distractors": [
      "tall quality",
      "big quality",
      "strong quality"
    ],
    "explanationJa": "high quality は「高品質」を表す自然な英語のまとまりです。形容詞と名詞の相性を、フレーズとして覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "The shop sells high quality tea.",
        "ja": "その店は高品質のお茶を販売しています。"
      },
      {
        "en": "We need high quality data for this analysis.",
        "ja": "この分析には質の高いデータが必要です。"
      }
    ]
  },
  {
    "id": "adj-high-price",
    "category": "Adjective + Noun",
    "jaPrompt": "高い価格",
    "answer": "high price",
    "distractors": [
      "tall price",
      "big price",
      "strong price"
    ],
    "explanationJa": "high price は「高い価格」を表す自然な英語のまとまりです。形容詞と名詞の相性を、フレーズとして覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "The high price made customers hesitate.",
        "ja": "価格が高かったため、顧客は購入をためらいました。"
      },
      {
        "en": "A high price does not always mean high quality.",
        "ja": "価格が高いからといって、必ずしも品質が高いとは限りません。"
      }
    ]
  },
  {
    "id": "adj-high-level",
    "category": "Adjective + Noun",
    "jaPrompt": "高い水準",
    "answer": "high level",
    "distractors": [
      "tall level",
      "big level",
      "strong level"
    ],
    "explanationJa": "high level は「高い水準」を表す自然な英語のまとまりです。形容詞と名詞の相性を、フレーズとして覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "The course requires a high level of English.",
        "ja": "その講座には高い英語力が必要です。"
      },
      {
        "en": "The team maintained a high level of performance.",
        "ja": "チームは高い成果水準を維持しました。"
      }
    ]
  },
  {
    "id": "adj-high-standard",
    "category": "Adjective + Noun",
    "jaPrompt": "高い基準",
    "answer": "high standard",
    "distractors": [
      "tall standard",
      "big standard",
      "strong standard"
    ],
    "explanationJa": "high standard は「高い基準」を表す自然な英語のまとまりです。形容詞と名詞の相性を、フレーズとして覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "The company has a high standard for customer service.",
        "ja": "その会社は顧客対応に高い基準を設けています。"
      },
      {
        "en": "Her work always meets a high standard.",
        "ja": "彼女の仕事はいつも高い水準に達しています。"
      }
    ]
  },
  {
    "id": "adj-high-risk",
    "category": "Adjective + Noun",
    "jaPrompt": "高いリスク",
    "answer": "high risk",
    "distractors": [
      "tall risk",
      "big risk",
      "strong risk"
    ],
    "explanationJa": "high risk は「高いリスク」を表す自然な英語のまとまりです。形容詞と名詞の相性を、フレーズとして覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "This investment carries a high risk.",
        "ja": "この投資には高いリスクがあります。"
      },
      {
        "en": "The area has a high risk of flooding.",
        "ja": "その地域は洪水のリスクが高いです。"
      }
    ]
  },
  {
    "id": "adj-high-income",
    "category": "Adjective + Noun",
    "jaPrompt": "高収入",
    "answer": "high income",
    "distractors": [
      "tall income",
      "big income",
      "strong income"
    ],
    "explanationJa": "high income は「高収入」を表す自然な英語のまとまりです。形容詞と名詞の相性を、フレーズとして覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "High income does not always bring happiness.",
        "ja": "高収入が必ずしも幸せをもたらすとは限りません。"
      },
      {
        "en": "The survey compared high income and low income households.",
        "ja": "その調査は高収入世帯と低収入世帯を比較しました。"
      }
    ]
  },
  {
    "id": "adj-high-demand",
    "category": "Adjective + Noun",
    "jaPrompt": "高い需要",
    "answer": "high demand",
    "distractors": [
      "tall demand",
      "big demand",
      "strong demand"
    ],
    "explanationJa": "high demand は「高い需要」を表す自然な英語のまとまりです。形容詞と名詞の相性を、フレーズとして覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "There is high demand for online lessons.",
        "ja": "オンライン授業への需要は高いです。"
      },
      {
        "en": "High demand caused the tickets to sell out quickly.",
        "ja": "需要が高かったため、チケットはすぐに売り切れました。"
      }
    ]
  },
  {
    "id": "adj-high-priority",
    "category": "Adjective + Noun",
    "jaPrompt": "高い優先度",
    "answer": "high priority",
    "distractors": [
      "tall priority",
      "big priority",
      "strong priority"
    ],
    "explanationJa": "high priority は「高い優先度」を表す自然な英語のまとまりです。形容詞と名詞の相性を、フレーズとして覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "Security is a high priority for the company.",
        "ja": "その会社ではセキュリティの優先度が高いです。"
      },
      {
        "en": "Please treat this request as a high priority.",
        "ja": "この依頼は優先度の高いものとして扱ってください。"
      }
    ]
  },
  {
    "id": "adj-high-speed",
    "category": "Adjective + Noun",
    "jaPrompt": "高速",
    "answer": "high speed",
    "distractors": [
      "tall speed",
      "big speed",
      "strong speed"
    ],
    "explanationJa": "high speed は「高速」を表す自然な英語のまとまりです。形容詞と名詞の相性を、フレーズとして覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "The train travels at high speed.",
        "ja": "その列車は高速で走ります。"
      },
      {
        "en": "High speed internet is essential for video meetings.",
        "ja": "ビデオ会議には高速インターネットが欠かせません。"
      }
    ]
  },
  {
    "id": "adj-high-temperature",
    "category": "Adjective + Noun",
    "jaPrompt": "高温",
    "answer": "high temperature",
    "distractors": [
      "tall temperature",
      "big temperature",
      "strong temperature"
    ],
    "explanationJa": "high temperature は「高温」を表す自然な英語のまとまりです。形容詞と名詞の相性を、フレーズとして覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "The machine stops automatically at high temperature.",
        "ja": "その機械は高温になると自動で停止します。"
      },
      {
        "en": "Food should not be stored at high temperature.",
        "ja": "食品は高温で保管すべきではありません。"
      }
    ]
  },
  {
    "id": "adj-high-expectations",
    "category": "Adjective + Noun",
    "jaPrompt": "高い期待",
    "answer": "high expectations",
    "distractors": [
      "tall expectations",
      "big expectations",
      "strong expectations"
    ],
    "explanationJa": "high expectations は「高い期待」を表す自然な英語のまとまりです。形容詞と名詞の相性を、フレーズとして覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "Customers have high expectations for this product.",
        "ja": "顧客はこの製品に高い期待を寄せています。"
      },
      {
        "en": "The new employee felt pressure from high expectations.",
        "ja": "新入社員は高い期待にプレッシャーを感じていました。"
      }
    ]
  },
  {
    "id": "adj-high-performance",
    "category": "Adjective + Noun",
    "jaPrompt": "高性能",
    "answer": "high performance",
    "distractors": [
      "tall performance",
      "big performance",
      "strong performance"
    ],
    "explanationJa": "high performance は「高性能」を表す自然な英語のまとまりです。形容詞と名詞の相性を、フレーズとして覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "The laptop offers high performance for video editing.",
        "ja": "そのノートPCは動画編集に十分な高性能を備えています。"
      },
      {
        "en": "High performance is important for this type of software.",
        "ja": "この種類のソフトウェアでは高性能であることが重要です。"
      }
    ]
  },
  {
    "id": "adj-high-cost",
    "category": "Adjective + Noun",
    "jaPrompt": "高い費用",
    "answer": "high cost",
    "distractors": [
      "tall cost",
      "big cost",
      "strong cost"
    ],
    "explanationJa": "high cost は「高い費用」を表す自然な英語のまとまりです。形容詞と名詞の相性を、フレーズとして覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "High cost is a major problem for small businesses.",
        "ja": "高い費用は小規模企業にとって大きな問題です。"
      },
      {
        "en": "The high cost of housing affects many families.",
        "ja": "住宅費の高さは多くの家庭に影響しています。"
      }
    ]
  },
  {
    "id": "adj-high-score",
    "category": "Adjective + Noun",
    "jaPrompt": "高得点",
    "answer": "high score",
    "distractors": [
      "tall score",
      "big score",
      "strong score"
    ],
    "explanationJa": "high score は「高得点」を表す自然な英語のまとまりです。形容詞と名詞の相性を、フレーズとして覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "She got a high score on the English test.",
        "ja": "彼女は英語のテストで高得点を取りました。"
      },
      {
        "en": "A high score helped him pass the exam.",
        "ja": "高得点を取ったことで、彼は試験に合格できました。"
      }
    ]
  },
  {
    "id": "adj-high-value",
    "category": "Adjective + Noun",
    "jaPrompt": "高い価値",
    "answer": "high value",
    "distractors": [
      "tall value",
      "big value",
      "strong value"
    ],
    "explanationJa": "high value は「高い価値」を表す自然な英語のまとまりです。形容詞と名詞の相性を、フレーズとして覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "The painting has high value as a historical record.",
        "ja": "その絵は歴史資料として高い価値があります。"
      },
      {
        "en": "The service provides high value for small teams.",
        "ja": "そのサービスは小規模チームに高い価値を提供します。"
      }
    ]
  },
  {
    "id": "adj-deep-sleep",
    "category": "Adjective + Noun",
    "jaPrompt": "深い睡眠",
    "answer": "deep sleep",
    "distractors": [
      "heavy sleep",
      "strong sleep",
      "large sleep"
    ],
    "explanationJa": "deep sleep は「深い睡眠」を表す自然な英語のまとまりです。形容詞と名詞の相性を、フレーズとして覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "Deep sleep helps the body recover.",
        "ja": "深い睡眠は体の回復を助けます。"
      },
      {
        "en": "Stress can make it difficult to get deep sleep.",
        "ja": "ストレスがあると深い睡眠を取りにくくなります。"
      }
    ]
  },
  {
    "id": "adj-deep-understanding",
    "category": "Adjective + Noun",
    "jaPrompt": "深い理解",
    "answer": "deep understanding",
    "distractors": [
      "heavy understanding",
      "strong understanding",
      "large understanding"
    ],
    "explanationJa": "deep understanding は「深い理解」を表す自然な英語のまとまりです。形容詞と名詞の相性を、フレーズとして覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "She has a deep understanding of Japanese culture.",
        "ja": "彼女は日本文化を深く理解しています。"
      },
      {
        "en": "The course gave me a deep understanding of grammar.",
        "ja": "その講座で文法への理解が深まりました。"
      }
    ]
  },
  {
    "id": "adj-deep-concern",
    "category": "Adjective + Noun",
    "jaPrompt": "深い懸念",
    "answer": "deep concern",
    "distractors": [
      "heavy concern",
      "strong concern",
      "large concern"
    ],
    "explanationJa": "deep concern は「深い懸念」を表す自然な英語のまとまりです。形容詞と名詞の相性を、フレーズとして覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "Parents expressed deep concern about safety.",
        "ja": "保護者たちは安全性について深い懸念を示しました。"
      },
      {
        "en": "The news caused deep concern among local residents.",
        "ja": "そのニュースは地域住民に深い不安をもたらしました。"
      }
    ]
  },
  {
    "id": "adj-deep-knowledge",
    "category": "Adjective + Noun",
    "jaPrompt": "深い知識",
    "answer": "deep knowledge",
    "distractors": [
      "heavy knowledge",
      "strong knowledge",
      "large knowledge"
    ],
    "explanationJa": "deep knowledge は「深い知識」を表す自然な英語のまとまりです。形容詞と名詞の相性を、フレーズとして覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "He has deep knowledge of network security.",
        "ja": "彼はネットワークセキュリティについて深い知識があります。"
      },
      {
        "en": "Deep knowledge of the system helped her solve the issue.",
        "ja": "システムへの深い知識が、彼女の問題解決に役立ちました。"
      }
    ]
  },
  {
    "id": "adj-deep-respect",
    "category": "Adjective + Noun",
    "jaPrompt": "深い尊敬",
    "answer": "deep respect",
    "distractors": [
      "heavy respect",
      "strong respect",
      "large respect"
    ],
    "explanationJa": "deep respect は「深い尊敬」を表す自然な英語のまとまりです。形容詞と名詞の相性を、フレーズとして覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "I have deep respect for her work.",
        "ja": "私は彼女の仕事を深く尊敬しています。"
      },
      {
        "en": "The team showed deep respect for their former manager.",
        "ja": "チームは前任のマネージャーに深い敬意を示しました。"
      }
    ]
  },
  {
    "id": "adj-deep-conversation",
    "category": "Adjective + Noun",
    "jaPrompt": "深い会話",
    "answer": "deep conversation",
    "distractors": [
      "heavy conversation",
      "strong conversation",
      "large conversation"
    ],
    "explanationJa": "deep conversation は「深い会話」を表す自然な英語のまとまりです。形容詞と名詞の相性を、フレーズとして覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "We had a deep conversation about life and work.",
        "ja": "私たちは人生と仕事について深く話し合いました。"
      },
      {
        "en": "A deep conversation can change how you see a problem.",
        "ja": "深い会話によって問題の見方が変わることがあります。"
      }
    ]
  },
  {
    "id": "adj-deep-breath",
    "category": "Adjective + Noun",
    "jaPrompt": "深呼吸",
    "answer": "deep breath",
    "distractors": [
      "heavy breath",
      "strong breath",
      "large breath"
    ],
    "explanationJa": "deep breath は「深呼吸」を表す自然な英語のまとまりです。形容詞と名詞の相性を、フレーズとして覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "Take a deep breath before you speak.",
        "ja": "話す前に深呼吸してください。"
      },
      {
        "en": "She took a deep breath to calm herself.",
        "ja": "彼女は落ち着くために深呼吸しました。"
      }
    ]
  },
  {
    "id": "adj-deep-water",
    "category": "Adjective + Noun",
    "jaPrompt": "深い水",
    "answer": "deep water",
    "distractors": [
      "heavy water",
      "strong water",
      "large water"
    ],
    "explanationJa": "deep water は「深い水」を表す自然な英語のまとまりです。形容詞と名詞の相性を、フレーズとして覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "Children should not swim in deep water alone.",
        "ja": "子どもは深い水の中で一人で泳ぐべきではありません。"
      },
      {
        "en": "The boat moved slowly through deep water.",
        "ja": "船は深い水域をゆっくり進みました。"
      }
    ]
  },
  {
    "id": "adj-deep-analysis",
    "category": "Adjective + Noun",
    "jaPrompt": "深い分析",
    "answer": "deep analysis",
    "distractors": [
      "heavy analysis",
      "strong analysis",
      "large analysis"
    ],
    "explanationJa": "deep analysis は「深い分析」を表す自然な英語のまとまりです。形容詞と名詞の相性を、フレーズとして覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "The report includes a deep analysis of customer behavior.",
        "ja": "その報告書には顧客行動の深い分析が含まれています。"
      },
      {
        "en": "We need a deep analysis before changing the strategy.",
        "ja": "戦略を変える前に深い分析が必要です。"
      }
    ]
  },
  {
    "id": "adj-deep-connection",
    "category": "Adjective + Noun",
    "jaPrompt": "深いつながり",
    "answer": "deep connection",
    "distractors": [
      "heavy connection",
      "strong connection",
      "large connection"
    ],
    "explanationJa": "deep connection は「深いつながり」を表す自然な英語のまとまりです。形容詞と名詞の相性を、フレーズとして覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "There is a deep connection between language and culture.",
        "ja": "言語と文化には深いつながりがあります。"
      },
      {
        "en": "She felt a deep connection with the city.",
        "ja": "彼女はその街に深いつながりを感じました。"
      }
    ]
  },
  {
    "id": "adj-deep-roots",
    "category": "Adjective + Noun",
    "jaPrompt": "深い根",
    "answer": "deep roots",
    "distractors": [
      "heavy roots",
      "strong roots",
      "large roots"
    ],
    "explanationJa": "deep roots は「深い根」を表す自然な英語のまとまりです。形容詞と名詞の相性を、フレーズとして覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "This tradition has deep roots in the community.",
        "ja": "この伝統は地域社会に深く根付いています。"
      },
      {
        "en": "The problem has deep roots in the old process.",
        "ja": "その問題は古い手順に深く根ざしています。"
      }
    ]
  },
  {
    "id": "adj-deep-sadness",
    "category": "Adjective + Noun",
    "jaPrompt": "深い悲しみ",
    "answer": "deep sadness",
    "distractors": [
      "heavy sadness",
      "strong sadness",
      "large sadness"
    ],
    "explanationJa": "deep sadness は「深い悲しみ」を表す自然な英語のまとまりです。形容詞と名詞の相性を、フレーズとして覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "The news filled the family with deep sadness.",
        "ja": "その知らせは家族に深い悲しみをもたらしました。"
      },
      {
        "en": "She felt deep sadness after losing her friend.",
        "ja": "友人を失って、彼女は深い悲しみを感じました。"
      }
    ]
  },
  {
    "id": "adj-deep-learning",
    "category": "Adjective + Noun",
    "jaPrompt": "深層学習",
    "answer": "deep learning",
    "distractors": [
      "heavy learning",
      "strong learning",
      "large learning"
    ],
    "explanationJa": "deep learning は「深層学習」を表す自然な英語のまとまりです。形容詞と名詞の相性を、フレーズとして覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "Deep learning is used in image recognition.",
        "ja": "深層学習は画像認識に使われています。"
      },
      {
        "en": "The course explains the basics of deep learning.",
        "ja": "その講座では深層学習の基礎を説明します。"
      }
    ]
  },
  {
    "id": "adj-deep-focus",
    "category": "Adjective + Noun",
    "jaPrompt": "深い集中",
    "answer": "deep focus",
    "distractors": [
      "heavy focus",
      "strong focus",
      "large focus"
    ],
    "explanationJa": "deep focus は「深い集中」を表す自然な英語のまとまりです。形容詞と名詞の相性を、フレーズとして覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "Deep focus helps me finish difficult tasks.",
        "ja": "深く集中すると難しい作業を終えやすくなります。"
      },
      {
        "en": "She needs deep focus when writing reports.",
        "ja": "彼女は報告書を書くときに深い集中が必要です。"
      }
    ]
  },
  {
    "id": "adj-deep-insight",
    "category": "Adjective + Noun",
    "jaPrompt": "深い洞察",
    "answer": "deep insight",
    "distractors": [
      "heavy insight",
      "strong insight",
      "large insight"
    ],
    "explanationJa": "deep insight は「深い洞察」を表す自然な英語のまとまりです。形容詞と名詞の相性を、フレーズとして覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "The interview gave us deep insight into customer needs.",
        "ja": "そのインタビューから顧客ニーズへの深い洞察が得られました。"
      },
      {
        "en": "His book offers deep insight into human behavior.",
        "ja": "彼の本は人間の行動について深い洞察を与えてくれます。"
      }
    ]
  },
  {
    "id": "adj-close-friend",
    "category": "Adjective + Noun",
    "jaPrompt": "親しい友人",
    "answer": "close friend",
    "distractors": [
      "near friend",
      "tight friend",
      "short friend"
    ],
    "explanationJa": "close friend は「親しい友人」を表す自然な英語のまとまりです。形容詞と名詞の相性を、フレーズとして覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "She is one of my close friends.",
        "ja": "彼女は私の親しい友人の一人です。"
      },
      {
        "en": "I talked to a close friend about the problem.",
        "ja": "その問題について親しい友人に相談しました。"
      }
    ]
  },
  {
    "id": "adj-close-relationship",
    "category": "Adjective + Noun",
    "jaPrompt": "親密な関係",
    "answer": "close relationship",
    "distractors": [
      "near relationship",
      "tight relationship",
      "short relationship"
    ],
    "explanationJa": "close relationship は「親密な関係」を表す自然な英語のまとまりです。形容詞と名詞の相性を、フレーズとして覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "The two companies have a close relationship.",
        "ja": "その2社は密接な関係にあります。"
      },
      {
        "en": "A close relationship with customers is important.",
        "ja": "顧客との親密な関係は重要です。"
      }
    ]
  },
  {
    "id": "adj-close-attention",
    "category": "Adjective + Noun",
    "jaPrompt": "細心の注意",
    "answer": "close attention",
    "distractors": [
      "near attention",
      "tight attention",
      "short attention"
    ],
    "explanationJa": "close attention は「細心の注意」を表す自然な英語のまとまりです。形容詞と名詞の相性を、フレーズとして覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "Please pay close attention to the instructions.",
        "ja": "指示をよく確認してください。"
      },
      {
        "en": "The teacher paid close attention to each student's progress.",
        "ja": "先生はそれぞれの学生の進歩を細かく見ていました。"
      }
    ]
  },
  {
    "id": "adj-close-contact",
    "category": "Adjective + Noun",
    "jaPrompt": "密接な接触",
    "answer": "close contact",
    "distractors": [
      "near contact",
      "tight contact",
      "short contact"
    ],
    "explanationJa": "close contact は「密接な接触」を表す自然な英語のまとまりです。形容詞と名詞の相性を、フレーズとして覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "The nurse had close contact with the patient.",
        "ja": "看護師はその患者と密接に接していました。"
      },
      {
        "en": "Avoid close contact if you feel sick.",
        "ja": "体調が悪いときは密接な接触を避けてください。"
      }
    ]
  },
  {
    "id": "adj-close-cooperation",
    "category": "Adjective + Noun",
    "jaPrompt": "緊密な協力",
    "answer": "close cooperation",
    "distractors": [
      "near cooperation",
      "tight cooperation",
      "short cooperation"
    ],
    "explanationJa": "close cooperation は「緊密な協力」を表す自然な英語のまとまりです。形容詞と名詞の相性を、フレーズとして覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "The project requires close cooperation between teams.",
        "ja": "そのプロジェクトにはチーム間の緊密な協力が必要です。"
      },
      {
        "en": "Close cooperation helped us finish the work quickly.",
        "ja": "緊密な協力のおかげで作業を早く終えられました。"
      }
    ]
  },
  {
    "id": "adj-close-connection",
    "category": "Adjective + Noun",
    "jaPrompt": "密接なつながり",
    "answer": "close connection",
    "distractors": [
      "near connection",
      "tight connection",
      "short connection"
    ],
    "explanationJa": "close connection は「密接なつながり」を表す自然な英語のまとまりです。形容詞と名詞の相性を、フレーズとして覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "There is a close connection between price and demand.",
        "ja": "価格と需要には密接な関係があります。"
      },
      {
        "en": "The study shows a close connection between exercise and sleep.",
        "ja": "その研究は運動と睡眠の密接な関係を示しています。"
      }
    ]
  },
  {
    "id": "adj-close-inspection",
    "category": "Adjective + Noun",
    "jaPrompt": "綿密な検査",
    "answer": "close inspection",
    "distractors": [
      "near inspection",
      "tight inspection",
      "short inspection"
    ],
    "explanationJa": "close inspection は「綿密な検査」を表す自然な英語のまとまりです。形容詞と名詞の相性を、フレーズとして覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "The machine passed a close inspection.",
        "ja": "その機械は綿密な検査に合格しました。"
      },
      {
        "en": "Close inspection revealed a small crack.",
        "ja": "詳しく調べると小さなひびが見つかりました。"
      }
    ]
  },
  {
    "id": "adj-close-look",
    "category": "Adjective + Noun",
    "jaPrompt": "詳しい確認",
    "answer": "close look",
    "distractors": [
      "near look",
      "tight look",
      "short look"
    ],
    "explanationJa": "close look は「詳しい確認」を表す自然な英語のまとまりです。形容詞と名詞の相性を、フレーズとして覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "Let's take a close look at the data.",
        "ja": "データを詳しく見てみましょう。"
      },
      {
        "en": "A close look at the report shows the real problem.",
        "ja": "報告書を詳しく見ると本当の問題が分かります。"
      }
    ]
  },
  {
    "id": "adj-close-relative",
    "category": "Adjective + Noun",
    "jaPrompt": "近い親戚",
    "answer": "close relative",
    "distractors": [
      "near relative",
      "tight relative",
      "short relative"
    ],
    "explanationJa": "close relative は「近い親戚」を表す自然な英語のまとまりです。形容詞と名詞の相性を、フレーズとして覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "Only close relatives attended the small ceremony.",
        "ja": "その小さな式には近い親戚だけが出席しました。"
      },
      {
        "en": "She stayed with a close relative during the trip.",
        "ja": "彼女は旅行中、近い親戚の家に泊まりました。"
      }
    ]
  },
  {
    "id": "adj-close-competition",
    "category": "Adjective + Noun",
    "jaPrompt": "接戦",
    "answer": "close competition",
    "distractors": [
      "near competition",
      "tight competition",
      "short competition"
    ],
    "explanationJa": "close competition は「接戦」を表す自然な英語のまとまりです。形容詞と名詞の相性を、フレーズとして覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "The two teams are in close competition for first place.",
        "ja": "その2チームは首位をめぐって接戦を繰り広げています。"
      },
      {
        "en": "Close competition pushed both companies to improve.",
        "ja": "激しい競争が両社の改善を促しました。"
      }
    ]
  },
  {
    "id": "adj-close-match",
    "category": "Adjective + Noun",
    "jaPrompt": "接戦",
    "answer": "close match",
    "distractors": [
      "near match",
      "tight match",
      "short match"
    ],
    "explanationJa": "close match は「接戦」を表す自然な英語のまとまりです。形容詞と名詞の相性を、フレーズとして覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "The final was a close match.",
        "ja": "決勝は接戦でした。"
      },
      {
        "en": "We lost a close match by one point.",
        "ja": "私たちは1点差の接戦で負けました。"
      }
    ]
  },
  {
    "id": "adj-close-collaboration",
    "category": "Adjective + Noun",
    "jaPrompt": "緊密な連携",
    "answer": "close collaboration",
    "distractors": [
      "near collaboration",
      "tight collaboration",
      "short collaboration"
    ],
    "explanationJa": "close collaboration は「緊密な連携」を表す自然な英語のまとまりです。形容詞と名詞の相性を、フレーズとして覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "Close collaboration between departments improved the service.",
        "ja": "部署間の緊密な連携によってサービスが改善しました。"
      },
      {
        "en": "The project depends on close collaboration with the client.",
        "ja": "そのプロジェクトは顧客との緊密な連携にかかっています。"
      }
    ]
  },
  {
    "id": "adj-close-reading",
    "category": "Adjective + Noun",
    "jaPrompt": "精読",
    "answer": "close reading",
    "distractors": [
      "near reading",
      "tight reading",
      "short reading"
    ],
    "explanationJa": "close reading は「精読」を表す自然な英語のまとまりです。形容詞と名詞の相性を、フレーズとして覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "Close reading helps students understand the text deeply.",
        "ja": "精読は学生が文章を深く理解する助けになります。"
      },
      {
        "en": "The class practiced close reading of a short article.",
        "ja": "授業では短い記事を精読する練習をしました。"
      }
    ]
  },
  {
    "id": "adj-close-monitoring",
    "category": "Adjective + Noun",
    "jaPrompt": "綿密な監視",
    "answer": "close monitoring",
    "distractors": [
      "near monitoring",
      "tight monitoring",
      "short monitoring"
    ],
    "explanationJa": "close monitoring は「綿密な監視」を表す自然な英語のまとまりです。形容詞と名詞の相性を、フレーズとして覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "The patient requires close monitoring overnight.",
        "ja": "その患者は夜通し注意深く観察する必要があります。"
      },
      {
        "en": "Close monitoring helped detect the problem early.",
        "ja": "綿密な監視により問題を早期に発見できました。"
      }
    ]
  },
  {
    "id": "adj-close-examination",
    "category": "Adjective + Noun",
    "jaPrompt": "詳しい調査",
    "answer": "close examination",
    "distractors": [
      "near examination",
      "tight examination",
      "short examination"
    ],
    "explanationJa": "close examination は「詳しい調査」を表す自然な英語のまとまりです。形容詞と名詞の相性を、フレーズとして覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "A close examination of the data revealed a mistake.",
        "ja": "データを詳しく調べるとミスが見つかりました。"
      },
      {
        "en": "The case needs close examination before a decision is made.",
        "ja": "判断を下す前に、その件を詳しく調べる必要があります。"
      }
    ]
  },
  {
    "id": "adj-wide-range",
    "category": "Adjective + Noun",
    "jaPrompt": "幅広い範囲",
    "answer": "wide range",
    "distractors": [
      "large range",
      "big range",
      "thick range"
    ],
    "explanationJa": "wide range は「幅広い範囲」を表す自然な英語のまとまりです。形容詞と名詞の相性を、フレーズとして覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "The store offers a wide range of products.",
        "ja": "その店は幅広い商品を扱っています。"
      },
      {
        "en": "The course covers a wide range of topics.",
        "ja": "その講座は幅広いテーマを扱います。"
      }
    ]
  },
  {
    "id": "adj-wide-variety",
    "category": "Adjective + Noun",
    "jaPrompt": "多種多様",
    "answer": "wide variety",
    "distractors": [
      "large variety",
      "big variety",
      "thick variety"
    ],
    "explanationJa": "wide variety は「多種多様」を表す自然な英語のまとまりです。形容詞と名詞の相性を、フレーズとして覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "The menu offers a wide variety of dishes.",
        "ja": "そのメニューには多種多様な料理があります。"
      },
      {
        "en": "Students can choose from a wide variety of classes.",
        "ja": "学生は多様な授業から選べます。"
      }
    ]
  },
  {
    "id": "adj-wide-choice",
    "category": "Adjective + Noun",
    "jaPrompt": "幅広い選択肢",
    "answer": "wide choice",
    "distractors": [
      "large choice",
      "big choice",
      "thick choice"
    ],
    "explanationJa": "wide choice は「幅広い選択肢」を表す自然な英語のまとまりです。形容詞と名詞の相性を、フレーズとして覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "Online shopping gives customers a wide choice.",
        "ja": "オンラインショッピングでは顧客に幅広い選択肢があります。"
      },
      {
        "en": "The school offers a wide choice of language courses.",
        "ja": "その学校は幅広い語学講座を提供しています。"
      }
    ]
  },
  {
    "id": "adj-wide-selection",
    "category": "Adjective + Noun",
    "jaPrompt": "幅広い品ぞろえ",
    "answer": "wide selection",
    "distractors": [
      "large selection",
      "big selection",
      "thick selection"
    ],
    "explanationJa": "wide selection は「幅広い品ぞろえ」を表す自然な英語のまとまりです。形容詞と名詞の相性を、フレーズとして覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "The shop has a wide selection of notebooks.",
        "ja": "その店にはノートが幅広くそろっています。"
      },
      {
        "en": "Customers appreciate the wide selection of colors.",
        "ja": "顧客は豊富な色の選択肢を評価しています。"
      }
    ]
  },
  {
    "id": "adj-wide-audience",
    "category": "Adjective + Noun",
    "jaPrompt": "幅広い観客・読者",
    "answer": "wide audience",
    "distractors": [
      "large audience",
      "big audience",
      "thick audience"
    ],
    "explanationJa": "wide audience は「幅広い観客・読者」を表す自然な英語のまとまりです。形容詞と名詞の相性を、フレーズとして覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "The movie attracted a wide audience.",
        "ja": "その映画は幅広い観客を引きつけました。"
      },
      {
        "en": "Her blog reaches a wide audience.",
        "ja": "彼女のブログは幅広い読者に届いています。"
      }
    ]
  },
  {
    "id": "adj-wide-gap",
    "category": "Adjective + Noun",
    "jaPrompt": "大きな差",
    "answer": "wide gap",
    "distractors": [
      "large gap",
      "big gap",
      "thick gap"
    ],
    "explanationJa": "wide gap は「大きな差」を表す自然な英語のまとまりです。形容詞と名詞の相性を、フレーズとして覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "There is a wide gap between rich and poor areas.",
        "ja": "裕福な地域と貧しい地域の間には大きな差があります。"
      },
      {
        "en": "The survey showed a wide gap in test scores.",
        "ja": "その調査ではテストの点数に大きな差が見られました。"
      }
    ]
  },
  {
    "id": "adj-wide-experience",
    "category": "Adjective + Noun",
    "jaPrompt": "幅広い経験",
    "answer": "wide experience",
    "distractors": [
      "large experience",
      "big experience",
      "thick experience"
    ],
    "explanationJa": "wide experience は「幅広い経験」を表す自然な英語のまとまりです。形容詞と名詞の相性を、フレーズとして覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "She has wide experience in project management.",
        "ja": "彼女はプロジェクト管理で幅広い経験があります。"
      },
      {
        "en": "Wide experience helps him solve unusual problems.",
        "ja": "幅広い経験が、彼が珍しい問題を解決する助けになっています。"
      }
    ]
  },
  {
    "id": "adj-wide-knowledge",
    "category": "Adjective + Noun",
    "jaPrompt": "幅広い知識",
    "answer": "wide knowledge",
    "distractors": [
      "large knowledge",
      "big knowledge",
      "thick knowledge"
    ],
    "explanationJa": "wide knowledge は「幅広い知識」を表す自然な英語のまとまりです。形容詞と名詞の相性を、フレーズとして覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "The guide has wide knowledge of local history.",
        "ja": "そのガイドは地域の歴史について幅広い知識があります。"
      },
      {
        "en": "Wide knowledge is useful when working with different teams.",
        "ja": "さまざまなチームと働くとき、幅広い知識は役に立ちます。"
      }
    ]
  },
  {
    "id": "adj-wide-support",
    "category": "Adjective + Noun",
    "jaPrompt": "幅広い支持",
    "answer": "wide support",
    "distractors": [
      "large support",
      "big support",
      "thick support"
    ],
    "explanationJa": "wide support は「幅広い支持」を表す自然な英語のまとまりです。形容詞と名詞の相性を、フレーズとして覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "The policy gained wide support from voters.",
        "ja": "その政策は有権者から幅広い支持を得ました。"
      },
      {
        "en": "The project needs wide support to continue.",
        "ja": "そのプロジェクトを続けるには幅広い支持が必要です。"
      }
    ]
  },
  {
    "id": "adj-wide-coverage",
    "category": "Adjective + Noun",
    "jaPrompt": "広範な報道・対応範囲",
    "answer": "wide coverage",
    "distractors": [
      "large coverage",
      "big coverage",
      "thick coverage"
    ],
    "explanationJa": "wide coverage は「広範な報道・対応範囲」を表す自然な英語のまとまりです。形容詞と名詞の相性を、フレーズとして覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "The event received wide coverage in the media.",
        "ja": "そのイベントはメディアで広く報道されました。"
      },
      {
        "en": "The insurance plan offers wide coverage.",
        "ja": "その保険プランは幅広い範囲を補償します。"
      }
    ]
  },
  {
    "id": "adj-wide-application",
    "category": "Adjective + Noun",
    "jaPrompt": "幅広い応用",
    "answer": "wide application",
    "distractors": [
      "large application",
      "big application",
      "thick application"
    ],
    "explanationJa": "wide application は「幅広い応用」を表す自然な英語のまとまりです。形容詞と名詞の相性を、フレーズとして覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "This technology has wide application in medicine.",
        "ja": "この技術は医療分野で幅広く応用できます。"
      },
      {
        "en": "The method has wide application in language learning.",
        "ja": "その方法は語学学習に幅広く応用できます。"
      }
    ]
  },
  {
    "id": "adj-wide-perspective",
    "category": "Adjective + Noun",
    "jaPrompt": "広い視野",
    "answer": "wide perspective",
    "distractors": [
      "large perspective",
      "big perspective",
      "thick perspective"
    ],
    "explanationJa": "wide perspective は「広い視野」を表す自然な英語のまとまりです。形容詞と名詞の相性を、フレーズとして覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "Travel can give you a wide perspective.",
        "ja": "旅行は広い視野を与えてくれます。"
      },
      {
        "en": "A wide perspective helps managers make better decisions.",
        "ja": "広い視野は管理職がよりよい判断をする助けになります。"
      }
    ]
  },
  {
    "id": "adj-wide-interest",
    "category": "Adjective + Noun",
    "jaPrompt": "幅広い関心",
    "answer": "wide interest",
    "distractors": [
      "large interest",
      "big interest",
      "thick interest"
    ],
    "explanationJa": "wide interest は「幅広い関心」を表す自然な英語のまとまりです。形容詞と名詞の相性を、フレーズとして覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "The discovery attracted wide interest among scientists.",
        "ja": "その発見は科学者の間で幅広い関心を集めました。"
      },
      {
        "en": "The topic generated wide interest online.",
        "ja": "その話題はネット上で幅広い関心を集めました。"
      }
    ]
  },
  {
    "id": "adj-wide-appeal",
    "category": "Adjective + Noun",
    "jaPrompt": "幅広い魅力",
    "answer": "wide appeal",
    "distractors": [
      "large appeal",
      "big appeal",
      "thick appeal"
    ],
    "explanationJa": "wide appeal は「幅広い魅力」を表す自然な英語のまとまりです。形容詞と名詞の相性を、フレーズとして覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "The product has wide appeal because it is easy to use.",
        "ja": "その製品は使いやすいため幅広い層に受け入れられています。"
      },
      {
        "en": "The story has wide appeal for both children and adults.",
        "ja": "その物語は子どもにも大人にも広く魅力があります。"
      }
    ]
  },
  {
    "id": "adj-wide-distribution",
    "category": "Adjective + Noun",
    "jaPrompt": "広い流通",
    "answer": "wide distribution",
    "distractors": [
      "large distribution",
      "big distribution",
      "thick distribution"
    ],
    "explanationJa": "wide distribution は「広い流通」を表す自然な英語のまとまりです。形容詞と名詞の相性を、フレーズとして覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "The magazine has wide distribution across the country.",
        "ja": "その雑誌は全国に広く流通しています。"
      },
      {
        "en": "Wide distribution helped the product become popular quickly.",
        "ja": "広い流通網のおかげで、その製品はすぐに人気になりました。"
      }
    ]
  },
  {
    "id": "adj-significant-increase",
    "category": "Academic",
    "jaPrompt": "大幅な増加",
    "answer": "significant increase",
    "distractors": [
      "big increase",
      "large increase",
      "strong increase"
    ],
    "explanationJa": "significant increase は「大幅な増加」を表す自然な英語のまとまりです。語の組み合わせをフレーズとして覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "There was a significant increase in online orders.",
        "ja": "オンライン注文が大幅に増えました。"
      },
      {
        "en": "The city saw a significant increase in tourists.",
        "ja": "その市では観光客が大幅に増加しました。"
      }
    ]
  },
  {
    "id": "adj-significant-difference",
    "category": "Academic",
    "jaPrompt": "大きな違い",
    "answer": "significant difference",
    "distractors": [
      "big difference",
      "large difference",
      "strong difference"
    ],
    "explanationJa": "significant difference は「大きな違い」を表す自然な英語のまとまりです。語の組み合わせをフレーズとして覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "There is a significant difference between the two results.",
        "ja": "2つの結果には大きな違いがあります。"
      },
      {
        "en": "Small changes in wording can make a significant difference.",
        "ja": "言い方を少し変えるだけで大きな違いが出ることがあります。"
      }
    ]
  },
  {
    "id": "adj-significant-impact",
    "category": "Academic",
    "jaPrompt": "大きな影響",
    "answer": "significant impact",
    "distractors": [
      "big impact",
      "large impact",
      "strong impact"
    ],
    "explanationJa": "significant impact は「大きな影響」を表す自然な英語のまとまりです。語の組み合わせをフレーズとして覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "The new law had a significant impact on small businesses.",
        "ja": "新しい法律は小規模企業に大きな影響を与えました。"
      },
      {
        "en": "Sleep has a significant impact on memory.",
        "ja": "睡眠は記憶に大きな影響を与えます。"
      }
    ]
  },
  {
    "id": "adj-significant-change",
    "category": "Academic",
    "jaPrompt": "大きな変化",
    "answer": "significant change",
    "distractors": [
      "big change",
      "large change",
      "strong change"
    ],
    "explanationJa": "significant change は「大きな変化」を表す自然な英語のまとまりです。語の組み合わせをフレーズとして覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "The update made a significant change to the screen layout.",
        "ja": "その更新で画面レイアウトが大きく変わりました。"
      },
      {
        "en": "There has been a significant change in customer behavior.",
        "ja": "顧客の行動に大きな変化がありました。"
      }
    ]
  },
  {
    "id": "adj-significant-improvement",
    "category": "Academic",
    "jaPrompt": "大きな改善",
    "answer": "significant improvement",
    "distractors": [
      "big improvement",
      "large improvement",
      "strong improvement"
    ],
    "explanationJa": "significant improvement は「大きな改善」を表す自然な英語のまとまりです。語の組み合わせをフレーズとして覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "The new process led to a significant improvement in speed.",
        "ja": "新しい手順によって処理速度が大きく改善しました。"
      },
      {
        "en": "Her pronunciation showed significant improvement.",
        "ja": "彼女の発音には大きな改善が見られました。"
      }
    ]
  },
  {
    "id": "adj-significant-effect",
    "category": "Academic",
    "jaPrompt": "大きな効果",
    "answer": "significant effect",
    "distractors": [
      "big effect",
      "large effect",
      "strong effect"
    ],
    "explanationJa": "significant effect は「大きな効果」を表す自然な英語のまとまりです。語の組み合わせをフレーズとして覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "The training had a significant effect on productivity.",
        "ja": "その研修は生産性に大きな効果をもたらしました。"
      },
      {
        "en": "Even a small habit can have a significant effect over time.",
        "ja": "小さな習慣でも時間がたつと大きな効果を生むことがあります。"
      }
    ]
  },
  {
    "id": "adj-significant-role",
    "category": "Academic",
    "jaPrompt": "重要な役割",
    "answer": "significant role",
    "distractors": [
      "big role",
      "large role",
      "strong role"
    ],
    "explanationJa": "significant role は「重要な役割」を表す自然な英語のまとまりです。語の組み合わせをフレーズとして覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "Communication plays a significant role in teamwork.",
        "ja": "コミュニケーションはチームワークで重要な役割を果たします。"
      },
      {
        "en": "Data played a significant role in the decision.",
        "ja": "その判断ではデータが重要な役割を果たしました。"
      }
    ]
  },
  {
    "id": "adj-significant-factor",
    "category": "Academic",
    "jaPrompt": "重要な要因",
    "answer": "significant factor",
    "distractors": [
      "big factor",
      "large factor",
      "strong factor"
    ],
    "explanationJa": "significant factor は「重要な要因」を表す自然な英語のまとまりです。語の組み合わせをフレーズとして覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "Cost is a significant factor in this decision.",
        "ja": "この判断では費用が重要な要因です。"
      },
      {
        "en": "Weather was a significant factor in the delay.",
        "ja": "遅延の大きな要因は天候でした。"
      }
    ]
  },
  {
    "id": "adj-significant-evidence",
    "category": "Academic",
    "jaPrompt": "重要な証拠",
    "answer": "significant evidence",
    "distractors": [
      "big evidence",
      "large evidence",
      "strong evidence"
    ],
    "explanationJa": "significant evidence は「重要な証拠」を表す自然な英語のまとまりです。語の組み合わせをフレーズとして覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "The study provides significant evidence for the theory.",
        "ja": "その研究はその理論を支える重要な証拠を示しています。"
      },
      {
        "en": "Investigators found significant evidence in the documents.",
        "ja": "調査員は書類の中に重要な証拠を見つけました。"
      }
    ]
  },
  {
    "id": "adj-significant-progress",
    "category": "Academic",
    "jaPrompt": "大きな進展",
    "answer": "significant progress",
    "distractors": [
      "big progress",
      "large progress",
      "strong progress"
    ],
    "explanationJa": "significant progress は「大きな進展」を表す自然な英語のまとまりです。語の組み合わせをフレーズとして覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "The team made significant progress this week.",
        "ja": "チームは今週、大きな進展を遂げました。"
      },
      {
        "en": "She has made significant progress in English.",
        "ja": "彼女は英語で大きく上達しました。"
      }
    ]
  },
  {
    "id": "adj-significant-reduction",
    "category": "Academic",
    "jaPrompt": "大幅な削減",
    "answer": "significant reduction",
    "distractors": [
      "big reduction",
      "large reduction",
      "strong reduction"
    ],
    "explanationJa": "significant reduction は「大幅な削減」を表す自然な英語のまとまりです。語の組み合わせをフレーズとして覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "The company achieved a significant reduction in costs.",
        "ja": "その会社は費用の大幅な削減を達成しました。"
      },
      {
        "en": "The new system led to a significant reduction in errors.",
        "ja": "新しいシステムによってエラーが大幅に減りました。"
      }
    ]
  },
  {
    "id": "adj-significant-challenge",
    "category": "Academic",
    "jaPrompt": "大きな課題",
    "answer": "significant challenge",
    "distractors": [
      "big challenge",
      "large challenge",
      "strong challenge"
    ],
    "explanationJa": "significant challenge は「大きな課題」を表す自然な英語のまとまりです。語の組み合わせをフレーズとして覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "Hiring enough staff remains a significant challenge.",
        "ja": "十分な人員を採用することは依然として大きな課題です。"
      },
      {
        "en": "Time management is a significant challenge for many learners.",
        "ja": "時間管理は多くの学習者にとって大きな課題です。"
      }
    ]
  },
  {
    "id": "adj-significant-benefit",
    "category": "Academic",
    "jaPrompt": "大きな利点",
    "answer": "significant benefit",
    "distractors": [
      "big benefit",
      "large benefit",
      "strong benefit"
    ],
    "explanationJa": "significant benefit は「大きな利点」を表す自然な英語のまとまりです。語の組み合わせをフレーズとして覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "The new tool offers a significant benefit to small teams.",
        "ja": "その新しいツールは小規模チームに大きな利点をもたらします。"
      },
      {
        "en": "Regular review has a significant benefit for memory.",
        "ja": "定期的な復習は記憶に大きな効果があります。"
      }
    ]
  },
  {
    "id": "adj-significant-relationship",
    "category": "Academic",
    "jaPrompt": "重要な関係",
    "answer": "significant relationship",
    "distractors": [
      "big relationship",
      "large relationship",
      "strong relationship"
    ],
    "explanationJa": "significant relationship は「重要な関係」を表す自然な英語のまとまりです。語の組み合わせをフレーズとして覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "The study found a significant relationship between sleep and learning.",
        "ja": "その研究では睡眠と学習の間に重要な関係が見つかりました。"
      },
      {
        "en": "There is a significant relationship between price and demand.",
        "ja": "価格と需要には重要な関係があります。"
      }
    ]
  },
  {
    "id": "adj-significant-variation",
    "category": "Academic",
    "jaPrompt": "大きなばらつき",
    "answer": "significant variation",
    "distractors": [
      "big variation",
      "large variation",
      "strong variation"
    ],
    "explanationJa": "significant variation は「大きなばらつき」を表す自然な英語のまとまりです。語の組み合わせをフレーズとして覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "There was significant variation in the survey results.",
        "ja": "調査結果には大きなばらつきがありました。"
      },
      {
        "en": "The data show significant variation between regions.",
        "ja": "そのデータは地域ごとに大きな差があることを示しています。"
      }
    ]
  },
  {
    "id": "adj-serious-problem",
    "category": "Academic",
    "jaPrompt": "深刻な問題",
    "answer": "serious problem",
    "distractors": [
      "heavy problem",
      "strong problem",
      "big problem"
    ],
    "explanationJa": "serious problem は「深刻な問題」を表す自然な英語のまとまりです。語の組み合わせをフレーズとして覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "Air pollution is a serious problem in many cities.",
        "ja": "大気汚染は多くの都市で深刻な問題です。"
      },
      {
        "en": "We need to solve this serious problem quickly.",
        "ja": "この深刻な問題を早急に解決する必要があります。"
      }
    ]
  },
  {
    "id": "adj-serious-issue",
    "category": "Academic",
    "jaPrompt": "深刻な問題",
    "answer": "serious issue",
    "distractors": [
      "heavy issue",
      "strong issue",
      "big issue"
    ],
    "explanationJa": "serious issue は「深刻な問題」を表す自然な英語のまとまりです。語の組み合わせをフレーズとして覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "Data security is a serious issue for the company.",
        "ja": "データの安全性はその会社にとって深刻な問題です。"
      },
      {
        "en": "The report raised a serious issue about privacy.",
        "ja": "その報告書はプライバシーに関する深刻な問題を提起しました。"
      }
    ]
  },
  {
    "id": "adj-serious-injury",
    "category": "Academic",
    "jaPrompt": "重傷",
    "answer": "serious injury",
    "distractors": [
      "heavy injury",
      "strong injury",
      "big injury"
    ],
    "explanationJa": "serious injury は「重傷」を表す自然な英語のまとまりです。語の組み合わせをフレーズとして覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "The driver suffered a serious injury in the accident.",
        "ja": "運転手は事故で重傷を負いました。"
      },
      {
        "en": "Wearing a helmet can prevent serious injury.",
        "ja": "ヘルメットを着用すると重傷を防げることがあります。"
      }
    ]
  },
  {
    "id": "adj-serious-risk",
    "category": "Academic",
    "jaPrompt": "重大なリスク",
    "answer": "serious risk",
    "distractors": [
      "heavy risk",
      "strong risk",
      "big risk"
    ],
    "explanationJa": "serious risk は「重大なリスク」を表す自然な英語のまとまりです。語の組み合わせをフレーズとして覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "The project carries a serious risk if we rush it.",
        "ja": "急いで進めると、そのプロジェクトには重大なリスクがあります。"
      },
      {
        "en": "Ignoring the warning could create a serious risk.",
        "ja": "警告を無視すると重大なリスクが生じる可能性があります。"
      }
    ]
  },
  {
    "id": "adj-serious-illness",
    "category": "Academic",
    "jaPrompt": "重い病気",
    "answer": "serious illness",
    "distractors": [
      "heavy illness",
      "strong illness",
      "big illness"
    ],
    "explanationJa": "serious illness は「重い病気」を表す自然な英語のまとまりです。語の組み合わせをフレーズとして覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "She recovered from a serious illness.",
        "ja": "彼女は重い病気から回復しました。"
      },
      {
        "en": "Early treatment can prevent serious illness.",
        "ja": "早期治療は重い病気を防ぐことがあります。"
      }
    ]
  },
  {
    "id": "adj-serious-concern",
    "category": "Academic",
    "jaPrompt": "深刻な懸念",
    "answer": "serious concern",
    "distractors": [
      "heavy concern",
      "strong concern",
      "big concern"
    ],
    "explanationJa": "serious concern は「深刻な懸念」を表す自然な英語のまとまりです。語の組み合わせをフレーズとして覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "Safety is a serious concern for parents.",
        "ja": "安全性は保護者にとって深刻な懸念です。"
      },
      {
        "en": "The delay caused serious concern among customers.",
        "ja": "その遅れは顧客の間に深刻な不安を生みました。"
      }
    ]
  },
  {
    "id": "adj-serious-threat",
    "category": "Academic",
    "jaPrompt": "重大な脅威",
    "answer": "serious threat",
    "distractors": [
      "heavy threat",
      "strong threat",
      "big threat"
    ],
    "explanationJa": "serious threat は「重大な脅威」を表す自然な英語のまとまりです。語の組み合わせをフレーズとして覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "Cyber attacks are a serious threat to businesses.",
        "ja": "サイバー攻撃は企業にとって重大な脅威です。"
      },
      {
        "en": "Climate change is a serious threat to coastal areas.",
        "ja": "気候変動は沿岸地域にとって重大な脅威です。"
      }
    ]
  },
  {
    "id": "adj-serious-damage",
    "category": "Academic",
    "jaPrompt": "深刻な被害",
    "answer": "serious damage",
    "distractors": [
      "heavy damage",
      "strong damage",
      "big damage"
    ],
    "explanationJa": "serious damage は「深刻な被害」を表す自然な英語のまとまりです。語の組み合わせをフレーズとして覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "The flood caused serious damage to the houses.",
        "ja": "洪水は住宅に深刻な被害をもたらしました。"
      },
      {
        "en": "A virus can cause serious damage to the system.",
        "ja": "ウイルスはシステムに深刻な被害を与えることがあります。"
      }
    ]
  },
  {
    "id": "adj-serious-accident",
    "category": "Academic",
    "jaPrompt": "重大な事故",
    "answer": "serious accident",
    "distractors": [
      "heavy accident",
      "strong accident",
      "big accident"
    ],
    "explanationJa": "serious accident は「重大な事故」を表す自然な英語のまとまりです。語の組み合わせをフレーズとして覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "A serious accident blocked the road.",
        "ja": "重大な事故で道路が塞がれました。"
      },
      {
        "en": "The factory changed its rules after a serious accident.",
        "ja": "その工場は重大な事故の後で規則を変更しました。"
      }
    ]
  },
  {
    "id": "adj-serious-crime",
    "category": "Academic",
    "jaPrompt": "重大な犯罪",
    "answer": "serious crime",
    "distractors": [
      "heavy crime",
      "strong crime",
      "big crime"
    ],
    "explanationJa": "serious crime は「重大な犯罪」を表す自然な英語のまとまりです。語の組み合わせをフレーズとして覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "Fraud is a serious crime.",
        "ja": "詐欺は重大な犯罪です。"
      },
      {
        "en": "The police are investigating a serious crime.",
        "ja": "警察は重大な犯罪を捜査しています。"
      }
    ]
  },
  {
    "id": "adj-serious-mistake",
    "category": "Academic",
    "jaPrompt": "重大なミス",
    "answer": "serious mistake",
    "distractors": [
      "heavy mistake",
      "strong mistake",
      "big mistake"
    ],
    "explanationJa": "serious mistake は「重大なミス」を表す自然な英語のまとまりです。語の組み合わせをフレーズとして覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "Deleting the file was a serious mistake.",
        "ja": "そのファイルを削除したのは重大なミスでした。"
      },
      {
        "en": "A serious mistake in the report changed the result.",
        "ja": "報告書の重大なミスが結果を変えてしまいました。"
      }
    ]
  },
  {
    "id": "adj-serious-consequence",
    "category": "Academic",
    "jaPrompt": "重大な結果",
    "answer": "serious consequence",
    "distractors": [
      "heavy consequence",
      "strong consequence",
      "big consequence"
    ],
    "explanationJa": "serious consequence は「重大な結果」を表す自然な英語のまとまりです。語の組み合わせをフレーズとして覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "Ignoring the rules can have serious consequences.",
        "ja": "規則を無視すると重大な結果を招くことがあります。"
      },
      {
        "en": "The decision had serious consequences for the team.",
        "ja": "その決定はチームに重大な影響を及ぼしました。"
      }
    ]
  },
  {
    "id": "adj-serious-challenge",
    "category": "Academic",
    "jaPrompt": "深刻な課題",
    "answer": "serious challenge",
    "distractors": [
      "heavy challenge",
      "strong challenge",
      "big challenge"
    ],
    "explanationJa": "serious challenge は「深刻な課題」を表す自然な英語のまとまりです。語の組み合わせをフレーズとして覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "A lack of staff is a serious challenge for the hospital.",
        "ja": "人手不足はその病院にとって深刻な課題です。"
      },
      {
        "en": "Learning pronunciation can be a serious challenge for beginners.",
        "ja": "発音の学習は初心者にとって大きな課題になることがあります。"
      }
    ]
  },
  {
    "id": "adj-serious-shortage",
    "category": "Academic",
    "jaPrompt": "深刻な不足",
    "answer": "serious shortage",
    "distractors": [
      "heavy shortage",
      "strong shortage",
      "big shortage"
    ],
    "explanationJa": "serious shortage は「深刻な不足」を表す自然な英語のまとまりです。語の組み合わせをフレーズとして覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "The city faces a serious shortage of nurses.",
        "ja": "その市では看護師が深刻に不足しています。"
      },
      {
        "en": "There is a serious shortage of affordable housing.",
        "ja": "手頃な価格の住宅が深刻に不足しています。"
      }
    ]
  },
  {
    "id": "adj-serious-conflict",
    "category": "Academic",
    "jaPrompt": "深刻な対立",
    "answer": "serious conflict",
    "distractors": [
      "heavy conflict",
      "strong conflict",
      "big conflict"
    ],
    "explanationJa": "serious conflict は「深刻な対立」を表す自然な英語のまとまりです。語の組み合わせをフレーズとして覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "The discussion led to a serious conflict.",
        "ja": "その話し合いは深刻な対立につながりました。"
      },
      {
        "en": "The manager tried to resolve a serious conflict in the team.",
        "ja": "マネージャーはチーム内の深刻な対立を解決しようとしました。"
      }
    ]
  },
  {
    "id": "adj-common-mistake",
    "category": "Daily Life",
    "jaPrompt": "よくある間違い",
    "answer": "common mistake",
    "distractors": [
      "normal mistake",
      "usual mistake",
      "ordinary mistake"
    ],
    "explanationJa": "common mistake は「よくある間違い」を表す自然な英語のまとまりです。語の組み合わせをフレーズとして覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "Using the wrong preposition is a common mistake.",
        "ja": "前置詞を間違えるのはよくあるミスです。"
      },
      {
        "en": "This is a common mistake among beginners.",
        "ja": "これは初心者によくある間違いです。"
      }
    ]
  },
  {
    "id": "adj-common-problem",
    "category": "Daily Life",
    "jaPrompt": "よくある問題",
    "answer": "common problem",
    "distractors": [
      "normal problem",
      "usual problem",
      "ordinary problem"
    ],
    "explanationJa": "common problem は「よくある問題」を表す自然な英語のまとまりです。語の組み合わせをフレーズとして覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "Slow internet is a common problem in this area.",
        "ja": "この地域ではインターネットが遅いことがよくある問題です。"
      },
      {
        "en": "The guide explains how to fix common problems.",
        "ja": "そのガイドではよくある問題の直し方を説明しています。"
      }
    ]
  },
  {
    "id": "adj-common-reason",
    "category": "Daily Life",
    "jaPrompt": "よくある理由",
    "answer": "common reason",
    "distractors": [
      "normal reason",
      "usual reason",
      "ordinary reason"
    ],
    "explanationJa": "common reason は「よくある理由」を表す自然な英語のまとまりです。語の組み合わせをフレーズとして覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "A common reason for delay is missing information.",
        "ja": "遅れのよくある理由は情報不足です。"
      },
      {
        "en": "Stress is a common reason for poor sleep.",
        "ja": "ストレスは睡眠の質が下がるよくある原因です。"
      }
    ]
  },
  {
    "id": "adj-common-practice",
    "category": "Daily Life",
    "jaPrompt": "一般的な慣行",
    "answer": "common practice",
    "distractors": [
      "normal practice",
      "usual practice",
      "ordinary practice"
    ],
    "explanationJa": "common practice は「一般的な慣行」を表す自然な英語のまとまりです。語の組み合わせをフレーズとして覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "It is common practice to back up important files.",
        "ja": "重要なファイルをバックアップするのは一般的な習慣です。"
      },
      {
        "en": "In many companies, weekly reports are common practice.",
        "ja": "多くの会社では週報が一般的に行われています。"
      }
    ]
  },
  {
    "id": "adj-common-question",
    "category": "Daily Life",
    "jaPrompt": "よくある質問",
    "answer": "common question",
    "distractors": [
      "normal question",
      "usual question",
      "ordinary question"
    ],
    "explanationJa": "common question は「よくある質問」を表す自然な英語のまとまりです。語の組み合わせをフレーズとして覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "This is a common question from new users.",
        "ja": "これは新規ユーザーからよくある質問です。"
      },
      {
        "en": "The website answers common questions about the service.",
        "ja": "そのウェブサイトではサービスに関するよくある質問に答えています。"
      }
    ]
  },
  {
    "id": "adj-common-symptom",
    "category": "Daily Life",
    "jaPrompt": "よくある症状",
    "answer": "common symptom",
    "distractors": [
      "normal symptom",
      "usual symptom",
      "ordinary symptom"
    ],
    "explanationJa": "common symptom は「よくある症状」を表す自然な英語のまとまりです。語の組み合わせをフレーズとして覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "A headache is a common symptom of stress.",
        "ja": "頭痛はストレスによく見られる症状です。"
      },
      {
        "en": "Fever is a common symptom of this illness.",
        "ja": "発熱はこの病気によく見られる症状です。"
      }
    ]
  },
  {
    "id": "adj-common-feature",
    "category": "Daily Life",
    "jaPrompt": "一般的な機能",
    "answer": "common feature",
    "distractors": [
      "normal feature",
      "usual feature",
      "ordinary feature"
    ],
    "explanationJa": "common feature は「一般的な機能」を表す自然な英語のまとまりです。語の組み合わせをフレーズとして覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "Search is a common feature in modern apps.",
        "ja": "検索は現代のアプリで一般的な機能です。"
      },
      {
        "en": "Automatic saving is now a common feature.",
        "ja": "自動保存は今では一般的な機能です。"
      }
    ]
  },
  {
    "id": "adj-common-cause",
    "category": "Daily Life",
    "jaPrompt": "よくある原因",
    "answer": "common cause",
    "distractors": [
      "normal cause",
      "usual cause",
      "ordinary cause"
    ],
    "explanationJa": "common cause は「よくある原因」を表す自然な英語のまとまりです。語の組み合わせをフレーズとして覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "A common cause of errors is incorrect input.",
        "ja": "エラーのよくある原因は入力ミスです。"
      },
      {
        "en": "Lack of sleep is a common cause of poor concentration.",
        "ja": "睡眠不足は集中力低下のよくある原因です。"
      }
    ]
  },
  {
    "id": "adj-common-approach",
    "category": "Daily Life",
    "jaPrompt": "一般的な方法",
    "answer": "common approach",
    "distractors": [
      "normal approach",
      "usual approach",
      "ordinary approach"
    ],
    "explanationJa": "common approach は「一般的な方法」を表す自然な英語のまとまりです。語の組み合わせをフレーズとして覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "A common approach is to start with a small test.",
        "ja": "一般的な方法は小さなテストから始めることです。"
      },
      {
        "en": "This is a common approach in language learning.",
        "ja": "これは語学学習でよく使われる方法です。"
      }
    ]
  },
  {
    "id": "adj-common-belief",
    "category": "Daily Life",
    "jaPrompt": "一般的な考え",
    "answer": "common belief",
    "distractors": [
      "normal belief",
      "usual belief",
      "ordinary belief"
    ],
    "explanationJa": "common belief は「一般的な考え」を表す自然な英語のまとまりです。語の組み合わせをフレーズとして覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "It is a common belief that practice improves fluency.",
        "ja": "練習すれば流暢さが上がるというのは一般的な考えです。"
      },
      {
        "en": "That common belief is not always correct.",
        "ja": "その一般的な考えが常に正しいとは限りません。"
      }
    ]
  },
  {
    "id": "adj-common-experience",
    "category": "Daily Life",
    "jaPrompt": "よくある経験",
    "answer": "common experience",
    "distractors": [
      "normal experience",
      "usual experience",
      "ordinary experience"
    ],
    "explanationJa": "common experience は「よくある経験」を表す自然な英語のまとまりです。語の組み合わせをフレーズとして覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "Feeling nervous before a test is a common experience.",
        "ja": "試験前に緊張するのはよくある経験です。"
      },
      {
        "en": "Making mistakes is a common experience for language learners.",
        "ja": "間違えることは語学学習者によくある経験です。"
      }
    ]
  },
  {
    "id": "adj-common-pattern",
    "category": "Daily Life",
    "jaPrompt": "よくあるパターン",
    "answer": "common pattern",
    "distractors": [
      "normal pattern",
      "usual pattern",
      "ordinary pattern"
    ],
    "explanationJa": "common pattern は「よくあるパターン」を表す自然な英語のまとまりです。語の組み合わせをフレーズとして覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "The data show a common pattern among new users.",
        "ja": "そのデータには新規ユーザーによく見られるパターンがあります。"
      },
      {
        "en": "This sentence follows a common pattern in English.",
        "ja": "この文は英語でよく使われる型に従っています。"
      }
    ]
  },
  {
    "id": "adj-common-issue",
    "category": "Daily Life",
    "jaPrompt": "よくある問題",
    "answer": "common issue",
    "distractors": [
      "normal issue",
      "usual issue",
      "ordinary issue"
    ],
    "explanationJa": "common issue は「よくある問題」を表す自然な英語のまとまりです。語の組み合わせをフレーズとして覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "Login trouble is a common issue for new users.",
        "ja": "ログインのトラブルは新規ユーザーによくある問題です。"
      },
      {
        "en": "The team fixed several common issues in the update.",
        "ja": "チームは更新でいくつかのよくある問題を修正しました。"
      }
    ]
  },
  {
    "id": "adj-common-method",
    "category": "Daily Life",
    "jaPrompt": "一般的な方法",
    "answer": "common method",
    "distractors": [
      "normal method",
      "usual method",
      "ordinary method"
    ],
    "explanationJa": "common method は「一般的な方法」を表す自然な英語のまとまりです。語の組み合わせをフレーズとして覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "Repeating aloud is a common method for memorizing phrases.",
        "ja": "声に出して繰り返すことはフレーズを覚える一般的な方法です。"
      },
      {
        "en": "This is a common method for checking data quality.",
        "ja": "これはデータ品質を確認する一般的な方法です。"
      }
    ]
  },
  {
    "id": "adj-common-error",
    "category": "Daily Life",
    "jaPrompt": "よくあるエラー",
    "answer": "common error",
    "distractors": [
      "normal error",
      "usual error",
      "ordinary error"
    ],
    "explanationJa": "common error は「よくあるエラー」を表す自然な英語のまとまりです。語の組み合わせをフレーズとして覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "A common error is forgetting to save the file.",
        "ja": "よくあるエラーはファイルの保存を忘れることです。"
      },
      {
        "en": "The system message explains common errors.",
        "ja": "そのシステムメッセージはよくあるエラーを説明しています。"
      }
    ]
  },
  {
    "id": "adj-annual-report",
    "category": "Business",
    "jaPrompt": "年次報告書",
    "answer": "annual report",
    "distractors": [
      "yearly report",
      "every-year report",
      "year report"
    ],
    "explanationJa": "annual report は「年次報告書」を表す自然な英語のまとまりです。語の組み合わせをフレーズとして覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "The company published its annual report in April.",
        "ja": "その会社は4月に年次報告書を公開しました。"
      },
      {
        "en": "The annual report includes sales and profit figures.",
        "ja": "年次報告書には売上と利益の数字が含まれています。"
      }
    ]
  },
  {
    "id": "adj-annual-meeting",
    "category": "Business",
    "jaPrompt": "年次総会",
    "answer": "annual meeting",
    "distractors": [
      "yearly meeting",
      "every-year meeting",
      "year meeting"
    ],
    "explanationJa": "annual meeting は「年次総会」を表す自然な英語のまとまりです。語の組み合わせをフレーズとして覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "Shareholders attended the annual meeting.",
        "ja": "株主たちは年次総会に出席しました。"
      },
      {
        "en": "The annual meeting will be held online this year.",
        "ja": "今年の年次総会はオンラインで開催されます。"
      }
    ]
  },
  {
    "id": "adj-annual-budget",
    "category": "Business",
    "jaPrompt": "年間予算",
    "answer": "annual budget",
    "distractors": [
      "yearly budget",
      "every-year budget",
      "year budget"
    ],
    "explanationJa": "annual budget は「年間予算」を表す自然な英語のまとまりです。語の組み合わせをフレーズとして覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "The department prepared its annual budget.",
        "ja": "その部署は年間予算を作成しました。"
      },
      {
        "en": "We need to reduce expenses in the annual budget.",
        "ja": "年間予算の中で支出を減らす必要があります。"
      }
    ]
  },
  {
    "id": "adj-annual-review",
    "category": "Business",
    "jaPrompt": "年次評価",
    "answer": "annual review",
    "distractors": [
      "yearly review",
      "every-year review",
      "year review"
    ],
    "explanationJa": "annual review は「年次評価」を表す自然な英語のまとまりです。語の組み合わせをフレーズとして覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "Employees receive an annual review from their manager.",
        "ja": "従業員は上司から年次評価を受けます。"
      },
      {
        "en": "The annual review helped her set new goals.",
        "ja": "年次評価は彼女が新しい目標を立てる助けになりました。"
      }
    ]
  },
  {
    "id": "adj-annual-income",
    "category": "Business",
    "jaPrompt": "年収",
    "answer": "annual income",
    "distractors": [
      "yearly income",
      "every-year income",
      "year income"
    ],
    "explanationJa": "annual income は「年収」を表す自然な英語のまとまりです。語の組み合わせをフレーズとして覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "The form asks for your annual income.",
        "ja": "その書類では年収を記入する必要があります。"
      },
      {
        "en": "Annual income varies by region and job type.",
        "ja": "年収は地域や職種によって異なります。"
      }
    ]
  },
  {
    "id": "adj-annual-growth",
    "category": "Business",
    "jaPrompt": "年間成長率",
    "answer": "annual growth",
    "distractors": [
      "yearly growth",
      "every-year growth",
      "year growth"
    ],
    "explanationJa": "annual growth は「年間成長率」を表す自然な英語のまとまりです。語の組み合わせをフレーズとして覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "The company achieved five percent annual growth.",
        "ja": "その会社は年間5パーセントの成長を達成しました。"
      },
      {
        "en": "Annual growth slowed during the recession.",
        "ja": "不況の間、年間成長率は鈍化しました。"
      }
    ]
  },
  {
    "id": "adj-annual-survey",
    "category": "Business",
    "jaPrompt": "年次調査",
    "answer": "annual survey",
    "distractors": [
      "yearly survey",
      "every-year survey",
      "year survey"
    ],
    "explanationJa": "annual survey は「年次調査」を表す自然な英語のまとまりです。語の組み合わせをフレーズとして覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "The annual survey asks employees about job satisfaction.",
        "ja": "年次調査では従業員に仕事の満足度を尋ねます。"
      },
      {
        "en": "The annual survey showed higher customer satisfaction.",
        "ja": "年次調査では顧客満足度の向上が示されました。"
      }
    ]
  },
  {
    "id": "adj-annual-plan",
    "category": "Business",
    "jaPrompt": "年間計画",
    "answer": "annual plan",
    "distractors": [
      "yearly plan",
      "every-year plan",
      "year plan"
    ],
    "explanationJa": "annual plan は「年間計画」を表す自然な英語のまとまりです。語の組み合わせをフレーズとして覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "The team created an annual plan for training.",
        "ja": "チームは研修の年間計画を作成しました。"
      },
      {
        "en": "Our annual plan includes three major projects.",
        "ja": "私たちの年間計画には3つの大きなプロジェクトが含まれています。"
      }
    ]
  },
  {
    "id": "adj-annual-fee",
    "category": "Business",
    "jaPrompt": "年会費",
    "answer": "annual fee",
    "distractors": [
      "yearly fee",
      "every-year fee",
      "year fee"
    ],
    "explanationJa": "annual fee は「年会費」を表す自然な英語のまとまりです。語の組み合わせをフレーズとして覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "The card has an annual fee.",
        "ja": "そのカードには年会費があります。"
      },
      {
        "en": "Members pay an annual fee to use the service.",
        "ja": "会員はそのサービスを利用するために年会費を支払います。"
      }
    ]
  },
  {
    "id": "adj-annual-event",
    "category": "Business",
    "jaPrompt": "年中行事",
    "answer": "annual event",
    "distractors": [
      "yearly event",
      "every-year event",
      "year event"
    ],
    "explanationJa": "annual event は「年中行事」を表す自然な英語のまとまりです。語の組み合わせをフレーズとして覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "The festival is an annual event in the town.",
        "ja": "その祭りは町の年中行事です。"
      },
      {
        "en": "The company picnic became an annual event.",
        "ja": "会社のピクニックは毎年恒例の行事になりました。"
      }
    ]
  },
  {
    "id": "adj-annual-conference",
    "category": "Business",
    "jaPrompt": "年次会議",
    "answer": "annual conference",
    "distractors": [
      "yearly conference",
      "every-year conference",
      "year conference"
    ],
    "explanationJa": "annual conference は「年次会議」を表す自然な英語のまとまりです。語の組み合わせをフレーズとして覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "The annual conference attracts researchers from many countries.",
        "ja": "その年次会議には多くの国から研究者が集まります。"
      },
      {
        "en": "She presented her findings at the annual conference.",
        "ja": "彼女は年次会議で研究結果を発表しました。"
      }
    ]
  },
  {
    "id": "adj-annual-sales",
    "category": "Business",
    "jaPrompt": "年間売上",
    "answer": "annual sales",
    "distractors": [
      "yearly sales",
      "every-year sales",
      "year sales"
    ],
    "explanationJa": "annual sales は「年間売上」を表す自然な英語のまとまりです。語の組み合わせをフレーズとして覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "Annual sales increased by ten percent.",
        "ja": "年間売上は10パーセント増加しました。"
      },
      {
        "en": "The graph shows annual sales for the past five years.",
        "ja": "そのグラフは過去5年間の年間売上を示しています。"
      }
    ]
  },
  {
    "id": "adj-annual-summary",
    "category": "Business",
    "jaPrompt": "年間まとめ",
    "answer": "annual summary",
    "distractors": [
      "yearly summary",
      "every-year summary",
      "year summary"
    ],
    "explanationJa": "annual summary は「年間まとめ」を表す自然な英語のまとまりです。語の組み合わせをフレーズとして覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "The annual summary lists the team's main achievements.",
        "ja": "年間まとめにはチームの主な成果が記載されています。"
      },
      {
        "en": "Please read the annual summary before the meeting.",
        "ja": "会議の前に年間まとめを読んでください。"
      }
    ]
  },
  {
    "id": "adj-annual-statement",
    "category": "Business",
    "jaPrompt": "年次報告書・明細書",
    "answer": "annual statement",
    "distractors": [
      "yearly statement",
      "every-year statement",
      "year statement"
    ],
    "explanationJa": "annual statement は「年次報告書・明細書」を表す自然な英語のまとまりです。語の組み合わせをフレーズとして覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "The bank sends an annual statement to each customer.",
        "ja": "銀行は各顧客に年次明細書を送ります。"
      },
      {
        "en": "The annual statement shows all account activity.",
        "ja": "年次明細書には口座の取引内容がすべて記載されています。"
      }
    ]
  },
  {
    "id": "adj-annual-leave",
    "category": "Business",
    "jaPrompt": "年次休暇",
    "answer": "annual leave",
    "distractors": [
      "yearly leave",
      "every-year leave",
      "year leave"
    ],
    "explanationJa": "annual leave は「年次休暇」を表す自然な英語のまとまりです。語の組み合わせをフレーズとして覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "Employees can take annual leave after six months.",
        "ja": "従業員は6か月後に年次休暇を取得できます。"
      },
      {
        "en": "She used her annual leave to visit her family.",
        "ja": "彼女は家族に会うために年次休暇を使いました。"
      }
    ]
  },
  {
    "id": "adj-financial-support",
    "category": "Business",
    "jaPrompt": "金銭的支援",
    "answer": "financial support",
    "distractors": [
      "money support",
      "cash support",
      "economic support"
    ],
    "explanationJa": "financial support は「金銭的支援」を表す自然な英語のまとまりです。語の組み合わせをフレーズとして覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "The students need financial support to continue their studies.",
        "ja": "学生たちは学業を続けるために金銭的支援を必要としています。"
      },
      {
        "en": "The government provided financial support to small businesses.",
        "ja": "政府は小規模企業に金銭的支援を行いました。"
      }
    ]
  },
  {
    "id": "adj-financial-aid",
    "category": "Business",
    "jaPrompt": "学費援助・金銭的援助",
    "answer": "financial aid",
    "distractors": [
      "money aid",
      "cash aid",
      "economic aid"
    ],
    "explanationJa": "financial aid は「学費援助・金銭的援助」を表す自然な英語のまとまりです。語の組み合わせをフレーズとして覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "She received financial aid for college.",
        "ja": "彼女は大学進学のための学費援助を受けました。"
      },
      {
        "en": "Many students apply for financial aid each year.",
        "ja": "多くの学生が毎年、学費援助を申請します。"
      }
    ]
  },
  {
    "id": "adj-financial-report",
    "category": "Business",
    "jaPrompt": "財務報告書",
    "answer": "financial report",
    "distractors": [
      "money report",
      "cash report",
      "economic report"
    ],
    "explanationJa": "financial report は「財務報告書」を表す自然な英語のまとまりです。語の組み合わせをフレーズとして覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "The financial report showed a rise in profit.",
        "ja": "財務報告書は利益の増加を示していました。"
      },
      {
        "en": "Please review the financial report before the meeting.",
        "ja": "会議の前に財務報告書を確認してください。"
      }
    ]
  },
  {
    "id": "adj-financial-risk",
    "category": "Business",
    "jaPrompt": "財務リスク",
    "answer": "financial risk",
    "distractors": [
      "money risk",
      "cash risk",
      "economic risk"
    ],
    "explanationJa": "financial risk は「財務リスク」を表す自然な英語のまとまりです。語の組み合わせをフレーズとして覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "The project involves financial risk.",
        "ja": "そのプロジェクトには財務リスクがあります。"
      },
      {
        "en": "Companies need to manage financial risk carefully.",
        "ja": "企業は財務リスクを慎重に管理する必要があります。"
      }
    ]
  },
  {
    "id": "adj-financial-loss",
    "category": "Business",
    "jaPrompt": "金銭的損失",
    "answer": "financial loss",
    "distractors": [
      "money loss",
      "cash loss",
      "economic loss"
    ],
    "explanationJa": "financial loss は「金銭的損失」を表す自然な英語のまとまりです。語の組み合わせをフレーズとして覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "The mistake caused a financial loss.",
        "ja": "そのミスは金銭的損失をもたらしました。"
      },
      {
        "en": "Insurance can protect businesses from financial loss.",
        "ja": "保険は企業を金銭的損失から守ることがあります。"
      }
    ]
  },
  {
    "id": "adj-financial-gain",
    "category": "Business",
    "jaPrompt": "金銭的利益",
    "answer": "financial gain",
    "distractors": [
      "money gain",
      "cash gain",
      "economic gain"
    ],
    "explanationJa": "financial gain は「金銭的利益」を表す自然な英語のまとまりです。語の組み合わせをフレーズとして覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "The deal brought a financial gain to the company.",
        "ja": "その取引は会社に金銭的利益をもたらしました。"
      },
      {
        "en": "He was not motivated only by financial gain.",
        "ja": "彼は金銭的利益だけを目的にしていたわけではありません。"
      }
    ]
  },
  {
    "id": "adj-financial-market",
    "category": "Business",
    "jaPrompt": "金融市場",
    "answer": "financial market",
    "distractors": [
      "money market",
      "cash market",
      "economic market"
    ],
    "explanationJa": "financial market は「金融市場」を表す自然な英語のまとまりです。語の組み合わせをフレーズとして覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "The news affected the financial market.",
        "ja": "そのニュースは金融市場に影響を与えました。"
      },
      {
        "en": "Investors watch the financial market closely.",
        "ja": "投資家は金融市場を注意深く見ています。"
      }
    ]
  },
  {
    "id": "adj-financial-system",
    "category": "Business",
    "jaPrompt": "金融制度",
    "answer": "financial system",
    "distractors": [
      "money system",
      "cash system",
      "economic system"
    ],
    "explanationJa": "financial system は「金融制度」を表す自然な英語のまとまりです。語の組み合わせをフレーズとして覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "Trust is important in the financial system.",
        "ja": "金融制度では信頼が重要です。"
      },
      {
        "en": "The crisis changed the country's financial system.",
        "ja": "その危機は国の金融制度を変えました。"
      }
    ]
  },
  {
    "id": "adj-financial-planning",
    "category": "Business",
    "jaPrompt": "資金計画",
    "answer": "financial planning",
    "distractors": [
      "money planning",
      "cash planning",
      "economic planning"
    ],
    "explanationJa": "financial planning は「資金計画」を表す自然な英語のまとまりです。語の組み合わせをフレーズとして覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "Financial planning is important before starting a business.",
        "ja": "事業を始める前には資金計画が重要です。"
      },
      {
        "en": "She asked an expert for financial planning advice.",
        "ja": "彼女は資金計画について専門家に助言を求めました。"
      }
    ]
  },
  {
    "id": "adj-financial-pressure",
    "category": "Business",
    "jaPrompt": "金銭的な圧迫",
    "answer": "financial pressure",
    "distractors": [
      "money pressure",
      "cash pressure",
      "economic pressure"
    ],
    "explanationJa": "financial pressure は「金銭的な圧迫」を表す自然な英語のまとまりです。語の組み合わせをフレーズとして覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "Rising rent put financial pressure on the family.",
        "ja": "家賃の上昇がその家族に金銭的な負担をかけました。"
      },
      {
        "en": "The company is under financial pressure after losing a major client.",
        "ja": "主要顧客を失った後、その会社は資金面で圧迫されています。"
      }
    ]
  },
  {
    "id": "adj-financial-resources",
    "category": "Business",
    "jaPrompt": "財源",
    "answer": "financial resources",
    "distractors": [
      "money resources",
      "cash resources",
      "economic resources"
    ],
    "explanationJa": "financial resources は「財源」を表す自然な英語のまとまりです。語の組み合わせをフレーズとして覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "The project requires enough financial resources.",
        "ja": "そのプロジェクトには十分な財源が必要です。"
      },
      {
        "en": "Small schools often have limited financial resources.",
        "ja": "小規模な学校は財源が限られていることが多いです。"
      }
    ]
  },
  {
    "id": "adj-financial-security",
    "category": "Business",
    "jaPrompt": "経済的安定",
    "answer": "financial security",
    "distractors": [
      "money security",
      "cash security",
      "economic security"
    ],
    "explanationJa": "financial security は「経済的安定」を表す自然な英語のまとまりです。語の組み合わせをフレーズとして覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "A steady job can provide financial security.",
        "ja": "安定した仕事は経済的安定をもたらします。"
      },
      {
        "en": "Many people save money for financial security.",
        "ja": "多くの人は経済的安定のために貯金します。"
      }
    ]
  },
  {
    "id": "adv-highly-likely",
    "category": "Adverb Chunk",
    "jaPrompt": "非常に可能性が高い",
    "answer": "highly likely",
    "distractors": [
      "strongly likely",
      "deeply likely",
      "hardly likely"
    ],
    "explanationJa": "highly likely は「非常に可能性が高い」という意味で使われる自然な英語チャンクです。副詞と語の相性を、まとまりとして覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "It is highly likely that the meeting will be postponed.",
        "ja": "会議が延期される可能性は非常に高いです。"
      },
      {
        "en": "The plan is highly likely to succeed.",
        "ja": "その計画は成功する可能性が非常に高いです。"
      }
    ]
  },
  {
    "id": "adv-highly-effective",
    "category": "Adverb Chunk",
    "jaPrompt": "非常に効果的な",
    "answer": "highly effective",
    "distractors": [
      "strongly effective",
      "deeply effective",
      "hardly effective"
    ],
    "explanationJa": "highly effective は「非常に効果的な」という意味で使われる自然な英語チャンクです。副詞と語の相性を、まとまりとして覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "This method is highly effective for beginners.",
        "ja": "この方法は初心者に非常に効果的です。"
      },
      {
        "en": "The new rule proved highly effective.",
        "ja": "新しいルールは非常に効果的であることが分かりました。"
      }
    ]
  },
  {
    "id": "adv-highly-recommended",
    "category": "Adverb Chunk",
    "jaPrompt": "強く推奨される",
    "answer": "highly recommended",
    "distractors": [
      "strongly recommended",
      "deeply recommended",
      "hardly recommended"
    ],
    "explanationJa": "highly recommended は「強く推奨される」という意味で使われる自然な英語チャンクです。副詞と語の相性を、まとまりとして覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "This book is highly recommended for English learners.",
        "ja": "この本は英語学習者に強く勧められています。"
      },
      {
        "en": "The restaurant is highly recommended by local people.",
        "ja": "そのレストランは地元の人たちに高く評価されています。"
      }
    ]
  },
  {
    "id": "adv-highly-successful",
    "category": "Adverb Chunk",
    "jaPrompt": "大きな成功を収めた",
    "answer": "highly successful",
    "distractors": [
      "strongly successful",
      "deeply successful",
      "hardly successful"
    ],
    "explanationJa": "highly successful は「大きな成功を収めた」という意味で使われる自然な英語チャンクです。副詞と語の相性を、まとまりとして覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "The campaign was highly successful.",
        "ja": "そのキャンペーンは大きな成功を収めました。"
      },
      {
        "en": "She built a highly successful career in sales.",
        "ja": "彼女は営業分野で大きな成功を収めました。"
      }
    ]
  },
  {
    "id": "adv-highly-competitive",
    "category": "Adverb Chunk",
    "jaPrompt": "非常に競争の激しい",
    "answer": "highly competitive",
    "distractors": [
      "strongly competitive",
      "deeply competitive",
      "hardly competitive"
    ],
    "explanationJa": "highly competitive は「非常に競争の激しい」という意味で使われる自然な英語チャンクです。副詞と語の相性を、まとまりとして覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "The job market is highly competitive.",
        "ja": "就職市場は非常に競争が激しいです。"
      },
      {
        "en": "This industry remains highly competitive.",
        "ja": "この業界は今も非常に競争が激しいです。"
      }
    ]
  },
  {
    "id": "adv-highly-skilled",
    "category": "Adverb Chunk",
    "jaPrompt": "非常に熟練した",
    "answer": "highly skilled",
    "distractors": [
      "strongly skilled",
      "deeply skilled",
      "hardly skilled"
    ],
    "explanationJa": "highly skilled は「非常に熟練した」という意味で使われる自然な英語チャンクです。副詞と語の相性を、まとまりとして覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "The company needs highly skilled engineers.",
        "ja": "その会社は高い技術を持つエンジニアを必要としています。"
      },
      {
        "en": "She is a highly skilled translator.",
        "ja": "彼女は非常に熟練した翻訳者です。"
      }
    ]
  },
  {
    "id": "adv-highly-qualified",
    "category": "Adverb Chunk",
    "jaPrompt": "十分な資格を持つ",
    "answer": "highly qualified",
    "distractors": [
      "strongly qualified",
      "deeply qualified",
      "hardly qualified"
    ],
    "explanationJa": "highly qualified は「十分な資格を持つ」という意味で使われる自然な英語チャンクです。副詞と語の相性を、まとまりとして覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "We are looking for highly qualified candidates.",
        "ja": "私たちは十分な資格を持つ候補者を探しています。"
      },
      {
        "en": "He is highly qualified for this position.",
        "ja": "彼はこの職務に十分な資格があります。"
      }
    ]
  },
  {
    "id": "adv-highly-reliable",
    "category": "Adverb Chunk",
    "jaPrompt": "非常に信頼できる",
    "answer": "highly reliable",
    "distractors": [
      "strongly reliable",
      "deeply reliable",
      "hardly reliable"
    ],
    "explanationJa": "highly reliable は「非常に信頼できる」という意味で使われる自然な英語チャンクです。副詞と語の相性を、まとまりとして覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "The system is highly reliable.",
        "ja": "そのシステムは非常に信頼できます。"
      },
      {
        "en": "We need highly reliable data for this report.",
        "ja": "この報告書には信頼性の高いデータが必要です。"
      }
    ]
  },
  {
    "id": "adv-highly-efficient",
    "category": "Adverb Chunk",
    "jaPrompt": "非常に効率的な",
    "answer": "highly efficient",
    "distractors": [
      "strongly efficient",
      "deeply efficient",
      "hardly efficient"
    ],
    "explanationJa": "highly efficient は「非常に効率的な」という意味で使われる自然な英語チャンクです。副詞と語の相性を、まとまりとして覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "The new process is highly efficient.",
        "ja": "新しい手順は非常に効率的です。"
      },
      {
        "en": "This tool offers a highly efficient way to manage files.",
        "ja": "このツールを使うとファイルを非常に効率よく管理できます。"
      }
    ]
  },
  {
    "id": "adv-highly-sensitive",
    "category": "Adverb Chunk",
    "jaPrompt": "非常に敏感な",
    "answer": "highly sensitive",
    "distractors": [
      "strongly sensitive",
      "deeply sensitive",
      "hardly sensitive"
    ],
    "explanationJa": "highly sensitive は「非常に敏感な」という意味で使われる自然な英語チャンクです。副詞と語の相性を、まとまりとして覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "This device is highly sensitive to temperature changes.",
        "ja": "この装置は温度変化に非常に敏感です。"
      },
      {
        "en": "The file contains highly sensitive information.",
        "ja": "そのファイルには非常に機密性の高い情報が含まれています。"
      }
    ]
  },
  {
    "id": "adv-deeply-concerned",
    "category": "Adverb Chunk",
    "jaPrompt": "深く懸念している",
    "answer": "deeply concerned",
    "distractors": [
      "strongly concerned",
      "highly concerned",
      "widely concerned"
    ],
    "explanationJa": "deeply concerned は「深く懸念している」という意味で使われる自然な英語チャンクです。副詞と語の相性を、まとまりとして覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "We are deeply concerned about the delay.",
        "ja": "私たちはその遅れを深く懸念しています。"
      },
      {
        "en": "Parents were deeply concerned about the safety issue.",
        "ja": "保護者たちは安全上の問題を深く心配していました。"
      }
    ]
  },
  {
    "id": "adv-deeply-affected",
    "category": "Adverb Chunk",
    "jaPrompt": "大きな影響を受けている",
    "answer": "deeply affected",
    "distractors": [
      "strongly affected",
      "highly affected",
      "widely affected"
    ],
    "explanationJa": "deeply affected は「大きな影響を受けている」という意味で使われる自然な英語チャンクです。副詞と語の相性を、まとまりとして覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "Many families were deeply affected by the storm.",
        "ja": "多くの家庭がその嵐で大きな影響を受けました。"
      },
      {
        "en": "The team was deeply affected by the sudden change.",
        "ja": "チームは突然の変更に大きな影響を受けました。"
      }
    ]
  },
  {
    "id": "adv-deeply-moved",
    "category": "Adverb Chunk",
    "jaPrompt": "深く感動している",
    "answer": "deeply moved",
    "distractors": [
      "strongly moved",
      "highly moved",
      "widely moved"
    ],
    "explanationJa": "deeply moved は「深く感動している」という意味で使われる自然な英語チャンクです。副詞と語の相性を、まとまりとして覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "I was deeply moved by her speech.",
        "ja": "私は彼女のスピーチに深く感動しました。"
      },
      {
        "en": "The audience was deeply moved by the performance.",
        "ja": "観客はその演奏に深く感動しました。"
      }
    ]
  },
  {
    "id": "adv-deeply-committed",
    "category": "Adverb Chunk",
    "jaPrompt": "深く打ち込んでいる",
    "answer": "deeply committed",
    "distractors": [
      "strongly committed",
      "highly committed",
      "widely committed"
    ],
    "explanationJa": "deeply committed は「深く打ち込んでいる」という意味で使われる自然な英語チャンクです。副詞と語の相性を、まとまりとして覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "She is deeply committed to helping her students.",
        "ja": "彼女は学生を支援することに深く打ち込んでいます。"
      },
      {
        "en": "The team is deeply committed to improving the product.",
        "ja": "チームは製品改善に真剣に取り組んでいます。"
      }
    ]
  },
  {
    "id": "adv-deeply-rooted",
    "category": "Adverb Chunk",
    "jaPrompt": "深く根付いている",
    "answer": "deeply rooted",
    "distractors": [
      "strongly rooted",
      "highly rooted",
      "widely rooted"
    ],
    "explanationJa": "deeply rooted は「深く根付いている」という意味で使われる自然な英語チャンクです。副詞と語の相性を、まとまりとして覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "This custom is deeply rooted in local culture.",
        "ja": "この習慣は地域の文化に深く根付いています。"
      },
      {
        "en": "The problem is deeply rooted in the old system.",
        "ja": "その問題は古い仕組みに深く根ざしています。"
      }
    ]
  },
  {
    "id": "adv-deeply-involved",
    "category": "Adverb Chunk",
    "jaPrompt": "深く関わっている",
    "answer": "deeply involved",
    "distractors": [
      "strongly involved",
      "highly involved",
      "widely involved"
    ],
    "explanationJa": "deeply involved は「深く関わっている」という意味で使われる自然な英語チャンクです。副詞と語の相性を、まとまりとして覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "He is deeply involved in the new project.",
        "ja": "彼は新しいプロジェクトに深く関わっています。"
      },
      {
        "en": "The organization is deeply involved in community work.",
        "ja": "その団体は地域活動に深く関わっています。"
      }
    ]
  },
  {
    "id": "adv-deeply-grateful",
    "category": "Adverb Chunk",
    "jaPrompt": "心から感謝している",
    "answer": "deeply grateful",
    "distractors": [
      "strongly grateful",
      "highly grateful",
      "widely grateful"
    ],
    "explanationJa": "deeply grateful は「心から感謝している」という意味で使われる自然な英語チャンクです。副詞と語の相性を、まとまりとして覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "We are deeply grateful for your support.",
        "ja": "ご支援に心から感謝しています。"
      },
      {
        "en": "She was deeply grateful to her mentor.",
        "ja": "彼女は指導者に心から感謝していました。"
      }
    ]
  },
  {
    "id": "adv-deeply-troubled",
    "category": "Adverb Chunk",
    "jaPrompt": "深く悩んでいる",
    "answer": "deeply troubled",
    "distractors": [
      "strongly troubled",
      "highly troubled",
      "widely troubled"
    ],
    "explanationJa": "deeply troubled は「深く悩んでいる」という意味で使われる自然な英語チャンクです。副詞と語の相性を、まとまりとして覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "He was deeply troubled by the decision.",
        "ja": "彼はその決定に深く悩んでいました。"
      },
      {
        "en": "Many employees were deeply troubled by the news.",
        "ja": "多くの従業員がその知らせに深く困惑していました。"
      }
    ]
  },
  {
    "id": "adv-deeply-connected",
    "category": "Adverb Chunk",
    "jaPrompt": "深く結びついている",
    "answer": "deeply connected",
    "distractors": [
      "strongly connected",
      "highly connected",
      "widely connected"
    ],
    "explanationJa": "deeply connected は「深く結びついている」という意味で使われる自然な英語チャンクです。副詞と語の相性を、まとまりとして覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "The two issues are deeply connected.",
        "ja": "その2つの問題は深く結びついています。"
      },
      {
        "en": "Language and culture are deeply connected.",
        "ja": "言語と文化は深くつながっています。"
      }
    ]
  },
  {
    "id": "adv-deeply-engaged",
    "category": "Adverb Chunk",
    "jaPrompt": "深く関与している",
    "answer": "deeply engaged",
    "distractors": [
      "strongly engaged",
      "highly engaged",
      "widely engaged"
    ],
    "explanationJa": "deeply engaged は「深く関与している」という意味で使われる自然な英語チャンクです。副詞と語の相性を、まとまりとして覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "Students were deeply engaged in the discussion.",
        "ja": "学生たちは議論に深く参加していました。"
      },
      {
        "en": "The company is deeply engaged in environmental projects.",
        "ja": "その会社は環境プロジェクトに深く関わっています。"
      }
    ]
  },
  {
    "id": "adv-fully-aware",
    "category": "Adverb Chunk",
    "jaPrompt": "十分に認識している",
    "answer": "fully aware",
    "distractors": [
      "very aware",
      "deeply aware",
      "strongly aware"
    ],
    "explanationJa": "fully aware は「十分に認識している」という意味で使われる自然な英語チャンクです。副詞と語の相性を、まとまりとして覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "We are fully aware of the risks.",
        "ja": "私たちはそのリスクを十分に認識しています。"
      },
      {
        "en": "She was fully aware of the deadline.",
        "ja": "彼女は締め切りを十分に把握していました。"
      }
    ]
  },
  {
    "id": "adv-fully-prepared",
    "category": "Adverb Chunk",
    "jaPrompt": "十分に準備できている",
    "answer": "fully prepared",
    "distractors": [
      "very prepared",
      "deeply prepared",
      "strongly prepared"
    ],
    "explanationJa": "fully prepared は「十分に準備できている」という意味で使われる自然な英語チャンクです。副詞と語の相性を、まとまりとして覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "The team is fully prepared for the presentation.",
        "ja": "チームはプレゼンの準備が万全です。"
      },
      {
        "en": "Please make sure you are fully prepared before the interview.",
        "ja": "面接の前に十分な準備ができているか確認してください。"
      }
    ]
  },
  {
    "id": "adv-fully-understand",
    "category": "Adverb Chunk",
    "jaPrompt": "十分に理解する",
    "answer": "fully understand",
    "distractors": [
      "very understand",
      "deeply understand",
      "strongly understand"
    ],
    "explanationJa": "fully understand は「十分に理解する」という意味で使われる自然な英語チャンクです。副詞と語の相性を、まとまりとして覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "I fully understand your concern.",
        "ja": "あなたの懸念は十分に理解しています。"
      },
      {
        "en": "Please make sure you fully understand the instructions.",
        "ja": "指示を十分に理解しているか確認してください。"
      }
    ]
  },
  {
    "id": "adv-fully-support",
    "category": "Adverb Chunk",
    "jaPrompt": "全面的に支持する",
    "answer": "fully support",
    "distractors": [
      "very support",
      "deeply support",
      "strongly support"
    ],
    "explanationJa": "fully support は「全面的に支持する」という意味で使われる自然な英語チャンクです。副詞と語の相性を、まとまりとして覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "I fully support your decision.",
        "ja": "私はあなたの決定を全面的に支持します。"
      },
      {
        "en": "The committee fully supports the new policy.",
        "ja": "委員会は新しい方針を全面的に支持しています。"
      }
    ]
  },
  {
    "id": "adv-fully-accept",
    "category": "Adverb Chunk",
    "jaPrompt": "完全に受け入れる",
    "answer": "fully accept",
    "distractors": [
      "very accept",
      "deeply accept",
      "strongly accept"
    ],
    "explanationJa": "fully accept は「完全に受け入れる」という意味で使われる自然な英語チャンクです。副詞と語の相性を、まとまりとして覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "She fully accepted the result.",
        "ja": "彼女はその結果を完全に受け入れました。"
      },
      {
        "en": "We cannot fully accept the proposal yet.",
        "ja": "私たちはまだその提案を完全には受け入れられません。"
      }
    ]
  },
  {
    "id": "adv-fully-developed",
    "category": "Adverb Chunk",
    "jaPrompt": "十分に発達した",
    "answer": "fully developed",
    "distractors": [
      "very developed",
      "deeply developed",
      "strongly developed"
    ],
    "explanationJa": "fully developed は「十分に発達した」という意味で使われる自然な英語チャンクです。副詞と語の相性を、まとまりとして覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "The idea is not fully developed yet.",
        "ja": "その考えはまだ十分に練られていません。"
      },
      {
        "en": "The product became fully developed after several tests.",
        "ja": "その製品は何度かのテストを経て完成度が高まりました。"
      }
    ]
  },
  {
    "id": "adv-fully-equipped",
    "category": "Adverb Chunk",
    "jaPrompt": "設備が十分に整っている",
    "answer": "fully equipped",
    "distractors": [
      "very equipped",
      "deeply equipped",
      "strongly equipped"
    ],
    "explanationJa": "fully equipped は「設備が十分に整っている」という意味で使われる自然な英語チャンクです。副詞と語の相性を、まとまりとして覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "The room is fully equipped for online meetings.",
        "ja": "その部屋にはオンライン会議に必要な設備がそろっています。"
      },
      {
        "en": "The kitchen is fully equipped with modern appliances.",
        "ja": "そのキッチンには最新の調理機器が一通りそろっています。"
      }
    ]
  },
  {
    "id": "adv-fully-responsible",
    "category": "Adverb Chunk",
    "jaPrompt": "全面的に責任がある",
    "answer": "fully responsible",
    "distractors": [
      "very responsible",
      "deeply responsible",
      "strongly responsible"
    ],
    "explanationJa": "fully responsible は「全面的に責任がある」という意味で使われる自然な英語チャンクです。副詞と語の相性を、まとまりとして覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "The supplier is fully responsible for the defect.",
        "ja": "その不具合については供給業者に全面的な責任があります。"
      },
      {
        "en": "You are fully responsible for managing this data.",
        "ja": "このデータの管理についてはあなたが全面的に責任を負います。"
      }
    ]
  },
  {
    "id": "adv-fully-available",
    "category": "Adverb Chunk",
    "jaPrompt": "完全に利用可能な",
    "answer": "fully available",
    "distractors": [
      "very available",
      "deeply available",
      "strongly available"
    ],
    "explanationJa": "fully available は「完全に利用可能な」という意味で使われる自然な英語チャンクです。副詞と語の相性を、まとまりとして覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "The service is now fully available to all users.",
        "ja": "そのサービスは現在すべてのユーザーが利用できます。"
      },
      {
        "en": "The new feature will be fully available next week.",
        "ja": "新機能は来週から全面的に利用できるようになります。"
      }
    ]
  },
  {
    "id": "adv-fully-committed",
    "category": "Adverb Chunk",
    "jaPrompt": "全力で取り組んでいる",
    "answer": "fully committed",
    "distractors": [
      "very committed",
      "deeply committed",
      "strongly committed"
    ],
    "explanationJa": "fully committed は「全力で取り組んでいる」という意味で使われる自然な英語チャンクです。副詞と語の相性を、まとまりとして覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "We are fully committed to improving customer service.",
        "ja": "私たちは顧客サービスの改善に全力で取り組んでいます。"
      },
      {
        "en": "She is fully committed to finishing the project.",
        "ja": "彼女はプロジェクトを完了させることに全力を注いでいます。"
      }
    ]
  },
  {
    "id": "adv-widely-available",
    "category": "Adverb Chunk",
    "jaPrompt": "広く利用できる",
    "answer": "widely available",
    "distractors": [
      "largely available",
      "bigly available",
      "strongly available"
    ],
    "explanationJa": "widely available は「広く利用できる」という意味で使われる自然な英語チャンクです。副詞と語の相性を、まとまりとして覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "The app is widely available in many countries.",
        "ja": "そのアプリは多くの国で広く利用できます。"
      },
      {
        "en": "Online lessons are now widely available.",
        "ja": "オンライン授業は今では広く利用できるようになっています。"
      }
    ]
  },
  {
    "id": "adv-widely-used",
    "category": "Adverb Chunk",
    "jaPrompt": "広く使われている",
    "answer": "widely used",
    "distractors": [
      "largely used",
      "bigly used",
      "strongly used"
    ],
    "explanationJa": "widely used は「広く使われている」という意味で使われる自然な英語チャンクです。副詞と語の相性を、まとまりとして覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "This expression is widely used in business English.",
        "ja": "この表現はビジネス英語で広く使われています。"
      },
      {
        "en": "The software is widely used by small companies.",
        "ja": "そのソフトウェアは小規模企業に広く使われています。"
      }
    ]
  },
  {
    "id": "adv-widely-known",
    "category": "Adverb Chunk",
    "jaPrompt": "広く知られている",
    "answer": "widely known",
    "distractors": [
      "largely known",
      "bigly known",
      "strongly known"
    ],
    "explanationJa": "widely known は「広く知られている」という意味で使われる自然な英語チャンクです。副詞と語の相性を、まとまりとして覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "The author is widely known for his novels.",
        "ja": "その作家は小説で広く知られています。"
      },
      {
        "en": "This rule is widely known among engineers.",
        "ja": "このルールはエンジニアの間で広く知られています。"
      }
    ]
  },
  {
    "id": "adv-widely-accepted",
    "category": "Adverb Chunk",
    "jaPrompt": "広く受け入れられている",
    "answer": "widely accepted",
    "distractors": [
      "largely accepted",
      "bigly accepted",
      "strongly accepted"
    ],
    "explanationJa": "widely accepted は「広く受け入れられている」という意味で使われる自然な英語チャンクです。副詞と語の相性を、まとまりとして覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "The idea is widely accepted in modern education.",
        "ja": "その考え方は現代の教育で広く受け入れられています。"
      },
      {
        "en": "It is widely accepted that sleep affects memory.",
        "ja": "睡眠が記憶に影響することは広く受け入れられています。"
      }
    ]
  },
  {
    "id": "adv-widely-recognized",
    "category": "Adverb Chunk",
    "jaPrompt": "広く認められている",
    "answer": "widely recognized",
    "distractors": [
      "largely recognized",
      "bigly recognized",
      "strongly recognized"
    ],
    "explanationJa": "widely recognized は「広く認められている」という意味で使われる自然な英語チャンクです。副詞と語の相性を、まとまりとして覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "She is widely recognized as an expert in the field.",
        "ja": "彼女はその分野の専門家として広く認められています。"
      },
      {
        "en": "The problem is widely recognized in the industry.",
        "ja": "その問題は業界内で広く認識されています。"
      }
    ]
  },
  {
    "id": "adv-widely-distributed",
    "category": "Adverb Chunk",
    "jaPrompt": "広く配布されている",
    "answer": "widely distributed",
    "distractors": [
      "largely distributed",
      "bigly distributed",
      "strongly distributed"
    ],
    "explanationJa": "widely distributed は「広く配布されている」という意味で使われる自然な英語チャンクです。副詞と語の相性を、まとまりとして覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "The report was widely distributed among staff.",
        "ja": "その報告書はスタッフの間で広く配布されました。"
      },
      {
        "en": "The magazine is widely distributed across the country.",
        "ja": "その雑誌は全国で広く配布されています。"
      }
    ]
  },
  {
    "id": "adv-widely-read",
    "category": "Adverb Chunk",
    "jaPrompt": "広く読まれている",
    "answer": "widely read",
    "distractors": [
      "largely read",
      "bigly read",
      "strongly read"
    ],
    "explanationJa": "widely read は「広く読まれている」という意味で使われる自然な英語チャンクです。副詞と語の相性を、まとまりとして覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "Her articles are widely read by language teachers.",
        "ja": "彼女の記事は語学教師に広く読まれています。"
      },
      {
        "en": "The book is widely read in universities.",
        "ja": "その本は大学で広く読まれています。"
      }
    ]
  },
  {
    "id": "adv-widely-shared",
    "category": "Adverb Chunk",
    "jaPrompt": "広く共有されている",
    "answer": "widely shared",
    "distractors": [
      "largely shared",
      "bigly shared",
      "strongly shared"
    ],
    "explanationJa": "widely shared は「広く共有されている」という意味で使われる自然な英語チャンクです。副詞と語の相性を、まとまりとして覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "The video was widely shared on social media.",
        "ja": "その動画はSNSで広く共有されました。"
      },
      {
        "en": "This concern is widely shared by parents.",
        "ja": "この懸念は保護者の間で広く共有されています。"
      }
    ]
  },
  {
    "id": "adv-widely-discussed",
    "category": "Adverb Chunk",
    "jaPrompt": "広く議論されている",
    "answer": "widely discussed",
    "distractors": [
      "largely discussed",
      "bigly discussed",
      "strongly discussed"
    ],
    "explanationJa": "widely discussed は「広く議論されている」という意味で使われる自然な英語チャンクです。副詞と語の相性を、まとまりとして覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "The issue is widely discussed in the media.",
        "ja": "その問題はメディアで広く議論されています。"
      },
      {
        "en": "Remote work is widely discussed in many companies.",
        "ja": "リモートワークは多くの会社で広く議論されています。"
      }
    ]
  },
  {
    "id": "adv-widely-reported",
    "category": "Adverb Chunk",
    "jaPrompt": "広く報道されている",
    "answer": "widely reported",
    "distractors": [
      "largely reported",
      "bigly reported",
      "strongly reported"
    ],
    "explanationJa": "widely reported は「広く報道されている」という意味で使われる自然な英語チャンクです。副詞と語の相性を、まとまりとして覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "The incident was widely reported in the news.",
        "ja": "その出来事はニュースで広く報道されました。"
      },
      {
        "en": "The results were widely reported by major newspapers.",
        "ja": "その結果は主要紙で広く報じられました。"
      }
    ]
  },
  {
    "id": "adv-strongly-recommend",
    "category": "Adverb Chunk",
    "jaPrompt": "強く勧める",
    "answer": "strongly recommend",
    "distractors": [
      "heavily recommend",
      "deeply recommend",
      "highly recommend"
    ],
    "explanationJa": "strongly recommend は「強く勧める」という意味で使われる自然な英語チャンクです。副詞と語の相性を、まとまりとして覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "I strongly recommend this book to beginners.",
        "ja": "初心者にはこの本を強くお勧めします。"
      },
      {
        "en": "Doctors strongly recommend regular exercise.",
        "ja": "医師は定期的な運動を強く勧めています。"
      }
    ]
  },
  {
    "id": "adv-strongly-support",
    "category": "Adverb Chunk",
    "jaPrompt": "強く支持する",
    "answer": "strongly support",
    "distractors": [
      "heavily support",
      "deeply support",
      "highly support"
    ],
    "explanationJa": "strongly support は「強く支持する」という意味で使われる自然な英語チャンクです。副詞と語の相性を、まとまりとして覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "I strongly support the new policy.",
        "ja": "私は新しい方針を強く支持しています。"
      },
      {
        "en": "Many employees strongly support the change.",
        "ja": "多くの従業員がその変更を強く支持しています。"
      }
    ]
  },
  {
    "id": "adv-strongly-believe",
    "category": "Adverb Chunk",
    "jaPrompt": "強く信じる",
    "answer": "strongly believe",
    "distractors": [
      "heavily believe",
      "deeply believe",
      "highly believe"
    ],
    "explanationJa": "strongly believe は「強く信じる」という意味で使われる自然な英語チャンクです。副詞と語の相性を、まとまりとして覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "I strongly believe that practice is important.",
        "ja": "練習が大切だと私は強く信じています。"
      },
      {
        "en": "She strongly believes in the value of education.",
        "ja": "彼女は教育の価値を強く信じています。"
      }
    ]
  },
  {
    "id": "adv-strongly-oppose",
    "category": "Adverb Chunk",
    "jaPrompt": "強く反対する",
    "answer": "strongly oppose",
    "distractors": [
      "heavily oppose",
      "deeply oppose",
      "highly oppose"
    ],
    "explanationJa": "strongly oppose は「強く反対する」という意味で使われる自然な英語チャンクです。副詞と語の相性を、まとまりとして覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "Residents strongly oppose the construction plan.",
        "ja": "住民はその建設計画に強く反対しています。"
      },
      {
        "en": "The committee strongly opposed the proposal.",
        "ja": "委員会はその提案に強く反対しました。"
      }
    ]
  },
  {
    "id": "adv-strongly-suggest",
    "category": "Adverb Chunk",
    "jaPrompt": "強く示唆する",
    "answer": "strongly suggest",
    "distractors": [
      "heavily suggest",
      "deeply suggest",
      "highly suggest"
    ],
    "explanationJa": "strongly suggest は「強く示唆する」という意味で使われる自然な英語チャンクです。副詞と語の相性を、まとまりとして覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "The data strongly suggest a connection.",
        "ja": "そのデータは関連性を強く示しています。"
      },
      {
        "en": "The results strongly suggest that the method works.",
        "ja": "その結果は、この方法が有効であることを強く示しています。"
      }
    ]
  },
  {
    "id": "adv-strongly-agree",
    "category": "Adverb Chunk",
    "jaPrompt": "強く同意する",
    "answer": "strongly agree",
    "distractors": [
      "heavily agree",
      "deeply agree",
      "highly agree"
    ],
    "explanationJa": "strongly agree は「強く同意する」という意味で使われる自然な英語チャンクです。副詞と語の相性を、まとまりとして覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "I strongly agree with your opinion.",
        "ja": "私はあなたの意見に強く同意します。"
      },
      {
        "en": "Most participants strongly agreed with the statement.",
        "ja": "参加者の多くがその意見に強く同意しました。"
      }
    ]
  },
  {
    "id": "adv-strongly-disagree",
    "category": "Adverb Chunk",
    "jaPrompt": "強く反対する",
    "answer": "strongly disagree",
    "distractors": [
      "heavily disagree",
      "deeply disagree",
      "highly disagree"
    ],
    "explanationJa": "strongly disagree は「強く反対する」という意味で使われる自然な英語チャンクです。副詞と語の相性を、まとまりとして覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "I strongly disagree with that conclusion.",
        "ja": "私はその結論に強く反対です。"
      },
      {
        "en": "She strongly disagreed with the decision.",
        "ja": "彼女はその決定に強く反対しました。"
      }
    ]
  },
  {
    "id": "adv-strongly-feel",
    "category": "Adverb Chunk",
    "jaPrompt": "強く感じる",
    "answer": "strongly feel",
    "distractors": [
      "heavily feel",
      "deeply feel",
      "highly feel"
    ],
    "explanationJa": "strongly feel は「強く感じる」という意味で使われる自然な英語チャンクです。副詞と語の相性を、まとまりとして覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "I strongly feel that we need more time.",
        "ja": "もっと時間が必要だと強く感じています。"
      },
      {
        "en": "Many people strongly feel that the rule should change.",
        "ja": "多くの人がそのルールは変えるべきだと強く感じています。"
      }
    ]
  },
  {
    "id": "adv-strongly-influence",
    "category": "Adverb Chunk",
    "jaPrompt": "強く影響する",
    "answer": "strongly influence",
    "distractors": [
      "heavily influence",
      "deeply influence",
      "highly influence"
    ],
    "explanationJa": "strongly influence は「強く影響する」という意味で使われる自然な英語チャンクです。副詞と語の相性を、まとまりとして覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "Culture can strongly influence communication styles.",
        "ja": "文化はコミュニケーションの仕方に強く影響します。"
      },
      {
        "en": "The teacher strongly influenced my career choice.",
        "ja": "その先生は私の進路選択に大きな影響を与えました。"
      }
    ]
  },
  {
    "id": "adv-strongly-encourage",
    "category": "Adverb Chunk",
    "jaPrompt": "強く促す",
    "answer": "strongly encourage",
    "distractors": [
      "heavily encourage",
      "deeply encourage",
      "highly encourage"
    ],
    "explanationJa": "strongly encourage は「強く促す」という意味で使われる自然な英語チャンクです。副詞と語の相性を、まとまりとして覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "We strongly encourage students to ask questions.",
        "ja": "私たちは学生に質問することを強く勧めています。"
      },
      {
        "en": "The notice strongly encouraged users to change their passwords.",
        "ja": "その通知は利用者にパスワード変更を強く促しました。"
      }
    ]
  },
  {
    "id": "adv-clearly-understand",
    "category": "Adverb Chunk",
    "jaPrompt": "はっきり理解する",
    "answer": "clearly understand",
    "distractors": [
      "cleanly understand",
      "strongly understand",
      "deeply understand"
    ],
    "explanationJa": "clearly understand は「はっきり理解する」という意味で使われる自然な英語チャンクです。副詞と語の相性を、まとまりとして覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "I clearly understand what you mean.",
        "ja": "あなたの言いたいことははっきり理解できます。"
      },
      {
        "en": "Students need to clearly understand the goal of the lesson.",
        "ja": "学生は授業の目的をはっきり理解する必要があります。"
      }
    ]
  },
  {
    "id": "adv-clearly-show",
    "category": "Adverb Chunk",
    "jaPrompt": "明確に示す",
    "answer": "clearly show",
    "distractors": [
      "cleanly show",
      "strongly show",
      "deeply show"
    ],
    "explanationJa": "clearly show は「明確に示す」という意味で使われる自然な英語チャンクです。副詞と語の相性を、まとまりとして覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "The chart clearly shows the increase in sales.",
        "ja": "そのグラフは売上の増加を明確に示しています。"
      },
      {
        "en": "The results clearly show that the method works.",
        "ja": "その結果は、この方法が有効であることを明確に示しています。"
      }
    ]
  },
  {
    "id": "adv-clearly-explain",
    "category": "Adverb Chunk",
    "jaPrompt": "分かりやすく説明する",
    "answer": "clearly explain",
    "distractors": [
      "cleanly explain",
      "strongly explain",
      "deeply explain"
    ],
    "explanationJa": "clearly explain は「分かりやすく説明する」という意味で使われる自然な英語チャンクです。副詞と語の相性を、まとまりとして覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "Please clearly explain the next step.",
        "ja": "次の手順を分かりやすく説明してください。"
      },
      {
        "en": "The teacher clearly explained the grammar point.",
        "ja": "先生はその文法事項を分かりやすく説明しました。"
      }
    ]
  },
  {
    "id": "adv-clearly-state",
    "category": "Adverb Chunk",
    "jaPrompt": "明確に述べる",
    "answer": "clearly state",
    "distractors": [
      "cleanly state",
      "strongly state",
      "deeply state"
    ],
    "explanationJa": "clearly state は「明確に述べる」という意味で使われる自然な英語チャンクです。副詞と語の相性を、まとまりとして覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "The contract clearly states the payment terms.",
        "ja": "契約書には支払い条件が明確に記載されています。"
      },
      {
        "en": "Please clearly state your reason in the email.",
        "ja": "メールには理由を明確に書いてください。"
      }
    ]
  },
  {
    "id": "adv-clearly-define",
    "category": "Adverb Chunk",
    "jaPrompt": "明確に定義する",
    "answer": "clearly define",
    "distractors": [
      "cleanly define",
      "strongly define",
      "deeply define"
    ],
    "explanationJa": "clearly define は「明確に定義する」という意味で使われる自然な英語チャンクです。副詞と語の相性を、まとまりとして覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "We need to clearly define the project scope.",
        "ja": "プロジェクトの範囲を明確に定義する必要があります。"
      },
      {
        "en": "The policy clearly defines each employee's role.",
        "ja": "その方針では各従業員の役割が明確に定義されています。"
      }
    ]
  },
  {
    "id": "adv-clearly-identify",
    "category": "Adverb Chunk",
    "jaPrompt": "明確に特定する",
    "answer": "clearly identify",
    "distractors": [
      "cleanly identify",
      "strongly identify",
      "deeply identify"
    ],
    "explanationJa": "clearly identify は「明確に特定する」という意味で使われる自然な英語チャンクです。副詞と語の相性を、まとまりとして覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "The report clearly identifies the main cause.",
        "ja": "その報告書は主な原因を明確に特定しています。"
      },
      {
        "en": "Please clearly identify which file has the error.",
        "ja": "どのファイルにエラーがあるのか明確に示してください。"
      }
    ]
  },
  {
    "id": "adv-clearly-indicate",
    "category": "Adverb Chunk",
    "jaPrompt": "明確に示す",
    "answer": "clearly indicate",
    "distractors": [
      "cleanly indicate",
      "strongly indicate",
      "deeply indicate"
    ],
    "explanationJa": "clearly indicate は「明確に示す」という意味で使われる自然な英語チャンクです。副詞と語の相性を、まとまりとして覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "The sign clearly indicates the exit.",
        "ja": "その標識は出口を明確に示しています。"
      },
      {
        "en": "The data clearly indicate a change in customer behavior.",
        "ja": "そのデータは顧客行動の変化を明確に示しています。"
      }
    ]
  },
  {
    "id": "adv-clearly-communicate",
    "category": "Adverb Chunk",
    "jaPrompt": "明確に伝える",
    "answer": "clearly communicate",
    "distractors": [
      "cleanly communicate",
      "strongly communicate",
      "deeply communicate"
    ],
    "explanationJa": "clearly communicate は「明確に伝える」という意味で使われる自然な英語チャンクです。副詞と語の相性を、まとまりとして覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "Please clearly communicate the schedule to the team.",
        "ja": "チームに日程を明確に伝えてください。"
      },
      {
        "en": "Good leaders clearly communicate their expectations.",
        "ja": "優れたリーダーは期待することを明確に伝えます。"
      }
    ]
  },
  {
    "id": "adv-clearly-describe",
    "category": "Adverb Chunk",
    "jaPrompt": "明確に説明する",
    "answer": "clearly describe",
    "distractors": [
      "cleanly describe",
      "strongly describe",
      "deeply describe"
    ],
    "explanationJa": "clearly describe は「明確に説明する」という意味で使われる自然な英語チャンクです。副詞と語の相性を、まとまりとして覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "The document clearly describes the setup process.",
        "ja": "その文書は設定手順を明確に説明しています。"
      },
      {
        "en": "Please clearly describe what happened.",
        "ja": "何が起きたのか明確に説明してください。"
      }
    ]
  },
  {
    "id": "adv-clearly-see",
    "category": "Adverb Chunk",
    "jaPrompt": "はっきり分かる",
    "answer": "clearly see",
    "distractors": [
      "cleanly see",
      "strongly see",
      "deeply see"
    ],
    "explanationJa": "clearly see は「はっきり分かる」という意味で使われる自然な英語チャンクです。副詞と語の相性を、まとまりとして覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "I can clearly see the difference now.",
        "ja": "今なら違いがはっきり分かります。"
      },
      {
        "en": "From this example, we can clearly see the problem.",
        "ja": "この例から問題点がはっきり分かります。"
      }
    ]
  },
  {
    "id": "adv-carefully-consider",
    "category": "Adverb Chunk",
    "jaPrompt": "慎重に検討する",
    "answer": "carefully consider",
    "distractors": [
      "deeply consider",
      "strongly consider",
      "hardly consider"
    ],
    "explanationJa": "carefully consider は「慎重に検討する」という意味で使われる自然な英語チャンクです。副詞と語の相性を、まとまりとして覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "We need to carefully consider the risks.",
        "ja": "リスクを慎重に検討する必要があります。"
      },
      {
        "en": "Please carefully consider each option before deciding.",
        "ja": "決める前に各選択肢を慎重に検討してください。"
      }
    ]
  },
  {
    "id": "adv-carefully-review",
    "category": "Adverb Chunk",
    "jaPrompt": "慎重に確認する",
    "answer": "carefully review",
    "distractors": [
      "deeply review",
      "strongly review",
      "hardly review"
    ],
    "explanationJa": "carefully review は「慎重に確認する」という意味で使われる自然な英語チャンクです。副詞と語の相性を、まとまりとして覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "Please carefully review the contract before signing it.",
        "ja": "署名する前に契約書を慎重に確認してください。"
      },
      {
        "en": "The manager carefully reviewed the report.",
        "ja": "マネージャーは報告書を慎重に確認しました。"
      }
    ]
  },
  {
    "id": "adv-carefully-examine",
    "category": "Adverb Chunk",
    "jaPrompt": "慎重に調べる",
    "answer": "carefully examine",
    "distractors": [
      "deeply examine",
      "strongly examine",
      "hardly examine"
    ],
    "explanationJa": "carefully examine は「慎重に調べる」という意味で使われる自然な英語チャンクです。副詞と語の相性を、まとまりとして覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "The doctor carefully examined the patient.",
        "ja": "医師は患者を慎重に診察しました。"
      },
      {
        "en": "We carefully examined the cause of the error.",
        "ja": "私たちはエラーの原因を慎重に調べました。"
      }
    ]
  },
  {
    "id": "adv-carefully-check",
    "category": "Adverb Chunk",
    "jaPrompt": "慎重に確認する",
    "answer": "carefully check",
    "distractors": [
      "deeply check",
      "strongly check",
      "hardly check"
    ],
    "explanationJa": "carefully check は「慎重に確認する」という意味で使われる自然な英語チャンクです。副詞と語の相性を、まとまりとして覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "Please carefully check the address before sending it.",
        "ja": "送信する前に住所を慎重に確認してください。"
      },
      {
        "en": "She carefully checked the numbers in the file.",
        "ja": "彼女はファイル内の数字を慎重に確認しました。"
      }
    ]
  },
  {
    "id": "adv-carefully-read",
    "category": "Adverb Chunk",
    "jaPrompt": "注意深く読む",
    "answer": "carefully read",
    "distractors": [
      "deeply read",
      "strongly read",
      "hardly read"
    ],
    "explanationJa": "carefully read は「注意深く読む」という意味で使われる自然な英語チャンクです。副詞と語の相性を、まとまりとして覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "Please carefully read the instructions.",
        "ja": "指示を注意深く読んでください。"
      },
      {
        "en": "He carefully read the email before replying.",
        "ja": "彼は返信する前にメールを注意深く読みました。"
      }
    ]
  },
  {
    "id": "adv-carefully-follow",
    "category": "Adverb Chunk",
    "jaPrompt": "慎重に従う",
    "answer": "carefully follow",
    "distractors": [
      "deeply follow",
      "strongly follow",
      "hardly follow"
    ],
    "explanationJa": "carefully follow は「慎重に従う」という意味で使われる自然な英語チャンクです。副詞と語の相性を、まとまりとして覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "Please carefully follow the steps in the manual.",
        "ja": "マニュアルの手順に慎重に従ってください。"
      },
      {
        "en": "The staff carefully followed the safety rules.",
        "ja": "スタッフは安全ルールに慎重に従いました。"
      }
    ]
  },
  {
    "id": "adv-carefully-choose",
    "category": "Adverb Chunk",
    "jaPrompt": "慎重に選ぶ",
    "answer": "carefully choose",
    "distractors": [
      "deeply choose",
      "strongly choose",
      "hardly choose"
    ],
    "explanationJa": "carefully choose は「慎重に選ぶ」という意味で使われる自然な英語チャンクです。副詞と語の相性を、まとまりとして覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "Please carefully choose the correct option.",
        "ja": "正しい選択肢を慎重に選んでください。"
      },
      {
        "en": "She carefully chose her words during the meeting.",
        "ja": "彼女は会議中、言葉を慎重に選びました。"
      }
    ]
  },
  {
    "id": "adv-carefully-plan",
    "category": "Adverb Chunk",
    "jaPrompt": "慎重に計画する",
    "answer": "carefully plan",
    "distractors": [
      "deeply plan",
      "strongly plan",
      "hardly plan"
    ],
    "explanationJa": "carefully plan は「慎重に計画する」という意味で使われる自然な英語チャンクです。副詞と語の相性を、まとまりとして覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "We need to carefully plan the schedule.",
        "ja": "スケジュールを慎重に計画する必要があります。"
      },
      {
        "en": "They carefully planned the event for several months.",
        "ja": "彼らは数か月かけてそのイベントを慎重に計画しました。"
      }
    ]
  },
  {
    "id": "adv-carefully-manage",
    "category": "Adverb Chunk",
    "jaPrompt": "慎重に管理する",
    "answer": "carefully manage",
    "distractors": [
      "deeply manage",
      "strongly manage",
      "hardly manage"
    ],
    "explanationJa": "carefully manage は「慎重に管理する」という意味で使われる自然な英語チャンクです。副詞と語の相性を、まとまりとして覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "We must carefully manage customer data.",
        "ja": "顧客データは慎重に管理しなければなりません。"
      },
      {
        "en": "She carefully managed the project budget.",
        "ja": "彼女はプロジェクト予算を慎重に管理しました。"
      }
    ]
  },
  {
    "id": "adv-carefully-monitor",
    "category": "Adverb Chunk",
    "jaPrompt": "慎重に監視する",
    "answer": "carefully monitor",
    "distractors": [
      "deeply monitor",
      "strongly monitor",
      "hardly monitor"
    ],
    "explanationJa": "carefully monitor は「慎重に監視する」という意味で使われる自然な英語チャンクです。副詞と語の相性を、まとまりとして覚えます。",
    "sourceRefs": [
      "Codex-generated from learner collocation patterns",
      "ACL/COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "The team carefully monitored the system after the update.",
        "ja": "チームは更新後にシステムを慎重に監視しました。"
      },
      {
        "en": "Doctors carefully monitored the patient's condition.",
        "ja": "医師たちは患者の状態を慎重に観察しました。"
      }
    ]
  },
  {
    "id": "prep-in-advance",
    "category": "Prepositional Chunk",
    "jaPrompt": "前もって",
    "answer": "in advance",
    "distractors": [
      "on advance",
      "at advance",
      "by advance"
    ],
    "explanationJa": "in advance は「前もって」を表す定型チャンクです。前置詞を少し変えるだけで不自然になりやすいので、語順ごと覚えます。",
    "sourceRefs": [
      "Codex-generated from learner chunk patterns",
      "COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "Please book a room in advance.",
        "ja": "前もって部屋を予約してください。"
      },
      {
        "en": "We prepared the documents in advance.",
        "ja": "私たちは前もって書類を準備しました。"
      }
    ]
  },
  {
    "id": "prep-on-time",
    "category": "Prepositional Chunk",
    "jaPrompt": "時間通りに",
    "answer": "on time",
    "distractors": [
      "in time",
      "at time",
      "by time"
    ],
    "explanationJa": "on time は「時間通りに」を表す定型チャンクです。前置詞を少し変えるだけで不自然になりやすいので、語順ごと覚えます。",
    "sourceRefs": [
      "Codex-generated from learner chunk patterns",
      "COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "The train arrived on time.",
        "ja": "電車は時間通りに到着しました。"
      },
      {
        "en": "Please submit the report on time.",
        "ja": "報告書を時間通りに提出してください。"
      }
    ]
  },
  {
    "id": "prep-at-risk",
    "category": "Prepositional Chunk",
    "jaPrompt": "危険にさらされて",
    "answer": "at risk",
    "distractors": [
      "in risk",
      "on risk",
      "by risk"
    ],
    "explanationJa": "at risk は「危険にさらされて」を表す定型チャンクです。前置詞を少し変えるだけで不自然になりやすいので、語順ごと覚えます。",
    "sourceRefs": [
      "Codex-generated from learner chunk patterns",
      "COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "The project is at risk.",
        "ja": "そのプロジェクトは危険にさらされています。"
      },
      {
        "en": "Customer data may be at risk.",
        "ja": "顧客データが危険にさらされている可能性があります。"
      }
    ]
  },
  {
    "id": "prep-by-chance",
    "category": "Prepositional Chunk",
    "jaPrompt": "偶然に",
    "answer": "by chance",
    "distractors": [
      "on chance",
      "in chance",
      "at chance"
    ],
    "explanationJa": "by chance は「偶然に」を表す定型チャンクです。前置詞を少し変えるだけで不自然になりやすいので、語順ごと覚えます。",
    "sourceRefs": [
      "Codex-generated from learner chunk patterns",
      "COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "I met him by chance at the station.",
        "ja": "駅で偶然彼に会いました。"
      },
      {
        "en": "She found the file by chance.",
        "ja": "彼女は偶然そのファイルを見つけました。"
      }
    ]
  },
  {
    "id": "prep-in-charge",
    "category": "Prepositional Chunk",
    "jaPrompt": "担当して",
    "answer": "in charge",
    "distractors": [
      "on charge",
      "at charge",
      "by charge"
    ],
    "explanationJa": "in charge は「担当して」を表す定型チャンクです。前置詞を少し変えるだけで不自然になりやすいので、語順ごと覚えます。",
    "sourceRefs": [
      "Codex-generated from learner chunk patterns",
      "COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "Who is in charge of this project?",
        "ja": "このプロジェクトは誰が担当していますか。"
      },
      {
        "en": "She is in charge of customer support.",
        "ja": "彼女は顧客サポートを担当しています。"
      }
    ]
  },
  {
    "id": "prep-under-pressure",
    "category": "Prepositional Chunk",
    "jaPrompt": "プレッシャーの下で",
    "answer": "under pressure",
    "distractors": [
      "on pressure",
      "in pressure",
      "by pressure"
    ],
    "explanationJa": "under pressure は「プレッシャーの下で」を表す定型チャンクです。前置詞を少し変えるだけで不自然になりやすいので、語順ごと覚えます。",
    "sourceRefs": [
      "Codex-generated from learner chunk patterns",
      "COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "He works well under pressure.",
        "ja": "彼はプレッシャーの中でもうまく働きます。"
      },
      {
        "en": "The team made a decision under pressure.",
        "ja": "チームはプレッシャーの中で決断しました。"
      }
    ]
  },
  {
    "id": "prep-for-example",
    "category": "Prepositional Chunk",
    "jaPrompt": "例えば",
    "answer": "for example",
    "distractors": [
      "by example",
      "on example",
      "at example"
    ],
    "explanationJa": "for example は「例えば」を表す定型チャンクです。前置詞を少し変えるだけで不自然になりやすいので、語順ごと覚えます。",
    "sourceRefs": [
      "Codex-generated from learner chunk patterns",
      "COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "Some tools, for example spreadsheets, are used every day.",
        "ja": "たとえば表計算ソフトのようなツールは毎日使われます。"
      },
      {
        "en": "You can use shortcuts, for example Ctrl+C.",
        "ja": "たとえば Ctrl+C のようなショートカットを使えます。"
      }
    ]
  },
  {
    "id": "prep-as-a-result",
    "category": "Prepositional Chunk",
    "jaPrompt": "結果として",
    "answer": "as a result",
    "distractors": [
      "for a result",
      "in a result",
      "by a result"
    ],
    "explanationJa": "as a result は「結果として」を表す定型チャンクです。前置詞を少し変えるだけで不自然になりやすいので、語順ごと覚えます。",
    "sourceRefs": [
      "Codex-generated from learner chunk patterns",
      "COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "The server was down. As a result, we could not work.",
        "ja": "サーバーが停止しました。その結果、私たちは作業できませんでした。"
      },
      {
        "en": "Sales increased as a result of the campaign.",
        "ja": "キャンペーンの結果、売上が増えました。"
      }
    ]
  },
  {
    "id": "prep-in-response-to",
    "category": "Prepositional Chunk",
    "jaPrompt": "に応じて",
    "answer": "in response to",
    "distractors": [
      "on response to",
      "at response to",
      "by response to"
    ],
    "explanationJa": "in response to は「に応じて」を表す定型チャンクです。前置詞を少し変えるだけで不自然になりやすいので、語順ごと覚えます。",
    "sourceRefs": [
      "Codex-generated from learner chunk patterns",
      "COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "We changed the plan in response to feedback.",
        "ja": "フィードバックを受けて計画を変更しました。"
      },
      {
        "en": "The company acted in response to customer complaints.",
        "ja": "会社は顧客からの苦情を受けて対応しました。"
      }
    ]
  },
  {
    "id": "prep-in-terms-of",
    "category": "Prepositional Chunk",
    "jaPrompt": "の観点で",
    "answer": "in terms of",
    "distractors": [
      "on terms of",
      "at terms of",
      "by terms of"
    ],
    "explanationJa": "in terms of は「の観点で」を表す定型チャンクです。前置詞を少し変えるだけで不自然になりやすいので、語順ごと覚えます。",
    "sourceRefs": [
      "Codex-generated from learner chunk patterns",
      "COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "The product is strong in terms of quality.",
        "ja": "その製品は品質の面で優れています。"
      },
      {
        "en": "In terms of cost, this plan is better.",
        "ja": "費用の面では、この計画のほうが良いです。"
      }
    ]
  },
  {
    "id": "prep-according-to",
    "category": "Prepositional Chunk",
    "jaPrompt": "によると",
    "answer": "according to",
    "distractors": [
      "depending to",
      "based to",
      "following to"
    ],
    "explanationJa": "according to は「によると」を表す定型チャンクです。前置詞を少し変えるだけで不自然になりやすいので、語順ごと覚えます。",
    "sourceRefs": [
      "Codex-generated from learner chunk patterns",
      "COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "According to the report, sales increased.",
        "ja": "報告書によると、売上は増加しました。"
      },
      {
        "en": "According to the schedule, the meeting starts at ten.",
        "ja": "予定表によると、会議は10時に始まります。"
      }
    ]
  },
  {
    "id": "prep-due-to",
    "category": "Prepositional Chunk",
    "jaPrompt": "が原因で",
    "answer": "due to",
    "distractors": [
      "because to",
      "owing for",
      "thanks for"
    ],
    "explanationJa": "due to は「が原因で」を表す定型チャンクです。前置詞を少し変えるだけで不自然になりやすいので、語順ごと覚えます。",
    "sourceRefs": [
      "Codex-generated from learner chunk patterns",
      "COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "The meeting was canceled due to heavy rain.",
        "ja": "激しい雨のため会議は中止されました。"
      },
      {
        "en": "The delay was due to a system error.",
        "ja": "その遅れはシステムエラーが原因でした。"
      }
    ]
  },
  {
    "id": "prep-because-of",
    "category": "Prepositional Chunk",
    "jaPrompt": "のために",
    "answer": "because of",
    "distractors": [
      "because to",
      "due for",
      "since of"
    ],
    "explanationJa": "because of は「のために」を表す定型チャンクです。前置詞を少し変えるだけで不自然になりやすいので、語順ごと覚えます。",
    "sourceRefs": [
      "Codex-generated from learner chunk patterns",
      "COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "We stayed home because of the storm.",
        "ja": "嵐のため家にいました。"
      },
      {
        "en": "The train was late because of heavy snow.",
        "ja": "大雪のため電車が遅れました。"
      }
    ]
  },
  {
    "id": "prep-instead-of",
    "category": "Prepositional Chunk",
    "jaPrompt": "の代わりに",
    "answer": "instead of",
    "distractors": [
      "rather of",
      "instead to",
      "in place to"
    ],
    "explanationJa": "instead of は「の代わりに」を表す定型チャンクです。前置詞を少し変えるだけで不自然になりやすいので、語順ごと覚えます。",
    "sourceRefs": [
      "Codex-generated from learner chunk patterns",
      "COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "Use email instead of phone calls.",
        "ja": "電話の代わりにメールを使ってください。"
      },
      {
        "en": "She walked instead of taking a taxi.",
        "ja": "彼女はタクシーに乗る代わりに歩きました。"
      }
    ]
  },
  {
    "id": "prep-in-addition-to",
    "category": "Prepositional Chunk",
    "jaPrompt": "に加えて",
    "answer": "in addition to",
    "distractors": [
      "on addition to",
      "at addition to",
      "by addition to"
    ],
    "explanationJa": "in addition to は「に加えて」を表す定型チャンクです。前置詞を少し変えるだけで不自然になりやすいので、語順ごと覚えます。",
    "sourceRefs": [
      "Codex-generated from learner chunk patterns",
      "COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "In addition to English, he speaks French.",
        "ja": "英語に加えて、彼はフランス語を話します。"
      },
      {
        "en": "We need data in addition to examples.",
        "ja": "例に加えてデータが必要です。"
      }
    ]
  },
  {
    "id": "prep-with-regard-to",
    "category": "Prepositional Chunk",
    "jaPrompt": "に関して",
    "answer": "with regard to",
    "distractors": [
      "with regard of",
      "in regard to",
      "for regard to"
    ],
    "explanationJa": "with regard to は「に関して」を表す定型チャンクです。前置詞を少し変えるだけで不自然になりやすいので、語順ごと覚えます。",
    "sourceRefs": [
      "Codex-generated from learner chunk patterns",
      "COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "With regard to your request, we need more time.",
        "ja": "ご依頼に関して、もう少し時間が必要です。"
      },
      {
        "en": "The manager spoke with regard to the new policy.",
        "ja": "マネージャーは新しい方針に関して話しました。"
      }
    ]
  },
  {
    "id": "prep-in-relation-to",
    "category": "Prepositional Chunk",
    "jaPrompt": "に関連して",
    "answer": "in relation to",
    "distractors": [
      "on relation to",
      "at relation to",
      "by relation to"
    ],
    "explanationJa": "in relation to は「に関連して」を表す定型チャンクです。前置詞を少し変えるだけで不自然になりやすいので、語順ごと覚えます。",
    "sourceRefs": [
      "Codex-generated from learner chunk patterns",
      "COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "We collected data in relation to customer needs.",
        "ja": "顧客ニーズに関連してデータを集めました。"
      },
      {
        "en": "The question was asked in relation to safety.",
        "ja": "その質問は安全性に関連して尋ねられました。"
      }
    ]
  },
  {
    "id": "prep-in-contrast",
    "category": "Prepositional Chunk",
    "jaPrompt": "対照的に",
    "answer": "in contrast",
    "distractors": [
      "on contrast",
      "at contrast",
      "by contrast of"
    ],
    "explanationJa": "in contrast は「対照的に」を表す定型チャンクです。前置詞を少し変えるだけで不自然になりやすいので、語順ごと覚えます。",
    "sourceRefs": [
      "Codex-generated from learner chunk patterns",
      "COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "This plan is simple. In contrast, the old plan was complex.",
        "ja": "この計画は簡単です。対照的に、古い計画は複雑でした。"
      },
      {
        "en": "In contrast, online sales increased.",
        "ja": "対照的に、オンライン売上は増加しました。"
      }
    ]
  },
  {
    "id": "prep-on-average",
    "category": "Prepositional Chunk",
    "jaPrompt": "平均して",
    "answer": "on average",
    "distractors": [
      "in average",
      "at average",
      "by average"
    ],
    "explanationJa": "on average は「平均して」を表す定型チャンクです。前置詞を少し変えるだけで不自然になりやすいので、語順ごと覚えます。",
    "sourceRefs": [
      "Codex-generated from learner chunk patterns",
      "COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "On average, we receive ten requests a day.",
        "ja": "平均して、私たちは1日に10件の依頼を受けます。"
      },
      {
        "en": "The task takes twenty minutes on average.",
        "ja": "その作業は平均して20分かかります。"
      }
    ]
  },
  {
    "id": "prep-at-least",
    "category": "Prepositional Chunk",
    "jaPrompt": "少なくとも",
    "answer": "at least",
    "distractors": [
      "in least",
      "on least",
      "by least"
    ],
    "explanationJa": "at least は「少なくとも」を表す定型チャンクです。前置詞を少し変えるだけで不自然になりやすいので、語順ごと覚えます。",
    "sourceRefs": [
      "Codex-generated from learner chunk patterns",
      "COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "Please arrive at least ten minutes early.",
        "ja": "少なくとも10分早く到着してください。"
      },
      {
        "en": "We need at least three examples.",
        "ja": "少なくとも3つの例が必要です。"
      }
    ]
  },
  {
    "id": "prep-at-first",
    "category": "Prepositional Chunk",
    "jaPrompt": "最初は",
    "answer": "at first",
    "distractors": [
      "in first",
      "on first",
      "by first"
    ],
    "explanationJa": "at first は「最初は」を表す定型チャンクです。前置詞を少し変えるだけで不自然になりやすいので、語順ごと覚えます。",
    "sourceRefs": [
      "Codex-generated from learner chunk patterns",
      "COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "At first, please send the files.",
        "ja": "まず、ファイルを送ってください。"
      },
      {
        "en": "At first, we discussed the issue.",
        "ja": "まず、その問題について話し合いました。"
      }
    ]
  },
  {
    "id": "prep-in-general",
    "category": "Prepositional Chunk",
    "jaPrompt": "一般的に",
    "answer": "in general",
    "distractors": [
      "on general",
      "at general",
      "by general"
    ],
    "explanationJa": "in general は「一般的に」を表す定型チャンクです。前置詞を少し変えるだけで不自然になりやすいので、語順ごと覚えます。",
    "sourceRefs": [
      "Codex-generated from learner chunk patterns",
      "COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "In general, this method works well.",
        "ja": "一般的に、この方法はうまく機能します。"
      },
      {
        "en": "In general, customers prefer simple instructions.",
        "ja": "一般的に、顧客は簡単な説明を好みます。"
      }
    ]
  },
  {
    "id": "prep-in-particular",
    "category": "Prepositional Chunk",
    "jaPrompt": "特に",
    "answer": "in particular",
    "distractors": [
      "on particular",
      "at particular",
      "by particular"
    ],
    "explanationJa": "in particular は「特に」を表す定型チャンクです。前置詞を少し変えるだけで不自然になりやすいので、語順ごと覚えます。",
    "sourceRefs": [
      "Codex-generated from learner chunk patterns",
      "COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "This rule is important in particular for new staff.",
        "ja": "この規則は特に新しいスタッフにとって重要です。"
      },
      {
        "en": "I liked the final section in particular.",
        "ja": "特に最後の部分が気に入りました。"
      }
    ]
  },
  {
    "id": "prep-in-public",
    "category": "Prepositional Chunk",
    "jaPrompt": "公の場で",
    "answer": "in public",
    "distractors": [
      "on public",
      "at public",
      "by public"
    ],
    "explanationJa": "in public は「公の場で」を表す定型チャンクです。前置詞を少し変えるだけで不自然になりやすいので、語順ごと覚えます。",
    "sourceRefs": [
      "Codex-generated from learner chunk patterns",
      "COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "He does not like speaking in public.",
        "ja": "彼は人前で話すのが好きではありません。"
      },
      {
        "en": "Please do not share private data in public.",
        "ja": "個人情報を公の場で共有しないでください。"
      }
    ]
  },
  {
    "id": "prep-in-private",
    "category": "Prepositional Chunk",
    "jaPrompt": "内密に",
    "answer": "in private",
    "distractors": [
      "on private",
      "at private",
      "by private"
    ],
    "explanationJa": "in private は「内密に」を表す定型チャンクです。前置詞を少し変えるだけで不自然になりやすいので、語順ごと覚えます。",
    "sourceRefs": [
      "Codex-generated from learner chunk patterns",
      "COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "Can we discuss this in private?",
        "ja": "この件を内密に話し合えますか。"
      },
      {
        "en": "She gave feedback in private.",
        "ja": "彼女は個別にフィードバックしました。"
      }
    ]
  },
  {
    "id": "prep-on-purpose",
    "category": "Prepositional Chunk",
    "jaPrompt": "わざと",
    "answer": "on purpose",
    "distractors": [
      "in purpose",
      "at purpose",
      "by purpose"
    ],
    "explanationJa": "on purpose は「わざと」を表す定型チャンクです。前置詞を少し変えるだけで不自然になりやすいので、語順ごと覚えます。",
    "sourceRefs": [
      "Codex-generated from learner chunk patterns",
      "COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "He deleted the file on purpose.",
        "ja": "彼はわざとそのファイルを削除しました。"
      },
      {
        "en": "I did not ignore your message on purpose.",
        "ja": "あなたのメッセージをわざと無視したわけではありません。"
      }
    ]
  },
  {
    "id": "prep-by-accident",
    "category": "Prepositional Chunk",
    "jaPrompt": "偶然に",
    "answer": "by accident",
    "distractors": [
      "on accident",
      "in accident",
      "at accident"
    ],
    "explanationJa": "by accident は「偶然に」を表す定型チャンクです。前置詞を少し変えるだけで不自然になりやすいので、語順ごと覚えます。",
    "sourceRefs": [
      "Codex-generated from learner chunk patterns",
      "COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "I opened the wrong file by accident.",
        "ja": "間違って別のファイルを開きました。"
      },
      {
        "en": "She sent the email by accident.",
        "ja": "彼女は誤ってそのメールを送りました。"
      }
    ]
  },
  {
    "id": "prep-at-work",
    "category": "Prepositional Chunk",
    "jaPrompt": "職場で",
    "answer": "at work",
    "distractors": [
      "in work",
      "on work",
      "by work"
    ],
    "explanationJa": "at work は「職場で」を表す定型チャンクです。前置詞を少し変えるだけで不自然になりやすいので、語順ごと覚えます。",
    "sourceRefs": [
      "Codex-generated from learner chunk patterns",
      "COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "I use English at work every day.",
        "ja": "私は仕事で毎日英語を使います。"
      },
      {
        "en": "We discussed the issue at work.",
        "ja": "職場でその問題について話し合いました。"
      }
    ]
  },
  {
    "id": "prep-at-home",
    "category": "Prepositional Chunk",
    "jaPrompt": "家で",
    "answer": "at home",
    "distractors": [
      "in home",
      "on home",
      "by home"
    ],
    "explanationJa": "at home は「家で」を表す定型チャンクです。前置詞を少し変えるだけで不自然になりやすいので、語順ごと覚えます。",
    "sourceRefs": [
      "Codex-generated from learner chunk patterns",
      "COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "I reviewed the lesson at home.",
        "ja": "家でそのレッスンを復習しました。"
      },
      {
        "en": "She works at home twice a week.",
        "ja": "彼女は週に2回自宅で働いています。"
      }
    ]
  },
  {
    "id": "prep-in-detail",
    "category": "Prepositional Chunk",
    "jaPrompt": "詳しく",
    "answer": "in detail",
    "distractors": [
      "on detail",
      "at detail",
      "by detail"
    ],
    "explanationJa": "in detail は「詳しく」を表す定型チャンクです。前置詞を少し変えるだけで不自然になりやすいので、語順ごと覚えます。",
    "sourceRefs": [
      "Codex-generated from learner chunk patterns",
      "COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "Please explain the process in detail.",
        "ja": "手順を詳しく説明してください。"
      },
      {
        "en": "We reviewed the report in detail.",
        "ja": "私たちは報告書を詳しく確認しました。"
      }
    ]
  },
  {
    "id": "prep-in-short",
    "category": "Prepositional Chunk",
    "jaPrompt": "要するに",
    "answer": "in short",
    "distractors": [
      "on short",
      "at short",
      "by short"
    ],
    "explanationJa": "in short は「要するに」を表す定型チャンクです。前置詞を少し変えるだけで不自然になりやすいので、語順ごと覚えます。",
    "sourceRefs": [
      "Codex-generated from learner chunk patterns",
      "COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "In short, we need more time.",
        "ja": "要するに、もっと時間が必要です。"
      },
      {
        "en": "In short, the project was successful.",
        "ja": "要するに、そのプロジェクトは成功しました。"
      }
    ]
  },
  {
    "id": "prep-in-fact",
    "category": "Prepositional Chunk",
    "jaPrompt": "実際には",
    "answer": "in fact",
    "distractors": [
      "on fact",
      "at fact",
      "by fact"
    ],
    "explanationJa": "in fact は「実際には」を表す定型チャンクです。前置詞を少し変えるだけで不自然になりやすいので、語順ごと覚えます。",
    "sourceRefs": [
      "Codex-generated from learner chunk patterns",
      "COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "In fact, the problem was simple.",
        "ja": "実際には、その問題は簡単でした。"
      },
      {
        "en": "She is, in fact, the project leader.",
        "ja": "実は、彼女がプロジェクトリーダーです。"
      }
    ]
  },
  {
    "id": "prep-in-theory",
    "category": "Prepositional Chunk",
    "jaPrompt": "理論上は",
    "answer": "in theory",
    "distractors": [
      "on theory",
      "at theory",
      "by theory"
    ],
    "explanationJa": "in theory は「理論上は」を表す定型チャンクです。前置詞を少し変えるだけで不自然になりやすいので、語順ごと覚えます。",
    "sourceRefs": [
      "Codex-generated from learner chunk patterns",
      "COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "In theory, this method should work.",
        "ja": "理論上は、この方法は機能するはずです。"
      },
      {
        "en": "The plan sounds good in theory.",
        "ja": "その計画は理論上は良さそうです。"
      }
    ]
  },
  {
    "id": "prep-in-practice",
    "category": "Prepositional Chunk",
    "jaPrompt": "実際には",
    "answer": "in practice",
    "distractors": [
      "on practice",
      "at practice",
      "by practice"
    ],
    "explanationJa": "in practice は「実際には」を表す定型チャンクです。前置詞を少し変えるだけで不自然になりやすいので、語順ごと覚えます。",
    "sourceRefs": [
      "Codex-generated from learner chunk patterns",
      "COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "In practice, the task takes longer.",
        "ja": "実際には、その作業はもっと時間がかかります。"
      },
      {
        "en": "The rule is difficult to apply in practice.",
        "ja": "その規則は実際には適用が難しいです。"
      }
    ]
  },
  {
    "id": "prep-on-sale",
    "category": "Prepositional Chunk",
    "jaPrompt": "販売中・セール中で",
    "answer": "on sale",
    "distractors": [
      "in sale",
      "at sale",
      "by sale"
    ],
    "explanationJa": "on sale は「販売中・セール中で」を表す定型チャンクです。前置詞を少し変えるだけで不自然になりやすいので、語順ごと覚えます。",
    "sourceRefs": [
      "Codex-generated from learner chunk patterns",
      "COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "The new model is on sale now.",
        "ja": "新しいモデルは現在販売中です。"
      },
      {
        "en": "These shoes are on sale this week.",
        "ja": "この靴は今週セール中です。"
      }
    ]
  },
  {
    "id": "prep-for-sale",
    "category": "Prepositional Chunk",
    "jaPrompt": "売り物で",
    "answer": "for sale",
    "distractors": [
      "on sell",
      "in sell",
      "at sell"
    ],
    "explanationJa": "for sale は「売り物で」を表す定型チャンクです。前置詞を少し変えるだけで不自然になりやすいので、語順ごと覚えます。",
    "sourceRefs": [
      "Codex-generated from learner chunk patterns",
      "COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "The old computer is for sale.",
        "ja": "その古いコンピューターは売りに出されています。"
      },
      {
        "en": "This house is not for sale.",
        "ja": "この家は売り物ではありません。"
      }
    ]
  },
  {
    "id": "prep-out-of-stock",
    "category": "Prepositional Chunk",
    "jaPrompt": "在庫切れで",
    "answer": "out of stock",
    "distractors": [
      "out stock",
      "off stock",
      "from stock"
    ],
    "explanationJa": "out of stock は「在庫切れで」を表す定型チャンクです。前置詞を少し変えるだけで不自然になりやすいので、語順ごと覚えます。",
    "sourceRefs": [
      "Codex-generated from learner chunk patterns",
      "COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "The item is out of stock.",
        "ja": "その商品は在庫切れです。"
      },
      {
        "en": "This size is currently out of stock.",
        "ja": "このサイズは現在在庫切れです。"
      }
    ]
  },
  {
    "id": "prep-in-stock",
    "category": "Prepositional Chunk",
    "jaPrompt": "在庫があって",
    "answer": "in stock",
    "distractors": [
      "on stock",
      "at stock",
      "by stock"
    ],
    "explanationJa": "in stock は「在庫があって」を表す定型チャンクです。前置詞を少し変えるだけで不自然になりやすいので、語順ごと覚えます。",
    "sourceRefs": [
      "Codex-generated from learner chunk patterns",
      "COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "The item is in stock.",
        "ja": "その商品は在庫があります。"
      },
      {
        "en": "We have the new model in stock.",
        "ja": "新しいモデルの在庫があります。"
      }
    ]
  },
  {
    "id": "prep-on-behalf-of",
    "category": "Prepositional Chunk",
    "jaPrompt": "を代表して",
    "answer": "on behalf of",
    "distractors": [
      "in behalf of",
      "at behalf of",
      "by behalf of"
    ],
    "explanationJa": "on behalf of は「を代表して」を表す定型チャンクです。前置詞を少し変えるだけで不自然になりやすいので、語順ごと覚えます。",
    "sourceRefs": [
      "Codex-generated from learner chunk patterns",
      "COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "I am writing on behalf of my manager.",
        "ja": "マネージャーを代表してご連絡しています。"
      },
      {
        "en": "She spoke on behalf of the team.",
        "ja": "彼女はチームを代表して話しました。"
      }
    ]
  },
  {
    "id": "prep-in-favor-of",
    "category": "Prepositional Chunk",
    "jaPrompt": "に賛成して",
    "answer": "in favor of",
    "distractors": [
      "on favor of",
      "at favor of",
      "by favor of"
    ],
    "explanationJa": "in favor of は「に賛成して」を表す定型チャンクです。前置詞を少し変えるだけで不自然になりやすいので、語順ごと覚えます。",
    "sourceRefs": [
      "Codex-generated from learner chunk patterns",
      "COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "Most members were in favor of the plan.",
        "ja": "ほとんどのメンバーはその計画に賛成でした。"
      },
      {
        "en": "I am in favor of changing the schedule.",
        "ja": "私は予定を変更することに賛成です。"
      }
    ]
  },
  {
    "id": "prep-in-need-of",
    "category": "Prepositional Chunk",
    "jaPrompt": "を必要として",
    "answer": "in need of",
    "distractors": [
      "on need of",
      "at need of",
      "by need of"
    ],
    "explanationJa": "in need of は「を必要として」を表す定型チャンクです。前置詞を少し変えるだけで不自然になりやすいので、語順ごと覚えます。",
    "sourceRefs": [
      "Codex-generated from learner chunk patterns",
      "COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "The system is in need of repair.",
        "ja": "そのシステムは修理が必要です。"
      },
      {
        "en": "This process is in need of improvement.",
        "ja": "このプロセスは改善が必要です。"
      }
    ]
  },
  {
    "id": "prep-in-search-of",
    "category": "Prepositional Chunk",
    "jaPrompt": "を探して",
    "answer": "in search of",
    "distractors": [
      "on search of",
      "at search of",
      "by search of"
    ],
    "explanationJa": "in search of は「を探して」を表す定型チャンクです。前置詞を少し変えるだけで不自然になりやすいので、語順ごと覚えます。",
    "sourceRefs": [
      "Codex-generated from learner chunk patterns",
      "COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "They went in search of a better solution.",
        "ja": "彼らはより良い解決策を探しに行きました。"
      },
      {
        "en": "She moved to the city in search of work.",
        "ja": "彼女は仕事を求めてその都市へ引っ越しました。"
      }
    ]
  },
  {
    "id": "prep-in-support-of",
    "category": "Prepositional Chunk",
    "jaPrompt": "を支持して",
    "answer": "in support of",
    "distractors": [
      "on support of",
      "at support of",
      "by support of"
    ],
    "explanationJa": "in support of は「を支持して」を表す定型チャンクです。前置詞を少し変えるだけで不自然になりやすいので、語順ごと覚えます。",
    "sourceRefs": [
      "Codex-generated from learner chunk patterns",
      "COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "He spoke in support of the proposal.",
        "ja": "彼はその提案を支持して話しました。"
      },
      {
        "en": "Many people gathered in support of the project.",
        "ja": "多くの人がそのプロジェクトを支持して集まりました。"
      }
    ]
  },
  {
    "id": "prep-in-exchange-for",
    "category": "Prepositional Chunk",
    "jaPrompt": "と引き換えに",
    "answer": "in exchange for",
    "distractors": [
      "on exchange for",
      "at exchange for",
      "by exchange for"
    ],
    "explanationJa": "in exchange for は「と引き換えに」を表す定型チャンクです。前置詞を少し変えるだけで不自然になりやすいので、語順ごと覚えます。",
    "sourceRefs": [
      "Codex-generated from learner chunk patterns",
      "COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "He gave advice in exchange for feedback.",
        "ja": "彼はフィードバックと引き換えに助言しました。"
      },
      {
        "en": "She received training in exchange for helping the team.",
        "ja": "彼女はチームを手伝う代わりに研修を受けました。"
      }
    ]
  },
  {
    "id": "prep-in-return-for",
    "category": "Prepositional Chunk",
    "jaPrompt": "のお返しに",
    "answer": "in return for",
    "distractors": [
      "on return for",
      "at return for",
      "by return for"
    ],
    "explanationJa": "in return for は「のお返しに」を表す定型チャンクです。前置詞を少し変えるだけで不自然になりやすいので、語順ごと覚えます。",
    "sourceRefs": [
      "Codex-generated from learner chunk patterns",
      "COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "He helped me in return for my advice.",
        "ja": "彼は私の助言のお返しに手伝ってくれました。"
      },
      {
        "en": "She offered support in return for information.",
        "ja": "彼女は情報のお返しに支援を申し出ました。"
      }
    ]
  },
  {
    "id": "prep-in-case-of",
    "category": "Prepositional Chunk",
    "jaPrompt": "の場合に備えて",
    "answer": "in case of",
    "distractors": [
      "on case of",
      "at case of",
      "by case of"
    ],
    "explanationJa": "in case of は「の場合に備えて」を表す定型チャンクです。前置詞を少し変えるだけで不自然になりやすいので、語順ごと覚えます。",
    "sourceRefs": [
      "Codex-generated from learner chunk patterns",
      "COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "In case of emergency, call this number.",
        "ja": "緊急時にはこの番号に電話してください。"
      },
      {
        "en": "Keep a backup in case of system failure.",
        "ja": "システム障害に備えてバックアップを保管してください。"
      }
    ]
  },
  {
    "id": "prep-in-front-of",
    "category": "Prepositional Chunk",
    "jaPrompt": "の前に",
    "answer": "in front of",
    "distractors": [
      "on front of",
      "at front of",
      "by front of"
    ],
    "explanationJa": "in front of は「の前に」を表す定型チャンクです。前置詞を少し変えるだけで不自然になりやすいので、語順ごと覚えます。",
    "sourceRefs": [
      "Codex-generated from learner chunk patterns",
      "COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "The bus stops in front of the station.",
        "ja": "バスは駅の前に停まります。"
      },
      {
        "en": "She spoke in front of many people.",
        "ja": "彼女は多くの人の前で話しました。"
      }
    ]
  },
  {
    "id": "prep-next-to",
    "category": "Prepositional Chunk",
    "jaPrompt": "の隣に",
    "answer": "next to",
    "distractors": [
      "near to",
      "beside to",
      "close to of"
    ],
    "explanationJa": "next to は「の隣に」を表す定型チャンクです。前置詞を少し変えるだけで不自然になりやすいので、語順ごと覚えます。",
    "sourceRefs": [
      "Codex-generated from learner chunk patterns",
      "COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "The file is next to the folder.",
        "ja": "そのファイルはフォルダの隣にあります。"
      },
      {
        "en": "She sat next to her manager.",
        "ja": "彼女はマネージャーの隣に座りました。"
      }
    ]
  },
  {
    "id": "prep-close-to",
    "category": "Prepositional Chunk",
    "jaPrompt": "に近い",
    "answer": "close to",
    "distractors": [
      "near to of",
      "close of",
      "near from"
    ],
    "explanationJa": "close to は「に近い」を表す自然な英語のまとまりです。語の組み合わせをフレーズとして覚えます。",
    "sourceRefs": [
      "Codex-generated from learner chunk patterns",
      "COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "The hotel is close to the station.",
        "ja": "そのホテルは駅に近いです。"
      },
      {
        "en": "She is close to finishing the report.",
        "ja": "彼女は報告書をもう少しで仕上げるところです。"
      }
    ]
  },
  {
    "id": "prep-far-from",
    "category": "Prepositional Chunk",
    "jaPrompt": "から遠い",
    "answer": "far from",
    "distractors": [
      "far to",
      "long from",
      "away to"
    ],
    "explanationJa": "far from は「から遠い」を表す定型チャンクです。前置詞を少し変えるだけで不自然になりやすいので、語順ごと覚えます。",
    "sourceRefs": [
      "Codex-generated from learner chunk patterns",
      "COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "The hotel is far from the airport.",
        "ja": "そのホテルは空港から遠いです。"
      },
      {
        "en": "The result is far from perfect.",
        "ja": "その結果は完璧にはほど遠いです。"
      }
    ]
  },
  {
    "id": "prep-similar-to",
    "category": "Prepositional Chunk",
    "jaPrompt": "に似ている",
    "answer": "similar to",
    "distractors": [
      "similar with",
      "same to",
      "near with"
    ],
    "explanationJa": "similar to は「に似ている」を表す定型チャンクです。前置詞を少し変えるだけで不自然になりやすいので、語順ごと覚えます。",
    "sourceRefs": [
      "Codex-generated from learner chunk patterns",
      "COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "This design is similar to the old one.",
        "ja": "このデザインは古いものに似ています。"
      },
      {
        "en": "The process is similar to last year's process.",
        "ja": "その手順は昨年の手順に似ています。"
      }
    ]
  },
  {
    "id": "prep-different-from",
    "category": "Prepositional Chunk",
    "jaPrompt": "と異なる",
    "answer": "different from",
    "distractors": [
      "different to",
      "different with",
      "difference from"
    ],
    "explanationJa": "different from は「と異なる」を表す定型チャンクです。前置詞を少し変えるだけで不自然になりやすいので、語順ごと覚えます。",
    "sourceRefs": [
      "Codex-generated from learner chunk patterns",
      "COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "This version is different from the previous one.",
        "ja": "このバージョンは前のものと異なります。"
      },
      {
        "en": "Her opinion was different from mine.",
        "ja": "彼女の意見は私のものと違っていました。"
      }
    ]
  },
  {
    "id": "prep-responsible-for",
    "category": "Prepositional Chunk",
    "jaPrompt": "に責任がある",
    "answer": "responsible for",
    "distractors": [
      "responsible to",
      "responsible of",
      "responsibility for"
    ],
    "explanationJa": "responsible for は「に責任がある」を表す定型チャンクです。前置詞を少し変えるだけで不自然になりやすいので、語順ごと覚えます。",
    "sourceRefs": [
      "Codex-generated from learner chunk patterns",
      "COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "She is responsible for the project.",
        "ja": "彼女はそのプロジェクトに責任があります。"
      },
      {
        "en": "Who is responsible for this task?",
        "ja": "この作業は誰が担当していますか。"
      }
    ]
  },
  {
    "id": "prep-interested-in",
    "category": "Prepositional Chunk",
    "jaPrompt": "に興味がある",
    "answer": "interested in",
    "distractors": [
      "interested on",
      "interesting in",
      "interest to"
    ],
    "explanationJa": "interested in は「に興味がある」を表す定型チャンクです。前置詞を少し変えるだけで不自然になりやすいので、語順ごと覚えます。",
    "sourceRefs": [
      "Codex-generated from learner chunk patterns",
      "COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "I am interested in automation.",
        "ja": "私は自動化に興味があります。"
      },
      {
        "en": "She is interested in learning English.",
        "ja": "彼女は英語学習に興味があります。"
      }
    ]
  },
  {
    "id": "prep-aware-of",
    "category": "Prepositional Chunk",
    "jaPrompt": "に気づいている",
    "answer": "aware of",
    "distractors": [
      "aware to",
      "aware for",
      "awareness of"
    ],
    "explanationJa": "aware of は「に気づいている」を表す定型チャンクです。前置詞を少し変えるだけで不自然になりやすいので、語順ごと覚えます。",
    "sourceRefs": [
      "Codex-generated from learner chunk patterns",
      "COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "Are you aware of the problem?",
        "ja": "その問題に気づいていますか。"
      },
      {
        "en": "We are aware of the risk.",
        "ja": "私たちはそのリスクを認識しています。"
      }
    ]
  },
  {
    "id": "prep-familiar-with",
    "category": "Prepositional Chunk",
    "jaPrompt": "に詳しい",
    "answer": "familiar with",
    "distractors": [
      "familiar to",
      "familiar of",
      "family with"
    ],
    "explanationJa": "familiar with は「に詳しい」を表す定型チャンクです。前置詞を少し変えるだけで不自然になりやすいので、語順ごと覚えます。",
    "sourceRefs": [
      "Codex-generated from learner chunk patterns",
      "COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "Are you familiar with this tool?",
        "ja": "このツールに詳しいですか。"
      },
      {
        "en": "She is familiar with the process.",
        "ja": "彼女はその手順に詳しいです。"
      }
    ]
  },
  {
    "id": "prep-suitable-for",
    "category": "Prepositional Chunk",
    "jaPrompt": "に適している",
    "answer": "suitable for",
    "distractors": [
      "suitable to",
      "suit for",
      "suitable of"
    ],
    "explanationJa": "suitable for は「に適している」を表す定型チャンクです。前置詞を少し変えるだけで不自然になりやすいので、語順ごと覚えます。",
    "sourceRefs": [
      "Codex-generated from learner chunk patterns",
      "COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "This course is suitable for beginners.",
        "ja": "この講座は初心者に適しています。"
      },
      {
        "en": "The room is suitable for small meetings.",
        "ja": "その部屋は小規模な会議に適しています。"
      }
    ]
  },
  {
    "id": "prep-available-to",
    "category": "Prepositional Chunk",
    "jaPrompt": "が利用できる",
    "answer": "available to",
    "distractors": [
      "available for to",
      "availability to",
      "available of"
    ],
    "explanationJa": "available to は「が利用できる」を表す定型チャンクです。前置詞を少し変えるだけで不自然になりやすいので、語順ごと覚えます。",
    "sourceRefs": [
      "Codex-generated from learner chunk patterns",
      "COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "The service is available to all users.",
        "ja": "そのサービスはすべてのユーザーが利用できます。"
      },
      {
        "en": "This option is available to members only.",
        "ja": "この選択肢は会員だけが利用できます。"
      }
    ]
  },
  {
    "id": "prep-available-for",
    "category": "Prepositional Chunk",
    "jaPrompt": "に利用可能な",
    "answer": "available for",
    "distractors": [
      "available to for",
      "availability for",
      "available of"
    ],
    "explanationJa": "available for は「に利用可能な」を表す定型チャンクです。前置詞を少し変えるだけで不自然になりやすいので、語順ごと覚えます。",
    "sourceRefs": [
      "Codex-generated from learner chunk patterns",
      "COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "The room is available for meetings.",
        "ja": "その部屋は会議に利用できます。"
      },
      {
        "en": "This discount is available for online orders.",
        "ja": "この割引はオンライン注文に利用できます。"
      }
    ]
  },
  {
    "id": "prep-related-to",
    "category": "Prepositional Chunk",
    "jaPrompt": "に関連した",
    "answer": "related to",
    "distractors": [
      "related with",
      "relation to",
      "relative to"
    ],
    "explanationJa": "related to は「に関連した」を表す定型チャンクです。前置詞を少し変えるだけで不自然になりやすいので、語順ごと覚えます。",
    "sourceRefs": [
      "Codex-generated from learner chunk patterns",
      "COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "This question is related to security.",
        "ja": "この質問はセキュリティに関連しています。"
      },
      {
        "en": "The issue is related to network settings.",
        "ja": "その問題はネットワーク設定に関連しています。"
      }
    ]
  },
  {
    "id": "prep-based-on",
    "category": "Prepositional Chunk",
    "jaPrompt": "に基づいて",
    "answer": "based on",
    "distractors": [
      "based in",
      "base on",
      "basis on"
    ],
    "explanationJa": "based on は「に基づいて」を表す定型チャンクです。前置詞を少し変えるだけで不自然になりやすいので、語順ごと覚えます。",
    "sourceRefs": [
      "Codex-generated from learner chunk patterns",
      "COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "The decision was based on data.",
        "ja": "その決定はデータに基づいていました。"
      },
      {
        "en": "This report is based on a survey.",
        "ja": "この報告書は調査に基づいています。"
      }
    ]
  },
  {
    "id": "prep-focused-on",
    "category": "Prepositional Chunk",
    "jaPrompt": "に集中した",
    "answer": "focused on",
    "distractors": [
      "focused in",
      "focus on",
      "focused to"
    ],
    "explanationJa": "focused on は「に集中した」を表す定型チャンクです。前置詞を少し変えるだけで不自然になりやすいので、語順ごと覚えます。",
    "sourceRefs": [
      "Codex-generated from learner chunk patterns",
      "COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "The meeting focused on customer needs.",
        "ja": "その会議は顧客ニーズに焦点を当てました。"
      },
      {
        "en": "The course is focused on speaking practice.",
        "ja": "その講座は会話練習に重点を置いています。"
      }
    ]
  },
  {
    "id": "prep-concerned-about",
    "category": "Prepositional Chunk",
    "jaPrompt": "を心配して",
    "answer": "concerned about",
    "distractors": [
      "concerned to",
      "concern about",
      "concerned of"
    ],
    "explanationJa": "concerned about は「を心配して」を表す定型チャンクです。前置詞を少し変えるだけで不自然になりやすいので、語順ごと覚えます。",
    "sourceRefs": [
      "Codex-generated from learner chunk patterns",
      "COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "We are concerned about the delay.",
        "ja": "私たちはその遅れを心配しています。"
      },
      {
        "en": "Customers were concerned about security.",
        "ja": "顧客はセキュリティを心配していました。"
      }
    ]
  },
  {
    "id": "prep-satisfied-with",
    "category": "Prepositional Chunk",
    "jaPrompt": "に満足して",
    "answer": "satisfied with",
    "distractors": [
      "satisfied to",
      "satisfaction with",
      "satisfied of"
    ],
    "explanationJa": "satisfied with は「に満足して」を表す定型チャンクです。前置詞を少し変えるだけで不自然になりやすいので、語順ごと覚えます。",
    "sourceRefs": [
      "Codex-generated from learner chunk patterns",
      "COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "I am satisfied with the result.",
        "ja": "私はその結果に満足しています。"
      },
      {
        "en": "Customers were satisfied with the service.",
        "ja": "顧客はそのサービスに満足していました。"
      }
    ]
  },
  {
    "id": "prep-known-for",
    "category": "Prepositional Chunk",
    "jaPrompt": "で知られている",
    "answer": "known for",
    "distractors": [
      "known to",
      "know for",
      "known of"
    ],
    "explanationJa": "known for は「で知られている」を表す定型チャンクです。前置詞を少し変えるだけで不自然になりやすいので、語順ごと覚えます。",
    "sourceRefs": [
      "Codex-generated from learner chunk patterns",
      "COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "The company is known for high quality.",
        "ja": "その会社は高品質で知られています。"
      },
      {
        "en": "This city is known for its food.",
        "ja": "この都市は食べ物で知られています。"
      }
    ]
  },
  {
    "id": "prep-famous-for",
    "category": "Prepositional Chunk",
    "jaPrompt": "で有名な",
    "answer": "famous for",
    "distractors": [
      "famous to",
      "fame for",
      "famous of"
    ],
    "explanationJa": "famous for は「で有名な」を表す定型チャンクです。前置詞を少し変えるだけで不自然になりやすいので、語順ごと覚えます。",
    "sourceRefs": [
      "Codex-generated from learner chunk patterns",
      "COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "The area is famous for its beautiful beaches.",
        "ja": "その地域は美しいビーチで有名です。"
      },
      {
        "en": "The restaurant is famous for fresh seafood.",
        "ja": "そのレストランは新鮮な魚介類で有名です。"
      }
    ]
  },
  {
    "id": "prep-ready-for",
    "category": "Prepositional Chunk",
    "jaPrompt": "の準備ができた",
    "answer": "ready for",
    "distractors": [
      "ready to for",
      "read for",
      "ready of"
    ],
    "explanationJa": "ready for は「の準備ができた」を表す定型チャンクです。前置詞を少し変えるだけで不自然になりやすいので、語順ごと覚えます。",
    "sourceRefs": [
      "Codex-generated from learner chunk patterns",
      "COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "Are you ready for the meeting?",
        "ja": "会議の準備はできていますか。"
      },
      {
        "en": "The team is ready for the launch.",
        "ja": "チームはリリースの準備ができています。"
      }
    ]
  },
  {
    "id": "prep-good-at",
    "category": "Prepositional Chunk",
    "jaPrompt": "が得意な",
    "answer": "good at",
    "distractors": [
      "good in",
      "good on",
      "well at"
    ],
    "explanationJa": "good at は「が得意な」を表す定型チャンクです。前置詞を少し変えるだけで不自然になりやすいので、語順ごと覚えます。",
    "sourceRefs": [
      "Codex-generated from learner chunk patterns",
      "COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "She is good at explaining difficult ideas.",
        "ja": "彼女は難しい考えを説明するのが得意です。"
      },
      {
        "en": "He is good at solving problems.",
        "ja": "彼は問題解決が得意です。"
      }
    ]
  },
  {
    "id": "prep-bad-at",
    "category": "Prepositional Chunk",
    "jaPrompt": "が苦手な",
    "answer": "bad at",
    "distractors": [
      "bad in",
      "bad on",
      "poor at of"
    ],
    "explanationJa": "bad at は「が苦手な」を表す定型チャンクです。前置詞を少し変えるだけで不自然になりやすいので、語順ごと覚えます。",
    "sourceRefs": [
      "Codex-generated from learner chunk patterns",
      "COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "I am bad at remembering names.",
        "ja": "私は名前を覚えるのが苦手です。"
      },
      {
        "en": "He is bad at speaking in public.",
        "ja": "彼は人前で話すのが苦手です。"
      }
    ]
  },
  {
    "id": "prep-afraid-of",
    "category": "Prepositional Chunk",
    "jaPrompt": "を恐れて",
    "answer": "afraid of",
    "distractors": [
      "afraid to",
      "fear of",
      "afraid for"
    ],
    "explanationJa": "afraid of は「を恐れて」を表す定型チャンクです。前置詞を少し変えるだけで不自然になりやすいので、語順ごと覚えます。",
    "sourceRefs": [
      "Codex-generated from learner chunk patterns",
      "COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "She is afraid of making mistakes.",
        "ja": "彼女は間違えることを恐れています。"
      },
      {
        "en": "I am not afraid of trying again.",
        "ja": "私はもう一度挑戦することを恐れていません。"
      }
    ]
  },
  {
    "id": "prep-proud-of",
    "category": "Prepositional Chunk",
    "jaPrompt": "を誇りに思って",
    "answer": "proud of",
    "distractors": [
      "proud to",
      "pride of",
      "proud for"
    ],
    "explanationJa": "proud of は「を誇りに思って」を表す定型チャンクです。前置詞を少し変えるだけで不自然になりやすいので、語順ごと覚えます。",
    "sourceRefs": [
      "Codex-generated from learner chunk patterns",
      "COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "I am proud of my team.",
        "ja": "私は自分のチームを誇りに思っています。"
      },
      {
        "en": "She is proud of her progress.",
        "ja": "彼女は自分の進歩を誇りに思っています。"
      }
    ]
  },
  {
    "id": "phrasal-carry-out",
    "category": "Phrasal Verb",
    "jaPrompt": "実施する",
    "answer": "carry out",
    "distractors": [
      "carry on",
      "carry in",
      "carry make"
    ],
    "explanationJa": "carry out は「実施する」を表す句動詞・定型表現です。動詞と前置詞・副詞を分けずに一つの意味の塊として覚えます。",
    "sourceRefs": [
      "Codex-generated from learner chunk patterns",
      "COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "We need to carry out the plan soon.",
        "ja": "その計画をすぐに実施する必要があります。"
      },
      {
        "en": "The team carried out the test yesterday.",
        "ja": "チームは昨日そのテストを実施しました。"
      }
    ]
  },
  {
    "id": "phrasal-find-out",
    "category": "Phrasal Verb",
    "jaPrompt": "見つけ出す",
    "answer": "find out",
    "distractors": [
      "find up",
      "find in",
      "find off"
    ],
    "explanationJa": "find out は「見つけ出す」を表す句動詞・定型表現です。動詞と前置詞・副詞を分けずに一つの意味の塊として覚えます。",
    "sourceRefs": [
      "Codex-generated from learner chunk patterns",
      "COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "I need to find out the reason.",
        "ja": "理由を調べる必要があります。"
      },
      {
        "en": "She found out where the error occurred.",
        "ja": "彼女はエラーがどこで起きたかを突き止めました。"
      }
    ]
  },
  {
    "id": "phrasal-figure-out",
    "category": "Phrasal Verb",
    "jaPrompt": "理解する",
    "answer": "figure out",
    "distractors": [
      "figure up",
      "figure in",
      "figure off"
    ],
    "explanationJa": "figure out は「理解する」を表す句動詞・定型表現です。動詞と前置詞・副詞を分けずに一つの意味の塊として覚えます。",
    "sourceRefs": [
      "Codex-generated from learner chunk patterns",
      "COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "We need to figure out the problem.",
        "ja": "その問題を解明する必要があります。"
      },
      {
        "en": "He figured out how to fix it.",
        "ja": "彼はそれを直す方法を理解しました。"
      }
    ]
  },
  {
    "id": "phrasal-look-for",
    "category": "Phrasal Verb",
    "jaPrompt": "探す",
    "answer": "look for",
    "distractors": [
      "look after",
      "look to",
      "look at for"
    ],
    "explanationJa": "look for は「探す」を表す句動詞・定型表現です。動詞と前置詞・副詞を分けずに一つの意味の塊として覚えます。",
    "sourceRefs": [
      "Codex-generated from learner chunk patterns",
      "COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "I am looking for the latest report.",
        "ja": "最新の報告書を探しています。"
      },
      {
        "en": "She looked for a solution online.",
        "ja": "彼女はオンラインで解決策を探しました。"
      }
    ]
  },
  {
    "id": "phrasal-look-after",
    "category": "Phrasal Verb",
    "jaPrompt": "世話をする",
    "answer": "look after",
    "distractors": [
      "look for",
      "look to",
      "look in"
    ],
    "explanationJa": "look after は「世話をする」を表す句動詞・定型表現です。動詞と前置詞・副詞を分けずに一つの意味の塊として覚えます。",
    "sourceRefs": [
      "Codex-generated from learner chunk patterns",
      "COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "She looks after the new staff.",
        "ja": "彼女は新しいスタッフの面倒を見ています。"
      },
      {
        "en": "Please look after this account.",
        "ja": "このアカウントを担当してください。"
      }
    ]
  },
  {
    "id": "phrasal-look-into",
    "category": "Phrasal Verb",
    "jaPrompt": "調査する",
    "answer": "look into",
    "distractors": [
      "look in",
      "look to",
      "look inside to"
    ],
    "explanationJa": "look into は「調査する」を表す句動詞・定型表現です。動詞と前置詞・副詞を分けずに一つの意味の塊として覚えます。",
    "sourceRefs": [
      "Codex-generated from learner chunk patterns",
      "COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "We will look into the issue today.",
        "ja": "今日その問題を調査します。"
      },
      {
        "en": "The manager looked into the complaint.",
        "ja": "マネージャーはその苦情を調査しました。"
      }
    ]
  },
  {
    "id": "phrasal-look-up",
    "category": "Phrasal Verb",
    "jaPrompt": "調べる",
    "answer": "look up",
    "distractors": [
      "look out",
      "look in",
      "look over to"
    ],
    "explanationJa": "look up は「調べる」を表す句動詞・定型表現です。動詞と前置詞・副詞を分けずに一つの意味の塊として覚えます。",
    "sourceRefs": [
      "Codex-generated from learner chunk patterns",
      "COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "Please look up the word in a dictionary.",
        "ja": "その単語を辞書で調べてください。"
      },
      {
        "en": "I looked up the address before leaving.",
        "ja": "出発前に住所を調べました。"
      }
    ]
  },
  {
    "id": "phrasal-set-up",
    "category": "Phrasal Verb",
    "jaPrompt": "設定する・設立する",
    "answer": "set up",
    "distractors": [
      "set out",
      "set in",
      "set on"
    ],
    "explanationJa": "set up は「設定する・設立する」を表す句動詞・定型表現です。動詞と前置詞・副詞を分けずに一つの意味の塊として覚えます。",
    "sourceRefs": [
      "Codex-generated from learner chunk patterns",
      "COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "We need to set up a meeting.",
        "ja": "会議を設定する必要があります。"
      },
      {
        "en": "She set up the new computer.",
        "ja": "彼女は新しいコンピューターを設定しました。"
      }
    ]
  },
  {
    "id": "phrasal-turn-on",
    "category": "Phrasal Verb",
    "jaPrompt": "電源を入れる",
    "answer": "turn on",
    "distractors": [
      "turn in",
      "turn up",
      "turn to"
    ],
    "explanationJa": "turn on は「電源を入れる」を表す句動詞・定型表現です。動詞と前置詞・副詞を分けずに一つの意味の塊として覚えます。",
    "sourceRefs": [
      "Codex-generated from learner chunk patterns",
      "COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "Please turn on the monitor.",
        "ja": "モニターの電源を入れてください。"
      },
      {
        "en": "He turned on the lights.",
        "ja": "彼は明かりをつけました。"
      }
    ]
  },
  {
    "id": "phrasal-turn-off",
    "category": "Phrasal Verb",
    "jaPrompt": "電源を切る",
    "answer": "turn off",
    "distractors": [
      "turn of",
      "turn out",
      "turn down to"
    ],
    "explanationJa": "turn off は「電源を切る」を表す句動詞・定型表現です。動詞と前置詞・副詞を分けずに一つの意味の塊として覚えます。",
    "sourceRefs": [
      "Codex-generated from learner chunk patterns",
      "COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "Please turn off the computer.",
        "ja": "コンピューターの電源を切ってください。"
      },
      {
        "en": "She turned off the alarm.",
        "ja": "彼女はアラームを止めました。"
      }
    ]
  },
  {
    "id": "phrasal-turn-down",
    "category": "Phrasal Verb",
    "jaPrompt": "断る・下げる",
    "answer": "turn down",
    "distractors": [
      "turn low",
      "turn under",
      "turn off to"
    ],
    "explanationJa": "turn down は「断る・下げる」を表す句動詞・定型表現です。動詞と前置詞・副詞を分けずに一つの意味の塊として覚えます。",
    "sourceRefs": [
      "Codex-generated from learner chunk patterns",
      "COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "He turned down the offer.",
        "ja": "彼はその申し出を断りました。"
      },
      {
        "en": "Please turn down the volume.",
        "ja": "音量を下げてください。"
      }
    ]
  },
  {
    "id": "phrasal-turn-up",
    "category": "Phrasal Verb",
    "jaPrompt": "現れる・音量を上げる",
    "answer": "turn up",
    "distractors": [
      "turn high",
      "turn on to",
      "turn in"
    ],
    "explanationJa": "turn up は「現れる・音量を上げる」を表す句動詞・定型表現です。動詞と前置詞・副詞を分けずに一つの意味の塊として覚えます。",
    "sourceRefs": [
      "Codex-generated from learner chunk patterns",
      "COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "He turned up late for the meeting.",
        "ja": "彼は会議に遅れて現れました。"
      },
      {
        "en": "Please turn up the volume a little.",
        "ja": "音量を少し上げてください。"
      }
    ]
  },
  {
    "id": "phrasal-put-off",
    "category": "Phrasal Verb",
    "jaPrompt": "延期する",
    "answer": "put off",
    "distractors": [
      "put away",
      "put out",
      "put later"
    ],
    "explanationJa": "put off は「延期する」を表す句動詞・定型表現です。動詞と前置詞・副詞を分けずに一つの意味の塊として覚えます。",
    "sourceRefs": [
      "Codex-generated from learner chunk patterns",
      "COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "We had to put off the meeting.",
        "ja": "会議を延期しなければなりませんでした。"
      },
      {
        "en": "Don't put off the task until tomorrow.",
        "ja": "その作業を明日まで先延ばしにしないでください。"
      }
    ]
  },
  {
    "id": "phrasal-put-on",
    "category": "Phrasal Verb",
    "jaPrompt": "身につける",
    "answer": "put on",
    "distractors": [
      "put in",
      "put to",
      "put wear"
    ],
    "explanationJa": "put on は「身につける」を表す句動詞・定型表現です。動詞と前置詞・副詞を分けずに一つの意味の塊として覚えます。",
    "sourceRefs": [
      "Codex-generated from learner chunk patterns",
      "COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "Please put on your jacket.",
        "ja": "上着を着てください。"
      },
      {
        "en": "She put on her glasses.",
        "ja": "彼女は眼鏡をかけました。"
      }
    ]
  },
  {
    "id": "phrasal-put-away",
    "category": "Phrasal Verb",
    "jaPrompt": "片付ける",
    "answer": "put away",
    "distractors": [
      "put off",
      "put out",
      "put back to"
    ],
    "explanationJa": "put away は「片付ける」を表す句動詞・定型表現です。動詞と前置詞・副詞を分けずに一つの意味の塊として覚えます。",
    "sourceRefs": [
      "Codex-generated from learner chunk patterns",
      "COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "Please put away the files.",
        "ja": "ファイルを片付けてください。"
      },
      {
        "en": "He put away his laptop after work.",
        "ja": "彼は仕事の後でノートPCを片付けました。"
      }
    ]
  },
  {
    "id": "phrasal-pick-up",
    "category": "Phrasal Verb",
    "jaPrompt": "拾う・迎えに行く",
    "answer": "pick up",
    "distractors": [
      "pick out",
      "pick in",
      "pick to"
    ],
    "explanationJa": "pick up は「拾う・迎えに行く」を表す句動詞・定型表現です。動詞と前置詞・副詞を分けずに一つの意味の塊として覚えます。",
    "sourceRefs": [
      "Codex-generated from learner chunk patterns",
      "COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "I will pick up the package later.",
        "ja": "あとで荷物を受け取ります。"
      },
      {
        "en": "She picked up a few useful phrases.",
        "ja": "彼女はいくつか役立つ表現を身につけました。"
      }
    ]
  },
  {
    "id": "phrasal-fill-in",
    "category": "Phrasal Verb",
    "jaPrompt": "記入する",
    "answer": "fill in",
    "distractors": [
      "fill on",
      "fill up to",
      "fill at"
    ],
    "explanationJa": "fill in は「記入する」を表す句動詞・定型表現です。動詞と前置詞・副詞を分けずに一つの意味の塊として覚えます。",
    "sourceRefs": [
      "Codex-generated from learner chunk patterns",
      "COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "Please fill in this form.",
        "ja": "この用紙に記入してください。"
      },
      {
        "en": "He filled in the missing information.",
        "ja": "彼は不足している情報を記入しました。"
      }
    ]
  },
  {
    "id": "phrasal-fill-out",
    "category": "Phrasal Verb",
    "jaPrompt": "記入する",
    "answer": "fill out",
    "distractors": [
      "fill outside",
      "fill in to",
      "fill on"
    ],
    "explanationJa": "fill out は「記入する」を表す句動詞・定型表現です。動詞と前置詞・副詞を分けずに一つの意味の塊として覚えます。",
    "sourceRefs": [
      "Codex-generated from learner chunk patterns",
      "COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "Please fill out the application form.",
        "ja": "申込書に記入してください。"
      },
      {
        "en": "She filled out the survey online.",
        "ja": "彼女はオンラインでアンケートに記入しました。"
      }
    ]
  },
  {
    "id": "phrasal-go-over",
    "category": "Phrasal Verb",
    "jaPrompt": "確認する",
    "answer": "go over",
    "distractors": [
      "go on",
      "go above",
      "go to over"
    ],
    "explanationJa": "go over は「確認する」を表す句動詞・定型表現です。動詞と前置詞・副詞を分けずに一つの意味の塊として覚えます。",
    "sourceRefs": [
      "Codex-generated from learner chunk patterns",
      "COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "Let's go over the plan once more.",
        "ja": "計画をもう一度確認しましょう。"
      },
      {
        "en": "He went over the report carefully.",
        "ja": "彼は報告書を注意深く確認しました。"
      }
    ]
  },
  {
    "id": "phrasal-go-through",
    "category": "Phrasal Verb",
    "jaPrompt": "経験する・確認する",
    "answer": "go through",
    "distractors": [
      "go across",
      "go in",
      "go through to"
    ],
    "explanationJa": "go through は「経験する・確認する」を表す句動詞・定型表現です。動詞と前置詞・副詞を分けずに一つの意味の塊として覚えます。",
    "sourceRefs": [
      "Codex-generated from learner chunk patterns",
      "COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "We need to go through the checklist.",
        "ja": "チェックリストを確認する必要があります。"
      },
      {
        "en": "She went through a difficult time.",
        "ja": "彼女は大変な時期を経験しました。"
      }
    ]
  },
  {
    "id": "phrasal-come-up-with",
    "category": "Phrasal Verb",
    "jaPrompt": "思いつく",
    "answer": "come up with",
    "distractors": [
      "come up to",
      "come with up",
      "come out with"
    ],
    "explanationJa": "come up with は「思いつく」を表す句動詞・定型表現です。動詞と前置詞・副詞を分けずに一つの意味の塊として覚えます。",
    "sourceRefs": [
      "Codex-generated from learner chunk patterns",
      "COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "We need to come up with a better idea.",
        "ja": "もっと良い案を思いつく必要があります。"
      },
      {
        "en": "He came up with a simple solution.",
        "ja": "彼は簡単な解決策を思いつきました。"
      }
    ]
  },
  {
    "id": "phrasal-deal-with",
    "category": "Phrasal Verb",
    "jaPrompt": "対処する",
    "answer": "deal with",
    "distractors": [
      "deal to",
      "deal for",
      "deal about"
    ],
    "explanationJa": "deal with は「対処する」を表す句動詞・定型表現です。動詞と前置詞・副詞を分けずに一つの意味の塊として覚えます。",
    "sourceRefs": [
      "Codex-generated from learner chunk patterns",
      "COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "We need to deal with this problem quickly.",
        "ja": "この問題にすばやく対処する必要があります。"
      },
      {
        "en": "She deals with customer requests every day.",
        "ja": "彼女は毎日顧客からの依頼に対応しています。"
      }
    ]
  },
  {
    "id": "phrasal-depend-on",
    "category": "Phrasal Verb",
    "jaPrompt": "に依存する",
    "answer": "depend on",
    "distractors": [
      "depend in",
      "depend of",
      "depend to"
    ],
    "explanationJa": "depend on は「に依存する」を表す句動詞・定型表現です。動詞と前置詞・副詞を分けずに一つの意味の塊として覚えます。",
    "sourceRefs": [
      "Codex-generated from learner chunk patterns",
      "COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "The schedule will depend on the weather.",
        "ja": "予定は天気によって決まります。"
      },
      {
        "en": "Success depends on careful preparation.",
        "ja": "成功は慎重な準備にかかっています。"
      }
    ]
  },
  {
    "id": "phrasal-focus-on",
    "category": "Phrasal Verb",
    "jaPrompt": "に集中する",
    "answer": "focus on",
    "distractors": [
      "focus in",
      "focus to",
      "focus at"
    ],
    "explanationJa": "focus on は「に集中する」を表す句動詞・定型表現です。動詞と前置詞・副詞を分けずに一つの意味の塊として覚えます。",
    "sourceRefs": [
      "Codex-generated from learner chunk patterns",
      "COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "Let's focus on the main issue.",
        "ja": "主な問題に集中しましょう。"
      },
      {
        "en": "She focused on improving quality.",
        "ja": "彼女は品質改善に集中しました。"
      }
    ]
  },
  {
    "id": "phrasal-apply-for",
    "category": "Phrasal Verb",
    "jaPrompt": "に応募する",
    "answer": "apply for",
    "distractors": [
      "apply to for",
      "apply on",
      "apply at"
    ],
    "explanationJa": "apply for は「に応募する」を表す句動詞・定型表現です。動詞と前置詞・副詞を分けずに一つの意味の塊として覚えます。",
    "sourceRefs": [
      "Codex-generated from learner chunk patterns",
      "COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "He will apply for the position.",
        "ja": "彼はその職に応募する予定です。"
      },
      {
        "en": "She applied for a new passport.",
        "ja": "彼女は新しいパスポートを申請しました。"
      }
    ]
  },
  {
    "id": "phrasal-apply-to",
    "category": "Phrasal Verb",
    "jaPrompt": "に当てはまる",
    "answer": "apply to",
    "distractors": [
      "apply for to",
      "apply on",
      "apply at"
    ],
    "explanationJa": "apply to は「に当てはまる」を表す句動詞・定型表現です。動詞と前置詞・副詞を分けずに一つの意味の塊として覚えます。",
    "sourceRefs": [
      "Codex-generated from learner chunk patterns",
      "COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "This rule applies to all employees.",
        "ja": "この規則は全従業員に適用されます。"
      },
      {
        "en": "The same idea applies to this case.",
        "ja": "同じ考え方がこの場合にも当てはまります。"
      }
    ]
  },
  {
    "id": "phrasal-refer-to",
    "category": "Phrasal Verb",
    "jaPrompt": "に言及する",
    "answer": "refer to",
    "distractors": [
      "refer about",
      "refer for",
      "refer of"
    ],
    "explanationJa": "refer to は「に言及する」を表す句動詞・定型表現です。動詞と前置詞・副詞を分けずに一つの意味の塊として覚えます。",
    "sourceRefs": [
      "Codex-generated from learner chunk patterns",
      "COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "Please refer to the manual.",
        "ja": "マニュアルを参照してください。"
      },
      {
        "en": "This chart refers to last year's sales.",
        "ja": "この表は昨年の売上を示しています。"
      }
    ]
  },
  {
    "id": "phrasal-belong-to",
    "category": "Phrasal Verb",
    "jaPrompt": "に属する",
    "answer": "belong to",
    "distractors": [
      "belong in",
      "belong of",
      "belong for"
    ],
    "explanationJa": "belong to は「に属する」を表す句動詞・定型表現です。動詞と前置詞・副詞を分けずに一つの意味の塊として覚えます。",
    "sourceRefs": [
      "Codex-generated from learner chunk patterns",
      "COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "This file belongs to another project.",
        "ja": "このファイルは別のプロジェクトに属しています。"
      },
      {
        "en": "The account belongs to the sales team.",
        "ja": "そのアカウントは営業チームのものです。"
      }
    ]
  },
  {
    "id": "phrasal-lead-to",
    "category": "Phrasal Verb",
    "jaPrompt": "につながる",
    "answer": "lead to",
    "distractors": [
      "lead for",
      "lead in",
      "lead of"
    ],
    "explanationJa": "lead to は「につながる」を表す句動詞・定型表現です。動詞と前置詞・副詞を分けずに一つの意味の塊として覚えます。",
    "sourceRefs": [
      "Codex-generated from learner chunk patterns",
      "COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "Small mistakes can lead to serious problems.",
        "ja": "小さなミスが深刻な問題につながることがあります。"
      },
      {
        "en": "The change led to better results.",
        "ja": "その変更はより良い結果につながりました。"
      }
    ]
  },
  {
    "id": "phrasal-result-in",
    "category": "Phrasal Verb",
    "jaPrompt": "という結果になる",
    "answer": "result in",
    "distractors": [
      "result to",
      "result of",
      "result for"
    ],
    "explanationJa": "result in は「という結果になる」を表す句動詞・定型表現です。動詞と前置詞・副詞を分けずに一つの意味の塊として覚えます。",
    "sourceRefs": [
      "Codex-generated from learner chunk patterns",
      "COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "The delay may result in extra costs.",
        "ja": "その遅れは追加費用につながるかもしれません。"
      },
      {
        "en": "Careful planning resulted in success.",
        "ja": "慎重な計画が成功につながりました。"
      }
    ]
  },
  {
    "id": "phrasal-suffer-from",
    "category": "Phrasal Verb",
    "jaPrompt": "に苦しむ",
    "answer": "suffer from",
    "distractors": [
      "suffer of",
      "suffer with",
      "suffer by"
    ],
    "explanationJa": "suffer from は「に苦しむ」を表す句動詞・定型表現です。動詞と前置詞・副詞を分けずに一つの意味の塊として覚えます。",
    "sourceRefs": [
      "Codex-generated from learner chunk patterns",
      "COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "The company suffered from low sales.",
        "ja": "その会社は売上低迷に苦しみました。"
      },
      {
        "en": "Many people suffer from stress.",
        "ja": "多くの人がストレスに苦しんでいます。"
      }
    ]
  },
  {
    "id": "phrasal-recover-from",
    "category": "Phrasal Verb",
    "jaPrompt": "から回復する",
    "answer": "recover from",
    "distractors": [
      "recover of",
      "recover by",
      "recover to"
    ],
    "explanationJa": "recover from は「から回復する」を表す句動詞・定型表現です。動詞と前置詞・副詞を分けずに一つの意味の塊として覚えます。",
    "sourceRefs": [
      "Codex-generated from learner chunk patterns",
      "COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "The market recovered from the shock.",
        "ja": "市場はその衝撃から回復しました。"
      },
      {
        "en": "She recovered from the illness quickly.",
        "ja": "彼女はその病気からすぐに回復しました。"
      }
    ]
  },
  {
    "id": "phrasal-prepare-for",
    "category": "Phrasal Verb",
    "jaPrompt": "に備える",
    "answer": "prepare for",
    "distractors": [
      "prepare to",
      "prepare of",
      "prepare at"
    ],
    "explanationJa": "prepare for は「に備える」を表す句動詞・定型表現です。動詞と前置詞・副詞を分けずに一つの意味の塊として覚えます。",
    "sourceRefs": [
      "Codex-generated from learner chunk patterns",
      "COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "We need to prepare for the presentation.",
        "ja": "プレゼンの準備をする必要があります。"
      },
      {
        "en": "She prepared for the interview carefully.",
        "ja": "彼女は面接に向けて慎重に準備しました。"
      }
    ]
  },
  {
    "id": "phrasal-wait-for",
    "category": "Phrasal Verb",
    "jaPrompt": "を待つ",
    "answer": "wait for",
    "distractors": [
      "wait to",
      "wait of",
      "wait on"
    ],
    "explanationJa": "wait for は「を待つ」を表す句動詞・定型表現です。動詞と前置詞・副詞を分けずに一つの意味の塊として覚えます。",
    "sourceRefs": [
      "Codex-generated from learner chunk patterns",
      "COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "Please wait for the confirmation email.",
        "ja": "確認メールを待ってください。"
      },
      {
        "en": "We waited for the train for twenty minutes.",
        "ja": "私たちは電車を20分待ちました。"
      }
    ]
  },
  {
    "id": "phrasal-ask-for",
    "category": "Phrasal Verb",
    "jaPrompt": "を求める",
    "answer": "ask for",
    "distractors": [
      "ask to",
      "ask of",
      "ask about for"
    ],
    "explanationJa": "ask for は「を求める」を表す句動詞・定型表現です。動詞と前置詞・副詞を分けずに一つの意味の塊として覚えます。",
    "sourceRefs": [
      "Codex-generated from learner chunk patterns",
      "COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "You can ask for help anytime.",
        "ja": "いつでも助けを求めてよいです。"
      },
      {
        "en": "She asked for more information.",
        "ja": "彼女は追加情報を求めました。"
      }
    ]
  },
  {
    "id": "phrasal-listen-to",
    "category": "Phrasal Verb",
    "jaPrompt": "を聞く",
    "answer": "listen to",
    "distractors": [
      "listen",
      "listen at",
      "listen for to"
    ],
    "explanationJa": "listen to は「を聞く」を表す句動詞・定型表現です。動詞と前置詞・副詞を分けずに一つの意味の塊として覚えます。",
    "sourceRefs": [
      "Codex-generated from learner chunk patterns",
      "COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "Please listen to the instructions.",
        "ja": "指示を聞いてください。"
      },
      {
        "en": "He listens to English podcasts every morning.",
        "ja": "彼は毎朝英語のポッドキャストを聞いています。"
      }
    ]
  },
  {
    "id": "phrasal-agree-with",
    "category": "Phrasal Verb",
    "jaPrompt": "に同意する",
    "answer": "agree with",
    "distractors": [
      "agree to with",
      "agree on with",
      "agree for"
    ],
    "explanationJa": "agree with は「に同意する」を表す句動詞・定型表現です。動詞と前置詞・副詞を分けずに一つの意味の塊として覚えます。",
    "sourceRefs": [
      "Codex-generated from learner chunk patterns",
      "COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "I agree with your opinion.",
        "ja": "あなたの意見に同意します。"
      },
      {
        "en": "She agreed with the manager's suggestion.",
        "ja": "彼女はマネージャーの提案に同意しました。"
      }
    ]
  },
  {
    "id": "phrasal-agree-on",
    "category": "Phrasal Verb",
    "jaPrompt": "について合意する",
    "answer": "agree on",
    "distractors": [
      "agree with on",
      "agree for",
      "agree at"
    ],
    "explanationJa": "agree on は「について合意する」を表す句動詞・定型表現です。動詞と前置詞・副詞を分けずに一つの意味の塊として覚えます。",
    "sourceRefs": [
      "Codex-generated from learner chunk patterns",
      "COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "We agreed on the final schedule.",
        "ja": "私たちは最終スケジュールについて合意しました。"
      },
      {
        "en": "They agreed on a new price.",
        "ja": "彼らは新しい価格について合意しました。"
      }
    ]
  },
  {
    "id": "phrasal-participate-in",
    "category": "Phrasal Verb",
    "jaPrompt": "に参加する",
    "answer": "participate in",
    "distractors": [
      "participate at",
      "participate on",
      "participate to"
    ],
    "explanationJa": "participate in は「に参加する」を表す句動詞・定型表現です。動詞と前置詞・副詞を分けずに一つの意味の塊として覚えます。",
    "sourceRefs": [
      "Codex-generated from learner chunk patterns",
      "COCA/SKELL reference check"
    ],
    "examples": [
      {
        "en": "She will participate in the workshop.",
        "ja": "彼女はそのワークショップに参加します。"
      },
      {
        "en": "Many employees participated in the survey.",
        "ja": "多くの従業員がその調査に参加しました。"
      }
    ]
  }
];
