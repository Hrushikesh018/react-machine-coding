import { useState } from "react";
import "./index.css";
const Tabs = () => {
  const [tab, setTab] = useState("Home");
  const data = [
    {
      id: 1,
      label: "Home",
      content: "This is Home Content",
    },
    {
      id: 2,
      label: "Profile",
      content: "This is Profile Content",
    },
    {
      id: 3,
      label: "Settings",
      content: "This is Settings Content",
    },
  ];
  const showContent = data.find((item)=>item.label ===tab)

  console.log(showContent,'hahaha')

  return (
    <div>
      {/* <div className="tabs">
            <button onClick={()=>setTab('Home')} className={tab==="Home" ? 'active':''}>
                Home
            </button>
            <button onClick={()=>setTab('Profile')} className={tab==="Profile" ? 'active':''}>
                profile
            </button>
            <button onClick={()=>setTab('Settings')} className={tab==="Settings" ? 'active':''}>
                Settings
            </button>
        </div>
        <div className="content">
            {page_content[tab]}
        </div> */}
        <div>
            {data.map((item)=>(
                <div key={item.id}>
                    <button onClick={()=>setTab(item.label)}>
                            {item.label}
                    </button>
                </div>
            ))}
            <div>{showContent.content}</div>
        </div>
    </div>
  );
};

export default Tabs;
