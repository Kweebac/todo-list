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
/* harmony export */   "projectList": () => (/* binding */ projectList)
/* harmony export */ });
let projectList = [];

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




_Classes__WEBPACK_IMPORTED_MODULE_1__.projectList.push(new _Classes__WEBPACK_IMPORTED_MODULE_1__.Project("Default"));
_DOM__WEBPACK_IMPORTED_MODULE_0__.DOM.project.create(_Classes__WEBPACK_IMPORTED_MODULE_1__.projectList[_Classes__WEBPACK_IMPORTED_MODULE_1__.projectList.length - 1]);
_Classes__WEBPACK_IMPORTED_MODULE_1__.Project.currentProject = _Classes__WEBPACK_IMPORTED_MODULE_1__.projectList[0];

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

  _Classes__WEBPACK_IMPORTED_MODULE_1__.projectList.push(new _Classes__WEBPACK_IMPORTED_MODULE_1__.Project(document.querySelector(".projectForm #projectName").value));

  _DOM__WEBPACK_IMPORTED_MODULE_0__.DOM.project.create(_Classes__WEBPACK_IMPORTED_MODULE_1__.projectList[_Classes__WEBPACK_IMPORTED_MODULE_1__.projectList.length - 1]);
  _DOM__WEBPACK_IMPORTED_MODULE_0__.DOM.form.unrenderProjectForm();
});

