import { useEffect, useRef, useState } from 'react'
import data from '../Phase1/data.json'
import './index.css'
const ReCarousel=()=>{
    const [index,setIndex] = useState(0)
    const intervalId = useRef(0)
    const handleNext=()=>{
        setIndex((prev)=>prev===data.length-1 ? 0 :prev+1)
        // setIndex((prev)=>(prev+1)%data.length)
    }
    const handlePrevious=()=>{
        setIndex((prev)=>prev===0 ? data.length-1 :prev-1)
        // setIndex((prev)=>(prev-1+data.length)%data.length)

    }
    useEffect(()=>{
        intervalId.current = setInterval(handleNext,1000)

        return ()=>clearInterval(intervalId.current)
    },[])
    console.log(index,'hahah')
    return(
        <div className='carousel-container-image' onMouseEnter={()=>clearInterval(intervalId.current)}
        onMouseLeave={()=>{
            clearInterval(intervalId)
            intervalId.current = setInterval(handleNext,1000)
        }}>
            <button className='carousel-btn left-btn' onClick={handlePrevious}> 
                {"<"}
            </button>
            <img src={data[index].download_url} alt={data[index].author} className='caroursel-image'/>
            <button className='carousel-btn right-btn' onClick={handleNext}>
                {">"}
            </button>
        </div>
    )
}
export default ReCarousel