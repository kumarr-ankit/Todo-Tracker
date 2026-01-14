import React from "react";
import "./Component.css";
import { LogOut, UserRoundX } from "lucide-react";
import { UserBlockIcon } from "@hugeicons/core-free-icons";
import ModeBtn from "./ModeBtn";

function UserProfile() {
  return (
    <div>
      {" "}
      <div id="show-as">
        <i className="fa-solid fa-user"></i>
        <ul>
          <li id="log-out" className="menu-item">
            <LogOut height={"14px"} className="icon"/>
            Log out
          </li>
          <li id="delete-acc" className="menu-item">
            <UserRoundX height={"14px"} className="icon"/>
            Delete your account
          </li>
          <li className="menu-item"><ModeBtn className="icon"/>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default UserProfile;
