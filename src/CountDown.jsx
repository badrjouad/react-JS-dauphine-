import React, { useState, useEffect } from 'react';
import './fuzz.css'; 

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState(60);

  useEffect(() => {
    const timer = setInterval(() => {
      if (timeLeft > 0) {
        setTimeLeft(timeLeft - 1);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  return (
    <div className="countdown">
      <h2>Countdown</h2>
      <div className="countdown-display">
        <span>{timeLeft}</span>
      </div>
    </div>
  );
};

export default Countdown;
