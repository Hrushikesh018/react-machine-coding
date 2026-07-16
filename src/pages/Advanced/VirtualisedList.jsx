import { useState } from "react";
const height = 400;
const width = 300;
const itemHeight = 35;
const VirtualisedList = () => {
  const [scrollTop, setScrollTop] = useState(0);
  const LIST = Array.from({ length: 10000 }, (_, index) => index + 1);
  const visibleCount = Math.ceil(height / itemHeight);
  const startIndex = Math.max(0, Math.floor(scrollTop / itemHeight) - 5);
  const endIndex = Math.min(LIST.length, startIndex + visibleCount + 10);
  const visibleItems = LIST.slice(startIndex, endIndex);

  const handleScroll = (e) => {
    setScrollTop(e.target.scrollTop);
  };
  const offSet = startIndex*itemHeight

  return (
    <div
      className="container"
      onScroll={handleScroll}
      style={{ height, width, background: "grey", overflow: "auto" }}
    >
      <div style={{ height: LIST.length * itemHeight, position: "relative" }}>
        <div style={{transform:`translateY(${offSet}px)`}}>
        {visibleItems.map((item) => {
          return (
            <div
              className="item"
              style={{
                height: itemHeight,
                background: "coral",
                borderTop: "5px solid grey",
                // position: "absolute",
                width: "100%",
              }}
            >
              {"Item" + item}
            </div>
          );
        })}
        </div>
      </div>
    </div>
  );
};

export default VirtualisedList;
