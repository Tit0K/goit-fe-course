'use strict';

const Priority = {
  LOW: 0,
  NORMAL: 1,
  HIGH: 2,
};

const refs = { list: document.querySelector('.note-list') };

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
    /*
     * Принимает: ничего
     * Возвращает: все заметки, значение свойства notes
     */
  }

  findNoteById(id) {
    for (let note of this._notes) {
      if (note.id == id) {
        return note;
      }
    }

    /*
     * Ищет заметку в массиве notes
     *
     * Принимает: идентификатор заметки
     * Возвращает: заметку с совпавшим полем id или undefined если ничего не найдено
     */
  }
  saveNote(note) {
    this._notes.push(note);
    return note;
    /*
     * Сохраняет заметку в массив notes
     *
     * Принимает: объект заметки
     * Возвращает: сохраненную заметку
     */
  }
  deleteNote(id) {
    for (let note of this._notes) {
      if (note.id == id) {
        this._notes.splice(this._notes.indexOf(note), 1);
      }
    }
    /*
     * Удаляет заметку по идентификатору из массива notes
     *
     * Принимает: идентификатор заметки
     * Возвращает: ничего
     */
  }
  updateNoteContent(id, updatedContent) {
    for (let note of this._notes) {
      if (note.id == id) {
        Object.assign(this._notes[this._notes.indexOf(note)], updatedContent);
        return this.findNoteById(id);
      }
    }

    /*
     * Обновляет контент заметки
     * updatedContent - объект с полями вида {имя: значение, имя: значение}
     * Свойств в объекте updatedContent может быть произвольное количество
     *
     * Принимает: идентификатор заметки и объект, полями которого надо обновить заметку
     * Возвращает: обновленную заметку
     */
  }
  updateNotePriority(id, priority) {
    for (let note of this._notes) {
      if (note.id == id) {
        this._notes[this._notes.indexOf(note)].priority = priority;
        return this.findNoteById(id);
      }
    }
    /*
     * Обновляет приоритет заметки
     *
     * Принимает: идентификатор заметки и ее новый приоритет
     * Возвращает: обновленную заметку
     */
  }
  filterNotesByQuery(query) {
    const newNotesArr = [];

    for (let note of this._notes) {
      if (
        note.title.toLowerCase().includes(query.toLowerCase()) ||
        note.body.toLowerCase().includes(query.toLowerCase())
      ) {
        newNotesArr.push(note);
      }
    }

    return newNotesArr;

    /*
     * Фильтрует массив заметок по подстроке query.
     * Если значение query есть в заголовке или теле заметки - она подходит
     *
     * Принимает: подстроку для поиска в title и body заметки
     * Возвращает: новый массив заметок, контент которых содержит подстроку
     */
  }
  filterNotesByPriority(priority) {
    const newNotesArr = [];

    for (let note of this._notes) {
      if (note.priority == priority) {
        newNotesArr.push(note);
      }
    }

    return newNotesArr;

    /*
     * Фильтрует массив заметок по значению приоритета
     * Если значение priority совпадает с приоритетом заметки - она подходит
     *
     * Принимает: приоритет для поиска в свойстве priority заметки
     * Возвращает: новый массив заметок с подходящим приоритетом
     */
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

const renderListItem = (notes, refList) => {
  const listItem = notes.map(item => createListItem(item));
  refList.append(...listItem);
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
renderListItem(notepad.notes, refs.list);
