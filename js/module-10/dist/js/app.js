/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_utilities_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/utilities/constants */ \"./src/js/utilities/constants.js\");\n/* harmony import */ var _js_notes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/notes */ \"./src/js/notes.js\");\n/* harmony import */ var _js_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/model */ \"./src/js/model.js\");\n/* harmony import */ var _js_render__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/render */ \"./src/js/render.js\");\n\n\n\n\n\nconst handleListenListClick = (notepad, {\n  target\n}) => {\n  if (target.nodeName == 'I' || target.nodeName == 'BUTTON') {\n    if (target.closest('.action').dataset.action == 'delete-note') {\n      (0,_js_render__WEBPACK_IMPORTED_MODULE_3__.deleteListItem)(target.closest('.note-list__item'), target.closest('.note-list__item').dataset.id, notepad);\n    }\n  }\n};\n\nconst handleListenEditorInput = ({\n  target\n}) => {\n  if (target.value.trim().length == 0) {\n    target.classList.remove('note-editor__input--valid');\n    target.classList.add('note-editor__input--invalid');\n  } else {\n    target.classList.remove('note-editor__input--invalid');\n    target.classList.add('note-editor__input--valid');\n  }\n};\n\nconst handleListenEditorSubmit = (notepad, refs, target) => {\n  target.preventDefault();\n  const [title, body] = target.currentTarget.elements;\n\n  if (title.value.trim() != '' && body.value.trim() != '') {\n    notepad.saveNote(title.value, body.value);\n    (0,_js_render__WEBPACK_IMPORTED_MODULE_3__.renderListItem)(notepad.notes, refs);\n  }\n};\n\nconst handleListenSearchInput = (notepad, refs, {\n  target\n}) => {\n  (0,_js_render__WEBPACK_IMPORTED_MODULE_3__.renderListItem)(notepad.filterNotesByQuery(target.value), refs);\n};\n\nconst notepad = new _js_model__WEBPACK_IMPORTED_MODULE_2__[\"default\"](_js_notes__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n(0,_js_render__WEBPACK_IMPORTED_MODULE_3__.renderListItem)(notepad.notes, _js_utilities_constants__WEBPACK_IMPORTED_MODULE_0__.refs);\n_js_utilities_constants__WEBPACK_IMPORTED_MODULE_0__.refs.list.addEventListener('click', handleListenListClick.bind(null, notepad));\n_js_utilities_constants__WEBPACK_IMPORTED_MODULE_0__.refs.editor.addEventListener('input', handleListenEditorInput);\n_js_utilities_constants__WEBPACK_IMPORTED_MODULE_0__.refs.editor.addEventListener('submit', handleListenEditorSubmit.bind(null, notepad, _js_utilities_constants__WEBPACK_IMPORTED_MODULE_0__.refs));\n_js_utilities_constants__WEBPACK_IMPORTED_MODULE_0__.refs.search.addEventListener('input', handleListenSearchInput.bind(null, notepad, _js_utilities_constants__WEBPACK_IMPORTED_MODULE_0__.refs));\n\n//# sourceURL=webpack://module-10/./src/app.js?");

/***/ }),

/***/ "./src/js/model.js":
/*!*************************!*\
  !*** ./src/js/model.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Notepad)\n/* harmony export */ });\n/* harmony import */ var _utilities_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utilities/constants */ \"./src/js/utilities/constants.js\");\n\n\nconst shortid = __webpack_require__(/*! shortid */ \"./node_modules/shortid/index.js\");\n\nclass Notepad {\n  constructor(notes = []) {\n    this._notes = notes;\n  }\n\n  get notes() {\n    return this._notes;\n  }\n\n  get newId() {\n    return shortid.generate();\n  }\n\n  findNoteById(id) {\n    return this._notes.find(note => note.id == id);\n  }\n\n  saveNote(title, body) {\n    const note = {\n      id: this.newId,\n      title,\n      body,\n      priority: _utilities_constants__WEBPACK_IMPORTED_MODULE_0__.Priority.NORMAL\n    };\n\n    this._notes.push(note);\n\n    return note;\n  }\n\n  deleteNote(id) {\n    this._notes = this._notes.filter(note => note.id != id);\n  }\n\n  updateNoteContent(id, updatedContent) {\n    return Object.assign(this.findNoteById(id), updatedContent);\n  }\n\n  updateNotePriority(id, priority) {\n    return this.findNoteById(id).priority = priority;\n  }\n\n  filterNotesByQuery(query) {\n    return this._notes.filter(note => note.title.toLowerCase().includes(query.toLowerCase()) || note.body.toLowerCase().includes(query.toLowerCase()));\n  }\n\n  filterNotesByPriority(priority) {\n    return this._notes.filter(note => note.priority == priority);\n  }\n\n}\n\n//# sourceURL=webpack://module-10/./src/js/model.js?");

