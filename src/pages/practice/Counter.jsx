import { useState } from "react"

const Counter=()=>{
    const [count,setCount]  = useState(0)

    return (    
        <div>
            <div>
                {count}
            </div>
            <button onClick={()=>setCount(count+1)}>
                    increment
            </button>
            <button onClick={()=>setCount(count-1)}>
                    decrement
            </button>
            <button onClick={()=>setCount(0)}>
                    reset
            </button>
        </div>
    )
}
export default Counter