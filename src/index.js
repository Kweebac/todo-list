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

import { DOM } from "./DOM";
import { current, Project, Task } from "./Classes";

let defaultProject = new Project("Default");
current.project = defaultProject;

// shows form when clicking "Add task"
document
  .querySelector(".main > div:last-child")
  .addEventListener("click", () => {
    DOM.form.render();
  });

// converts form inputs into a task inside the current project, then gets rid of the menu,
// then adds the task in the UI
document.querySelector("form button").addEventListener("click", (e) => {
  e.preventDefault();

  // replace with a getCurrentProject function
  current.project.addTask(
    new Task(
      document.querySelector("form #title").value,
      document.querySelector("form #desc").value,
      document.querySelector("form #dueDate").value,
      document.querySelector("form #priority").value
    )
  );

  DOM.form.unrender();

  // replace with a getCurrentProject function
  DOM.task.create(
    current.project.getTasks()[current.project.getTasks().length - 1]
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
