import React from "react";
import { useContext } from "react";
import { CurrentChat } from "../../contexts/currentChat";
import { SocketContext } from "../../contexts/socketContext";
export const User = ({ user }) => {
  const { chatingWith, setChattingWith } = useContext(CurrentChat);
  const { onlineUsers } = useContext(SocketContext);
  const isOnline = onlineUsers?.includes(user._id);
  return (
    <>
      <div
        className={` flex items-center px-3 py-2 cursor-pointer ${
          chatingWith === user._id && "bg-blue-400"
        } ${chatingWith !== user._id && " hover:bg-black"}`}
        onClick={() => setChattingWith(user._id)}
      >
        <div className="flex gap-2 items-center rounded p-2 py-1 cursor-pointer">
          <div className={`avatar ${isOnline && "online"}`}>
            <div className=" rounded-full w-16">
              <img src={user.profilePic} />
            </div>
          </div>
        </div>
        <div className="flex flex-col flex-1 ">
          <div className="flex gap-2 justify-between">
            <p className="font-bold text-gray-300 text-xl ">{user.username}</p>
            <span className="text-xl">❤</span>
          </div>
        </div>
      </div>
      {/* <div className="divider p-0 m-0  "></div> */}
    </>
  );
};
