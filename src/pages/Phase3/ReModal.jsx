import { useEffect, useState } from "react";

const ReModal=()=>{
    const [open,setOpen] = useState(false)

    useEffect(()=>{
        const handleEscape=(e)=>{
            if(e.key==="Escape"){
                setOpen(false)
            }
        }
        window.addEventListener("keydown" , handleEscape)

        return ()=>{
            window.removeEventListener("keydown",handleEscape)
        }
    },[])
    return(
        <div>
            <button  onClick={()=>setOpen(true)}>Open Modal</button>
            {open &&<div className="Modal-container" onClick={()=>setOpen(false)}>
                <div className="Modal" onClick={(e)=>e.stopPropagation()}>
                    <div>
                        Modal text
                    </div>
                    <Button onClick={()=>setOpen(false)}>
                        close button
                    </Button>
                </div>
            </div>}
        </div>
    )
}

export default ReModal;