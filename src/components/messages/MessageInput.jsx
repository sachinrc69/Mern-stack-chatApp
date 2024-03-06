import React from "react";
import { useState } from "react";

import { BsSendFill } from "react-icons/bs";
import useSendMessage from "../../hooks/useSendMessage";
import { messagesContext } from "../../contexts/messages";
import { useContext } from "react";
const MessageInput = () => {
  const { messages, setMessages } = useContext(messagesContext);
  const { sendMessage, loading } = useSendMessage();
  const [message, setMessage] = useState("");
  const sendMessageHandler = (e) => {
    e.preventDefault();
    if (message.length !== 0) {
      const success = sendMessage({ message });
      if (success) {
        setMessage("");
      }
    }
  };
  return (
    <form className="p-4" onSubmit={sendMessageHandler}>
      <div className="w-full relative">
        <input
          type="text"
          placeholder="Send message... "
          className="input input-bordered input-primary w-full text-white text-l block"
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
          }}
        />
        <button
          type="submit"
          className="absolute inset-y-0 items-center end-0 flex pe-3"
        >
          {loading ? (
            <span className="loading loading-ring"></span>
          ) : (
            <BsSendFill></BsSendFill>
          )}
        </button>
      </div>
    </form>
  );
};

export default MessageInput;
