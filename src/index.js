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

import { DOM } from "./DOM";
import { current, Project, Task } from "./Classes";

let defaultProject = new Project("Default");
current.project = defaultProject;

// on "Add task" click
// shows form
document
  .querySelector(".main > div:last-child")
  .addEventListener("click", () => {
    DOM.form.render();
  });

// on submit form click
// converts form inputs into a task inside the current project, then gets rid of the menu, then adds the task in the UI
document.querySelector("form button").addEventListener("click", (e) => {
  e.preventDefault();

  current.project.addTask(
    new Task(
      document.querySelector("form #title").value,
      document.querySelector("form #desc").value,
      document.querySelector("form #dueDate").value,
      document.querySelector("form #priority").value
    )
  );

  DOM.form.unrender();

  DOM.task.create(
    current.project.getTasks()[current.project.getTasks().length - 1]
  );

  /* expands tasks on click - NOT FINISHED
  document.querySelectorAll(".task").forEach((task) => {
    task.addEventListener("click", () => {});
  }); */

  // removes task on click
  const tasks = document.querySelectorAll(".task > div:last-child");

  tasks[tasks.length - 1].addEventListener("click", (event) => {
    // adds event listener to newly created task
    current.project.removeTask(event);
    DOM.task.remove(event);
  });
});
