import React from "react";
import { MessageHeader } from "./MessageHeader";
import Messages from "./Messages";
import MessageInput from "./MessageInput";
import Welcome from "./Welcome";
import { useContext } from "react";
import { CurrentChat } from "../../contexts/currentChat";

const MessageContainer = () => {
  const { chatingWith } = useContext(CurrentChat);
  return (
    <div className=" messageContainer md:min-w-[450px] flex flex-col w-full ">
      {chatingWith ? (
        <>
          <MessageHeader />
          <Messages chatingWith={chatingWith} />
          <MessageInput />
        </>
      ) : (
        <Welcome />
      )}
    </div>
  );
};

export default MessageContainer;
