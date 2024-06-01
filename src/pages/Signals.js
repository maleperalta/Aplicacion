import React, { useState, useEffect } from 'react';
import './Signals.css';

function Signals() {
  const [isRecording, setIsRecording] = useState(false);
  const [seconds, setSeconds] = useState(0);
  const [intervalId, setIntervalId] = useState(null);

  useEffect(() => {
    if (isRecording) {
      const id = startTimer();
      setIntervalId(id);
    } else {
      stopTimer(intervalId);
    }

    // Limpiamos el intervalo cuando el componente se desmonta
    return () => {
      stopTimer(intervalId);
    };
  }, [isRecording]);

  const toggleRecording = () => {
    setIsRecording(prevState => !prevState);
    setSeconds(0);
  };

  const startTimer = () => {
    const id = setInterval(() => {
      setSeconds(prevSeconds => prevSeconds + 1);
    }, 1000);

    return id;
  };

  const stopTimer = (id) => {
    clearInterval(id);
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes < 10 ? '0' : ''}${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };

  const timerDisplay = formatTime(seconds);

  return (
    <div className="signals-container">
      <div className="timer">{timerDisplay}</div>
      <div className={`recording-light ${isRecording ? 'active' : ''}`}></div>
      <button className="record-button" onClick={toggleRecording}>
        {isRecording ? 'Stop Recording' : 'Start Recording'}
      </button>
    </div>
  );
}

export default Signals;
