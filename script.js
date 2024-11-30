const allQuestions = {
  easy: [
    { question: "What does 'ねこ (neko)' mean?", options: ["Cat", "Dog", "Fish"], answer: "Cat", explanation: "ねこ (neko) means 'cat' in Japanese." },
    { question: "What does 'いぬ (inu)' mean?", options: ["Dog", "Bird", "Fish"], answer: "Dog", explanation: "いぬ (inu) means 'dog' in Japanese." },
    { question: "What does 'さかな (sakana)' mean?", options: ["Fish", "Horse", "Rabbit"], answer: "Fish", explanation: "さかな (sakana) means 'fish' in Japanese." },
    { question: "What does 'うみ (umi)' mean?", options: ["Sea", "Mountain", "River"], answer: "Sea", explanation: "うみ (umi) means 'sea' in Japanese." },
    { question: "What does 'そら (sora)' mean?", options: ["Sky", "Ground", "Water"], answer: "Sky", explanation: "そら (sora) means 'sky' in Japanese." },
    { question: "What does 'くるま (kuruma)' mean?", options: ["Car", "Bike", "Bus"], answer: "Car", explanation: "くるま (kuruma) means 'car' in Japanese." },
    { question: "What does 'いちご (ichigo)' mean?", options: ["Strawberry", "Apple", "Orange"], answer: "Strawberry", explanation: "いちご (ichigo) means 'strawberry' in Japanese." },
    { question: "What does 'とり (tori)' mean?", options: ["Bird", "Fish", "Cat"], answer: "Bird", explanation: "とり (tori) means 'bird' in Japanese." },
    { question: "What does 'ほん (hon)' mean?", options: ["Book", "Pen", "Paper"], answer: "Book", explanation: "ほん (hon) means 'book' in Japanese." },
    { question: "What does 'おみやげ (omiyage)' mean?", options: ["Souvenir", "Gift", "Food"], answer: "Souvenir", explanation: "おみやげ (omiyage) means 'souvenir' in Japanese." },
    { question: "What does 'あさ (asa)' mean?", options: ["Morning", "Night", "Afternoon"], answer: "Morning", explanation: "あさ (asa) means 'morning' in Japanese." },
    { question: "What does 'やま (yama)' mean?", options: ["Mountain", "River", "Lake"], answer: "Mountain", explanation: "やま (yama) means 'mountain' in Japanese." },
    { question: "What does 'かわ (kawa)' mean?", options: ["River", "Mountain", "Sea"], answer: "River", explanation: "かわ (kawa) means 'river' in Japanese." },
    { question: "What does 'なつ (natsu)' mean?", options: ["Summer", "Winter", "Spring"], answer: "Summer", explanation: "なつ (natsu) means 'summer' in Japanese." },
    { question: "What does 'ふゆ (fuyu)' mean?", options: ["Winter", "Autumn", "Spring"], answer: "Winter", explanation: "ふゆ (fuyu) means 'winter' in Japanese." },
    { question: "What does 'あたま (atama)' mean?", options: ["Head", "Hand", "Foot"], answer: "Head", explanation: "あたま (atama) means 'head' in Japanese." },
    { question: "What does 'て (te)' mean?", options: ["Hand", "Leg", "Head"], answer: "Hand", explanation: "て (te) means 'hand' in Japanese." },
    { question: "What does 'あし (ashi)' mean?", options: ["Leg", "Head", "Hand"], answer: "Leg", explanation: "あし (ashi) means 'leg' in Japanese." },
    { question: "What does 'みず (mizu)' mean?", options: ["Water", "Tea", "Coffee"], answer: "Water", explanation: "みず (mizu) means 'water' in Japanese." },
    { question: "What does 'ジュース (juusu)' mean?", options: ["Juice", "Tea", "Water"], answer: "Juice", explanation: "ジュース (juusu) means 'juice' in Japanese." }
  ],
  medium: [
    { question: "What does 'ありがとう (arigatou)' mean?", options: ["Thank you", "Goodbye", "Sorry"], answer: "Thank you", explanation: "ありがとう (arigatou) means 'thank you' in Japanese." },
    { question: "What does 'おはよう (ohayou)' mean?", options: ["Good morning", "Good night", "Hello"], answer: "Good morning", explanation: "おはよう (ohayou) means 'good morning' in Japanese." },
    { question: "What does 'すみません (sumimasen)' mean?", options: ["Excuse me", "Thank you", "Please"], answer: "Excuse me", explanation: "すみません (sumimasen) means 'excuse me' in Japanese." },
    { question: "What does 'さようなら (sayounara)' mean?", options: ["Goodbye", "Hello", "Thank you"], answer: "Goodbye", explanation: "さようなら (sayounara) means 'goodbye' in Japanese." },
    { question: "What does 'こんにちは (konnichiwa)' mean?", options: ["Hello", "Good morning", "Good evening"], answer: "Hello", explanation: "こんにちは (konnichiwa) means 'hello' in Japanese." },
    { question: "What does 'おやすみなさい (oyasuminasai)' mean?", options: ["Good night", "Good morning", "Goodbye"], answer: "Good night", explanation: "おやすみなさい (oyasuminasai) means 'good night' in Japanese." },
    { question: "What does 'わかりました (wakarimashita)' mean?", options: ["I understand", "I don't understand", "Excuse me"], answer: "I understand", explanation: "わかりました (wakarimashita) means 'I understand' in Japanese." },
    { question: "What does 'いいえ (iie)' mean?", options: ["No", "Yes", "Please"], answer: "No", explanation: "いいえ (iie) means 'no' in Japanese." },
    { question: "What does 'はい (hai)' mean?", options: ["Yes", "No", "Maybe"], answer: "Yes", explanation: "はい (hai) means 'yes' in Japanese." },
    { question: "What does 'どうぞ (douzo)' mean?", options: ["Please", "Thank you", "Sorry"], answer: "Please", explanation: "どうぞ (douzo) means 'please' in Japanese." },
    { question: "What does 'すごい (sugoi)' mean?", options: ["Amazing", "Good", "Bad"], answer: "Amazing", explanation: "すごい (sugoi) means 'amazing' in Japanese." },
    { question: "What does 'たのしい (tanoshii)' mean?", options: ["Fun", "Sad", "Boring"], answer: "Fun", explanation: "たのしい (tanoshii) means 'fun' in Japanese." },
    { question: "What does 'おいしい (oishii)' mean?", options: ["Delicious", "Bad", "Bitter"], answer: "Delicious", explanation: "おいしい (oishii) means 'delicious' in Japanese." },
    { question: "What does 'きれい (kirei)' mean?", options: ["Beautiful", "Ugly", "Bright"], answer: "Beautiful", explanation: "きれい (kirei) means 'beautiful' in Japanese." },
    { question: "What does 'たかい (takai)' mean?", options: ["Expensive", "Cheap", "Tall"], answer: "Expensive", explanation: "たかい (takai) means 'expensive' in Japanese." },
    { question: "What does 'やさしい (yasashii)' mean?", options: ["Kind", "Angry", "Quiet"], answer: "Kind", explanation: "やさしい (yasashii) means 'kind' in Japanese." },
    { question: "What does 'あたたかい (atatakai)' mean?", options: ["Warm", "Cold", "Hot"], answer: "Warm", explanation: "あたたかい (atatakai) means 'warm' in Japanese." },
    { question: "What does 'わるい (warui)' mean?", options: ["Bad", "Good", "Neutral"], answer: "Bad", explanation: "わるい (warui) means 'bad' in Japanese." },
    { question: "What does 'うるさい (urusai)' mean?", options: ["Noisy", "Quiet", "Loud"], answer: "Noisy", explanation: "うるさい (urusai) means 'noisy' in Japanese." }
  ],
  hard: [
    { question: "What does '理解 (rikai)' mean?", options: ["Understanding", "Learning", "Teaching"], answer: "Understanding", explanation: "理解 (rikai) means 'understanding' in Japanese." },
    { question: "What does '情熱 (jounetsu)' mean?", options: ["Passion", "Peace", "Success"], answer: "Passion", explanation: "情熱 (jounetsu) means 'passion' in Japanese." },
    { question: "What does '挑戦 (chousen)' mean?", options: ["Challenge", "Victory", "Defeat"], answer: "Challenge", explanation: "挑戦 (chousen) means 'challenge' in Japanese." },
    { question: "What does '改革 (kaizen)' mean?", options: ["Reform", "Action", "Change"], answer: "Reform", explanation: "改革 (kaizen) means 'reform' in Japanese." },
    { question: "What does '成功 (seikou)' mean?", options: ["Success", "Failure", "Struggle"], answer: "Success", explanation: "成功 (seikou) means 'success' in Japanese." },
    { question: "What does '未来 (mirai)' mean?", options: ["Future", "Past", "Present"], answer: "Future", explanation: "未来 (mirai) means 'future' in Japanese." },
    { question: "What does '勝利 (shouri)' mean?", options: ["Victory", "Defeat", "Peace"], answer: "Victory", explanation: "勝利 (shouri) means 'victory' in Japanese." },
    { question: "What does '探求 (tankyu)' mean?", options: ["Inquiry", "Journey", "Travel"], answer: "Inquiry", explanation: "探求 (tankyu) means 'inquiry' in Japanese." },
    { question: "What does '自信 (jishin)' mean?", options: ["Confidence", "Fear", "Anger"], answer: "Confidence", explanation: "自信 (jishin) means 'confidence' in Japanese." },
    { question: "What does '挑戦 (chousen)' mean?", options: ["Challenge", "Success", "Loss"], answer: "Challenge", explanation: "挑戦 (chousen) means 'challenge' in Japanese." },
    { question: "What does '積極的 (sekkyokuteki)' mean?", options: ["Positive", "Negative", "Lazy"], answer: "Positive", explanation: "積極的 (sekkyokuteki) means 'positive' in Japanese." },
    { question: "What does '冷静 (reisei)' mean?", options: ["Calm", "Nervous", "Angry"], answer: "Calm", explanation: "冷静 (reisei) means 'calm' in Japanese." },
    { question: "What does '全力 (zenryoku)' mean?", options: ["Full effort", "Lack of effort", "Moderate effort"], answer: "Full effort", explanation: "全力 (zenryoku) means 'full effort' in Japanese." },
    { question: "What does '直感 (chokkan)' mean?", options: ["Intuition", "Logic", "Memory"], answer: "Intuition", explanation: "直感 (chokkan) means 'intuition' in Japanese." },
    { question: "What does '価値 (kachi)' mean?", options: ["Value", "Cost", "Price"], answer: "Value", explanation: "価値 (kachi) means 'value' in Japanese." },
    { question: "What does '独立 (dokuritsu)' mean?", options: ["Independence", "Dependence", "Connection"], answer: "Independence", explanation: "独立 (dokuritsu) means 'independence' in Japanese." },
    { question: "What does '理解 (rikai)' mean?", options: ["Understanding", "Mistake", "Question"], answer: "Understanding", explanation: "理解 (rikai) means 'understanding' in Japanese." },
    { question: "What does '実行 (jikkou)' mean?", options: ["Execution", "Idea", "Plan"], answer: "Execution", explanation: "実行 (jikkou) means 'execution' in Japanese." },
    { question: "What does '反応 (hannou)' mean?", options: ["Reaction", "Action", "Thought"], answer: "Reaction", explanation: "反応 (hannou) means 'reaction' in Japanese." }
  ],
  anime: [
    { question: "What does 'ナルト (Naruto)' mean?", options: ["Naruto", "Sasuke", "Sakura"], answer: "Naruto", explanation: "ナルト (Naruto) is the main character of the anime 'Naruto'." },
    { question: "What does 'ドラゴンボール (Dragon Ball)' mean?", options: ["Dragon Ball", "One Piece", "Bleach"], answer: "Dragon Ball", explanation: "ドラゴンボール (Dragon Ball) is a popular anime series." },
    { question: "What does '進撃の巨人 (Shingeki no Kyojin)' mean?", options: ["Attack on Titan", "One Punch Man", "My Hero Academia"], answer: "Attack on Titan", explanation: "進撃の巨人 (Shingeki no Kyojin) means 'Attack on Titan' in Japanese." },
    { question: "What does 'ワンピース (One Piece)' mean?", options: ["One Piece", "Naruto", "Dragon Ball"], answer: "One Piece", explanation: "ワンピース (One Piece) is a popular anime series." },
    { question: "What does 'デスノート (Death Note)' mean?", options: ["Death Note", "Bleach", "Naruto"], answer: "Death Note", explanation: "デスノート (Death Note) is a popular anime series." },
    { question: "What does '鋼の錬金術師 (Hagane no Renkinjutsushi)' mean?", options: ["Fullmetal Alchemist", "Naruto", "One Piece"], answer: "Fullmetal Alchemist", explanation: "鋼の錬金術師 (Hagane no Renkinjutsushi) means 'Fullmetal Alchemist' in Japanese." },
    { question: "What does '僕のヒーローアカデミア (Boku no Hero Academia)' mean?", options: ["My Hero Academia", "Attack on Titan", "One Punch Man"], answer: "My Hero Academia", explanation: "僕のヒーローアカデミア (Boku no Hero Academia) means 'My Hero Academia' in Japanese." },
    { question: "What does 'ワンパンマン (One Punch Man)' mean?", options: ["One Punch Man", "Naruto", "Dragon Ball"], answer: "One Punch Man", explanation: "ワンパンマン (One Punch Man) is a popular anime series." },
    { question: "What does '東京喰種 (Tokyo Ghoul)' mean?", options: ["Tokyo Ghoul", "Naruto", "One Piece"], answer: "Tokyo Ghoul", explanation: "東京喰種 (Tokyo Ghoul) is a popular anime series." },
    { question: "What does 'ハンターハンター (Hunter x Hunter)' mean?", options: ["Hunter x Hunter", "Naruto", "Dragon Ball"], answer: "Hunter x Hunter", explanation: "ハンターハンター (Hunter x Hunter) is a popular anime series." }
  ],
  advanced: [
    { question: "What does '哲学 (tetsugaku)' mean?", options: ["Philosophy", "Science", "Art"], answer: "Philosophy", explanation: "哲学 (tetsugaku) means 'philosophy' in Japanese." },
    { question: "What does '経済 (keizai)' mean?", options: ["Economy", "Politics", "Society"], answer: "Economy", explanation: "経済 (keizai) means 'economy' in Japanese." },
    { question: "What does '文化 (bunka)' mean?", options: ["Culture", "Tradition", "Custom"], answer: "Culture", explanation: "文化 (bunka) means 'culture' in Japanese." },
    { question: "What does '歴史 (rekishi)' mean?", options: ["History", "Geography", "Literature"], answer: "History", explanation: "歴史 (rekishi) means 'history' in Japanese." },
    { question: "What does '技術 (gijutsu)' mean?", options: ["Technology", "Art", "Skill"], answer: "Technology", explanation: "技術 (gijutsu) means 'technology' in Japanese." },
    { question: "What does '科学 (kagaku)' mean?", options: ["Science", "Math", "Physics"], answer: "Science", explanation: "科学 (kagaku) means 'science' in Japanese." },
    { question: "What does '教育 (kyoiku)' mean?", options: ["Education", "Learning", "Teaching"], answer: "Education", explanation: "教育 (kyoiku) means 'education' in Japanese." },
    { question: "What does '政治 (seiji)' mean?", options: ["Politics", "Economy", "Society"], answer: "Politics", explanation: "政治 (seiji) means 'politics' in Japanese." },
    { question: "What does '社会 (shakai)' mean?", options: ["Society", "Community", "Culture"], answer: "Society", explanation: "社会 (shakai) means 'society' in Japanese." },
    { question: "What does '文学 (bungaku)' mean?", options: ["Literature", "History", "Art"], answer: "Literature", explanation: "文学 (bungaku) means 'literature' in Japanese." }
  ],
  ITWords: [
    { question: "What does 'プログラミング (puroguramingu)' mean?", options: ["Programming", "Debugging", "Compiling"], answer: "Programming", explanation: "プログラミング (puroguramingu) means 'programming' in Japanese." },
    { question: "What does 'デバッグ (debaggu)' mean?", options: ["Debugging", "Programming", "Testing"], answer: "Debugging", explanation: "デバッグ (debaggu) means 'debugging' in Japanese." },
    { question: "What does 'コンパイル (konpairu)' mean?", options: ["Compiling", "Executing", "Linking"], answer: "Compiling", explanation: "コンパイル (konpairu) means 'compiling' in Japanese." },
    { question: "What does 'アルゴリズム (arugorizumu)' mean?", options: ["Algorithm", "Data Structure", "Function"], answer: "Algorithm", explanation: "アルゴリズム (arugorizumu) means 'algorithm' in Japanese." },
    { question: "What does 'データベース (deetabeesu)' mean?", options: ["Database", "Server", "Client"], answer: "Database", explanation: "データベース (deetabeesu) means 'database' in Japanese." },
    { question: "What does 'サーバー (saabaa)' mean?", options: ["Server", "Client", "Network"], answer: "Server", explanation: "サーバー (saabaa) means 'server' in Japanese." },
    { question: "What does 'クライアント (kuraianto)' mean?", options: ["Client", "Server", "Database"], answer: "Client", explanation: "クライアント (kuraianto) means 'client' in Japanese." },
    { question: "What does 'ネットワーク (nettowaaku)' mean?", options: ["Network", "Internet", "Protocol"], answer: "Network", explanation: "ネットワーク (nettowaaku) means 'network' in Japanese." },
    { question: "What does 'プロトコル (purotokoru)' mean?", options: ["Protocol", "Network", "Server"], answer: "Protocol", explanation: "プロトコル (purotokoru) means 'protocol' in Japanese." },
    { question: "What does 'クラウド (kuraudo)' mean?", options: ["Cloud", "Server", "Database"], answer: "Cloud", explanation: "クラウド (kuraudo) means 'cloud' in Japanese." },
    { question: "What does 'セキュリティ (sekyuriti)' mean?", options: ["Security", "Privacy", "Safety"], answer: "Security", explanation: "セキュリティ (sekyuriti) means 'security' in Japanese." },
    { question: "What does 'プライバシー (puraibashii)' mean?", options: ["Privacy", "Security", "Confidentiality"], answer: "Privacy", explanation: "プライバシー (puraibashii) means 'privacy' in Japanese." },
    { question: "What does 'エンクリプション (enkuripushon)' mean?", options: ["Encryption", "Decryption", "Encoding"], answer: "Encryption", explanation: "エンクリプション (enkuripushon) means 'encryption' in Japanese." },
    { question: "What does 'データ (deeta)' mean?", options: ["Data", "Information", "File"], answer: "Data", explanation: "データ (deeta) means 'data' in Japanese." },
    { question: "What does 'ファイル (fairu)' mean?", options: ["File", "Folder", "Document"], answer: "File", explanation: "ファイル (fairu) means 'file' in Japanese." },
    { question: "What does 'フォルダー (forudaa)' mean?", options: ["Folder", "File", "Directory"], answer: "Folder", explanation: "フォルダー (forudaa) means 'folder' in Japanese." },
    { question: "What does 'ディレクトリ (direkutori)' mean?", options: ["Directory", "Folder", "File"], answer: "Directory", explanation: "ディレクトリ (direkutori) means 'directory' in Japanese." },
    { question: "What does 'オペレーティングシステム (opereetingu shisutemu)' mean?", options: ["Operating System", "Application", "Software"], answer: "Operating System", explanation: "オペレーティングシステム (opereetingu shisutemu) means 'operating system' in Japanese." },
    { question: "What does 'ソフトウェア (sofutowea)' mean?", options: ["Software", "Hardware", "Firmware"], answer: "Software", explanation: "ソフトウェア (sofutowea) means 'software' in Japanese." },
    { question: "What does 'ハードウェア (haadowea)' mean?", options: ["Hardware", "Software", "Firmware"], answer: "Hardware", explanation: "ハードウェア (haadowea) means 'hardware' in Japanese." }
  ]
};


