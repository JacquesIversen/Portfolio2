const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));
const progressText = document.getElementById("progressText");
const scoreText = document.getElementById("score");
const progressBarFull = document.getElementById("progressBarFull");

let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuesions = [];

let questions = [
  {
    question: "In what team did lewis hamilton optain his first F1 World championship?",
    choice1: "Mclaren",
    choice2: "Mercedes AMG",
    choice3: "Ferrari",
    choice4: "Force India",
    answer: 1
  },
  {
    question:
      "sebastian vettel is a beloved character, but when did he win his first f1 race?",
    choice1: "Italian GP 2008",
    choice2: "Abu Dhabi GP 2011",
    choice3: "Canada GP 2009",
    choice4: "US GP 2009",
    answer: 1
  },
  {
    question: "nico rosberg is known for being the only racedriver to ever beat lewis hamilton in equal machinery, but who replaced him?",
    choice1: "Robert Kubica",
    choice2: "Kevin Magnussen",
    choice3: "Valtteri Bottas",
    choice4: "George Russell",
    answer: 3
  },
  {
    question: "What is the fastest topspeed acheived in the hybrid era (<2014) ?",
    choice1: "397.36km/h (246.9mph)",
    choice2: "372.5km/h (231.4mph)",
    choice3: "351.7km/h (218.5mph)",
    choice4: "360.3km/h (223.2mph)",
    answer: 2
  },
  {
    question:
      "A grand prix race is aimed closest to what total racedistance?",
    choice1: "280 km",
    choice2: "290 km",
    choice3: "300 km",
    choice4: "340 km",
    answer: 3
  }
];

//GAME RULES
const CORRECT_BONUS = 1;
const MAX_QUESTIONS = 5;

startGame = () => {
  questionCounter = 0;
  score = 0;
  availableQuesions = [...questions];
  getNewQuestion();
};

getNewQuestion = () => {
  if (availableQuesions.length === 0 || questionCounter >= MAX_QUESTIONS) {
    localStorage.setItem("mostRecentScore", score);
    //END PAGE
    return window.location.assign("/end.html");
  }
  questionCounter++;
  progressText.innerText = `Question ${questionCounter}/${MAX_QUESTIONS}`;
  //Update the progress bar
  progressBarFull.style.width = `${(questionCounter / MAX_QUESTIONS) * 100}%`;

  const questionIndex = Math.floor(Math.random() * availableQuesions.length);
  currentQuestion = availableQuesions[questionIndex];
  question.innerText = currentQuestion.question;

  choices.forEach(choice => {
    const number = choice.dataset["number"];
    choice.innerText = currentQuestion["choice" + number];
  });

  availableQuesions.splice(questionIndex, 1);
  acceptingAnswers = true;
};

choices.forEach(choice => {
  choice.addEventListener("click", e => {
    if (!acceptingAnswers) return;

    acceptingAnswers = false;
    const selectedChoice = e.target;
    const selectedAnswer = selectedChoice.dataset["number"];

    const classToApply =
      selectedAnswer == currentQuestion.answer ? "correct" : "incorrect";

    if (classToApply === "correct") {
      incrementScore(CORRECT_BONUS);
    }

    selectedChoice.parentElement.classList.add(classToApply);

    setTimeout(() => {
      selectedChoice.parentElement.classList.remove(classToApply);
      getNewQuestion();
    }, 1000);
  });
});

incrementScore = num => {
  score += num;
  scoreText.innerText = score;
};

startGame();

