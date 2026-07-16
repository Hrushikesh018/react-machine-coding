import { useState } from "react";

const StarRating = () => {
  const [hoverState, setHoverState] = useState(0);
  const [selectedState, setSelectedState] = useState(0);

  return (
    <div>
      {Array.from({ length: 5 }, (_, index) => {
        return (
          <div onMouseEnter={() => setHoverState(index + 1)}>
            onClick={() => setSelectedState(index + 1)}
            onMouseLeave={() => setHoverState(0)}
            {index + 1 <= (hoverState || selectedState) ? "★" : "☆"}
          </div>
        );
      })}
    </div>
  );
};

export default StarRating;
