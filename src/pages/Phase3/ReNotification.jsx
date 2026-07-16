import { useEffect, useState } from "react";

const Toast = ({ toast, onClose }) => {
  useEffect(() => {
    const Timer = setTimeout(() => {
      onClose(toast.id);
    }, 2000);
    return () => clearTimeout(Timer);
  }, []);
  return (
    <div className={`toast ${toast.type}`}>
      <div>{toast.text}</div>
    </div>
  );
};

const ReNotification = () => {
  const [toasts, setToasts] = useState([]);
  const handleClose = (id) => {
    setToasts((prev) => prev.filter((item) => item.id !== id));
  };
  const handleAddToast = (type, text) => {
    setToasts((prev) => [
      ...prev,
      {
        id: Date.now(),
        text: text,
        type: type,
      },
    ]);
  };
  return (
    <div>
      <button
        onClick={() => handleAddToast("success", "this is success message")}
      >
        Add toast
      </button>
      <button onClick={() => handleAddToast("fail", "this is fail message")}>
        Fail toast
      </button>

      <button
        onClick={() => handleAddToast("pending", "this is pending message")}
      >
        Pendinf toast
      </button>

      <div className="toast-container">
        {toasts.map((toast) => (
          <Toast toast={toast} onClose={handleClose} key={toast.id} />
        ))}
      </div>
    </div>
  );
};

export default ReNotification;
