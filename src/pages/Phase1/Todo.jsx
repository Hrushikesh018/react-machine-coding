import { useState } from "react"

const Todo=()=>{
    const [currentValue,setCurrentValue] = useState(0)

    const handleOperations =(type)=>{
        if(type ==='dec'){
            if(currentValue===0){
                return
            }
            setCurrentValue(prev=>prev-1)
        }else if(type === 'inc'){
            setCurrentValue(prev=>prev+1)
        }else{
            setCurrentValue(0)
        }
    }

    return(
        <div>
            <button onClick={()=>handleOperations('dec')}>
                decrement
            </button>
                {currentValue}
            <button onClick={()=>handleOperations('inc')}>
                increment
            </button>
            <button onClick={()=>handleOperations('reset')}>
                reset
            </button>
        </div>  
    )
}

export default Todo