/***/ }),

/***/ "./src/js/notes.js":
/*!*************************!*\
  !*** ./src/js/notes.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _utilities_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utilities/constants */ \"./src/js/utilities/constants.js\");\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ([{\n  after: 'id-1',\n  title: 'JavaScript essentials',\n  body: 'Get comfortable with all basic JavaScript concepts: variables, loops, arrays, branching, objects, functions, scopes, prototypes etc',\n  priority: _utilities_constants__WEBPACK_IMPORTED_MODULE_0__.Priority.HIGH\n}, {\n  id: 'id-2',\n  title: 'Refresh HTML and CSS',\n  body: 'Need to refresh HTML and CSS concepts, after learning some JavaScript. Maybe get to know CSS Grid and PostCSS, they seem to be trending.',\n  priority: _utilities_constants__WEBPACK_IMPORTED_MODULE_0__.Priority.NORMAL\n}, {\n  id: 'id-3',\n  title: 'Get comfy with Frontend frameworks',\n  body: 'First must get some general knowledge about frameworks, then maybe try each one for a week or so. Need to choose between React, Vue and Angular, by reading articles and watching videos.',\n  priority: _utilities_constants__WEBPACK_IMPORTED_MODULE_0__.Priority.NORMAL\n}, {\n  id: 'id-4',\n  title: 'Winter clothes',\n  body: 'Winter is coming! Need some really warm clothes: shoes, sweater, hat, jacket, scarf etc. Maybe should get a set of sportwear as well so I`ll be able to do some excercises in the park.',\n  priority: _utilities_constants__WEBPACK_IMPORTED_MODULE_0__.Priority.LOW\n}]);\n\n//# sourceURL=webpack://module-10/./src/js/notes.js?");

/***/ }),

