import { useEffect, useRef, useState } from "react";

export default function useThrottle(value, delay) {
  const [throttledValue, setThrottledValue] = useState(value);
  const lastEx = useRef(0);
  useEffect(() => {
    const time = Date.now();

    if (time - lastEx.current >= delay) {
      setThrottledValue(value);
      lastEx.current = time;
    } else {
      const timer = setTimeout(() => {
        setThrottledValue(value);
        lastEx.current = Date.now();
      }, delay-(time-lastEx.current));
     return ()=>clearTimeout(timer)
    }
   
  }, [value, delay]);
  return throttledValue;
}
