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
/* harmony export */   "Task": () => (/* binding */ Task),
/* harmony export */   "highestProjectID": () => (/* binding */ highestProjectID),
/* harmony export */   "highestTaskID": () => (/* binding */ highestTaskID)
/* harmony export */ });
/* harmony import */ var _localeStorage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./localeStorage */ "./src/localeStorage.js");


let highestProjectID = 0;

class Project {
  constructor(name) {
    this.id = `project${highestProjectID++}`;

    this.name = name;
    this.tasks = [];

    Project.projectList.push(this);
    (0,_localeStorage__WEBPACK_IMPORTED_MODULE_0__.saveProjects)();
    // localStorage.setItem("highestProjectID", `${highestProjectID}`);
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

let highestTaskID = 0;

class Task {
  constructor(title, description, dueDate, priority) {
    this.id = `task${highestTaskID++}`;

    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;

    Project.currentProject.addTask(this);
    (0,_localeStorage__WEBPACK_IMPORTED_MODULE_0__.saveProjects)();
    // localStorage.setItem("highestTaskID", `${highestTaskID}`);
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
    // sets the title
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

      for (let i = 0; i < _Classes__WEBPACK_IMPORTED_MODULE_2__.Project.projectList.length; i++) {
        if (_Classes__WEBPACK_IMPORTED_MODULE_2__.Project.projectList[i].id === event.currentTarget.parentNode.id) {
          if (_Classes__WEBPACK_IMPORTED_MODULE_2__.Project.projectList[i].name === "Default") {
            return;
          }
        }
      }

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

    // add event listeners for each project
    // load default tasks with event listeners?
    _Classes__WEBPACK_IMPORTED_MODULE_2__.Project.projectList.forEach((item) => {
      _DOM__WEBPACK_IMPORTED_MODULE_1__.DOM.project.create(item);
    });
    document.querySelectorAll(".projectForm").forEach(() => {
      storageEventListeners();
    });

    _Classes__WEBPACK_IMPORTED_MODULE_2__.Project.currentProject = _Classes__WEBPACK_IMPORTED_MODULE_2__.Project.projectList[0];
  } else {
    // new Project("Default");
    // DOM.project.create(Project.projectList[0]);
    // storageEventListeners();
    // Project.currentProject = Project.projectList[0];
  }

  // highestProjectID = +localStorage.getItem("highestProjectID");
  // highestTaskID = +localStorage.getItem("highestTaskID");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFtQjtBQUNwRDtBQUNBO0FBQ0E7QUFDQSxJQUFJLGdEQUFjO0FBQ2xCLElBQUksaURBQWU7QUFDbkIsR0FBRztBQUNIO0FBQ0E7QUFDQSxtREFBUSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9DbGFzc2VzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9ET00uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL0RPTWNoYW5nZVRhc2suanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL0RPTWNyZWF0ZU1haW4uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL0RPTWNyZWF0ZVByb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL0RPTWNyZWF0ZVRhc2suanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL0RPTWZvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL0RPTXJlbW92ZVByb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL0RPTXJlbW92ZVRhc2suanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL0RPTXJlc2V0VGFza3MuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2xvY2FsZVN0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3BhZ2VMb2FkLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBzYXZlUHJvamVjdHMgfSBmcm9tIFwiLi9sb2NhbGVTdG9yYWdlXCI7XHJcblxyXG5sZXQgaGlnaGVzdFByb2plY3RJRCA9IDA7XHJcblxyXG5jbGFzcyBQcm9qZWN0IHtcclxuICBjb25zdHJ1Y3RvcihuYW1lKSB7XHJcbiAgICB0aGlzLmlkID0gYHByb2plY3Qke2hpZ2hlc3RQcm9qZWN0SUQrK31gO1xyXG5cclxuICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICB0aGlzLnRhc2tzID0gW107XHJcblxyXG4gICAgUHJvamVjdC5wcm9qZWN0TGlzdC5wdXNoKHRoaXMpO1xyXG4gICAgc2F2ZVByb2plY3RzKCk7XHJcbiAgICAvLyBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImhpZ2hlc3RQcm9qZWN0SURcIiwgYCR7aGlnaGVzdFByb2plY3RJRH1gKTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBjdXJyZW50UHJvamVjdCA9IHVuZGVmaW5lZDtcclxuICBzdGF0aWMgcHJvamVjdExpc3QgPSBbXTtcclxuXHJcbiAgc3RhdGljIHJlbW92ZVByb2plY3QoZXZlbnQpIHtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgUHJvamVjdC5wcm9qZWN0TGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICBpZiAoUHJvamVjdC5wcm9qZWN0TGlzdFtpXS5pZCA9PT0gZXZlbnQuY3VycmVudFRhcmdldC5wYXJlbnROb2RlLmlkKSB7XHJcbiAgICAgICAgUHJvamVjdC5wcm9qZWN0TGlzdC5zcGxpY2UoaSwgMSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHNhdmVQcm9qZWN0cygpO1xyXG4gIH1cclxuXHJcbiAgYWRkVGFzayhvYmplY3QpIHtcclxuICAgIHRoaXMudGFza3MucHVzaChvYmplY3QpO1xyXG4gIH1cclxuICByZW1vdmVUYXNrKGV2ZW50KSB7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMudGFza3MubGVuZ3RoOyBpKyspIHtcclxuICAgICAgaWYgKHRoaXMudGFza3NbaV0uaWQgPT09IGV2ZW50LmN1cnJlbnRUYXJnZXQucGFyZW50Tm9kZS5pZCkge1xyXG4gICAgICAgIHRoaXMudGFza3Muc3BsaWNlKGksIDEpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBzYXZlUHJvamVjdHMoKTtcclxuICB9XHJcblxyXG4gIGdldFRhc2tzKCkge1xyXG4gICAgcmV0dXJuIHRoaXMudGFza3M7XHJcbiAgfVxyXG4gIGdldE5hbWUoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5uYW1lO1xyXG4gIH1cclxufVxyXG5cclxubGV0IGhpZ2hlc3RUYXNrSUQgPSAwO1xyXG5cclxuY2xhc3MgVGFzayB7XHJcbiAgY29uc3RydWN0b3IodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSkge1xyXG4gICAgdGhpcy5pZCA9IGB0YXNrJHtoaWdoZXN0VGFza0lEKyt9YDtcclxuXHJcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XHJcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XHJcbiAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xyXG4gICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xyXG5cclxuICAgIFByb2plY3QuY3VycmVudFByb2plY3QuYWRkVGFzayh0aGlzKTtcclxuICAgIHNhdmVQcm9qZWN0cygpO1xyXG4gICAgLy8gbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJoaWdoZXN0VGFza0lEXCIsIGAke2hpZ2hlc3RUYXNrSUR9YCk7XHJcbiAgfVxyXG5cclxuICBnZXRUaXRsZSgpIHtcclxuICAgIHJldHVybiB0aGlzLnRpdGxlO1xyXG4gIH1cclxuICBnZXREZXNjcmlwdGlvbigpIHtcclxuICAgIHJldHVybiB0aGlzLmRlc2NyaXB0aW9uO1xyXG4gIH1cclxuICBnZXREdWVEYXRlKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuZHVlRGF0ZTtcclxuICB9XHJcbiAgZ2V0UHJpb3JpdHkoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5wcmlvcml0eTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7IFByb2plY3QsIFRhc2ssIGhpZ2hlc3RQcm9qZWN0SUQsIGhpZ2hlc3RUYXNrSUQgfTtcclxuIiwiaW1wb3J0IHsgcmVuZGVyRm9ybSwgdW5yZW5kZXJGb3JtLCByZW5kZXJQcm9qZWN0Rm9ybSwgdW5yZW5kZXJQcm9qZWN0Rm9ybSB9IGZyb20gXCIuL0RPTWZvcm1cIjtcclxuaW1wb3J0IHsgY3JlYXRlVGFzayB9IGZyb20gXCIuL0RPTWNyZWF0ZVRhc2tcIjtcclxuaW1wb3J0IHsgcmVtb3ZlVGFzayB9IGZyb20gXCIuL0RPTXJlbW92ZVRhc2tcIjtcclxuaW1wb3J0IHsgZXh0ZW5kVGFzaywgdW5leHRlbmRUYXNrIH0gZnJvbSBcIi4vRE9NY2hhbmdlVGFza1wiO1xyXG5pbXBvcnQgeyBjcmVhdGVQcm9qZWN0IH0gZnJvbSBcIi4vRE9NY3JlYXRlUHJvamVjdFwiO1xyXG5pbXBvcnQgeyByZW1vdmVQcm9qZWN0IH0gZnJvbSBcIi4vRE9NcmVtb3ZlUHJvamVjdFwiO1xyXG5pbXBvcnQgeyBjcmVhdGVNYWluIH0gZnJvbSBcIi4vRE9NY3JlYXRlTWFpblwiO1xyXG5pbXBvcnQgeyByZXNldFRhc2tzIH0gZnJvbSBcIi4vRE9NcmVzZXRUYXNrc1wiO1xyXG5cclxuY29uc3QgRE9NID0ge1xyXG4gIGZvcm06IHtcclxuICAgIHJlbmRlckZvcm0sXHJcbiAgICB1bnJlbmRlckZvcm0sXHJcbiAgICByZW5kZXJQcm9qZWN0Rm9ybSxcclxuICAgIHVucmVuZGVyUHJvamVjdEZvcm0sXHJcbiAgfSxcclxuICB0YXNrOiB7XHJcbiAgICBjcmVhdGU6IGNyZWF0ZVRhc2ssXHJcbiAgICByZW1vdmU6IHJlbW92ZVRhc2ssXHJcbiAgICBjaGFuZ2U6IHtcclxuICAgICAgZXh0ZW5kOiBleHRlbmRUYXNrLFxyXG4gICAgICB1bmV4dGVuZDogdW5leHRlbmRUYXNrLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIHByb2plY3Q6IHtcclxuICAgIGNyZWF0ZTogY3JlYXRlUHJvamVjdCxcclxuICAgIHJlbW92ZTogcmVtb3ZlUHJvamVjdCxcclxuICB9LFxyXG4gIG1haW46IHtcclxuICAgIHJlc2V0OiByZXNldFRhc2tzLFxyXG4gICAgY3JlYXRlOiBjcmVhdGVNYWluLFxyXG4gIH0sXHJcbn07XHJcblxyXG5leHBvcnQgeyBET00gfTtcclxuIiwiaW1wb3J0IHsgUHJvamVjdCB9IGZyb20gXCIuL0NsYXNzZXNcIjtcclxuXHJcbmZ1bmN0aW9uIGV4dGVuZFRhc2soZXZlbnQpIHtcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IFByb2plY3QuY3VycmVudFByb2plY3QuZ2V0VGFza3MoKS5sZW5ndGg7IGkrKykge1xyXG4gICAgaWYgKFByb2plY3QuY3VycmVudFByb2plY3QuZ2V0VGFza3MoKVtpXS5pZCA9PT0gZXZlbnQuY3VycmVudFRhcmdldC5pZCkge1xyXG4gICAgICBpZiAoUHJvamVjdC5jdXJyZW50UHJvamVjdC5nZXRUYXNrcygpW2ldLmRlc2NyaXB0aW9uID09PSBcIlwiKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBjb25zdCBuZXdEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICBuZXdEaXYuaWQgPSBcImRlc2NcIjtcclxuICAgICAgbmV3RGl2LnRleHRDb250ZW50ID0gUHJvamVjdC5jdXJyZW50UHJvamVjdC5nZXRUYXNrcygpW2ldLmRlc2NyaXB0aW9uO1xyXG5cclxuICAgICAgZXZlbnQuY3VycmVudFRhcmdldC5jaGlsZHJlblsxXS5pbnNlcnRCZWZvcmUoXHJcbiAgICAgICAgbmV3RGl2LFxyXG4gICAgICAgIGV2ZW50LmN1cnJlbnRUYXJnZXQuY2hpbGRyZW5bMV0uY2hpbGRyZW5bMV1cclxuICAgICAgKTtcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIHRydWU7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVuZXh0ZW5kVGFzayhldmVudCkge1xyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgUHJvamVjdC5jdXJyZW50UHJvamVjdC5nZXRUYXNrcygpLmxlbmd0aDsgaSsrKSB7XHJcbiAgICBpZiAoUHJvamVjdC5jdXJyZW50UHJvamVjdC5nZXRUYXNrcygpW2ldLmlkID09PSBldmVudC5jdXJyZW50VGFyZ2V0LmlkKSB7XHJcbiAgICAgIGV2ZW50LmN1cnJlbnRUYXJnZXQuY2hpbGRyZW5bMV0ucmVtb3ZlQ2hpbGQoZXZlbnQuY3VycmVudFRhcmdldC5jaGlsZHJlblsxXS5jaGlsZHJlblsxXSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgeyBleHRlbmRUYXNrLCB1bmV4dGVuZFRhc2sgfTtcclxuIiwiaW1wb3J0IHsgUHJvamVjdCB9IGZyb20gXCIuL0NsYXNzZXNcIjtcclxuaW1wb3J0IHsgRE9NIH0gZnJvbSBcIi4vRE9NXCI7XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVNYWluKGV2ZW50KSB7XHJcbiAgY29uc3QgcHJvamVjdFRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluID4gZGl2OmZpcnN0LWNoaWxkXCIpO1xyXG5cclxuICAvLyBzZXRzIHByb2plY3QgdGl0bGVcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IFByb2plY3QucHJvamVjdExpc3QubGVuZ3RoOyBpKyspIHtcclxuICAgIC8vIHNldHMgdGhlIHRpdGxlXHJcbiAgICBpZiAoUHJvamVjdC5wcm9qZWN0TGlzdFtpXS5pZCA9PT0gZXZlbnQuY3VycmVudFRhcmdldC5pZCkge1xyXG4gICAgICBwcm9qZWN0VGl0bGUudGV4dENvbnRlbnQgPSBQcm9qZWN0LnByb2plY3RMaXN0W2ldLmdldE5hbWUoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIGFkZHMgdGhlIHRhc2tzXHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBQcm9qZWN0LmN1cnJlbnRQcm9qZWN0LmdldFRhc2tzKCkubGVuZ3RoOyBpKyspIHtcclxuICAgIGlmIChQcm9qZWN0LmN1cnJlbnRQcm9qZWN0LmdldFRhc2tzKClbaV0pXHJcbiAgICAgIERPTS50YXNrLmNyZWF0ZShQcm9qZWN0LmN1cnJlbnRQcm9qZWN0LmdldFRhc2tzKClbaV0pO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IHsgY3JlYXRlTWFpbiB9O1xyXG4iLCJpbXBvcnQgeyBQcm9qZWN0IH0gZnJvbSBcIi4vQ2xhc3Nlc1wiO1xyXG5cclxuY29uc3Qgc2lkZWJhckRpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2lkZWJhclwiKTtcclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVByb2plY3Qob2JqZWN0KSB7XHJcbiAgY29uc3QgbmV3RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBuZXdEaXYuY2xhc3NMaXN0LmFkZChcInByb2plY3RcIik7XHJcbiAgbmV3RGl2LmlkID0gb2JqZWN0LmlkO1xyXG4gIG5ld0Rpdi5pbm5lckhUTUwgPSBgXHJcbiAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPlxyXG4gICAgPHBhdGggZD1cIk0xOSAzSDE4VjFIMTZWM0g4VjFINlYzSDVDMy45IDMgMyAzLjkgMyA1VjE5QzMgMjAuMTEgMy45IDIxIDUgMjFIMTlDMjAuMTEgMjEgMjEgMjAuMTEgMjEgMTlWNUMyMSAzLjkgMjAuMTEgMyAxOSAzTTE5IDE5SDVWOUgxOVYxOU01IDdWNUgxOVY3SDVNMTAuNTYgMTcuNDZMMTYuNSAxMS41M0wxNS40MyAxMC40N0wxMC41NiAxNS4zNEw4LjQ1IDEzLjIzTDcuMzkgMTQuMjlMMTAuNTYgMTcuNDZaXCIvPlxyXG4gIDwvc3ZnPlxyXG4gIDxkaXY+PC9kaXY+XHJcbiAgPGRpdj7inJY8L2Rpdj5gO1xyXG5cclxuICBuZXdEaXYucXVlcnlTZWxlY3RvcihcImRpdjpmaXJzdC1vZi10eXBlXCIpLnRleHRDb250ZW50ID0gb2JqZWN0LmdldE5hbWUoKTtcclxuXHJcbiAgc2lkZWJhckRpdi5hcHBlbmRDaGlsZChuZXdEaXYpO1xyXG59XHJcblxyXG5leHBvcnQgeyBjcmVhdGVQcm9qZWN0IH07XHJcbiIsImltcG9ydCB7IFByb2plY3QgfSBmcm9tIFwiLi9DbGFzc2VzXCI7XHJcbmltcG9ydCB7IERPTSB9IGZyb20gXCIuL0RPTVwiO1xyXG5cclxuY29uc3QgdGFza3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2tzXCIpO1xyXG5cclxuZnVuY3Rpb24gYWRkQ29sb3Iobm9kZSkge1xyXG4gIGlmIChQcm9qZWN0LmN1cnJlbnRQcm9qZWN0LmdldFRhc2tzKClbUHJvamVjdC5jdXJyZW50UHJvamVjdC5nZXRUYXNrcygpLmxlbmd0aCAtIDFdLnByaW9yaXR5KVxyXG4gICAgc3dpdGNoIChcclxuICAgICAgUHJvamVjdC5jdXJyZW50UHJvamVjdC5nZXRUYXNrcygpW1Byb2plY3QuY3VycmVudFByb2plY3QuZ2V0VGFza3MoKS5sZW5ndGggLSAxXS5wcmlvcml0eVxyXG4gICAgKSB7XHJcbiAgICAgIGNhc2UgXCJ1cmdlbnRcIjpcclxuICAgICAgICBub2RlLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwicmdiYSgyNDUsIDkzLCAzMCwgMC4zKVwiO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFwiaW1wb3J0YW50XCI6XHJcbiAgICAgICAgbm9kZS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInJnYigyNTMsIDE1MiwgMCwgMC4zKVwiO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFwidW5pbXBvcnRhbnRcIjpcclxuICAgICAgICBub2RlLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwicmdiKDE4MSwgMjE0LCAxNjcsIDAuMylcIjtcclxuICAgICAgICBicmVhaztcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlVGFzayhvYmplY3QpIHtcclxuICBjb25zdCBuZXdEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIG5ld0Rpdi5jbGFzc0xpc3QuYWRkKFwidGFza1wiKTtcclxuICBuZXdEaXYuaWQgPSBvYmplY3QuaWQ7XHJcbiAgbmV3RGl2LmlubmVySFRNTCA9IGBcclxuICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiAvPlxyXG4gICAgPGRpdj5cclxuICAgICAgPGRpdiBpZD1cInRpdGxlXCI+PC9kaXY+XHJcbiAgICAgIDxkaXYgaWQ9XCJkdWVEYXRlXCI+PC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXY+4pyWPC9kaXY+YDtcclxuXHJcbiAgbmV3RGl2LnF1ZXJ5U2VsZWN0b3IoXCIjdGl0bGVcIikudGV4dENvbnRlbnQgPSBvYmplY3QuZ2V0VGl0bGUoKTtcclxuICBuZXdEaXYucXVlcnlTZWxlY3RvcihcIiNkdWVEYXRlXCIpLnRleHRDb250ZW50ID0gb2JqZWN0LmdldER1ZURhdGUoKTtcclxuICBhZGRDb2xvcihuZXdEaXYpO1xyXG5cclxuICB0YXNrcy5hcHBlbmRDaGlsZChuZXdEaXYpO1xyXG5cclxuICAvLyBleHBhbmRzIHRhc2tzIG9uIGNsaWNrXHJcbiAgY29uc3QgYWxsVGFzayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudGFza1wiKTtcclxuICBsZXQgZXh0ZW5kZWQgPSBmYWxzZTtcclxuXHJcbiAgYWxsVGFza1thbGxUYXNrLmxlbmd0aCAtIDFdLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQpID0+IHtcclxuICAgIGlmIChleHRlbmRlZCA9PT0gZmFsc2UpIHtcclxuICAgICAgaWYgKERPTS50YXNrLmNoYW5nZS5leHRlbmQoZXZlbnQpKSBleHRlbmRlZCA9IHRydWU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBET00udGFzay5jaGFuZ2UudW5leHRlbmQoZXZlbnQpO1xyXG4gICAgICBleHRlbmRlZCA9IGZhbHNlO1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICAvLyBvbiBUYXNrIOKcliBjbGlja1xyXG4gIC8vIHJlbW92ZXMgdGFza1xyXG4gIGNvbnN0IHRhc2tzWEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudGFzayA+IGRpdjpsYXN0LWNoaWxkXCIpO1xyXG5cclxuICB0YXNrc1hCdXR0b25bdGFza3NYQnV0dG9uLmxlbmd0aCAtIDFdLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQpID0+IHtcclxuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cclxuICAgIERPTS50YXNrLnJlbW92ZShldmVudCk7XHJcbiAgICBQcm9qZWN0LmN1cnJlbnRQcm9qZWN0LnJlbW92ZVRhc2soZXZlbnQpO1xyXG4gIH0pO1xyXG5cclxuICAvLyBvbiBDaGVja2JveCBjbGlja1xyXG4gIC8vIHJlbW92ZXMgdGFza1xyXG4gIGNvbnN0IGNoZWNrYm94QnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudGFzayA+IGlucHV0W3R5cGU9Y2hlY2tib3hdXCIpO1xyXG5cclxuICBjaGVja2JveEJ1dHRvbnNbY2hlY2tib3hCdXR0b25zLmxlbmd0aCAtIDFdLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQpID0+IHtcclxuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cclxuICAgIERPTS50YXNrLnJlbW92ZShldmVudCk7XHJcbiAgICBQcm9qZWN0LmN1cnJlbnRQcm9qZWN0LnJlbW92ZVRhc2soZXZlbnQpO1xyXG4gIH0pO1xyXG59XHJcblxyXG5leHBvcnQgeyBjcmVhdGVUYXNrIH07XHJcbiIsImNvbnN0IGFkZFRhc2tGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGRUYXNrRm9ybVwiKTtcclxuXHJcbmZ1bmN0aW9uIHJlbmRlckZvcm0oKSB7XHJcbiAgYWRkVGFza0Zvcm0uc3R5bGUudmlzaWJpbGl0eSA9IFwidmlzaWJsZVwiO1xyXG59XHJcbmZ1bmN0aW9uIHVucmVuZGVyRm9ybSgpIHtcclxuICBhZGRUYXNrRm9ybS5zdHlsZS52aXNpYmlsaXR5ID0gXCJoaWRkZW5cIjtcclxufVxyXG5cclxuY29uc3QgcHJvamVjdEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3RGb3JtXCIpO1xyXG5cclxuZnVuY3Rpb24gcmVuZGVyUHJvamVjdEZvcm0oKSB7XHJcbiAgcHJvamVjdEZvcm0uc3R5bGUudmlzaWJpbGl0eSA9IFwidmlzaWJsZVwiO1xyXG4gIHByb2plY3RGb3JtLnN0eWxlLnBvc2l0aW9uID0gXCJyZWxhdGl2ZVwiO1xyXG59XHJcbmZ1bmN0aW9uIHVucmVuZGVyUHJvamVjdEZvcm0oKSB7XHJcbiAgcHJvamVjdEZvcm0uc3R5bGUudmlzaWJpbGl0eSA9IFwiaGlkZGVuXCI7XHJcbiAgcHJvamVjdEZvcm0uc3R5bGUucG9zaXRpb24gPSBcImFic29sdXRlXCI7XHJcbn1cclxuXHJcbmV4cG9ydCB7IHJlbmRlckZvcm0sIHVucmVuZGVyRm9ybSwgcmVuZGVyUHJvamVjdEZvcm0sIHVucmVuZGVyUHJvamVjdEZvcm0gfTtcclxuIiwiaW1wb3J0IHsgUHJvamVjdCB9IGZyb20gXCIuL0NsYXNzZXNcIjtcclxuXHJcbmZ1bmN0aW9uIHJlbW92ZVByb2plY3QoZXZlbnQpIHtcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IFByb2plY3QucHJvamVjdExpc3QubGVuZ3RoOyBpKyspIHtcclxuICAgIGlmIChQcm9qZWN0LnByb2plY3RMaXN0W2ldLmlkID09PSBldmVudC5jdXJyZW50VGFyZ2V0LnBhcmVudE5vZGUuaWQpIHtcclxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zaWRlYmFyXCIpLnJlbW92ZUNoaWxkKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucHJvamVjdFwiKVtpXSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgeyByZW1vdmVQcm9qZWN0IH07XHJcbiIsImltcG9ydCB7IFByb2plY3QgfSBmcm9tIFwiLi9DbGFzc2VzXCI7XHJcblxyXG5mdW5jdGlvbiByZW1vdmVUYXNrKGV2ZW50KSB7XHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBQcm9qZWN0LmN1cnJlbnRQcm9qZWN0LmdldFRhc2tzKCkubGVuZ3RoOyBpKyspIHtcclxuICAgIGlmIChQcm9qZWN0LmN1cnJlbnRQcm9qZWN0LmdldFRhc2tzKClbaV0uaWQgPT09IGV2ZW50LmN1cnJlbnRUYXJnZXQucGFyZW50Tm9kZS5pZCkge1xyXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2tzXCIpLnJlbW92ZUNoaWxkKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudGFza1wiKVtpXSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgeyByZW1vdmVUYXNrIH07XHJcbiIsImZ1bmN0aW9uIHJlc2V0VGFza3MoKSB7XHJcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrc1wiKS5pbm5lckhUTUwgPSBcIlwiO1xyXG59XHJcblxyXG5leHBvcnQgeyByZXNldFRhc2tzIH07XHJcbiIsImltcG9ydCB7IFByb2plY3QgfSBmcm9tIFwiLi9DbGFzc2VzXCI7XHJcblxyXG5mdW5jdGlvbiBzYXZlUHJvamVjdHMoKSB7XHJcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJwcm9qZWN0c1wiLCBKU09OLnN0cmluZ2lmeShQcm9qZWN0LnByb2plY3RMaXN0KSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxvYWRTdG9yYWdlKCkge1xyXG4gIFByb2plY3QucHJvamVjdExpc3QgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicHJvamVjdHNcIikpO1xyXG4gIFByb2plY3QuY3VycmVudFByb2plY3QgPSBQcm9qZWN0LnByb2plY3RMaXN0WzBdO1xyXG5cclxuICAvLyBQcm9qZWN0IG1ldGhvZHNcclxuICBQcm9qZWN0LnByb2plY3RMaXN0LmZvckVhY2goKHByb2plY3QpID0+IHtcclxuICAgIHByb2plY3QuYWRkVGFzayA9IGZ1bmN0aW9uIChvYmplY3QpIHtcclxuICAgICAgdGhpcy50YXNrcy5wdXNoKG9iamVjdCk7XHJcbiAgICB9O1xyXG4gICAgcHJvamVjdC5yZW1vdmVUYXNrID0gZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy50YXNrcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGlmICh0aGlzLnRhc2tzW2ldLmlkID09PSBldmVudC5jdXJyZW50VGFyZ2V0LnBhcmVudE5vZGUuaWQpIHtcclxuICAgICAgICAgIHRoaXMudGFza3Muc3BsaWNlKGksIDEpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBzYXZlUHJvamVjdHMoKTtcclxuICAgIH07XHJcbiAgICBwcm9qZWN0LmdldFRhc2tzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICByZXR1cm4gdGhpcy50YXNrcztcclxuICAgIH07XHJcbiAgICBwcm9qZWN0LmdldE5hbWUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLm5hbWU7XHJcbiAgICB9O1xyXG5cclxuICAgIC8vIFRhc2sgbWV0aG9kc1xyXG4gICAgcHJvamVjdC5nZXRUYXNrcygpLmZvckVhY2goKHRhc2spID0+IHtcclxuICAgICAgdGFzay5nZXRUaXRsZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy50aXRsZTtcclxuICAgICAgfTtcclxuICAgICAgdGFzay5nZXREZXNjcmlwdGlvbiA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5kZXNjcmlwdGlvbjtcclxuICAgICAgfTtcclxuICAgICAgdGFzay5nZXREdWVEYXRlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmR1ZURhdGU7XHJcbiAgICAgIH07XHJcbiAgICAgIHRhc2suZ2V0UHJpb3JpdHkgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucHJpb3JpdHk7XHJcbiAgICAgIH07XHJcbiAgICB9KTtcclxuICB9KTtcclxufVxyXG5cclxuZXhwb3J0IHsgc2F2ZVByb2plY3RzLCBsb2FkU3RvcmFnZSB9O1xyXG4iLCJpbXBvcnQgeyBsb2FkU3RvcmFnZSB9IGZyb20gXCIuL2xvY2FsZVN0b3JhZ2VcIjtcclxuaW1wb3J0IHsgRE9NIH0gZnJvbSBcIi4vRE9NXCI7XHJcbmltcG9ydCB7IFByb2plY3QsIGhpZ2hlc3RQcm9qZWN0SUQgfSBmcm9tIFwiLi9DbGFzc2VzXCI7XHJcblxyXG5mdW5jdGlvbiBzdG9yYWdlRXZlbnRMaXN0ZW5lcnMoKSB7XHJcbiAgY29uc3QgcHJvamVjdERlbGV0ZUJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnByb2plY3QgPiBkaXY6bGFzdC1vZi10eXBlXCIpO1xyXG5cclxuICAvLyBjaGVja3MgaWYgY3VycmVudFByb2plY3QgaXMgdGhlIHNhbWUsIHRoZW4gcmVtb3ZlcyB0aGUgcHJvamVjdFxyXG4gIHByb2plY3REZWxldGVCdXR0b25zLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudCkgPT4ge1xyXG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuXHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgUHJvamVjdC5wcm9qZWN0TGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGlmIChQcm9qZWN0LnByb2plY3RMaXN0W2ldLmlkID09PSBldmVudC5jdXJyZW50VGFyZ2V0LnBhcmVudE5vZGUuaWQpIHtcclxuICAgICAgICAgIGlmIChQcm9qZWN0LnByb2plY3RMaXN0W2ldLm5hbWUgPT09IFwiRGVmYXVsdFwiKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChQcm9qZWN0LmN1cnJlbnRQcm9qZWN0LmlkID09PSBldmVudC5jdXJyZW50VGFyZ2V0LnBhcmVudE5vZGUuaWQpIHJldHVybjtcclxuXHJcbiAgICAgIERPTS5wcm9qZWN0LnJlbW92ZShldmVudCk7XHJcbiAgICAgIFByb2plY3QucmVtb3ZlUHJvamVjdChldmVudCk7XHJcbiAgICB9KTtcclxuICB9KTtcclxuXHJcbiAgY29uc3QgcHJvamVjdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnByb2plY3RcIik7XHJcblxyXG4gIC8vIHNldHMgY3VycmVudFByb2plY3QgdG8gaXQsIHRoZW4gbG9hZHMgdGhlIERPTVxyXG4gIHByb2plY3RzLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudCkgPT4ge1xyXG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuXHJcbiAgICAgIC8vIHNldHMgY3VycmVudFByb2plY3RcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBQcm9qZWN0LnByb2plY3RMaXN0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgaWYgKFByb2plY3QucHJvamVjdExpc3RbaV0uaWQgPT09IGV2ZW50LmN1cnJlbnRUYXJnZXQuaWQpIHtcclxuICAgICAgICAgIFByb2plY3QuY3VycmVudFByb2plY3QgPSBQcm9qZWN0LnByb2plY3RMaXN0W2ldO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgRE9NLm1haW4ucmVzZXQoKTtcclxuICAgICAgRE9NLm1haW4uY3JlYXRlKGV2ZW50KTtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBwYWdlTG9hZCgpIHtcclxuICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJwcm9qZWN0c1wiKSkge1xyXG4gICAgbG9hZFN0b3JhZ2UoKTtcclxuXHJcbiAgICAvLyBhZGQgZXZlbnQgbGlzdGVuZXJzIGZvciBlYWNoIHByb2plY3RcclxuICAgIC8vIGxvYWQgZGVmYXVsdCB0YXNrcyB3aXRoIGV2ZW50IGxpc3RlbmVycz9cclxuICAgIFByb2plY3QucHJvamVjdExpc3QuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICBET00ucHJvamVjdC5jcmVhdGUoaXRlbSk7XHJcbiAgICB9KTtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucHJvamVjdEZvcm1cIikuZm9yRWFjaCgoKSA9PiB7XHJcbiAgICAgIHN0b3JhZ2VFdmVudExpc3RlbmVycygpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgUHJvamVjdC5jdXJyZW50UHJvamVjdCA9IFByb2plY3QucHJvamVjdExpc3RbMF07XHJcbiAgfSBlbHNlIHtcclxuICAgIC8vIG5ldyBQcm9qZWN0KFwiRGVmYXVsdFwiKTtcclxuICAgIC8vIERPTS5wcm9qZWN0LmNyZWF0ZShQcm9qZWN0LnByb2plY3RMaXN0WzBdKTtcclxuICAgIC8vIHN0b3JhZ2VFdmVudExpc3RlbmVycygpO1xyXG4gICAgLy8gUHJvamVjdC5jdXJyZW50UHJvamVjdCA9IFByb2plY3QucHJvamVjdExpc3RbMF07XHJcbiAgfVxyXG5cclxuICAvLyBoaWdoZXN0UHJvamVjdElEID0gK2xvY2FsU3RvcmFnZS5nZXRJdGVtKFwiaGlnaGVzdFByb2plY3RJRFwiKTtcclxuICAvLyBoaWdoZXN0VGFza0lEID0gK2xvY2FsU3RvcmFnZS5nZXRJdGVtKFwiaGlnaGVzdFRhc2tJRFwiKTtcclxufVxyXG5cclxuZXhwb3J0IHsgcGFnZUxvYWQgfTtcclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBET00gfSBmcm9tIFwiLi9ET01cIjtcclxuaW1wb3J0IHsgUHJvamVjdCwgVGFzayB9IGZyb20gXCIuL0NsYXNzZXNcIjtcclxuaW1wb3J0IHsgcGFnZUxvYWQgfSBmcm9tIFwiLi9wYWdlTG9hZFwiO1xyXG5cclxuLy8gb24gQWRkIHRhc2sgY2xpY2tcclxuLy8gc2hvd3MgZm9ybVxyXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW4gPiBkaXY6bGFzdC1jaGlsZFwiKS5vbmNsaWNrID0gKCkgPT4ge1xyXG4gIERPTS5mb3JtLnJlbmRlckZvcm0oKTtcclxufTtcclxuXHJcbi8vIG9uIEZvcm0g4pyWIGNsaWNrXHJcbi8vIGhpZGVzIGZvcm1cclxuZG9jdW1lbnRcclxuICAucXVlcnlTZWxlY3RvcihcImZvcm0gPiBkaXY6Zmlyc3QtY2hpbGRcIilcclxuICAuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIERPTS5mb3JtLnVucmVuZGVyRm9ybSk7XHJcblxyXG4vLyBvbiBzdWJtaXQgZm9ybSBjbGlja1xyXG4vLyBjb252ZXJ0cyBmb3JtIGlucHV0cyBpbnRvIGEgdGFzayBpbnNpZGUgdGhlIGN1cnJlbnQgcHJvamVjdCwgdGhlbiBnZXRzIHJpZCBvZiB0aGUgbWVudSwgdGhlbiBhZGRzIHRoZSB0YXNrIGluIHRoZSBVSVxyXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiZm9ybSBidXR0b25cIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XHJcbiAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJmb3JtICN0aXRsZVwiKS52YWx1ZSA9PT0gXCJcIikgcmV0dXJuO1xyXG4gIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgbmV3IFRhc2soXHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiZm9ybSAjdGl0bGVcIikudmFsdWUsXHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiZm9ybSAjZGVzY1wiKS52YWx1ZSxcclxuICAgIGBEdWUgb24gJHtuZXcgRGF0ZShkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiZm9ybSAjZHVlRGF0ZVwiKS52YWx1ZSl9YCxcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJmb3JtICNwcmlvcml0eVwiKS52YWx1ZVxyXG4gICk7XHJcblxyXG4gIERPTS5mb3JtLnVucmVuZGVyRm9ybSgpO1xyXG5cclxuICBET00udGFzay5jcmVhdGUoXHJcbiAgICBQcm9qZWN0LmN1cnJlbnRQcm9qZWN0LmdldFRhc2tzKClbUHJvamVjdC5jdXJyZW50UHJvamVjdC5nZXRUYXNrcygpLmxlbmd0aCAtIDFdXHJcbiAgKTtcclxufSk7XHJcblxyXG4vLyBvbiBQcm9qZWN0cyArIGJ1dHRvbiBjbGlja1xyXG4vLyBvcGVucyBmb3JtXHJcbmRvY3VtZW50XHJcbiAgLnF1ZXJ5U2VsZWN0b3IoXCIuc2lkZWJhciA+IGRpdjpmaXJzdC1jaGlsZCA+IGRpdjpsYXN0LWNoaWxkXCIpXHJcbiAgLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICBET00uZm9ybS5yZW5kZXJQcm9qZWN0Rm9ybSgpO1xyXG4gIH0pO1xyXG5cclxuLy8gb24gUHJvamVjdCBmb3JtIHN1Ym1pdFxyXG4vLyBjcmVhdGVzIHByb2plY3QsIGFkZHMgaXQgdG8gRE9NXHJcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdEZvcm1cIikuYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoZSkgPT4ge1xyXG4gIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgbmV3IFByb2plY3QoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0Rm9ybSAjcHJvamVjdE5hbWVcIikudmFsdWUpO1xyXG5cclxuICBET00ucHJvamVjdC5jcmVhdGUoUHJvamVjdC5wcm9qZWN0TGlzdFtQcm9qZWN0LnByb2plY3RMaXN0Lmxlbmd0aCAtIDFdKTtcclxuICBET00uZm9ybS51bnJlbmRlclByb2plY3RGb3JtKCk7XHJcblxyXG4gIHByb2plY3RFdmVudExpc3RlbmVycygpO1xyXG59KTtcclxuXHJcbmZ1bmN0aW9uIHByb2plY3RFdmVudExpc3RlbmVycygpIHtcclxuICBjb25zdCBwcm9qZWN0RGVsZXRlQnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucHJvamVjdCA+IGRpdjpsYXN0LW9mLXR5cGVcIik7XHJcblxyXG4gIC8vIGNoZWNrcyBpZiBjdXJyZW50UHJvamVjdCBpcyB0aGUgc2FtZSwgdGhlbiByZW1vdmVzIHRoZSBwcm9qZWN0XHJcbiAgcHJvamVjdERlbGV0ZUJ1dHRvbnNbcHJvamVjdERlbGV0ZUJ1dHRvbnMubGVuZ3RoIC0gMV0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudCkgPT4ge1xyXG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblxyXG4gICAgaWYgKFByb2plY3QuY3VycmVudFByb2plY3QuaWQgPT09IGV2ZW50LmN1cnJlbnRUYXJnZXQucGFyZW50Tm9kZS5pZCkgcmV0dXJuO1xyXG5cclxuICAgIERPTS5wcm9qZWN0LnJlbW92ZShldmVudCk7XHJcbiAgICBQcm9qZWN0LnJlbW92ZVByb2plY3QoZXZlbnQpO1xyXG4gIH0pO1xyXG5cclxuICBjb25zdCBwcm9qZWN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucHJvamVjdFwiKTtcclxuXHJcbiAgLy8gc2V0cyBjdXJyZW50UHJvamVjdCB0byBpdCwgdGhlbiBsb2FkcyB0aGUgRE9NXHJcbiAgcHJvamVjdHNbcHJvamVjdHMubGVuZ3RoIC0gMV0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudCkgPT4ge1xyXG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblxyXG4gICAgLy8gc2V0cyBjdXJyZW50UHJvamVjdFxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBQcm9qZWN0LnByb2plY3RMaXN0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGlmIChQcm9qZWN0LnByb2plY3RMaXN0W2ldLmlkID09PSBldmVudC5jdXJyZW50VGFyZ2V0LmlkKSB7XHJcbiAgICAgICAgUHJvamVjdC5jdXJyZW50UHJvamVjdCA9IFByb2plY3QucHJvamVjdExpc3RbaV07XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBET00ubWFpbi5yZXNldCgpO1xyXG4gICAgRE9NLm1haW4uY3JlYXRlKGV2ZW50KTtcclxuICB9KTtcclxufVxyXG5cclxucGFnZUxvYWQoKTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9