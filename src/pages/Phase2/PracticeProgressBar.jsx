import { useEffect, useRef, useState } from "react";
import './index.css'
const PProgressBar = () => {
    const [progress,setProgress] = useState(0)
    let IntervalId = useRef(0)
    const handleProgress=()=>{
        clearInterval(IntervalId.current)
        IntervalId.current   = setInterval(()=>{
            setProgress((prev)=>{
                const next  = prev+10
                if(next>=100){
                    clearInterval(IntervalId.current)
                    return 100
                }
                return next
            })
        },1000)
    }
    useEffect(()=>{
        return ()=> clearInterval(IntervalId.current)
    },[])
    const handleStop=()=>{
        clearInterval(IntervalId.current)
    }
    const handleReset=()=>{
        setProgress(0)
        clearInterval(IntervalId.current)
    }
  return (
    <div>
        <div className="progress">
            <div className='bar' style={{width:`${progress}%` , "background":'green' ,height:'100%'}}>

            </div>
        </div>
      <button onClick={handleProgress}>Start</button>
      <button onClick={handleStop}>Stop</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};
export default PProgressBar;
