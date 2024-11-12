import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <>
      <div className="bg-slate-500 text-black p-5 w-[250px]">
        <div>
          <Link to="profile">Profile</Link>
        </div>
        <div>
          <Link to="users">Users</Link>
        </div>
        <div>
          <Link to="settings">Settings</Link>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
