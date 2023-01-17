const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));
const progressText = document.getElementById("progressText");
const scoreText = document.getElementById("score");
const progressBarFull = document.getElementById("progressbarFull")

let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

let questions = [
    {
    question: "Hvad hedder din mor so?",
    choice1: "lille møgko",
    choice2: "Store møgko",
    choice3: "Grimme møgko",
    choice4: "Store, Grimme lille møgko",
    answer: 4
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

// Point system
const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 3;

startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    getNewQuestion();
};

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


    // Highscore Page

    const username = document.getElementById("username");
    const saveScoreBtn = document.getElementById("saveScoreBtn");
    const mostRecentScore = localStorage.getItem('mostRecentScore');

    username.addEventListener("keyup", () => {
        saveScoreBtn.disabled = !username.value;
    });

    saveHighScore = e => {
        console.log("clicked the save button!");
        e.preventDefault();
    }
