'use strict';

const Priority = {
  LOW: 0,
  NORMAL: 1,
  HIGH: 2,
};

const refs = {
  list: document.querySelector('.note-list'),
  editor: document.querySelector('.note-editor'),
  search: document.querySelector('.search-form'),
};

const icons = {
  ARROW_DOWN: 'expand_more',
  ARROW_UP: 'expand_less',
  EDIT: 'edit',
  DELETE: 'delete',
};

const buttonActions = {
  DOWN_PRIORITY: 'decrease-priority',
  UP_PRIORITY: 'decrease-increase',
  EDIT: 'edit-note',
  DELETE: 'delete-note',
};

class Notepad {
  constructor(notes = []) {
    this._notes = notes;
  }

  get notes() {
    return this._notes;
  }

  get newId() {
    return this._notes.length + 1;
  }

  findNoteById(id) {
    return this._notes.find(note => note.id == id);
  }
  saveNote(note) {
    this._notes.push(note);
    return note;
  }
  deleteNote(id) {
    this._notes = this._notes.filter(note => note.id != id);
  }
  updateNoteContent(id, updatedContent) {
    return Object.assign(this.findNoteById(id), updatedContent);
  }
  updateNotePriority(id, priority) {
    return (this.findNoteById(id).priority = priority);
  }
  filterNotesByQuery(query) {
    return this._notes.filter(
      note =>
        note.title.toLowerCase().includes(query.toLowerCase()) ||
        note.body.toLowerCase().includes(query.toLowerCase())
    );
  }
  filterNotesByPriority(priority) {
    return this._notes.filter(note => note.priority == priority);
  }
}

const createListItem = element => {
  const listItem = document.createElement('li');
  listItem.classList.add('note-list__item');
  listItem.dataset.id = element.id;

  const note = document.createElement('div');
  note.classList.add('note');

  const note__content = document.createElement('div');
  note__content.classList.add('note__content');

  const note__title = document.createElement('h2');
  note__title.classList.add('note__title');
  note__title.textContent = element.title;

  const note__body = document.createElement('p');
  note__body.classList.add('note__body');
  note__body.textContent = element.body;

  note__content.append(note__title, note__body);

  /* ------------------------- */

  const iconPriorityMore = document.createElement('i');
  iconPriorityMore.classList.add('material-icons');
  iconPriorityMore.classList.add('action__icon');
  iconPriorityMore.textContent = icons.ARROW_DOWN;

  const btnDecreasePriority = document.createElement('button');
  btnDecreasePriority.classList.add('action');
  btnDecreasePriority.dataset.action = buttonActions.DOWN_PRIORITY;
  btnDecreasePriority.append(iconPriorityMore);

  const iconPriorityLess = document.createElement('i');
  iconPriorityLess.classList.add('material-icons');
  iconPriorityLess.classList.add('action__icon');
  iconPriorityLess.textContent = icons.ARROW_UP;

  const btnIncreasePriority = document.createElement('button');
  btnIncreasePriority.classList.add('action');
  btnIncreasePriority.dataset.action = buttonActions.UP_PRIORITY;
  btnIncreasePriority.append(iconPriorityLess);

  const note__priority = document.createElement('span');
  note__priority.classList.add('note__priority');
  note__priority.textContent = `Priority: ${element.priority}`;

  const note__firstSection = document.createElement('section');
  note__firstSection.classList.add('note__section');

  note__firstSection.append(
    btnDecreasePriority,
    btnIncreasePriority,
    note__priority
  );

  /* ------------------------- */

  const edit = document.createElement('i');
  edit.classList.add('material-icons');
  edit.classList.add('action__icon');
  edit.textContent = icons.EDIT;

  const editButton = document.createElement('button');
  editButton.classList.add('action');
  editButton.dataset.action = buttonActions.EDIT;
  editButton.append(edit);

  const deleteIcon = document.createElement('i');
  deleteIcon.classList.add('material-icons');
  deleteIcon.classList.add('action__icon');
  deleteIcon.textContent = icons.DELETE;
  const btnDelete = document.createElement('button');
  btnDelete.classList.add('action');
  btnDelete.dataset.action = buttonActions.DELETE;
  btnDelete.append(deleteIcon);

  const note__secondSection = document.createElement('section');
  note__secondSection.classList.add('note__section');
  note__secondSection.append(editButton, btnDelete);

  /* ------------------------- */

  const note__footer = document.createElement('footer');
  note__footer.classList.add('note__footer');
  note__footer.append(note__firstSection, note__secondSection);

  note.append(note__content, note__footer);
  listItem.append(note);
  return listItem;
};

const renderListItem = (notes, refs, refList) => {
  const listItem = notes.map(item => createListItem(item));
  refs.list.innerHTML = '';
  refList.append(...listItem);
};

const deleteListItem = (note, noteId, model) => {
  model.deleteNote(noteId);
  note.remove();
};

const handleListenListClick = (notepad, { target }) => {
  if (target.nodeName == 'I' || target.nodeName == 'BUTTON') {
    if (target.closest('.action').dataset.action == 'delete-note') {
      deleteListItem(target.closest('.note-list__item'), target.closest('.note-list__item').dataset.id, notepad);
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

const handleListenEditorSubmit = (notepad, target) => {
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
    renderListItem(notepad.notes, refs, refs.list);
  }
};

const handleListenSearchInput = (notepad, {target}) => {
  renderListItem(notepad.filterNotesByQuery(target.value), refs, refs.list);
};

const notes = [
  {
    id: 'id-1',
    title: 'JavaScript essentials',
    body: 'Get comfortable with all basic JavaScript concepts: variables, loops, arrays, branching, objects, functions, scopes, prototypes etc',
    priority: Priority.HIGH,
  },
  {
    id: 'id-2',
    title: 'Refresh HTML and CSS',
    body: 'Need to refresh HTML and CSS concepts, after learning some JavaScript. Maybe get to know CSS Grid and PostCSS, they seem to be trending.',
    priority: Priority.NORMAL,
  },
  {
    id: 'id-3',
    title: 'Get comfy with Frontend frameworks',
    body: 'First must get some general knowledge about frameworks, then maybe try each one for a week or so. Need to choose between React, Vue and Angular, by reading articles and watching videos.',
    priority: Priority.NORMAL,
  },
  {
    id: 'id-4',
    title: 'Winter clothes',
    body: "Winter is coming! Need some really warm clothes: shoes, sweater, hat, jacket, scarf etc. Maybe should get a set of sportwear as well so I'll be able to do some excercises in the park.",
    priority: Priority.LOW,
  },
];

const notepad = new Notepad(notes);
renderListItem(notepad.notes, refs, refs.list);

refs.list.addEventListener('click', handleListenListClick.bind(null, notepad));
refs.editor.addEventListener('input', handleListenEditorInput);
refs.editor.addEventListener('submit', handleListenEditorSubmit.bind(null, notepad));
refs.search.addEventListener('input', handleListenSearchInput.bind(null, notepad));
