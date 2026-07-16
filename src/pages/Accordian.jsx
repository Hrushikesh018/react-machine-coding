// import { useState } from "react";

import { useEffect, useState } from "react";

// function Accordian({ items }) {
//   const [openIndex, setOpenIndex] = useState(null);

//   const handleToggle = (index) => {
//     setOpenIndex(openIndex === index ? null : index);
//   };
//   return (
//     <div>
//       {items.map((item, index) => (
//         <div key={item.id}>
//           <button onClick={() => handleToggle(index)}>{item.title}</button>
//           {openIndex === index && <div>{item.content}</div>}
//         </div>
//       ))}
//     </div>
//   );
// }

// export default Accordian;

function useDebounce(val, delay) {
  const [value, setValue] = useState(val);
  useEffect(() => {
    const timer = setTimeout(() => {
      setValue(val);
    }, delay);
    return () => clearTimeout(timer);
  }, [val,delay]);

  return value;
}

export default useDebounce;
