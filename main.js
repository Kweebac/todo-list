/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Classes.js":
/*!************************!*\
  !*** ./src/Classes.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Project": () => (/* binding */ Project),
/* harmony export */   "Task": () => (/* binding */ Task)
/* harmony export */ });
let i = 0;

class Project {
  constructor(name) {
    this.id = `project${i++}`;

    this.name = name;
    this.tasks = [];
  }

  addTask(object) {
    this.tasks.push(object);
  }
  removeTask(event) {
    for (let i = 0; i < this.tasks.length; i++) {
      if (this.tasks[i].id === event.currentTarget.parentNode.id) {
        this.tasks.splice(i, 1);
      }
    }
  }

  getTasks() {
    return this.tasks;
  }
  getName() {
    return this.name;
  }

  static currentProject = undefined;
  static projectList = [];

  static removeProject(event) {
    for (let i = 0; i < Project.projectList.length; i++) {
      if (Project.projectList[i].id === event.currentTarget.parentNode.id) {
        Project.projectList.splice(i, 1);
      }
    }
  }
}

let j = 0;

class Task {
  constructor(title, description, dueDate, priority) {
    this.id = `task${j++}`;

    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
  }

  getTitle() {
    return this.title;
  }
  getDescription() {
    return this.description;
  }
  getDueDate() {
    return this.dueDate;
  }
  getPriority() {
    return this.priority;
  }
}




/***/ }),

/***/ "./src/DOM.js":
/*!********************!*\
  !*** ./src/DOM.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DOM": () => (/* binding */ DOM)
/* harmony export */ });
/* harmony import */ var _DOMform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOMform */ "./src/DOMform.js");
/* harmony import */ var _DOMcreateTask__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DOMcreateTask */ "./src/DOMcreateTask.js");
/* harmony import */ var _DOMremoveTask__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DOMremoveTask */ "./src/DOMremoveTask.js");
/* harmony import */ var _DOMchangeTask__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DOMchangeTask */ "./src/DOMchangeTask.js");
/* harmony import */ var _DOMcreateProject__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./DOMcreateProject */ "./src/DOMcreateProject.js");
/* harmony import */ var _DOMremoveProject__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./DOMremoveProject */ "./src/DOMremoveProject.js");







const DOM = {
  form: {
    renderForm: _DOMform__WEBPACK_IMPORTED_MODULE_0__.renderForm,
    unrenderForm: _DOMform__WEBPACK_IMPORTED_MODULE_0__.unrenderForm,
    renderProjectForm: _DOMform__WEBPACK_IMPORTED_MODULE_0__.renderProjectForm,
    unrenderProjectForm: _DOMform__WEBPACK_IMPORTED_MODULE_0__.unrenderProjectForm,
  },
  task: {
    create: _DOMcreateTask__WEBPACK_IMPORTED_MODULE_1__.createTask,
    remove: _DOMremoveTask__WEBPACK_IMPORTED_MODULE_2__.removeTask,
    change: {
      extend: _DOMchangeTask__WEBPACK_IMPORTED_MODULE_3__.extendTask,
      unextend: _DOMchangeTask__WEBPACK_IMPORTED_MODULE_3__.unextendTask,
    },
  },
  project: {
    create: _DOMcreateProject__WEBPACK_IMPORTED_MODULE_4__.createProject,
    remove: _DOMremoveProject__WEBPACK_IMPORTED_MODULE_5__.removeProject,
  },
};




/***/ }),

/***/ "./src/DOMchangeTask.js":
/*!******************************!*\
  !*** ./src/DOMchangeTask.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "extendTask": () => (/* binding */ extendTask),
/* harmony export */   "unextendTask": () => (/* binding */ unextendTask)
/* harmony export */ });
/* harmony import */ var _Classes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Classes */ "./src/Classes.js");


function extendTask(event) {
  for (let i = 0; i < _Classes__WEBPACK_IMPORTED_MODULE_0__.Project.currentProject.getTasks().length; i++) {
    if (_Classes__WEBPACK_IMPORTED_MODULE_0__.Project.currentProject.getTasks()[i].id === event.currentTarget.id) {
      if (_Classes__WEBPACK_IMPORTED_MODULE_0__.Project.currentProject.getTasks()[i].description === "") {
        return false;
      }

      const newDiv = document.createElement("div");
      newDiv.id = "desc";
      newDiv.textContent = _Classes__WEBPACK_IMPORTED_MODULE_0__.Project.currentProject.getTasks()[i].description;

      event.currentTarget.children[1].insertBefore(
        newDiv,
        event.currentTarget.children[1].children[1]
      );
    }
  }
  return true;
}

function unextendTask(event) {
  for (let i = 0; i < _Classes__WEBPACK_IMPORTED_MODULE_0__.Project.currentProject.getTasks().length; i++) {
    if (_Classes__WEBPACK_IMPORTED_MODULE_0__.Project.currentProject.getTasks()[i].id === event.currentTarget.id) {
      event.currentTarget.children[1].removeChild(event.currentTarget.children[1].children[1]);
    }
  }
}




/***/ }),

/***/ "./src/DOMcreateProject.js":
/*!*********************************!*\
  !*** ./src/DOMcreateProject.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createProject": () => (/* binding */ createProject)
/* harmony export */ });
/* harmony import */ var _Classes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Classes */ "./src/Classes.js");


const sidebarDiv = document.querySelector(".sidebar");

