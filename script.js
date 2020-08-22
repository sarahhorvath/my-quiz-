//Global Variables
//This is where you will define the variables you will be using in your project.
//#TODO: Create four variables to track each possible quiz outcome
var questionCount = 0;
var result1Score = 0;

  var newspaperScore = 0;
  var artScore = 0;
  var codingScore = 0;
  var studentgovScore = 0;

var result = document.getElementById("result");




//#TODO: Use the DOM to create variables for the first quiz question.
var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");
var q1a3 = document.getElementById("q1a3");
var q1a4 = document.getElementById("q1a4");




//#TODO: Add Event Listeners to your answer choice variables.

 q1a1.addEventListener("click", art);
  q1a2.addEventListener("click", coding);
  q1a3.addEventListener("click", newspaper);
  q1a4.addEventListener("click", studentgov);



//#TODO: Define quiz functions here
  
  
  function art() {
  artScore += 1;
  questionCount += 1;
      alert("One Point to Art!");
  if (questionCount >= 3){
      updateResult();
  }
}

function coding() {
  codingScore += 1;
  questionCount += 1;
   alert("One Point to coding!");
    if (questionCount >= 3){
      updateResult();
  }
}

function studentgov() {
  studentgovScore += 1;
  questionCount += 1;
   alert("One Point to student gov!");
    if (questionCount >= 3){
      updateResult();
  }
}

function newspaper() {
  newspaperScore += 1;
  questionCount += 1;
   alert("One Point to newspaper!");
    if (questionCount >= 3){
      updateResult();
  }
}
// variables for answer choice buttons for question 1
var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");
var q1a3 = document.getElementById("q1a3");
var q1a4 = document.getElementById("q1a4");

// variables for answer choice buttons for question 2
var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");
var q2a3 = document.getElementById("q2a3");
var q2a4 = document.getElementById("q2a4");

// variables for answer choice buttons for question 1
var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");
var q3a3 = document.getElementById("q3a3");
var q3a4 = document.getElementById("q3a4");

q1a1.addEventListener("click", art);
q1a2.addEventListener("click", coding);
q1a3.addEventListener("click", newspaper);
q1a4.addEventListener("click", studentgov);

q2a1.addEventListener("click", coding);
q2a2.addEventListener("click", art);
q2a3.addEventListener("click", studentgov);
q2a4.addEventListener("click", newspaper);

q3a1.addEventListener("click", studentgov);
q3a2.addEventListener("click", art);
q3a3.addEventListener("click", coding);
q3a4.addEventListener("click", newspaper);


function updateResult(){
 if (artScore >= 2){
         result.innerHTML = "Join the Art Club!";
 }
 else if(newspaperScore >=2){
        result.innerHTML = "Join your school newspaper!";
 }
 else if(studentgovScore >=2){
    result.innerHTML = "Join your school's Student Government!";
 }
 else if (codingScore>= 2){
    result.innerHTML = "Join your school's coding club!";
 }
 else{
    result.innerHTML = "Hmm.. The club sorter is confused. Try again later.";
 }
}