// HIGHSCORE PAGE

const username = document.getElementById('username');
const saveScoreBtn = document.getElementById('saveScoreBtn');
const finalScore = document.getElementById('finalScore');
const mostRecentScore = localStorage.getItem('mostRecentScore');

localStorage.setItem("highScores", JSON.stringify([]));
console.log(JSON.parse(localStorage.getItem("highScores")));
finalScore.innerText = mostRecentScore;



username.addEventListener('keyup', () => {
  saveScoreBtn.disabled = !username.value;
});



saveHighScore = e => {
  console.log("Clicked the save button!");
  e.preventDefault();
};