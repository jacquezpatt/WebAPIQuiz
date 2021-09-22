var startButton = document.getElementById("startButton");
var Q1 = document.querySelector("#Q1");
var Q2 = document.querySelector("#Q2");
var Q3 = document.querySelector("#Q3");
var Q4 = document.querySelector("#Q4");
var Q5 = document.querySelector("#Q5");
var cursor = 2
var questions = [Q1, Q2, Q3, Q4, Q5];
console.log(questions)


startButton.addEventListener("click", function () {
    questions[cursor].setAttribute("style", "display: block")
    startButton.setAttribute("style", "display: none")
});


