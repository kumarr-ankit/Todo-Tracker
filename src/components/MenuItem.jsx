import React, { useEffect, useRef } from "react";
import "./NoteCard.css";
import { Delete, Pencil, Send, Trash } from "lucide-react";

function MenuItem({ menuClass, show, setShow,id }) {
  let menuRef = useRef();

  function ChangeMenuUI() {
    event.stopPropagation();
    if (menuRef.current != undefined && !menuRef.current.contains(event.target)) {
      setShow(false);
    }
  }

  useEffect(() => {
  
    document.addEventListener("mousedown", ChangeMenuUI);

    return () => {
      document.removeEventListener("mousedown", ChangeMenuUI);
    };
  }, []);
  function handleClick() {
    event.stopPropagation();
    console.log("Menu Clicked");
  }
  function deleteNote() {
    event.stopPropagation();
    
    console.log(id)
    console.log('Note delete✅')
  }
  return (
    <div ref={menuRef} className={menuClass} onClick={handleClick}>
      <div className="menu-item">
        <Pencil height={"12px"} />
        Edit
      </div>
      <div className="menu-item danger" onClick={deleteNote}>
        {" "}
        <Trash height={"12px"} /> Delete
      </div>
      <div className="menu-item primary">
        <Send height={"12px"} /> Send
      </div>
    </div>
  );
}

export default MenuItem;
