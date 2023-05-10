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
/* harmony export */   "current": () => (/* binding */ current)
/* harmony export */ });
const current = {};

class Project {
  constructor(name) {
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
}

let i = 0;

class Task {
  constructor(title, description, dueDate, priority) {
    this.id = `task${i++}`;
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





const DOM = {
  form: {
    render: _DOMform__WEBPACK_IMPORTED_MODULE_0__.renderForm,
    unrender: _DOMform__WEBPACK_IMPORTED_MODULE_0__.unrenderForm,
  },
  task: {
    create: _DOMcreateTask__WEBPACK_IMPORTED_MODULE_1__.createTask,
    remove: _DOMremoveTask__WEBPACK_IMPORTED_MODULE_2__.removeTask,
    change: {
      extend: _DOMchangeTask__WEBPACK_IMPORTED_MODULE_3__.extendTask,
      unextend: _DOMchangeTask__WEBPACK_IMPORTED_MODULE_3__.unextendTask,
    },
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
  for (let i = 0; i < _Classes__WEBPACK_IMPORTED_MODULE_0__.current.project.getTasks().length; i++) {
    if (_Classes__WEBPACK_IMPORTED_MODULE_0__.current.project.getTasks()[i].id === event.currentTarget.id) {
      const newDiv = document.createElement("div");
      newDiv.id = "desc";
      newDiv.textContent = _Classes__WEBPACK_IMPORTED_MODULE_0__.current.project.getTasks()[i].description;

      event.currentTarget.children[1].insertBefore(
        newDiv,
        event.currentTarget.children[1].children[1]
      );
    }
  }
}

function unextendTask(event) {
  for (let i = 0; i < _Classes__WEBPACK_IMPORTED_MODULE_0__.current.project.getTasks().length; i++) {
    if (_Classes__WEBPACK_IMPORTED_MODULE_0__.current.project.getTasks()[i].id === event.currentTarget.id) {
      event.currentTarget.children[1].removeChild(event.currentTarget.children[1].children[1]);
    }
  }
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
let i = 0;

function addColor(node) {
  if (_Classes__WEBPACK_IMPORTED_MODULE_0__.current.project.getTasks()[_Classes__WEBPACK_IMPORTED_MODULE_0__.current.project.getTasks().length - 1].priority)
    switch (_Classes__WEBPACK_IMPORTED_MODULE_0__.current.project.getTasks()[_Classes__WEBPACK_IMPORTED_MODULE_0__.current.project.getTasks().length - 1].priority) {
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
  newDiv.id = `${_Classes__WEBPACK_IMPORTED_MODULE_0__.current.project.getTasks()[_Classes__WEBPACK_IMPORTED_MODULE_0__.current.project.getTasks().length - 1].id}`;
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
/* harmony export */   "unrenderForm": () => (/* binding */ unrenderForm)
/* harmony export */ });
const form = document.querySelector("form");

function renderForm() {
  form.style.visibility = "visible";
}
function unrenderForm() {
  form.style.visibility = "hidden";
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
  for (let i = 0; i < _Classes__WEBPACK_IMPORTED_MODULE_0__.current.project.getTasks().length; i++) {
    if (_Classes__WEBPACK_IMPORTED_MODULE_0__.current.project.getTasks()[i].id === event.currentTarget.parentNode.id) {
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

click add task, form pops up, take form answers and put it into a new Task,
which is saved to project, use it add to DOM

add colors for tasks based on priority */




let defaultProject = new _Classes__WEBPACK_IMPORTED_MODULE_1__.Project("Default");
_Classes__WEBPACK_IMPORTED_MODULE_1__.current.project = defaultProject;

// on Add task click
// shows form
document.querySelector(".main > div:last-child").addEventListener("click", () => {
  _DOM__WEBPACK_IMPORTED_MODULE_0__.DOM.form.render();
  document.querySelector("input[type=text]").focus();
});

// on Form ✖ click
// hides form
document.querySelector("form > div:first-child").addEventListener("click", _DOM__WEBPACK_IMPORTED_MODULE_0__.DOM.form.unrender);

// on submit form click
// converts form inputs into a task inside the current project, then gets rid of the menu, then adds the task in the UI
document.querySelector("form button").addEventListener("click", (e) => {
  e.preventDefault();

  _Classes__WEBPACK_IMPORTED_MODULE_1__.current.project.addTask(
    new _Classes__WEBPACK_IMPORTED_MODULE_1__.Task(
      document.querySelector("form #title").value,
      document.querySelector("form #desc").value,
      document.querySelector("form #dueDate").value,
      document.querySelector("form #priority").value
    )
  );

  _DOM__WEBPACK_IMPORTED_MODULE_0__.DOM.form.unrender();

  _DOM__WEBPACK_IMPORTED_MODULE_0__.DOM.task.create(_Classes__WEBPACK_IMPORTED_MODULE_1__.current.project.getTasks()[_Classes__WEBPACK_IMPORTED_MODULE_1__.current.project.getTasks().length - 1]);

  // expands tasks on click
  const tasks = document.querySelectorAll(".task");
  let extended = false;

  tasks[tasks.length - 1].addEventListener("click", (event) => {
    if (extended === false) {
      _DOM__WEBPACK_IMPORTED_MODULE_0__.DOM.task.change.extend(event);
      extended = true;
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
    _Classes__WEBPACK_IMPORTED_MODULE_1__.current.project.removeTask(event);
  });

  // on Checkbox click
  // removes task
  const checkboxButtons = document.querySelectorAll(".task > input[type=checkbox]");

  checkboxButtons[checkboxButtons.length - 1].addEventListener("click", (event) => {
    event.stopPropagation();

    _DOM__WEBPACK_IMPORTED_MODULE_0__.DOM.task.remove(event);
    _Classes__WEBPACK_IMPORTED_MODULE_1__.current.project.removeTask(event);
  });
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBSTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSxtREFBaUI7QUFDbkI7QUFDQSxFQUFFLGlEQUFlLENBQUMsOERBQXdCLEdBQUcsOERBQXdCO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSx3REFBc0I7QUFDNUI7QUFDQSxNQUFNO0FBQ04sTUFBTSwwREFBd0I7QUFDOUI7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxpREFBZTtBQUNuQixJQUFJLGdFQUEwQjtBQUM5QixHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksaURBQWU7QUFDbkIsSUFBSSxnRUFBMEI7QUFDOUIsR0FBRztBQUNILENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvQ2xhc3Nlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvRE9NLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9ET01jaGFuZ2VUYXNrLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9ET01jcmVhdGVUYXNrLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9ET01mb3JtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9ET01yZW1vdmVUYXNrLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBjdXJyZW50ID0ge307XHJcblxyXG5jbGFzcyBQcm9qZWN0IHtcclxuICBjb25zdHJ1Y3RvcihuYW1lKSB7XHJcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgdGhpcy50YXNrcyA9IFtdO1xyXG4gIH1cclxuXHJcbiAgYWRkVGFzayhvYmplY3QpIHtcclxuICAgIHRoaXMudGFza3MucHVzaChvYmplY3QpO1xyXG4gIH1cclxuICByZW1vdmVUYXNrKGV2ZW50KSB7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMudGFza3MubGVuZ3RoOyBpKyspIHtcclxuICAgICAgaWYgKHRoaXMudGFza3NbaV0uaWQgPT09IGV2ZW50LmN1cnJlbnRUYXJnZXQucGFyZW50Tm9kZS5pZCkge1xyXG4gICAgICAgIHRoaXMudGFza3Muc3BsaWNlKGksIDEpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXRUYXNrcygpIHtcclxuICAgIHJldHVybiB0aGlzLnRhc2tzO1xyXG4gIH1cclxuICBnZXROYW1lKCkge1xyXG4gICAgcmV0dXJuIHRoaXMubmFtZTtcclxuICB9XHJcbn1cclxuXHJcbmxldCBpID0gMDtcclxuXHJcbmNsYXNzIFRhc2sge1xyXG4gIGNvbnN0cnVjdG9yKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkpIHtcclxuICAgIHRoaXMuaWQgPSBgdGFzayR7aSsrfWA7XHJcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XHJcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XHJcbiAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xyXG4gICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xyXG4gIH1cclxuXHJcbiAgZ2V0VGl0bGUoKSB7XHJcbiAgICByZXR1cm4gdGhpcy50aXRsZTtcclxuICB9XHJcbiAgZ2V0RGVzY3JpcHRpb24oKSB7XHJcbiAgICByZXR1cm4gdGhpcy5kZXNjcmlwdGlvbjtcclxuICB9XHJcbiAgZ2V0RHVlRGF0ZSgpIHtcclxuICAgIHJldHVybiB0aGlzLmR1ZURhdGU7XHJcbiAgfVxyXG4gIGdldFByaW9yaXR5KCkge1xyXG4gICAgcmV0dXJuIHRoaXMucHJpb3JpdHk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgeyBjdXJyZW50LCBQcm9qZWN0LCBUYXNrIH07XHJcbiIsImltcG9ydCB7IHJlbmRlckZvcm0sIHVucmVuZGVyRm9ybSB9IGZyb20gXCIuL0RPTWZvcm1cIjtcclxuaW1wb3J0IHsgY3JlYXRlVGFzayB9IGZyb20gXCIuL0RPTWNyZWF0ZVRhc2tcIjtcclxuaW1wb3J0IHsgcmVtb3ZlVGFzayB9IGZyb20gXCIuL0RPTXJlbW92ZVRhc2tcIjtcclxuaW1wb3J0IHsgZXh0ZW5kVGFzaywgdW5leHRlbmRUYXNrIH0gZnJvbSBcIi4vRE9NY2hhbmdlVGFza1wiO1xyXG5cclxuY29uc3QgRE9NID0ge1xyXG4gIGZvcm06IHtcclxuICAgIHJlbmRlcjogcmVuZGVyRm9ybSxcclxuICAgIHVucmVuZGVyOiB1bnJlbmRlckZvcm0sXHJcbiAgfSxcclxuICB0YXNrOiB7XHJcbiAgICBjcmVhdGU6IGNyZWF0ZVRhc2ssXHJcbiAgICByZW1vdmU6IHJlbW92ZVRhc2ssXHJcbiAgICBjaGFuZ2U6IHtcclxuICAgICAgZXh0ZW5kOiBleHRlbmRUYXNrLFxyXG4gICAgICB1bmV4dGVuZDogdW5leHRlbmRUYXNrLFxyXG4gICAgfSxcclxuICB9LFxyXG59O1xyXG5cclxuZXhwb3J0IHsgRE9NIH07XHJcbiIsImltcG9ydCB7IGN1cnJlbnQgfSBmcm9tIFwiLi9DbGFzc2VzXCI7XHJcblxyXG5mdW5jdGlvbiBleHRlbmRUYXNrKGV2ZW50KSB7XHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBjdXJyZW50LnByb2plY3QuZ2V0VGFza3MoKS5sZW5ndGg7IGkrKykge1xyXG4gICAgaWYgKGN1cnJlbnQucHJvamVjdC5nZXRUYXNrcygpW2ldLmlkID09PSBldmVudC5jdXJyZW50VGFyZ2V0LmlkKSB7XHJcbiAgICAgIGNvbnN0IG5ld0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgIG5ld0Rpdi5pZCA9IFwiZGVzY1wiO1xyXG4gICAgICBuZXdEaXYudGV4dENvbnRlbnQgPSBjdXJyZW50LnByb2plY3QuZ2V0VGFza3MoKVtpXS5kZXNjcmlwdGlvbjtcclxuXHJcbiAgICAgIGV2ZW50LmN1cnJlbnRUYXJnZXQuY2hpbGRyZW5bMV0uaW5zZXJ0QmVmb3JlKFxyXG4gICAgICAgIG5ld0RpdixcclxuICAgICAgICBldmVudC5jdXJyZW50VGFyZ2V0LmNoaWxkcmVuWzFdLmNoaWxkcmVuWzFdXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiB1bmV4dGVuZFRhc2soZXZlbnQpIHtcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IGN1cnJlbnQucHJvamVjdC5nZXRUYXNrcygpLmxlbmd0aDsgaSsrKSB7XHJcbiAgICBpZiAoY3VycmVudC5wcm9qZWN0LmdldFRhc2tzKClbaV0uaWQgPT09IGV2ZW50LmN1cnJlbnRUYXJnZXQuaWQpIHtcclxuICAgICAgZXZlbnQuY3VycmVudFRhcmdldC5jaGlsZHJlblsxXS5yZW1vdmVDaGlsZChldmVudC5jdXJyZW50VGFyZ2V0LmNoaWxkcmVuWzFdLmNoaWxkcmVuWzFdKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7IGV4dGVuZFRhc2ssIHVuZXh0ZW5kVGFzayB9O1xyXG4iLCJpbXBvcnQgeyBjdXJyZW50IH0gZnJvbSBcIi4vQ2xhc3Nlc1wiO1xyXG5cclxuY29uc3QgbWFpbkRpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpblwiKTtcclxubGV0IGkgPSAwO1xyXG5cclxuZnVuY3Rpb24gYWRkQ29sb3Iobm9kZSkge1xyXG4gIGlmIChjdXJyZW50LnByb2plY3QuZ2V0VGFza3MoKVtjdXJyZW50LnByb2plY3QuZ2V0VGFza3MoKS5sZW5ndGggLSAxXS5wcmlvcml0eSlcclxuICAgIHN3aXRjaCAoY3VycmVudC5wcm9qZWN0LmdldFRhc2tzKClbY3VycmVudC5wcm9qZWN0LmdldFRhc2tzKCkubGVuZ3RoIC0gMV0ucHJpb3JpdHkpIHtcclxuICAgICAgY2FzZSBcInVyZ2VudFwiOlxyXG4gICAgICAgIG5vZGUuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJyZ2JhKDI0NSwgOTMsIDMwLCAwLjMpXCI7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgXCJpbXBvcnRhbnRcIjpcclxuICAgICAgICBub2RlLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwicmdiKDI1MywgMTUyLCAwLCAwLjMpXCI7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgXCJ1bmltcG9ydGFudFwiOlxyXG4gICAgICAgIG5vZGUuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJyZ2IoMTgxLCAyMTQsIDE2NywgMC4zKVwiO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVUYXNrKG9iamVjdCkge1xyXG4gIGNvbnN0IG5ld0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgbmV3RGl2LmNsYXNzTGlzdC5hZGQoXCJ0YXNrXCIpO1xyXG4gIG5ld0Rpdi5pZCA9IGAke2N1cnJlbnQucHJvamVjdC5nZXRUYXNrcygpW2N1cnJlbnQucHJvamVjdC5nZXRUYXNrcygpLmxlbmd0aCAtIDFdLmlkfWA7XHJcbiAgbmV3RGl2LmlubmVySFRNTCA9IGBcclxuICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiAvPlxyXG4gICAgPGRpdj5cclxuICAgICAgPGRpdiBpZD1cInRpdGxlXCI+PC9kaXY+XHJcbiAgICAgIDxkaXYgaWQ9XCJkdWVEYXRlXCI+PC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXY+4pyWPC9kaXY+YDtcclxuXHJcbiAgbmV3RGl2LnF1ZXJ5U2VsZWN0b3IoXCIjdGl0bGVcIikudGV4dENvbnRlbnQgPSBvYmplY3QuZ2V0VGl0bGUoKTtcclxuICBuZXdEaXYucXVlcnlTZWxlY3RvcihcIiNkdWVEYXRlXCIpLnRleHRDb250ZW50ID0gb2JqZWN0LmdldER1ZURhdGUoKTtcclxuICBhZGRDb2xvcihuZXdEaXYpO1xyXG5cclxuICBtYWluRGl2Lmluc2VydEJlZm9yZShuZXdEaXYsIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpbiA+IGRpdjpsYXN0LWNoaWxkXCIpKTtcclxufVxyXG5cclxuZXhwb3J0IHsgY3JlYXRlVGFzayB9O1xyXG4iLCJjb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImZvcm1cIik7XHJcblxyXG5mdW5jdGlvbiByZW5kZXJGb3JtKCkge1xyXG4gIGZvcm0uc3R5bGUudmlzaWJpbGl0eSA9IFwidmlzaWJsZVwiO1xyXG59XHJcbmZ1bmN0aW9uIHVucmVuZGVyRm9ybSgpIHtcclxuICBmb3JtLnN0eWxlLnZpc2liaWxpdHkgPSBcImhpZGRlblwiO1xyXG59XHJcblxyXG5leHBvcnQgeyByZW5kZXJGb3JtLCB1bnJlbmRlckZvcm0gfTtcclxuIiwiaW1wb3J0IHsgY3VycmVudCB9IGZyb20gXCIuL0NsYXNzZXNcIjtcclxuXHJcbmZ1bmN0aW9uIHJlbW92ZVRhc2soZXZlbnQpIHtcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IGN1cnJlbnQucHJvamVjdC5nZXRUYXNrcygpLmxlbmd0aDsgaSsrKSB7XHJcbiAgICBpZiAoY3VycmVudC5wcm9qZWN0LmdldFRhc2tzKClbaV0uaWQgPT09IGV2ZW50LmN1cnJlbnRUYXJnZXQucGFyZW50Tm9kZS5pZCkge1xyXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW5cIikucmVtb3ZlQ2hpbGQoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi50YXNrXCIpW2ldKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7IHJlbW92ZVRhc2sgfTtcclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvKiBtYWtlIGEgZGVmYXVsdFByb2plY3QgcHJvamVjdCBhbmQgbGV0IHRoZW0gY3JlYXRlIG90aGVyIHByb2plY3RzIFxyXG5cclxubW9kdWxlczogY3JlYXRlIG5ldyB0b2RvIGl0ZW1zLCBzZXQgdG9kbyBpdGVtcyBhcyBjb21wbGV0ZSwgY2hhbmdlIHRvZG8gcHJpb3JpdHksXHJcblVJOiB2aWV3IHByb2plY3RzIHdpdGggdG9kb3MgaW5zaWRlLCBleHBlbmQgZWFjaCB0b2RvLCBkZWxldGUgYSB0b2RvXHJcbldoZW4gY2xpY2tpbmcgZWFjaCBwcm9qZWN0IGl0IHJlbW92ZXMgdGhlIGN1cnJlbnQgcHJvamVjdCBVSSBcclxuYW5kIHB1dHMgdGhlIG5ldyBvbmVcclxuXHJcbmNsaWNrIGFkZCB0YXNrLCBmb3JtIHBvcHMgdXAsIHRha2UgZm9ybSBhbnN3ZXJzIGFuZCBwdXQgaXQgaW50byBhIG5ldyBUYXNrLFxyXG53aGljaCBpcyBzYXZlZCB0byBwcm9qZWN0LCB1c2UgaXQgYWRkIHRvIERPTVxyXG5cclxuYWRkIGNvbG9ycyBmb3IgdGFza3MgYmFzZWQgb24gcHJpb3JpdHkgKi9cclxuXHJcbmltcG9ydCB7IERPTSB9IGZyb20gXCIuL0RPTVwiO1xyXG5pbXBvcnQgeyBjdXJyZW50LCBQcm9qZWN0LCBUYXNrIH0gZnJvbSBcIi4vQ2xhc3Nlc1wiO1xyXG5cclxubGV0IGRlZmF1bHRQcm9qZWN0ID0gbmV3IFByb2plY3QoXCJEZWZhdWx0XCIpO1xyXG5jdXJyZW50LnByb2plY3QgPSBkZWZhdWx0UHJvamVjdDtcclxuXHJcbi8vIG9uIEFkZCB0YXNrIGNsaWNrXHJcbi8vIHNob3dzIGZvcm1cclxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluID4gZGl2Omxhc3QtY2hpbGRcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICBET00uZm9ybS5yZW5kZXIoKTtcclxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaW5wdXRbdHlwZT10ZXh0XVwiKS5mb2N1cygpO1xyXG59KTtcclxuXHJcbi8vIG9uIEZvcm0g4pyWIGNsaWNrXHJcbi8vIGhpZGVzIGZvcm1cclxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImZvcm0gPiBkaXY6Zmlyc3QtY2hpbGRcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIERPTS5mb3JtLnVucmVuZGVyKTtcclxuXHJcbi8vIG9uIHN1Ym1pdCBmb3JtIGNsaWNrXHJcbi8vIGNvbnZlcnRzIGZvcm0gaW5wdXRzIGludG8gYSB0YXNrIGluc2lkZSB0aGUgY3VycmVudCBwcm9qZWN0LCB0aGVuIGdldHMgcmlkIG9mIHRoZSBtZW51LCB0aGVuIGFkZHMgdGhlIHRhc2sgaW4gdGhlIFVJXHJcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJmb3JtIGJ1dHRvblwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcclxuICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gIGN1cnJlbnQucHJvamVjdC5hZGRUYXNrKFxyXG4gICAgbmV3IFRhc2soXHJcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJmb3JtICN0aXRsZVwiKS52YWx1ZSxcclxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImZvcm0gI2Rlc2NcIikudmFsdWUsXHJcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJmb3JtICNkdWVEYXRlXCIpLnZhbHVlLFxyXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiZm9ybSAjcHJpb3JpdHlcIikudmFsdWVcclxuICAgIClcclxuICApO1xyXG5cclxuICBET00uZm9ybS51bnJlbmRlcigpO1xyXG5cclxuICBET00udGFzay5jcmVhdGUoY3VycmVudC5wcm9qZWN0LmdldFRhc2tzKClbY3VycmVudC5wcm9qZWN0LmdldFRhc2tzKCkubGVuZ3RoIC0gMV0pO1xyXG5cclxuICAvLyBleHBhbmRzIHRhc2tzIG9uIGNsaWNrXHJcbiAgY29uc3QgdGFza3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnRhc2tcIik7XHJcbiAgbGV0IGV4dGVuZGVkID0gZmFsc2U7XHJcblxyXG4gIHRhc2tzW3Rhc2tzLmxlbmd0aCAtIDFdLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQpID0+IHtcclxuICAgIGlmIChleHRlbmRlZCA9PT0gZmFsc2UpIHtcclxuICAgICAgRE9NLnRhc2suY2hhbmdlLmV4dGVuZChldmVudCk7XHJcbiAgICAgIGV4dGVuZGVkID0gdHJ1ZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIERPTS50YXNrLmNoYW5nZS51bmV4dGVuZChldmVudCk7XHJcbiAgICAgIGV4dGVuZGVkID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gIC8vIG9uIFRhc2sg4pyWIGNsaWNrXHJcbiAgLy8gcmVtb3ZlcyB0YXNrXHJcbiAgY29uc3QgdGFza3NYQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi50YXNrID4gZGl2Omxhc3QtY2hpbGRcIik7XHJcblxyXG4gIHRhc2tzWEJ1dHRvblt0YXNrc1hCdXR0b24ubGVuZ3RoIC0gMV0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudCkgPT4ge1xyXG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblxyXG4gICAgRE9NLnRhc2sucmVtb3ZlKGV2ZW50KTtcclxuICAgIGN1cnJlbnQucHJvamVjdC5yZW1vdmVUYXNrKGV2ZW50KTtcclxuICB9KTtcclxuXHJcbiAgLy8gb24gQ2hlY2tib3ggY2xpY2tcclxuICAvLyByZW1vdmVzIHRhc2tcclxuICBjb25zdCBjaGVja2JveEJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnRhc2sgPiBpbnB1dFt0eXBlPWNoZWNrYm94XVwiKTtcclxuXHJcbiAgY2hlY2tib3hCdXR0b25zW2NoZWNrYm94QnV0dG9ucy5sZW5ndGggLSAxXS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XHJcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuXHJcbiAgICBET00udGFzay5yZW1vdmUoZXZlbnQpO1xyXG4gICAgY3VycmVudC5wcm9qZWN0LnJlbW92ZVRhc2soZXZlbnQpO1xyXG4gIH0pO1xyXG59KTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9