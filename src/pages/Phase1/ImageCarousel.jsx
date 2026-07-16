import "./index.css";
import data from "./data.json";
import { useEffect, useRef, useState } from "react";
const ImageCarousel = () => {
  const [index, setIndex] = useState(0);
  const data_length = data.length;
  const interval = useRef(0)

  const handleNext = () => {
    // if (index === data_length - 1) {
    //   setIndex(0);
    // } else {
    //   setIndex(index + 1);
    // }
    setIndex((prev)=>{
        if (prev===data_length-1){
            return 0
        }
        return prev+1
    })
  };
  const handlePrevious = () => {
    if (index === 0) {
      setIndex(data_length - 1);
    } else {
      setIndex(index - 1);
    }
  };
  useEffect(()=>{
    interval.current = setInterval(handleNext,1000)

    return ()=>{
        clearInterval(interval.current)
    }
  },[])
  return (
    <div className="container" onMouseEnter={()=>clearInterval(interval)}>
      <div className="left-btn" onClick={handlePrevious}>
        {"<"}
      </div>
      <img src={data[index].download_url} alt="" />
      <div className="right-btn" onClick={handleNext}>
        {">"}
      </div>
    </div>
  );
};
export default ImageCarousel;
