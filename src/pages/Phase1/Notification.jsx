import { useEffect, useState } from "react";
import './index.css'
const Toast=({toast,onClose})=>{

    useEffect(()=>{
        const timer =setTimeout(()=>{
            onClose(toast.id)
        },3000)

        return ()=>clearTimeout(timer)
    },[toast.id,onClose])
    console.log(toast,'hahahah')
    return(
        <div className={`toast ${toast.type}`}>
            <div>{toast.content}</div>
            <button onClick={()=>onClose(toast.id)}>
                X
            </button>
        </div>
    )
}

const Notification = () => {
  const [notifications, setNotifications] = useState([]);
  const handleNotification=(text,type)=>{
    const Notification = {
        id:Date.now(),
        content:text,
        type:type
    }
    setNotifications(prev=>[...prev,Notification])
  }
  const removeToast=(id)=>{
    setNotifications(prev=>prev.filter(item=>item.id!==id))
  }
  return (
    <div>
      Hello this is Notification
      <div className="toast-container">
        {notifications.map((item)=>(
            <div key={item.id}>
                <Toast toast={item} onClose={removeToast}/>
            </div>
        ))}
      </div>
      <button onClick={()=>handleNotification("Hello","success")}>Success</button>
      <button onClick={()=>handleNotification("Hello","error")}>Error</button>
      <button onClick={()=>handleNotification("Helloo" , "Pending")}>Pending</button>
    </div>
  );
};

export default Notification;
