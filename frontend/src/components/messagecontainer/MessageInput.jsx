import React, { useState } from "react";
import { BsSend } from "react-icons/bs";
import useSendMessage from "../../hooks/useSendMessage";
const MessageInput = () => {
  const [message, setMessage] = useState("");
  const {loading,sendMessage} = useSendMessage()
  const handleSubmit = async (e) => {
    e.preventDefault();
    if(!message) return
    await sendMessage(message)
    setMessage("")
  };

  return (
    <form className="px-4 my-2" onSubmit={(e)=>handleSubmit(e)}>
      <div className="w-full  relative">
        <input
          type="text"
          placeholder="Message"
          className=" border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 text-white"
          value={message}
          onChange={(e)=>setMessage(e.target.value)}
        />
        <button disabled={loading} className="absolute z-20 flex items-center pe-3 inset-y-0 end-0">
          {loading?<span className="loading loading-spinner"/>:<BsSend/>}
        </button>
      </div>
    </form>
  );
};

export default MessageInput;
