/*for the quiz page
- iris' comment: link of animal-related short stories, about, and what's happening articles respective to each animal after quiz*/
var pbScore = 0;
var butterflyScore = 0;
var turtleScore = 0;
var questionCount = 0; 

var pbInfo = document.getElementById("pbInfo");
var butterflyInfo = document.getElementById("butterflyInfo");
var turtleInfo = document.getElementById("turtleInfo");

var result = document.getElementById("result");

var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");
var q1a3 = document.getElementById("q1a3");

var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");
var q2a3 = document.getElementById("q2a3");

var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");
var q3a3 = document.getElementById("q3a3");

var q4a1 = document.getElementById("q4a1");
var q4a2 = document.getElementById("q4a2");
var q4a3 = document.getElementById("q4a3");

var q5a1 = document.getElementById("q5a1");
var q5a2 = document.getElementById("q5a2");
var q5a3 = document.getElementById("q5a3");

q1a1.addEventListener("click", polarBear);
q1a2.addEventListener("click", butterfly);
q1a3.addEventListener("click", turtle);

q2a1.addEventListener("click", butterfly);
q2a2.addEventListener("click", turtle);
q2a3.addEventListener("click", polarBear);

q3a1.addEventListener("click", polarBear);
q3a2.addEventListener("click", turtle);
q3a3.addEventListener("click", butterfly);

q4a1.addEventListener("click", turtle);
q4a2.addEventListener("click", polarBear);
q4a3.addEventListener("click", butterfly);

q5a1.addEventListener("click", polarBear);
q5a2.addEventListener("click", butterfly);
q5a3.addEventListener("click", turtle);

var restart = document.getElementById("restart");
restart.addEventListener("click", restartQuiz);

function changeOpacity(button)
{
  button.style.opacity = .5;
}

function polarBear()
{
  pbScore++;
  questionCount++;

  if (questionCount == 5)
  {
    updateResult();
  }
}

function butterfly()
{
  butterflyScore++;
  questionCount++;

  if (questionCount == 5)
  {
    updateResult();
  }
}

function turtle()
{
  turtleScore++;
  questionCount++;

  if (questionCount == 5)
  {
    updateResult();
  }
}

function updateResult()
{
  if ((pbScore>butterflyScore) && (pbScore>turtleScore))
  {
    result.innerHTML = "YOU ARE A POLAR BEAR!";
    pbInfo.style.display = "flex";
  }
  else if ((butterflyScore>pbScore) && (butterflyScore>turtle))
  {
    result.innerHTML = "YOU ARE A MONARCH BUTTERFLY!";
    butterflyInfo.style.display = "flex";
  }
  else if ((turtleScore>pbScore) && (turtleScore>butterflyScore))
  {
    result.innerHTML = "YOU ARE A SEA TURTLE!";
    turtleInfo.style.display = "flex";
  }
  else if (pbScore==butterflyScore)
  {
    result.innerHTML = "YOU ARE EQUAL PARTS POLAR BEAR AND MONARCH BUTTERFLY!";
    pbInfo.style.display = "flex";
    butterflyInfo.style.display = "flex";
  }
  else if (pbScore==turtleScore)
  {
    result.innerHTML = "YOU ARE EQUAL PARTS POLAR BEAR AND SEA TURTLE!";
    pbInfo.style.display = "flex";
    turtleInfo.style.display = "flex";
  }
  else
  {
    result.innerHTML = "YOU ARE EQUAL PARTS SEA TURTLE AND MONARCH BUTTERFLY!";
    turtleInfo.style.display = "flex";
    butterflyInfo.style.display = "flex";
  }
}

function restartQuiz()
{
  pbScore = 0;
  butterflyScore = 0;
  turtleScore = 0;
  questionCount = 0;
  result.innerHTML = "Your animal is...";

  q1a1.style.opacity = 1;
  q1a2.style.opacity = 1;
  q1a3.style.opacity = 1;
  q2a1.style.opacity = 1;
  q2a2.style.opacity = 1;
  q2a3.style.opacity = 1;
  q3a1.style.opacity = 1;
  q3a2.style.opacity = 1;
  q3a3.style.opacity = 1;
  q4a1.style.opacity = 1;
  q4a2.style.opacity = 1;
  q4a3.style.opacity = 1;
  q5a1.style.opacity = 1;
  q5a2.style.opacity = 1;
  q5a3.style.opacity = 1;

  pbInfo.style.display = "none";
  butterflyInfo.style.display = "none";
  turtleInfo.style.display = "none";
}