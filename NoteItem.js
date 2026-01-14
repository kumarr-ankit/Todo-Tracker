class NoteItem {
  id = crypto.randomUUID();
  title;
  desc;
  dueAt;
  createdAt;
  constructor(title, desc, dueAt, createdAt) {
    this.title = title;
    this.desc = desc;
    this.createdAt = createdAt;
    this.dueAt = dueAt;
  }

  getId() {
    return this.id;
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
    return this.dueAt;
  }

  setDueAt(dueAt) {
    this.dueAt = dueAt;
  }

  getCreatedAt() {
    return this.createdAt;
  }

  setCreatedAt(createdAt) {
    this.createdAt = createdAt;
  }
}
export default NoteItem