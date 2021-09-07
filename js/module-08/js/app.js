'use strict';

const Priority = {
  LOW: 0,
  NORMAL: 1,
  HIGH: 2,
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

const refs = { list: document.querySelector('.note-list') };

const createListItem = ({ id, title, body, priority }) => {
  const listItem = document.createElement('li');
  listItem.classList.add('note-list__item');
  listItem.dataset.id = id;

  const note = document.createElement('div');
  note.classList.add('note');

  const note__content = document.createElement('div');
  note__content.classList.add('note__content');

  const note__title = document.createElement('h2');
  note__title.classList.add('note__title');
  note__title.textContent = title;

  const note__body = document.createElement('p');
  note__body.classList.add('note__body');
  note__body.textContent = body;

  note__content.append(note__title, note__body);

  /* ------------------------- */

  const iconPriorityMore = document.createElement('i');
  iconPriorityMore.classList.add('material-icons');
  iconPriorityMore.classList.add('action__icon');
  iconPriorityMore.textContent = 'expand_more';

  const btnDecreasePriority = document.createElement('button');
  btnDecreasePriority.classList.add('action');
  btnDecreasePriority.dataset.action = 'decrease-priority';
  btnDecreasePriority.append(iconPriorityMore);

  const iconPriorityLess = iconPriorityMore.cloneNode(false);
  iconPriorityLess.textContent = 'expand_less';
  const btnIncreasePriority = btnDecreasePriority.cloneNode(false);
  btnIncreasePriority.dataset.action = 'decrease-increase';
  btnIncreasePriority.append(iconPriorityLess);

  const note__priority = document.createElement('span');
  note__priority.classList.add('note__priority');
  note__priority.textContent = `Priority: ${priority}`;

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
  edit.textContent = 'edit';

  const btnEdit = document.createElement('button');
  btnEdit.classList.add('action');
  btnEdit.dataset.action = 'edit-note';
  btnEdit.append(edit);

  const deleteIcon = edit.cloneNode(false);
  deleteIcon.textContent = 'delete';
  const btnDelete = btnEdit.cloneNode(false);
  btnDelete.dataset.action = 'delete-note';
  btnDelete.append(deleteIcon);

  const note__secondSection = note__firstSection.cloneNode(false);
  note__secondSection.append(btnEdit, btnDelete);

  /* ------------------------- */

  const note__footer = document.createElement('footer');
  note__footer.classList.add('note__footer');
  note__footer.append(note__firstSection, note__secondSection);

  note.append(note__content, note__footer);
  listItem.append(note);
  return listItem;
};

const RenderListItem = data => {
  const listItem = data.map(item => createListItem(item));
  refs.list.append(...listItem);
};

RenderListItem(notes);