/***/ "./src/js/render.js":
/*!**************************!*\
  !*** ./src/js/render.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createListItem\": () => (/* binding */ createListItem),\n/* harmony export */   \"renderListItem\": () => (/* binding */ renderListItem),\n/* harmony export */   \"deleteListItem\": () => (/* binding */ deleteListItem)\n/* harmony export */ });\n/* harmony import */ var _utilities_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utilities/constants */ \"./src/js/utilities/constants.js\");\n\nconst createListItem = element => {\n  const listItem = document.createElement('li');\n  listItem.classList.add('note-list__item');\n  listItem.dataset.id = element.id;\n  const note = document.createElement('div');\n  note.classList.add('note');\n  const note__content = document.createElement('div');\n  note__content.classList.add('note__content');\n  const note__title = document.createElement('h2');\n  note__title.classList.add('note__title');\n  note__title.textContent = element.title;\n  const note__body = document.createElement('p');\n  note__body.classList.add('note__body');\n  note__body.textContent = element.body;\n  note__content.append(note__title, note__body);\n  /* ------------------------- */\n\n  const iconPriorityMore = document.createElement('i');\n  iconPriorityMore.classList.add('material-icons');\n  iconPriorityMore.classList.add('action__icon');\n  iconPriorityMore.textContent = _utilities_constants__WEBPACK_IMPORTED_MODULE_0__.icons.ARROW_DOWN;\n  const btnDecreasePriority = document.createElement('button');\n  btnDecreasePriority.classList.add('action');\n  btnDecreasePriority.dataset.action = _utilities_constants__WEBPACK_IMPORTED_MODULE_0__.buttonActions.DOWN_PRIORITY;\n  btnDecreasePriority.append(iconPriorityMore);\n  const iconPriorityLess = document.createElement('i');\n  iconPriorityLess.classList.add('material-icons');\n  iconPriorityLess.classList.add('action__icon');\n  iconPriorityLess.textContent = _utilities_constants__WEBPACK_IMPORTED_MODULE_0__.icons.ARROW_UP;\n  const btnIncreasePriority = document.createElement('button');\n  btnIncreasePriority.classList.add('action');\n  btnIncreasePriority.dataset.action = _utilities_constants__WEBPACK_IMPORTED_MODULE_0__.buttonActions.UP_PRIORITY;\n  btnIncreasePriority.append(iconPriorityLess);\n  const note__priority = document.createElement('span');\n  note__priority.classList.add('note__priority');\n  note__priority.textContent = `Priority: ${element.priority}`;\n  const note__firstSection = document.createElement('section');\n  note__firstSection.classList.add('note__section');\n  note__firstSection.append(btnDecreasePriority, btnIncreasePriority, note__priority);\n  /* ------------------------- */\n\n  const edit = document.createElement('i');\n  edit.classList.add('material-icons');\n  edit.classList.add('action__icon');\n  edit.textContent = _utilities_constants__WEBPACK_IMPORTED_MODULE_0__.icons.EDIT;\n  const editButton = document.createElement('button');\n  editButton.classList.add('action');\n  editButton.dataset.action = _utilities_constants__WEBPACK_IMPORTED_MODULE_0__.buttonActions.EDIT;\n  editButton.append(edit);\n  const deleteIcon = document.createElement('i');\n  deleteIcon.classList.add('material-icons');\n  deleteIcon.classList.add('action__icon');\n  deleteIcon.textContent = _utilities_constants__WEBPACK_IMPORTED_MODULE_0__.icons.DELETE;\n  const btnDelete = document.createElement('button');\n  btnDelete.classList.add('action');\n  btnDelete.dataset.action = _utilities_constants__WEBPACK_IMPORTED_MODULE_0__.buttonActions.DELETE;\n  btnDelete.append(deleteIcon);\n  const note__secondSection = document.createElement('section');\n  note__secondSection.classList.add('note__section');\n  note__secondSection.append(editButton, btnDelete);\n  /* ------------------------- */\n\n  const note__footer = document.createElement('footer');\n  note__footer.classList.add('note__footer');\n  note__footer.append(note__firstSection, note__secondSection);\n  note.append(note__content, note__footer);\n  listItem.append(note);\n  return listItem;\n};\nconst renderListItem = (notes, refs) => {\n  const listItem = notes.map(item => createListItem(item));\n  refs.list.innerHTML = '';\n  refs.list.append(...listItem);\n};\nconst deleteListItem = (note, noteId, model) => {\n  model.deleteNote(noteId);\n  note.remove();\n};\n\n//# sourceURL=webpack://module-10/./src/js/render.js?");

/***/ }),

/***/ "./src/js/utilities/constants.js":
/*!***************************************!*\
  !*** ./src/js/utilities/constants.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Priority\": () => (/* binding */ Priority),\n/* harmony export */   \"refs\": () => (/* binding */ refs),\n/* harmony export */   \"icons\": () => (/* binding */ icons),\n/* harmony export */   \"buttonActions\": () => (/* binding */ buttonActions)\n/* harmony export */ });\nconst Priority = {\n  LOW: 0,\n  NORMAL: 1,\n  HIGH: 2\n};\nconst refs = {\n  list: document.querySelector('.note-list'),\n  editor: document.querySelector('.note-editor'),\n  search: document.querySelector('.search-form')\n};\nconst icons = {\n  ARROW_DOWN: 'expand_more',\n  ARROW_UP: 'expand_less',\n  EDIT: 'edit',\n  DELETE: 'delete'\n};\nconst buttonActions = {\n  DOWN_PRIORITY: 'decrease-priority',\n  UP_PRIORITY: 'decrease-increase',\n  EDIT: 'edit-note',\n  DELETE: 'delete-note'\n};\n\n//# sourceURL=webpack://module-10/./src/js/utilities/constants.js?");

/***/ }),

/***/ "./node_modules/shortid/index.js":
/*!***************************************!*\
  !*** ./node_modules/shortid/index.js ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\nmodule.exports = __webpack_require__(/*! ./lib/index */ \"./node_modules/shortid/lib/index.js\");\n\n\n//# sourceURL=webpack://module-10/./node_modules/shortid/index.js?");

/***/ }),

