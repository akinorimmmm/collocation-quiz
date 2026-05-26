const BASE_QUESTIONS = [
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

const VERB_SETS = [
  { category: "Core Verb", verb: "make", verbJa: "作る・行う", badVerbs: ["do", "take", "build"], objects: [["a decision", "決断"], ["a mistake", "間違い"], ["an effort", "努力"], ["progress", "進歩"], ["a suggestion", "提案"], ["a choice", "選択"], ["a complaint", "苦情"], ["an appointment", "予約・約束"], ["a plan", "計画"], ["a profit", "利益"], ["a request", "依頼"], ["a promise", "約束"], ["a difference", "違い・影響"], ["a reservation", "予約"], ["a phone call", "電話"], ["a list", "一覧"], ["a change", "変更"], ["an excuse", "言い訳"], ["an attempt", "試み"], ["a contribution", "貢献"]] },
  { category: "Core Verb", verb: "take", verbJa: "取る・行う", badVerbs: ["make", "do", "catch"], objects: [["a break", "休憩"], ["a photo", "写真"], ["notes", "メモ"], ["responsibility", "責任"], ["action", "行動"], ["advantage", "利点"], ["part", "参加・役割"], ["place", "発生"], ["care", "世話・注意"], ["a risk", "リスク"], ["a look", "一見"], ["time", "時間"], ["a test", "試験"], ["a chance", "機会"], ["a seat", "席"], ["a shower", "シャワー"], ["a deep breath", "深呼吸"], ["control", "支配・管理"], ["effect", "効力"], ["measures", "対策"]] },
  { category: "Core Verb", verb: "have", verbJa: "持つ・経験する", badVerbs: ["make", "do", "get"], objects: [["a meeting", "会議"], ["a problem", "問題"], ["an idea", "考え"], ["a chance", "機会"], ["a conversation", "会話"], ["an effect", "効果"], ["an impact", "影響"], ["breakfast", "朝食"], ["difficulty", "困難"], ["fun", "楽しい時間"], ["access", "アクセス権"], ["experience", "経験"], ["a look", "確認"], ["a rest", "休息"], ["a good time", "楽しい時間"], ["a headache", "頭痛"], ["confidence", "自信"], ["permission", "許可"], ["trouble", "困りごと"], ["a point", "一理"]] },
  { category: "Core Verb", verb: "do", verbJa: "する・行う", badVerbs: ["make", "take", "play"], objects: [["homework", "宿題"], ["business", "取引・事業"], ["research", "研究"], ["the dishes", "皿洗い"], ["your best", "最善"], ["exercise", "運動"], ["a favor", "頼みごと"], ["damage", "損害"], ["work", "仕事"], ["a task", "作業"], ["the shopping", "買い物"], ["the laundry", "洗濯"], ["the cleaning", "掃除"], ["a course", "講座"], ["harm", "害"], ["well", "うまく"], ["badly", "悪く"], ["a job", "仕事"], ["the right thing", "正しいこと"], ["nothing", "何も"]] },
  { category: "Business", verb: "give", verbJa: "与える・行う", badVerbs: ["make", "take", "send"], objects: [["advice", "助言"], ["a presentation", "プレゼン"], ["a speech", "スピーチ"], ["a reason", "理由"], ["an example", "例"], ["permission", "許可"], ["notice", "通知"], ["a warning", "警告"], ["an answer", "答え"], ["feedback", "フィードバック"], ["support", "支援"], ["priority", "優先権"], ["a call", "電話"], ["a smile", "笑顔"], ["a hand", "手助け"], ["credit", "評価"], ["details", "詳細"], ["instructions", "指示"], ["a demonstration", "実演"], ["evidence", "証拠"]] },
  { category: "Business", verb: "provide", verbJa: "提供する", badVerbs: ["make", "give out", "prepare"], objects: [["information", "情報"], ["support", "支援"], ["evidence", "証拠"], ["guidance", "案内"], ["details", "詳細"], ["access", "アクセス"], ["training", "研修"], ["services", "サービス"], ["feedback", "フィードバック"], ["a solution", "解決策"], ["an opportunity", "機会"], ["resources", "資源"], ["a summary", "要約"], ["documentation", "文書"], ["assistance", "援助"]] },
  { category: "Business", verb: "meet", verbJa: "満たす・間に合う", badVerbs: ["catch", "touch", "arrive"], objects: [["a deadline", "締切"], ["requirements", "要件"], ["expectations", "期待"], ["demand", "需要"], ["standards", "基準"], ["targets", "目標"], ["needs", "ニーズ"], ["criteria", "基準"], ["a goal", "目標"], ["conditions", "条件"], ["a challenge", "課題"], ["a request", "依頼"], ["obligations", "義務"], ["a schedule", "予定"], ["quality standards", "品質基準"]] },
  { category: "Learning", verb: "pay", verbJa: "払う", badVerbs: ["send", "put", "give"], objects: [["attention", "注意"], ["respect", "敬意"], ["a fee", "料金"], ["a fine", "罰金"], ["interest", "利息・関心"], ["the bill", "請求"], ["taxes", "税金"], ["a visit", "訪問"], ["a compliment", "褒め言葉"], ["tribute", "敬意"], ["compensation", "補償"], ["rent", "家賃"], ["wages", "賃金"], ["cash", "現金"], ["close attention", "細心の注意"]] },
  { category: "Academic", verb: "conduct", verbJa: "実施する", badVerbs: ["make", "create", "play"], objects: [["research", "研究"], ["a survey", "調査"], ["an experiment", "実験"], ["an interview", "面接・聞き取り"], ["a study", "研究"], ["an investigation", "調査"], ["a review", "レビュー"], ["an analysis", "分析"], ["a test", "試験"], ["a trial", "試験運用"], ["a campaign", "キャンペーン"], ["training", "研修"], ["an audit", "監査"], ["fieldwork", "現地調査"], ["a meeting", "会議"]] },
  { category: "Business", verb: "set", verbJa: "設定する・定める", badVerbs: ["make", "put", "open"], objects: [["a goal", "目標"], ["a target", "目標"], ["a deadline", "締切"], ["a date", "日付"], ["a limit", "制限"], ["a standard", "基準"], ["priorities", "優先順位"], ["the agenda", "議題"], ["a price", "価格"], ["a rule", "ルール"], ["an example", "例"], ["a schedule", "予定"], ["boundaries", "境界"], ["conditions", "条件"], ["objectives", "目的"]] },
  { category: "Academic", verb: "reach", verbJa: "到達する", badVerbs: ["arrive", "touch", "get"], objects: [["a conclusion", "結論"], ["an agreement", "合意"], ["a decision", "決定"], ["a target", "目標"], ["a goal", "目標"], ["a consensus", "合意"], ["a level", "水準"], ["a point", "地点・段階"], ["an audience", "聴衆"], ["a market", "市場"], ["full capacity", "満員"], ["maturity", "成熟"], ["a settlement", "解決"], ["the end", "終わり"], ["a compromise", "妥協"]] },
  { category: "Business", verb: "raise", verbJa: "上げる・提起する", badVerbs: ["rise", "lift", "grow"], objects: [["prices", "価格"], ["awareness", "認識"], ["a question", "質問"], ["an issue", "問題"], ["funds", "資金"], ["concerns", "懸念"], ["standards", "基準"], ["taxes", "税金"], ["a child", "子ども"], ["your voice", "声"], ["productivity", "生産性"], ["the alarm", "警報"], ["expectations", "期待"], ["the topic", "話題"], ["confidence", "自信"]] }
];

const ADJECTIVE_SETS = [
  { category: "Adjective + Noun", adj: "strong", jaAdj: "強い", wrongAdjs: ["heavy", "big", "hard"], nouns: [["wind", "風"], ["evidence", "証拠"], ["support", "支持"], ["argument", "主張"], ["smell", "におい"], ["connection", "つながり"], ["leadership", "リーダーシップ"], ["demand", "需要"], ["economy", "経済"], ["foundation", "基盤"], ["preference", "好み"], ["commitment", "約束・責任感"], ["candidate", "候補"], ["signal", "信号"], ["influence", "影響力"]] },
  { category: "Adjective + Noun", adj: "heavy", jaAdj: "激しい・大量の", wrongAdjs: ["strong", "big", "deep"], nouns: [["rain", "雨"], ["traffic", "交通量"], ["snow", "雪"], ["damage", "損害"], ["losses", "損失"], ["use", "使用"], ["workload", "仕事量"], ["industry", "産業"], ["drinking", "飲酒"], ["investment", "投資"], ["fighting", "戦闘"], ["costs", "費用"], ["pressure", "圧力"], ["machinery", "機械"], ["emphasis", "重視"]] },
  { category: "Adjective + Noun", adj: "high", jaAdj: "高い", wrongAdjs: ["tall", "big", "strong"], nouns: [["quality", "品質"], ["price", "価格"], ["level", "水準"], ["standard", "基準"], ["risk", "リスク"], ["income", "収入"], ["demand", "需要"], ["priority", "優先度"], ["speed", "速度"], ["temperature", "温度"], ["expectations", "期待"], ["performance", "性能"], ["cost", "費用"], ["score", "得点"], ["value", "価値"]] },
  { category: "Adjective + Noun", adj: "deep", jaAdj: "深い", wrongAdjs: ["heavy", "strong", "large"], nouns: [["sleep", "眠り"], ["understanding", "理解"], ["concern", "懸念"], ["knowledge", "知識"], ["respect", "敬意"], ["conversation", "会話"], ["breath", "呼吸"], ["water", "水"], ["analysis", "分析"], ["connection", "つながり"], ["roots", "根"], ["sadness", "悲しみ"], ["learning", "学び"], ["focus", "集中"], ["insight", "洞察"]] },
  { category: "Adjective + Noun", adj: "close", jaAdj: "密接な・近い", wrongAdjs: ["near", "tight", "short"], nouns: [["friend", "友人"], ["relationship", "関係"], ["attention", "注意"], ["contact", "連絡"], ["cooperation", "協力"], ["connection", "つながり"], ["inspection", "確認"], ["look", "一見"], ["relative", "親族"], ["competition", "競争"], ["match", "試合"], ["collaboration", "協働"], ["reading", "読解"], ["monitoring", "監視"], ["examination", "調査"]] },
  { category: "Adjective + Noun", adj: "wide", jaAdj: "幅広い", wrongAdjs: ["large", "big", "thick"], nouns: [["range", "範囲"], ["variety", "種類"], ["choice", "選択肢"], ["selection", "選択肢"], ["audience", "聴衆"], ["gap", "差"], ["experience", "経験"], ["knowledge", "知識"], ["support", "支持"], ["coverage", "範囲"], ["application", "応用"], ["perspective", "視点"], ["interest", "関心"], ["appeal", "魅力"], ["distribution", "分布"]] },
  { category: "Academic", adj: "significant", jaAdj: "重要な・大きな", wrongAdjs: ["big", "large", "strong"], nouns: [["increase", "増加"], ["difference", "違い"], ["impact", "影響"], ["change", "変化"], ["improvement", "改善"], ["effect", "効果"], ["role", "役割"], ["factor", "要因"], ["evidence", "証拠"], ["progress", "進歩"], ["reduction", "減少"], ["challenge", "課題"], ["benefit", "利点"], ["relationship", "関係"], ["variation", "ばらつき"]] },
  { category: "Academic", adj: "serious", jaAdj: "深刻な", wrongAdjs: ["heavy", "strong", "big"], nouns: [["problem", "問題"], ["issue", "問題"], ["injury", "けが"], ["risk", "リスク"], ["illness", "病気"], ["concern", "懸念"], ["threat", "脅威"], ["damage", "損害"], ["accident", "事故"], ["crime", "犯罪"], ["mistake", "間違い"], ["consequence", "結果"], ["challenge", "課題"], ["shortage", "不足"], ["conflict", "対立"]] },
  { category: "Daily Life", adj: "common", jaAdj: "よくある", wrongAdjs: ["normal", "usual", "ordinary"], nouns: [["mistake", "間違い"], ["problem", "問題"], ["reason", "理由"], ["practice", "慣行"], ["question", "質問"], ["symptom", "症状"], ["feature", "特徴"], ["cause", "原因"], ["approach", "方法"], ["belief", "考え"], ["experience", "経験"], ["pattern", "パターン"], ["issue", "問題"], ["method", "方法"], ["error", "エラー"]] },
  { category: "Business", adj: "annual", jaAdj: "年次の", wrongAdjs: ["yearly", "every-year", "year"], nouns: [["report", "報告書"], ["meeting", "会議"], ["budget", "予算"], ["review", "レビュー"], ["income", "収入"], ["growth", "成長"], ["survey", "調査"], ["plan", "計画"], ["fee", "料金"], ["event", "イベント"], ["conference", "会議"], ["sales", "売上"], ["summary", "要約"], ["statement", "声明"], ["leave", "休暇"]] },
  { category: "Business", adj: "financial", jaAdj: "財務の・金銭的な", wrongAdjs: ["money", "cash", "economic"], nouns: [["support", "支援"], ["aid", "援助"], ["report", "報告書"], ["risk", "リスク"], ["loss", "損失"], ["gain", "利益"], ["market", "市場"], ["system", "制度"], ["planning", "計画"], ["pressure", "圧力"], ["resources", "資源"], ["security", "安定"], ["independence", "自立"], ["data", "データ"], ["management", "管理"]] },
  { category: "Daily Life", adj: "local", jaAdj: "地元の", wrongAdjs: ["near", "regional", "place"], nouns: [["community", "地域社会"], ["people", "人々"], ["government", "行政"], ["business", "企業"], ["school", "学校"], ["area", "地域"], ["news", "ニュース"], ["market", "市場"], ["culture", "文化"], ["residents", "住民"], ["authorities", "当局"], ["services", "サービス"], ["economy", "経済"], ["traffic", "交通"], ["office", "事務所"]] },
  { category: "TOEIC", adj: "customer", jaAdj: "顧客の", wrongAdjs: ["client", "buyer", "user"], nouns: [["service", "サービス"], ["support", "支援"], ["feedback", "意見"], ["satisfaction", "満足度"], ["needs", "ニーズ"], ["complaints", "苦情"], ["experience", "体験"], ["records", "記録"], ["requests", "依頼"], ["information", "情報"], ["data", "データ"], ["relations", "関係"], ["retention", "維持"], ["survey", "調査"], ["care", "対応"]] }
];

const ADVERB_SETS = [
  { category: "Adverb Chunk", adv: "highly", jaAdv: "非常に", wrongAdvs: ["strongly", "deeply", "hardly"], words: [["likely", "可能性が高い"], ["effective", "効果的な"], ["recommended", "推奨される"], ["successful", "成功している"], ["competitive", "競争力がある"], ["skilled", "熟練した"], ["qualified", "資格のある"], ["reliable", "信頼できる"], ["efficient", "効率的な"], ["sensitive", "敏感な"]] },
  { category: "Adverb Chunk", adv: "deeply", jaAdv: "深く", wrongAdvs: ["strongly", "highly", "widely"], words: [["concerned", "懸念している"], ["affected", "影響を受けている"], ["moved", "感動している"], ["committed", "尽力している"], ["rooted", "根付いている"], ["involved", "関わっている"], ["grateful", "感謝している"], ["troubled", "悩んでいる"], ["connected", "つながっている"], ["engaged", "関与している"]] },
  { category: "Adverb Chunk", adv: "fully", jaAdv: "完全に", wrongAdvs: ["very", "deeply", "strongly"], words: [["aware", "認識している"], ["prepared", "準備できている"], ["understand", "理解する"], ["support", "支持する"], ["accept", "受け入れる"], ["developed", "発達した"], ["equipped", "備えている"], ["responsible", "責任がある"], ["available", "利用できる"], ["committed", "約束している"]] },
  { category: "Adverb Chunk", adv: "widely", jaAdv: "広く", wrongAdvs: ["largely", "bigly", "strongly"], words: [["available", "利用可能な"], ["used", "使われている"], ["known", "知られている"], ["accepted", "受け入れられている"], ["recognized", "認められている"], ["distributed", "配布されている"], ["read", "読まれている"], ["shared", "共有されている"], ["discussed", "議論されている"], ["reported", "報告されている"]] },
  { category: "Adverb Chunk", adv: "strongly", jaAdv: "強く", wrongAdvs: ["heavily", "deeply", "highly"], words: [["recommend", "勧める"], ["support", "支持する"], ["believe", "信じる"], ["oppose", "反対する"], ["suggest", "示唆する"], ["agree", "同意する"], ["disagree", "反対する"], ["feel", "感じる"], ["influence", "影響する"], ["encourage", "促す"]] },
  { category: "Adverb Chunk", adv: "clearly", jaAdv: "明確に", wrongAdvs: ["cleanly", "strongly", "deeply"], words: [["understand", "理解する"], ["show", "示す"], ["explain", "説明する"], ["state", "述べる"], ["define", "定義する"], ["identify", "特定する"], ["indicate", "示す"], ["communicate", "伝える"], ["describe", "説明する"], ["see", "分かる"]] },
  { category: "Adverb Chunk", adv: "carefully", jaAdv: "慎重に", wrongAdvs: ["deeply", "strongly", "hardly"], words: [["consider", "検討する"], ["review", "確認する"], ["examine", "調べる"], ["check", "確認する"], ["read", "読む"], ["follow", "従う"], ["choose", "選ぶ"], ["plan", "計画する"], ["manage", "管理する"], ["monitor", "監視する"]] },
  { category: "Adverb Chunk", adv: "significantly", jaAdv: "大幅に", wrongAdvs: ["strongly", "deeply", "bigly"], words: [["increase", "増加する"], ["decrease", "減少する"], ["improve", "改善する"], ["reduce", "減らす"], ["affect", "影響する"], ["change", "変化する"], ["differ", "異なる"], ["contribute", "貢献する"], ["expand", "拡大する"], ["decline", "低下する"]] }
];

const PREPOSITIONAL_CHUNKS = [
  ["in advance", "前もって", ["on advance", "at advance", "by advance"]], ["on time", "時間通りに", ["in time", "at time", "by time"]], ["at risk", "危険にさらされて", ["in risk", "on risk", "by risk"]], ["by chance", "偶然に", ["on chance", "in chance", "at chance"]], ["in charge", "担当して", ["on charge", "at charge", "by charge"]], ["under pressure", "プレッシャーの下で", ["on pressure", "in pressure", "by pressure"]], ["for example", "例えば", ["by example", "on example", "at example"]], ["as a result", "結果として", ["for a result", "in a result", "by a result"]], ["in response to", "に応じて", ["on response to", "at response to", "by response to"]], ["in terms of", "の観点で", ["on terms of", "at terms of", "by terms of"]], ["according to", "によると", ["depending to", "based to", "following to"]], ["due to", "が原因で", ["because to", "owing for", "thanks for"]], ["because of", "のために", ["because to", "due for", "since of"]], ["instead of", "の代わりに", ["rather of", "instead to", "in place to"]], ["in addition to", "に加えて", ["on addition to", "at addition to", "by addition to"]], ["with regard to", "に関して", ["with regard of", "in regard to", "for regard to"]], ["in relation to", "に関連して", ["on relation to", "at relation to", "by relation to"]], ["in contrast", "対照的に", ["on contrast", "at contrast", "by contrast of"]], ["on average", "平均して", ["in average", "at average", "by average"]], ["at least", "少なくとも", ["in least", "on least", "by least"]], ["at first", "最初は", ["in first", "on first", "by first"]], ["in general", "一般的に", ["on general", "at general", "by general"]], ["in particular", "特に", ["on particular", "at particular", "by particular"]], ["in public", "公の場で", ["on public", "at public", "by public"]], ["in private", "内密に", ["on private", "at private", "by private"]], ["on purpose", "わざと", ["in purpose", "at purpose", "by purpose"]], ["by accident", "偶然に", ["on accident", "in accident", "at accident"]], ["at work", "職場で", ["in work", "on work", "by work"]], ["at home", "家で", ["in home", "on home", "by home"]], ["in detail", "詳しく", ["on detail", "at detail", "by detail"]], ["in short", "要するに", ["on short", "at short", "by short"]], ["in fact", "実際には", ["on fact", "at fact", "by fact"]], ["in theory", "理論上は", ["on theory", "at theory", "by theory"]], ["in practice", "実際には", ["on practice", "at practice", "by practice"]], ["on sale", "販売中・セール中で", ["in sale", "at sale", "by sale"]], ["for sale", "売り物で", ["on sell", "in sell", "at sell"]], ["out of stock", "在庫切れで", ["out stock", "off stock", "from stock"]], ["in stock", "在庫があって", ["on stock", "at stock", "by stock"]], ["on behalf of", "を代表して", ["in behalf of", "at behalf of", "by behalf of"]], ["in favor of", "に賛成して", ["on favor of", "at favor of", "by favor of"]], ["in need of", "を必要として", ["on need of", "at need of", "by need of"]], ["in search of", "を探して", ["on search of", "at search of", "by search of"]], ["in support of", "を支持して", ["on support of", "at support of", "by support of"]], ["in exchange for", "と引き換えに", ["on exchange for", "at exchange for", "by exchange for"]], ["in return for", "のお返しに", ["on return for", "at return for", "by return for"]], ["in case of", "の場合に備えて", ["on case of", "at case of", "by case of"]], ["in front of", "の前に", ["on front of", "at front of", "by front of"]], ["next to", "の隣に", ["near to", "beside to", "close to of"]], ["close to", "に近い", ["near to of", "close of", "near from"]], ["far from", "から遠い", ["far to", "long from", "away to"]], ["similar to", "に似ている", ["similar with", "same to", "near with"]], ["different from", "と異なる", ["different to", "different with", "difference from"]], ["responsible for", "に責任がある", ["responsible to", "responsible of", "responsibility for"]], ["interested in", "に興味がある", ["interested on", "interesting in", "interest to"]], ["aware of", "に気づいている", ["aware to", "aware for", "awareness of"]], ["familiar with", "に詳しい", ["familiar to", "familiar of", "family with"]], ["suitable for", "に適している", ["suitable to", "suit for", "suitable of"]], ["available to", "が利用できる", ["available for to", "availability to", "available of"]], ["available for", "に利用可能な", ["available to for", "availability for", "available of"]], ["related to", "に関連した", ["related with", "relation to", "relative to"]], ["based on", "に基づいて", ["based in", "base on", "basis on"]], ["focused on", "に集中した", ["focused in", "focus on", "focused to"]], ["concerned about", "を心配して", ["concerned to", "concern about", "concerned of"]], ["satisfied with", "に満足して", ["satisfied to", "satisfaction with", "satisfied of"]], ["known for", "で知られている", ["known to", "know for", "known of"]], ["famous for", "で有名な", ["famous to", "fame for", "famous of"]], ["ready for", "の準備ができた", ["ready to for", "read for", "ready of"]], ["good at", "が得意な", ["good in", "good on", "well at"]], ["bad at", "が苦手な", ["bad in", "bad on", "poor at of"]], ["afraid of", "を恐れて", ["afraid to", "fear of", "afraid for"]], ["proud of", "を誇りに思って", ["proud to", "pride of", "proud for"]]
];

const PHRASAL_CHUNKS = [
  ["carry out", "実施する", ["carry on", "carry in", "carry make"]], ["find out", "見つけ出す", ["find up", "find in", "find off"]], ["figure out", "理解する", ["figure up", "figure in", "figure off"]], ["look for", "探す", ["look after", "look to", "look at for"]], ["look after", "世話をする", ["look for", "look to", "look in"]], ["look into", "調査する", ["look in", "look to", "look inside to"]], ["look up", "調べる", ["look out", "look in", "look over to"]], ["set up", "設定する・設立する", ["set out", "set in", "set on"]], ["turn on", "電源を入れる", ["turn in", "turn up", "turn to"]], ["turn off", "電源を切る", ["turn of", "turn out", "turn down to"]], ["turn down", "断る・下げる", ["turn low", "turn under", "turn off to"]], ["turn up", "現れる・音量を上げる", ["turn high", "turn on to", "turn in"]], ["put off", "延期する", ["put away", "put out", "put later"]], ["put on", "身につける", ["put in", "put to", "put wear"]], ["put away", "片付ける", ["put off", "put out", "put back to"]], ["pick up", "拾う・迎えに行く", ["pick out", "pick in", "pick to"]], ["fill in", "記入する", ["fill on", "fill up to", "fill at"]], ["fill out", "記入する", ["fill outside", "fill in to", "fill on"]], ["go over", "確認する", ["go on", "go above", "go to over"]], ["go through", "経験する・確認する", ["go across", "go in", "go through to"]], ["come up with", "思いつく", ["come up to", "come with up", "come out with"]], ["deal with", "対処する", ["deal to", "deal for", "deal about"]], ["depend on", "に依存する", ["depend in", "depend of", "depend to"]], ["focus on", "に集中する", ["focus in", "focus to", "focus at"]], ["apply for", "に応募する", ["apply to for", "apply on", "apply at"]], ["apply to", "に当てはまる", ["apply for to", "apply on", "apply at"]], ["refer to", "に言及する", ["refer about", "refer for", "refer of"]], ["belong to", "に属する", ["belong in", "belong of", "belong for"]], ["lead to", "につながる", ["lead for", "lead in", "lead of"]], ["result in", "という結果になる", ["result to", "result of", "result for"]], ["suffer from", "に苦しむ", ["suffer of", "suffer with", "suffer by"]], ["recover from", "から回復する", ["recover of", "recover by", "recover to"]], ["prepare for", "に備える", ["prepare to", "prepare of", "prepare at"]], ["wait for", "を待つ", ["wait to", "wait of", "wait on"]], ["ask for", "を求める", ["ask to", "ask of", "ask about for"]], ["listen to", "を聞く", ["listen", "listen at", "listen for to"]], ["agree with", "に同意する", ["agree to with", "agree on with", "agree for"]], ["agree on", "について合意する", ["agree with on", "agree for", "agree at"]], ["participate in", "に参加する", ["participate at", "participate on", "participate to"]], ["contribute to", "に貢献する", ["contribute for", "contribute in", "contribution to"]]
];

function slug(value) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

function uniqueDistractors(answer, distractors) {
  return distractors.filter((item, index, list) => item !== answer && list.indexOf(item) === index).slice(0, 3);
}

const VERB_PROMPT_OVERRIDES = {
  "make an effort": "努力する",
  "make a suggestion": "提案する",
  "make a choice": "選択する",
  "make a complaint": "苦情を言う",
  "make an appointment": "予約・約束をする",
  "make a profit": "利益を出す",
  "make a request": "依頼する",
  "make a promise": "約束する",
  "make a difference": "違い・影響を生む",
  "make a reservation": "予約する",
  "make a phone call": "電話する",
  "make a list": "一覧を作る",
  "make a change": "変更する",
  "make an excuse": "言い訳をする",
  "make an attempt": "試みる",
  "make a contribution": "貢献する",
  "take a photo": "写真を撮る",
  "take notes": "メモを取る",
  "take responsibility": "責任を負う",
  "take advantage": "利点を利用する",
  "take part": "参加する",
  "take place": "発生する",
  "take care": "世話をする・注意する",
  "take effect": "効力を持つ",
  "have breakfast": "朝食をとる",
  "have difficulty": "苦労する",
  "have fun": "楽しい時間を過ごす",
  "have access": "アクセスできる",
  "have experience": "経験がある",
  "have a look": "確認する",
  "have a rest": "休む",
  "have a good time": "楽しい時間を過ごす",
  "have a headache": "頭痛がする",
  "have trouble": "困っている",
  "have a point": "一理ある",
  "do well": "うまくやる",
  "do badly": "悪くやる",
  "do nothing": "何もしない",
  "give a call": "電話する",
  "give a smile": "微笑む",
  "give a hand": "手助けする",
  "give credit": "評価する",
  "meet a deadline": "締切に間に合う",
  "meet demand": "需要に応える",
  "meet a challenge": "課題に対応する",
  "meet a request": "依頼に応える",
  "meet a schedule": "予定に間に合う",
  "pay a visit": "訪問する",
  "pay a compliment": "褒める",
  "pay tribute": "敬意を表す",
  "reach a conclusion": "結論に達する",
  "reach an agreement": "合意に達する",
  "reach a decision": "決定に至る",
  "reach a consensus": "合意に達する",
  "reach an audience": "聴衆に届く",
  "reach a market": "市場に届く",
  "reach full capacity": "満員になる",
  "reach maturity": "成熟する",
  "reach a settlement": "解決に至る",
  "reach the end": "終わりに達する",
  "reach a compromise": "妥協に達する",
  "raise awareness": "認識を高める",
  "raise a question": "質問を提起する",
  "raise an issue": "問題を提起する",
  "raise funds": "資金を集める",
  "raise concerns": "懸念を提起する",
  "raise a child": "子どもを育てる",
  "raise your voice": "声を上げる",
  "raise the alarm": "警報を鳴らす",
  "raise the topic": "話題を持ち出す"
};

function verbPrompt(set, answer, objectJa) {
  if (VERB_PROMPT_OVERRIDES[answer]) return VERB_PROMPT_OVERRIDES[answer];

  if (set.verb === "make" || set.verb === "do" || set.verb === "conduct") return `${objectJa}を行う`;
  if (set.verb === "take") return `${objectJa}を取る`;
  if (set.verb === "have") return `${objectJa}がある`;
  if (set.verb === "give") return `${objectJa}を与える`;
  if (set.verb === "provide") return `${objectJa}を提供する`;
  if (set.verb === "meet") return `${objectJa}を満たす`;
  if (set.verb === "pay") return `${objectJa}を払う`;
  if (set.verb === "set") return `${objectJa}を設定する`;
  if (set.verb === "reach") return `${objectJa}に達する`;
  if (set.verb === "raise") return `${objectJa}を上げる`;

  return `${objectJa}を${set.verbJa}`;
}

function makeVerbQuestions() {
  return VERB_SETS.flatMap((set) => set.objects.map(([object, objectJa]) => {
    const answer = `${set.verb} ${object}`;
    const jaPrompt = verbPrompt(set, answer, objectJa);
    return {
      id: `v-${slug(answer)}`,
      category: set.category,
      jaPrompt,
      answer,
      distractors: uniqueDistractors(answer, set.badVerbs.map((verb) => `${verb} ${object}`)),
      explanationJa: `${object} は ${set.verb} と結びつくと「${jaPrompt}」という自然な英語になります。動詞を入れ替えると不自然になりやすいので、${answer} を塊で覚えます。`,
      sourceRefs: ["Codex-generated from learner collocation patterns", "ACL/COCA/SKELL reference check"]
    };
  }));
}

function makeAdjectiveQuestions() {
  return ADJECTIVE_SETS.flatMap((set) => set.nouns.map(([noun, nounJa]) => {
    const answer = `${set.adj} ${noun}`;
    const jaPrompt = `${set.jaAdj}${nounJa}`;
    return {
      id: `adj-${slug(answer)}`,
      category: set.category,
      jaPrompt,
      answer,
      distractors: uniqueDistractors(answer, set.wrongAdjs.map((adj) => `${adj} ${noun}`)),
      explanationJa: `${noun} は ${set.adj} と組み合わせると「${jaPrompt}」を表しやすいです。日本語の「強い・大きい」に引っ張られず、${answer} をまとまりで覚えます。`,
      sourceRefs: ["Codex-generated from learner collocation patterns", "ACL/COCA/SKELL reference check"]
    };
  }));
}

function makeAdverbQuestions() {
  return ADVERB_SETS.flatMap((set) => set.words.map(([word, wordJa]) => {
    const answer = `${set.adv} ${word}`;
    const jaPrompt = `${set.jaAdv}${wordJa}`;
    return {
      id: `adv-${slug(answer)}`,
      category: set.category,
      jaPrompt,
      answer,
      distractors: uniqueDistractors(answer, set.wrongAdvs.map((adv) => `${adv} ${word}`)),
      explanationJa: `${word} を強める表現として ${set.adv} が自然です。副詞と形容詞・動詞の相性を、${answer} というチャンクで覚えます。`,
      sourceRefs: ["Codex-generated from learner collocation patterns", "ACL/COCA/SKELL reference check"]
    };
  }));
}

function makePhraseQuestions() {
  const prep = PREPOSITIONAL_CHUNKS.map(([answer, jaPrompt, distractors]) => ({
    id: `prep-${slug(answer)}`,
    category: "Prepositional Chunk",
    jaPrompt,
    answer,
    distractors,
    explanationJa: `${answer} は「${jaPrompt}」を表す定型チャンクです。前置詞を少し変えるだけで不自然になりやすいので、語順ごと覚えます。`,
    sourceRefs: ["Codex-generated from learner chunk patterns", "COCA/SKELL reference check"]
  }));

  const phrasal = PHRASAL_CHUNKS.map(([answer, jaPrompt, distractors]) => ({
    id: `phrasal-${slug(answer)}`,
    category: "Phrasal Verb",
    jaPrompt,
    answer,
    distractors,
    explanationJa: `${answer} は「${jaPrompt}」を表す句動詞・定型表現です。動詞と前置詞・副詞を分けずに一つの意味の塊として覚えます。`,
    sourceRefs: ["Codex-generated from learner chunk patterns", "COCA/SKELL reference check"]
  }));

  return [...prep, ...phrasal];
}

const BASE_QUESTION_ANSWERS = new Set(BASE_QUESTIONS.map((question) => question.answer));
const withoutBaseDuplicates = (questions) => questions.filter((question) => !BASE_QUESTION_ANSWERS.has(question.answer));
const GENERATED_QUESTIONS = [
  ...withoutBaseDuplicates(makeVerbQuestions()).slice(0, 160),
  ...withoutBaseDuplicates(makeAdjectiveQuestions()).slice(0, 160),
  ...withoutBaseDuplicates(makeAdverbQuestions()).slice(0, 70),
  ...withoutBaseDuplicates(makePhraseQuestions()).slice(0, 110)
];

const QUESTIONS = [...BASE_QUESTIONS, ...GENERATED_QUESTIONS];
