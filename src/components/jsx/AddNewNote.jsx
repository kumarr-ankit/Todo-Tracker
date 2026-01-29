import React from "react";
import "../css/Component.css";
import { NotebookPenIcon, PenBox, Pencil, Plus } from "lucide-react";

function AddNewNote({ showForm, setShowFrom }) {
  function addNewNote() {
    setShowFrom(!showForm);
  }

  return (
    <div onClick={addNewNote}>
      <div id="add-note">
        
       
        <NotebookPenIcon size={'18px'}  />
        
        <span id="add-note-span">Add new todo</span>
      </div>
    </div>
  );
}

export default AddNewNote;
