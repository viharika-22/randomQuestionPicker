import React, { useState, useEffect } from "react";
import questions from "./questions.json";

function Card({ difficulty }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [filteredQuestions, setFilteredQuestions] = useState([]);

  useEffect(() => {
    const filter =
      difficulty === "Random"
        ? questions
        : questions.filter(
            (que) => que.difficulty.toLowerCase() === difficulty.toLowerCase()
          );

    setFilteredQuestions(filter);
    setCurrentIndex(0); // reset index on difficulty change
  }, [difficulty]);

  if (filteredQuestions.length === 0) {
    return <div>No questions found for "{difficulty}"</div>;
  }

  const question = filteredQuestions[currentIndex];
  const currentDiff = question.difficulty.toLowerCase();

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === filteredQuestions.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? filteredQuestions.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="cardCont">
      <div className={`cardQue ${currentDiff}`}>
        <h3 className="card-title">{question.name.toUpperCase()}</h3>

        <h4 className="card-subtitle">{question.difficulty}</h4>
        <p className="card-progress">
          {currentIndex + 1} of {filteredQuestions.length}
        </p>
        <div className="btns">
          <button onClick={handlePrev}>Prev</button>
          <button onClick={handleNext}>Next</button>
        </div>
      </div>
    </div>
  );
}

export default Card;
