import { Priority } from './utilities/constants';
const shortid = require('shortid');

export default class Notepad {
  constructor(notes = []) {
    this._notes = notes;
  }

  get notes() {
    return this._notes;
  }

  get newId() {
    return shortid.generate();
  }

  findNoteById(id) {
    return this._notes.find((note) => note.id == id);
  }
  saveNote(title, body) {
    const note = {
      id: `id-${this.newId}`,
      title,
      body,
      priority: Priority.NORMAL,
    };
    this._notes.push(note);
    return note;
  }
  deleteNote(id) {
    this._notes = this._notes.filter((note) => note.id != id);
  }
  updateNoteContent(id, updatedContent) {
    return Object.assign(this.findNoteById(id), updatedContent);
  }
  updateNotePriority(id, priority) {
    return (this.findNoteById(id).priority = priority);
  }
  filterNotesByQuery(query) {
    return this._notes.filter(
      (note) =>
        note.title.toLowerCase().includes(query.toLowerCase()) ||
        note.body.toLowerCase().includes(query.toLowerCase())
    );
  }
  filterNotesByPriority(priority) {
    return this._notes.filter((note) => note.priority == priority);
  }
}
