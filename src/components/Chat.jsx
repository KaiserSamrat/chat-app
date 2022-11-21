import React from "react";
import Add from '../img/addAvatar.png'
import more from '../img/more.png'
import cam from '../img/cam.png'
import Messages from "./Messages";
import Input from "./Input";
const Chat = () => {
  return <div className="chat">
    <div className="chatInfo">
        <span>Jane</span>
        <div className="chatIcons">
            <img src={cam} alt=''/>
            <img src={Add} alt=''/>
            <img src={more} alt=''/>
        </div>
       
    </div>
    <Messages/>
    <Input/>
    </div>;
};

export default Chat;
