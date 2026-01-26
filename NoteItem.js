class NoteItem {
 
  title;
  desc;
  due_at;
  created_at;
  constructor(title, desc, dueAt) {
    this.title = title;
    this.desc = desc;
    this.created_at = new Date().toLocaleDateString("en-CA");
    this.due_at =  dueAt;
  }

 

  getTitle() {
    return this.title;
  }

  setTitle(title) {
    this.title = title;
  }

  getDesc() {
    return this.desc;
  }

  setDesc(desc) {
    this.desc = desc;
  }

  getDueAt() {
    return this.due_at;
  }

  setDueAt(dueAt) {
    this.due_at = dueAt;
  }

  getCreatedAt() {
    return this.created_at;
  }

  setCreatedAt(createdAt) {
    this.created_at = createdAt;
  }
}
export default NoteItem