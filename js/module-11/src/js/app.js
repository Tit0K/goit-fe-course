import { Priority, refs, icons, buttonActions, notifications } from './utilities/constants';
import notes from '../assets/notes.json';
import Notepad from './model';
import { createListItem, renderListItem, deleteListItem } from './render';
import MicroModal from 'micromodal';
import { Notyf } from 'notyf';
import confetti from 'canvas-confetti';


var notyf = new Notyf();

const handleListenListClick = (notepad, { target }) => {
  if (target.nodeName == 'I' || target.nodeName == 'BUTTON') {
    if (target.closest('.action').dataset.action == 'delete-note') {
      deleteListItem(
        target.closest('.note-list__item'),
        target.closest('.note-list__item').dataset.id,
        notepad
      );
      notyf.error(notifications.ERROR);
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
    notepad.saveNote(title.value, body.value);
    renderListItem(notepad.notes, refs);
  }
};

const handleListenSearchInput = (notepad, refs, { target }) => {
  renderListItem(notepad.filterNotesByQuery(target.value), refs);
};

const handleListenOpenEditor = () => {
  MicroModal.show('note-editor-modal');
};

const handleListenCloseEditor = () => {
  notyf.success(notifications.SUCCESS);
  MicroModal.close('note-editor-modal');
  confetti();
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
refs.openEditor.addEventListener('click', handleListenOpenEditor);
refs.closeEditor.addEventListener('submit', handleListenCloseEditor);
