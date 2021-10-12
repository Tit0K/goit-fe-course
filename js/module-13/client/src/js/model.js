import * as api from './services/api';
import { Priority } from './utilities/constants';
const shortid = require('shortid');

export default class Notepad {
  constructor(notes = []) {
    this._notes = notes;
  }

  get loadNotes() {
    return api.getNotes().then((notes) => {
      this._notes = notes;
    });
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
      id: this.newId,
      title,
      body,
      priority: Priority.NORMAL,
    };

    return api.saveNote(note).then((saveNote) => {
      this._notes.push(note);
      return note;
    });
  }
  deleteNote(id) {
    return api.deleteNote(id).then(() => {
      this._notes = this._notes.filter((item) => item.id !== id);
    });
  }
  updateNoteContent(id, updatedNote) {
    return api.updateNoteContent(id, updatedNote).then((updatedNote) => {
      this._notes.map((note) => {note.id == updatedNote.id;});
      return updatedNote;
    });
  }
  updateNotePriority(id, priority) {
    return this.updateNoteContent(id, {priority: priority});
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
