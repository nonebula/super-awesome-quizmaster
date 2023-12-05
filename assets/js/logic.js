import quizQuestions from './questions.js';

// console.log(quizQuestions[0]);

// div locators
const startScreen = document.querySelector("#start-screen");
const questionDiv = document.querySelector("#questions");
const endScreen = document.querySelector("#end-screen");

// questions locators
const questionElement = document.querySelector("#question-title"); 
const questionChoicesContainer = document.querySelector("#choices");

// ungrouped selectors
const startQuizButton = document.querySelector("#start");
const timerElement = document.getElementById('time');
const finalScoreElement = document.querySelector("#final-score");
const initialsInput = document.querySelector("#initials");
const submitButton = document.querySelector("#submit");
const questionFeedback = document.querySelector("#feedback")

// starting variables
let currentQuestionIndex = 0;
let score = 0;
let timeLeft = 30;
let timer;

//functions
function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;    
  showQuestionScreen();  
  displayQuestion();
  startTimer();
}

//show question function
function showQuestionScreen() {
  startScreen.style.display = "none";
  endScreen.style.display = "none";
  questionDiv.style.display = "block";
  let currentQuestion = quizQuestions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.textContent = questionNo + ". " + currentQuestion.questionTitle;
  
  currentQuestion.questionChoices.forEach((questionChoice) => {
    const button = document.createElement("button");
    button.textContent = questionChoice;
    button.classList.add("btn");
    button.addEventListener("click", () => handleChoice(index));
    questionChoicesContainer.appendChild(button);
  });
}

function displayQuestion() {
  const currentQuestion = quizQuestions[currentQuestionIndex];
  const questionNo = currentQuestionIndex + 1;
  questionElement.textContent = `${questionNo}. ${currentQuestion.questionTitle}`;

  questionChoicesContainer.innerHTML = "";

  currentQuestion.questionChoices.forEach((questionChoice, index) => {
    const button = document.createElement("button");
    button.textContent = questionChoice;
    button.classList.add("btn");
    button.addEventListener("click", () => handleChoice(index));
    questionChoicesContainer.appendChild(button);
  });
}

//timer function
function startTimer() {
  timer = setInterval(function() {
    timerElement.textContent = timeLeft + "s";

    if (timeLeft <= 0) {
      clearInterval(timer);
      endQuiz();
    }

    timeLeft--;
  }, 1000);
}

//question selection function
function handleChoice(selectedChoiceIndex) {
  const currentQuestion = quizQuestions[currentQuestionIndex];
  const selectedChoice = currentQuestion.questionChoices[selectedChoiceIndex];

  if (selectedChoice === currentQuestion.questionAnswer) {
    score++;
    timeLeft += 10;
    displayFeedback("Correct!");
  } else {
    timeLeft -= 10;
    displayFeedback("Incorrect!");
  }

  updateScoreDisplay();

  currentQuestionIndex++;
  if (currentQuestionIndex < quizQuestions.length) {
    displayQuestion();
  } else {
    endQuiz();
  }
}

//question feedback function
  function displayFeedback(message) {
    questionFeedback.textContent = message;
    questionFeedback.classList.remove("hide");
  
    setTimeout(() => {
      questionFeedback.classList.add("hide");
    }, 1500);
  }
  
  //score display function
  function updateScoreDisplay() {
    finalScoreElement.textContent = score;
  }  

startQuizButton.addEventListener("click", function() {
    startQuiz();
  });


    //end quiz function
function endQuiz() {
  questionDiv.style.display = "none";
  endScreen.style.display = "block";
  finalScoreElement.textContent = score;
}



//initials input and highscores save
var userScore; 
var userInitials;

function saveHighScores(scores) {
  localStorage.setItem("highScores", JSON.stringify(scores));
}

submitButton.addEventListener("click", function() {
  userScore = score;
  userInitials = document.getElementById("initials").value;
  var highScores = getHighScores();
  highScores.push({ score: userScore, initials: userInitials });
  highScores.sort((a, b) => b.score - a.score);
  highScores = highScores.slice(0, 10);
  saveHighScores(highScores);
  window.location.href = "highscores.html";
});

function getHighScores() {
  return JSON.parse(localStorage.getItem("highScores")) || [];
}


function displayHighScores() {
  const highScores = getHighScores();
  const highScoresList = document.getElementById('highscores');
  highScoresList.textContent = '';

  highScores.forEach((score, index) => {
    const listItem = document.createElement('li');
    listItem.textContent = `${index + 1}. ${score.initials} - ${score.score}`;
    highScoresList.appendChild(listItem);
  });
}

const clearHighScoresButton = document.querySelector("#clear");

function clearScores() {
localStorage.removeItem("highScores");
displayHighScores(); 
}

// document.addEventListener('DOMContentLoaded', function () {
// clearHighScoresButton.addEventListener("click", clearScores);
// });