/***/ "./node_modules/shortid/lib/alphabet.js":
/*!**********************************************!*\
  !*** ./node_modules/shortid/lib/alphabet.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar randomFromSeed = __webpack_require__(/*! ./random/random-from-seed */ \"./node_modules/shortid/lib/random/random-from-seed.js\");\n\nvar ORIGINAL = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-';\nvar alphabet;\nvar previousSeed;\n\nvar shuffled;\n\nfunction reset() {\n    shuffled = false;\n}\n\nfunction setCharacters(_alphabet_) {\n    if (!_alphabet_) {\n        if (alphabet !== ORIGINAL) {\n            alphabet = ORIGINAL;\n            reset();\n        }\n        return;\n    }\n\n    if (_alphabet_ === alphabet) {\n        return;\n    }\n\n    if (_alphabet_.length !== ORIGINAL.length) {\n        throw new Error('Custom alphabet for shortid must be ' + ORIGINAL.length + ' unique characters. You submitted ' + _alphabet_.length + ' characters: ' + _alphabet_);\n    }\n\n    var unique = _alphabet_.split('').filter(function(item, ind, arr){\n       return ind !== arr.lastIndexOf(item);\n    });\n\n    if (unique.length) {\n        throw new Error('Custom alphabet for shortid must be ' + ORIGINAL.length + ' unique characters. These characters were not unique: ' + unique.join(', '));\n    }\n\n    alphabet = _alphabet_;\n    reset();\n}\n\nfunction characters(_alphabet_) {\n    setCharacters(_alphabet_);\n    return alphabet;\n}\n\nfunction setSeed(seed) {\n    randomFromSeed.seed(seed);\n    if (previousSeed !== seed) {\n        reset();\n        previousSeed = seed;\n    }\n}\n\nfunction shuffle() {\n    if (!alphabet) {\n        setCharacters(ORIGINAL);\n    }\n\n    var sourceArray = alphabet.split('');\n    var targetArray = [];\n    var r = randomFromSeed.nextValue();\n    var characterIndex;\n\n    while (sourceArray.length > 0) {\n        r = randomFromSeed.nextValue();\n        characterIndex = Math.floor(r * sourceArray.length);\n        targetArray.push(sourceArray.splice(characterIndex, 1)[0]);\n    }\n    return targetArray.join('');\n}\n\nfunction getShuffled() {\n    if (shuffled) {\n        return shuffled;\n    }\n    shuffled = shuffle();\n    return shuffled;\n}\n\n/**\n * lookup shuffled letter\n * @param index\n * @returns {string}\n */\nfunction lookup(index) {\n    var alphabetShuffled = getShuffled();\n    return alphabetShuffled[index];\n}\n\nfunction get () {\n  return alphabet || ORIGINAL;\n}\n\nmodule.exports = {\n    get: get,\n    characters: characters,\n    seed: setSeed,\n    lookup: lookup,\n    shuffled: getShuffled\n};\n\n\n//# sourceURL=webpack://module-10/./node_modules/shortid/lib/alphabet.js?");

/***/ }),

/***/ "./node_modules/shortid/lib/build.js":
/*!*******************************************!*\
  !*** ./node_modules/shortid/lib/build.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar generate = __webpack_require__(/*! ./generate */ \"./node_modules/shortid/lib/generate.js\");\nvar alphabet = __webpack_require__(/*! ./alphabet */ \"./node_modules/shortid/lib/alphabet.js\");\n\n// Ignore all milliseconds before a certain time to reduce the size of the date entropy without sacrificing uniqueness.\n// This number should be updated every year or so to keep the generated id short.\n// To regenerate `new Date() - 0` and bump the version. Always bump the version!\nvar REDUCE_TIME = 1567752802062;\n\n// don't change unless we change the algos or REDUCE_TIME\n// must be an integer and less than 16\nvar version = 7;\n\n// Counter is used when shortid is called multiple times in one second.\nvar counter;\n\n// Remember the last time shortid was called in case counter is needed.\nvar previousSeconds;\n\n/**\n * Generate unique id\n * Returns string id\n */\nfunction build(clusterWorkerId) {\n    var str = '';\n\n    var seconds = Math.floor((Date.now() - REDUCE_TIME) * 0.001);\n\n    if (seconds === previousSeconds) {\n        counter++;\n    } else {\n        counter = 0;\n        previousSeconds = seconds;\n    }\n\n    str = str + generate(version);\n    str = str + generate(clusterWorkerId);\n    if (counter > 0) {\n        str = str + generate(counter);\n    }\n    str = str + generate(seconds);\n    return str;\n}\n\nmodule.exports = build;\n\n\n//# sourceURL=webpack://module-10/./node_modules/shortid/lib/build.js?");

