import { useEffect, useState } from "react"
import './Test.css'
const Timers=()=>{
    const [time ,setTIme] = useState(0)
    const [isRunning,setIsRunning] = useState(false)
    useEffect(()=>{
        let interval;

        if(isRunning){
            interval = setInterval(()=>{
                setTIme((prev)=>prev+1000)
            },1000)
        }
        return ()=>clearInterval(interval)
    },[isRunning])

    const formatTime=(milliSeconds)=>{
        const totalSeconds = Math.floor(milliSeconds/1000)
        //to test
        const hours = Math.floor(totalSeconds/30) //30 sec = 1 hour
        const minutes = Math.floor((totalSeconds%30)/10) // 10 sec = 1 min
        const seconds = totalSeconds%10

        return `${String(hours).padStart(2,"0")}:${String(minutes).padStart(2,"0")}:${String(seconds).padStart(2,"0")}`

    }
    return (
        <div className="timer">
            <div>{formatTime(time)}</div>
            <button onClick={()=>setIsRunning(true)}>
                start
            </button>
            <button onCanPlay={()=>setIsRunning(false)}>
                stop
            </button>
        </div>
    )
}

export default Timers