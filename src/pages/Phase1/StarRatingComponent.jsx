import { useState } from "react";

const StarRatingComponent = () => {
  const [hoverState, setHoverState] = useState(0);
  const [selectedState, setSelectedState] = useState(0);

  return (
    <div>
      {Array.from({ length: 5 }, (_, index) => {
        return (
          <span
          key={index}
            onMouseEnter={() => setHoverState(index + 1)}
            onClick={() => setSelectedState(index + 1)}
            onMouseLeave={()=>setHoverState(0)}
          >
            {index+1 <= (hoverState || selectedState) ? "★" : "☆"}
          </span>
        );
      })}
    </div>
  );
};

export default StarRatingComponent;
