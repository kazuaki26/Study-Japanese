// ゲームの問題を定義
const questions = [
    { question: "What does 'ねこ (neko)' mean?", options: ["Cat", "Dog", "Fish"], answer: "Cat" },
    { question: "What does 'いぬ (inu)' mean?", options: ["Dog", "Bird", "Rabbit"], answer: "Dog" },
    { question: "What does 'さかな (sakana)' mean?", options: ["Fish", "Horse", "Cow"], answer: "Fish" },
    { question: "What does 'ありがとう (arigatou)' mean?", options: ["Thank you", "Hello", "Goodbye"], answer: "Thank you" },
    { question: "What does 'すし (sushi)' mean?", options: ["Sushi", "Pizza", "Burger"], answer: "Sushi" },
    { question: "What does 'くるま (kuruma)' mean?", options: ["Car", "Train", "Bicycle"], answer: "Car" },
    { question: "What does 'はし (hashi)' mean?", options: ["Bridge", "Chopsticks", "Both"], answer: "Both" },
    { question: "What does 'みず (mizu)' mean?", options: ["Water", "Juice", "Tea"], answer: "Water" },
    { question: "What does 'おちゃ (ocha)' mean?", options: ["Tea", "Coffee", "Milk"], answer: "Tea" },
    { question: "What does 'でんしゃ (densha)' mean?", options: ["Train", "Plane", "Boat"], answer: "Train" },
    { question: "What does 'ひこうき (hikouki)' mean?", options: ["Airplane", "Car", "Boat"], answer: "Airplane" },
    { question: "What does 'やま (yama)' mean?", options: ["Mountain", "River", "Lake"], answer: "Mountain" },
    { question: "What does 'かわ (kawa)' mean?", options: ["River", "Ocean", "Tree"], answer: "River" },
    { question: "What does 'もり (mori)' mean?", options: ["Forest", "Field", "Sky"], answer: "Forest" },
    { question: "What does 'そら (sora)' mean?", options: ["Sky", "Sun", "Cloud"], answer: "Sky" }
  ];
  
 
let currentQuestionIndex = 0;
let score = 0;
let lives = 3; // 残りのライフ

function startGame() {
  currentQuestionIndex = 0;
  score = 0;
  lives = 3;
  document.getElementById("score-section").classList.add("hidden");
  document.getElementById("game-section").classList.remove("hidden");
  updateLivesDisplay();
  nextQuestion();
}

function updateLivesDisplay() {
  document.getElementById("feedback").textContent = `Lives: ${lives} | Score: ${score}`;
}

function nextQuestion() {
  if (currentQuestionIndex >= questions.length || lives <= 0) {
    endGame();
    return;
  }

  const currentQuestion = questions[currentQuestionIndex];
  document.getElementById("question").textContent = currentQuestion.question;

  const optionsDiv = document.getElementById("options");
  optionsDiv.innerHTML = ""; // 過去の選択肢をクリア
  currentQuestion.options.forEach(option => {
    const button = document.createElement("button");
    button.textContent = option;
    button.onclick = () => checkAnswer(option, button);
    optionsDiv.appendChild(button);
  });

  document.getElementById("feedback").textContent = `Lives: ${lives} | Score: ${score}`;
}

function checkAnswer(selectedOption, button) {
  const currentQuestion = questions[currentQuestionIndex];

  if (selectedOption === currentQuestion.answer) {
    score++;
    document.getElementById("feedback").textContent = "Correct! 🎉";
    document.getElementById("feedback").style.color = "green";

    // 正解アニメーション
    button.classList.add("correct-animation");

    // 1秒後に次の問題へ
    setTimeout(() => {
      currentQuestionIndex++;
      nextQuestion();
    }, 1000);
  } else {
    lives--;
    document.getElementById("feedback").textContent = `Wrong! The correct answer is "${currentQuestion.answer}". 😅`;
    document.getElementById("feedback").style.color = "red";
    updateLivesDisplay();

    if (lives <= 0) {
      endGame();
    }
  }
}

function endGame() {
  document.getElementById("game-section").classList.add("hidden");
  document.getElementById("score-section").classList.remove("hidden");

  if (lives > 0) {
    document.getElementById("final-score").textContent = `You finished the game! Final score: ${score}/${questions.length}.`;
  } else {
    document.getElementById("final-score").textContent = `Game Over! Final score: ${score}/${questions.length}.`;
  }
}

// ゲーム開始
startGame();