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
/* harmony import */ var _localeStorage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./localeStorage */ "./src/localeStorage.js");


let i = 0;

class Project {
  constructor(name) {
    this.id = `project${i++}`;

    this.name = name;
    this.tasks = [];

    Project.projectList.push(this);
    (0,_localeStorage__WEBPACK_IMPORTED_MODULE_0__.saveProjects)();
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
}

let j = 0;

class Task {
  constructor(title, description, dueDate, priority) {
    this.id = `task${j++}`;

    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;

    Project.currentProject.addTask(this);
    (0,_localeStorage__WEBPACK_IMPORTED_MODULE_0__.saveProjects)();
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
/* harmony import */ var _DOMcreateMain__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./DOMcreateMain */ "./src/DOMcreateMain.js");
/* harmony import */ var _DOMresetTasks__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./DOMresetTasks */ "./src/DOMresetTasks.js");









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
  main: {
    reset: _DOMresetTasks__WEBPACK_IMPORTED_MODULE_7__.resetTasks,
    create: _DOMcreateMain__WEBPACK_IMPORTED_MODULE_6__.createMain,
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

/***/ "./src/DOMcreateMain.js":
/*!******************************!*\
  !*** ./src/DOMcreateMain.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createMain": () => (/* binding */ createMain)
/* harmony export */ });
/* harmony import */ var _Classes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Classes */ "./src/Classes.js");
/* harmony import */ var _DOM__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DOM */ "./src/DOM.js");



function createMain(event) {
  const projectTitle = document.querySelector(".main > div:first-child");

  // sets project title
  for (let i = 0; i < _Classes__WEBPACK_IMPORTED_MODULE_0__.Project.projectList.length; i++) {
    if (_Classes__WEBPACK_IMPORTED_MODULE_0__.Project.projectList[i].id === event.currentTarget.id) {
      projectTitle.textContent = _Classes__WEBPACK_IMPORTED_MODULE_0__.Project.projectList[i].getName();
    }
  }

  // adds the tasks
  for (let i = 0; i < _Classes__WEBPACK_IMPORTED_MODULE_0__.Project.currentProject.getTasks().length; i++) {
    if (_Classes__WEBPACK_IMPORTED_MODULE_0__.Project.currentProject.getTasks()[i])
      _DOM__WEBPACK_IMPORTED_MODULE_1__.DOM.task.create(_Classes__WEBPACK_IMPORTED_MODULE_0__.Project.currentProject.getTasks()[i]);
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
/* harmony import */ var _DOM__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DOM */ "./src/DOM.js");



const tasks = document.querySelector(".tasks");

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

  tasks.appendChild(newDiv);

  // expands tasks on click
  const allTask = document.querySelectorAll(".task");
  let extended = false;

  allTask[allTask.length - 1].addEventListener("click", (event) => {
    if (extended === false) {
      if (_DOM__WEBPACK_IMPORTED_MODULE_1__.DOM.task.change.extend(event)) extended = true;
    } else {
      _DOM__WEBPACK_IMPORTED_MODULE_1__.DOM.task.change.unextend(event);
      extended = false;
    }
  });

  // on Task ✖ click
  // removes task
  const tasksXButton = document.querySelectorAll(".task > div:last-child");

  tasksXButton[tasksXButton.length - 1].addEventListener("click", (event) => {
    event.stopPropagation();

    _DOM__WEBPACK_IMPORTED_MODULE_1__.DOM.task.remove(event);
    _Classes__WEBPACK_IMPORTED_MODULE_0__.Project.currentProject.removeTask(event);
  });

  // on Checkbox click
  // removes task
  const checkboxButtons = document.querySelectorAll(".task > input[type=checkbox]");

  checkboxButtons[checkboxButtons.length - 1].addEventListener("click", (event) => {
    event.stopPropagation();

    _DOM__WEBPACK_IMPORTED_MODULE_1__.DOM.task.remove(event);
    _Classes__WEBPACK_IMPORTED_MODULE_0__.Project.currentProject.removeTask(event);
  });
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
      document.querySelector(".tasks").removeChild(document.querySelectorAll(".task")[i]);
    }
  }
}




/***/ }),

/***/ "./src/DOMresetTasks.js":
/*!******************************!*\
  !*** ./src/DOMresetTasks.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "resetTasks": () => (/* binding */ resetTasks)
/* harmony export */ });
function resetTasks() {
  document.querySelector(".tasks").innerHTML = "";
}




/***/ }),

/***/ "./src/localeStorage.js":
/*!******************************!*\
  !*** ./src/localeStorage.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loadStorage": () => (/* binding */ loadStorage),
/* harmony export */   "saveProjects": () => (/* binding */ saveProjects)
/* harmony export */ });
/* harmony import */ var _Classes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Classes */ "./src/Classes.js");


function saveProjects() {
  localStorage.setItem("projects", JSON.stringify(_Classes__WEBPACK_IMPORTED_MODULE_0__.Project.projectList));
}

