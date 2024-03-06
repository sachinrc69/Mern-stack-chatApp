import React, { useState, useEffect } from "react";

import { useContext } from "react";
import { CurrentChat } from "../../contexts/currentChat";

export const MessageHeader = () => {
  const { chatingWith } = useContext(CurrentChat);
  const [user, setUser] = useState(null);
  const authToken = localStorage.getItem("authToken");

  const getChattingWithDetails = async () => {
    const res = await fetch(`http://localhost:5000/api/users/${chatingWith}`, {
      headers: { Authorization: "Bearer " + authToken },
    });
    const resData = await res.json();
    setUser(resData);
    if (res.ok) {
    }
  };
  useEffect(() => {
    getChattingWithDetails();
  }, [chatingWith]);

  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">{user?.username}</a>
      </div>
      <div className="flex-none gap-2">
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img alt="Tailwind CSS Navbar component" src={user?.profilePic} />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
          >
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
