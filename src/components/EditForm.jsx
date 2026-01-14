import React from 'react'
import './Component.css';

function EditForm() {
  return (
    <div>
             <div id="editor">
            <div className="close-btn" id="close-btn-editor">
              <i className="fa-solid fa-xmark"></i>
            </div>
            <h1 className="page-title">Edit Note 📝</h1>
            <form className="edit-note-form" id="editor-form">
              <div className="form-group">
                <label htmlFor="title-ed" className="form-label">
                  Title
                </label>
                <br />
                <input
                  type="text"
                  id="title-ed"
                  name="title"
                  className="form-input-title-input"
                />
              </div>
              <div className="form-group">
                <label htmlFor="dueAt-ed" className="form-label">
                  Due At
                </label>
                <br />
                <input
                  type="date"
                  id="dueAt-ed"
                  name="dueAt"
                  className="form-input-due-at-input"
                />
              </div>
              <div className="form-group">
                <label htmlFor="desc-ed" className="form-label">
                  Description
                </label>
                <br />
                <input
                  id="desc-ed"
                  name="desc"
                  className="form-textarea-desc-input"
                  placeholder="Existing note description..."
                />
              </div>
              <div className="form-actions">
                <button type="submit" className="btn save-btn" id="save-edit">
                  Save Changes
                </button>
                <button
                  type="button"
                  className="btn cancel-btn"
                  id="cancel-editor"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>

    </div>
  )
}

export default EditForm