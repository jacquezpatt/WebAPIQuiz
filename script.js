var startButton = document.getElementById("startButton");
var Q1 = document.querySelector("#Q1");
var Q2 = document.querySelector("#Q2");
var Q3 = document.querySelector("#Q3");
var Q4 = document.querySelector("#Q4");
var Q5 = document.querySelector("#Q5");
var cursor = 0
var questions = [Q1, Q2, Q3, Q4, Q5];
var answer1 = document.querySelectorAll(".answer1");
var answer2 = document.querySelectorAll(".answer2");
var answer3 = document.querySelectorAll(".answer3");
var answer4 = document.querySelectorAll(".answer4");
var answer5 = document.querySelectorAll(".answer5");

startButton.addEventListener("click", function () {
    next()
    startButton.setAttribute("style", "display: none")
});

for (var i = 0; i < answer1.length; i++) {
    answer1[i].addEventListener("click", function () {
        showNext();
    });
}
for (var i = 0; i < answer2.length; i++) {
    answer2[i].addEventListener("click", showNext);
}

for (var i = 0; i < answer3.length; i++) {
    answer3[i].addEventListener("click", showNext);
}
for (var i = 0; i < answer4.length; i++) {
    answer4[i].addEventListener("click", showNext);
}

function showNext() {
    questions[cursor].setAttribute("style", "display: none")
    cursor++
    questions[cursor].setAttribute("style", "display: block")
};

function next() {
    questions[cursor].setAttribute("style", "display: block")

};