let currentLevel = '';
let currentQuestionIndex = 0;
let score = 0;
let lives = 3;
let totalQuestions = 0;

function selectDifficulty(level) {
  currentLevel = level;
  document.getElementById("level-selection").classList.add("hidden");
  document.getElementById("question-selection").classList.remove("hidden");
}

function startGame(numQuestions) {
  totalQuestions = numQuestions;
  currentQuestionIndex = 0;
  score = 0;
  lives = 3;
  document.getElementById("question-selection").classList.add("hidden");
  document.getElementById("game-section").classList.remove("hidden");
  document.getElementById("next-button").classList.add("hidden");
  updateLivesDisplay();
  nextQuestion();
}

function updateLivesDisplay() {
  document.getElementById("feedback").textContent = `Lives: ${lives} | Score: ${score}`;
  updateProgressBar();
}

function updateProgressBar() {
  const progress = (currentQuestionIndex / totalQuestions) * 100;
  document.getElementById("progress-bar").style.width = `${progress}%`;
}

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function nextQuestion() {
  if (currentQuestionIndex >= totalQuestions || lives <= 0) {
    endGame();
    return;
  }

  // 質問リストをシャッフル
  shuffle(allQuestions[currentLevel]);

  const currentQuestion = allQuestions[currentLevel][currentQuestionIndex];
  document.getElementById("question").textContent = currentQuestion.question;

  const optionsDiv = document.getElementById("options");
  optionsDiv.innerHTML = "";
  currentQuestion.options.forEach(option => {
    const button = document.createElement("button");
    button.textContent = option;
    button.onclick = () => checkAnswer(option, button);
    optionsDiv.appendChild(button);
  });

  updateLivesDisplay();
  document.getElementById("explanation").classList.add("hidden");
  document.getElementById("next-button").classList.add("hidden");
}

function checkAnswer(selectedOption, button) {
  const currentQuestion = allQuestions[currentLevel][currentQuestionIndex];

  if (selectedOption === currentQuestion.answer) {
    score++;
    document.getElementById("feedback").textContent = "Correct! 🎉";
    document.getElementById("feedback").style.color = "green";
    button.classList.add("correct-animation");
    setTimeout(() => {
      currentQuestionIndex++;
      nextQuestion();
    }, 1000);
  } else {
    lives--;
    document.getElementById("feedback").textContent = `Oops! The correct answer was: ${currentQuestion.answer}`;
    document.getElementById("feedback").style.color = "red";
    showExplanation(currentQuestion.explanation);
  }
}

function showExplanation(explanation) {
  document.getElementById("explanation").textContent = explanation;
  document.getElementById("explanation").classList.remove("hidden");

  setTimeout(() => {
    document.getElementById("next-button").classList.remove("hidden");
  }, 5000);
}

function endGame() {
  document.getElementById("game-section").classList.add("hidden");
  document.getElementById("score-section").classList.remove("hidden");
  document.getElementById("final-score").textContent = `Great job! You scored: ${score}`;
}