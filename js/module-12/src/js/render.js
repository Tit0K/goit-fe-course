import templates from './templates/notepad.hbs';

export const createListItem = (element) => {
  return templates(element);
};

export const renderListItem = (notes, refs) => {
  const listItem = notes.map((item) => createListItem(item)).join('');
  refs.list.innerHTML = '';
  refs.list.insertAdjacentHTML('beforeend', listItem);
};

export const deleteListItem = (note, noteId, model) => {
  model.deleteNote(noteId);
  note.remove();
};
