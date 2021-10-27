import * as api from './services/api';
import { Priority } from './utilities/constants';
const shortid = require('shortid');

export default class Notepad {
  get notes() {
    return api.getNotes().then((result) => {
      return result.json();
    });
  }

  get newId() {
    return shortid.generate();
  }

  findNoteById(id) {
    return this.notes.then((allNotes) => {
      return allNotes.find((note) => note.id == id);
    });
  }
  saveNote(title, body) {
    const note = {
      id: this.newId,
      title,
      body,
      priority: Priority.NORMAL,
    };

    return api.saveNote(note).then((saveNotePromise) => {
      return saveNotePromise;
    });
  }
  deleteNote(id) {
    return api.deleteNote(id);
  }
  updateNoteContent(id, updatedNote) {
    return api.updateNoteContent(id, updatedNote).then((updatedNotePromise) => {
      return updatedNotePromise;
    });
  }
  updateNotePriority(id, priority) {
    // return this.updateNoteContent(id, { priority: priority });
  }
  filterNotesByQuery(query) {
    // return this._notes.filter(
    //   (note) =>
    //     note.title.toLowerCase().includes(query.toLowerCase()) ||
    //     note.body.toLowerCase().includes(query.toLowerCase())
    // );
  }
  filterNotesByPriority(priority) {
    // return this._notes.filter((note) => note.priority == priority);
  }
}
