class NoteItem {
  title;
  desc;
  due_at;
  created_at = new Date().toLocaleDateString("en-CA");;
  id = Number(localStorage.getItem("currentId"));
  isDone = false;
  constructor(title, desc, dueAt) {
    this.title = title;
    this.desc = desc;
    this.due_at = dueAt;
  }
}
export default NoteItem;
