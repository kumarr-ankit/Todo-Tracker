
import "../../App.css";
import NoteCard from "./NoteCard";
import NothingElement from "./NothingElement";

function NotesWrapper({updateNote, data, refreshData,deleteNoteById }) {
  function updateTodo(id, changes) {

    refreshData(changes);
  }

  return (
    <div>
      <ul className="notes-wrapper">
        {data.length > 0 ? (
          data.map((el, idx) => (
            <NoteCard
              key={el.id ?? idx}
              updateTodo={updateTodo}
              deleteNoteById={deleteNoteById}
              details={el}
              updateNote={updateNote}
            />
          ))
        ) : (
          <NothingElement />
        )}
      </ul>
    </div>
  );
}

export default NotesWrapper;