function createProject(object) {
  const newDiv = document.createElement("div");
  newDiv.classList.add("project");
  newDiv.id = object.id;
  newDiv.innerHTML = `
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <path d="M19 3H18V1H16V3H8V1H6V3H5C3.9 3 3 3.9 3 5V19C3 20.11 3.9 21 5 21H19C20.11 21 21 20.11 21 19V5C21 3.9 20.11 3 19 3M19 19H5V9H19V19M5 7V5H19V7H5M10.56 17.46L16.5 11.53L15.43 10.47L10.56 15.34L8.45 13.23L7.39 14.29L10.56 17.46Z"/>
  </svg>
  <div></div>
  <div>✖</div>`;

  newDiv.querySelector("div:first-of-type").textContent = object.getName();

  sidebarDiv.appendChild(newDiv);
}




/***/ }),

/***/ "./src/DOMcreateTask.js":
/*!******************************!*\
  !*** ./src/DOMcreateTask.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createTask": () => (/* binding */ createTask)
/* harmony export */ });
/* harmony import */ var _Classes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Classes */ "./src/Classes.js");


const mainDiv = document.querySelector(".main");

function addColor(node) {
  if (_Classes__WEBPACK_IMPORTED_MODULE_0__.Project.currentProject.getTasks()[_Classes__WEBPACK_IMPORTED_MODULE_0__.Project.currentProject.getTasks().length - 1].priority)
    switch (
      _Classes__WEBPACK_IMPORTED_MODULE_0__.Project.currentProject.getTasks()[_Classes__WEBPACK_IMPORTED_MODULE_0__.Project.currentProject.getTasks().length - 1].priority
    ) {
      case "urgent":
        node.style.backgroundColor = "rgba(245, 93, 30, 0.3)";
        break;
      case "important":
        node.style.backgroundColor = "rgb(253, 152, 0, 0.3)";
        break;
      case "unimportant":
        node.style.backgroundColor = "rgb(181, 214, 167, 0.3)";
        break;
    }
}

function createTask(object) {
  const newDiv = document.createElement("div");
  newDiv.classList.add("task");
  newDiv.id = object.id;
  newDiv.innerHTML = `
    <input type="checkbox" />
    <div>
      <div id="title"></div>
      <div id="dueDate"></div>
    </div>
    <div>✖</div>`;

  newDiv.querySelector("#title").textContent = object.getTitle();
  newDiv.querySelector("#dueDate").textContent = object.getDueDate();
  addColor(newDiv);

  mainDiv.insertBefore(newDiv, document.querySelector(".main > div:last-child"));
}




/***/ }),

/***/ "./src/DOMform.js":
/*!************************!*\
  !*** ./src/DOMform.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderForm": () => (/* binding */ renderForm),
/* harmony export */   "renderProjectForm": () => (/* binding */ renderProjectForm),
/* harmony export */   "unrenderForm": () => (/* binding */ unrenderForm),
/* harmony export */   "unrenderProjectForm": () => (/* binding */ unrenderProjectForm)
/* harmony export */ });
const addTaskForm = document.querySelector(".addTaskForm");

function renderForm() {
  addTaskForm.style.visibility = "visible";
}
function unrenderForm() {
  addTaskForm.style.visibility = "hidden";
}

const projectForm = document.querySelector(".projectForm");

function renderProjectForm() {
  projectForm.style.visibility = "visible";
  projectForm.style.position = "relative";
}
function unrenderProjectForm() {
  projectForm.style.visibility = "hidden";
  projectForm.style.position = "absolute";
}




/***/ }),

/***/ "./src/DOMremoveProject.js":
/*!*********************************!*\
  !*** ./src/DOMremoveProject.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "removeProject": () => (/* binding */ removeProject)
/* harmony export */ });
/* harmony import */ var _Classes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Classes */ "./src/Classes.js");


function removeProject(event) {
  for (let i = 0; i < _Classes__WEBPACK_IMPORTED_MODULE_0__.Project.projectList.length; i++) {
    if (_Classes__WEBPACK_IMPORTED_MODULE_0__.Project.projectList[i].id === event.currentTarget.parentNode.id) {
      document.querySelector(".sidebar").removeChild(document.querySelectorAll(".project")[i]);
    }
  }
}




/***/ }),

/***/ "./src/DOMremoveTask.js":
/*!******************************!*\
  !*** ./src/DOMremoveTask.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "removeTask": () => (/* binding */ removeTask)
/* harmony export */ });
/* harmony import */ var _Classes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Classes */ "./src/Classes.js");


function removeTask(event) {
  for (let i = 0; i < _Classes__WEBPACK_IMPORTED_MODULE_0__.Project.currentProject.getTasks().length; i++) {
    if (_Classes__WEBPACK_IMPORTED_MODULE_0__.Project.currentProject.getTasks()[i].id === event.currentTarget.parentNode.id) {
      document.querySelector(".main").removeChild(document.querySelectorAll(".task")[i]);
    }
  }
}




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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DOM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOM */ "./src/DOM.js");
/* harmony import */ var _Classes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Classes */ "./src/Classes.js");
/* make a defaultProject project and let them create other projects 

modules: create new todo items, set todo items as complete, change todo priority,
UI: view projects with todos inside, expend each todo, delete a todo
When clicking each project it removes the current project UI 
and puts the new one 

when you click on a new project make it the currentProject*/




// on Add task click
// shows form
document.querySelector(".main > div:last-child").addEventListener("click", () => {
  _DOM__WEBPACK_IMPORTED_MODULE_0__.DOM.form.renderForm();
});

// on Form ✖ click
// hides form
document
  .querySelector("form > div:first-child")
  .addEventListener("click", _DOM__WEBPACK_IMPORTED_MODULE_0__.DOM.form.unrenderForm);

