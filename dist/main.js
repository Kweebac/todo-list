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


class Project {
  constructor(name) {
    if (document.querySelectorAll(".project").length === 0) {
      this.id = "project0";
    } else {
      this.id = `project${
        +document
          .querySelectorAll(".project")
          [document.querySelectorAll(".project").length - 1].id.split("")[
          document
            .querySelectorAll(".project")
            [document.querySelectorAll(".project").length - 1].id.split("").length - 1
        ] + 1
      }`;
    }

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
    (0,_localeStorage__WEBPACK_IMPORTED_MODULE_0__.saveProjects)();
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
    (0,_localeStorage__WEBPACK_IMPORTED_MODULE_0__.saveProjects)();
  }

  getTasks() {
    return this.tasks;
  }
  getName() {
    return this.name;
  }
}

class Task {
  constructor(title, description, dueDate, priority) {
    if (document.querySelectorAll(".task").length === 0) {
      this.id = "task0";
    } else {
      this.id = `task${
        +document
          .querySelectorAll(".task")
          [document.querySelectorAll(".task").length - 1].id.split("")[
          document
            .querySelectorAll(".task")
            [document.querySelectorAll(".task").length - 1].id.split("").length - 1
        ] + 1
      }`;
    }

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
  _Classes__WEBPACK_IMPORTED_MODULE_0__.Project.projectList = JSON.parse(localStorage.getItem("projects"));
  _Classes__WEBPACK_IMPORTED_MODULE_0__.Project.currentProject = _Classes__WEBPACK_IMPORTED_MODULE_0__.Project.projectList[0];

  // Project methods
  _Classes__WEBPACK_IMPORTED_MODULE_0__.Project.projectList.forEach((project) => {
    project.addTask = function (object) {
      this.tasks.push(object);
    };
    project.removeTask = function (event) {
      for (let i = 0; i < this.tasks.length; i++) {
        if (this.tasks[i].id === event.currentTarget.parentNode.id) {
          this.tasks.splice(i, 1);
        }
      }
      saveProjects();
    };
    project.getTasks = function () {
      return this.tasks;
    };
    project.getName = function () {
      return this.name;
    };

    // Task methods
    project.getTasks().forEach((task) => {
      task.getTitle = function () {
        return this.title;
      };
      task.getDescription = function () {
        return this.description;
      };
      task.getDueDate = function () {
        return this.dueDate;
      };
      task.getPriority = function () {
        return this.priority;
      };
    });
  });
}




/***/ }),

/***/ "./src/pageLoad.js":
/*!*************************!*\
  !*** ./src/pageLoad.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "pageLoad": () => (/* binding */ pageLoad)
/* harmony export */ });
/* harmony import */ var _localeStorage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./localeStorage */ "./src/localeStorage.js");
/* harmony import */ var _DOM__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DOM */ "./src/DOM.js");
/* harmony import */ var _Classes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Classes */ "./src/Classes.js");




function storageEventListeners() {
  const projectDeleteButtons = document.querySelectorAll(".project > div:last-of-type");

  // checks if currentProject is the same, then removes the project
  projectDeleteButtons.forEach((item) => {
    item.addEventListener("click", (event) => {
      event.stopPropagation();

      if (_Classes__WEBPACK_IMPORTED_MODULE_2__.Project.currentProject.id === event.currentTarget.parentNode.id) return;

      _DOM__WEBPACK_IMPORTED_MODULE_1__.DOM.project.remove(event);
      _Classes__WEBPACK_IMPORTED_MODULE_2__.Project.removeProject(event);
    });
  });

  const projects = document.querySelectorAll(".project");

  // sets currentProject to it, then loads the DOM
  projects.forEach((item) => {
    item.addEventListener("click", (event) => {
      event.stopPropagation();

      // sets currentProject
      for (let i = 0; i < _Classes__WEBPACK_IMPORTED_MODULE_2__.Project.projectList.length; i++) {
        if (_Classes__WEBPACK_IMPORTED_MODULE_2__.Project.projectList[i].id === event.currentTarget.id) {
          _Classes__WEBPACK_IMPORTED_MODULE_2__.Project.currentProject = _Classes__WEBPACK_IMPORTED_MODULE_2__.Project.projectList[i];
        }
      }

      _DOM__WEBPACK_IMPORTED_MODULE_1__.DOM.main.reset();
      _DOM__WEBPACK_IMPORTED_MODULE_1__.DOM.main.create(event);
    });
  });
}

