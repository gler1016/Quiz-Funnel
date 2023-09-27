import React from "react";
import { useState } from "react";

const Question = (props) => {

  const options = props.data.options;
  const sOption = props.data.selectedOption;
  const [selectedOption, setSelectedOption] = useState(sOption);
  const handleOptionChange = (option) => {
    setSelectedOption(option);
    props.onClick(option);
  };


  return (
    <div>
      <h2 className="question-title">Q. {props.id+1} <span dangerouslySetInnerHTML={{ __html: props.data.question }} /></h2>
      <ul>
      {options.map((option, index) => (
          <li  key={index}>
            <input
              type="radio"
              name="options"
              id={`option${index}`}
              value={option}
              checked={sOption === option}
              onChange={() => handleOptionChange(option)}
            />
            <label className="radio-input" htmlFor={`option${index}`}>
          <span dangerouslySetInnerHTML={{ __html: option }} />
        </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Question;
