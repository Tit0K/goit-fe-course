import templates from './templates/notepad.hbs';
import { PRIORITY, PRIORITY_NAMES } from './utilities/constants';

const changePriorityName = (note) => {
  note.priority = PRIORITY_NAMES[note.priority];
  return note;
};

const saveOldArray = (model) => {
  let temp = model.notes.slice();
  temp = JSON.stringify(temp);
  temp = JSON.parse(temp);
  return temp;
};

const reloadModel = (oldArray, model) => {
  model.reloadModel(oldArray);
};

export const createListItem = (element) => {
  changePriorityName(element);
  return templates(element);
};

export const renderListItem = (notes, refs, model) => {
  const sortByPriority = (a, b) => b.priority - a.priority;
  notes.sort(sortByPriority);

  // ------------------------------------
  const savedArray = saveOldArray(model);
  // ------------------------------------

  const listItem = notes.map((item) => createListItem(item)).join('');
  refs.list.innerHTML = '';
  refs.list.insertAdjacentHTML('beforeend', listItem);

  // ------------------------------------
  reloadModel(savedArray, model);
  // ------------------------------------
};

export const addListItem = (note, refs, model) => {
  const savedArray = saveOldArray(model);
  // ------------------------------------

  refs.list.insertAdjacentHTML('beforeend', createListItem(note));

  // ------------------------------------
  reloadModel(savedArray, model);
};

export const deleteListItem = (note, noteId, model) => {
  model.deleteNote(noteId);
  note.remove();
};
