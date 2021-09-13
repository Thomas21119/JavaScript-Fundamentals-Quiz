var timeLeftEl = document.getElementById("timeLeft");
var showQuestions = document.querySelector('#questions');
let questionIndex = 0;
var answerArea = document.querySelector('#options');
var questionArea = document.querySelector('.questionArea')
var questionEl = document.querySelector("#question");

var myQuestions = [
    {
        question: "inside which HTML element do we put the JavaScript",
        answers: [ '<javascript>', '<scripting>','<script>','<js>'],
        correctAnswer: 2
    },
    {
        question: 'What is the correct JavaScript syntax to change the content of the HTML element <p id="demo"> This is a demonstration </p>',
        answers: [ 'document.getElementById("demo").innerHTML = "Hello World!";', '#demo.innerHTML = "Hello World!";', 'document.getElementByName("p").innerHTML = "Hello World!";', 'document.getElement("p").innerHTML = "Hello World!";'],
        correctAnswer: 0
    },
    {
        question: 'Where is the correct place to insert a JavaScript',
        answers: [ 'The <head> section', 'The <body> section', 'Both the <head> section and the <body> sections are correct'],
        correctAnswer: 1
    },
]

function buildQuiz() {
    if(questionIndex < myQuestions.length) {
    questionArea.innerhtml = "";
    answerArea.innerHTML = ""
    var currentQuestion = myQuestions[questionIndex];
    questionEl.textContent = currentQuestion.question;
        for (var i = 0; i < currentQuestion.answers.length ; i++) {
            var optionEl = document.createElement("button");
            var option = currentQuestion.answers[i]
            optionEl.textContent = option;
            optionEl.setAttribute("value", i);
            answerArea.appendChild(optionEl);
            optionEl.addEventListener("click", optionSelected)
            console.log('questionIndex:', questionIndex);
            console.log('Legnth:',myQuestions.length);
        }
    }   else {
        answerArea.innerHTML = ""
        endQuiz()
    }
}

var timeLeftEl = document.querySelector('#timeLeft')
var timeCount = timeLeftEl.textContent = 60;

function startTimer() {
    timeCount = 60;
    timer = setInterval(function() {
//   want to put an if endquiz happens stop this function
        if (timeCount > 0) {
            timeCount--;
            timeLeftEl.textContent = timeCount;
        } else {
           
            return
        }
    },1000);
}


function optionSelected(){
    //if incorrect
    if(this.value != myQuestions[questionIndex].correctAnswer){
        console.log("wrong Answer");
        for (let i = 0; i < 10; i++) {
            timeCount--
          }
        console.log(timeCount);
    } else {
        console.log("Correct answer");
        if(timeCount == 0) {
            endQuiz() 
        }
        if(myQuestions[questionIndex] == myQuestions.length) {
            endQuiz()
        }
        questionIndex++
        buildQuiz()
    }
}

function endQuiz() {
    //stops timer
    questionEl.textContent = 'Congratulations on finishing the test'
    console.log(timeCount)
    // display final time
    answerArea.textContent = 'your final time is:' + timeCount;
    var $finalTimeEl = $('#score')
    $finalTimeEl.textContent = timeCount
    console.log($finalTimeEl)
    //save time to local scores
    localStorage.setItem('score', timeCount);
    //  display scores as highscores
    //restart option
    startButton.setAttribute('class','btnVisible');
}

var startButton = document.querySelector("#startButton")
startButton.addEventListener("click", startQuiz)

function startQuiz() {
    questionIndex = 0
    startTimer();
    startButton.setAttribute('class', 'hidden');
    questions.setAttribute('class', 'visible');
    buildQuiz();
}







