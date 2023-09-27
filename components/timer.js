import React, { useState, useEffect } from "react";

function Timer({ onTimerComplete }) {
  const initialTime = 30 * 60; 
  const [timeRemaining, setTimeRemaining] = useState(initialTime);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining((prevTime) => {
        if (prevTime > 0) {
          return prevTime - 1;
        } else {
          clearInterval(timer); 
          if (onTimerComplete) {
            onTimerComplete();
          }
          return 0;
        }
      });
    }, 1000); 
    return () => clearInterval(timer);
  }, [onTimerComplete]);

  const minutes = Math.floor(timeRemaining / 60);
  const seconds = timeRemaining % 60;

  return (
    <>
      <div style={{ lineHeight: "10px", textAlign: "center" }}>
        <p style={{ fontSize: "17px" }}>Time Remaining</p>
        <p>
          {minutes.toString().padStart(2, "0")}:
          {seconds.toString().padStart(2, "0")}
        </p>
      </div>
    </>
  );
}

export default Timer;