function loadStorage() {
  const projects = JSON.parse(localStorage.getItem("projects"));
  console.log(projects);
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
/* harmony import */ var _localeStorage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./localeStorage */ "./src/localeStorage.js");




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

  new _Classes__WEBPACK_IMPORTED_MODULE_1__.Task(
    document.querySelector("form #title").value,
    document.querySelector("form #desc").value,
    `Due on ${new Date(document.querySelector("form #dueDate").value)}`,
    document.querySelector("form #priority").value
  );

  _DOM__WEBPACK_IMPORTED_MODULE_0__.DOM.form.unrenderForm();

  _DOM__WEBPACK_IMPORTED_MODULE_0__.DOM.task.create(
    _Classes__WEBPACK_IMPORTED_MODULE_1__.Project.currentProject.getTasks()[_Classes__WEBPACK_IMPORTED_MODULE_1__.Project.currentProject.getTasks().length - 1]
  );
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

  new _Classes__WEBPACK_IMPORTED_MODULE_1__.Project(document.querySelector(".projectForm #projectName").value);

  _DOM__WEBPACK_IMPORTED_MODULE_0__.DOM.project.create(_Classes__WEBPACK_IMPORTED_MODULE_1__.Project.projectList[_Classes__WEBPACK_IMPORTED_MODULE_1__.Project.projectList.length - 1]);
  _DOM__WEBPACK_IMPORTED_MODULE_0__.DOM.form.unrenderProjectForm();

  projectEventListeners();
});

function projectEventListeners() {
  const projectDeleteButtons = document.querySelectorAll(".project > div:last-of-type");

  // checks if currentProject is the same, then removes the project
  projectDeleteButtons[projectDeleteButtons.length - 1].addEventListener("click", (event) => {
    event.stopPropagation();

    if (_Classes__WEBPACK_IMPORTED_MODULE_1__.Project.currentProject.id === event.currentTarget.parentNode.id) return;

    _DOM__WEBPACK_IMPORTED_MODULE_0__.DOM.project.remove(event);
    _Classes__WEBPACK_IMPORTED_MODULE_1__.Project.removeProject(event);
  });

  const projects = document.querySelectorAll(".project");

  // sets currentProject to it, then loads the DOM
  projects[projects.length - 1].addEventListener("click", (event) => {
    event.stopPropagation();

    // sets currentProject
    for (let i = 0; i < _Classes__WEBPACK_IMPORTED_MODULE_1__.Project.projectList.length; i++) {
      if (_Classes__WEBPACK_IMPORTED_MODULE_1__.Project.projectList[i].id === event.currentTarget.id) {
        _Classes__WEBPACK_IMPORTED_MODULE_1__.Project.currentProject = _Classes__WEBPACK_IMPORTED_MODULE_1__.Project.projectList[i];
      }
    }

    _DOM__WEBPACK_IMPORTED_MODULE_0__.DOM.main.reset();
    _DOM__WEBPACK_IMPORTED_MODULE_0__.DOM.main.create(event);
  });
}

(0,_localeStorage__WEBPACK_IMPORTED_MODULE_2__.loadStorage)(); // loads projects first

