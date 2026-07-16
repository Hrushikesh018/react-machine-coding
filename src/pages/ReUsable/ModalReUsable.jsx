import { useEffect } from "react";

const Modal = ({ children, open ,onClose ,name}) => {
    useEffect(()=>{
        const handleEscape=(e)=>{
            if(e.key=="Escape"){
                onClose()
            }
        }
        window.addEventListener("keydown",handleEscape)

        return ()=>{
            window.removeEventListener("keydown",handleEscape)
        }
    },[onClose])

    if(!open) return null 
  return (

        <div className={`overlay ${name}`} onClick={onClose} >
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <div>{children}</div>
          </div>
        </div>
  );
};

export default Modal;
