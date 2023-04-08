import React, { useState, useEffect } from "react";

function ClockComponent() {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const timerId = setInterval(() => tick(), 1000);

    //Clean up the interval on unmount.
    return () => clearInterval(timerId);
  }, []);

  function tick() {
    setDate(new Date());
  }

  return (
    <div>
      <h2>{date.toLocaleTimeString()}</h2>
    </div>
  );
}

export default ClockComponent;