// on submit form click
// converts form inputs into a task inside the current project, then gets rid of the menu, then adds the task in the UI
document.querySelector("form button").addEventListener("click", (e) => {
  if (document.querySelector("form #title").value === "") return;
  e.preventDefault();

  _Classes__WEBPACK_IMPORTED_MODULE_1__.Project.currentProject.addTask(
    new _Classes__WEBPACK_IMPORTED_MODULE_1__.Task(
      document.querySelector("form #title").value,
      document.querySelector("form #desc").value,
      document.querySelector("form #dueDate").value,
      document.querySelector("form #priority").value
    )
  );

  _DOM__WEBPACK_IMPORTED_MODULE_0__.DOM.form.unrenderForm();

  _DOM__WEBPACK_IMPORTED_MODULE_0__.DOM.task.create(
    _Classes__WEBPACK_IMPORTED_MODULE_1__.Project.currentProject.getTasks()[_Classes__WEBPACK_IMPORTED_MODULE_1__.Project.currentProject.getTasks().length - 1]
  );

  // expands tasks on click
  const tasks = document.querySelectorAll(".task");
  let extended = false;

  tasks[tasks.length - 1].addEventListener("click", (event) => {
    if (extended === false) {
      if (_DOM__WEBPACK_IMPORTED_MODULE_0__.DOM.task.change.extend(event)) extended = true;
    } else {
      _DOM__WEBPACK_IMPORTED_MODULE_0__.DOM.task.change.unextend(event);
      extended = false;
    }
  });

  // on Task ✖ click
  // removes task
  const tasksXButton = document.querySelectorAll(".task > div:last-child");

  tasksXButton[tasksXButton.length - 1].addEventListener("click", (event) => {
    event.stopPropagation();

    _DOM__WEBPACK_IMPORTED_MODULE_0__.DOM.task.remove(event);
    _Classes__WEBPACK_IMPORTED_MODULE_1__.Project.currentProject.removeTask(event);
  });

  // on Checkbox click
  // removes task
  const checkboxButtons = document.querySelectorAll(".task > input[type=checkbox]");

  checkboxButtons[checkboxButtons.length - 1].addEventListener("click", (event) => {
    event.stopPropagation();

    _DOM__WEBPACK_IMPORTED_MODULE_0__.DOM.task.remove(event);
    _Classes__WEBPACK_IMPORTED_MODULE_1__.Project.currentProject.removeTask(event);
  });
});

// on Projects + button click
// opens form
document
  .querySelector(".sidebar > div:first-child > div:last-child")
  .addEventListener("click", () => {
    _DOM__WEBPACK_IMPORTED_MODULE_0__.DOM.form.renderProjectForm();
  });

// on Project form submit
// creates project, adds it to DOM
document.querySelector(".projectForm").addEventListener("submit", (e) => {
  e.preventDefault();

  _Classes__WEBPACK_IMPORTED_MODULE_1__.Project.projectList.push(
    new _Classes__WEBPACK_IMPORTED_MODULE_1__.Project(document.querySelector(".projectForm #projectName").value)
  );

  _DOM__WEBPACK_IMPORTED_MODULE_0__.DOM.project.create(_Classes__WEBPACK_IMPORTED_MODULE_1__.Project.projectList[_Classes__WEBPACK_IMPORTED_MODULE_1__.Project.projectList.length - 1]);
  _DOM__WEBPACK_IMPORTED_MODULE_0__.DOM.form.unrenderProjectForm();

  projectEventListeners();
});

function projectEventListeners() {
  const projectDeleteButtons = document.querySelectorAll(".project > div:last-of-type");

  // checks if currentProject is
  projectDeleteButtons[projectDeleteButtons.length - 1].addEventListener("click", (event) => {
    if (_Classes__WEBPACK_IMPORTED_MODULE_1__.Project.currentProject.id === event.currentTarget.parentNode.id) return;
    _DOM__WEBPACK_IMPORTED_MODULE_0__.DOM.project.remove(event);
    _Classes__WEBPACK_IMPORTED_MODULE_1__.Project.removeProject(event);
  });
}

_Classes__WEBPACK_IMPORTED_MODULE_1__.Project.projectList.push(new _Classes__WEBPACK_IMPORTED_MODULE_1__.Project("Default"));
_DOM__WEBPACK_IMPORTED_MODULE_0__.DOM.project.create(_Classes__WEBPACK_IMPORTED_MODULE_1__.Project.projectList[_Classes__WEBPACK_IMPORTED_MODULE_1__.Project.projectList.length - 1]);
projectEventListeners();
_Classes__WEBPACK_IMPORTED_MODULE_1__.Project.currentProject = _Classes__WEBPACK_IMPORTED_MODULE_1__.Project.projectList[0];