/***/ }),

/***/ "./node_modules/shortid/lib/generate.js":
/*!**********************************************!*\
  !*** ./node_modules/shortid/lib/generate.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar alphabet = __webpack_require__(/*! ./alphabet */ \"./node_modules/shortid/lib/alphabet.js\");\nvar random = __webpack_require__(/*! ./random/random-byte */ \"./node_modules/shortid/lib/random/random-byte-browser.js\");\nvar format = __webpack_require__(/*! nanoid/format */ \"./node_modules/shortid/node_modules/nanoid/format.browser.js\");\n\nfunction generate(number) {\n    var loopCounter = 0;\n    var done;\n\n    var str = '';\n\n    while (!done) {\n        str = str + format(random, alphabet.get(), 1);\n        done = number < (Math.pow(16, loopCounter + 1 ) );\n        loopCounter++;\n    }\n    return str;\n}\n\nmodule.exports = generate;\n\n\n//# sourceURL=webpack://module-10/./node_modules/shortid/lib/generate.js?");

/***/ }),

/***/ "./node_modules/shortid/lib/index.js":
/*!*******************************************!*\
  !*** ./node_modules/shortid/lib/index.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar alphabet = __webpack_require__(/*! ./alphabet */ \"./node_modules/shortid/lib/alphabet.js\");\nvar build = __webpack_require__(/*! ./build */ \"./node_modules/shortid/lib/build.js\");\nvar isValid = __webpack_require__(/*! ./is-valid */ \"./node_modules/shortid/lib/is-valid.js\");\n\n// if you are using cluster or multiple servers use this to make each instance\n// has a unique value for worker\n// Note: I don't know if this is automatically set when using third\n// party cluster solutions such as pm2.\nvar clusterWorkerId = __webpack_require__(/*! ./util/cluster-worker-id */ \"./node_modules/shortid/lib/util/cluster-worker-id-browser.js\") || 0;\n\n/**\n * Set the seed.\n * Highly recommended if you don't want people to try to figure out your id schema.\n * exposed as shortid.seed(int)\n * @param seed Integer value to seed the random alphabet.  ALWAYS USE THE SAME SEED or you might get overlaps.\n */\nfunction seed(seedValue) {\n    alphabet.seed(seedValue);\n    return module.exports;\n}\n\n/**\n * Set the cluster worker or machine id\n * exposed as shortid.worker(int)\n * @param workerId worker must be positive integer.  Number less than 16 is recommended.\n * returns shortid module so it can be chained.\n */\nfunction worker(workerId) {\n    clusterWorkerId = workerId;\n    return module.exports;\n}\n\n/**\n *\n * sets new characters to use in the alphabet\n * returns the shuffled alphabet\n */\nfunction characters(newCharacters) {\n    if (newCharacters !== undefined) {\n        alphabet.characters(newCharacters);\n    }\n\n    return alphabet.shuffled();\n}\n\n/**\n * Generate unique id\n * Returns string id\n */\nfunction generate() {\n  return build(clusterWorkerId);\n}\n\n// Export all other functions as properties of the generate function\nmodule.exports = generate;\nmodule.exports.generate = generate;\nmodule.exports.seed = seed;\nmodule.exports.worker = worker;\nmodule.exports.characters = characters;\nmodule.exports.isValid = isValid;\n\n\n//# sourceURL=webpack://module-10/./node_modules/shortid/lib/index.js?");

/***/ }),

/***/ "./node_modules/shortid/lib/is-valid.js":
/*!**********************************************!*\
  !*** ./node_modules/shortid/lib/is-valid.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\nvar alphabet = __webpack_require__(/*! ./alphabet */ \"./node_modules/shortid/lib/alphabet.js\");\n\nfunction isShortId(id) {\n    if (!id || typeof id !== 'string' || id.length < 6 ) {\n        return false;\n    }\n\n    var nonAlphabetic = new RegExp('[^' +\n      alphabet.get().replace(/[|\\\\{}()[\\]^$+*?.-]/g, '\\\\$&') +\n    ']');\n    return !nonAlphabetic.test(id);\n}\n\nmodule.exports = isShortId;\n\n\n//# sourceURL=webpack://module-10/./node_modules/shortid/lib/is-valid.js?");

/***/ }),

