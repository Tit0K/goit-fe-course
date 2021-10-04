export const Priority = {
  LOW: 0,
  NORMAL: 1,
  HIGH: 2,
};

export const refs = {
  list: document.querySelector('.note-list'),
  editor: document.querySelector('.note-editor'),
  search: document.querySelector('.search-form'),
  openEditor: document.querySelector("[data-action='open-editor']"),
  closeEditor: document.querySelector("[data-micromodal-close]"),
};

export const icons = {
  ARROW_DOWN: 'expand_more',
  ARROW_UP: 'expand_less',
  EDIT: 'edit',
  DELETE: 'delete',
};

export const buttonActions = {
  DOWN_PRIORITY: 'decrease-priority',
  UP_PRIORITY: 'decrease-increase',
  EDIT: 'edit-note',
  DELETE: 'delete-note',
};

export const notifications = {
  SUCCESS: 'Заметка добавлена!',
  ERROR: 'Заметка удалена',
};
