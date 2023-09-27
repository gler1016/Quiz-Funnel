import React from "react";
const ResultQuestion = (props) => {
  const quizData = props.data;
  return (
    <div className="b-question">
      {quizData.map((question, idx) => (
        <div key={idx}>
          <h2 className="question-title">
            Q. {idx + 1} <span dangerouslySetInnerHTML={{ __html: question.question }} />
          </h2>
          <ul>
            {question.options.map((option, index) => (
              <li key={index}>
                <input
                  type="radio"
                  name={`question${idx}`}
                  value={option}
                  checked={question.selectedOption === String(option)}
                  disabled={true}
                  className={
                    question.selectedOption === String(option)
                      ? option === question.correctOption
                        ? "correct"
                        : "incorrect"
                      : ""
                  }
                />
                <label
                  className={`radio-input ${
                    question.selectedOption === String(option)
                      ? option === question.correctOption
                        ? "correct-label"
                        : "incorrect-label"
                      : ""
                  }`}
                  htmlFor={`option${index}`}
                >
                  <span dangerouslySetInnerHTML={{ __html: option }} />
                </label>
              </li>
            ))}
            <li>Correct Answer: {question.correctOption}</li>
          </ul>
        </div>
      ))}
    </div>
  );
};

export default ResultQuestion;
