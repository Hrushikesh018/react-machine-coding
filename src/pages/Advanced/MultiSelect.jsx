import { useEffect, useRef, useState } from "react";

const MultiSelectDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState([]);
  const ref = useRef(null)

  const options = ["React", "Angular", "Vue", "Node"];
  const handleOptionsChange = (item) => {
    if (selected.includes(item)) {
      setSelected((prev) => prev.filter((el) => el !== item));
    } else {
      setSelected((prev) => [...prev, item]);
    }
  };
  const handleDelete=(item)=>{
    setSelected(prev=>prev.filter(el=>el!==item))
  }
  useEffect(()=>{
    const handleOutSide=(event)=>{
        if(ref.current && !ref.current.contains(event.target)){
            setIsOpen(false)
        }
    }
    document.addEventListener("click",handleOutSide)

    return ()=>{
        document.removeEventListener("click",handleOutSide)
    }
  },[])
  return (
    <div ref={ref}>
      <button onClick={() => setIsOpen(prev=>!prev)}>open</button>
      {isOpen && (
        <div>
          {" "}
          {options.map((item) => (
            <div key={item}>
              <input
                type="checkbox"
                checked={selected.includes(item)}
                onChange={() => handleOptionsChange(item)}
              />
              {item}
            </div>
          ))}
        </div>
      )}
      <div>
        {selected.map((item) => (
          <div key={item}>
            {item}
            <span onClick={()=>handleDelete(item)}>X</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MultiSelectDropdown;