function pageLoad() {
  if (localStorage.getItem("projects")) {
    (0,_localeStorage__WEBPACK_IMPORTED_MODULE_0__.loadStorage)();

    _Classes__WEBPACK_IMPORTED_MODULE_2__.Project.projectList.forEach((item) => {
      _DOM__WEBPACK_IMPORTED_MODULE_1__.DOM.project.create(item);
    });
    document.querySelectorAll(".project").forEach(() => {
      storageEventListeners();
    });

    _DOM__WEBPACK_IMPORTED_MODULE_1__.DOM.main.reset();

    const projectTitle = document.querySelector(".main > div:first-child");

    // sets project title
    for (let i = 0; i < _Classes__WEBPACK_IMPORTED_MODULE_2__.Project.projectList.length; i++) {
      if (_Classes__WEBPACK_IMPORTED_MODULE_2__.Project.projectList[i].id === document.querySelector(".project").id) {
        projectTitle.textContent = _Classes__WEBPACK_IMPORTED_MODULE_2__.Project.projectList[i].getName();
      }
    }

    // adds the tasks
    for (let i = 0; i < _Classes__WEBPACK_IMPORTED_MODULE_2__.Project.currentProject.getTasks().length; i++) {
      if (_Classes__WEBPACK_IMPORTED_MODULE_2__.Project.currentProject.getTasks()[i])
        _DOM__WEBPACK_IMPORTED_MODULE_1__.DOM.task.create(_Classes__WEBPACK_IMPORTED_MODULE_2__.Project.currentProject.getTasks()[i]);
    }
  } else {
    new _Classes__WEBPACK_IMPORTED_MODULE_2__.Project("Default");
    _DOM__WEBPACK_IMPORTED_MODULE_1__.DOM.project.create(_Classes__WEBPACK_IMPORTED_MODULE_2__.Project.projectList[0]);
    storageEventListeners();
    _Classes__WEBPACK_IMPORTED_MODULE_2__.Project.currentProject = _Classes__WEBPACK_IMPORTED_MODULE_2__.Project.projectList[0];
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
/* harmony import */ var _pageLoad__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pageLoad */ "./src/pageLoad.js");




// on Add task click
// shows form
document.querySelector(".main > div:last-child").onclick = () => {
  _DOM__WEBPACK_IMPORTED_MODULE_0__.DOM.form.renderForm();
};

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

(0,_pageLoad__WEBPACK_IMPORTED_MODULE_2__.pageLoad)();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QjtBQUNqQztBQUNBLElBQUksb0RBQWtCO0FBQ3RCLElBQUksMkRBQXFCO0FBQ3pCLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLElBQUksZ0VBQTBCLEVBQUU7QUFDcEQsVUFBVSx5REFBbUI7QUFDN0IsUUFBUSw0REFBc0IsR0FBRyx5REFBbUI7QUFDcEQ7QUFDQTtBQUNBO0FBQ0EsSUFBSSxnREFBYztBQUNsQixJQUFJLGlEQUFlO0FBQ25CLEdBQUc7QUFDSDtBQUNBO0FBQ0EsbURBQVEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvQ2xhc3Nlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvRE9NLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9ET01jaGFuZ2VUYXNrLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9ET01jcmVhdGVNYWluLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9ET01jcmVhdGVQcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9ET01jcmVhdGVUYXNrLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9ET01mb3JtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9ET01yZW1vdmVQcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9ET01yZW1vdmVUYXNrLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9ET01yZXNldFRhc2tzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9sb2NhbGVTdG9yYWdlLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9wYWdlTG9hZC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgc2F2ZVByb2plY3RzIH0gZnJvbSBcIi4vbG9jYWxlU3RvcmFnZVwiO1xyXG5cclxuY2xhc3MgUHJvamVjdCB7XHJcbiAgY29uc3RydWN0b3IobmFtZSkge1xyXG4gICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucHJvamVjdFwiKS5sZW5ndGggPT09IDApIHtcclxuICAgICAgdGhpcy5pZCA9IFwicHJvamVjdDBcIjtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuaWQgPSBgcHJvamVjdCR7XHJcbiAgICAgICAgK2RvY3VtZW50XHJcbiAgICAgICAgICAucXVlcnlTZWxlY3RvckFsbChcIi5wcm9qZWN0XCIpXHJcbiAgICAgICAgICBbZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wcm9qZWN0XCIpLmxlbmd0aCAtIDFdLmlkLnNwbGl0KFwiXCIpW1xyXG4gICAgICAgICAgZG9jdW1lbnRcclxuICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3JBbGwoXCIucHJvamVjdFwiKVxyXG4gICAgICAgICAgICBbZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wcm9qZWN0XCIpLmxlbmd0aCAtIDFdLmlkLnNwbGl0KFwiXCIpLmxlbmd0aCAtIDFcclxuICAgICAgICBdICsgMVxyXG4gICAgICB9YDtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgdGhpcy50YXNrcyA9IFtdO1xyXG5cclxuICAgIFByb2plY3QucHJvamVjdExpc3QucHVzaCh0aGlzKTtcclxuICAgIHNhdmVQcm9qZWN0cygpO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGN1cnJlbnRQcm9qZWN0ID0gdW5kZWZpbmVkO1xyXG4gIHN0YXRpYyBwcm9qZWN0TGlzdCA9IFtdO1xyXG5cclxuICBzdGF0aWMgcmVtb3ZlUHJvamVjdChldmVudCkge1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBQcm9qZWN0LnByb2plY3RMaXN0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGlmIChQcm9qZWN0LnByb2plY3RMaXN0W2ldLmlkID09PSBldmVudC5jdXJyZW50VGFyZ2V0LnBhcmVudE5vZGUuaWQpIHtcclxuICAgICAgICBQcm9qZWN0LnByb2plY3RMaXN0LnNwbGljZShpLCAxKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgc2F2ZVByb2plY3RzKCk7XHJcbiAgfVxyXG5cclxuICBhZGRUYXNrKG9iamVjdCkge1xyXG4gICAgdGhpcy50YXNrcy5wdXNoKG9iamVjdCk7XHJcbiAgfVxyXG4gIHJlbW92ZVRhc2soZXZlbnQpIHtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy50YXNrcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICBpZiAodGhpcy50YXNrc1tpXS5pZCA9PT0gZXZlbnQuY3VycmVudFRhcmdldC5wYXJlbnROb2RlLmlkKSB7XHJcbiAgICAgICAgdGhpcy50YXNrcy5zcGxpY2UoaSwgMSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHNhdmVQcm9qZWN0cygpO1xyXG4gIH1cclxuXHJcbiAgZ2V0VGFza3MoKSB7XHJcbiAgICByZXR1cm4gdGhpcy50YXNrcztcclxuICB9XHJcbiAgZ2V0TmFtZSgpIHtcclxuICAgIHJldHVybiB0aGlzLm5hbWU7XHJcbiAgfVxyXG59XHJcblxyXG5jbGFzcyBUYXNrIHtcclxuICBjb25zdHJ1Y3Rvcih0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KSB7XHJcbiAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi50YXNrXCIpLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICB0aGlzLmlkID0gXCJ0YXNrMFwiO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5pZCA9IGB0YXNrJHtcclxuICAgICAgICArZG9jdW1lbnRcclxuICAgICAgICAgIC5xdWVyeVNlbGVjdG9yQWxsKFwiLnRhc2tcIilcclxuICAgICAgICAgIFtkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnRhc2tcIikubGVuZ3RoIC0gMV0uaWQuc3BsaXQoXCJcIilbXHJcbiAgICAgICAgICBkb2N1bWVudFxyXG4gICAgICAgICAgICAucXVlcnlTZWxlY3RvckFsbChcIi50YXNrXCIpXHJcbiAgICAgICAgICAgIFtkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnRhc2tcIikubGVuZ3RoIC0gMV0uaWQuc3BsaXQoXCJcIikubGVuZ3RoIC0gMVxyXG4gICAgICAgIF0gKyAxXHJcbiAgICAgIH1gO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcclxuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcclxuICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XHJcbiAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XHJcblxyXG4gICAgUHJvamVjdC5jdXJyZW50UHJvamVjdC5hZGRUYXNrKHRoaXMpO1xyXG4gICAgc2F2ZVByb2plY3RzKCk7XHJcbiAgfVxyXG5cclxuICBnZXRUaXRsZSgpIHtcclxuICAgIHJldHVybiB0aGlzLnRpdGxlO1xyXG4gIH1cclxuICBnZXREZXNjcmlwdGlvbigpIHtcclxuICAgIHJldHVybiB0aGlzLmRlc2NyaXB0aW9uO1xyXG4gIH1cclxuICBnZXREdWVEYXRlKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuZHVlRGF0ZTtcclxuICB9XHJcbiAgZ2V0UHJpb3JpdHkoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5wcmlvcml0eTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7IFByb2plY3QsIFRhc2sgfTtcclxuIiwiaW1wb3J0IHsgcmVuZGVyRm9ybSwgdW5yZW5kZXJGb3JtLCByZW5kZXJQcm9qZWN0Rm9ybSwgdW5yZW5kZXJQcm9qZWN0Rm9ybSB9IGZyb20gXCIuL0RPTWZvcm1cIjtcclxuaW1wb3J0IHsgY3JlYXRlVGFzayB9IGZyb20gXCIuL0RPTWNyZWF0ZVRhc2tcIjtcclxuaW1wb3J0IHsgcmVtb3ZlVGFzayB9IGZyb20gXCIuL0RPTXJlbW92ZVRhc2tcIjtcclxuaW1wb3J0IHsgZXh0ZW5kVGFzaywgdW5leHRlbmRUYXNrIH0gZnJvbSBcIi4vRE9NY2hhbmdlVGFza1wiO1xyXG5pbXBvcnQgeyBjcmVhdGVQcm9qZWN0IH0gZnJvbSBcIi4vRE9NY3JlYXRlUHJvamVjdFwiO1xyXG5pbXBvcnQgeyByZW1vdmVQcm9qZWN0IH0gZnJvbSBcIi4vRE9NcmVtb3ZlUHJvamVjdFwiO1xyXG5pbXBvcnQgeyBjcmVhdGVNYWluIH0gZnJvbSBcIi4vRE9NY3JlYXRlTWFpblwiO1xyXG5pbXBvcnQgeyByZXNldFRhc2tzIH0gZnJvbSBcIi4vRE9NcmVzZXRUYXNrc1wiO1xyXG5cclxuY29uc3QgRE9NID0ge1xyXG4gIGZvcm06IHtcclxuICAgIHJlbmRlckZvcm0sXHJcbiAgICB1bnJlbmRlckZvcm0sXHJcbiAgICByZW5kZXJQcm9qZWN0Rm9ybSxcclxuICAgIHVucmVuZGVyUHJvamVjdEZvcm0sXHJcbiAgfSxcclxuICB0YXNrOiB7XHJcbiAgICBjcmVhdGU6IGNyZWF0ZVRhc2ssXHJcbiAgICByZW1vdmU6IHJlbW92ZVRhc2ssXHJcbiAgICBjaGFuZ2U6IHtcclxuICAgICAgZXh0ZW5kOiBleHRlbmRUYXNrLFxyXG4gICAgICB1bmV4dGVuZDogdW5leHRlbmRUYXNrLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIHByb2plY3Q6IHtcclxuICAgIGNyZWF0ZTogY3JlYXRlUHJvamVjdCxcclxuICAgIHJlbW92ZTogcmVtb3ZlUHJvamVjdCxcclxuICB9LFxyXG4gIG1haW46IHtcclxuICAgIHJlc2V0OiByZXNldFRhc2tzLFxyXG4gICAgY3JlYXRlOiBjcmVhdGVNYWluLFxyXG4gIH0sXHJcbn07XHJcblxyXG5leHBvcnQgeyBET00gfTtcclxuIiwiaW1wb3J0IHsgUHJvamVjdCB9IGZyb20gXCIuL0NsYXNzZXNcIjtcclxuXHJcbmZ1bmN0aW9uIGV4dGVuZFRhc2soZXZlbnQpIHtcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IFByb2plY3QuY3VycmVudFByb2plY3QuZ2V0VGFza3MoKS5sZW5ndGg7IGkrKykge1xyXG4gICAgaWYgKFByb2plY3QuY3VycmVudFByb2plY3QuZ2V0VGFza3MoKVtpXS5pZCA9PT0gZXZlbnQuY3VycmVudFRhcmdldC5pZCkge1xyXG4gICAgICBpZiAoUHJvamVjdC5jdXJyZW50UHJvamVjdC5nZXRUYXNrcygpW2ldLmRlc2NyaXB0aW9uID09PSBcIlwiKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBjb25zdCBuZXdEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICBuZXdEaXYuaWQgPSBcImRlc2NcIjtcclxuICAgICAgbmV3RGl2LnRleHRDb250ZW50ID0gUHJvamVjdC5jdXJyZW50UHJvamVjdC5nZXRUYXNrcygpW2ldLmRlc2NyaXB0aW9uO1xyXG5cclxuICAgICAgZXZlbnQuY3VycmVudFRhcmdldC5jaGlsZHJlblsxXS5pbnNlcnRCZWZvcmUoXHJcbiAgICAgICAgbmV3RGl2LFxyXG4gICAgICAgIGV2ZW50LmN1cnJlbnRUYXJnZXQuY2hpbGRyZW5bMV0uY2hpbGRyZW5bMV1cclxuICAgICAgKTtcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIHRydWU7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVuZXh0ZW5kVGFzayhldmVudCkge1xyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgUHJvamVjdC5jdXJyZW50UHJvamVjdC5nZXRUYXNrcygpLmxlbmd0aDsgaSsrKSB7XHJcbiAgICBpZiAoUHJvamVjdC5jdXJyZW50UHJvamVjdC5nZXRUYXNrcygpW2ldLmlkID09PSBldmVudC5jdXJyZW50VGFyZ2V0LmlkKSB7XHJcbiAgICAgIGV2ZW50LmN1cnJlbnRUYXJnZXQuY2hpbGRyZW5bMV0ucmVtb3ZlQ2hpbGQoZXZlbnQuY3VycmVudFRhcmdldC5jaGlsZHJlblsxXS5jaGlsZHJlblsxXSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgeyBleHRlbmRUYXNrLCB1bmV4dGVuZFRhc2sgfTtcclxuIiwiaW1wb3J0IHsgUHJvamVjdCB9IGZyb20gXCIuL0NsYXNzZXNcIjtcclxuaW1wb3J0IHsgRE9NIH0gZnJvbSBcIi4vRE9NXCI7XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVNYWluKGV2ZW50KSB7XHJcbiAgY29uc3QgcHJvamVjdFRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluID4gZGl2OmZpcnN0LWNoaWxkXCIpO1xyXG5cclxuICAvLyBzZXRzIHByb2plY3QgdGl0bGVcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IFByb2plY3QucHJvamVjdExpc3QubGVuZ3RoOyBpKyspIHtcclxuICAgIGlmIChQcm9qZWN0LnByb2plY3RMaXN0W2ldLmlkID09PSBldmVudC5jdXJyZW50VGFyZ2V0LmlkKSB7XHJcbiAgICAgIHByb2plY3RUaXRsZS50ZXh0Q29udGVudCA9IFByb2plY3QucHJvamVjdExpc3RbaV0uZ2V0TmFtZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gYWRkcyB0aGUgdGFza3NcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IFByb2plY3QuY3VycmVudFByb2plY3QuZ2V0VGFza3MoKS5sZW5ndGg7IGkrKykge1xyXG4gICAgaWYgKFByb2plY3QuY3VycmVudFByb2plY3QuZ2V0VGFza3MoKVtpXSlcclxuICAgICAgRE9NLnRhc2suY3JlYXRlKFByb2plY3QuY3VycmVudFByb2plY3QuZ2V0VGFza3MoKVtpXSk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgeyBjcmVhdGVNYWluIH07XHJcbiIsImltcG9ydCB7IFByb2plY3QgfSBmcm9tIFwiLi9DbGFzc2VzXCI7XHJcblxyXG5jb25zdCBzaWRlYmFyRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zaWRlYmFyXCIpO1xyXG5cclxuZnVuY3Rpb24gY3JlYXRlUHJvamVjdChvYmplY3QpIHtcclxuICBjb25zdCBuZXdEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIG5ld0Rpdi5jbGFzc0xpc3QuYWRkKFwicHJvamVjdFwiKTtcclxuICBuZXdEaXYuaWQgPSBvYmplY3QuaWQ7XHJcbiAgbmV3RGl2LmlubmVySFRNTCA9IGBcclxuICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+XHJcbiAgICA8cGF0aCBkPVwiTTE5IDNIMThWMUgxNlYzSDhWMUg2VjNINUMzLjkgMyAzIDMuOSAzIDVWMTlDMyAyMC4xMSAzLjkgMjEgNSAyMUgxOUMyMC4xMSAyMSAyMSAyMC4xMSAyMSAxOVY1QzIxIDMuOSAyMC4xMSAzIDE5IDNNMTkgMTlINVY5SDE5VjE5TTUgN1Y1SDE5VjdINU0xMC41NiAxNy40NkwxNi41IDExLjUzTDE1LjQzIDEwLjQ3TDEwLjU2IDE1LjM0TDguNDUgMTMuMjNMNy4zOSAxNC4yOUwxMC41NiAxNy40NlpcIi8+XHJcbiAgPC9zdmc+XHJcbiAgPGRpdj48L2Rpdj5cclxuICA8ZGl2PuKcljwvZGl2PmA7XHJcblxyXG4gIG5ld0Rpdi5xdWVyeVNlbGVjdG9yKFwiZGl2OmZpcnN0LW9mLXR5cGVcIikudGV4dENvbnRlbnQgPSBvYmplY3QuZ2V0TmFtZSgpO1xyXG5cclxuICBzaWRlYmFyRGl2LmFwcGVuZENoaWxkKG5ld0Rpdik7XHJcbn1cclxuXHJcbmV4cG9ydCB7IGNyZWF0ZVByb2plY3QgfTtcclxuIiwiaW1wb3J0IHsgUHJvamVjdCB9IGZyb20gXCIuL0NsYXNzZXNcIjtcclxuaW1wb3J0IHsgRE9NIH0gZnJvbSBcIi4vRE9NXCI7XHJcblxyXG5jb25zdCB0YXNrcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFza3NcIik7XHJcblxyXG5mdW5jdGlvbiBhZGRDb2xvcihub2RlKSB7XHJcbiAgaWYgKFByb2plY3QuY3VycmVudFByb2plY3QuZ2V0VGFza3MoKVtQcm9qZWN0LmN1cnJlbnRQcm9qZWN0LmdldFRhc2tzKCkubGVuZ3RoIC0gMV0ucHJpb3JpdHkpXHJcbiAgICBzd2l0Y2ggKFxyXG4gICAgICBQcm9qZWN0LmN1cnJlbnRQcm9qZWN0LmdldFRhc2tzKClbUHJvamVjdC5jdXJyZW50UHJvamVjdC5nZXRUYXNrcygpLmxlbmd0aCAtIDFdLnByaW9yaXR5XHJcbiAgICApIHtcclxuICAgICAgY2FzZSBcInVyZ2VudFwiOlxyXG4gICAgICAgIG5vZGUuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJyZ2JhKDI0NSwgOTMsIDMwLCAwLjMpXCI7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgXCJpbXBvcnRhbnRcIjpcclxuICAgICAgICBub2RlLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwicmdiKDI1MywgMTUyLCAwLCAwLjMpXCI7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgXCJ1bmltcG9ydGFudFwiOlxyXG4gICAgICAgIG5vZGUuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJyZ2IoMTgxLCAyMTQsIDE2NywgMC4zKVwiO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVUYXNrKG9iamVjdCkge1xyXG4gIGNvbnN0IG5ld0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgbmV3RGl2LmNsYXNzTGlzdC5hZGQoXCJ0YXNrXCIpO1xyXG4gIG5ld0Rpdi5pZCA9IG9iamVjdC5pZDtcclxuICBuZXdEaXYuaW5uZXJIVE1MID0gYFxyXG4gICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIC8+XHJcbiAgICA8ZGl2PlxyXG4gICAgICA8ZGl2IGlkPVwidGl0bGVcIj48L2Rpdj5cclxuICAgICAgPGRpdiBpZD1cImR1ZURhdGVcIj48L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdj7inJY8L2Rpdj5gO1xyXG5cclxuICBuZXdEaXYucXVlcnlTZWxlY3RvcihcIiN0aXRsZVwiKS50ZXh0Q29udGVudCA9IG9iamVjdC5nZXRUaXRsZSgpO1xyXG4gIG5ld0Rpdi5xdWVyeVNlbGVjdG9yKFwiI2R1ZURhdGVcIikudGV4dENvbnRlbnQgPSBvYmplY3QuZ2V0RHVlRGF0ZSgpO1xyXG4gIGFkZENvbG9yKG5ld0Rpdik7XHJcblxyXG4gIHRhc2tzLmFwcGVuZENoaWxkKG5ld0Rpdik7XHJcblxyXG4gIC8vIGV4cGFuZHMgdGFza3Mgb24gY2xpY2tcclxuICBjb25zdCBhbGxUYXNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi50YXNrXCIpO1xyXG4gIGxldCBleHRlbmRlZCA9IGZhbHNlO1xyXG5cclxuICBhbGxUYXNrW2FsbFRhc2subGVuZ3RoIC0gMV0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudCkgPT4ge1xyXG4gICAgaWYgKGV4dGVuZGVkID09PSBmYWxzZSkge1xyXG4gICAgICBpZiAoRE9NLnRhc2suY2hhbmdlLmV4dGVuZChldmVudCkpIGV4dGVuZGVkID0gdHJ1ZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIERPTS50YXNrLmNoYW5nZS51bmV4dGVuZChldmVudCk7XHJcbiAgICAgIGV4dGVuZGVkID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gIC8vIG9uIFRhc2sg4pyWIGNsaWNrXHJcbiAgLy8gcmVtb3ZlcyB0YXNrXHJcbiAgY29uc3QgdGFza3NYQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi50YXNrID4gZGl2Omxhc3QtY2hpbGRcIik7XHJcblxyXG4gIHRhc2tzWEJ1dHRvblt0YXNrc1hCdXR0b24ubGVuZ3RoIC0gMV0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudCkgPT4ge1xyXG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblxyXG4gICAgRE9NLnRhc2sucmVtb3ZlKGV2ZW50KTtcclxuICAgIFByb2plY3QuY3VycmVudFByb2plY3QucmVtb3ZlVGFzayhldmVudCk7XHJcbiAgfSk7XHJcblxyXG4gIC8vIG9uIENoZWNrYm94IGNsaWNrXHJcbiAgLy8gcmVtb3ZlcyB0YXNrXHJcbiAgY29uc3QgY2hlY2tib3hCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi50YXNrID4gaW5wdXRbdHlwZT1jaGVja2JveF1cIik7XHJcblxyXG4gIGNoZWNrYm94QnV0dG9uc1tjaGVja2JveEJ1dHRvbnMubGVuZ3RoIC0gMV0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudCkgPT4ge1xyXG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblxyXG4gICAgRE9NLnRhc2sucmVtb3ZlKGV2ZW50KTtcclxuICAgIFByb2plY3QuY3VycmVudFByb2plY3QucmVtb3ZlVGFzayhldmVudCk7XHJcbiAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCB7IGNyZWF0ZVRhc2sgfTtcclxuIiwiY29uc3QgYWRkVGFza0Zvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZFRhc2tGb3JtXCIpO1xyXG5cclxuZnVuY3Rpb24gcmVuZGVyRm9ybSgpIHtcclxuICBhZGRUYXNrRm9ybS5zdHlsZS52aXNpYmlsaXR5ID0gXCJ2aXNpYmxlXCI7XHJcbn1cclxuZnVuY3Rpb24gdW5yZW5kZXJGb3JtKCkge1xyXG4gIGFkZFRhc2tGb3JtLnN0eWxlLnZpc2liaWxpdHkgPSBcImhpZGRlblwiO1xyXG59XHJcblxyXG5jb25zdCBwcm9qZWN0Rm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdEZvcm1cIik7XHJcblxyXG5mdW5jdGlvbiByZW5kZXJQcm9qZWN0Rm9ybSgpIHtcclxuICBwcm9qZWN0Rm9ybS5zdHlsZS52aXNpYmlsaXR5ID0gXCJ2aXNpYmxlXCI7XHJcbiAgcHJvamVjdEZvcm0uc3R5bGUucG9zaXRpb24gPSBcInJlbGF0aXZlXCI7XHJcbn1cclxuZnVuY3Rpb24gdW5yZW5kZXJQcm9qZWN0Rm9ybSgpIHtcclxuICBwcm9qZWN0Rm9ybS5zdHlsZS52aXNpYmlsaXR5ID0gXCJoaWRkZW5cIjtcclxuICBwcm9qZWN0Rm9ybS5zdHlsZS5wb3NpdGlvbiA9IFwiYWJzb2x1dGVcIjtcclxufVxyXG5cclxuZXhwb3J0IHsgcmVuZGVyRm9ybSwgdW5yZW5kZXJGb3JtLCByZW5kZXJQcm9qZWN0Rm9ybSwgdW5yZW5kZXJQcm9qZWN0Rm9ybSB9O1xyXG4iLCJpbXBvcnQgeyBQcm9qZWN0IH0gZnJvbSBcIi4vQ2xhc3Nlc1wiO1xyXG5cclxuZnVuY3Rpb24gcmVtb3ZlUHJvamVjdChldmVudCkge1xyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgUHJvamVjdC5wcm9qZWN0TGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgaWYgKFByb2plY3QucHJvamVjdExpc3RbaV0uaWQgPT09IGV2ZW50LmN1cnJlbnRUYXJnZXQucGFyZW50Tm9kZS5pZCkge1xyXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNpZGViYXJcIikucmVtb3ZlQ2hpbGQoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wcm9qZWN0XCIpW2ldKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7IHJlbW92ZVByb2plY3QgfTtcclxuIiwiaW1wb3J0IHsgUHJvamVjdCB9IGZyb20gXCIuL0NsYXNzZXNcIjtcclxuXHJcbmZ1bmN0aW9uIHJlbW92ZVRhc2soZXZlbnQpIHtcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IFByb2plY3QuY3VycmVudFByb2plY3QuZ2V0VGFza3MoKS5sZW5ndGg7IGkrKykge1xyXG4gICAgaWYgKFByb2plY3QuY3VycmVudFByb2plY3QuZ2V0VGFza3MoKVtpXS5pZCA9PT0gZXZlbnQuY3VycmVudFRhcmdldC5wYXJlbnROb2RlLmlkKSB7XHJcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFza3NcIikucmVtb3ZlQ2hpbGQoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi50YXNrXCIpW2ldKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7IHJlbW92ZVRhc2sgfTtcclxuIiwiZnVuY3Rpb24gcmVzZXRUYXNrcygpIHtcclxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2tzXCIpLmlubmVySFRNTCA9IFwiXCI7XHJcbn1cclxuXHJcbmV4cG9ydCB7IHJlc2V0VGFza3MgfTtcclxuIiwiaW1wb3J0IHsgUHJvamVjdCB9IGZyb20gXCIuL0NsYXNzZXNcIjtcclxuXHJcbmZ1bmN0aW9uIHNhdmVQcm9qZWN0cygpIHtcclxuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInByb2plY3RzXCIsIEpTT04uc3RyaW5naWZ5KFByb2plY3QucHJvamVjdExpc3QpKTtcclxufVxyXG5cclxuZnVuY3Rpb24gbG9hZFN0b3JhZ2UoKSB7XHJcbiAgUHJvamVjdC5wcm9qZWN0TGlzdCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJwcm9qZWN0c1wiKSk7XHJcbiAgUHJvamVjdC5jdXJyZW50UHJvamVjdCA9IFByb2plY3QucHJvamVjdExpc3RbMF07XHJcblxyXG4gIC8vIFByb2plY3QgbWV0aG9kc1xyXG4gIFByb2plY3QucHJvamVjdExpc3QuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xyXG4gICAgcHJvamVjdC5hZGRUYXNrID0gZnVuY3Rpb24gKG9iamVjdCkge1xyXG4gICAgICB0aGlzLnRhc2tzLnB1c2gob2JqZWN0KTtcclxuICAgIH07XHJcbiAgICBwcm9qZWN0LnJlbW92ZVRhc2sgPSBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnRhc2tzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgaWYgKHRoaXMudGFza3NbaV0uaWQgPT09IGV2ZW50LmN1cnJlbnRUYXJnZXQucGFyZW50Tm9kZS5pZCkge1xyXG4gICAgICAgICAgdGhpcy50YXNrcy5zcGxpY2UoaSwgMSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHNhdmVQcm9qZWN0cygpO1xyXG4gICAgfTtcclxuICAgIHByb2plY3QuZ2V0VGFza3MgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLnRhc2tzO1xyXG4gICAgfTtcclxuICAgIHByb2plY3QuZ2V0TmFtZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgcmV0dXJuIHRoaXMubmFtZTtcclxuICAgIH07XHJcblxyXG4gICAgLy8gVGFzayBtZXRob2RzXHJcbiAgICBwcm9qZWN0LmdldFRhc2tzKCkuZm9yRWFjaCgodGFzaykgPT4ge1xyXG4gICAgICB0YXNrLmdldFRpdGxlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnRpdGxlO1xyXG4gICAgICB9O1xyXG4gICAgICB0YXNrLmdldERlc2NyaXB0aW9uID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmRlc2NyaXB0aW9uO1xyXG4gICAgICB9O1xyXG4gICAgICB0YXNrLmdldER1ZURhdGUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZHVlRGF0ZTtcclxuICAgICAgfTtcclxuICAgICAgdGFzay5nZXRQcmlvcml0eSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5wcmlvcml0eTtcclxuICAgICAgfTtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG59XHJcblxyXG5leHBvcnQgeyBzYXZlUHJvamVjdHMsIGxvYWRTdG9yYWdlIH07XHJcbiIsImltcG9ydCB7IGxvYWRTdG9yYWdlIH0gZnJvbSBcIi4vbG9jYWxlU3RvcmFnZVwiO1xyXG5pbXBvcnQgeyBET00gfSBmcm9tIFwiLi9ET01cIjtcclxuaW1wb3J0IHsgUHJvamVjdCB9IGZyb20gXCIuL0NsYXNzZXNcIjtcclxuXHJcbmZ1bmN0aW9uIHN0b3JhZ2VFdmVudExpc3RlbmVycygpIHtcclxuICBjb25zdCBwcm9qZWN0RGVsZXRlQnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucHJvamVjdCA+IGRpdjpsYXN0LW9mLXR5cGVcIik7XHJcblxyXG4gIC8vIGNoZWNrcyBpZiBjdXJyZW50UHJvamVjdCBpcyB0aGUgc2FtZSwgdGhlbiByZW1vdmVzIHRoZSBwcm9qZWN0XHJcbiAgcHJvamVjdERlbGV0ZUJ1dHRvbnMuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XHJcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cclxuICAgICAgaWYgKFByb2plY3QuY3VycmVudFByb2plY3QuaWQgPT09IGV2ZW50LmN1cnJlbnRUYXJnZXQucGFyZW50Tm9kZS5pZCkgcmV0dXJuO1xyXG5cclxuICAgICAgRE9NLnByb2plY3QucmVtb3ZlKGV2ZW50KTtcclxuICAgICAgUHJvamVjdC5yZW1vdmVQcm9qZWN0KGV2ZW50KTtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG5cclxuICBjb25zdCBwcm9qZWN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucHJvamVjdFwiKTtcclxuXHJcbiAgLy8gc2V0cyBjdXJyZW50UHJvamVjdCB0byBpdCwgdGhlbiBsb2FkcyB0aGUgRE9NXHJcbiAgcHJvamVjdHMuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XHJcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cclxuICAgICAgLy8gc2V0cyBjdXJyZW50UHJvamVjdFxyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IFByb2plY3QucHJvamVjdExpc3QubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBpZiAoUHJvamVjdC5wcm9qZWN0TGlzdFtpXS5pZCA9PT0gZXZlbnQuY3VycmVudFRhcmdldC5pZCkge1xyXG4gICAgICAgICAgUHJvamVjdC5jdXJyZW50UHJvamVjdCA9IFByb2plY3QucHJvamVjdExpc3RbaV07XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBET00ubWFpbi5yZXNldCgpO1xyXG4gICAgICBET00ubWFpbi5jcmVhdGUoZXZlbnQpO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHBhZ2VMb2FkKCkge1xyXG4gIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInByb2plY3RzXCIpKSB7XHJcbiAgICBsb2FkU3RvcmFnZSgpO1xyXG5cclxuICAgIFByb2plY3QucHJvamVjdExpc3QuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICBET00ucHJvamVjdC5jcmVhdGUoaXRlbSk7XHJcbiAgICB9KTtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucHJvamVjdFwiKS5mb3JFYWNoKCgpID0+IHtcclxuICAgICAgc3RvcmFnZUV2ZW50TGlzdGVuZXJzKCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBET00ubWFpbi5yZXNldCgpO1xyXG5cclxuICAgIGNvbnN0IHByb2plY3RUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpbiA+IGRpdjpmaXJzdC1jaGlsZFwiKTtcclxuXHJcbiAgICAvLyBzZXRzIHByb2plY3QgdGl0bGVcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgUHJvamVjdC5wcm9qZWN0TGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICBpZiAoUHJvamVjdC5wcm9qZWN0TGlzdFtpXS5pZCA9PT0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0XCIpLmlkKSB7XHJcbiAgICAgICAgcHJvamVjdFRpdGxlLnRleHRDb250ZW50ID0gUHJvamVjdC5wcm9qZWN0TGlzdFtpXS5nZXROYW1lKCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBhZGRzIHRoZSB0YXNrc1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBQcm9qZWN0LmN1cnJlbnRQcm9qZWN0LmdldFRhc2tzKCkubGVuZ3RoOyBpKyspIHtcclxuICAgICAgaWYgKFByb2plY3QuY3VycmVudFByb2plY3QuZ2V0VGFza3MoKVtpXSlcclxuICAgICAgICBET00udGFzay5jcmVhdGUoUHJvamVjdC5jdXJyZW50UHJvamVjdC5nZXRUYXNrcygpW2ldKTtcclxuICAgIH1cclxuICB9IGVsc2Uge1xyXG4gICAgbmV3IFByb2plY3QoXCJEZWZhdWx0XCIpO1xyXG4gICAgRE9NLnByb2plY3QuY3JlYXRlKFByb2plY3QucHJvamVjdExpc3RbMF0pO1xyXG4gICAgc3RvcmFnZUV2ZW50TGlzdGVuZXJzKCk7XHJcbiAgICBQcm9qZWN0LmN1cnJlbnRQcm9qZWN0ID0gUHJvamVjdC5wcm9qZWN0TGlzdFswXTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7IHBhZ2VMb2FkIH07XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgRE9NIH0gZnJvbSBcIi4vRE9NXCI7XHJcbmltcG9ydCB7IFByb2plY3QsIFRhc2sgfSBmcm9tIFwiLi9DbGFzc2VzXCI7XHJcbmltcG9ydCB7IHBhZ2VMb2FkIH0gZnJvbSBcIi4vcGFnZUxvYWRcIjtcclxuXHJcbi8vIG9uIEFkZCB0YXNrIGNsaWNrXHJcbi8vIHNob3dzIGZvcm1cclxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluID4gZGl2Omxhc3QtY2hpbGRcIikub25jbGljayA9ICgpID0+IHtcclxuICBET00uZm9ybS5yZW5kZXJGb3JtKCk7XHJcbn07XHJcblxyXG4vLyBvbiBGb3JtIOKcliBjbGlja1xyXG4vLyBoaWRlcyBmb3JtXHJcbmRvY3VtZW50XHJcbiAgLnF1ZXJ5U2VsZWN0b3IoXCJmb3JtID4gZGl2OmZpcnN0LWNoaWxkXCIpXHJcbiAgLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBET00uZm9ybS51bnJlbmRlckZvcm0pO1xyXG5cclxuLy8gb24gc3VibWl0IGZvcm0gY2xpY2tcclxuLy8gY29udmVydHMgZm9ybSBpbnB1dHMgaW50byBhIHRhc2sgaW5zaWRlIHRoZSBjdXJyZW50IHByb2plY3QsIHRoZW4gZ2V0cyByaWQgb2YgdGhlIG1lbnUsIHRoZW4gYWRkcyB0aGUgdGFzayBpbiB0aGUgVUlcclxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImZvcm0gYnV0dG9uXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xyXG4gIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiZm9ybSAjdGl0bGVcIikudmFsdWUgPT09IFwiXCIpIHJldHVybjtcclxuICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gIG5ldyBUYXNrKFxyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImZvcm0gI3RpdGxlXCIpLnZhbHVlLFxyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImZvcm0gI2Rlc2NcIikudmFsdWUsXHJcbiAgICBgRHVlIG9uICR7bmV3IERhdGUoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImZvcm0gI2R1ZURhdGVcIikudmFsdWUpfWAsXHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiZm9ybSAjcHJpb3JpdHlcIikudmFsdWVcclxuICApO1xyXG5cclxuICBET00uZm9ybS51bnJlbmRlckZvcm0oKTtcclxuXHJcbiAgRE9NLnRhc2suY3JlYXRlKFxyXG4gICAgUHJvamVjdC5jdXJyZW50UHJvamVjdC5nZXRUYXNrcygpW1Byb2plY3QuY3VycmVudFByb2plY3QuZ2V0VGFza3MoKS5sZW5ndGggLSAxXVxyXG4gICk7XHJcbn0pO1xyXG5cclxuLy8gb24gUHJvamVjdHMgKyBidXR0b24gY2xpY2tcclxuLy8gb3BlbnMgZm9ybVxyXG5kb2N1bWVudFxyXG4gIC5xdWVyeVNlbGVjdG9yKFwiLnNpZGViYXIgPiBkaXY6Zmlyc3QtY2hpbGQgPiBkaXY6bGFzdC1jaGlsZFwiKVxyXG4gIC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgRE9NLmZvcm0ucmVuZGVyUHJvamVjdEZvcm0oKTtcclxuICB9KTtcclxuXHJcbi8vIG9uIFByb2plY3QgZm9ybSBzdWJtaXRcclxuLy8gY3JlYXRlcyBwcm9qZWN0LCBhZGRzIGl0IHRvIERPTVxyXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3RGb3JtXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGUpID0+IHtcclxuICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gIG5ldyBQcm9qZWN0KGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdEZvcm0gI3Byb2plY3ROYW1lXCIpLnZhbHVlKTtcclxuXHJcbiAgRE9NLnByb2plY3QuY3JlYXRlKFByb2plY3QucHJvamVjdExpc3RbUHJvamVjdC5wcm9qZWN0TGlzdC5sZW5ndGggLSAxXSk7XHJcbiAgRE9NLmZvcm0udW5yZW5kZXJQcm9qZWN0Rm9ybSgpO1xyXG5cclxuICBwcm9qZWN0RXZlbnRMaXN0ZW5lcnMoKTtcclxufSk7XHJcblxyXG5mdW5jdGlvbiBwcm9qZWN0RXZlbnRMaXN0ZW5lcnMoKSB7XHJcbiAgY29uc3QgcHJvamVjdERlbGV0ZUJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnByb2plY3QgPiBkaXY6bGFzdC1vZi10eXBlXCIpO1xyXG5cclxuICAvLyBjaGVja3MgaWYgY3VycmVudFByb2plY3QgaXMgdGhlIHNhbWUsIHRoZW4gcmVtb3ZlcyB0aGUgcHJvamVjdFxyXG4gIHByb2plY3REZWxldGVCdXR0b25zW3Byb2plY3REZWxldGVCdXR0b25zLmxlbmd0aCAtIDFdLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQpID0+IHtcclxuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cclxuICAgIGlmIChQcm9qZWN0LmN1cnJlbnRQcm9qZWN0LmlkID09PSBldmVudC5jdXJyZW50VGFyZ2V0LnBhcmVudE5vZGUuaWQpIHJldHVybjtcclxuXHJcbiAgICBET00ucHJvamVjdC5yZW1vdmUoZXZlbnQpO1xyXG4gICAgUHJvamVjdC5yZW1vdmVQcm9qZWN0KGV2ZW50KTtcclxuICB9KTtcclxuXHJcbiAgY29uc3QgcHJvamVjdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnByb2plY3RcIik7XHJcblxyXG4gIC8vIHNldHMgY3VycmVudFByb2plY3QgdG8gaXQsIHRoZW4gbG9hZHMgdGhlIERPTVxyXG4gIHByb2plY3RzW3Byb2plY3RzLmxlbmd0aCAtIDFdLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQpID0+IHtcclxuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cclxuICAgIC8vIHNldHMgY3VycmVudFByb2plY3RcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgUHJvamVjdC5wcm9qZWN0TGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICBpZiAoUHJvamVjdC5wcm9qZWN0TGlzdFtpXS5pZCA9PT0gZXZlbnQuY3VycmVudFRhcmdldC5pZCkge1xyXG4gICAgICAgIFByb2plY3QuY3VycmVudFByb2plY3QgPSBQcm9qZWN0LnByb2plY3RMaXN0W2ldO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgRE9NLm1haW4ucmVzZXQoKTtcclxuICAgIERPTS5tYWluLmNyZWF0ZShldmVudCk7XHJcbiAgfSk7XHJcbn1cclxuXHJcbnBhZ2VMb2FkKCk7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==