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
    this.tasks[event.target.getAttribute("data-index")] = "hi";
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




const DOM = {
  form: {
    render: _DOMform__WEBPACK_IMPORTED_MODULE_0__.renderForm,
    unrender: _DOMform__WEBPACK_IMPORTED_MODULE_0__.unrenderForm,
  },
  task: {
    create: _DOMcreateTask__WEBPACK_IMPORTED_MODULE_1__.createTask,
    remove: _DOMremoveTask__WEBPACK_IMPORTED_MODULE_2__.removeTask,
  },
};




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
  const tasks = document.querySelectorAll(".task > div:last-child");

  for (let i = 0; i < tasks.length; i++) {
    if (
      tasks[i].getAttribute("data-index") ===
      event.target.getAttribute("data-index")
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

 add x button to form

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
  });

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

  /* expands tasks on click - NOT FINISHED
  document.querySelectorAll(".task").forEach((task) => {
    task.addEventListener("click", () => {});
  }); */

  // removes task on click
  const tasks = document.querySelectorAll(".task > div:last-child");

  tasks[tasks.length - 1].addEventListener("click", (event) => {
    // adds event listener to newly created task
    _Classes__WEBPACK_IMPORTED_MODULE_1__.current.project.removeTask(event);
    _DOM__WEBPACK_IMPORTED_MODULE_0__.DOM.task.remove(event);
  });
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ2tDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3Q21CO0FBQ1I7QUFDQTtBQUM3QztBQUNBO0FBQ0E7QUFDQSxZQUFZLGdEQUFVO0FBQ3RCLGNBQWMsa0RBQVk7QUFDMUIsR0FBRztBQUNIO0FBQ0EsWUFBWSxzREFBVTtBQUN0QixZQUFZLHNEQUFVO0FBQ3RCLEdBQUc7QUFDSDtBQUNBO0FBQ2U7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmcUI7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLDhEQUF3QixjQUFjO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ3NCOzs7Ozs7Ozs7Ozs7Ozs7O0FDeEJ0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDb0M7Ozs7Ozs7Ozs7Ozs7Ozs7QUNUQTtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixrQkFBa0I7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNzQjs7Ozs7OztVQ2pCdEI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUM0QjtBQUN1QjtBQUNuRDtBQUNBLHlCQUF5Qiw2Q0FBTztBQUNoQyxxREFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksaURBQWU7QUFDbkIsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsNkRBQXVCO0FBQ3pCLFFBQVEsMENBQUk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsbURBQWlCO0FBQ25CO0FBQ0EsRUFBRSxpREFBZTtBQUNqQixJQUFJLDhEQUF3QixHQUFHLDhEQUF3QjtBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQztBQUMzQyxHQUFHLEdBQUc7QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLGdFQUEwQjtBQUM5QixJQUFJLGlEQUFlO0FBQ25CLEdBQUc7QUFDSCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL0NsYXNzZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL0RPTS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvRE9NY3JlYXRlVGFzay5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvRE9NZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvRE9NcmVtb3ZlVGFzay5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgY3VycmVudCA9IHt9O1xyXG5cclxuY2xhc3MgUHJvamVjdCB7XHJcbiAgY29uc3RydWN0b3IobmFtZSkge1xyXG4gICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgIHRoaXMudGFza3MgPSBbXTtcclxuICB9XHJcblxyXG4gIGFkZFRhc2sob2JqZWN0KSB7XHJcbiAgICB0aGlzLnRhc2tzLnB1c2gob2JqZWN0KTtcclxuICB9XHJcbiAgcmVtb3ZlVGFzayhldmVudCkge1xyXG4gICAgdGhpcy50YXNrc1tldmVudC50YXJnZXQuZ2V0QXR0cmlidXRlKFwiZGF0YS1pbmRleFwiKV0gPSBcImhpXCI7XHJcbiAgfVxyXG5cclxuICBnZXRUYXNrcygpIHtcclxuICAgIHJldHVybiB0aGlzLnRhc2tzO1xyXG4gIH1cclxuICBnZXROYW1lKCkge1xyXG4gICAgcmV0dXJuIHRoaXMubmFtZTtcclxuICB9XHJcbn1cclxuXHJcbmNsYXNzIFRhc2sge1xyXG4gIGNvbnN0cnVjdG9yKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkpIHtcclxuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcclxuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcclxuICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XHJcbiAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XHJcbiAgfVxyXG5cclxuICBnZXRUaXRsZSgpIHtcclxuICAgIHJldHVybiB0aGlzLnRpdGxlO1xyXG4gIH1cclxuICBnZXREZXNjcmlwdGlvbigpIHtcclxuICAgIHJldHVybiB0aGlzLmRlc2NyaXB0aW9uO1xyXG4gIH1cclxuICBnZXREdWVEYXRlKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuZHVlRGF0ZTtcclxuICB9XHJcbiAgZ2V0UHJpb3JpdHkoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5wcmlvcml0eTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7IGN1cnJlbnQsIFByb2plY3QsIFRhc2sgfTtcclxuIiwiaW1wb3J0IHsgcmVuZGVyRm9ybSwgdW5yZW5kZXJGb3JtIH0gZnJvbSBcIi4vRE9NZm9ybVwiO1xyXG5pbXBvcnQgeyBjcmVhdGVUYXNrIH0gZnJvbSBcIi4vRE9NY3JlYXRlVGFza1wiO1xyXG5pbXBvcnQgeyByZW1vdmVUYXNrIH0gZnJvbSBcIi4vRE9NcmVtb3ZlVGFza1wiO1xyXG5cclxuY29uc3QgRE9NID0ge1xyXG4gIGZvcm06IHtcclxuICAgIHJlbmRlcjogcmVuZGVyRm9ybSxcclxuICAgIHVucmVuZGVyOiB1bnJlbmRlckZvcm0sXHJcbiAgfSxcclxuICB0YXNrOiB7XHJcbiAgICBjcmVhdGU6IGNyZWF0ZVRhc2ssXHJcbiAgICByZW1vdmU6IHJlbW92ZVRhc2ssXHJcbiAgfSxcclxufTtcclxuXHJcbmV4cG9ydCB7IERPTSB9O1xyXG4iLCJpbXBvcnQgeyBjdXJyZW50IH0gZnJvbSBcIi4vQ2xhc3Nlc1wiO1xyXG5cclxuY29uc3QgbWFpbkRpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpblwiKTtcclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVRhc2sob2JqZWN0KSB7XHJcbiAgY29uc3QgbmV3RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBuZXdEaXYuY2xhc3NMaXN0LmFkZChcInRhc2tcIik7XHJcbiAgbmV3RGl2LmlubmVySFRNTCA9IGBcclxuICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiAvPlxyXG4gICAgPGRpdj5cclxuICAgICAgPGRpdiBpZD1cInRpdGxlXCI+PC9kaXY+XHJcbiAgICAgIDxkaXYgaWQ9XCJkdWVEYXRlXCI+PC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgZGF0YS1pbmRleD1cIiR7Y3VycmVudC5wcm9qZWN0LmdldFRhc2tzKCkubGVuZ3RoIC0gMX1cIj7inJY8L2Rpdj5gO1xyXG5cclxuICBuZXdEaXYucXVlcnlTZWxlY3RvcihcIiN0aXRsZVwiKS50ZXh0Q29udGVudCA9IG9iamVjdC5nZXRUaXRsZSgpO1xyXG4gIG5ld0Rpdi5xdWVyeVNlbGVjdG9yKFwiI2R1ZURhdGVcIikudGV4dENvbnRlbnQgPSBvYmplY3QuZ2V0RHVlRGF0ZSgpO1xyXG5cclxuICBtYWluRGl2Lmluc2VydEJlZm9yZShcclxuICAgIG5ld0RpdixcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpbiA+IGRpdjpsYXN0LWNoaWxkXCIpXHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IHsgY3JlYXRlVGFzayB9O1xyXG4iLCJjb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImZvcm1cIik7XHJcblxyXG5mdW5jdGlvbiByZW5kZXJGb3JtKCkge1xyXG4gIGZvcm0uc3R5bGUudmlzaWJpbGl0eSA9IFwidmlzaWJsZVwiO1xyXG59XHJcbmZ1bmN0aW9uIHVucmVuZGVyRm9ybSgpIHtcclxuICBmb3JtLnN0eWxlLnZpc2liaWxpdHkgPSBcImhpZGRlblwiO1xyXG59XHJcblxyXG5leHBvcnQgeyByZW5kZXJGb3JtLCB1bnJlbmRlckZvcm0gfTtcclxuIiwiaW1wb3J0IHsgY3VycmVudCB9IGZyb20gXCIuL0NsYXNzZXNcIjtcclxuXHJcbmZ1bmN0aW9uIHJlbW92ZVRhc2soZXZlbnQpIHtcclxuICBjb25zdCB0YXNrcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudGFzayA+IGRpdjpsYXN0LWNoaWxkXCIpO1xyXG5cclxuICBmb3IgKGxldCBpID0gMDsgaSA8IHRhc2tzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICBpZiAoXHJcbiAgICAgIHRhc2tzW2ldLmdldEF0dHJpYnV0ZShcImRhdGEtaW5kZXhcIikgPT09XHJcbiAgICAgIGV2ZW50LnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJkYXRhLWluZGV4XCIpXHJcbiAgICApIHtcclxuICAgICAgZG9jdW1lbnRcclxuICAgICAgICAucXVlcnlTZWxlY3RvcihcIi5tYWluXCIpXHJcbiAgICAgICAgLnJlbW92ZUNoaWxkKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudGFza1wiKVtpXSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgeyByZW1vdmVUYXNrIH07XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLyogXHJcbm1ha2UgYSBkZWZhdWx0UHJvamVjdCBwcm9qZWN0IGFuZCBsZXQgdGhlbSBjcmVhdGUgb3RoZXIgcHJvamVjdHMgXHJcblxyXG5tb2R1bGVzOiBjcmVhdGUgbmV3IHRvZG8gaXRlbXMsIHNldCB0b2RvIGl0ZW1zIGFzIGNvbXBsZXRlLCBjaGFuZ2UgdG9kbyBwcmlvcml0eSxcclxuVUk6IHZpZXcgcHJvamVjdHMgd2l0aCB0b2RvcyBpbnNpZGUsIGV4cGVuZCBlYWNoIHRvZG8sIGRlbGV0ZSBhIHRvZG9cclxuV2hlbiBjbGlja2luZyBlYWNoIHByb2plY3QgaXQgcmVtb3ZlcyB0aGUgY3VycmVudCBwcm9qZWN0IFVJIFxyXG5hbmQgcHV0cyB0aGUgbmV3IG9uZVxyXG5cclxuY2xpY2sgYWRkIHRhc2ssIGZvcm0gcG9wcyB1cCwgdGFrZSBmb3JtIGFuc3dlcnMgYW5kIHB1dCBpdCBpbnRvIGEgbmV3IFRhc2ssXHJcbiB3aGljaCBpcyBzYXZlZCB0byBwcm9qZWN0LCB1c2UgaXQgYWRkIHRvIERPTVxyXG5cclxuIGFkZCB4IGJ1dHRvbiB0byBmb3JtXHJcblxyXG4gYWRkIGNvbG9ycyBmb3IgdGFza3MgYmFzZWQgb24gcHJpb3JpdHlcclxuKi9cclxuXHJcbmltcG9ydCB7IERPTSB9IGZyb20gXCIuL0RPTVwiO1xyXG5pbXBvcnQgeyBjdXJyZW50LCBQcm9qZWN0LCBUYXNrIH0gZnJvbSBcIi4vQ2xhc3Nlc1wiO1xyXG5cclxubGV0IGRlZmF1bHRQcm9qZWN0ID0gbmV3IFByb2plY3QoXCJEZWZhdWx0XCIpO1xyXG5jdXJyZW50LnByb2plY3QgPSBkZWZhdWx0UHJvamVjdDtcclxuXHJcbi8vIG9uIFwiQWRkIHRhc2tcIiBjbGlja1xyXG4vLyBzaG93cyBmb3JtXHJcbmRvY3VtZW50XHJcbiAgLnF1ZXJ5U2VsZWN0b3IoXCIubWFpbiA+IGRpdjpsYXN0LWNoaWxkXCIpXHJcbiAgLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICBET00uZm9ybS5yZW5kZXIoKTtcclxuICB9KTtcclxuXHJcbi8vIG9uIHN1Ym1pdCBmb3JtIGNsaWNrXHJcbi8vIGNvbnZlcnRzIGZvcm0gaW5wdXRzIGludG8gYSB0YXNrIGluc2lkZSB0aGUgY3VycmVudCBwcm9qZWN0LCB0aGVuIGdldHMgcmlkIG9mIHRoZSBtZW51LCB0aGVuIGFkZHMgdGhlIHRhc2sgaW4gdGhlIFVJXHJcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJmb3JtIGJ1dHRvblwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcclxuICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gIGN1cnJlbnQucHJvamVjdC5hZGRUYXNrKFxyXG4gICAgbmV3IFRhc2soXHJcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJmb3JtICN0aXRsZVwiKS52YWx1ZSxcclxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImZvcm0gI2Rlc2NcIikudmFsdWUsXHJcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJmb3JtICNkdWVEYXRlXCIpLnZhbHVlLFxyXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiZm9ybSAjcHJpb3JpdHlcIikudmFsdWVcclxuICAgIClcclxuICApO1xyXG5cclxuICBET00uZm9ybS51bnJlbmRlcigpO1xyXG5cclxuICBET00udGFzay5jcmVhdGUoXHJcbiAgICBjdXJyZW50LnByb2plY3QuZ2V0VGFza3MoKVtjdXJyZW50LnByb2plY3QuZ2V0VGFza3MoKS5sZW5ndGggLSAxXVxyXG4gICk7XHJcblxyXG4gIC8qIGV4cGFuZHMgdGFza3Mgb24gY2xpY2sgLSBOT1QgRklOSVNIRURcclxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnRhc2tcIikuZm9yRWFjaCgodGFzaykgPT4ge1xyXG4gICAgdGFzay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge30pO1xyXG4gIH0pOyAqL1xyXG5cclxuICAvLyByZW1vdmVzIHRhc2sgb24gY2xpY2tcclxuICBjb25zdCB0YXNrcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudGFzayA+IGRpdjpsYXN0LWNoaWxkXCIpO1xyXG5cclxuICB0YXNrc1t0YXNrcy5sZW5ndGggLSAxXS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XHJcbiAgICAvLyBhZGRzIGV2ZW50IGxpc3RlbmVyIHRvIG5ld2x5IGNyZWF0ZWQgdGFza1xyXG4gICAgY3VycmVudC5wcm9qZWN0LnJlbW92ZVRhc2soZXZlbnQpO1xyXG4gICAgRE9NLnRhc2sucmVtb3ZlKGV2ZW50KTtcclxuICB9KTtcclxufSk7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==