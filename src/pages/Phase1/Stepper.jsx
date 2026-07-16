import { useState } from "react";
import './index.css'
const Stepper = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const steps = ["Login", "Shipping", "Payment", "Confirmation"];

  const handleBack=()=>{
    if(activeIndex<=0){
        return
    }
    setActiveIndex(prev=>prev-1)
  }
  const handleNext=()=>{
    if(activeIndex===steps.length-1){
        return;
    }
    setActiveIndex(prev=>prev+1)
  }
  console.log(activeIndex,'hahaha')
  return (
    <div>
      {steps.map((step, index) => (
        <div
          onClick={() => setActiveIndex(index)}
          className={activeIndex >= index ? "active" : ""}
        >
          <div>{index + 1}</div>
          {step}
        </div>
      ))}
      <button onClick={handleBack}>prev</button>
      <button onClick={handleNext}>next</button>
    </div>
  );
};

export default Stepper;
