import React from "react";
import { useState, useEffect } from "react";
import "./DueDateComponent.css";

function DueDateComponent() {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const timerId = setInterval(() => tick(), 1000);

    //Clean up the interval on unmount
    return () => clearInterval(timerId);
  }, []);

  function tick() {
    setDate(new Date());
  }

  return (
    <div>
      <div className="dueDate">{date.toLocaleDateString()}</div>
      <DueDateTimeComponent />
    </div>
  );
}

function DueDateTimeComponent() {
  //Retrieve the due date we want the task to be completed by.
  const taskDueDate = new Date("March 11, 2023 12:00 am");
  return (
    <div>
      <div className="centerWord">by</div>
      <div className="centerTime">{taskDueDate.toLocaleTimeString()}</div>
    </div>
  );
}

export default DueDateComponent;
