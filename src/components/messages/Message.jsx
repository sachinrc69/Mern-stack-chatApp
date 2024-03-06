import React, { useRef } from "react";

const Message = ({ chatType, message, avatar }) => {
  const posi = useRef(chatType);
  return (
    <div
      className={`  mb-3 chat ${posi.current ? "chat-start" : "chat-end  "}`}
    >
      <div className="chat-image avatar">
        {/* <div className="w-10 rounded-full">
          <img alt="Tailwind CSS chat bubble component" src={avatar} />
        </div> */}
      </div>
      <div
        className={`text-white font-serif  text-lg chat-bubble ${
          posi.current ? "bg-blue-400" : " bg-green-400 "
        }`}
      >
        {message}
      </div>
    </div>
  );
};

export default Message;
