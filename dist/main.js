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
    show: _DOMform__WEBPACK_IMPORTED_MODULE_0__.showForm,
    hide: _DOMform__WEBPACK_IMPORTED_MODULE_0__.hideForm,
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
/* harmony export */   "hideForm": () => (/* binding */ hideForm),
/* harmony export */   "showForm": () => (/* binding */ showForm)
/* harmony export */ });
const form = document.querySelector("form");

function showForm() {
  form.style.visibility = "visible";
}
function hideForm() {
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
function removeTask(object) {
  // replace with getCurrentProject function
  console.log(defaultProject.getTasks());
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
*/




let defaultProject = new _Classes__WEBPACK_IMPORTED_MODULE_1__.Project("Default");

// shows form when clicking "Add task"
document
  .querySelector(".main > div:last-child")
  .addEventListener("click", () => {
    _DOM__WEBPACK_IMPORTED_MODULE_0__.DOM.form.show();
  });

// converts form inputs into a task inside the current project, then gets rid of the menu,
// then adds the task in the UI
document.querySelector("form button").addEventListener("click", (e) => {
  e.preventDefault();

  // replace with a getCurrentProject function
  defaultProject.addTask(
    new _Classes__WEBPACK_IMPORTED_MODULE_1__.Task(
      document.querySelector("form #title").value,
      document.querySelector("form #desc").value,
      document.querySelector("form #dueDate").value,
      document.querySelector("form #priority").value
    )
  );

  _DOM__WEBPACK_IMPORTED_MODULE_0__.DOM.form.hide();

  // replace with a getCurrentProject function
  _DOM__WEBPACK_IMPORTED_MODULE_0__.DOM.task.create(
    defaultProject.getTasks()[defaultProject.getTasks().length - 1]
  );
});

/* THESE 2 DONT WORK, NEED NEW EVENT LISTENERS EVERYTIME YOU CREATE A TASK */
// expands tasks on click - NOT FINISHED
document.querySelectorAll(".task").forEach((task) => {
  task.addEventListener("click", () => {});
});

// removes task on click - NOT FINISHED
document.querySelectorAll(".task > div:last-child").forEach((remove) => {
  remove.addEventListener("click", () => {});
});

_DOM__WEBPACK_IMPORTED_MODULE_0__.DOM.task.remove();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUN5Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeENzQjtBQUNGO0FBQ0E7QUFDN0M7QUFDQTtBQUNBO0FBQ0EsVUFBVSw4Q0FBUTtBQUNsQixVQUFVLDhDQUFRO0FBQ2xCLEdBQUc7QUFDSDtBQUNBLFlBQVksc0RBQVU7QUFDdEIsWUFBWSxzREFBVTtBQUN0QixHQUFHO0FBQ0g7QUFDQTtBQUNlOzs7Ozs7Ozs7Ozs7Ozs7QUNmZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNzQjs7Ozs7Ozs7Ozs7Ozs7OztBQ3RCdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQzhCOzs7Ozs7Ozs7Ozs7Ozs7QUNUOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNzQjs7Ozs7OztVQ0x0QjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUM0QjtBQUNjO0FBQzFDO0FBQ0EseUJBQXlCLDZDQUFPO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLCtDQUFhO0FBQ2pCLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSwwQ0FBSTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSwrQ0FBYTtBQUNmO0FBQ0E7QUFDQSxFQUFFLGlEQUFlO0FBQ2pCO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUM7QUFDekMsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQztBQUMzQyxDQUFDO0FBQ0Q7QUFDQSxpREFBZSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9DbGFzc2VzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9ET00uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL0RPTWNyZWF0ZVRhc2suanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL0RPTWZvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL0RPTXJlbW92ZVRhc2suanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNsYXNzIFByb2plY3Qge1xyXG4gIGNvbnN0cnVjdG9yKG5hbWUpIHtcclxuICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICB0aGlzLnRhc2tzID0gW107XHJcbiAgfVxyXG5cclxuICBhZGRUYXNrKG9iamVjdCkge1xyXG4gICAgdGhpcy50YXNrcy5wdXNoKG9iamVjdCk7XHJcbiAgfVxyXG5cclxuICBnZXRUYXNrcygpIHtcclxuICAgIHJldHVybiB0aGlzLnRhc2tzO1xyXG4gIH1cclxuICBnZXROYW1lKCkge1xyXG4gICAgcmV0dXJuIHRoaXMubmFtZTtcclxuICB9XHJcbn1cclxuXHJcbmNsYXNzIFRhc2sge1xyXG4gIGNvbnN0cnVjdG9yKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkpIHtcclxuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcclxuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcclxuICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XHJcbiAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XHJcbiAgfVxyXG5cclxuICBnZXRUaXRsZSgpIHtcclxuICAgIHJldHVybiB0aGlzLnRpdGxlO1xyXG4gIH1cclxuICBnZXREZXNjcmlwdGlvbigpIHtcclxuICAgIHJldHVybiB0aGlzLmRlc2NyaXB0aW9uO1xyXG4gIH1cclxuICBnZXREdWVEYXRlKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuZHVlRGF0ZTtcclxuICB9XHJcbiAgZ2V0UHJpb3JpdHkoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5wcmlvcml0eTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7IFByb2plY3QsIFRhc2sgfTtcclxuIiwiaW1wb3J0IHsgc2hvd0Zvcm0sIGhpZGVGb3JtIH0gZnJvbSBcIi4vRE9NZm9ybVwiO1xyXG5pbXBvcnQgeyBjcmVhdGVUYXNrIH0gZnJvbSBcIi4vRE9NY3JlYXRlVGFza1wiO1xyXG5pbXBvcnQgeyByZW1vdmVUYXNrIH0gZnJvbSBcIi4vRE9NcmVtb3ZlVGFza1wiO1xyXG5cclxuY29uc3QgRE9NID0ge1xyXG4gIGZvcm06IHtcclxuICAgIHNob3c6IHNob3dGb3JtLFxyXG4gICAgaGlkZTogaGlkZUZvcm0sXHJcbiAgfSxcclxuICB0YXNrOiB7XHJcbiAgICBjcmVhdGU6IGNyZWF0ZVRhc2ssXHJcbiAgICByZW1vdmU6IHJlbW92ZVRhc2ssXHJcbiAgfSxcclxufTtcclxuXHJcbmV4cG9ydCB7IERPTSB9O1xyXG4iLCJjb25zdCBtYWluRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluXCIpO1xyXG5cclxuZnVuY3Rpb24gY3JlYXRlVGFzayhvYmplY3QpIHtcclxuICBjb25zdCBuZXdEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIG5ld0Rpdi5jbGFzc0xpc3QuYWRkKFwidGFza1wiKTtcclxuICBuZXdEaXYuaW5uZXJIVE1MID0gYFxyXG4gICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIC8+XHJcbiAgICA8ZGl2PlxyXG4gICAgICA8ZGl2IGlkPVwidGl0bGVcIj48L2Rpdj5cclxuICAgICAgPGRpdiBpZD1cImR1ZURhdGVcIj48L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdj7inJY8L2Rpdj5gO1xyXG5cclxuICBuZXdEaXYucXVlcnlTZWxlY3RvcihcIiN0aXRsZVwiKS50ZXh0Q29udGVudCA9IG9iamVjdC5nZXRUaXRsZSgpO1xyXG4gIG5ld0Rpdi5xdWVyeVNlbGVjdG9yKFwiI2R1ZURhdGVcIikudGV4dENvbnRlbnQgPSBvYmplY3QuZ2V0RHVlRGF0ZSgpO1xyXG5cclxuICBtYWluRGl2Lmluc2VydEJlZm9yZShcclxuICAgIG5ld0RpdixcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpbiA+IGRpdjpsYXN0LWNoaWxkXCIpXHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IHsgY3JlYXRlVGFzayB9O1xyXG4iLCJjb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImZvcm1cIik7XHJcblxyXG5mdW5jdGlvbiBzaG93Rm9ybSgpIHtcclxuICBmb3JtLnN0eWxlLnZpc2liaWxpdHkgPSBcInZpc2libGVcIjtcclxufVxyXG5mdW5jdGlvbiBoaWRlRm9ybSgpIHtcclxuICBmb3JtLnN0eWxlLnZpc2liaWxpdHkgPSBcImhpZGRlblwiO1xyXG59XHJcblxyXG5leHBvcnQgeyBzaG93Rm9ybSwgaGlkZUZvcm0gfTtcclxuIiwiZnVuY3Rpb24gcmVtb3ZlVGFzayhvYmplY3QpIHtcclxuICAvLyByZXBsYWNlIHdpdGggZ2V0Q3VycmVudFByb2plY3QgZnVuY3Rpb25cclxuICBjb25zb2xlLmxvZyhkZWZhdWx0UHJvamVjdC5nZXRUYXNrcygpKTtcclxufVxyXG5cclxuZXhwb3J0IHsgcmVtb3ZlVGFzayB9O1xyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8qIFxyXG5tYWtlIGEgZGVmYXVsdFByb2plY3QgcHJvamVjdCBhbmQgbGV0IHRoZW0gY3JlYXRlIG90aGVyIHByb2plY3RzIFxyXG5cclxubW9kdWxlczogY3JlYXRlIG5ldyB0b2RvIGl0ZW1zLCBzZXQgdG9kbyBpdGVtcyBhcyBjb21wbGV0ZSwgY2hhbmdlIHRvZG8gcHJpb3JpdHksXHJcblVJOiB2aWV3IHByb2plY3RzIHdpdGggdG9kb3MgaW5zaWRlLCBleHBlbmQgZWFjaCB0b2RvLCBkZWxldGUgYSB0b2RvXHJcbldoZW4gY2xpY2tpbmcgZWFjaCBwcm9qZWN0IGl0IHJlbW92ZXMgdGhlIGN1cnJlbnQgcHJvamVjdCBVSSBcclxuYW5kIHB1dHMgdGhlIG5ldyBvbmVcclxuXHJcbmNsaWNrIGFkZCB0YXNrLCBmb3JtIHBvcHMgdXAsIHRha2UgZm9ybSBhbnN3ZXJzIGFuZCBwdXQgaXQgaW50byBhIG5ldyBUYXNrLFxyXG4gd2hpY2ggaXMgc2F2ZWQgdG8gcHJvamVjdCwgdXNlIGl0IGFkZCB0byBET01cclxuKi9cclxuXHJcbmltcG9ydCB7IERPTSB9IGZyb20gXCIuL0RPTVwiO1xyXG5pbXBvcnQgeyBQcm9qZWN0LCBUYXNrIH0gZnJvbSBcIi4vQ2xhc3Nlc1wiO1xyXG5cclxubGV0IGRlZmF1bHRQcm9qZWN0ID0gbmV3IFByb2plY3QoXCJEZWZhdWx0XCIpO1xyXG5cclxuLy8gc2hvd3MgZm9ybSB3aGVuIGNsaWNraW5nIFwiQWRkIHRhc2tcIlxyXG5kb2N1bWVudFxyXG4gIC5xdWVyeVNlbGVjdG9yKFwiLm1haW4gPiBkaXY6bGFzdC1jaGlsZFwiKVxyXG4gIC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgRE9NLmZvcm0uc2hvdygpO1xyXG4gIH0pO1xyXG5cclxuLy8gY29udmVydHMgZm9ybSBpbnB1dHMgaW50byBhIHRhc2sgaW5zaWRlIHRoZSBjdXJyZW50IHByb2plY3QsIHRoZW4gZ2V0cyByaWQgb2YgdGhlIG1lbnUsXHJcbi8vIHRoZW4gYWRkcyB0aGUgdGFzayBpbiB0aGUgVUlcclxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImZvcm0gYnV0dG9uXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xyXG4gIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgLy8gcmVwbGFjZSB3aXRoIGEgZ2V0Q3VycmVudFByb2plY3QgZnVuY3Rpb25cclxuICBkZWZhdWx0UHJvamVjdC5hZGRUYXNrKFxyXG4gICAgbmV3IFRhc2soXHJcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJmb3JtICN0aXRsZVwiKS52YWx1ZSxcclxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImZvcm0gI2Rlc2NcIikudmFsdWUsXHJcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJmb3JtICNkdWVEYXRlXCIpLnZhbHVlLFxyXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiZm9ybSAjcHJpb3JpdHlcIikudmFsdWVcclxuICAgIClcclxuICApO1xyXG5cclxuICBET00uZm9ybS5oaWRlKCk7XHJcblxyXG4gIC8vIHJlcGxhY2Ugd2l0aCBhIGdldEN1cnJlbnRQcm9qZWN0IGZ1bmN0aW9uXHJcbiAgRE9NLnRhc2suY3JlYXRlKFxyXG4gICAgZGVmYXVsdFByb2plY3QuZ2V0VGFza3MoKVtkZWZhdWx0UHJvamVjdC5nZXRUYXNrcygpLmxlbmd0aCAtIDFdXHJcbiAgKTtcclxufSk7XHJcblxyXG4vKiBUSEVTRSAyIERPTlQgV09SSywgTkVFRCBORVcgRVZFTlQgTElTVEVORVJTIEVWRVJZVElNRSBZT1UgQ1JFQVRFIEEgVEFTSyAqL1xyXG4vLyBleHBhbmRzIHRhc2tzIG9uIGNsaWNrIC0gTk9UIEZJTklTSEVEXHJcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudGFza1wiKS5mb3JFYWNoKCh0YXNrKSA9PiB7XHJcbiAgdGFzay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge30pO1xyXG59KTtcclxuXHJcbi8vIHJlbW92ZXMgdGFzayBvbiBjbGljayAtIE5PVCBGSU5JU0hFRFxyXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnRhc2sgPiBkaXY6bGFzdC1jaGlsZFwiKS5mb3JFYWNoKChyZW1vdmUpID0+IHtcclxuICByZW1vdmUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHt9KTtcclxufSk7XHJcblxyXG5ET00udGFzay5yZW1vdmUoKTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9