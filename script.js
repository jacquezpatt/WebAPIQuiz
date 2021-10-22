var startBtn = document.getElementById("startButton");
var cursor = 0
var questions = document.querySelectorAll(".question");
var answer1 = document.querySelectorAll(".answer1");
var answer2 = document.querySelectorAll(".answer2");
var answer3 = document.querySelectorAll(".answer3");
var answer4 = document.querySelectorAll(".answer4");
var answer5 = document.querySelectorAll(".answer5");
var main = document.querySelector("main");
var score = 0
var scoreCard = document.querySelector(".scoreCard")
var scorePage = document.getElementById("scorePage")
var quiz = document.querySelector(".quiz")
var currentQ;


function next() {
    questions[cursor].setAttribute("style", "display: block")
};
document.addEventListener('click', (event) => {
    if (event.target.matches('button')) {
        if (cursor < questions.length) {
            next()
            cursor++;
        }
        else {
            scorePage.setAttribute("style", "display: block")
        }
    }
    if (correct) {
        score++;
        scoreCard.textContent = "Score: " + score
        console.log(score)
    } 
});




