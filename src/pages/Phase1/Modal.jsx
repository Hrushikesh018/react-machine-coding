import { useEffect, useState } from "react";
import "./index.css";
const Modal = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        setOpen(false);
      }
    };
    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, []);
  const handleModalClose = () => {
    setOpen(false);
  };
  const handleModalOpen = () => {
    setOpen(true);
  };
  return (
    <div className="home">
      <button onClick={handleModalOpen}>Open</button>
      {open && (
        <div className="overlay" onClick={handleModalClose}>
          <div className="Modal" onClick={(e) => e.stopPropagation()}>
            <div>Title</div>
            <div>Content</div>
            <div>Hahhahaha</div>
            <button onClick={handleModalClose}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
