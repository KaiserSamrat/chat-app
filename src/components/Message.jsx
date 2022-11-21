import React from "react";
import cam from "../img/cam.png";
import user from "../img/user.jpg";
const Message = () => {
  return (
    <div className="message owner">
      <div className="messageInfo">
        <img src={user} alt="" />
        <span>Just now</span>
      </div>
      <div className="messageContent">
        <p>Hello</p>
        <img src={user} alt="" />
      </div>
    </div>
  );
};

export default Message;
