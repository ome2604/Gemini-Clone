import React, { useContext, useState } from "react";
import "./Sidebar.css";
import { assets } from "../../assets/assets";
import { Context } from "../../context/Context";

const Sidebar = () => {
  const [extented, Setextened] = useState(false);
  const {onSent,prevPrompts,setRecentPrompt} = useContext(Context)
  return (
    <>
      <div className="sidebar">
        <div className="top">
          <img onClick={() => Setextened(prev => !prev)} className="menu" src={assets.menu_icon} />
          <div className="new-chat">
            <img src={assets.plus_icon} />
            {extented ? <p>New Chat</p> : null}
          </div>
          {extented ? (
            <div className="recent">
              <p className="recent-title">Recent</p>
                    <div className="recent-entry">
                    <img src={assets.message_icon} />
                    <p>Items...</p>
                  </div>
            </div>
          ) : null}
        </div>
        <div className="bottom">
          <div className="bottom-item recent-entry">
            <img src={assets.question_icon} />
            {extented ? <p>Help</p> : null}
          </div>
          <div className="bottom-item recent-entry">
            <img src={assets.history_icon} />

            {extented ? <p>Activity</p> : null}
          </div>
          <div className="bottom-item recent-entry">
            <img src={assets.setting_icon} />
            {extented ? <p>Settings</p> : null}
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
