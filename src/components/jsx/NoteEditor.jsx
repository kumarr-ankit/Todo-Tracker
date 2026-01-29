import React, { useState } from "react";
import "../css/NoteEditor.css";

import MenuItem from "./MenuItem";

export default function NoteEditor({
  visible,
  setVisible,
  details,
  updateNote,
  openLeft,
}) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [title, setTitle] = useState(details.title);
  const [desc, setDesc] = useState(details.desc);
  const [due_at, setDue_at] = useState(details.due_at);

  function formReset() {
    setTitle(details.title);
    setDesc(details.desc);
    setDue_at(details.due_at);
  }

  function updateData() {
    setIsSubmitting(true);
    let data = {};

    if (title != details.title) {
      data["title"] = title;
    }

    if (desc != details.desc) {
      data["desc"] = desc;
    }

    if (due_at != details.due_at) {
      data["due_at"] = due_at;
    }

    let res = updateNote(details.id, data);

    if (res == 1) setIsSubmitting(false);
    else alert(res);
  }

  return (
    <div
      className={
        visible
          ? `editor-form-container ${openLeft ? "open-left" : "open-right"}`
          : "none"
      }
      onClick={(e) => {
        e.stopPropagation();
      }}
    >
      <div
        className="editor-close-btn"
        onClick={(e) => {
          e.stopPropagation();
          setVisible((p) => !p);
        }}
      >
        ×
      </div>

      <h1 className="editor-title">Update Todo</h1>

      <div className="editor-form">
        <div className="editor-field-group">
          <label htmlFor="title" className="editor-label">
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            className="editor-input"
            placeholder="Enter todo title"
            required
          />
        </div>

        <div className="editor-field-group">
          <label htmlFor="description" className="editor-label">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            value={desc}
            onChange={(e) => {
              setDesc(e.target.value);
            }}
            rows="4"
            className="editor-textarea"
            placeholder="Enter todo description"
          />
        </div>

        <div className="editor-field-group">
          <label htmlFor="dueDate" className="editor-label">
            Due Date
          </label>
          <input
            type="date"
            id="dueDate"
            name="dueDate"
            value={due_at}
            onChange={(e) => {
              setDue_at(e.target.value);
            }}
            className="editor-input"
          />
        </div>

        <div className="editor-button-container">
          <button
            onClick={() => {
              updateData();
            }}
            className={`editor-submit-btn ${
              isSubmitting ? "editor-submit-btn-disabled" : ""
            }`}
          >
            {isSubmitting ? "Updating..." : "Update Todo"}
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setVisible((p) => !p);
              formReset();
            }}
            className="editor-cancel-btn"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
