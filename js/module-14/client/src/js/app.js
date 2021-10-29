import {
  Priority,
  refs,
  icons,
  buttonActions,
  notifications,
  editorActions,
} from './utilities/constants';
import Notepad from './model';
import { createListItem, renderListItem, deleteListItem } from './render';
import MicroModal from 'micromodal';
import { Notyf } from 'notyf';
import 'notyf/notyf.min.css';
import confetti from 'canvas-confetti';
import { saveNote } from './services/api';

var notyf = new Notyf();

const deleteNote = (target, notepad, refs) => {
  try {
    deleteListItem(
      target.closest('.note-list__item'),
      target.closest('.note-list__item').dataset.id,
      notepad
    );
    notyf.error(notifications.DELETED);
  } catch (err) {
    throw err;
  }
};

const editNote = (target, notepad, refs) => {
  try {
    const id = target.closest('.note-list__item').dataset.id;
    refs.editor.dataset.action = editorActions.EDIT;
    refs.editor.dataset.noteId = id;
    const note = notepad.findNoteById(id);
    refs.titleEditor.value = note.title;
    refs.bodyEditor.value = note.body;
    MicroModal.show('note-editor-modal');
  } catch (err) {
    throw err;
  }
};

const changeNotePriority = (type, target, notepad, refs) => {
  const id = target.closest('.note-list__item').dataset.id;
  const priority = notepad.findNoteById(id).priority;

  if (type == buttonActions.UP_PRIORITY) {
    if (priority == Priority.HIGH) {
      notyf.error(notifications.MAX_PRIORITY);
    } else {
      const newPriority = priority + 1;
      notepad.updateNotePriority(id, newPriority);
      renderListItem(notepad.notes, refs);
      notyf.success(notifications.PRIORITY_UPDATE);
    }
  }

  if (type == buttonActions.DOWN_PRIORITY) {
    if (priority == Priority.LOW) {
      notyf.error(notifications.MIN_PRIORITY);
    } else {
      const newPriority = priority - 1;
      notepad.updateNotePriority(id, newPriority);
      renderListItem(notepad.notes, refs);
      notyf.success(notifications.PRIORITY_UPDATE);
    }
  }
};

const addNote = (title, body, notepad, refs) => {
  try {
    notepad.saveNote(title.value, body.value).then(() => {
      renderListItem(notepad.notes, refs);
    });
  } catch (err) {
    throw err;
  }
};

const changeNote = (title, body, notepad, refs) => {
  notepad
    .updateNoteContent(refs.editor.dataset.noteId, {
      title: title.value,
      body: body.value,
    })
    .then(() => {
      renderListItem(notepad.notes, refs);
    });
};

const handleListenListClick = (notepad, refs, { target }) => {
  if (target.nodeName == 'I' || target.nodeName == 'BUTTON') {
    switch (target.closest('.action').dataset.action) {
      case buttonActions.DELETE:
        deleteNote(target, notepad, refs);
        break;
      case buttonActions.EDIT:
        editNote(target, notepad, refs);
        break;
      case buttonActions.UP_PRIORITY:
        changeNotePriority(buttonActions.UP_PRIORITY, target, notepad, refs);
        break;
      case buttonActions.DOWN_PRIORITY:
        changeNotePriority(buttonActions.DOWN_PRIORITY, target, notepad, refs);
        break;
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
    switch (refs.editor.dataset.action) {
      case editorActions.ADD:
        addNote(title, body, notepad, refs);
        break;
      case editorActions.EDIT:
        changeNote(title, body, notepad, refs);
        break;
    }
  }
};

const handleListenSearchInput = (notepad, refs, { target }) => {
  renderListItem(notepad.filterNotesByQuery(target.value), refs);
};

const handleListenOpenEditor = (refs) => {
  refs.editor.dataset.action = editorActions.ADD;
  refs.editor.reset();
  MicroModal.show('note-editor-modal');
};

const handleListenListenEditor = (refs) => {
  if (refs.editor.dataset.action == editorActions.ADD) {
    notyf.success(notifications.SUCCESS);
    confetti();
  }
  if (refs.editor.dataset.action == editorActions.EDIT) {
    notyf.success(notifications.UPDATE);
  }
  MicroModal.close('note-editor-modal');
};

const notepad = new Notepad();
notepad.loadNotes.then((allNotes) => {
  renderListItem(notepad.notes, refs);
});

refs.list.addEventListener(
  'click',
  handleListenListClick.bind(null, notepad, refs)
);
refs.editor.addEventListener('input', handleListenEditorInput);
refs.editor.addEventListener(
  'submit',
  handleListenEditorSubmit.bind(null, notepad, refs)
);
refs.search.addEventListener(
  'input',
  handleListenSearchInput.bind(null, notepad, refs)
);
refs.openEditor.addEventListener(
  'click',
  handleListenOpenEditor.bind(null, refs)
);
refs.closeEditor.addEventListener(
  'submit',
  handleListenListenEditor.bind(null, refs)
);
