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
    const tasksXButton = document.querySelectorAll(".task > div:last-child");

    for (let i = 0; i < tasksXButton.length; i++) {
      if (
        tasksXButton[i].getAttribute("data-index") ===
        event.currentTarget.getAttribute("data-index")
      ) {
        this.tasks[event.currentTarget.getAttribute("data-index")] = "";
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

class Task {
  constructor(title, description, dueDate, priority) {
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
  console.log("Extended task"); //REMOVE
  let tasks = document.querySelectorAll(".task");

  for (let i = 0; i < tasks.length; i++) {
    if (
      tasks[i].getAttribute("data-index") ===
      event.currentTarget.getAttribute("data-index")
    ) {
      console.log(
        // REMOVE
        _Classes__WEBPACK_IMPORTED_MODULE_0__.current.project.getTasks()[tasks[i].getAttribute("data-index")]
      );

      const newDiv = document.createElement("div");
      newDiv.id = "desc";
      newDiv.textContent =
        _Classes__WEBPACK_IMPORTED_MODULE_0__.current.project.getTasks()[
          tasks[i].getAttribute("data-index")
        ].description;

      tasks[i].children[1].insertBefore(
        newDiv,
        tasks[i].children[1].children[1]
      );
    }
  }
}

function unextendTask(event) {
  console.log("Unextended task"); //REMOVE
  let tasks = document.querySelectorAll(".task");

  for (let i = 0; i < tasks.length; i++) {
    if (
      tasks[i].getAttribute("data-index") ===
      event.currentTarget.getAttribute("data-index")
    ) {
      tasks[i].children[1].removeChild(tasks[i].children[1].children[1]);
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

function createTask(object) {
  const newDiv = document.createElement("div");
  newDiv.classList.add("task");
  newDiv.setAttribute(
    "data-index",
    `${_Classes__WEBPACK_IMPORTED_MODULE_0__.current.project.getTasks().length - 1}`
  );
  newDiv.innerHTML = `
    <input type="checkbox" />
    <div>
      <div id="title"></div>
      <div id="dueDate"></div>
    </div>
    <div data-index="${_Classes__WEBPACK_IMPORTED_MODULE_0__.current.project.getTasks().length - 1}">✖</div>`;

  newDiv.querySelector("#title").textContent = object.getTitle();
  newDiv.querySelector("#dueDate").textContent = object.getDueDate();

  mainDiv.insertBefore(
    newDiv,
    document.querySelector(".main > div:last-child")
  );
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
  console.log("Removed task"); //REMOVE
  const tasksXButton = document.querySelectorAll(".task > div:last-child");

  for (let i = 0; i < tasksXButton.length; i++) {
    if (
      tasksXButton[i].getAttribute("data-index") ===
      event.currentTarget.getAttribute("data-index")
    ) {
      document
        .querySelector(".main")
        .removeChild(document.querySelectorAll(".task")[i]);
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
/* 
make a defaultProject project and let them create other projects 

modules: create new todo items, set todo items as complete, change todo priority,
UI: view projects with todos inside, expend each todo, delete a todo
When clicking each project it removes the current project UI 
and puts the new one

click add task, form pops up, take form answers and put it into a new Task,
 which is saved to project, use it add to DOM

 add colors for tasks based on priority
*/




let defaultProject = new _Classes__WEBPACK_IMPORTED_MODULE_1__.Project("Default");
_Classes__WEBPACK_IMPORTED_MODULE_1__.current.project = defaultProject;

// on "Add task" click
// shows form
document
  .querySelector(".main > div:last-child")
  .addEventListener("click", () => {
    _DOM__WEBPACK_IMPORTED_MODULE_0__.DOM.form.render();
    document.querySelector("input[type=text]").focus();
  });

// on "Form ✖ click"
// hides form
document
  .querySelector("form > div:first-child")
  .addEventListener("click", _DOM__WEBPACK_IMPORTED_MODULE_0__.DOM.form.unrender);

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

  _DOM__WEBPACK_IMPORTED_MODULE_0__.DOM.task.create(
    _Classes__WEBPACK_IMPORTED_MODULE_1__.current.project.getTasks()[_Classes__WEBPACK_IMPORTED_MODULE_1__.current.project.getTasks().length - 1]
  );

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

  // removes task on click
  const tasksXButton = document.querySelectorAll(".task > div:last-child");

  tasksXButton[tasksXButton.length - 1].addEventListener("click", (event) => {
    event.stopPropagation();
    _Classes__WEBPACK_IMPORTED_MODULE_1__.current.project.removeTask(event);
    _DOM__WEBPACK_IMPORTED_MODULE_0__.DOM.task.remove(event);
  });
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0EsRUFBRSw2REFBdUI7QUFDekIsUUFBUSwwQ0FBSTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSxtREFBaUI7QUFDbkI7QUFDQSxFQUFFLGlEQUFlO0FBQ2pCLElBQUksOERBQXdCLEdBQUcsOERBQXdCO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLHdEQUFzQjtBQUM1QjtBQUNBLE1BQU07QUFDTixNQUFNLDBEQUF3QjtBQUM5QjtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksZ0VBQTBCO0FBQzlCLElBQUksaURBQWU7QUFDbkIsR0FBRztBQUNILENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvQ2xhc3Nlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvRE9NLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9ET01jaGFuZ2VUYXNrLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9ET01jcmVhdGVUYXNrLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9ET01mb3JtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9ET01yZW1vdmVUYXNrLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBjdXJyZW50ID0ge307XHJcblxyXG5jbGFzcyBQcm9qZWN0IHtcclxuICBjb25zdHJ1Y3RvcihuYW1lKSB7XHJcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgdGhpcy50YXNrcyA9IFtdO1xyXG4gIH1cclxuXHJcbiAgYWRkVGFzayhvYmplY3QpIHtcclxuICAgIHRoaXMudGFza3MucHVzaChvYmplY3QpO1xyXG4gIH1cclxuICByZW1vdmVUYXNrKGV2ZW50KSB7XHJcbiAgICBjb25zdCB0YXNrc1hCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnRhc2sgPiBkaXY6bGFzdC1jaGlsZFwiKTtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRhc2tzWEJ1dHRvbi5sZW5ndGg7IGkrKykge1xyXG4gICAgICBpZiAoXHJcbiAgICAgICAgdGFza3NYQnV0dG9uW2ldLmdldEF0dHJpYnV0ZShcImRhdGEtaW5kZXhcIikgPT09XHJcbiAgICAgICAgZXZlbnQuY3VycmVudFRhcmdldC5nZXRBdHRyaWJ1dGUoXCJkYXRhLWluZGV4XCIpXHJcbiAgICAgICkge1xyXG4gICAgICAgIHRoaXMudGFza3NbZXZlbnQuY3VycmVudFRhcmdldC5nZXRBdHRyaWJ1dGUoXCJkYXRhLWluZGV4XCIpXSA9IFwiXCI7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldFRhc2tzKCkge1xyXG4gICAgcmV0dXJuIHRoaXMudGFza3M7XHJcbiAgfVxyXG4gIGdldE5hbWUoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5uYW1lO1xyXG4gIH1cclxufVxyXG5cclxuY2xhc3MgVGFzayB7XHJcbiAgY29uc3RydWN0b3IodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSkge1xyXG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xyXG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xyXG4gICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcclxuICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcclxuICB9XHJcblxyXG4gIGdldFRpdGxlKCkge1xyXG4gICAgcmV0dXJuIHRoaXMudGl0bGU7XHJcbiAgfVxyXG4gIGdldERlc2NyaXB0aW9uKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuZGVzY3JpcHRpb247XHJcbiAgfVxyXG4gIGdldER1ZURhdGUoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5kdWVEYXRlO1xyXG4gIH1cclxuICBnZXRQcmlvcml0eSgpIHtcclxuICAgIHJldHVybiB0aGlzLnByaW9yaXR5O1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IHsgY3VycmVudCwgUHJvamVjdCwgVGFzayB9O1xyXG4iLCJpbXBvcnQgeyByZW5kZXJGb3JtLCB1bnJlbmRlckZvcm0gfSBmcm9tIFwiLi9ET01mb3JtXCI7XHJcbmltcG9ydCB7IGNyZWF0ZVRhc2sgfSBmcm9tIFwiLi9ET01jcmVhdGVUYXNrXCI7XHJcbmltcG9ydCB7IHJlbW92ZVRhc2sgfSBmcm9tIFwiLi9ET01yZW1vdmVUYXNrXCI7XHJcbmltcG9ydCB7IGV4dGVuZFRhc2ssIHVuZXh0ZW5kVGFzayB9IGZyb20gXCIuL0RPTWNoYW5nZVRhc2tcIjtcclxuXHJcbmNvbnN0IERPTSA9IHtcclxuICBmb3JtOiB7XHJcbiAgICByZW5kZXI6IHJlbmRlckZvcm0sXHJcbiAgICB1bnJlbmRlcjogdW5yZW5kZXJGb3JtLFxyXG4gIH0sXHJcbiAgdGFzazoge1xyXG4gICAgY3JlYXRlOiBjcmVhdGVUYXNrLFxyXG4gICAgcmVtb3ZlOiByZW1vdmVUYXNrLFxyXG4gICAgY2hhbmdlOiB7XHJcbiAgICAgIGV4dGVuZDogZXh0ZW5kVGFzayxcclxuICAgICAgdW5leHRlbmQ6IHVuZXh0ZW5kVGFzayxcclxuICAgIH0sXHJcbiAgfSxcclxufTtcclxuXHJcbmV4cG9ydCB7IERPTSB9O1xyXG4iLCJpbXBvcnQgeyBjdXJyZW50IH0gZnJvbSBcIi4vQ2xhc3Nlc1wiO1xyXG5cclxuZnVuY3Rpb24gZXh0ZW5kVGFzayhldmVudCkge1xyXG4gIGNvbnNvbGUubG9nKFwiRXh0ZW5kZWQgdGFza1wiKTsgLy9SRU1PVkVcclxuICBsZXQgdGFza3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnRhc2tcIik7XHJcblxyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgdGFza3MubGVuZ3RoOyBpKyspIHtcclxuICAgIGlmIChcclxuICAgICAgdGFza3NbaV0uZ2V0QXR0cmlidXRlKFwiZGF0YS1pbmRleFwiKSA9PT1cclxuICAgICAgZXZlbnQuY3VycmVudFRhcmdldC5nZXRBdHRyaWJ1dGUoXCJkYXRhLWluZGV4XCIpXHJcbiAgICApIHtcclxuICAgICAgY29uc29sZS5sb2coXHJcbiAgICAgICAgLy8gUkVNT1ZFXHJcbiAgICAgICAgY3VycmVudC5wcm9qZWN0LmdldFRhc2tzKClbdGFza3NbaV0uZ2V0QXR0cmlidXRlKFwiZGF0YS1pbmRleFwiKV1cclxuICAgICAgKTtcclxuXHJcbiAgICAgIGNvbnN0IG5ld0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgIG5ld0Rpdi5pZCA9IFwiZGVzY1wiO1xyXG4gICAgICBuZXdEaXYudGV4dENvbnRlbnQgPVxyXG4gICAgICAgIGN1cnJlbnQucHJvamVjdC5nZXRUYXNrcygpW1xyXG4gICAgICAgICAgdGFza3NbaV0uZ2V0QXR0cmlidXRlKFwiZGF0YS1pbmRleFwiKVxyXG4gICAgICAgIF0uZGVzY3JpcHRpb247XHJcblxyXG4gICAgICB0YXNrc1tpXS5jaGlsZHJlblsxXS5pbnNlcnRCZWZvcmUoXHJcbiAgICAgICAgbmV3RGl2LFxyXG4gICAgICAgIHRhc2tzW2ldLmNoaWxkcmVuWzFdLmNoaWxkcmVuWzFdXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiB1bmV4dGVuZFRhc2soZXZlbnQpIHtcclxuICBjb25zb2xlLmxvZyhcIlVuZXh0ZW5kZWQgdGFza1wiKTsgLy9SRU1PVkVcclxuICBsZXQgdGFza3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnRhc2tcIik7XHJcblxyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgdGFza3MubGVuZ3RoOyBpKyspIHtcclxuICAgIGlmIChcclxuICAgICAgdGFza3NbaV0uZ2V0QXR0cmlidXRlKFwiZGF0YS1pbmRleFwiKSA9PT1cclxuICAgICAgZXZlbnQuY3VycmVudFRhcmdldC5nZXRBdHRyaWJ1dGUoXCJkYXRhLWluZGV4XCIpXHJcbiAgICApIHtcclxuICAgICAgdGFza3NbaV0uY2hpbGRyZW5bMV0ucmVtb3ZlQ2hpbGQodGFza3NbaV0uY2hpbGRyZW5bMV0uY2hpbGRyZW5bMV0pO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IHsgZXh0ZW5kVGFzaywgdW5leHRlbmRUYXNrIH07XHJcbiIsImltcG9ydCB7IGN1cnJlbnQgfSBmcm9tIFwiLi9DbGFzc2VzXCI7XHJcblxyXG5jb25zdCBtYWluRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluXCIpO1xyXG5cclxuZnVuY3Rpb24gY3JlYXRlVGFzayhvYmplY3QpIHtcclxuICBjb25zdCBuZXdEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIG5ld0Rpdi5jbGFzc0xpc3QuYWRkKFwidGFza1wiKTtcclxuICBuZXdEaXYuc2V0QXR0cmlidXRlKFxyXG4gICAgXCJkYXRhLWluZGV4XCIsXHJcbiAgICBgJHtjdXJyZW50LnByb2plY3QuZ2V0VGFza3MoKS5sZW5ndGggLSAxfWBcclxuICApO1xyXG4gIG5ld0Rpdi5pbm5lckhUTUwgPSBgXHJcbiAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgLz5cclxuICAgIDxkaXY+XHJcbiAgICAgIDxkaXYgaWQ9XCJ0aXRsZVwiPjwvZGl2PlxyXG4gICAgICA8ZGl2IGlkPVwiZHVlRGF0ZVwiPjwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGRhdGEtaW5kZXg9XCIke2N1cnJlbnQucHJvamVjdC5nZXRUYXNrcygpLmxlbmd0aCAtIDF9XCI+4pyWPC9kaXY+YDtcclxuXHJcbiAgbmV3RGl2LnF1ZXJ5U2VsZWN0b3IoXCIjdGl0bGVcIikudGV4dENvbnRlbnQgPSBvYmplY3QuZ2V0VGl0bGUoKTtcclxuICBuZXdEaXYucXVlcnlTZWxlY3RvcihcIiNkdWVEYXRlXCIpLnRleHRDb250ZW50ID0gb2JqZWN0LmdldER1ZURhdGUoKTtcclxuXHJcbiAgbWFpbkRpdi5pbnNlcnRCZWZvcmUoXHJcbiAgICBuZXdEaXYsXHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW4gPiBkaXY6bGFzdC1jaGlsZFwiKVxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCB7IGNyZWF0ZVRhc2sgfTtcclxuIiwiY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJmb3JtXCIpO1xyXG5cclxuZnVuY3Rpb24gcmVuZGVyRm9ybSgpIHtcclxuICBmb3JtLnN0eWxlLnZpc2liaWxpdHkgPSBcInZpc2libGVcIjtcclxufVxyXG5mdW5jdGlvbiB1bnJlbmRlckZvcm0oKSB7XHJcbiAgZm9ybS5zdHlsZS52aXNpYmlsaXR5ID0gXCJoaWRkZW5cIjtcclxufVxyXG5cclxuZXhwb3J0IHsgcmVuZGVyRm9ybSwgdW5yZW5kZXJGb3JtIH07XHJcbiIsImltcG9ydCB7IGN1cnJlbnQgfSBmcm9tIFwiLi9DbGFzc2VzXCI7XHJcblxyXG5mdW5jdGlvbiByZW1vdmVUYXNrKGV2ZW50KSB7XHJcbiAgY29uc29sZS5sb2coXCJSZW1vdmVkIHRhc2tcIik7IC8vUkVNT1ZFXHJcbiAgY29uc3QgdGFza3NYQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi50YXNrID4gZGl2Omxhc3QtY2hpbGRcIik7XHJcblxyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgdGFza3NYQnV0dG9uLmxlbmd0aDsgaSsrKSB7XHJcbiAgICBpZiAoXHJcbiAgICAgIHRhc2tzWEJ1dHRvbltpXS5nZXRBdHRyaWJ1dGUoXCJkYXRhLWluZGV4XCIpID09PVxyXG4gICAgICBldmVudC5jdXJyZW50VGFyZ2V0LmdldEF0dHJpYnV0ZShcImRhdGEtaW5kZXhcIilcclxuICAgICkge1xyXG4gICAgICBkb2N1bWVudFxyXG4gICAgICAgIC5xdWVyeVNlbGVjdG9yKFwiLm1haW5cIilcclxuICAgICAgICAucmVtb3ZlQ2hpbGQoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi50YXNrXCIpW2ldKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7IHJlbW92ZVRhc2sgfTtcclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvKiBcclxubWFrZSBhIGRlZmF1bHRQcm9qZWN0IHByb2plY3QgYW5kIGxldCB0aGVtIGNyZWF0ZSBvdGhlciBwcm9qZWN0cyBcclxuXHJcbm1vZHVsZXM6IGNyZWF0ZSBuZXcgdG9kbyBpdGVtcywgc2V0IHRvZG8gaXRlbXMgYXMgY29tcGxldGUsIGNoYW5nZSB0b2RvIHByaW9yaXR5LFxyXG5VSTogdmlldyBwcm9qZWN0cyB3aXRoIHRvZG9zIGluc2lkZSwgZXhwZW5kIGVhY2ggdG9kbywgZGVsZXRlIGEgdG9kb1xyXG5XaGVuIGNsaWNraW5nIGVhY2ggcHJvamVjdCBpdCByZW1vdmVzIHRoZSBjdXJyZW50IHByb2plY3QgVUkgXHJcbmFuZCBwdXRzIHRoZSBuZXcgb25lXHJcblxyXG5jbGljayBhZGQgdGFzaywgZm9ybSBwb3BzIHVwLCB0YWtlIGZvcm0gYW5zd2VycyBhbmQgcHV0IGl0IGludG8gYSBuZXcgVGFzayxcclxuIHdoaWNoIGlzIHNhdmVkIHRvIHByb2plY3QsIHVzZSBpdCBhZGQgdG8gRE9NXHJcblxyXG4gYWRkIGNvbG9ycyBmb3IgdGFza3MgYmFzZWQgb24gcHJpb3JpdHlcclxuKi9cclxuXHJcbmltcG9ydCB7IERPTSB9IGZyb20gXCIuL0RPTVwiO1xyXG5pbXBvcnQgeyBjdXJyZW50LCBQcm9qZWN0LCBUYXNrIH0gZnJvbSBcIi4vQ2xhc3Nlc1wiO1xyXG5cclxubGV0IGRlZmF1bHRQcm9qZWN0ID0gbmV3IFByb2plY3QoXCJEZWZhdWx0XCIpO1xyXG5jdXJyZW50LnByb2plY3QgPSBkZWZhdWx0UHJvamVjdDtcclxuXHJcbi8vIG9uIFwiQWRkIHRhc2tcIiBjbGlja1xyXG4vLyBzaG93cyBmb3JtXHJcbmRvY3VtZW50XHJcbiAgLnF1ZXJ5U2VsZWN0b3IoXCIubWFpbiA+IGRpdjpsYXN0LWNoaWxkXCIpXHJcbiAgLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICBET00uZm9ybS5yZW5kZXIoKTtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dFt0eXBlPXRleHRdXCIpLmZvY3VzKCk7XHJcbiAgfSk7XHJcblxyXG4vLyBvbiBcIkZvcm0g4pyWIGNsaWNrXCJcclxuLy8gaGlkZXMgZm9ybVxyXG5kb2N1bWVudFxyXG4gIC5xdWVyeVNlbGVjdG9yKFwiZm9ybSA+IGRpdjpmaXJzdC1jaGlsZFwiKVxyXG4gIC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgRE9NLmZvcm0udW5yZW5kZXIpO1xyXG5cclxuLy8gb24gc3VibWl0IGZvcm0gY2xpY2tcclxuLy8gY29udmVydHMgZm9ybSBpbnB1dHMgaW50byBhIHRhc2sgaW5zaWRlIHRoZSBjdXJyZW50IHByb2plY3QsIHRoZW4gZ2V0cyByaWQgb2YgdGhlIG1lbnUsIHRoZW4gYWRkcyB0aGUgdGFzayBpbiB0aGUgVUlcclxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImZvcm0gYnV0dG9uXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xyXG4gIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgY3VycmVudC5wcm9qZWN0LmFkZFRhc2soXHJcbiAgICBuZXcgVGFzayhcclxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImZvcm0gI3RpdGxlXCIpLnZhbHVlLFxyXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiZm9ybSAjZGVzY1wiKS52YWx1ZSxcclxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImZvcm0gI2R1ZURhdGVcIikudmFsdWUsXHJcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJmb3JtICNwcmlvcml0eVwiKS52YWx1ZVxyXG4gICAgKVxyXG4gICk7XHJcblxyXG4gIERPTS5mb3JtLnVucmVuZGVyKCk7XHJcblxyXG4gIERPTS50YXNrLmNyZWF0ZShcclxuICAgIGN1cnJlbnQucHJvamVjdC5nZXRUYXNrcygpW2N1cnJlbnQucHJvamVjdC5nZXRUYXNrcygpLmxlbmd0aCAtIDFdXHJcbiAgKTtcclxuXHJcbiAgLy8gZXhwYW5kcyB0YXNrcyBvbiBjbGlja1xyXG4gIGNvbnN0IHRhc2tzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi50YXNrXCIpO1xyXG4gIGxldCBleHRlbmRlZCA9IGZhbHNlO1xyXG5cclxuICB0YXNrc1t0YXNrcy5sZW5ndGggLSAxXS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XHJcbiAgICBpZiAoZXh0ZW5kZWQgPT09IGZhbHNlKSB7XHJcbiAgICAgIERPTS50YXNrLmNoYW5nZS5leHRlbmQoZXZlbnQpO1xyXG4gICAgICBleHRlbmRlZCA9IHRydWU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBET00udGFzay5jaGFuZ2UudW5leHRlbmQoZXZlbnQpO1xyXG4gICAgICBleHRlbmRlZCA9IGZhbHNlO1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICAvLyByZW1vdmVzIHRhc2sgb24gY2xpY2tcclxuICBjb25zdCB0YXNrc1hCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnRhc2sgPiBkaXY6bGFzdC1jaGlsZFwiKTtcclxuXHJcbiAgdGFza3NYQnV0dG9uW3Rhc2tzWEJ1dHRvbi5sZW5ndGggLSAxXS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XHJcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIGN1cnJlbnQucHJvamVjdC5yZW1vdmVUYXNrKGV2ZW50KTtcclxuICAgIERPTS50YXNrLnJlbW92ZShldmVudCk7XHJcbiAgfSk7XHJcbn0pO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=