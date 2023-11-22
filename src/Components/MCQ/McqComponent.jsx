import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import questions from "../../data/questions.json";

const QuestionComponent = () => {
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isCorrect, setIsCorrect] = useState(false);
  const navigate = useNavigate();

  const checkAnswer = ({ answer, question }) => {
    const currentQuestion = questions.find((q) => q.question === question);

    if (currentQuestion.correctAnswer === answer) {
      setIsCorrect(true);
      // Rediriger vers une page de réussite
      navigate("/congrats");
    } else {
      setIsCorrect(false);
      // Rediriger vers une page d'échec
      navigate("/failure");
    }
  };

  const handleAnswerClick = (answer, question) => {
    setSelectedAnswer({ answer, question });
    checkAnswer({ answer, question });
  };

  const renderQuestion = () => {
    if (!questions || questions.length === 0) {
      return <p>Loading...</p>;
    }

    const randomQuestionIndex = Math.floor(Math.random() * questions.length);
    const randomQuestion = questions[randomQuestionIndex];

    return (
      <div>
        <h3>{randomQuestion.question}</h3>
        <div>
          {randomQuestion.answers.map((answer, index) => (
            <button
              key={index}
              onClick={() => handleAnswerClick(answer, randomQuestion.question)}
            >
              {answer}
            </button>
          ))}
        </div>
        {selectedAnswer && (
          <p>
            {isCorrect ? "Correct! Well done!" : "Incorrect. Please try again."}
          </p>
        )}
      </div>
    );
  };

  return <div>{renderQuestion()}</div>;
};

export default QuestionComponent;
