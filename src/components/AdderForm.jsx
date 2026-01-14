import React, { useState } from "react";
import "./Component.css";
import NoteItem from "../../public/NoteItem";
import { addNote } from "../../public/DataUtils";

function AdderForm({ showForm, setShowFrom }) {
  const [isExiting, setIsExiting] = useState(false);

  if (!showForm) return null;

  function CloseForm() {
    setIsExiting(true);

    setTimeout(() => {
      setShowFrom(false);
      setIsExiting(false);
    }, 0);
  }

  function sendData() {
    event.preventDefault();
    let form = document.getElementById("form1");
    let formData = new FormData(form);

    let todo = new NoteItem(
      formData.get("title"),
      formData.get("desc"),
      formData.get("dueAt"),
      formData.get("createdAt")
    );

    addNote(todo);
    CloseForm();
  }

  return (
    <div
      id="form-container"
      className={isExiting ? "form-gone" : "form-appear"}
    >
      <h1 className="page-title">Create a new note </h1>
      <div className="close-btn" id="close-btn" onClick={CloseForm}>
        <i className="fa-solid fa-xmark fa-2xs"></i>
      </div>

      <form id="form1" onSubmit={sendData}>
        <label htmlFor="title">Todo's Title :</label>
        <input
          type="text"
          placeholder="What's is title ?"
          name="title"
          id="title"
          required
        />

        <label htmlFor="dueDate">Deadline :</label>
        <input type="date" name="dueAt" id="dueDate" required />

        <label htmlFor="desc">Description :</label>
        <textarea
          placeholder="Write something about title...."
          name="desc"
          id="desc"
          required
        />

        <button type="submit" id="note-form-btn">
          Submit
        </button>
      </form>
    </div>
  );
}

export default AdderForm;
