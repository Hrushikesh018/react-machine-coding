import { useState } from "react"
import './ReactToastr.css'
const ReactToastr=()=>{
    const [messages , setMessages] = useState([])

    const handleButton=(type)=>{
        const id = Date.now()
        const newToast = {
            id,type,visible:true
        }
        setMessages((prev)=>{
            const updated = [...prev,newToast]

            if(updated.length > 3){
                updated.shift()
            }
            return updated
        })

        setTimeout(()=>handleDelete(id),3000)
    }
    const handleDelete=(id)=>{

        setMessages((prev)=>prev.map((item)=>item.id===id ? {...item, visible:false} :item))

       setTimeout(()=>{
            setMessages((prev)=>prev.filter(item=>item.id!=id))
       },300)
    }
    return(
        <div>
            <button onClick={()=>handleButton('success')}>
                    success
            </button>
            <button onClick={()=>handleButton('error')}>    
                    error
            </button>
            <button onClick={()=>handleButton('info')}>
                    info
            </button>
            <button onClick={()=>handleButton('warning')}>
                    warning
            </button>
            <div className="toast-container">

            
            {messages.map((item)=>(
                <div key={item.id} className={`toast ${item.type} ${item.visible ? "show" : "hide"}`}>
                    {item.type}
                    <div onClick={()=>handleDelete(item.id)}>X</div>
                </div>
            ))}
            </div>
        </div>
    )
}

export default ReactToastr



//4 buttons //toastrs where is it top right one by one 