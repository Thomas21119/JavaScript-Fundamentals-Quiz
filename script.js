var timeLeftEl = $("#timeLeft");
var showQuestions = $('#questions');
let questionIndex = 0;
var answerArea = $('#options');
var questionArea = document.querySelector('.questionArea')
var questionEl = document.querySelector("#question");
var $entryPage = $('.entryPage');
var $form = $('#form');
var $scoreSubmit = document.querySelector('#scoreSubmit')
var $table = $('#highScores')
var $didMake = $('#didMake')
var $madeLeaderBoards = $('#in')
var $missedLeaderBoards = $('#out')

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
    {
        question: 'What is the correct syntax for referring to an external script called "xxx.js"?', 
        answers: [ '<script src="xxx.js">', '<script href="xxx.js">', '<script name="xxx.js">'],
        // index reference of the correct answer
        correctAnswer: 0
    },
]

function buildQuiz() {
    // if question number is less than total questions length
    if(questionIndex < myQuestions.length) {
    // clear everything
    questionArea.innerhtml = "";
    answerArea.text('');
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
            answerArea.append(optionEl);
            // add an event listener for if the button is clicked
            optionEl.addEventListener("click", optionSelected)
        }
        // otherwise test will be done
    }   else {
        // resets answers.area to blank before moving to endQuiz
        answerArea.text('');
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
    $form.attr('class', 'hidden')
    
    // set time to 60
    timeCount = 60;
    // repeat this function every second
    timer = setInterval(function() {
        // take one second if time is greater than 0
    if (timeCount > 0) {
            timeCount--;
            // display new time
            timeLeftEl.textContent = timeCount;
        } else if(timeCount < 1) {
            endQuiz()
            // if timer is below 0 clear interval
            clearInterval(timer);
            return
        }
        // happens every second
    },1000);
}


function optionSelected(){
    //if option is incorrect take 10 seconds off time
    if(this.value != myQuestions[questionIndex].correctAnswer){
        console.log("wrong Answer");
        for (let i = 0; i < 10; i++) {
            timeCount--
        }
    } // if test is completed endquiz
      else if(myQuestions[questionIndex] == myQuestions.length) {
            endQuiz()
            // otherwise loop to next question
    } else {
        questionIndex++
        buildQuiz()
    }
}

var $scoreSubmitBtn = document.querySelector('#scoreSubmitBtn')
$scoreSubmitBtn.addEventListener('click', submitForm)
function submitForm() {
    // gets value of initials that people will type in
    
    let $initials = $('#initials').val()
    // hides button so only can submit one time at a time
    $scoreSubmitBtn.setAttribute('class' , 'hidden')
    // if score is greater than a leaderboard score put it on the leaderboard
    if (timeCount > Number(localStorage.getItem('firstScore'))) {
        // score
        localStorage.setItem('thirdScore', localStorage.getItem('secondScore'));
        localStorage.setItem('secondScore', localStorage.getItem('firstScore'));
        localStorage.setItem('firstScore', timeCount);
        // initials
        localStorage.setItem('thirdInitials', localStorage.getItem('secondInitials'));
        localStorage.setItem('secondInitials', localStorage.getItem('firstInitials'));
        localStorage.setItem('firstInitials', $initials);
        // replace form with Congratulations message
        viewHighScores();
        viewHighScores();

    
        } else if (timeCount > Number(localStorage.getItem('secondScore'))) {
            localStorage.setItem('thirdScore', localStorage.getItem('secondScore'));
            localStorage.setItem('secondScore', timeCount);

            localStorage.setItem('thirdInitials', localStorage.getItem('secondInitials'));
            localStorage.setItem('secondInitials', $initials);
            viewHighScores();
            viewHighScores();
        } else if (timeCount > Number(localStorage.getItem('thirdScore'))){
            localStorage.setItem('thirdScore', timeCount);
            // initials
            localStorage.setItem('thirdInitials', $initials);
            viewHighScores();
            viewHighScores();
        } else{ 
            // replace form with try again message
            
        }

}

function openForm() {
    // set class to nothing so form becomes visible
   $form.attr('class', '');
//    sets score input field (which is unchangable) to the score they recieved
   $scoreSubmit.value = timeCount;
}

function endQuiz() {
    //stops timer
    clearInterval(timer);
    // congratulates them
    questionEl.innerHTML = 'Congratulations on finishing the test';
     // display final time
    answerArea.text('Your final time is ' + timeCount + ' Seconds') 
    // runs openForm
    openForm()
    //restart option
    startButton.setAttribute('class','btnVisible');
     //save time to local scores

// sets highScores to 0 if theres none in place yet
if (localStorage.getItem('firstScore') === null) {
    localStorage.setItem('firstScore', 0)
    localStorage.setItem('firstInitials', '0')
}

if (localStorage.getItem('secondScore') === null) {
    localStorage.setItem('secondScore', 0)
    localStorage.setItem('secondInitials', '0')
}

if (localStorage.getItem('thirdScore') === null) {
    localStorage.setItem('thirdScore', 0)
    localStorage.setItem('thirdInitials', '0')
}
}
// startquiz button
var startButton = document.querySelector("#startButton")
startButton.addEventListener("click", startQuiz)

function startQuiz() {
    $scoreSubmitBtn.setAttribute('class' , '')
    // hides entry page
    $entryPage.attr('class','hidden')
    // sets question index to 0 so questions are asked from scratch
    questionIndex = 0
    // starts timer interval function so people can see how theyre going and time can be recorded
    startTimer();
    // hides the start quiz button
    startButton.setAttribute('class', 'hidden');
    // shows the beginning of the test
    showQuestions.attr('class', 'visible');
    // builds each question and answer
    buildQuiz();
}

var $highScoresBtn = $('#highScoresBtn')
$highScoresBtn.on('click', viewHighScores)

function viewHighScores () {
        $table.toggleClass('hidden');
        // Initials
        var $firstInitials = $('#firstInitials')
        $firstInitials.text('First Place: ' + localStorage.getItem('firstInitials'))
        var $secondInitials = $('#secondInitials')
        $secondInitials.text('Second Place: ' + localStorage.getItem('secondInitials'))
        var $thirdInitials = $('#thirdInitials')
        $thirdInitials.text('Third Place: ' + localStorage.getItem('thirdInitials'))
    // Score
        var $firstScore = $('#firstScore')
        $firstScore.text('With a Score of: ' + localStorage.getItem('firstScore'))
        var $secondScore = $('#secondScore')
        $secondScore.text('With a Score of: ' + localStorage.getItem('secondScore'))
        var $thirdScore = $('#thirdScore')
        $thirdScore.text('With a Score of: ' + localStorage.getItem('thirdScore'))
}