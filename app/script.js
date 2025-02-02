var penalty = 0;
var task = 0;

const questions = [
  { question: "How many eggs are in the small bathroom?", answer: "40" },
  { question: "How many ducks are in the big bathroom?", answer: "20" },
  {
    question: "Make John laugh and he will tell you the password",
    answer: "aladdin",
  },
];

function checkAnswer(question, answer) {
  // Get the input element by its ID
  let inputField = document.getElementById("myInput");

  // Get the value of the input field
  let value = inputField.value;

  // Display the value in an alert

  if (value === answer) {
    task = task + 1;
  } else {
    penalty += 1;
  }
  document.getElementById("penalty").innerHTML = "Penalty points: " + penalty;
  document.getElementById("question").innerHTML = question;
}

function answer() {
  checkAnswer(questions[task + 1].question, questions[task].answer);
}
