import React, { useState } from "react";
import "./SurveyComponent.css";

function SurveyComponent() {
  const [answer, setAnswer] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleAnswerChange = (event) => {
    setAnswer(event.target.checked);
  };

  const formCompletion = (event) => {
    event.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="surveyClass">
      {!isSubmitted && (
        <>
          <text>
            Did you complete all of the tasks on your todo-list today?
          </text>
          <form onSubmit={formCompletion}>
            <label>
              <input
                type="checkbox"
                checked={answer}
                onChange={handleAnswerChange}
              />
              Yes
            </label>
            <label>
              <input
                type="checkbox"
                checked={!answer}
                onChange={handleAnswerChange}
              />
              No
            </label>
            <button type="submit">Submit</button>
          </form>
        </>
      )}
      {isSubmitted && (
        <div>Form has been submitted. We thank you for your time!</div>
      )}
    </div>
  );
}

export default SurveyComponent;
