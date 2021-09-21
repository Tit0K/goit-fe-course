import { Priority, refs, icons, buttonActions } from './js/utilities/constants';
import notes from './js/notes';
import Notepad from './js/model';
import './css/styles.css';
import './css/normalize.css';
const img = require('./images/logo.svg');
import { createListItem, renderListItem, deleteListItem } from './js/render';

const handleListenListClick = (notepad, { target }) => {
  if (target.nodeName == 'I' || target.nodeName == 'BUTTON') {
    if (target.closest('.action').dataset.action == 'delete-note') {
      deleteListItem(
        target.closest('.note-list__item'),
        target.closest('.note-list__item').dataset.id,
        notepad
      );
    }
  }
};

const handleListenEditorInput = ({ target }) => {
  if (target.value.trim().length == 0) {
    target.classList.remove('note-editor__input--valid');
    target.classList.add('note-editor__input--invalid');
  } else {
    target.classList.remove('note-editor__input--invalid');
    target.classList.add('note-editor__input--valid');
  }
};

const handleListenEditorSubmit = (notepad, refs, target) => {
  target.preventDefault();
  const [title, body] = target.currentTarget.elements;
  if (title.value.trim() != '' && body.value.trim() != '') {
    const newNote = {
      id: `id-${notepad.newId}`,
      title: title.value,
      body: body.value,
      priority: Priority.NORMAL,
    };
    notepad.saveNote(newNote);
    renderListItem(notepad.notes, refs);
  }
};

const handleListenSearchInput = (notepad, refs, { target }) => {
  renderListItem(notepad.filterNotesByQuery(target.value), refs);
};

const notepad = new Notepad(notes);
renderListItem(notepad.notes, refs);

refs.list.addEventListener('click', handleListenListClick.bind(null, notepad));
refs.editor.addEventListener('input', handleListenEditorInput);
refs.editor.addEventListener(
  'submit',
  handleListenEditorSubmit.bind(null, notepad, refs)
);
refs.search.addEventListener(
  'input',
  handleListenSearchInput.bind(null, notepad, refs)
);
