import React, { useState, useEffect } from "react";

const CountdownTimer = ({ days = 5 }) => {
  const targetTime = new Date().getTime() + days * 24 * 60 * 60 * 1000;

  const calculateTimeLeft = () => {
    const now = new Date().getTime();
    const difference = targetTime - now;

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const interval = setInterval(() => {
      const updatedTime = calculateTimeLeft();
      setTimeLeft(updatedTime);

      if (
        updatedTime.days === 0 &&
        updatedTime.hours === 0 &&
        updatedTime.minutes === 0 &&
        updatedTime.seconds === 0
      ) {
        clearInterval(interval); // Stop the interval once countdown ends
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex gap-4 text-center justify-center text-sm  md:text-xl font-semibold">
      <div>
        <p>{timeLeft.days}</p>
        <span>Days</span>
      </div>
      <span>:</span>
      <div>
        <p>{timeLeft.hours}</p>
        <span>Hours</span>
      </div>
      <span>:</span>
      <div>
        <p>{timeLeft.minutes}</p>
        <span>Minutes</span>
      </div>
      <span>:</span>
      <div>
        <p>{timeLeft.seconds}</p>
        <span>Seconds</span>
      </div>
    </div>
  );
};

export default CountdownTimer;