// make it so it creates the project, then creates the DOM, make the defaultProject
// DOM created on load not in html

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ25ELEVBQUUsOERBQTRCO0FBQzlCLENBQUM7QUFDRDtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvQ2xhc3Nlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvRE9NLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9ET01jaGFuZ2VUYXNrLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9ET01jcmVhdGVQcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9ET01jcmVhdGVUYXNrLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9ET01mb3JtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9ET01yZW1vdmVUYXNrLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJsZXQgcHJvamVjdExpc3QgPSBbXTtcclxuXHJcbmxldCBpID0gMDtcclxuXHJcbmNsYXNzIFByb2plY3Qge1xyXG4gIGNvbnN0cnVjdG9yKG5hbWUpIHtcclxuICAgIHRoaXMuaWQgPSBgcHJvamVjdCR7aSsrfWA7XHJcblxyXG4gICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgIHRoaXMudGFza3MgPSBbXTtcclxuICB9XHJcblxyXG4gIGFkZFRhc2sob2JqZWN0KSB7XHJcbiAgICB0aGlzLnRhc2tzLnB1c2gob2JqZWN0KTtcclxuICB9XHJcbiAgcmVtb3ZlVGFzayhldmVudCkge1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnRhc2tzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGlmICh0aGlzLnRhc2tzW2ldLmlkID09PSBldmVudC5jdXJyZW50VGFyZ2V0LnBhcmVudE5vZGUuaWQpIHtcclxuICAgICAgICB0aGlzLnRhc2tzLnNwbGljZShpLCAxKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0VGFza3MoKSB7XHJcbiAgICByZXR1cm4gdGhpcy50YXNrcztcclxuICB9XHJcbiAgZ2V0TmFtZSgpIHtcclxuICAgIHJldHVybiB0aGlzLm5hbWU7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgY3VycmVudFByb2plY3QgPSB1bmRlZmluZWQ7XHJcbn1cclxuXHJcbmxldCBqID0gMDtcclxuXHJcbmNsYXNzIFRhc2sge1xyXG4gIGNvbnN0cnVjdG9yKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkpIHtcclxuICAgIHRoaXMuaWQgPSBgdGFzayR7aisrfWA7XHJcblxyXG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xyXG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xyXG4gICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcclxuICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcclxuICB9XHJcblxyXG4gIGdldFRpdGxlKCkge1xyXG4gICAgcmV0dXJuIHRoaXMudGl0bGU7XHJcbiAgfVxyXG4gIGdldERlc2NyaXB0aW9uKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuZGVzY3JpcHRpb247XHJcbiAgfVxyXG4gIGdldER1ZURhdGUoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5kdWVEYXRlO1xyXG4gIH1cclxuICBnZXRQcmlvcml0eSgpIHtcclxuICAgIHJldHVybiB0aGlzLnByaW9yaXR5O1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IHsgcHJvamVjdExpc3QsIFByb2plY3QsIFRhc2sgfTtcclxuIiwiaW1wb3J0IHsgcmVuZGVyRm9ybSwgdW5yZW5kZXJGb3JtLCByZW5kZXJQcm9qZWN0Rm9ybSwgdW5yZW5kZXJQcm9qZWN0Rm9ybSB9IGZyb20gXCIuL0RPTWZvcm1cIjtcclxuaW1wb3J0IHsgY3JlYXRlVGFzayB9IGZyb20gXCIuL0RPTWNyZWF0ZVRhc2tcIjtcclxuaW1wb3J0IHsgcmVtb3ZlVGFzayB9IGZyb20gXCIuL0RPTXJlbW92ZVRhc2tcIjtcclxuaW1wb3J0IHsgZXh0ZW5kVGFzaywgdW5leHRlbmRUYXNrIH0gZnJvbSBcIi4vRE9NY2hhbmdlVGFza1wiO1xyXG5pbXBvcnQgeyBjcmVhdGVQcm9qZWN0IH0gZnJvbSBcIi4vRE9NY3JlYXRlUHJvamVjdFwiO1xyXG5cclxuY29uc3QgRE9NID0ge1xyXG4gIGZvcm06IHtcclxuICAgIHJlbmRlckZvcm0sXHJcbiAgICB1bnJlbmRlckZvcm0sXHJcbiAgICByZW5kZXJQcm9qZWN0Rm9ybSxcclxuICAgIHVucmVuZGVyUHJvamVjdEZvcm0sXHJcbiAgfSxcclxuICB0YXNrOiB7XHJcbiAgICBjcmVhdGU6IGNyZWF0ZVRhc2ssXHJcbiAgICByZW1vdmU6IHJlbW92ZVRhc2ssXHJcbiAgICBjaGFuZ2U6IHtcclxuICAgICAgZXh0ZW5kOiBleHRlbmRUYXNrLFxyXG4gICAgICB1bmV4dGVuZDogdW5leHRlbmRUYXNrLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIHByb2plY3Q6IHtcclxuICAgIGNyZWF0ZTogY3JlYXRlUHJvamVjdCxcclxuICB9LFxyXG59O1xyXG5cclxuZXhwb3J0IHsgRE9NIH07XHJcbiIsImltcG9ydCB7IFByb2plY3QgfSBmcm9tIFwiLi9DbGFzc2VzXCI7XHJcblxyXG5mdW5jdGlvbiBleHRlbmRUYXNrKGV2ZW50KSB7XHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBQcm9qZWN0LmN1cnJlbnRQcm9qZWN0LmdldFRhc2tzKCkubGVuZ3RoOyBpKyspIHtcclxuICAgIGlmIChQcm9qZWN0LmN1cnJlbnRQcm9qZWN0LmdldFRhc2tzKClbaV0uaWQgPT09IGV2ZW50LmN1cnJlbnRUYXJnZXQuaWQpIHtcclxuICAgICAgaWYgKFByb2plY3QuY3VycmVudFByb2plY3QuZ2V0VGFza3MoKVtpXS5kZXNjcmlwdGlvbiA9PT0gXCJcIikge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgY29uc3QgbmV3RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgbmV3RGl2LmlkID0gXCJkZXNjXCI7XHJcbiAgICAgIG5ld0Rpdi50ZXh0Q29udGVudCA9IFByb2plY3QuY3VycmVudFByb2plY3QuZ2V0VGFza3MoKVtpXS5kZXNjcmlwdGlvbjtcclxuXHJcbiAgICAgIGV2ZW50LmN1cnJlbnRUYXJnZXQuY2hpbGRyZW5bMV0uaW5zZXJ0QmVmb3JlKFxyXG4gICAgICAgIG5ld0RpdixcclxuICAgICAgICBldmVudC5jdXJyZW50VGFyZ2V0LmNoaWxkcmVuWzFdLmNoaWxkcmVuWzFdXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiB0cnVlO1xyXG59XHJcblxyXG5mdW5jdGlvbiB1bmV4dGVuZFRhc2soZXZlbnQpIHtcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IFByb2plY3QuY3VycmVudFByb2plY3QuZ2V0VGFza3MoKS5sZW5ndGg7IGkrKykge1xyXG4gICAgaWYgKFByb2plY3QuY3VycmVudFByb2plY3QuZ2V0VGFza3MoKVtpXS5pZCA9PT0gZXZlbnQuY3VycmVudFRhcmdldC5pZCkge1xyXG4gICAgICBldmVudC5jdXJyZW50VGFyZ2V0LmNoaWxkcmVuWzFdLnJlbW92ZUNoaWxkKGV2ZW50LmN1cnJlbnRUYXJnZXQuY2hpbGRyZW5bMV0uY2hpbGRyZW5bMV0pO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IHsgZXh0ZW5kVGFzaywgdW5leHRlbmRUYXNrIH07XHJcbiIsImltcG9ydCB7IFByb2plY3QgfSBmcm9tIFwiLi9DbGFzc2VzXCI7XHJcblxyXG5jb25zdCBzaWRlYmFyRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zaWRlYmFyXCIpO1xyXG5cclxuZnVuY3Rpb24gY3JlYXRlUHJvamVjdChvYmplY3QpIHtcclxuICBjb25zdCBuZXdEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIG5ld0Rpdi5jbGFzc0xpc3QuYWRkKFwicHJvamVjdFwiKTtcclxuICBuZXdEaXYuaWQgPSBvYmplY3QuaWQ7XHJcbiAgbmV3RGl2LmlubmVySFRNTCA9IGBcclxuICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+XHJcbiAgICA8cGF0aCBkPVwiTTE5IDNIMThWMUgxNlYzSDhWMUg2VjNINUMzLjkgMyAzIDMuOSAzIDVWMTlDMyAyMC4xMSAzLjkgMjEgNSAyMUgxOUMyMC4xMSAyMSAyMSAyMC4xMSAyMSAxOVY1QzIxIDMuOSAyMC4xMSAzIDE5IDNNMTkgMTlINVY5SDE5VjE5TTUgN1Y1SDE5VjdINU0xMC41NiAxNy40NkwxNi41IDExLjUzTDE1LjQzIDEwLjQ3TDEwLjU2IDE1LjM0TDguNDUgMTMuMjNMNy4zOSAxNC4yOUwxMC41NiAxNy40NlpcIi8+XHJcbiAgPC9zdmc+XHJcbiAgPGRpdj48L2Rpdj5cclxuICA8ZGl2PuKcljwvZGl2PmA7XHJcblxyXG4gIG5ld0Rpdi5xdWVyeVNlbGVjdG9yKFwiZGl2OmZpcnN0LW9mLXR5cGVcIikudGV4dENvbnRlbnQgPSBvYmplY3QuZ2V0TmFtZSgpO1xyXG5cclxuICBzaWRlYmFyRGl2LmFwcGVuZENoaWxkKG5ld0Rpdik7XHJcbn1cclxuXHJcbmV4cG9ydCB7IGNyZWF0ZVByb2plY3QgfTtcclxuIiwiaW1wb3J0IHsgUHJvamVjdCB9IGZyb20gXCIuL0NsYXNzZXNcIjtcclxuXHJcbmNvbnN0IG1haW5EaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW5cIik7XHJcblxyXG5mdW5jdGlvbiBhZGRDb2xvcihub2RlKSB7XHJcbiAgaWYgKFByb2plY3QuY3VycmVudFByb2plY3QuZ2V0VGFza3MoKVtQcm9qZWN0LmN1cnJlbnRQcm9qZWN0LmdldFRhc2tzKCkubGVuZ3RoIC0gMV0ucHJpb3JpdHkpXHJcbiAgICBzd2l0Y2ggKFxyXG4gICAgICBQcm9qZWN0LmN1cnJlbnRQcm9qZWN0LmdldFRhc2tzKClbUHJvamVjdC5jdXJyZW50UHJvamVjdC5nZXRUYXNrcygpLmxlbmd0aCAtIDFdLnByaW9yaXR5XHJcbiAgICApIHtcclxuICAgICAgY2FzZSBcInVyZ2VudFwiOlxyXG4gICAgICAgIG5vZGUuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJyZ2JhKDI0NSwgOTMsIDMwLCAwLjMpXCI7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgXCJpbXBvcnRhbnRcIjpcclxuICAgICAgICBub2RlLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwicmdiKDI1MywgMTUyLCAwLCAwLjMpXCI7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgXCJ1bmltcG9ydGFudFwiOlxyXG4gICAgICAgIG5vZGUuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJyZ2IoMTgxLCAyMTQsIDE2NywgMC4zKVwiO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVUYXNrKG9iamVjdCkge1xyXG4gIGNvbnN0IG5ld0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgbmV3RGl2LmNsYXNzTGlzdC5hZGQoXCJ0YXNrXCIpO1xyXG4gIG5ld0Rpdi5pZCA9IG9iamVjdC5pZDtcclxuICBuZXdEaXYuaW5uZXJIVE1MID0gYFxyXG4gICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIC8+XHJcbiAgICA8ZGl2PlxyXG4gICAgICA8ZGl2IGlkPVwidGl0bGVcIj48L2Rpdj5cclxuICAgICAgPGRpdiBpZD1cImR1ZURhdGVcIj48L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdj7inJY8L2Rpdj5gO1xyXG5cclxuICBuZXdEaXYucXVlcnlTZWxlY3RvcihcIiN0aXRsZVwiKS50ZXh0Q29udGVudCA9IG9iamVjdC5nZXRUaXRsZSgpO1xyXG4gIG5ld0Rpdi5xdWVyeVNlbGVjdG9yKFwiI2R1ZURhdGVcIikudGV4dENvbnRlbnQgPSBvYmplY3QuZ2V0RHVlRGF0ZSgpO1xyXG4gIGFkZENvbG9yKG5ld0Rpdik7XHJcblxyXG4gIG1haW5EaXYuaW5zZXJ0QmVmb3JlKG5ld0RpdiwgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluID4gZGl2Omxhc3QtY2hpbGRcIikpO1xyXG59XHJcblxyXG5leHBvcnQgeyBjcmVhdGVUYXNrIH07XHJcbiIsImNvbnN0IGFkZFRhc2tGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGRUYXNrRm9ybVwiKTtcclxuXHJcbmZ1bmN0aW9uIHJlbmRlckZvcm0oKSB7XHJcbiAgYWRkVGFza0Zvcm0uc3R5bGUudmlzaWJpbGl0eSA9IFwidmlzaWJsZVwiO1xyXG59XHJcbmZ1bmN0aW9uIHVucmVuZGVyRm9ybSgpIHtcclxuICBhZGRUYXNrRm9ybS5zdHlsZS52aXNpYmlsaXR5ID0gXCJoaWRkZW5cIjtcclxufVxyXG5cclxuY29uc3QgcHJvamVjdEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3RGb3JtXCIpO1xyXG5cclxuZnVuY3Rpb24gcmVuZGVyUHJvamVjdEZvcm0oKSB7XHJcbiAgcHJvamVjdEZvcm0uc3R5bGUudmlzaWJpbGl0eSA9IFwidmlzaWJsZVwiO1xyXG4gIHByb2plY3RGb3JtLnN0eWxlLnBvc2l0aW9uID0gXCJyZWxhdGl2ZVwiO1xyXG59XHJcbmZ1bmN0aW9uIHVucmVuZGVyUHJvamVjdEZvcm0oKSB7XHJcbiAgcHJvamVjdEZvcm0uc3R5bGUudmlzaWJpbGl0eSA9IFwiaGlkZGVuXCI7XHJcbiAgcHJvamVjdEZvcm0uc3R5bGUucG9zaXRpb24gPSBcImFic29sdXRlXCI7XHJcbn1cclxuXHJcbmV4cG9ydCB7IHJlbmRlckZvcm0sIHVucmVuZGVyRm9ybSwgcmVuZGVyUHJvamVjdEZvcm0sIHVucmVuZGVyUHJvamVjdEZvcm0gfTtcclxuIiwiaW1wb3J0IHsgUHJvamVjdCB9IGZyb20gXCIuL0NsYXNzZXNcIjtcclxuXHJcbmZ1bmN0aW9uIHJlbW92ZVRhc2soZXZlbnQpIHtcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IFByb2plY3QuY3VycmVudFByb2plY3QuZ2V0VGFza3MoKS5sZW5ndGg7IGkrKykge1xyXG4gICAgaWYgKFByb2plY3QuY3VycmVudFByb2plY3QuZ2V0VGFza3MoKVtpXS5pZCA9PT0gZXZlbnQuY3VycmVudFRhcmdldC5wYXJlbnROb2RlLmlkKSB7XHJcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpblwiKS5yZW1vdmVDaGlsZChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnRhc2tcIilbaV0pO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IHsgcmVtb3ZlVGFzayB9O1xyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8qIG1ha2UgYSBkZWZhdWx0UHJvamVjdCBwcm9qZWN0IGFuZCBsZXQgdGhlbSBjcmVhdGUgb3RoZXIgcHJvamVjdHMgXHJcblxyXG5tb2R1bGVzOiBjcmVhdGUgbmV3IHRvZG8gaXRlbXMsIHNldCB0b2RvIGl0ZW1zIGFzIGNvbXBsZXRlLCBjaGFuZ2UgdG9kbyBwcmlvcml0eSxcclxuVUk6IHZpZXcgcHJvamVjdHMgd2l0aCB0b2RvcyBpbnNpZGUsIGV4cGVuZCBlYWNoIHRvZG8sIGRlbGV0ZSBhIHRvZG9cclxuV2hlbiBjbGlja2luZyBlYWNoIHByb2plY3QgaXQgcmVtb3ZlcyB0aGUgY3VycmVudCBwcm9qZWN0IFVJIFxyXG5hbmQgcHV0cyB0aGUgbmV3IG9uZSBcclxuXHJcbndoZW4geW91IGNsaWNrIG9uIGEgbmV3IHByb2plY3QgbWFrZSBpdCB0aGUgY3VycmVudFByb2plY3QqL1xyXG5cclxuaW1wb3J0IHsgRE9NIH0gZnJvbSBcIi4vRE9NXCI7XHJcbmltcG9ydCB7IGN1cnJlbnQsIHByb2plY3RMaXN0LCBQcm9qZWN0LCBUYXNrIH0gZnJvbSBcIi4vQ2xhc3Nlc1wiO1xyXG5cclxucHJvamVjdExpc3QucHVzaChuZXcgUHJvamVjdChcIkRlZmF1bHRcIikpO1xyXG5ET00ucHJvamVjdC5jcmVhdGUocHJvamVjdExpc3RbcHJvamVjdExpc3QubGVuZ3RoIC0gMV0pO1xyXG5Qcm9qZWN0LmN1cnJlbnRQcm9qZWN0ID0gcHJvamVjdExpc3RbMF07XHJcblxyXG4vLyBvbiBBZGQgdGFzayBjbGlja1xyXG4vLyBzaG93cyBmb3JtXHJcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpbiA+IGRpdjpsYXN0LWNoaWxkXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgRE9NLmZvcm0ucmVuZGVyRm9ybSgpO1xyXG59KTtcclxuXHJcbi8vIG9uIEZvcm0g4pyWIGNsaWNrXHJcbi8vIGhpZGVzIGZvcm1cclxuZG9jdW1lbnRcclxuICAucXVlcnlTZWxlY3RvcihcImZvcm0gPiBkaXY6Zmlyc3QtY2hpbGRcIilcclxuICAuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIERPTS5mb3JtLnVucmVuZGVyRm9ybSk7XHJcblxyXG4vLyBvbiBzdWJtaXQgZm9ybSBjbGlja1xyXG4vLyBjb252ZXJ0cyBmb3JtIGlucHV0cyBpbnRvIGEgdGFzayBpbnNpZGUgdGhlIGN1cnJlbnQgcHJvamVjdCwgdGhlbiBnZXRzIHJpZCBvZiB0aGUgbWVudSwgdGhlbiBhZGRzIHRoZSB0YXNrIGluIHRoZSBVSVxyXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiZm9ybSBidXR0b25cIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XHJcbiAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJmb3JtICN0aXRsZVwiKS52YWx1ZSA9PT0gXCJcIikgcmV0dXJuO1xyXG4gIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgUHJvamVjdC5jdXJyZW50UHJvamVjdC5hZGRUYXNrKFxyXG4gICAgbmV3IFRhc2soXHJcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJmb3JtICN0aXRsZVwiKS52YWx1ZSxcclxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImZvcm0gI2Rlc2NcIikudmFsdWUsXHJcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJmb3JtICNkdWVEYXRlXCIpLnZhbHVlLFxyXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiZm9ybSAjcHJpb3JpdHlcIikudmFsdWVcclxuICAgIClcclxuICApO1xyXG5cclxuICBET00uZm9ybS51bnJlbmRlckZvcm0oKTtcclxuXHJcbiAgRE9NLnRhc2suY3JlYXRlKFxyXG4gICAgUHJvamVjdC5jdXJyZW50UHJvamVjdC5nZXRUYXNrcygpW1Byb2plY3QuY3VycmVudFByb2plY3QuZ2V0VGFza3MoKS5sZW5ndGggLSAxXVxyXG4gICk7XHJcblxyXG4gIC8vIGV4cGFuZHMgdGFza3Mgb24gY2xpY2tcclxuICBjb25zdCB0YXNrcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudGFza1wiKTtcclxuICBsZXQgZXh0ZW5kZWQgPSBmYWxzZTtcclxuXHJcbiAgdGFza3NbdGFza3MubGVuZ3RoIC0gMV0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudCkgPT4ge1xyXG4gICAgaWYgKGV4dGVuZGVkID09PSBmYWxzZSkge1xyXG4gICAgICBpZiAoRE9NLnRhc2suY2hhbmdlLmV4dGVuZChldmVudCkpIGV4dGVuZGVkID0gdHJ1ZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIERPTS50YXNrLmNoYW5nZS51bmV4dGVuZChldmVudCk7XHJcbiAgICAgIGV4dGVuZGVkID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gIC8vIG9uIFRhc2sg4pyWIGNsaWNrXHJcbiAgLy8gcmVtb3ZlcyB0YXNrXHJcbiAgY29uc3QgdGFza3NYQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi50YXNrID4gZGl2Omxhc3QtY2hpbGRcIik7XHJcblxyXG4gIHRhc2tzWEJ1dHRvblt0YXNrc1hCdXR0b24ubGVuZ3RoIC0gMV0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudCkgPT4ge1xyXG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblxyXG4gICAgRE9NLnRhc2sucmVtb3ZlKGV2ZW50KTtcclxuICAgIFByb2plY3QuY3VycmVudFByb2plY3QucmVtb3ZlVGFzayhldmVudCk7XHJcbiAgfSk7XHJcblxyXG4gIC8vIG9uIENoZWNrYm94IGNsaWNrXHJcbiAgLy8gcmVtb3ZlcyB0YXNrXHJcbiAgY29uc3QgY2hlY2tib3hCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi50YXNrID4gaW5wdXRbdHlwZT1jaGVja2JveF1cIik7XHJcblxyXG4gIGNoZWNrYm94QnV0dG9uc1tjaGVja2JveEJ1dHRvbnMubGVuZ3RoIC0gMV0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudCkgPT4ge1xyXG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblxyXG4gICAgRE9NLnRhc2sucmVtb3ZlKGV2ZW50KTtcclxuICAgIFByb2plY3QuY3VycmVudFByb2plY3QucmVtb3ZlVGFzayhldmVudCk7XHJcbiAgfSk7XHJcbn0pO1xyXG5cclxuLy8gb24gUHJvamVjdHMgKyBidXR0b24gY2xpY2tcclxuLy8gb3BlbnMgZm9ybVxyXG5kb2N1bWVudFxyXG4gIC5xdWVyeVNlbGVjdG9yKFwiLnNpZGViYXIgPiBkaXY6Zmlyc3QtY2hpbGQgPiBkaXY6bGFzdC1jaGlsZFwiKVxyXG4gIC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgRE9NLmZvcm0ucmVuZGVyUHJvamVjdEZvcm0oKTtcclxuICB9KTtcclxuXHJcbi8vIG9uIFByb2plY3QgZm9ybSBzdWJtaXRcclxuLy8gY3JlYXRlcyBwcm9qZWN0LCBhZGRzIGl0IHRvIERPTVxyXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3RGb3JtXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGUpID0+IHtcclxuICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gIHByb2plY3RMaXN0LnB1c2gobmV3IFByb2plY3QoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0Rm9ybSAjcHJvamVjdE5hbWVcIikudmFsdWUpKTtcclxuXHJcbiAgRE9NLnByb2plY3QuY3JlYXRlKHByb2plY3RMaXN0W3Byb2plY3RMaXN0Lmxlbmd0aCAtIDFdKTtcclxuICBET00uZm9ybS51bnJlbmRlclByb2plY3RGb3JtKCk7XHJcbn0pO1xyXG5cclxuLy8gbWFrZSBpdCBzbyBpdCBjcmVhdGVzIHRoZSBwcm9qZWN0LCB0aGVuIGNyZWF0ZXMgdGhlIERPTSwgbWFrZSB0aGUgZGVmYXVsdFByb2plY3RcclxuLy8gRE9NIGNyZWF0ZWQgb24gbG9hZCBub3QgaW4gaHRtbFxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=