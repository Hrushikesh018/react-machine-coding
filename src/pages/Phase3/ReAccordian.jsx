import { useState } from "react";

const ReAccordian = () => {
  const [activeIndex, setActiveIndex] = useState([]);
  const data = [
    {
      id: 1,
      title: "What is React?",
      content: "React is a UI library",
    },
    {
      id: 2,
      title: "What is useState?",
      content: "useState manages state",
    },
  ];
  const handleItemClick = (id) => {
    setActiveIndex((prev) =>
      prev.includes(id) ? prev.filter((item) => item != id) : [...prev, id],
    );
  };
  return (
    <div>
      {data.map((item) => {
        const activeStep = activeIndex.includes(item.id)
        return (
          <div key={item.id} onClick={() => handleItemClick(item.id)}>
            <div>{item.title}</div>
            {activeStep&& <div>{item.content}</div>}
          </div>
        );
      })}
    </div>
  );
};

export default ReAccordian;
