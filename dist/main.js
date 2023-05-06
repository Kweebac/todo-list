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

  getTasks() {
    return this.tasks;
  }
  getName() {
    return this.name;
  }

  static getCurrentProject() {
    console.log("hi");
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
    <div>✖</div>`;

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


function removeTask(object) {
  // replace with getCurrentProject function
  console.log(_Classes__WEBPACK_IMPORTED_MODULE_0__.current.project.getTasks());
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
*/




let defaultProject = new _Classes__WEBPACK_IMPORTED_MODULE_1__.Project("Default");
_Classes__WEBPACK_IMPORTED_MODULE_1__.current.project = defaultProject;

// shows form when clicking "Add task"
document
  .querySelector(".main > div:last-child")
  .addEventListener("click", () => {
    _DOM__WEBPACK_IMPORTED_MODULE_0__.DOM.form.render();
  });

// converts form inputs into a task inside the current project, then gets rid of the menu,
// then adds the task in the UI
document.querySelector("form button").addEventListener("click", (e) => {
  e.preventDefault();

  // replace with a getCurrentProject function
  _Classes__WEBPACK_IMPORTED_MODULE_1__.current.project.addTask(
    new _Classes__WEBPACK_IMPORTED_MODULE_1__.Task(
      document.querySelector("form #title").value,
      document.querySelector("form #desc").value,
      document.querySelector("form #dueDate").value,
      document.querySelector("form #priority").value
    )
  );

  _DOM__WEBPACK_IMPORTED_MODULE_0__.DOM.form.unrender();

  // replace with a getCurrentProject function
  _DOM__WEBPACK_IMPORTED_MODULE_0__.DOM.task.create(
    _Classes__WEBPACK_IMPORTED_MODULE_1__.current.project.getTasks()[_Classes__WEBPACK_IMPORTED_MODULE_1__.current.project.getTasks().length - 1]
  );
});

/* THESE 2 DONT WORK, NEED NEW EVENT LISTENERS EVERYTIME YOU CREATE A TASK 
ADD THESE EVENT LISTENERS ON TASK CREATE*/
// expands tasks on click - NOT FINISHED
document.querySelectorAll(".task").forEach((task) => {
  task.addEventListener("click", () => {});
});

// removes task on click - NOT FINISHED
document.querySelectorAll(".task > div:last-child").forEach((remove) => {
  remove.addEventListener("click", () => {});
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDa0M7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzlDbUI7QUFDUjtBQUNBO0FBQzdDO0FBQ0E7QUFDQTtBQUNBLFlBQVksZ0RBQVU7QUFDdEIsY0FBYyxrREFBWTtBQUMxQixHQUFHO0FBQ0g7QUFDQSxZQUFZLHNEQUFVO0FBQ3RCLFlBQVksc0RBQVU7QUFDdEIsR0FBRztBQUNIO0FBQ0E7QUFDZTs7Ozs7Ozs7Ozs7Ozs7O0FDZmY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDc0I7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0QnRCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNvQzs7Ozs7Ozs7Ozs7Ozs7OztBQ1RBO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBLGNBQWMsOERBQXdCO0FBQ3RDO0FBQ0E7QUFDc0I7Ozs7Ozs7VUNQdEI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQzRCO0FBQ3VCO0FBQ25EO0FBQ0EseUJBQXlCLDZDQUFPO0FBQ2hDLHFEQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksaURBQWU7QUFDbkIsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSw2REFBdUI7QUFDekIsUUFBUSwwQ0FBSTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSxtREFBaUI7QUFDbkI7QUFDQTtBQUNBLEVBQUUsaURBQWU7QUFDakIsSUFBSSw4REFBd0IsR0FBRyw4REFBd0I7QUFDdkQ7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlDQUF5QztBQUN6QyxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDO0FBQzNDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvQ2xhc3Nlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvRE9NLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9ET01jcmVhdGVUYXNrLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9ET01mb3JtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9ET01yZW1vdmVUYXNrLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBjdXJyZW50ID0ge307XHJcblxyXG5jbGFzcyBQcm9qZWN0IHtcclxuICBjb25zdHJ1Y3RvcihuYW1lKSB7XHJcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgdGhpcy50YXNrcyA9IFtdO1xyXG4gIH1cclxuXHJcbiAgYWRkVGFzayhvYmplY3QpIHtcclxuICAgIHRoaXMudGFza3MucHVzaChvYmplY3QpO1xyXG4gIH1cclxuXHJcbiAgZ2V0VGFza3MoKSB7XHJcbiAgICByZXR1cm4gdGhpcy50YXNrcztcclxuICB9XHJcbiAgZ2V0TmFtZSgpIHtcclxuICAgIHJldHVybiB0aGlzLm5hbWU7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgZ2V0Q3VycmVudFByb2plY3QoKSB7XHJcbiAgICBjb25zb2xlLmxvZyhcImhpXCIpO1xyXG4gIH1cclxufVxyXG5cclxuY2xhc3MgVGFzayB7XHJcbiAgY29uc3RydWN0b3IodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSkge1xyXG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xyXG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xyXG4gICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcclxuICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcclxuICB9XHJcblxyXG4gIGdldFRpdGxlKCkge1xyXG4gICAgcmV0dXJuIHRoaXMudGl0bGU7XHJcbiAgfVxyXG4gIGdldERlc2NyaXB0aW9uKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuZGVzY3JpcHRpb247XHJcbiAgfVxyXG4gIGdldER1ZURhdGUoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5kdWVEYXRlO1xyXG4gIH1cclxuICBnZXRQcmlvcml0eSgpIHtcclxuICAgIHJldHVybiB0aGlzLnByaW9yaXR5O1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IHsgY3VycmVudCwgUHJvamVjdCwgVGFzayB9O1xyXG4iLCJpbXBvcnQgeyByZW5kZXJGb3JtLCB1bnJlbmRlckZvcm0gfSBmcm9tIFwiLi9ET01mb3JtXCI7XHJcbmltcG9ydCB7IGNyZWF0ZVRhc2sgfSBmcm9tIFwiLi9ET01jcmVhdGVUYXNrXCI7XHJcbmltcG9ydCB7IHJlbW92ZVRhc2sgfSBmcm9tIFwiLi9ET01yZW1vdmVUYXNrXCI7XHJcblxyXG5jb25zdCBET00gPSB7XHJcbiAgZm9ybToge1xyXG4gICAgcmVuZGVyOiByZW5kZXJGb3JtLFxyXG4gICAgdW5yZW5kZXI6IHVucmVuZGVyRm9ybSxcclxuICB9LFxyXG4gIHRhc2s6IHtcclxuICAgIGNyZWF0ZTogY3JlYXRlVGFzayxcclxuICAgIHJlbW92ZTogcmVtb3ZlVGFzayxcclxuICB9LFxyXG59O1xyXG5cclxuZXhwb3J0IHsgRE9NIH07XHJcbiIsImNvbnN0IG1haW5EaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW5cIik7XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVUYXNrKG9iamVjdCkge1xyXG4gIGNvbnN0IG5ld0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgbmV3RGl2LmNsYXNzTGlzdC5hZGQoXCJ0YXNrXCIpO1xyXG4gIG5ld0Rpdi5pbm5lckhUTUwgPSBgXHJcbiAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgLz5cclxuICAgIDxkaXY+XHJcbiAgICAgIDxkaXYgaWQ9XCJ0aXRsZVwiPjwvZGl2PlxyXG4gICAgICA8ZGl2IGlkPVwiZHVlRGF0ZVwiPjwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2PuKcljwvZGl2PmA7XHJcblxyXG4gIG5ld0Rpdi5xdWVyeVNlbGVjdG9yKFwiI3RpdGxlXCIpLnRleHRDb250ZW50ID0gb2JqZWN0LmdldFRpdGxlKCk7XHJcbiAgbmV3RGl2LnF1ZXJ5U2VsZWN0b3IoXCIjZHVlRGF0ZVwiKS50ZXh0Q29udGVudCA9IG9iamVjdC5nZXREdWVEYXRlKCk7XHJcblxyXG4gIG1haW5EaXYuaW5zZXJ0QmVmb3JlKFxyXG4gICAgbmV3RGl2LFxyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluID4gZGl2Omxhc3QtY2hpbGRcIilcclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgeyBjcmVhdGVUYXNrIH07XHJcbiIsImNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiZm9ybVwiKTtcclxuXHJcbmZ1bmN0aW9uIHJlbmRlckZvcm0oKSB7XHJcbiAgZm9ybS5zdHlsZS52aXNpYmlsaXR5ID0gXCJ2aXNpYmxlXCI7XHJcbn1cclxuZnVuY3Rpb24gdW5yZW5kZXJGb3JtKCkge1xyXG4gIGZvcm0uc3R5bGUudmlzaWJpbGl0eSA9IFwiaGlkZGVuXCI7XHJcbn1cclxuXHJcbmV4cG9ydCB7IHJlbmRlckZvcm0sIHVucmVuZGVyRm9ybSB9O1xyXG4iLCJpbXBvcnQgeyBjdXJyZW50IH0gZnJvbSBcIi4vQ2xhc3Nlc1wiO1xyXG5cclxuZnVuY3Rpb24gcmVtb3ZlVGFzayhvYmplY3QpIHtcclxuICAvLyByZXBsYWNlIHdpdGggZ2V0Q3VycmVudFByb2plY3QgZnVuY3Rpb25cclxuICBjb25zb2xlLmxvZyhjdXJyZW50LnByb2plY3QuZ2V0VGFza3MoKSk7XHJcbn1cclxuXHJcbmV4cG9ydCB7IHJlbW92ZVRhc2sgfTtcclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvKiBcclxubWFrZSBhIGRlZmF1bHRQcm9qZWN0IHByb2plY3QgYW5kIGxldCB0aGVtIGNyZWF0ZSBvdGhlciBwcm9qZWN0cyBcclxuXHJcbm1vZHVsZXM6IGNyZWF0ZSBuZXcgdG9kbyBpdGVtcywgc2V0IHRvZG8gaXRlbXMgYXMgY29tcGxldGUsIGNoYW5nZSB0b2RvIHByaW9yaXR5LFxyXG5VSTogdmlldyBwcm9qZWN0cyB3aXRoIHRvZG9zIGluc2lkZSwgZXhwZW5kIGVhY2ggdG9kbywgZGVsZXRlIGEgdG9kb1xyXG5XaGVuIGNsaWNraW5nIGVhY2ggcHJvamVjdCBpdCByZW1vdmVzIHRoZSBjdXJyZW50IHByb2plY3QgVUkgXHJcbmFuZCBwdXRzIHRoZSBuZXcgb25lXHJcblxyXG5jbGljayBhZGQgdGFzaywgZm9ybSBwb3BzIHVwLCB0YWtlIGZvcm0gYW5zd2VycyBhbmQgcHV0IGl0IGludG8gYSBuZXcgVGFzayxcclxuIHdoaWNoIGlzIHNhdmVkIHRvIHByb2plY3QsIHVzZSBpdCBhZGQgdG8gRE9NXHJcblxyXG4gYWRkIHggYnV0dG9uIHRvIGZvcm1cclxuKi9cclxuXHJcbmltcG9ydCB7IERPTSB9IGZyb20gXCIuL0RPTVwiO1xyXG5pbXBvcnQgeyBjdXJyZW50LCBQcm9qZWN0LCBUYXNrIH0gZnJvbSBcIi4vQ2xhc3Nlc1wiO1xyXG5cclxubGV0IGRlZmF1bHRQcm9qZWN0ID0gbmV3IFByb2plY3QoXCJEZWZhdWx0XCIpO1xyXG5jdXJyZW50LnByb2plY3QgPSBkZWZhdWx0UHJvamVjdDtcclxuXHJcbi8vIHNob3dzIGZvcm0gd2hlbiBjbGlja2luZyBcIkFkZCB0YXNrXCJcclxuZG9jdW1lbnRcclxuICAucXVlcnlTZWxlY3RvcihcIi5tYWluID4gZGl2Omxhc3QtY2hpbGRcIilcclxuICAuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgIERPTS5mb3JtLnJlbmRlcigpO1xyXG4gIH0pO1xyXG5cclxuLy8gY29udmVydHMgZm9ybSBpbnB1dHMgaW50byBhIHRhc2sgaW5zaWRlIHRoZSBjdXJyZW50IHByb2plY3QsIHRoZW4gZ2V0cyByaWQgb2YgdGhlIG1lbnUsXHJcbi8vIHRoZW4gYWRkcyB0aGUgdGFzayBpbiB0aGUgVUlcclxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImZvcm0gYnV0dG9uXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xyXG4gIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgLy8gcmVwbGFjZSB3aXRoIGEgZ2V0Q3VycmVudFByb2plY3QgZnVuY3Rpb25cclxuICBjdXJyZW50LnByb2plY3QuYWRkVGFzayhcclxuICAgIG5ldyBUYXNrKFxyXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiZm9ybSAjdGl0bGVcIikudmFsdWUsXHJcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJmb3JtICNkZXNjXCIpLnZhbHVlLFxyXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiZm9ybSAjZHVlRGF0ZVwiKS52YWx1ZSxcclxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImZvcm0gI3ByaW9yaXR5XCIpLnZhbHVlXHJcbiAgICApXHJcbiAgKTtcclxuXHJcbiAgRE9NLmZvcm0udW5yZW5kZXIoKTtcclxuXHJcbiAgLy8gcmVwbGFjZSB3aXRoIGEgZ2V0Q3VycmVudFByb2plY3QgZnVuY3Rpb25cclxuICBET00udGFzay5jcmVhdGUoXHJcbiAgICBjdXJyZW50LnByb2plY3QuZ2V0VGFza3MoKVtjdXJyZW50LnByb2plY3QuZ2V0VGFza3MoKS5sZW5ndGggLSAxXVxyXG4gICk7XHJcbn0pO1xyXG5cclxuLyogVEhFU0UgMiBET05UIFdPUkssIE5FRUQgTkVXIEVWRU5UIExJU1RFTkVSUyBFVkVSWVRJTUUgWU9VIENSRUFURSBBIFRBU0sgXHJcbkFERCBUSEVTRSBFVkVOVCBMSVNURU5FUlMgT04gVEFTSyBDUkVBVEUqL1xyXG4vLyBleHBhbmRzIHRhc2tzIG9uIGNsaWNrIC0gTk9UIEZJTklTSEVEXHJcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudGFza1wiKS5mb3JFYWNoKCh0YXNrKSA9PiB7XHJcbiAgdGFzay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge30pO1xyXG59KTtcclxuXHJcbi8vIHJlbW92ZXMgdGFzayBvbiBjbGljayAtIE5PVCBGSU5JU0hFRFxyXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnRhc2sgPiBkaXY6bGFzdC1jaGlsZFwiKS5mb3JFYWNoKChyZW1vdmUpID0+IHtcclxuICByZW1vdmUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHt9KTtcclxufSk7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==