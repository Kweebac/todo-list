/* make a defaultProject project and let them create other projects 

modules: create new todo items, set todo items as complete, change todo priority,
UI: view projects with todos inside, expend each todo, delete a todo
When clicking each project it removes the current project UI 
and puts the new one

click add task, form pops up, take form answers and put it into a new Task,
which is saved to project, use it add to DOM

add colors for tasks based on priority */

import { DOM } from "./DOM";
import { current, Project, Task } from "./Classes";

let defaultProject = new Project("Default");
current.project = defaultProject;

// on Add task click
// shows form
document.querySelector(".main > div:last-child").addEventListener("click", () => {
  DOM.form.render();
  document.querySelector("input[type=text]").focus();
});

// on Form ✖ click
// hides form
document.querySelector("form > div:first-child").addEventListener("click", DOM.form.unrender);

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

  DOM.task.create(current.project.getTasks()[current.project.getTasks().length - 1]);

  // expands tasks on click
  const tasks = document.querySelectorAll(".task");
  let extended = false;

  tasks[tasks.length - 1].addEventListener("click", (event) => {
    if (extended === false) {
      DOM.task.change.extend(event);
      extended = true;
    } else {
      DOM.task.change.unextend(event);
      extended = false;
    }
  });

  // on Task ✖ click
  // removes task
  const tasksXButton = document.querySelectorAll(".task > div:last-child");

  tasksXButton[tasksXButton.length - 1].addEventListener("click", (event) => {
    event.stopPropagation();

    DOM.task.remove(event);
    current.project.removeTask(event);
  });

  // on Checkbox click
  // removes task
  const checkboxButtons = document.querySelectorAll(".task > input[type=checkbox]");

  checkboxButtons[checkboxButtons.length - 1].addEventListener("click", (event) => {
    event.stopPropagation();

    DOM.task.remove(event);
    current.project.removeTask(event);
  });
});
