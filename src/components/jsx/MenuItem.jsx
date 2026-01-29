import React, { useEffect, useRef, useState } from "react";
import "../css/NoteCard.css";
import { Delete, Pencil, Send, Trash } from "lucide-react";
import supabase from "../../config/supabaseClient.js";
import NoteEditor from "./NoteEditor.jsx";

async function SupDeleteNote(id, callback) {
  callback(id);
  let { error } = await supabase.from("Todos").delete().eq("id", id);
  if (error) alert(error.message);
}
function MenuItem({
  menuClass,
  setShow,
  setData,
  details,
  updateNote,
  deleteNoteById,
  openLeft,
  onEdit,
}) {
  let menuRef = useRef();

  function ChangeMenuUI() {
    event.stopPropagation();
    if (
      menuRef.current != undefined &&
      !menuRef.current.contains(event.target)
    ) {
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
  }
  function ThisdeleteNote() {
    event.stopPropagation();

    SupDeleteNote(details.id, deleteNoteById);
  }

  const [visible, setVisible] = useState(false);

  return (
    <div ref={menuRef} className={menuClass} onClick={handleClick}>
      <div
        className="menu-item edit"
        onClick={(e) => {
          e.stopPropagation();
          onEdit(setVisible);
        }}
      >
        <Pencil height={"12px"} />
        Edit
        <NoteEditor
          openLeft={openLeft}
          visible={visible}
          setVisible={setVisible}
          details={details}
          setData={setData}
          updateNote={updateNote}
        />
      </div>
      <div className="menu-item danger" onClick={ThisdeleteNote}>
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
