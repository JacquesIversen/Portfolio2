const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));
const progressText = document.getElementById("progressText");
const scoreText = document.getElementById("score");
const progressBarFull = document.getElementById("progressBarFull");

let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

let questions = [
  {
      question: "Who won the 2021 Formula 1 Drivers Championship",
      choice1: "Charles Leclerc",
      choice2: "Lewis Hamilton",
      choice3: "Nicolas Latifi",
      choice4: "Max Verstappen",
      answer: 2
  },
  {
      question: "Seriøst !? Det er da et lorte navn!",
      choice1: "lille møgko",
      choice2: "Store møgko",
      choice3: "Grimme møgko",
      choice4: "Store, Grimme lille møgko",
      answer: 1
  },
  {
      question: "Eller vent nu lige",
      choice1: "lille møgko",
      choice2: "Store møgko",
      choice3: "Grimme møgko",
      choice4: "Store, Grimme lille møgko",
      answer: 1        
  },
  {
      question: "Det faktisk OK!",
      choice1: "lille møgko",                
      choice2: "Store møgko",
      choice3: "Grimme møgko",
      choice4: "Store, Grimme lille møgko",
      answer: 1
  },
  {
    question: "Seriøst !? Det er da et lorte navn!",
    choice1: "lille møgko",
    choice2: "Store møgko",
    choice3: "Grimme møgko",
    choice4: "Store, Grimme lille møgko",
    answer: 1
},
{
    question: "Eller vent nu lige",
    choice1: "lille møgko",
    choice2: "Store møgko",
    choice3: "Grimme møgko",
    choice4: "Store, Grimme lille møgko",
    answer: 1        
},
{
    question: "Det faktisk OK!",
    choice1: "lille møgko",                
    choice2: "Store møgko",
    choice3: "Grimme møgko",
    choice4: "Store, Grimme lille møgko",
    answer: 1
},

];

// Point system
const CORRECT_BONUS = 1;
const MAX_QUESTIONS = 10;

startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    getNewQuestion();
};

getNewQuestion = () => {

  if (availableQuestions.length === 0 || questionCounter >= MAX_QUESTIONS) {
      // END PAGE
      return window.location.assign("/highscore.html");
  }
  questionCounter++;
  progressText.innerText = `Question ${questionCounter}/${MAX_QUESTIONS}`;

  // Progress bar 
  
  progressBarFull.style.width = `${(questionCounter / MAX_QUESTIONS) * 100}%`;

  const questionIndex = Math.floor(Math.random() * availableQuestions.length);
  currentQuestion = availableQuestions[questionIndex];
  question.innerText = currentQuestion.question;

  choices.forEach (choice => {
      const number = choice.dataset["number"];
      choice.innerText = currentQuestion["choice" + number];
  });

  availableQuestions.splice(questionIndex, 1);

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