/***/ "./node_modules/shortid/lib/random/random-byte-browser.js":
/*!****************************************************************!*\
  !*** ./node_modules/shortid/lib/random/random-byte-browser.js ***!
  \****************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar crypto = typeof window === 'object' && (window.crypto || window.msCrypto); // IE 11 uses window.msCrypto\n\nvar randomByte;\n\nif (!crypto || !crypto.getRandomValues) {\n    randomByte = function(size) {\n        var bytes = [];\n        for (var i = 0; i < size; i++) {\n            bytes.push(Math.floor(Math.random() * 256));\n        }\n        return bytes;\n    };\n} else {\n    randomByte = function(size) {\n        return crypto.getRandomValues(new Uint8Array(size));\n    };\n}\n\nmodule.exports = randomByte;\n\n\n//# sourceURL=webpack://module-10/./node_modules/shortid/lib/random/random-byte-browser.js?");

/***/ }),

/***/ "./node_modules/shortid/lib/random/random-from-seed.js":
/*!*************************************************************!*\
  !*** ./node_modules/shortid/lib/random/random-from-seed.js ***!
  \*************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n// Found this seed-based random generator somewhere\n// Based on The Central Randomizer 1.3 (C) 1997 by Paul Houle (houle@msc.cornell.edu)\n\nvar seed = 1;\n\n/**\n * return a random number based on a seed\n * @param seed\n * @returns {number}\n */\nfunction getNextValue() {\n    seed = (seed * 9301 + 49297) % 233280;\n    return seed/(233280.0);\n}\n\nfunction setSeed(_seed_) {\n    seed = _seed_;\n}\n\nmodule.exports = {\n    nextValue: getNextValue,\n    seed: setSeed\n};\n\n\n//# sourceURL=webpack://module-10/./node_modules/shortid/lib/random/random-from-seed.js?");

/***/ }),

/***/ "./node_modules/shortid/lib/util/cluster-worker-id-browser.js":
/*!********************************************************************!*\
  !*** ./node_modules/shortid/lib/util/cluster-worker-id-browser.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = 0;\n\n\n//# sourceURL=webpack://module-10/./node_modules/shortid/lib/util/cluster-worker-id-browser.js?");

/***/ }),

/***/ "./node_modules/shortid/node_modules/nanoid/format.browser.js":
/*!********************************************************************!*\
  !*** ./node_modules/shortid/node_modules/nanoid/format.browser.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("// This file replaces `format.js` in bundlers like webpack or Rollup,\n// according to `browser` config in `package.json`.\n\nmodule.exports = function (random, alphabet, size) {\n  // We can’t use bytes bigger than the alphabet. To make bytes values closer\n  // to the alphabet, we apply bitmask on them. We look for the closest\n  // `2 ** x - 1` number, which will be bigger than alphabet size. If we have\n  // 30 symbols in the alphabet, we will take 31 (00011111).\n  // We do not use faster Math.clz32, because it is not available in browsers.\n  var mask = (2 << Math.log(alphabet.length - 1) / Math.LN2) - 1\n  // Bitmask is not a perfect solution (in our example it will pass 31 bytes,\n  // which is bigger than the alphabet). As a result, we will need more bytes,\n  // than ID size, because we will refuse bytes bigger than the alphabet.\n\n  // Every hardware random generator call is costly,\n  // because we need to wait for entropy collection. This is why often it will\n  // be faster to ask for few extra bytes in advance, to avoid additional calls.\n\n  // Here we calculate how many random bytes should we call in advance.\n  // It depends on ID length, mask / alphabet size and magic number 1.6\n  // (which was selected according benchmarks).\n\n  // -~f => Math.ceil(f) if n is float number\n  // -~i => i + 1 if n is integer number\n  var step = -~(1.6 * mask * size / alphabet.length)\n  var id = ''\n\n  while (true) {\n    var bytes = random(step)\n    // Compact alternative for `for (var i = 0; i < step; i++)`\n    var i = step\n    while (i--) {\n      // If random byte is bigger than alphabet even after bitmask,\n      // we refuse it by `|| ''`.\n      id += alphabet[bytes[i] & mask] || ''\n      // More compact than `id.length + 1 === size`\n      if (id.length === +size) return id\n    }\n  }\n}\n\n\n//# sourceURL=webpack://module-10/./node_modules/shortid/node_modules/nanoid/format.browser.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/app.js");
/******/ 	
/******/ })()
;