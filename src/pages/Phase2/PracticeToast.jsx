import { useEffect, useState } from "react";
import "./index.css";
const Toast = ({ toast, onClose }) => {
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      onClose(toast.id);
    }, 2000);

    return () => clearTimeout(timeoutId);
  }, [toast.id, onClose]);
  return (
    <div className={`toast ${toast.type}`}>
      {toast.text}
      <button onClick={() => onClose(toast.id)}> X</button>
    </div>
  );
};
const PracticeToast = () => {
  const [toasts, setToasts] = useState([]);
  const handleAddToasts = (type) => {
    const latest = {
      id: Date.now(),
      text: "Success",
      type: type,
    };
    setToasts((prev) => [...prev, latest]);
  };
  const handleToastClose = (id) => {
    setToasts((prev) => prev.filter((item) => item.id !== id));
  };
  return (
    <div>
      <button onClick={() => handleAddToasts("success")}>success toast</button>
      <button onClick={() => handleAddToasts("failure")}>failure toast</button>

      <button onClick={() => handleAddToasts("pending")}>pending toast</button>
      <div className="toast-container">
        {toasts.map((item) => (
          <div key={item.id}>
            <Toast toast={item} onClose={handleToastClose} />
          </div>
        ))}
      </div>
    </div>
  );
};
export default PracticeToast;
