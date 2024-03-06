import React from "react";
import SearchUser from "./SearchUser";
import { Users } from "./Users";
import CurrentUserHeader from "./CurrentUserHeader";

function SidebarContainer() {
  return (
    <div className="border-r border-black flex flex-col p-0 w-5/12 h-screen">
      <CurrentUserHeader />
      <SearchUser />
      <div className="divider p-0 m-0"></div>
      <Users />
    </div>
  );
}

export default SidebarContainer;
