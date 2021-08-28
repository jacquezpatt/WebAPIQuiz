var startButton = document.getElementById('start-btn')
var nextButton = document.getElementById('next-btn')
var questionContainerElement = document.getElementById('question-container')
var questionElement = document.getElementById('question')
var answerButtonsElement = document.getElementById('answer-buttons')
var GameScore = 0;






let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

function startGame() {
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}


var questions = [
  {
    question: 'What is an array?',
    answers: [
      { text: 'a satellite.', correct: false },
      { text: 'a global object which contains a list of items.', correct: true },
      { text: 'a pizza topping.', correct: false },
      { text: 'a type of sea creature.', correct: false }
    ]
  },
  {
    question: 'What is a variable?',
    answers: [
      { text: 'anything that can vary.', correct: true },
      { text: ' a symbol', correct: false },
      { text: 'an ice cream flavor.', correct: false },
      { text: 'a city in North Carolina.', correct: false }
    ]
  },
  {
    question: 'What is a DOM',
    answers: [
      { text: 'Vin Diesel', correct: false },
      { text: 'Document Object Model', correct: true },
      { text: 'Document Object Motel', correct: false },
      { text: 'Dominic Monaghan', correct: false }
    ]
  },
  {
    question: 'When was javascript created?',
    answers: [
      { text: '1900', correct: false },
      { text: '2021', correct: false },
      { text: '2000', correct: false },
      { text: '1995', correct: true }
    ]
  },
  {
    question: 'Coding is ________ fun!!!',
    answers: [
      { text: 'very', correct: true },
      { text: 'super', correct: true },
      { text: 'hella', correct: true },
      { text: 'extremely', correct: true }
    ]
  }]




function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
      GameScore = GameScore + 1;
    }

    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}
