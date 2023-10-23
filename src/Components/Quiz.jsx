import React, { useState } from "react";

const Quiz = () => {
  // Define your quiz questions and answers
  const questions = [
    {
      question: "What is the capital of Algeria?",
      options: ["Tunis", "Berlin", "Algiers", "Madrid"],
      correctAnswer: "Algiers",
    },
    {
      question: "Which planet is known as the Red Planet?",
      options: ["Venus", "Mars", "Jupiter", "Saturn"],
      correctAnswer: "Mars",
    },
    {
      question: "What is the largest mammal in the world?",
      options: ["Elephant", "Giraffe", "Whale", "Hippopotamus"],
      correctAnswer: "Whale",
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const handleAnswerClick = (selectedAnswer) => {
    if (selectedAnswer === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    // Move to the next question
    setCurrentQuestion(currentQuestion + 1);
  };

  return (
    <div>
      {currentQuestion < questions.length ? (
        <div>
          <h2>{questions[currentQuestion].question}</h2>
          <ul>
            {questions[currentQuestion].options.map((option, index) => (
              <li key={index} onClick={() => handleAnswerClick(option)}>
                {option}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div>
          <h2>Quiz Completed!</h2>
          <p>Your Score: {score} out of {questions.length}</p>
        </div>
      )}
    </div>
  );
};

export default Quiz;
