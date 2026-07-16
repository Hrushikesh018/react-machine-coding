import { useState } from "react";
import './index.css'
const PracticeModal = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="main">
      <button onClick={() => setOpen(true)}>open modal</button>

      {open && (
        <div className="p-overlay" onClick={()=>setOpen(false)}>
          <div className="p-Modal" onClick={(e)=>e.stopPropagation()}>
            <div>title</div>
            <div>content</div>
            <button onClick={()=>setOpen(false)}>close</button>
          </div>
        </div>
      )}
    </div>
  );
};
export default PracticeModal;
