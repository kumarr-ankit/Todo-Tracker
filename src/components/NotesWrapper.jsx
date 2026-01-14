
import "../App.css";
import { getNotes } from "../../public/DataUtils";
import NoteCard from "./NoteCard";
import NothingElement from "./NothingElement";

function NotesWrapper() {
  function loadData() {
    let notes = getNotes();
    console.log(notes);
    return notes;
  }
  let DataList = loadData();
  return (
    <div>
      <ul className="notes-wrapper">
        {DataList.length > 0 ? (
          DataList.map((el, idx) => (
            <NoteCard key={el.id ?? idx} details={el} id={el.id} />
          ))
        ) : (
          <NothingElement />
        )}
      </ul>
    </div>
  );
}

export default NotesWrapper;
