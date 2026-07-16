import { useEffect, useRef, useState } from "react";

const ProgressBar = () => {
  const [progress, setProgress] = useState(0);
  const IntervalId = useRef(0);
  const handleStart = () => {
    clearInterval(IntervalId);

    IntervalId.current =
      setInterval(() => {
        setProgress((prev) => {
          const next = prev + 10;
          if (next >= 100) {
            clearInterval(IntervalId.current);
            return 100;
          }
          return next;
        });
      },
      1000);
  };
  useEffect(() => {
    return () => clearInterval(IntervalId.current);
  }, []);
  return (
    <div>
      <div
        className="progress-container"
        style={{ width: "100px", background: "red" }}
      >
        <div
          style={{ width: `${progress}%`, background: "black", height: "20px" }}
        ></div>
      </div>

      <button onClick={handleStart}>Start</button>
      <button>Stop</button>
    </div>
  );
};
export default ProgressBar;
