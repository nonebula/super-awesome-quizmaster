import quizQuestions from './questions.js';
console.log(quizQuestions[0]);

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
  // <div id="end-screen" class="hide">
// <h2>All done!</h2>
// <p>Your final score is <span id="final-score"></span>.</p>
// <p>
//   Enter initials: <input type="text" id="initials" max="3" />
//   <button id="submit">Submit</button>
// </p>
// </div>

// // 8. End of Quiz - Enter Initials
// // Provide an input field for the user to enter their initials.
// Use .createElement to create input elements for entering initials.
// Use .appendChild to add these elements to the DOM.
// <h2>All done!</h2>
// <p>Your final score is <span id="final-score"></span>.</p>
// <p>
//   Enter initials: <input type="text" id="initials" max="3" />
//   <button id="submit">Submit</button>
// </p>
// </div>



/* function enterInitials() {

} */



// // 9. Store Highscores and Usernames
// // Implement a way to store highscores along with the usernames (localStorage can be useful for this).
// Function/Method: Use localStorage to store highscores and usernames.

/* function storeScores() {

}

// // 10. Clear Highscores
// // Provide a button or functionality to clear the highscores list.
// Function/Method:
// Use .clear on localStorage to clear stored highscores.
// Update the DOM to reflect the cleared highscores.
// {/* <div id="feedback" class="feedback hide"></div>
// </div> }*/

/* function clearScores() {

} */