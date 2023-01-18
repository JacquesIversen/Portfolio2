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
    question: "Inside which HTML element do we put the JavaScript??",
    choice1: "<script>",
    choice2: "<javascript>",
    choice3: "<js>",
    choice4: "<scripting>",
    answer: 1
  },
  {
    question:
      "What is the correct syntax for referring to an external script called 'xxx.js'?",
    choice1: "<script href='xxx.js'>",
    choice2: "<script name='xxx.js'>",
    choice3: "<script src='xxx.js'>",
    choice4: "<script file='xxx.js'>",
    answer: 3
  },
  {
    question: " How do you write 'Hello World' in an alert box?",
    choice1: "msgBox('Hello World');",
    choice2: "alertBox('Hello World');",
    choice3: "msg('Hello World');",
    choice4: "alert('Hello World');",
    answer: 4
  }
];
/*
const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));
const progressText = document.getElementById("progressText");
const scoreText = document.getElementById("score");
const progressBarFull = document.getElementById("progressbarFull");

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
    }
];

// Fetch API! 

fetch("https://opentdb.com/api.php?amount=5&category=21&difficulty=easy&type=multiple")

.then(res => {
    return res.json();
})

.then(loadedQuestions => {
    console.log(loadedQuestions);
    //questions = loadedQuestions;
    //startGame();
});

.catch (err => {
    console.error(err);
});


// Point system
const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 3;

startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    getNewQuestion();
};

Egen kode
getNewQuestion = () => {

    if (availableQuestions.length === 0 || questionCounter >= MAX_QUESTIONS){
        localStorage.setItem('mostRecentScore', score);
        // END PAGE
        return window.location.assign("/highscore.html");
    }
    questionCounter++;
    progressText.innerText = `Question${questionCounter}/${MAX_QUESTIONS}`;

    // Progress bar 

    progressBarFull.style.width = '${(questionCounter / MAX_QUESTIONS) * 100}%';

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
*/

//CONSTANTS
const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 3;

startGame = () => {
  questionCounter = 0;
  score = 0;
  availableQuesions = [...questions];
  getNewQuestion();
};


getNewQuestion = () => {
    if (availableQuesions.length === 0 || questionCounter >= MAX_QUESTIONS) {
      //go to the end page
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
/*
    choices.forEach(choice => {
        choice.addEventListener("click", e => {
            if(!acceptingAnswers) return;
            acceptingAnswers = false;
            const selectedChoice = e.target;
            const selectedAnswer = selectedChoice.dataset["number"];

            const classToApply =
      selectedAnswer == currentQuestion.answer ? "correct" : "incorrect";

    if (classToApply === 'correct') {
      incrementScore(CORRECT_BONUS);
    }


            selectedChoice.parentElement.classlist.add(classToApply);
            
            setTimeout(() => {
            selectedChoice.parentElement.classlist.remove(classToApply);
            getNewQuestion();
            }, 1000);
        }); 

    });

    incrementScore = num => {
        score += num;
        scoreText.innerText = score;
    };
    */

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

/*
     Highscore Page

    const username = document.getElementById("username");
    const saveScoreBtn = document.getElementById("saveScoreBtn");
    const mostRecentScore = localStorage.getItem("mostRecentScore");
    const finalScore = document.getElementById("finalScore");
    const highScores = JSON.parse(localStorage.getItem("highScores")) || [];
    const MAX_HIGH_SCORES = 10;


    finalScore.innerText = mostRecentScore;


    // Blocks the user from submitting without an username
    username.addEventListener("keyup", () => {
        saveScoreBtn.disabled = !username.value;
    });

    saveHighScore = e => {
        console.log("clicked the save button!");
        e.preventDefault();

        const score = {
            score = Math.floor(Math.random() * 100),
            name: username.value
        };

        highScores.push(score);
        highScores.sort( (a,b) => b.score - a.score;)
        highScores.splice(5);

        localStorage.setItem("highScores", JSON.stringify(highScores));
        window.location.assign("/")
    };

    // HighScore table HTML in js. 

    const highScoresList = document.getElementById("highScoresList");
    const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

    highScoresList.innerHTML = 
    highScores.map(score => {
        return '<li class="high-score>${score.name} - $score.score}</li></li>';
    })
    .join("");
/*

