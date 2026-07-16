import { useState } from "react";
import "./Todo.css";
const Accordian = () => {
  const [list, setList] = useState([
    {
      id: 1,
      name: "Accordian 1",
      content: "Accordian content1",
    },
    {
      id: 2,
      name: "Accordian 2",
      content: "Accordian content2",
    },
    {
      id: 3,
      name: "Accordian 3",
      content: "Accordian content3",
    },
    {
      id: 4,
      name: "Accordian 4",
      content: "Accordian content4",
    },
  ]);
  const [active, setActive] = useState(null);

  const handleClick = (id) => {
    if(id===active){
        setActive(null)
        return;
    }
    setActive(id);
  };
  return (
    <div>
      {list.map((item) => (
        <div key={item.id}>
          {" "}
          <div  onClick={() => handleClick(item.id)} className="accordian">
            {item.name}
          </div>
          {active === item.id && <div>{item.content}</div>}
        </div>
      ))}
    </div>
  );
};

export default Accordian;
