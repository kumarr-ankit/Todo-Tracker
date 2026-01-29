import "../css/NoteCard.css";
import "../css/Component.css";
import { Calendar1, CalendarFold, EllipsisVertical } from "lucide-react";
import MenuItem from "./MenuItem";
import { useRef, useState } from "react";
import { CleaningBucketFreeIcons } from "@hugeicons/core-free-icons";
import supabase from "../../config/supabaseClient";

async function updateNoteStatus(id, status) {
  const { error } = await supabase
    .from("Todos")
    .update({ isDone: status })
    .eq("id", id)
    .select();

  if (error) alert(error.message);
}
function NoteCard({ details, updateNote, deleteNoteById }) {
  localStorage.setItem("currentId", Number(details.id) + 1);
  const [detailsTouched, setdetailsTouched] = useState(false);
  const [check, setCheck] = useState(details.isDone);
  const [show, setShow] = useState(false);
  const [openLeft, setOpenLeft] = useState(false);
  const cardRef = useRef(null);
   

  function showMenu(e) {
    e.stopPropagation();
    if (e && e.preventDefault) e.preventDefault();
    setShow((s) => !s);
  }
  function handleCheck() {
    let nextStatus = !check;
    setCheck(nextStatus);
    updateNoteStatus(details.id, nextStatus);
  }

    function openEditor(callback) {
    const rect = cardRef.current.getBoundingClientRect();
    const editorWidth = 360; // approx width of editor popup

    if (rect.right + editorWidth > window.innerWidth) {
      setOpenLeft(true);
    } else {
      setOpenLeft(false);
    }

    callback(p=> !p)
  }


  return (
    <>
      <div className="note-card" ref={cardRef} onContextMenu={showMenu}>
        <MenuItem
          show={show}
          openLeft={openLeft}
          onEdit={openEditor}
          updateNote={updateNote}
          id={details.id}
          setShow={setShow}
          deleteNoteById={deleteNoteById}
          details={details}
         
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
        <div>
          <input
            type="checkbox"
            onChange={handleCheck}
            checked={check}
            className="check-done"
            id="done"
          />{" "}
          {!check && <span className="check-txt">Mark Done?</span>}
          {check && <span className="check-txt">Marked Done.</span>}
        </div>
        <details
          about="dates"
          onClick={(e) => {
            e.stopPropagation();
            setdetailsTouched((state) => !state);
          }}
        >
          <summary className={detailsTouched ? "detailsTouched" : ""}>
            {" "}
            <CalendarFold height={"12px"} />
            Dates
          </summary>
          <br />
          <div className="note-footer">
            <div>
              <span className="label">
                {/* <Calendar1 height={"12px"} /> */}
                Created:
              </span>
              <span>{details.created_at}</span>
            </div>
            <div>
              <span className="label">Due:</span>

              <span>{details.due_at}</span>
            </div>
          </div>
        </details>
      </div>
    </>
  );
}

export default NoteCard;
