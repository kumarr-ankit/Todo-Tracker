import React from "react";
import "./Component.css";

 

function AddNewNote({ showForm, setShowFrom }) {
  function addNewNote() {
    console.log("New Note added. ✅");
    setShowFrom(!showForm);
  }

  console.log("Form Showed👋");
  return (
    <div onClick={addNewNote}>
      <div id="add-note">
        <i className="fa-solid fa-white fa-note-sticky"></i>
        
        
        
        <span id="add-note-span">Add new todo</span>
      </div>
    </div>
  );
}

export default AddNewNote;
