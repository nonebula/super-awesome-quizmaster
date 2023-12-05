//print highscores
function displayHighScores() {
    var combinedData = JSON.parse(localStorage.getItem("savedData")) || [];
    var highscoresList = document.getElementById("highscores");
    if (combinedData.length > 0) {
      combinedData.sort((a, b) => b.score - a.score);
      var top10Data = combinedData.slice(0, 10);
      highscoresList.innerHTML = "";
      top10Data.forEach((data) => {
        var listItem = document.createElement("li");
        listItem.textContent = `${data.initials}: ${data.score}`;
        highscoresList.appendChild(listItem);
      });
    } else {
      var noScoresMessage = document.createElement("p");
      noScoresMessage.textContent = "No scores to display.";
      highscoresList.appendChild(noScoresMessage);
    }
  }

  window.addEventListener("DOMContentLoaded", displayHighScores);

  //clear high scores
  const clearHighScoresButton = document.querySelector("#clear");

  function clearScores() {
    localStorage.removeItem("savedData");
    var highscoresList = document.getElementById("highscores");
    highscoresList.innerHTML = "";
  }
  
  clearHighScoresButton.addEventListener("click", clearScores);