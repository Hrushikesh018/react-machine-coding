import { useState } from "react";
import './index.css'
const ReStepper = () => {
 const [activeIndex,setActiveIndex] = useState(0)
  const steps = ["Login", "Shipping", "Payment", "Confirmation"];

  return (
    <div>
      <div className="step-containers">
        {steps.map((step,index) => (
          <div className="step-">
            <div className="circle-containers" onClick={()=>setActiveIndex(index)}>
              <div className={`circles ${index <=activeIndex ? 'actives':''}`}>{index+1}</div>
              {index !==steps.length-1 && <div className={`lines ${index <activeIndex ? 'actives':''}`}></div>}
            </div>

            <div className="content">{step}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReStepper;
