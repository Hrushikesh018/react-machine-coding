import { useState } from "react";

const PracticeCounter = () => {
    const [value,setValue] = useState(0)
    const handleIncrement=()=>{
        setValue(prev=>prev+1)
    }
    const handleDecrement=()=>{
        if(value===0){
            return;
        }
        setValue(prev=>prev-1)
    }
  return (
    <div>
        <div>{value}</div>
      <button onClick={handleIncrement}>increment</button>
      <button  onClick={()=>setValue(0)}>reset</button>
      {value !=0 && <button onClick={handleDecrement}>decrement</button>}
    </div>
  );
};

export default PracticeCounter;
