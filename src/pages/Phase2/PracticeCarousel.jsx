import { useEffect, useRef, useState } from 'react'
import data from '../Phase1/data.json'
const PracticeCarousel=()=>{
    const [index,setIndex]=useState(0)
    const intervalId = useRef()
    const dataLength = data.length
    const handlePrev=()=>{
        // if(index===0){
        //     setIndex(dataLength-1)
        //     return
        // }
        setIndex(prev=>prev==0?dataLength-1:prev-1)
    }
    const handleNext=()=>{
        // if(index===dataLength-1){
        //     setIndex(0)
        //     return
        // }
        setIndex((prev)=>(prev+1)%dataLength)
    }
    useEffect(()=>{
        intervalId.current = setInterval(handleNext,1000)

        return ()=>clearInterval(intervalId.current)
    },[])
    return(
        <div>
            <div className='image-container' onMouseEnter={()=>clearInterval(intervalId.current)} onMouseLeave={()=>{
                clearInterval(intervalId.current)
                intervalId.current = setInterval(handleNext,1000)
            }}>
                <div className='action-btn left-btn' onClick={handlePrev}>
                    {"<"}
                </div>
                <img src={data[index]?.download_url} alt="" />
                <div className='action-btn right-btn' onClick={handleNext}>
                    {">"}
                </div>
            </div>
            
        </div>
    )
}
export default PracticeCarousel