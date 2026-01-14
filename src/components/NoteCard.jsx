import React, { useEffect, useRef, useState } from "react";
import "./NoteCard.css";
import "./Component.css";
import {
  Calendar,
  Calendar1,
  CalendarFold,
  EllipsisVertical,
  Menu,
} from "lucide-react";
import { Menu01FreeIcons, Menu07Icon } from "@hugeicons/core-free-icons";
import MenuItem from "./MenuItem";

function NoteCard({ details ,id}) {
  const [show, setShow] = useState(false);
  function showMenu(e) {
    e.stopPropagation();
    if (e && e.preventDefault) e.preventDefault();
    setShow((s) => !s);
  }

  return (
    <>
      <div className="note-card" onContextMenu={showMenu}>
        <MenuItem
          show={show}
          id={id}
          setShow={setShow}
          menuClass={show ? "options show show-as" : "options hide"}
        />
        <div className="note-header">
          <h3 className="note-title">{details.title}</h3>
          <span className="note-id">
            {" "}
            <EllipsisVertical
              id="MenuBtn"
              onClick={showMenu}
              className="menu"
            />{" "}
          </span>
        </div>

        <p className="note-desc">{details.desc}</p>

        <div className="note-footer">
          <div>
            <span className="label">
              <Calendar1 height={"12px"} />
              Created:
            </span>
            <span>{details.createdAt}</span>
          </div>
          <div>
            <span className="label">
              <CalendarFold height={"12px"} />
              Due:
            </span>

            <span>{details.dueAt}</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default NoteCard;
