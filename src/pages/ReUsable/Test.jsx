import { useState } from "react";
import './Test.css'
import TagInput from "./TagInput";

const Test = () => {
    const [tags ,setTags] = useState([
        "React","JS","HTML"
    ])
 
  return (
     <div className="plunker-tags-input">
      <div>Tag Input</div>
      <TagInput tags={tags} onChange={setTags}/>
    </div>
  );
};

export default Test;