new _Classes__WEBPACK_IMPORTED_MODULE_1__.Project("Default");
_DOM__WEBPACK_IMPORTED_MODULE_0__.DOM.project.create(_Classes__WEBPACK_IMPORTED_MODULE_1__.Project.projectList[_Classes__WEBPACK_IMPORTED_MODULE_1__.Project.projectList.length - 1]);
projectEventListeners();
_Classes__WEBPACK_IMPORTED_MODULE_1__.Project.currentProject = _Classes__WEBPACK_IMPORTED_MODULE_1__.Project.projectList[0];

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SUFBSSw2Q0FBTztBQUNYLG9EQUFrQixDQUFDLHlEQUFtQixDQUFDLGdFQUEwQjtBQUNqRTtBQUNBLDREQUFzQixHQUFHLDREQUFzQiIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9DbGFzc2VzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9ET00uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL0RPTWNoYW5nZVRhc2suanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL0RPTWNyZWF0ZU1haW4uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL0RPTWNyZWF0ZVByb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL0RPTWNyZWF0ZVRhc2suanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL0RPTWZvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL0RPTXJlbW92ZVByb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL0RPTXJlbW92ZVRhc2suanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL0RPTXJlc2V0VGFza3MuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2xvY2FsZVN0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHNhdmVQcm9qZWN0cyB9IGZyb20gXCIuL2xvY2FsZVN0b3JhZ2VcIjtcclxuXHJcbmxldCBpID0gMDtcclxuXHJcbmNsYXNzIFByb2plY3Qge1xyXG4gIGNvbnN0cnVjdG9yKG5hbWUpIHtcclxuICAgIHRoaXMuaWQgPSBgcHJvamVjdCR7aSsrfWA7XHJcblxyXG4gICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgIHRoaXMudGFza3MgPSBbXTtcclxuXHJcbiAgICBQcm9qZWN0LnByb2plY3RMaXN0LnB1c2godGhpcyk7XHJcbiAgICBzYXZlUHJvamVjdHMoKTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBjdXJyZW50UHJvamVjdCA9IHVuZGVmaW5lZDtcclxuICBzdGF0aWMgcHJvamVjdExpc3QgPSBbXTtcclxuXHJcbiAgc3RhdGljIHJlbW92ZVByb2plY3QoZXZlbnQpIHtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgUHJvamVjdC5wcm9qZWN0TGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICBpZiAoUHJvamVjdC5wcm9qZWN0TGlzdFtpXS5pZCA9PT0gZXZlbnQuY3VycmVudFRhcmdldC5wYXJlbnROb2RlLmlkKSB7XHJcbiAgICAgICAgUHJvamVjdC5wcm9qZWN0TGlzdC5zcGxpY2UoaSwgMSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGFkZFRhc2sob2JqZWN0KSB7XHJcbiAgICB0aGlzLnRhc2tzLnB1c2gob2JqZWN0KTtcclxuICB9XHJcbiAgcmVtb3ZlVGFzayhldmVudCkge1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnRhc2tzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGlmICh0aGlzLnRhc2tzW2ldLmlkID09PSBldmVudC5jdXJyZW50VGFyZ2V0LnBhcmVudE5vZGUuaWQpIHtcclxuICAgICAgICB0aGlzLnRhc2tzLnNwbGljZShpLCAxKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0VGFza3MoKSB7XHJcbiAgICByZXR1cm4gdGhpcy50YXNrcztcclxuICB9XHJcbiAgZ2V0TmFtZSgpIHtcclxuICAgIHJldHVybiB0aGlzLm5hbWU7XHJcbiAgfVxyXG59XHJcblxyXG5sZXQgaiA9IDA7XHJcblxyXG5jbGFzcyBUYXNrIHtcclxuICBjb25zdHJ1Y3Rvcih0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KSB7XHJcbiAgICB0aGlzLmlkID0gYHRhc2ske2orK31gO1xyXG5cclxuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcclxuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcclxuICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XHJcbiAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XHJcblxyXG4gICAgUHJvamVjdC5jdXJyZW50UHJvamVjdC5hZGRUYXNrKHRoaXMpO1xyXG4gICAgc2F2ZVByb2plY3RzKCk7XHJcbiAgfVxyXG5cclxuICBnZXRUaXRsZSgpIHtcclxuICAgIHJldHVybiB0aGlzLnRpdGxlO1xyXG4gIH1cclxuICBnZXREZXNjcmlwdGlvbigpIHtcclxuICAgIHJldHVybiB0aGlzLmRlc2NyaXB0aW9uO1xyXG4gIH1cclxuICBnZXREdWVEYXRlKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuZHVlRGF0ZTtcclxuICB9XHJcbiAgZ2V0UHJpb3JpdHkoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5wcmlvcml0eTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7IFByb2plY3QsIFRhc2sgfTtcclxuIiwiaW1wb3J0IHsgcmVuZGVyRm9ybSwgdW5yZW5kZXJGb3JtLCByZW5kZXJQcm9qZWN0Rm9ybSwgdW5yZW5kZXJQcm9qZWN0Rm9ybSB9IGZyb20gXCIuL0RPTWZvcm1cIjtcclxuaW1wb3J0IHsgY3JlYXRlVGFzayB9IGZyb20gXCIuL0RPTWNyZWF0ZVRhc2tcIjtcclxuaW1wb3J0IHsgcmVtb3ZlVGFzayB9IGZyb20gXCIuL0RPTXJlbW92ZVRhc2tcIjtcclxuaW1wb3J0IHsgZXh0ZW5kVGFzaywgdW5leHRlbmRUYXNrIH0gZnJvbSBcIi4vRE9NY2hhbmdlVGFza1wiO1xyXG5pbXBvcnQgeyBjcmVhdGVQcm9qZWN0IH0gZnJvbSBcIi4vRE9NY3JlYXRlUHJvamVjdFwiO1xyXG5pbXBvcnQgeyByZW1vdmVQcm9qZWN0IH0gZnJvbSBcIi4vRE9NcmVtb3ZlUHJvamVjdFwiO1xyXG5pbXBvcnQgeyBjcmVhdGVNYWluIH0gZnJvbSBcIi4vRE9NY3JlYXRlTWFpblwiO1xyXG5pbXBvcnQgeyByZXNldFRhc2tzIH0gZnJvbSBcIi4vRE9NcmVzZXRUYXNrc1wiO1xyXG5cclxuY29uc3QgRE9NID0ge1xyXG4gIGZvcm06IHtcclxuICAgIHJlbmRlckZvcm0sXHJcbiAgICB1bnJlbmRlckZvcm0sXHJcbiAgICByZW5kZXJQcm9qZWN0Rm9ybSxcclxuICAgIHVucmVuZGVyUHJvamVjdEZvcm0sXHJcbiAgfSxcclxuICB0YXNrOiB7XHJcbiAgICBjcmVhdGU6IGNyZWF0ZVRhc2ssXHJcbiAgICByZW1vdmU6IHJlbW92ZVRhc2ssXHJcbiAgICBjaGFuZ2U6IHtcclxuICAgICAgZXh0ZW5kOiBleHRlbmRUYXNrLFxyXG4gICAgICB1bmV4dGVuZDogdW5leHRlbmRUYXNrLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIHByb2plY3Q6IHtcclxuICAgIGNyZWF0ZTogY3JlYXRlUHJvamVjdCxcclxuICAgIHJlbW92ZTogcmVtb3ZlUHJvamVjdCxcclxuICB9LFxyXG4gIG1haW46IHtcclxuICAgIHJlc2V0OiByZXNldFRhc2tzLFxyXG4gICAgY3JlYXRlOiBjcmVhdGVNYWluLFxyXG4gIH0sXHJcbn07XHJcblxyXG5leHBvcnQgeyBET00gfTtcclxuIiwiaW1wb3J0IHsgUHJvamVjdCB9IGZyb20gXCIuL0NsYXNzZXNcIjtcclxuXHJcbmZ1bmN0aW9uIGV4dGVuZFRhc2soZXZlbnQpIHtcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IFByb2plY3QuY3VycmVudFByb2plY3QuZ2V0VGFza3MoKS5sZW5ndGg7IGkrKykge1xyXG4gICAgaWYgKFByb2plY3QuY3VycmVudFByb2plY3QuZ2V0VGFza3MoKVtpXS5pZCA9PT0gZXZlbnQuY3VycmVudFRhcmdldC5pZCkge1xyXG4gICAgICBpZiAoUHJvamVjdC5jdXJyZW50UHJvamVjdC5nZXRUYXNrcygpW2ldLmRlc2NyaXB0aW9uID09PSBcIlwiKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBjb25zdCBuZXdEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICBuZXdEaXYuaWQgPSBcImRlc2NcIjtcclxuICAgICAgbmV3RGl2LnRleHRDb250ZW50ID0gUHJvamVjdC5jdXJyZW50UHJvamVjdC5nZXRUYXNrcygpW2ldLmRlc2NyaXB0aW9uO1xyXG5cclxuICAgICAgZXZlbnQuY3VycmVudFRhcmdldC5jaGlsZHJlblsxXS5pbnNlcnRCZWZvcmUoXHJcbiAgICAgICAgbmV3RGl2LFxyXG4gICAgICAgIGV2ZW50LmN1cnJlbnRUYXJnZXQuY2hpbGRyZW5bMV0uY2hpbGRyZW5bMV1cclxuICAgICAgKTtcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIHRydWU7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVuZXh0ZW5kVGFzayhldmVudCkge1xyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgUHJvamVjdC5jdXJyZW50UHJvamVjdC5nZXRUYXNrcygpLmxlbmd0aDsgaSsrKSB7XHJcbiAgICBpZiAoUHJvamVjdC5jdXJyZW50UHJvamVjdC5nZXRUYXNrcygpW2ldLmlkID09PSBldmVudC5jdXJyZW50VGFyZ2V0LmlkKSB7XHJcbiAgICAgIGV2ZW50LmN1cnJlbnRUYXJnZXQuY2hpbGRyZW5bMV0ucmVtb3ZlQ2hpbGQoZXZlbnQuY3VycmVudFRhcmdldC5jaGlsZHJlblsxXS5jaGlsZHJlblsxXSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgeyBleHRlbmRUYXNrLCB1bmV4dGVuZFRhc2sgfTtcclxuIiwiaW1wb3J0IHsgUHJvamVjdCB9IGZyb20gXCIuL0NsYXNzZXNcIjtcclxuaW1wb3J0IHsgRE9NIH0gZnJvbSBcIi4vRE9NXCI7XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVNYWluKGV2ZW50KSB7XHJcbiAgY29uc3QgcHJvamVjdFRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluID4gZGl2OmZpcnN0LWNoaWxkXCIpO1xyXG5cclxuICAvLyBzZXRzIHByb2plY3QgdGl0bGVcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IFByb2plY3QucHJvamVjdExpc3QubGVuZ3RoOyBpKyspIHtcclxuICAgIGlmIChQcm9qZWN0LnByb2plY3RMaXN0W2ldLmlkID09PSBldmVudC5jdXJyZW50VGFyZ2V0LmlkKSB7XHJcbiAgICAgIHByb2plY3RUaXRsZS50ZXh0Q29udGVudCA9IFByb2plY3QucHJvamVjdExpc3RbaV0uZ2V0TmFtZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gYWRkcyB0aGUgdGFza3NcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IFByb2plY3QuY3VycmVudFByb2plY3QuZ2V0VGFza3MoKS5sZW5ndGg7IGkrKykge1xyXG4gICAgaWYgKFByb2plY3QuY3VycmVudFByb2plY3QuZ2V0VGFza3MoKVtpXSlcclxuICAgICAgRE9NLnRhc2suY3JlYXRlKFByb2plY3QuY3VycmVudFByb2plY3QuZ2V0VGFza3MoKVtpXSk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgeyBjcmVhdGVNYWluIH07XHJcbiIsImltcG9ydCB7IFByb2plY3QgfSBmcm9tIFwiLi9DbGFzc2VzXCI7XHJcblxyXG5jb25zdCBzaWRlYmFyRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zaWRlYmFyXCIpO1xyXG5cclxuZnVuY3Rpb24gY3JlYXRlUHJvamVjdChvYmplY3QpIHtcclxuICBjb25zdCBuZXdEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIG5ld0Rpdi5jbGFzc0xpc3QuYWRkKFwicHJvamVjdFwiKTtcclxuICBuZXdEaXYuaWQgPSBvYmplY3QuaWQ7XHJcbiAgbmV3RGl2LmlubmVySFRNTCA9IGBcclxuICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+XHJcbiAgICA8cGF0aCBkPVwiTTE5IDNIMThWMUgxNlYzSDhWMUg2VjNINUMzLjkgMyAzIDMuOSAzIDVWMTlDMyAyMC4xMSAzLjkgMjEgNSAyMUgxOUMyMC4xMSAyMSAyMSAyMC4xMSAyMSAxOVY1QzIxIDMuOSAyMC4xMSAzIDE5IDNNMTkgMTlINVY5SDE5VjE5TTUgN1Y1SDE5VjdINU0xMC41NiAxNy40NkwxNi41IDExLjUzTDE1LjQzIDEwLjQ3TDEwLjU2IDE1LjM0TDguNDUgMTMuMjNMNy4zOSAxNC4yOUwxMC41NiAxNy40NlpcIi8+XHJcbiAgPC9zdmc+XHJcbiAgPGRpdj48L2Rpdj5cclxuICA8ZGl2PuKcljwvZGl2PmA7XHJcblxyXG4gIG5ld0Rpdi5xdWVyeVNlbGVjdG9yKFwiZGl2OmZpcnN0LW9mLXR5cGVcIikudGV4dENvbnRlbnQgPSBvYmplY3QuZ2V0TmFtZSgpO1xyXG5cclxuICBzaWRlYmFyRGl2LmFwcGVuZENoaWxkKG5ld0Rpdik7XHJcbn1cclxuXHJcbmV4cG9ydCB7IGNyZWF0ZVByb2plY3QgfTtcclxuIiwiaW1wb3J0IHsgUHJvamVjdCB9IGZyb20gXCIuL0NsYXNzZXNcIjtcclxuaW1wb3J0IHsgRE9NIH0gZnJvbSBcIi4vRE9NXCI7XHJcblxyXG5jb25zdCB0YXNrcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFza3NcIik7XHJcblxyXG5mdW5jdGlvbiBhZGRDb2xvcihub2RlKSB7XHJcbiAgaWYgKFByb2plY3QuY3VycmVudFByb2plY3QuZ2V0VGFza3MoKVtQcm9qZWN0LmN1cnJlbnRQcm9qZWN0LmdldFRhc2tzKCkubGVuZ3RoIC0gMV0ucHJpb3JpdHkpXHJcbiAgICBzd2l0Y2ggKFxyXG4gICAgICBQcm9qZWN0LmN1cnJlbnRQcm9qZWN0LmdldFRhc2tzKClbUHJvamVjdC5jdXJyZW50UHJvamVjdC5nZXRUYXNrcygpLmxlbmd0aCAtIDFdLnByaW9yaXR5XHJcbiAgICApIHtcclxuICAgICAgY2FzZSBcInVyZ2VudFwiOlxyXG4gICAgICAgIG5vZGUuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJyZ2JhKDI0NSwgOTMsIDMwLCAwLjMpXCI7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgXCJpbXBvcnRhbnRcIjpcclxuICAgICAgICBub2RlLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwicmdiKDI1MywgMTUyLCAwLCAwLjMpXCI7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgXCJ1bmltcG9ydGFudFwiOlxyXG4gICAgICAgIG5vZGUuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJyZ2IoMTgxLCAyMTQsIDE2NywgMC4zKVwiO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVUYXNrKG9iamVjdCkge1xyXG4gIGNvbnN0IG5ld0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgbmV3RGl2LmNsYXNzTGlzdC5hZGQoXCJ0YXNrXCIpO1xyXG4gIG5ld0Rpdi5pZCA9IG9iamVjdC5pZDtcclxuICBuZXdEaXYuaW5uZXJIVE1MID0gYFxyXG4gICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIC8+XHJcbiAgICA8ZGl2PlxyXG4gICAgICA8ZGl2IGlkPVwidGl0bGVcIj48L2Rpdj5cclxuICAgICAgPGRpdiBpZD1cImR1ZURhdGVcIj48L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdj7inJY8L2Rpdj5gO1xyXG5cclxuICBuZXdEaXYucXVlcnlTZWxlY3RvcihcIiN0aXRsZVwiKS50ZXh0Q29udGVudCA9IG9iamVjdC5nZXRUaXRsZSgpO1xyXG4gIG5ld0Rpdi5xdWVyeVNlbGVjdG9yKFwiI2R1ZURhdGVcIikudGV4dENvbnRlbnQgPSBvYmplY3QuZ2V0RHVlRGF0ZSgpO1xyXG4gIGFkZENvbG9yKG5ld0Rpdik7XHJcblxyXG4gIHRhc2tzLmFwcGVuZENoaWxkKG5ld0Rpdik7XHJcblxyXG4gIC8vIGV4cGFuZHMgdGFza3Mgb24gY2xpY2tcclxuICBjb25zdCBhbGxUYXNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi50YXNrXCIpO1xyXG4gIGxldCBleHRlbmRlZCA9IGZhbHNlO1xyXG5cclxuICBhbGxUYXNrW2FsbFRhc2subGVuZ3RoIC0gMV0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudCkgPT4ge1xyXG4gICAgaWYgKGV4dGVuZGVkID09PSBmYWxzZSkge1xyXG4gICAgICBpZiAoRE9NLnRhc2suY2hhbmdlLmV4dGVuZChldmVudCkpIGV4dGVuZGVkID0gdHJ1ZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIERPTS50YXNrLmNoYW5nZS51bmV4dGVuZChldmVudCk7XHJcbiAgICAgIGV4dGVuZGVkID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gIC8vIG9uIFRhc2sg4pyWIGNsaWNrXHJcbiAgLy8gcmVtb3ZlcyB0YXNrXHJcbiAgY29uc3QgdGFza3NYQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi50YXNrID4gZGl2Omxhc3QtY2hpbGRcIik7XHJcblxyXG4gIHRhc2tzWEJ1dHRvblt0YXNrc1hCdXR0b24ubGVuZ3RoIC0gMV0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudCkgPT4ge1xyXG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblxyXG4gICAgRE9NLnRhc2sucmVtb3ZlKGV2ZW50KTtcclxuICAgIFByb2plY3QuY3VycmVudFByb2plY3QucmVtb3ZlVGFzayhldmVudCk7XHJcbiAgfSk7XHJcblxyXG4gIC8vIG9uIENoZWNrYm94IGNsaWNrXHJcbiAgLy8gcmVtb3ZlcyB0YXNrXHJcbiAgY29uc3QgY2hlY2tib3hCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi50YXNrID4gaW5wdXRbdHlwZT1jaGVja2JveF1cIik7XHJcblxyXG4gIGNoZWNrYm94QnV0dG9uc1tjaGVja2JveEJ1dHRvbnMubGVuZ3RoIC0gMV0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudCkgPT4ge1xyXG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblxyXG4gICAgRE9NLnRhc2sucmVtb3ZlKGV2ZW50KTtcclxuICAgIFByb2plY3QuY3VycmVudFByb2plY3QucmVtb3ZlVGFzayhldmVudCk7XHJcbiAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCB7IGNyZWF0ZVRhc2sgfTtcclxuIiwiY29uc3QgYWRkVGFza0Zvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZFRhc2tGb3JtXCIpO1xyXG5cclxuZnVuY3Rpb24gcmVuZGVyRm9ybSgpIHtcclxuICBhZGRUYXNrRm9ybS5zdHlsZS52aXNpYmlsaXR5ID0gXCJ2aXNpYmxlXCI7XHJcbn1cclxuZnVuY3Rpb24gdW5yZW5kZXJGb3JtKCkge1xyXG4gIGFkZFRhc2tGb3JtLnN0eWxlLnZpc2liaWxpdHkgPSBcImhpZGRlblwiO1xyXG59XHJcblxyXG5jb25zdCBwcm9qZWN0Rm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdEZvcm1cIik7XHJcblxyXG5mdW5jdGlvbiByZW5kZXJQcm9qZWN0Rm9ybSgpIHtcclxuICBwcm9qZWN0Rm9ybS5zdHlsZS52aXNpYmlsaXR5ID0gXCJ2aXNpYmxlXCI7XHJcbiAgcHJvamVjdEZvcm0uc3R5bGUucG9zaXRpb24gPSBcInJlbGF0aXZlXCI7XHJcbn1cclxuZnVuY3Rpb24gdW5yZW5kZXJQcm9qZWN0Rm9ybSgpIHtcclxuICBwcm9qZWN0Rm9ybS5zdHlsZS52aXNpYmlsaXR5ID0gXCJoaWRkZW5cIjtcclxuICBwcm9qZWN0Rm9ybS5zdHlsZS5wb3NpdGlvbiA9IFwiYWJzb2x1dGVcIjtcclxufVxyXG5cclxuZXhwb3J0IHsgcmVuZGVyRm9ybSwgdW5yZW5kZXJGb3JtLCByZW5kZXJQcm9qZWN0Rm9ybSwgdW5yZW5kZXJQcm9qZWN0Rm9ybSB9O1xyXG4iLCJpbXBvcnQgeyBQcm9qZWN0IH0gZnJvbSBcIi4vQ2xhc3Nlc1wiO1xyXG5cclxuZnVuY3Rpb24gcmVtb3ZlUHJvamVjdChldmVudCkge1xyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgUHJvamVjdC5wcm9qZWN0TGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgaWYgKFByb2plY3QucHJvamVjdExpc3RbaV0uaWQgPT09IGV2ZW50LmN1cnJlbnRUYXJnZXQucGFyZW50Tm9kZS5pZCkge1xyXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNpZGViYXJcIikucmVtb3ZlQ2hpbGQoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wcm9qZWN0XCIpW2ldKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7IHJlbW92ZVByb2plY3QgfTtcclxuIiwiaW1wb3J0IHsgUHJvamVjdCB9IGZyb20gXCIuL0NsYXNzZXNcIjtcclxuXHJcbmZ1bmN0aW9uIHJlbW92ZVRhc2soZXZlbnQpIHtcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IFByb2plY3QuY3VycmVudFByb2plY3QuZ2V0VGFza3MoKS5sZW5ndGg7IGkrKykge1xyXG4gICAgaWYgKFByb2plY3QuY3VycmVudFByb2plY3QuZ2V0VGFza3MoKVtpXS5pZCA9PT0gZXZlbnQuY3VycmVudFRhcmdldC5wYXJlbnROb2RlLmlkKSB7XHJcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFza3NcIikucmVtb3ZlQ2hpbGQoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi50YXNrXCIpW2ldKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7IHJlbW92ZVRhc2sgfTtcclxuIiwiZnVuY3Rpb24gcmVzZXRUYXNrcygpIHtcclxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2tzXCIpLmlubmVySFRNTCA9IFwiXCI7XHJcbn1cclxuXHJcbmV4cG9ydCB7IHJlc2V0VGFza3MgfTtcclxuIiwiaW1wb3J0IHsgUHJvamVjdCB9IGZyb20gXCIuL0NsYXNzZXNcIjtcclxuXHJcbmZ1bmN0aW9uIHNhdmVQcm9qZWN0cygpIHtcclxuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInByb2plY3RzXCIsIEpTT04uc3RyaW5naWZ5KFByb2plY3QucHJvamVjdExpc3QpKTtcclxufVxyXG5cclxuZnVuY3Rpb24gbG9hZFN0b3JhZ2UoKSB7XHJcbiAgY29uc3QgcHJvamVjdHMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicHJvamVjdHNcIikpO1xyXG4gIGNvbnNvbGUubG9nKHByb2plY3RzKTtcclxufVxyXG5cclxuZXhwb3J0IHsgc2F2ZVByb2plY3RzLCBsb2FkU3RvcmFnZSB9O1xyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IERPTSB9IGZyb20gXCIuL0RPTVwiO1xyXG5pbXBvcnQgeyBQcm9qZWN0LCBUYXNrIH0gZnJvbSBcIi4vQ2xhc3Nlc1wiO1xyXG5pbXBvcnQgeyBsb2FkU3RvcmFnZSB9IGZyb20gXCIuL2xvY2FsZVN0b3JhZ2VcIjtcclxuXHJcbi8vIG9uIEFkZCB0YXNrIGNsaWNrXHJcbi8vIHNob3dzIGZvcm1cclxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluID4gZGl2Omxhc3QtY2hpbGRcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICBET00uZm9ybS5yZW5kZXJGb3JtKCk7XHJcbn0pO1xyXG5cclxuLy8gb24gRm9ybSDinJYgY2xpY2tcclxuLy8gaGlkZXMgZm9ybVxyXG5kb2N1bWVudFxyXG4gIC5xdWVyeVNlbGVjdG9yKFwiZm9ybSA+IGRpdjpmaXJzdC1jaGlsZFwiKVxyXG4gIC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgRE9NLmZvcm0udW5yZW5kZXJGb3JtKTtcclxuXHJcbi8vIG9uIHN1Ym1pdCBmb3JtIGNsaWNrXHJcbi8vIGNvbnZlcnRzIGZvcm0gaW5wdXRzIGludG8gYSB0YXNrIGluc2lkZSB0aGUgY3VycmVudCBwcm9qZWN0LCB0aGVuIGdldHMgcmlkIG9mIHRoZSBtZW51LCB0aGVuIGFkZHMgdGhlIHRhc2sgaW4gdGhlIFVJXHJcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJmb3JtIGJ1dHRvblwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcclxuICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImZvcm0gI3RpdGxlXCIpLnZhbHVlID09PSBcIlwiKSByZXR1cm47XHJcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICBuZXcgVGFzayhcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJmb3JtICN0aXRsZVwiKS52YWx1ZSxcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJmb3JtICNkZXNjXCIpLnZhbHVlLFxyXG4gICAgYER1ZSBvbiAke25ldyBEYXRlKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJmb3JtICNkdWVEYXRlXCIpLnZhbHVlKX1gLFxyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImZvcm0gI3ByaW9yaXR5XCIpLnZhbHVlXHJcbiAgKTtcclxuXHJcbiAgRE9NLmZvcm0udW5yZW5kZXJGb3JtKCk7XHJcblxyXG4gIERPTS50YXNrLmNyZWF0ZShcclxuICAgIFByb2plY3QuY3VycmVudFByb2plY3QuZ2V0VGFza3MoKVtQcm9qZWN0LmN1cnJlbnRQcm9qZWN0LmdldFRhc2tzKCkubGVuZ3RoIC0gMV1cclxuICApO1xyXG59KTtcclxuXHJcbi8vIG9uIFByb2plY3RzICsgYnV0dG9uIGNsaWNrXHJcbi8vIG9wZW5zIGZvcm1cclxuZG9jdW1lbnRcclxuICAucXVlcnlTZWxlY3RvcihcIi5zaWRlYmFyID4gZGl2OmZpcnN0LWNoaWxkID4gZGl2Omxhc3QtY2hpbGRcIilcclxuICAuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgIERPTS5mb3JtLnJlbmRlclByb2plY3RGb3JtKCk7XHJcbiAgfSk7XHJcblxyXG4vLyBvbiBQcm9qZWN0IGZvcm0gc3VibWl0XHJcbi8vIGNyZWF0ZXMgcHJvamVjdCwgYWRkcyBpdCB0byBET01cclxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0Rm9ybVwiKS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIChlKSA9PiB7XHJcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICBuZXcgUHJvamVjdChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3RGb3JtICNwcm9qZWN0TmFtZVwiKS52YWx1ZSk7XHJcblxyXG4gIERPTS5wcm9qZWN0LmNyZWF0ZShQcm9qZWN0LnByb2plY3RMaXN0W1Byb2plY3QucHJvamVjdExpc3QubGVuZ3RoIC0gMV0pO1xyXG4gIERPTS5mb3JtLnVucmVuZGVyUHJvamVjdEZvcm0oKTtcclxuXHJcbiAgcHJvamVjdEV2ZW50TGlzdGVuZXJzKCk7XHJcbn0pO1xyXG5cclxuZnVuY3Rpb24gcHJvamVjdEV2ZW50TGlzdGVuZXJzKCkge1xyXG4gIGNvbnN0IHByb2plY3REZWxldGVCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wcm9qZWN0ID4gZGl2Omxhc3Qtb2YtdHlwZVwiKTtcclxuXHJcbiAgLy8gY2hlY2tzIGlmIGN1cnJlbnRQcm9qZWN0IGlzIHRoZSBzYW1lLCB0aGVuIHJlbW92ZXMgdGhlIHByb2plY3RcclxuICBwcm9qZWN0RGVsZXRlQnV0dG9uc1twcm9qZWN0RGVsZXRlQnV0dG9ucy5sZW5ndGggLSAxXS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XHJcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuXHJcbiAgICBpZiAoUHJvamVjdC5jdXJyZW50UHJvamVjdC5pZCA9PT0gZXZlbnQuY3VycmVudFRhcmdldC5wYXJlbnROb2RlLmlkKSByZXR1cm47XHJcblxyXG4gICAgRE9NLnByb2plY3QucmVtb3ZlKGV2ZW50KTtcclxuICAgIFByb2plY3QucmVtb3ZlUHJvamVjdChldmVudCk7XHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IHByb2plY3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wcm9qZWN0XCIpO1xyXG5cclxuICAvLyBzZXRzIGN1cnJlbnRQcm9qZWN0IHRvIGl0LCB0aGVuIGxvYWRzIHRoZSBET01cclxuICBwcm9qZWN0c1twcm9qZWN0cy5sZW5ndGggLSAxXS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XHJcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuXHJcbiAgICAvLyBzZXRzIGN1cnJlbnRQcm9qZWN0XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IFByb2plY3QucHJvamVjdExpc3QubGVuZ3RoOyBpKyspIHtcclxuICAgICAgaWYgKFByb2plY3QucHJvamVjdExpc3RbaV0uaWQgPT09IGV2ZW50LmN1cnJlbnRUYXJnZXQuaWQpIHtcclxuICAgICAgICBQcm9qZWN0LmN1cnJlbnRQcm9qZWN0ID0gUHJvamVjdC5wcm9qZWN0TGlzdFtpXTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIERPTS5tYWluLnJlc2V0KCk7XHJcbiAgICBET00ubWFpbi5jcmVhdGUoZXZlbnQpO1xyXG4gIH0pO1xyXG59XHJcblxyXG5sb2FkU3RvcmFnZSgpOyAvLyBsb2FkcyBwcm9qZWN0cyBmaXJzdFxyXG5cclxubmV3IFByb2plY3QoXCJEZWZhdWx0XCIpO1xyXG5ET00ucHJvamVjdC5jcmVhdGUoUHJvamVjdC5wcm9qZWN0TGlzdFtQcm9qZWN0LnByb2plY3RMaXN0Lmxlbmd0aCAtIDFdKTtcclxucHJvamVjdEV2ZW50TGlzdGVuZXJzKCk7XHJcblByb2plY3QuY3VycmVudFByb2plY3QgPSBQcm9qZWN0LnByb2plY3RMaXN0WzBdO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=