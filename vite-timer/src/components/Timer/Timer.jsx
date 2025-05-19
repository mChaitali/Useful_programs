import { useState, useRef } from 'react';
import './Timer.css';

const Timer = () => {
  const [time, setTime] = useState(0);
  const timerRef = useRef(null); // Don't want re-renders when starting/stopping the timer.

  const startTimer = () => {
    if (timerRef.current !== null) return; // Prevent multiple intervals
    timerRef.current = setInterval(() => {
      setTime(prev => prev + 1);
    }, 1000);
  };

  const stopTimer = () => {
    clearInterval(timerRef.current);
    timerRef.current = null;
  };

  const resetTimer = () => {
    stopTimer(); // Stops if running
    setTime(0); // Set time back to 0
  };

  return (
    <div className='timerWrapper'>
      <h1>Timer: {time} sec</h1>
      <button onClick={startTimer}>Start</button>
      <button onClick={stopTimer}>Stop</button>
      <button onClick={resetTimer}>Reset</button>
    </div>
  );
};

export default Timer;
