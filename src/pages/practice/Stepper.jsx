import { useState } from "react";

const Stepper = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const steps = [
    {
      id: 1,
      title: "Personal Info",
      content: "Step 1 Content",
    },
    {
      id: 2,
      title: "Address",
      content: "Step 2 Content",
    },
    {
      id: 3,
      title: "Payment",
      content: "Step 3 Content",
    },
  ];
  const handleClick = (index) => {};
usecallback ( function add(){
    something returns 
  },[count])
  return (
    <div>
      {steps.map((step, index) => {
        return (<div key={step.id} onClick={()=>handleClick(index)}>

          <div>
            <div className={`circle ${activeIndex >= index ? "active" : ""}`}>
              {step.id}
            </div>
            {index + 1 < steps.length - 1 && (
              <div
                className={`line ${activeIndex >= index ? "active" : ""}`}
              ></div>
            )}
          </div>
          <div>{step.content}</div>
        </div>)
      })}
    </div>
  );
};
export default Stepper;



//input1 0
//input3 1
//input2 2
//input3 3

parent