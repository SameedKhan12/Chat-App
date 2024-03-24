import React from "react";
import { useAuthContext } from "../../context/AuthContext";
import extractTimeAndDate from "../../utils/extractTimeAndDate";
import useConversation from "../../zustand/useConversation";
const Message = ({ message }) => {
  const { authUser } = useAuthContext();
  const { selectedConversation } = useConversation();
  const fromMe = message.senderId === authUser._id;
  // console.log(fromMe)
  const chatClassName = fromMe ? "chat-end" : "chat-start";
  const profilePic = fromMe
    ? authUser.profilePic
    : selectedConversation?.profilePic;
  const bgColor = fromMe ? "bg-sky-500" : "";
  const dateAndTime = extractTimeAndDate(message.createdAt);
  const shake = message.shouldShake?"shake":""
  return (
    <div>
      <div className={`chat ${chatClassName}`}>
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img alt="Tailwind CSS chat bubble component" src={profilePic} />
          </div>
        </div>
        <div className={`chat-bubble text-white ${bgColor} ${shake}`}>
          {message.message}
        </div>
        <div className="chat-footer opacity-50">{dateAndTime.time}</div>
      </div>
    </div>
  );
};

export default Message;
