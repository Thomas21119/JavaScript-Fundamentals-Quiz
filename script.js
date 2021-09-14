var timeLeftEl = document.getElementById("timeLeft");
var showQuestions = document.querySelector('#questions');
let questionIndex = 0;
var answerArea = document.querySelector('#options');
var questionArea = document.querySelector('.questionArea')
var questionEl = document.querySelector("#question");
var $entryPage = $('.entryPage')


// create an array of objects for each question
var myQuestions = [
    {
        question: "inside which HTML element do we put the JavaScript",
        answers: [ '<javascript>', '<scripting>','<script>','<js>'],
        // index reference of the correct answer
        correctAnswer: 2
    },
    {
        question: 'What is the correct JavaScript syntax to change the content of the HTML element <p id="demo"> This is a demonstration </p>',
        answers: [ 'document.getElementById("demo").innerHTML = "Hello World!";', '#demo.innerHTML = "Hello World!";', 'document.getElementByName("p").innerHTML = "Hello World!";', 'document.getElement("p").innerHTML = "Hello World!";'],
        // index reference of the correct answer
        correctAnswer: 0
    },
    {
        question: 'Where is the correct place to insert a JavaScript', 
        answers: [ 'The <head> section', 'The <body> section', 'Both the <head> section and the <body> sections are correct'],
        // index reference of the correct answer
        correctAnswer: 1
    },
]

function buildQuiz() {
    // if question number is less than total questions length
    if(questionIndex < myQuestions.length) {
    // clear everything
    questionArea.innerhtml = "";
    answerArea.innerHTML = "";
    // let current question equal question depending on index
    var currentQuestion = myQuestions[questionIndex];
    // display current question
    questionEl.textContent = currentQuestion.question;
        // for answers,length repeat function
        for (var i = 0; i < currentQuestion.answers.length ; i++) {
            // new variable creates a button
            var optionEl = document.createElement("button");
            // new variable gets the answers child and selects the i
            var option = currentQuestion.answers[i]
            // i value is inputted into button
            optionEl.textContent = option;
            // give it a value of whatever i is in current loop
            optionEl.setAttribute("value", i);
            // creates new button option at end of answerArea
            answerArea.appendChild(optionEl);
            // add an event listener for if the button is clicked
            optionEl.addEventListener("click", optionSelected)
        }
    }   else {
        answerArea.innerHTML = ""
        endQuiz()
    }
}
// global so can be stopped later
var timer;
// set to link timer to html page
var timeLeftEl = document.querySelector('#timeLeft')
// sets timecount to 60 upon page load
var timeCount = timeLeftEl.textContent = 60;

function startTimer() {
    // set time to 60
    timeCount = 60;
    // repeat this function every second
    timer = setInterval(function() {
        // take one second if time is greater than 0
    if (timeCount > 0) {
            timeCount--;
            // display new time
            timeLeftEl.textContent = timeCount;
        } else {
            // if timer is below 0 clear interval
            clearInterval(timer);
            return
        }
    },1000);
}


function optionSelected(){
    //if option is incorrect take 10 seconds off time
    if(this.value != myQuestions[questionIndex].correctAnswer){
        console.log("wrong Answer");
        for (let i = 0; i < 10; i++) {
            timeCount--
        }
        //   otherwise if timer = 0 end the quiz
    } else if(timeCount < 1) {
            endQuiz() 
    } // if test is completed endquiz
      else if(myQuestions[questionIndex] == myQuestions.length) {
            endQuiz()
            // otherwise loop to next question
    } else {
        questionIndex++
        buildQuiz()
    }
}


function endQuiz() {
    //stops timer
    clearInterval(timer)
    questionEl.innerHTML = ''
    questionEl.textContent = 'Congratulations on finishing the test'
    // display final time
    answerArea.textContent = 'your final time is:' + timeCount;
    //restart option
    startButton.setAttribute('class','btnVisible');
     //save time to local scores
    if (timeCount > Number(localStorage.getItem('firstPlace'))) {
        localStorage.setItem('thirdPlace', localStorage.getItem('secondPlace'));
        localStorage.setItem('secondPlace', localStorage.getItem('firstPlace'));
        localStorage.setItem('firstPlace', timeCount);
    
        } else if (timeCount > Number(localStorage.getItem('secondPlace'))) {
            localStorage.setItem('thirdPlace', localStorage.getItem('secondPlace'));
            localStorage.setItem('secondPlace', timeCount);
        } else if (timeCount > Number(localStorage.getItem('thirdPlace'))){
            localStorage.setItem('thirdPlace', timeCount);
        } else{ 
            return
        }
}

// sets highScores to 0 if theres none in place yet
if (localStorage.getItem('firstPlace') === null) {
    localStorage.setItem('firstPlace', 0)
}

if (localStorage.getItem('secondPlace') === null) {
    localStorage.setItem('secondPlace', 0)
}

if (localStorage.getItem('thirdPlace') === null) {
    localStorage.setItem('thirdPlace', 0)
}

// startquiz button
var startButton = document.querySelector("#startButton")
startButton.addEventListener("click", startQuiz)

function startQuiz() {
    $entryPage.attr('class','hidden')

    // sets question index to 0 so questions are asked from scratch
    questionIndex = 0
    // starts timer interval function so people can see how theyre going and time can be recorded
    startTimer();
    // hides the start quiz button
    startButton.setAttribute('class', 'hidden');
    // shows the beginning of the test
    showQuestions.setAttribute('class', 'visible');
    // builds each question and answer
    buildQuiz();
}

var $highScoresBtn = $('#highScoresBtn')
$highScoresBtn.on('click')