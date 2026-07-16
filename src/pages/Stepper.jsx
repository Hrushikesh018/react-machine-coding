import { useState } from "react";
import './Stepper.css'
const Stepper = () => {
  const [activeStep,setActiveStep] = useState(0)
  const StepData = [
    {
      id: 1,
      name: "profile",
      content: "User profile data",
    },
    {
      id: 2,
      name: "Address",
      content: "User Address data",
    },
    {
      id: 3,
      name: "Info",
      content: "User Info data",
    },
    {
      id: 4,
      name: "Payment",
      content: "User Payment data",
    },
  ];
  const handleStepBack=()=>{
    if(activeStep===0){
      return
    } 
    setActiveStep(prev=>prev-1)
  }
  const handleStepNext=()=>{
     if(activeStep===StepData.length-1){
      return
    } 
    setActiveStep(prev=>prev+1)
  }
  return (
    <div className="container">
      {StepData.map((item,index) => (
        <div key={item.id} className="Step" onClick={()=>setActiveStep(index)}>
          <div className={`step-circle ${index <=activeStep ? 'active':''}`}>
              {index+1}
              {index+1!==StepData.length && <div className={`step-line ${index <activeStep ? 'active-line':''}`}></div>}
          </div>
          <div  className="step-name">
              {item.name}
          </div>
        </div>
      ))}
      {activeStep>0 && <button onClick={handleStepBack} className="button">
        back
      </button>}
      {activeStep <StepData.length-1 && <button onClick={handleStepNext} className="button">next</button>}
    </div>
  );
};

export default Stepper;

//steps 1-2-3-4
//back next buttons
//display active step content
