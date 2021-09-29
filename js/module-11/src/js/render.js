import { icons, buttonActions } from './utilities/constants';

export const createListItem = (element) => {
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

export const renderListItem = (notes, refs) => {
  const listItem = notes.map((item) => createListItem(item));
  refs.list.innerHTML = '';
  refs.list.append(...listItem);
};

export const deleteListItem = (note, noteId, model) => {
  model.deleteNote(noteId);
  note.remove();
};
