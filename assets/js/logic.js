import quizQuestions from './questions.js';
console.log(quizQuestions[1]);

const startQuizButton = document.querySelector("#start");
const timerElement = document.querySelector("#time")

let questionElement = document.getElementById("question-title"); 
let questionChoices = document.getElementById("choices");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;      
  displayQuestion();
  startTimer();
    // Include logic to start the timer
}

function displayQuestion() {
  let currentQuestion = quizQuestions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + ". " + currentQuestion.questionTitle;

  let questionChoicesContainer = document.getElementById("choices")

  currentQuestion.questionChoices.forEach(questionChoice => {
    const button = document.createElement("button");
    button.innerHTML = questionChoice;
    button.classList.add("btn");
    // Add event listener to handle user's choice
    button.addEventListener("click", function() {
 // Include logic to check if the answer is correct and update the score
      // ...

      // Move to the next question
      currentQuestionIndex++;
      displayQuestion();
    });

        // Append the button to the choices container
        questionChoicesContainer.appendChild(button);
        // Add logic to display choices (questionChoices) and handle user interaction
      })
}

function startTimer() {
  let timeLeft = 60;

  timer = setInterval(function() {
    timerElement.textContent = timeLeft + "s";

    if (timeLeft <=0) {
      clearInterval(timer);
      endQuiz();
    }

    timeLeft--;
  }, 1000);
  }

function endQuiz() {
  //logic for end of quiz
}

// On Click Quiz Starts and Timer Starts
// Implement an event listener on the start button that triggers the start of the quiz.

startQuizButton.addEventListener("click", function() {
    console.log("quiz starts");
    startQuiz();
    //when button clicked, needs to generate first question & start timer.
    //timer also needs to start counting down (setInterval/clearInterval)
  });

// function showQuestion(){
//   let currentQuestion = questions[currentQuestionIndex];
//   let questionNo = currentQuestionIndex + 1;
//   questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

//   currentQuestion.answers.array.forEach(questionChoices => {
//     const button = document.createElement("button");
//     button.innerHTML = answer.text;
//     button.classList.add("btn");
//   });
// }

// // 4. Box Options Need to Appear for Each Question
// // Dynamically display the current question and its answer choices when the quiz starts.
// Use .createElement to create HTML elements for the question and answer choices dynamically.
// Use .appendChild to add these elements to the DOM.

// // 5. Display Feedback for Correct/Wrong Answers
// // Implement logic to display "Correct" or "Incorrect" at the bottom based on user answers.
// Use .createElement to create an element for displaying feedback.
// Use .appendChild or .innerHTML to update the feedback dynamically.

// // 6. Update Timer Based on Answer Correctness
// // Adjust the timer based on whether the user's answer is correct or incorrect (e.g., +10 seconds for correct, -10 seconds for incorrect).
// Use if statements to check if the answer is correct or incorrect.
// Update the timer accordingly.
// //class / id = timer

// // 7. Count Correct Answers to Calculate Score
// // Keep track of the number of correct answers to calculate the user's score at the end.
// Function/Method: Use a variable to keep track of the number of correct answers.
// <div id="end-screen" class="hide">
// <h2>All done!</h2>
// <p>Your final score is <span id="final-score"></span>.</p>
// <p>
//   Enter initials: <input type="text" id="initials" max="3" />
//   <button id="submit">Submit</button>
// </p>
// </div>

// // 8. End of Quiz - Enter Initials
// // Display the user's score at the end of the quiz.
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

// // 9. Store Highscores and Usernames
// // Implement a way to store highscores along with the usernames (localStorage can be useful for this).
// Function/Method: Use localStorage to store highscores and usernames.

// // 10. Clear Highscores
// // Provide a button or functionality to clear the highscores list.
// Function/Method:
// Use .clear on localStorage to clear stored highscores.
// Update the DOM to reflect the cleared highscores.
// {/* <div id="feedback" class="feedback hide"></div>
// </div> */}

// // Additional Suggestions:
// // Implement a mechanism to move to the next question after answering the current one.
// // Create a countdown visualizer to show the remaining time.
// Create Countdown Visualizer:
// Use .createElement to create visual elements for the countdown.
// Update the countdown dynamically using .innerText or .innerHTML.
// // Ensure that the application is responsive and user-friendly.
// // Implement error handling for edge cases (e.g., if the user submits without entering initials).

// // As you work through these steps, remember to test your application thoroughly to catch any issues early in the development process. Additionally, consider adding comments to your code for better readability and maintainability. Good luck with your coding challenge! If you have specific questions or encounter challenges during implementation, feel free to ask for assistance.