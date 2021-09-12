var timeLeftEl = document.getElementById("timeLeft")
var showQuestions = document.querySelector('#questions')

var myQuestions = [
    {
        question: "inside which HTML element do we put the JavaScript",
        answers: {
            a: '<javascript>',
            b: '<scripting>',
            c:'<script>',
            d:'<js>',
        },
        correctAnswer: 'c'
    },
    {
        question: 'What is the correct JavaScript syntax to change the content of the HTML element <p id="demo"> This is a demonstration </p>',
        answers: {
            a: 'document.getElementById("demo").innerHTML = "Hello World!";',
            b: '#demo.innerHTML = "Hello World!";',
            c: 'document.getElementByName("p").innerHTML = "Hello World!";',
            d: 'document.getElement("p").innerHTML = "Hello World!";',
        },
        correctAnswer: 'a'
    },
    {
        question: 'Where is the correct place to insert a JavaScript',
        answers: {
            a: 'The <head> section',
            b: 'The <body> section',
            c: 'Both the <head> section and the <body> sections are correct',
        },
        correctAnswer: 'b',
    },
]
var myQuestionsLength = myQuestions.length

var nextQuestionBtn = document.querySelector('.nextQuestionBtn')
nextQuestionBtn.addEventListener('click', buildQuiz)

questionEl = document.querySelector('#questionArea')
var answerAEl = document.querySelector('#a')
var answerBEl = document.querySelector('#b')
var answerCEl = document.querySelector('#c')
var answerDEl = document.querySelector('#d')

let i = 0
function buildQuiz() {
    console.log("test")
    questionEl.textContent = myQuestions[i].question;
    answerAEl.textContent = myQuestions[i].answers.a;
    answerBEl.textContent = myQuestions[i].answers.b;
    answerCEl.textContent = myQuestions[i].answers.c;
    answerDEl.textContent = myQuestions[i].answers.d;
    i++
}

function score() {

}


var timeLeftEl = document.querySelector('#timeLeft')
var timeCount = timeLeftEl.textContent = 60;

function startTimer() {
    timeCount = 60;
    console.log(myQuestions)
    timer = setInterval(function() {
        if (timeCount > 0) {
            timeCount--;
            timeLeftEl.textContent = timeCount;
           
        } else {
           
            return
        }
    },100);
}

var startButton = document.querySelector("#startButton")
startButton.addEventListener("click", startQuiz)

function startQuiz() {
    startTimer()
    startButton.setAttribute('class', 'hidden')
    console.log('is working?')
    questions.setAttribute('class', 'visible')
}

