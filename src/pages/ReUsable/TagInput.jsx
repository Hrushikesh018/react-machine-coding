import { useState } from "react";
import "./TagInput.css";
export default function TagInput({ tags, onChange }) {
  const [input, setInput] = useState("");
  const [selectedTag, setSelectedTag] = useState(-1);

  const handleKeyDown = (e) => {
    if (e.key === " " && input.trim()) {
      e.preventDefault();
      if (!tags.includes(input.trim())) {
        if (!isValidEmail(input.trim())) {
          return;
        }
        onChange([...tags, input.trim()]);
      }
      setInput("");
      setSelectedTag(-1);
    }
    if (e.key === "Backspace" && input === "") {
      if (tags.length === 0) return;
      if (selectedTag === -1) {
        setSelectedTag(tags.length - 1);
      } else {
        const updatedTags = [...tags];

        updatedTags.splice(selectedTag, 1);
        onChange(updatedTags);
        setSelectedTag(-1);
      }
    }
  };
  function isValidEmail(str) {
    // return str.includes("@") && str.includes(".");
    const atInd = str.indexOf("@")

    const dotIndex = str.lastIndexOf(".")

    if (atInd === -1) return false

    if(dotIndex ===-1 ) return false

    if(dotIndex < atInd) return false

    if(dotIndex === str.length-1) return false


    return true

  }

  const handleChange = (e) => {
    const data = e.target.value;
    // if(!data.trim()) return
    // const email = data.trim()

    setInput(data);
    setSelectedTag(-1);
  };

  const removeTags = (index) => {
    const updatedTags = [...tags];
    updatedTags.splice(index, 1);
    onChange(updatedTags);
    setSelectedTag(-1);
  };

  return (
    <div className="plunker-tags-input">
      {/* <div> */}
      {tags.map((tag, index) => (
        <div className="plunker-tag-item" key={index}>
          <span className="plunker-tag-name">{tag}</span>
          <button
            type="button"
            className="plunker-tag-remove"
            onClick={removeTags}
          >
            ×
          </button>
        </div>
        // </div>
      ))}
      {/* </div> */}
      <input
        value={input}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        className="plunker-tag-input"
      />
    </div>
  );
}
