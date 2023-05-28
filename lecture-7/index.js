/* Assignment-1 */

const button = document.getElementById("button");
const div = document.getElementById("text");

button.addEventListener("click", () => {
    div.innerText = "";
})

/* Assignment-2 */

const div2 = document.createElement("div");
div2.id = "card";

const heading2 = document.createElement("h2");
heading2.textContent = "Gandalf"

const a = document.createElement("a");
a.href = "#";
a.textContent = "Go to profile";


div2.append(heading2, a);

const parDiv = document.getElementById("container-2");
parDiv.appendChild(div2);



/* Assignment-3 */

const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

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

const questions = [
  {
    question: 'საქართველოს დედაქალი?',
    answers: [
      { text: 'ზუგიდი', correct: false },
      { text: 'ქუთაისი', correct: false },
      { text: 'თბილისი', correct: true },
      { text: 'ბათუმი', correct: false }
    ]
  },
  {
    question: '10 - ის 10 % ?',
    answers: [
      { text: 1, correct: true },
      { text: 10, correct: false },
      { text: 100, correct: false },
      { text: 3, correct: false }
    ]
  },
  {
    question: 'რომელ წელს მოხდა დიდგორის ბრძოლა?',
    answers: [
      { text: 1900, correct: false },
      { text: 2020, correct: false },
      { text: 1121, correct: true },
      { text: 1434, correct: false }
    ]
  }
]

