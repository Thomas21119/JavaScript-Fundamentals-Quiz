var timeLeftEl = document.getElementById("timeLeft");
var showQuestions = document.querySelector('#questions');
let questionIndex = 0;
var answerArea = document.querySelector('#options');

var myQuestions = [
    {
        question: "inside which HTML element do we put the JavaScript",
        answers: [ '<javascript>', '<scripting>','<script>','<js>'],
        correctAnswer: 2
    },
    {
        question: 'What is the correct JavaScript syntax to change the content of the HTML element <p id="demo"> This is a demonstration </p>',
        answers: {
            a: 'document.getElementById("demo").innerHTML = "Hello World!";',
            b: '#demo.innerHTML = "Hello World!";',
            c: 'document.getElementByName("p").innerHTML = "Hello World!";',
            d: 'document.getElement("p").innerHTML = "Hello World!";',
        },
        correctAnswer: 0
    },
    {
        question: 'Where is the correct place to insert a JavaScript',
        answers: {
            a: 'The <head> section',
            b: 'The <body> section',
            c: 'Both the <head> section and the <body> sections are correct',
        },
        correctAnswer: 1,
    },
]

function buildQuiz() {
    var currentQuestion = myQuestions[questionIndex];
    var questionEl = document.querySelector("#question");
    questionEl.textContent = currentQuestion.question;

    //questionarea.innerhtml = ""

    for (var i = 0; i < currentQuestion.answers.length ; i++) {
        var optionEl = document.createElement("button");
        var option = currentQuestion.answers[i]
        optionEl.textContent = option;
        optionEl.setAttribute("value", i);
        answerArea.appendChild(optionEl);
        optionEl.addEventListener("click", optionSelected)

    }    

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
    },1000);
}

function optionSelected(){
    //if incorrect
    if(this.value != myQuestions[questionIndex].correctAnswer){
        console.log("yes");
        for (let i = 0; i < 10; i++) {
            timeCount--
          }
        console.log(timeCount);
    } else {
        console.log("option selected");
        if(timeCount == 0) {
            endQuiz() 
        }
        if(myQuestions[questionIndex]-1>myQuestions.length) {
            endQuiz
        }
        questionIndex++
        buildQuiz()

    //if you ran out of questions questions index call endquiz
    // else buildQuiz()


    }
}

function endQuiz() {
    
}

function score() {

}


var startButton = document.querySelector("#startButton")
startButton.addEventListener("click", startQuiz)

function startQuiz() {
    startTimer();
    startButton.setAttribute('class', 'hidden');
    questions.setAttribute('class', 'visible');
    buildQuiz();
}