// make it so it creates the project, then creates the DOM, make the defaultProject
// DOM created on load not in html

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsOERBQXdCO0FBQzFCLFFBQVEsNkNBQU87QUFDZjtBQUNBO0FBQ0EsRUFBRSxvREFBa0IsQ0FBQyx5REFBbUIsQ0FBQyxnRUFBMEI7QUFDbkUsRUFBRSw4REFBNEI7QUFDOUI7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLCtEQUF5QjtBQUNqQyxJQUFJLG9EQUFrQjtBQUN0QixJQUFJLDJEQUFxQjtBQUN6QixHQUFHO0FBQ0g7QUFDQTtBQUNBLDhEQUF3QixLQUFLLDZDQUFPO0FBQ3BDLG9EQUFrQixDQUFDLHlEQUFtQixDQUFDLGdFQUEwQjtBQUNqRTtBQUNBLDREQUFzQixHQUFHLDREQUFzQjtBQUMvQztBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvQ2xhc3Nlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvRE9NLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9ET01jaGFuZ2VUYXNrLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9ET01jcmVhdGVQcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9ET01jcmVhdGVUYXNrLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9ET01mb3JtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9ET01yZW1vdmVQcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9ET01yZW1vdmVUYXNrLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJsZXQgaSA9IDA7XHJcblxyXG5jbGFzcyBQcm9qZWN0IHtcclxuICBjb25zdHJ1Y3RvcihuYW1lKSB7XHJcbiAgICB0aGlzLmlkID0gYHByb2plY3Qke2krK31gO1xyXG5cclxuICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICB0aGlzLnRhc2tzID0gW107XHJcbiAgfVxyXG5cclxuICBhZGRUYXNrKG9iamVjdCkge1xyXG4gICAgdGhpcy50YXNrcy5wdXNoKG9iamVjdCk7XHJcbiAgfVxyXG4gIHJlbW92ZVRhc2soZXZlbnQpIHtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy50YXNrcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICBpZiAodGhpcy50YXNrc1tpXS5pZCA9PT0gZXZlbnQuY3VycmVudFRhcmdldC5wYXJlbnROb2RlLmlkKSB7XHJcbiAgICAgICAgdGhpcy50YXNrcy5zcGxpY2UoaSwgMSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldFRhc2tzKCkge1xyXG4gICAgcmV0dXJuIHRoaXMudGFza3M7XHJcbiAgfVxyXG4gIGdldE5hbWUoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5uYW1lO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGN1cnJlbnRQcm9qZWN0ID0gdW5kZWZpbmVkO1xyXG4gIHN0YXRpYyBwcm9qZWN0TGlzdCA9IFtdO1xyXG5cclxuICBzdGF0aWMgcmVtb3ZlUHJvamVjdChldmVudCkge1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBQcm9qZWN0LnByb2plY3RMaXN0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGlmIChQcm9qZWN0LnByb2plY3RMaXN0W2ldLmlkID09PSBldmVudC5jdXJyZW50VGFyZ2V0LnBhcmVudE5vZGUuaWQpIHtcclxuICAgICAgICBQcm9qZWN0LnByb2plY3RMaXN0LnNwbGljZShpLCAxKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxubGV0IGogPSAwO1xyXG5cclxuY2xhc3MgVGFzayB7XHJcbiAgY29uc3RydWN0b3IodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSkge1xyXG4gICAgdGhpcy5pZCA9IGB0YXNrJHtqKyt9YDtcclxuXHJcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XHJcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XHJcbiAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xyXG4gICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xyXG4gIH1cclxuXHJcbiAgZ2V0VGl0bGUoKSB7XHJcbiAgICByZXR1cm4gdGhpcy50aXRsZTtcclxuICB9XHJcbiAgZ2V0RGVzY3JpcHRpb24oKSB7XHJcbiAgICByZXR1cm4gdGhpcy5kZXNjcmlwdGlvbjtcclxuICB9XHJcbiAgZ2V0RHVlRGF0ZSgpIHtcclxuICAgIHJldHVybiB0aGlzLmR1ZURhdGU7XHJcbiAgfVxyXG4gIGdldFByaW9yaXR5KCkge1xyXG4gICAgcmV0dXJuIHRoaXMucHJpb3JpdHk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgeyBQcm9qZWN0LCBUYXNrIH07XHJcbiIsImltcG9ydCB7IHJlbmRlckZvcm0sIHVucmVuZGVyRm9ybSwgcmVuZGVyUHJvamVjdEZvcm0sIHVucmVuZGVyUHJvamVjdEZvcm0gfSBmcm9tIFwiLi9ET01mb3JtXCI7XHJcbmltcG9ydCB7IGNyZWF0ZVRhc2sgfSBmcm9tIFwiLi9ET01jcmVhdGVUYXNrXCI7XHJcbmltcG9ydCB7IHJlbW92ZVRhc2sgfSBmcm9tIFwiLi9ET01yZW1vdmVUYXNrXCI7XHJcbmltcG9ydCB7IGV4dGVuZFRhc2ssIHVuZXh0ZW5kVGFzayB9IGZyb20gXCIuL0RPTWNoYW5nZVRhc2tcIjtcclxuaW1wb3J0IHsgY3JlYXRlUHJvamVjdCB9IGZyb20gXCIuL0RPTWNyZWF0ZVByb2plY3RcIjtcclxuaW1wb3J0IHsgcmVtb3ZlUHJvamVjdCB9IGZyb20gXCIuL0RPTXJlbW92ZVByb2plY3RcIjtcclxuXHJcbmNvbnN0IERPTSA9IHtcclxuICBmb3JtOiB7XHJcbiAgICByZW5kZXJGb3JtLFxyXG4gICAgdW5yZW5kZXJGb3JtLFxyXG4gICAgcmVuZGVyUHJvamVjdEZvcm0sXHJcbiAgICB1bnJlbmRlclByb2plY3RGb3JtLFxyXG4gIH0sXHJcbiAgdGFzazoge1xyXG4gICAgY3JlYXRlOiBjcmVhdGVUYXNrLFxyXG4gICAgcmVtb3ZlOiByZW1vdmVUYXNrLFxyXG4gICAgY2hhbmdlOiB7XHJcbiAgICAgIGV4dGVuZDogZXh0ZW5kVGFzayxcclxuICAgICAgdW5leHRlbmQ6IHVuZXh0ZW5kVGFzayxcclxuICAgIH0sXHJcbiAgfSxcclxuICBwcm9qZWN0OiB7XHJcbiAgICBjcmVhdGU6IGNyZWF0ZVByb2plY3QsXHJcbiAgICByZW1vdmU6IHJlbW92ZVByb2plY3QsXHJcbiAgfSxcclxufTtcclxuXHJcbmV4cG9ydCB7IERPTSB9O1xyXG4iLCJpbXBvcnQgeyBQcm9qZWN0IH0gZnJvbSBcIi4vQ2xhc3Nlc1wiO1xyXG5cclxuZnVuY3Rpb24gZXh0ZW5kVGFzayhldmVudCkge1xyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgUHJvamVjdC5jdXJyZW50UHJvamVjdC5nZXRUYXNrcygpLmxlbmd0aDsgaSsrKSB7XHJcbiAgICBpZiAoUHJvamVjdC5jdXJyZW50UHJvamVjdC5nZXRUYXNrcygpW2ldLmlkID09PSBldmVudC5jdXJyZW50VGFyZ2V0LmlkKSB7XHJcbiAgICAgIGlmIChQcm9qZWN0LmN1cnJlbnRQcm9qZWN0LmdldFRhc2tzKClbaV0uZGVzY3JpcHRpb24gPT09IFwiXCIpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNvbnN0IG5ld0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgIG5ld0Rpdi5pZCA9IFwiZGVzY1wiO1xyXG4gICAgICBuZXdEaXYudGV4dENvbnRlbnQgPSBQcm9qZWN0LmN1cnJlbnRQcm9qZWN0LmdldFRhc2tzKClbaV0uZGVzY3JpcHRpb247XHJcblxyXG4gICAgICBldmVudC5jdXJyZW50VGFyZ2V0LmNoaWxkcmVuWzFdLmluc2VydEJlZm9yZShcclxuICAgICAgICBuZXdEaXYsXHJcbiAgICAgICAgZXZlbnQuY3VycmVudFRhcmdldC5jaGlsZHJlblsxXS5jaGlsZHJlblsxXVxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gdHJ1ZTtcclxufVxyXG5cclxuZnVuY3Rpb24gdW5leHRlbmRUYXNrKGV2ZW50KSB7XHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBQcm9qZWN0LmN1cnJlbnRQcm9qZWN0LmdldFRhc2tzKCkubGVuZ3RoOyBpKyspIHtcclxuICAgIGlmIChQcm9qZWN0LmN1cnJlbnRQcm9qZWN0LmdldFRhc2tzKClbaV0uaWQgPT09IGV2ZW50LmN1cnJlbnRUYXJnZXQuaWQpIHtcclxuICAgICAgZXZlbnQuY3VycmVudFRhcmdldC5jaGlsZHJlblsxXS5yZW1vdmVDaGlsZChldmVudC5jdXJyZW50VGFyZ2V0LmNoaWxkcmVuWzFdLmNoaWxkcmVuWzFdKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7IGV4dGVuZFRhc2ssIHVuZXh0ZW5kVGFzayB9O1xyXG4iLCJpbXBvcnQgeyBQcm9qZWN0IH0gZnJvbSBcIi4vQ2xhc3Nlc1wiO1xyXG5cclxuY29uc3Qgc2lkZWJhckRpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2lkZWJhclwiKTtcclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVByb2plY3Qob2JqZWN0KSB7XHJcbiAgY29uc3QgbmV3RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBuZXdEaXYuY2xhc3NMaXN0LmFkZChcInByb2plY3RcIik7XHJcbiAgbmV3RGl2LmlkID0gb2JqZWN0LmlkO1xyXG4gIG5ld0Rpdi5pbm5lckhUTUwgPSBgXHJcbiAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPlxyXG4gICAgPHBhdGggZD1cIk0xOSAzSDE4VjFIMTZWM0g4VjFINlYzSDVDMy45IDMgMyAzLjkgMyA1VjE5QzMgMjAuMTEgMy45IDIxIDUgMjFIMTlDMjAuMTEgMjEgMjEgMjAuMTEgMjEgMTlWNUMyMSAzLjkgMjAuMTEgMyAxOSAzTTE5IDE5SDVWOUgxOVYxOU01IDdWNUgxOVY3SDVNMTAuNTYgMTcuNDZMMTYuNSAxMS41M0wxNS40MyAxMC40N0wxMC41NiAxNS4zNEw4LjQ1IDEzLjIzTDcuMzkgMTQuMjlMMTAuNTYgMTcuNDZaXCIvPlxyXG4gIDwvc3ZnPlxyXG4gIDxkaXY+PC9kaXY+XHJcbiAgPGRpdj7inJY8L2Rpdj5gO1xyXG5cclxuICBuZXdEaXYucXVlcnlTZWxlY3RvcihcImRpdjpmaXJzdC1vZi10eXBlXCIpLnRleHRDb250ZW50ID0gb2JqZWN0LmdldE5hbWUoKTtcclxuXHJcbiAgc2lkZWJhckRpdi5hcHBlbmRDaGlsZChuZXdEaXYpO1xyXG59XHJcblxyXG5leHBvcnQgeyBjcmVhdGVQcm9qZWN0IH07XHJcbiIsImltcG9ydCB7IFByb2plY3QgfSBmcm9tIFwiLi9DbGFzc2VzXCI7XHJcblxyXG5jb25zdCBtYWluRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluXCIpO1xyXG5cclxuZnVuY3Rpb24gYWRkQ29sb3Iobm9kZSkge1xyXG4gIGlmIChQcm9qZWN0LmN1cnJlbnRQcm9qZWN0LmdldFRhc2tzKClbUHJvamVjdC5jdXJyZW50UHJvamVjdC5nZXRUYXNrcygpLmxlbmd0aCAtIDFdLnByaW9yaXR5KVxyXG4gICAgc3dpdGNoIChcclxuICAgICAgUHJvamVjdC5jdXJyZW50UHJvamVjdC5nZXRUYXNrcygpW1Byb2plY3QuY3VycmVudFByb2plY3QuZ2V0VGFza3MoKS5sZW5ndGggLSAxXS5wcmlvcml0eVxyXG4gICAgKSB7XHJcbiAgICAgIGNhc2UgXCJ1cmdlbnRcIjpcclxuICAgICAgICBub2RlLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwicmdiYSgyNDUsIDkzLCAzMCwgMC4zKVwiO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFwiaW1wb3J0YW50XCI6XHJcbiAgICAgICAgbm9kZS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInJnYigyNTMsIDE1MiwgMCwgMC4zKVwiO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFwidW5pbXBvcnRhbnRcIjpcclxuICAgICAgICBub2RlLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwicmdiKDE4MSwgMjE0LCAxNjcsIDAuMylcIjtcclxuICAgICAgICBicmVhaztcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlVGFzayhvYmplY3QpIHtcclxuICBjb25zdCBuZXdEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIG5ld0Rpdi5jbGFzc0xpc3QuYWRkKFwidGFza1wiKTtcclxuICBuZXdEaXYuaWQgPSBvYmplY3QuaWQ7XHJcbiAgbmV3RGl2LmlubmVySFRNTCA9IGBcclxuICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiAvPlxyXG4gICAgPGRpdj5cclxuICAgICAgPGRpdiBpZD1cInRpdGxlXCI+PC9kaXY+XHJcbiAgICAgIDxkaXYgaWQ9XCJkdWVEYXRlXCI+PC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXY+4pyWPC9kaXY+YDtcclxuXHJcbiAgbmV3RGl2LnF1ZXJ5U2VsZWN0b3IoXCIjdGl0bGVcIikudGV4dENvbnRlbnQgPSBvYmplY3QuZ2V0VGl0bGUoKTtcclxuICBuZXdEaXYucXVlcnlTZWxlY3RvcihcIiNkdWVEYXRlXCIpLnRleHRDb250ZW50ID0gb2JqZWN0LmdldER1ZURhdGUoKTtcclxuICBhZGRDb2xvcihuZXdEaXYpO1xyXG5cclxuICBtYWluRGl2Lmluc2VydEJlZm9yZShuZXdEaXYsIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpbiA+IGRpdjpsYXN0LWNoaWxkXCIpKTtcclxufVxyXG5cclxuZXhwb3J0IHsgY3JlYXRlVGFzayB9O1xyXG4iLCJjb25zdCBhZGRUYXNrRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkVGFza0Zvcm1cIik7XHJcblxyXG5mdW5jdGlvbiByZW5kZXJGb3JtKCkge1xyXG4gIGFkZFRhc2tGb3JtLnN0eWxlLnZpc2liaWxpdHkgPSBcInZpc2libGVcIjtcclxufVxyXG5mdW5jdGlvbiB1bnJlbmRlckZvcm0oKSB7XHJcbiAgYWRkVGFza0Zvcm0uc3R5bGUudmlzaWJpbGl0eSA9IFwiaGlkZGVuXCI7XHJcbn1cclxuXHJcbmNvbnN0IHByb2plY3RGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0Rm9ybVwiKTtcclxuXHJcbmZ1bmN0aW9uIHJlbmRlclByb2plY3RGb3JtKCkge1xyXG4gIHByb2plY3RGb3JtLnN0eWxlLnZpc2liaWxpdHkgPSBcInZpc2libGVcIjtcclxuICBwcm9qZWN0Rm9ybS5zdHlsZS5wb3NpdGlvbiA9IFwicmVsYXRpdmVcIjtcclxufVxyXG5mdW5jdGlvbiB1bnJlbmRlclByb2plY3RGb3JtKCkge1xyXG4gIHByb2plY3RGb3JtLnN0eWxlLnZpc2liaWxpdHkgPSBcImhpZGRlblwiO1xyXG4gIHByb2plY3RGb3JtLnN0eWxlLnBvc2l0aW9uID0gXCJhYnNvbHV0ZVwiO1xyXG59XHJcblxyXG5leHBvcnQgeyByZW5kZXJGb3JtLCB1bnJlbmRlckZvcm0sIHJlbmRlclByb2plY3RGb3JtLCB1bnJlbmRlclByb2plY3RGb3JtIH07XHJcbiIsImltcG9ydCB7IFByb2plY3QgfSBmcm9tIFwiLi9DbGFzc2VzXCI7XHJcblxyXG5mdW5jdGlvbiByZW1vdmVQcm9qZWN0KGV2ZW50KSB7XHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBQcm9qZWN0LnByb2plY3RMaXN0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICBpZiAoUHJvamVjdC5wcm9qZWN0TGlzdFtpXS5pZCA9PT0gZXZlbnQuY3VycmVudFRhcmdldC5wYXJlbnROb2RlLmlkKSB7XHJcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2lkZWJhclwiKS5yZW1vdmVDaGlsZChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnByb2plY3RcIilbaV0pO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IHsgcmVtb3ZlUHJvamVjdCB9O1xyXG4iLCJpbXBvcnQgeyBQcm9qZWN0IH0gZnJvbSBcIi4vQ2xhc3Nlc1wiO1xyXG5cclxuZnVuY3Rpb24gcmVtb3ZlVGFzayhldmVudCkge1xyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgUHJvamVjdC5jdXJyZW50UHJvamVjdC5nZXRUYXNrcygpLmxlbmd0aDsgaSsrKSB7XHJcbiAgICBpZiAoUHJvamVjdC5jdXJyZW50UHJvamVjdC5nZXRUYXNrcygpW2ldLmlkID09PSBldmVudC5jdXJyZW50VGFyZ2V0LnBhcmVudE5vZGUuaWQpIHtcclxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluXCIpLnJlbW92ZUNoaWxkKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudGFza1wiKVtpXSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgeyByZW1vdmVUYXNrIH07XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLyogbWFrZSBhIGRlZmF1bHRQcm9qZWN0IHByb2plY3QgYW5kIGxldCB0aGVtIGNyZWF0ZSBvdGhlciBwcm9qZWN0cyBcclxuXHJcbm1vZHVsZXM6IGNyZWF0ZSBuZXcgdG9kbyBpdGVtcywgc2V0IHRvZG8gaXRlbXMgYXMgY29tcGxldGUsIGNoYW5nZSB0b2RvIHByaW9yaXR5LFxyXG5VSTogdmlldyBwcm9qZWN0cyB3aXRoIHRvZG9zIGluc2lkZSwgZXhwZW5kIGVhY2ggdG9kbywgZGVsZXRlIGEgdG9kb1xyXG5XaGVuIGNsaWNraW5nIGVhY2ggcHJvamVjdCBpdCByZW1vdmVzIHRoZSBjdXJyZW50IHByb2plY3QgVUkgXHJcbmFuZCBwdXRzIHRoZSBuZXcgb25lIFxyXG5cclxud2hlbiB5b3UgY2xpY2sgb24gYSBuZXcgcHJvamVjdCBtYWtlIGl0IHRoZSBjdXJyZW50UHJvamVjdCovXHJcblxyXG5pbXBvcnQgeyBET00gfSBmcm9tIFwiLi9ET01cIjtcclxuaW1wb3J0IHsgY3VycmVudCwgUHJvamVjdCwgVGFzayB9IGZyb20gXCIuL0NsYXNzZXNcIjtcclxuXHJcbi8vIG9uIEFkZCB0YXNrIGNsaWNrXHJcbi8vIHNob3dzIGZvcm1cclxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluID4gZGl2Omxhc3QtY2hpbGRcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICBET00uZm9ybS5yZW5kZXJGb3JtKCk7XHJcbn0pO1xyXG5cclxuLy8gb24gRm9ybSDinJYgY2xpY2tcclxuLy8gaGlkZXMgZm9ybVxyXG5kb2N1bWVudFxyXG4gIC5xdWVyeVNlbGVjdG9yKFwiZm9ybSA+IGRpdjpmaXJzdC1jaGlsZFwiKVxyXG4gIC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgRE9NLmZvcm0udW5yZW5kZXJGb3JtKTtcclxuXHJcbi8vIG9uIHN1Ym1pdCBmb3JtIGNsaWNrXHJcbi8vIGNvbnZlcnRzIGZvcm0gaW5wdXRzIGludG8gYSB0YXNrIGluc2lkZSB0aGUgY3VycmVudCBwcm9qZWN0LCB0aGVuIGdldHMgcmlkIG9mIHRoZSBtZW51LCB0aGVuIGFkZHMgdGhlIHRhc2sgaW4gdGhlIFVJXHJcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJmb3JtIGJ1dHRvblwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcclxuICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImZvcm0gI3RpdGxlXCIpLnZhbHVlID09PSBcIlwiKSByZXR1cm47XHJcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICBQcm9qZWN0LmN1cnJlbnRQcm9qZWN0LmFkZFRhc2soXHJcbiAgICBuZXcgVGFzayhcclxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImZvcm0gI3RpdGxlXCIpLnZhbHVlLFxyXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiZm9ybSAjZGVzY1wiKS52YWx1ZSxcclxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImZvcm0gI2R1ZURhdGVcIikudmFsdWUsXHJcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJmb3JtICNwcmlvcml0eVwiKS52YWx1ZVxyXG4gICAgKVxyXG4gICk7XHJcblxyXG4gIERPTS5mb3JtLnVucmVuZGVyRm9ybSgpO1xyXG5cclxuICBET00udGFzay5jcmVhdGUoXHJcbiAgICBQcm9qZWN0LmN1cnJlbnRQcm9qZWN0LmdldFRhc2tzKClbUHJvamVjdC5jdXJyZW50UHJvamVjdC5nZXRUYXNrcygpLmxlbmd0aCAtIDFdXHJcbiAgKTtcclxuXHJcbiAgLy8gZXhwYW5kcyB0YXNrcyBvbiBjbGlja1xyXG4gIGNvbnN0IHRhc2tzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi50YXNrXCIpO1xyXG4gIGxldCBleHRlbmRlZCA9IGZhbHNlO1xyXG5cclxuICB0YXNrc1t0YXNrcy5sZW5ndGggLSAxXS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XHJcbiAgICBpZiAoZXh0ZW5kZWQgPT09IGZhbHNlKSB7XHJcbiAgICAgIGlmIChET00udGFzay5jaGFuZ2UuZXh0ZW5kKGV2ZW50KSkgZXh0ZW5kZWQgPSB0cnVlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgRE9NLnRhc2suY2hhbmdlLnVuZXh0ZW5kKGV2ZW50KTtcclxuICAgICAgZXh0ZW5kZWQgPSBmYWxzZTtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgLy8gb24gVGFzayDinJYgY2xpY2tcclxuICAvLyByZW1vdmVzIHRhc2tcclxuICBjb25zdCB0YXNrc1hCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnRhc2sgPiBkaXY6bGFzdC1jaGlsZFwiKTtcclxuXHJcbiAgdGFza3NYQnV0dG9uW3Rhc2tzWEJ1dHRvbi5sZW5ndGggLSAxXS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XHJcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuXHJcbiAgICBET00udGFzay5yZW1vdmUoZXZlbnQpO1xyXG4gICAgUHJvamVjdC5jdXJyZW50UHJvamVjdC5yZW1vdmVUYXNrKGV2ZW50KTtcclxuICB9KTtcclxuXHJcbiAgLy8gb24gQ2hlY2tib3ggY2xpY2tcclxuICAvLyByZW1vdmVzIHRhc2tcclxuICBjb25zdCBjaGVja2JveEJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnRhc2sgPiBpbnB1dFt0eXBlPWNoZWNrYm94XVwiKTtcclxuXHJcbiAgY2hlY2tib3hCdXR0b25zW2NoZWNrYm94QnV0dG9ucy5sZW5ndGggLSAxXS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XHJcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuXHJcbiAgICBET00udGFzay5yZW1vdmUoZXZlbnQpO1xyXG4gICAgUHJvamVjdC5jdXJyZW50UHJvamVjdC5yZW1vdmVUYXNrKGV2ZW50KTtcclxuICB9KTtcclxufSk7XHJcblxyXG4vLyBvbiBQcm9qZWN0cyArIGJ1dHRvbiBjbGlja1xyXG4vLyBvcGVucyBmb3JtXHJcbmRvY3VtZW50XHJcbiAgLnF1ZXJ5U2VsZWN0b3IoXCIuc2lkZWJhciA+IGRpdjpmaXJzdC1jaGlsZCA+IGRpdjpsYXN0LWNoaWxkXCIpXHJcbiAgLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICBET00uZm9ybS5yZW5kZXJQcm9qZWN0Rm9ybSgpO1xyXG4gIH0pO1xyXG5cclxuLy8gb24gUHJvamVjdCBmb3JtIHN1Ym1pdFxyXG4vLyBjcmVhdGVzIHByb2plY3QsIGFkZHMgaXQgdG8gRE9NXHJcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdEZvcm1cIikuYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoZSkgPT4ge1xyXG4gIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgUHJvamVjdC5wcm9qZWN0TGlzdC5wdXNoKFxyXG4gICAgbmV3IFByb2plY3QoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0Rm9ybSAjcHJvamVjdE5hbWVcIikudmFsdWUpXHJcbiAgKTtcclxuXHJcbiAgRE9NLnByb2plY3QuY3JlYXRlKFByb2plY3QucHJvamVjdExpc3RbUHJvamVjdC5wcm9qZWN0TGlzdC5sZW5ndGggLSAxXSk7XHJcbiAgRE9NLmZvcm0udW5yZW5kZXJQcm9qZWN0Rm9ybSgpO1xyXG5cclxuICBwcm9qZWN0RXZlbnRMaXN0ZW5lcnMoKTtcclxufSk7XHJcblxyXG5mdW5jdGlvbiBwcm9qZWN0RXZlbnRMaXN0ZW5lcnMoKSB7XHJcbiAgY29uc3QgcHJvamVjdERlbGV0ZUJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnByb2plY3QgPiBkaXY6bGFzdC1vZi10eXBlXCIpO1xyXG5cclxuICAvLyBjaGVja3MgaWYgY3VycmVudFByb2plY3QgaXNcclxuICBwcm9qZWN0RGVsZXRlQnV0dG9uc1twcm9qZWN0RGVsZXRlQnV0dG9ucy5sZW5ndGggLSAxXS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XHJcbiAgICBpZiAoUHJvamVjdC5jdXJyZW50UHJvamVjdC5pZCA9PT0gZXZlbnQuY3VycmVudFRhcmdldC5wYXJlbnROb2RlLmlkKSByZXR1cm47XHJcbiAgICBET00ucHJvamVjdC5yZW1vdmUoZXZlbnQpO1xyXG4gICAgUHJvamVjdC5yZW1vdmVQcm9qZWN0KGV2ZW50KTtcclxuICB9KTtcclxufVxyXG5cclxuUHJvamVjdC5wcm9qZWN0TGlzdC5wdXNoKG5ldyBQcm9qZWN0KFwiRGVmYXVsdFwiKSk7XHJcbkRPTS5wcm9qZWN0LmNyZWF0ZShQcm9qZWN0LnByb2plY3RMaXN0W1Byb2plY3QucHJvamVjdExpc3QubGVuZ3RoIC0gMV0pO1xyXG5wcm9qZWN0RXZlbnRMaXN0ZW5lcnMoKTtcclxuUHJvamVjdC5jdXJyZW50UHJvamVjdCA9IFByb2plY3QucHJvamVjdExpc3RbMF07XHJcblxyXG4vLyBtYWtlIGl0IHNvIGl0IGNyZWF0ZXMgdGhlIHByb2plY3QsIHRoZW4gY3JlYXRlcyB0aGUgRE9NLCBtYWtlIHRoZSBkZWZhdWx0UHJvamVjdFxyXG4vLyBET00gY3JlYXRlZCBvbiBsb2FkIG5vdCBpbiBodG1sXHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==