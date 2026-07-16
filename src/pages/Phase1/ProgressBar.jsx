import { useEffect, useRef, useState } from "react";
import './index.css'
const ProgressBar = () => {
  const [progress, setProgress] = useState(0);
  let IntervalId = useRef();

  useEffect(() => {
    return () => clearInterval(IntervalId.current);
  }, []);

  const handleStart = () => {
    IntervalId.current = setInterval(() => {
      setProgress((prev) => {
        const next = prev + 10;
        if (next >= 100) {
          clearInterval(IntervalId.current);
          return 100;
        }
        return next;
      });
    }, 1000);
  };
  const handleStop = () => {
    clearInterval(IntervalId.current);
  };
  const handleReset = () => {
    clearInterval(IntervalId.current)
    setProgress(0);
  };
  return (
    <div>
      <div>{progress}%</div>
      <div className="bar">
        <div style={{width:`${progress}%`,height:'100%',background:'#4caf50',transition:'width 0.3s ease-in-out'}}/>
      </div>
      <button onClick={handleStart}>start</button>
      <button onClick={handleStop}>Stop</button>
      <button onClick={handleReset}>reset</button>
    </div>
  );
};
export default ProgressBar;
