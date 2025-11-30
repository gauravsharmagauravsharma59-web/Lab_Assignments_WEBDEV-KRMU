// Prompt Quizzer - A Quiz Game

// Step 1: Quiz Questions Array
const quizQuestions = [
  { question: "What is the capital of India?", answer: "delhi" },
  { question: "HTML stands for?", answer: "hypertext markup language" },
  { question: "Which planet is known as the Red Planet?", answer: "mars" },
  { question: "2 + 2 equals?", answer: "4" },
  { question: "CSS is used for?", answer: "styling" }
];

// Step 2: Function to run the quiz
function runQuiz() {
  let score = 0; // Step 3: Score Initialization

  // Step 4: Loop through questions
  for (let i = 0; i < quizQuestions.length; i++) {
    let userAnswer = prompt(quizQuestions[i].question);

    if (!userAnswer) {
      alert("You didn't enter anything!");
      continue;
    }

    // Normalize input
    userAnswer = userAnswer.toLowerCase().trim();

    // Step 7 & 8: Check answer and give feedback
    if (userAnswer === quizQuestions[i].answer) {
      score++;
      alert("Correct! 🎉");
    } else {
      alert(
        "Wrong ❌\nCorrect Answer: " + quizQuestions[i].answer.toUpperCase()
      );
    }
  }

  // Step 9: Display final score
  alert(
    "Quiz Completed! 🏁\nYour Score: " +
      score +
      "/" +
      quizQuestions.length
  );
}