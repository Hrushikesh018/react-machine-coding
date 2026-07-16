import { useState } from "react";
 const mockData = [
  { id: 1, label: "React" },
  { id: 2, label: "Angular" },
  { id: 3, label: "Vue" },
  { id: 4, label: "Svelte" },
  { id: 5, label: "Next.js" },
  { id: 6, label: "Node.js" },
  { id: 7, label: "Express" },
  { id: 8, label: "MongoDB" },
  { id: 9, label: "PostgreSQL" },
  { id: 10, label: "TypeScript" },
];
const TransferList = () => {
  const [available, setAvailable] = useState(mockData);
  const [selected, setSelected] = useState([]);
  const [leftSelected, setLeftSelected] = useState([]);
  const [rightSelected, SetRightSelected] = useState([]);
  const handleSelected = (side, item) => {
    if (side === "left") {
      setLeftSelected((prev) =>
        prev.includes(item) ? prev.filter((id) => id != item) : [...prev, item],
      );
    }
    if (side === "right") {
      SetRightSelected((prev) =>
        prev.includes(item) ? prev.filter((id) => id != item) : [...prev, item],
      );
    }
  };
  const moveleft=()=>{
   const itemsToMove = selected.filter((item)=>rightSelected.includes(item.id))
   setSelected((prev)=>prev.filter(item=>!rightSelected.includes(item.id)))
   setAvailable(prev=>[...prev,...itemsToMove])
   SetRightSelected([])
  }
  const moveRight=()=>{
   const itemstoMove = available.filter((item)=>leftSelected.includes(item.id))
   setAvailable((prev)=>prev.filter(item=>!leftSelected.includes(item.id)))
   setSelected((prev)=>[...prev,...itemstoMove])
   setLeftSelected([])
  }
  return (
    <div>
      <div>
        {available.map((item) => (
          <div key={item.id}>
            {item.label}
            <div>
              <input
                type="checkbox"
                onChange={() => handleSelected("left", item.id)}
                checked={leftSelected.includes(item.id)}
              />
            </div>
          </div>
        ))}
      </div>
      <button onClick={moveleft}>Move left</button>
      <button onClick={moveRight}>Move right</button>
      <div>
        {selected?.map((item) => (
          <div key={item.id}>
            {item.label}
            <div>
              <input
                type="checkbox"
                onChange={() => handleSelected("right", item.id)}
                checked={rightSelected.includes(item.id)}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default TransferList;
