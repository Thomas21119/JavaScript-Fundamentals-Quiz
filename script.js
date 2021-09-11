var timeLeftEl = document.getElementById("timeLeft")

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

var nextQuestionBtn = document.querySelector('#nextQuestionBtn')
nextQuestionBtn.addEventListener('click', buildQuiz)
questionEl = document.querySelector('#questionArea')

let i = 0
function buildQuiz() {
    questionEl.textContent = myQuestions[i.question[0]]
    i++;
}

function score() {

}
console.log(myQuestions[i.question])
var timeLeftEl = document.querySelector('#timeLeft')
var timeCount = timeLeftEl.textContent = 60;

function startTimer() {
    timeCount = 60;
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
startButton.addEventListener("click", startTimer, buildQuiz)