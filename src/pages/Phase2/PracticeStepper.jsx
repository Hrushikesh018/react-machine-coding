import { useState } from "react";

const PracticeStepper = () => {
  const [active, setActive] = useState(0);
  const steps = ["Login", "Shipping", "Payment", "Confirmation"];

  const handleBack = () => {
    if (active <= 0) {
      return;
    }
    setActive((prev) => prev - 1);
  };

  const handleNext = () => {
    if (active >= steps.length - 1) {
      return;
    }
    setActive((prev) => prev + 1);
  };
  console.log(active, "setActive");
  return (
    <div className="main-container">
      {steps.map((step, index) => {
        return (
          <div className="sub-container" onClick={() => setActive(index)}>
            <div className="item-class">
              <div className={`circle ${index <= active ? "active" : ""}`}>
                {index + 1}{" "}
              </div>
              {index < steps.length - 1 && (
                <span
                  className={`line ${index < active ? "active" : ""}`}
                ></span>
              )}
            </div>
            <div>{step}</div>
          </div>
        );
      })}

      <button onClick={handleBack} disabled={active === 0}>
        prev
      </button>
      <button onClick={handleNext} disabled={active === steps.length - 1}>
        next
      </button>
    </div>
  );
};
export default PracticeStepper;
