import { useState } from "react";
import './index.css'

const Accordian = () => {
  const [active, setActive] = useState(0);
  const data = [
    {
      id: 1,
      label: "Home",
      content: "This is Home Content",
    },
    {
      id: 2,
      label: "Profile",
      content: "This is Profile Content",
    },
    {
      id: 3,
      label: "Settings",
      content: "This is Settings Content",
    },
    {
      id: 4,
      label: "Home",
      content: "This is Home Content",
    },
    {
      id: 5,
      label: "Profile",
      content: "This is Profile Content",
    },
    {
      id: 6,
      label: "Settings",
      content: "This is Settings Content",
    },
  ];
  return (
    <div>
      <div className="accordians">
        {data.map((item)=>(
            <div key={item.id} onClick={()=>setActive(item.id)} className="cell">
                <div className="accordian-item">
                    {item.label}
                </div>
                {active ===item.id &&<div>{item.content}</div>}
            </div>
        ))}
      </div>
    </div>
  );
};

export default Accordian;
