/* make a defaultProject project and let them create other projects 

modules: create new todo items, set todo items as complete, change todo priority,
UI: view projects with todos inside, expend each todo, delete a todo
When clicking each project it removes the current project UI 
and puts the new one 

when you click on a new project make it the currentProject*/

import { DOM } from "./DOM";
import { current, Project, Task } from "./Classes";

// on Add task click
// shows form
document.querySelector(".main > div:last-child").addEventListener("click", () => {
  DOM.form.renderForm();
});

// on Form ✖ click
// hides form
document
  .querySelector("form > div:first-child")
  .addEventListener("click", DOM.form.unrenderForm);

// on submit form click
// converts form inputs into a task inside the current project, then gets rid of the menu, then adds the task in the UI
document.querySelector("form button").addEventListener("click", (e) => {
  if (document.querySelector("form #title").value === "") return;
  e.preventDefault();

  Project.currentProject.addTask(
    new Task(
      document.querySelector("form #title").value,
      document.querySelector("form #desc").value,
      document.querySelector("form #dueDate").value,
      document.querySelector("form #priority").value
    )
  );

  DOM.form.unrenderForm();

  DOM.task.create(
    Project.currentProject.getTasks()[Project.currentProject.getTasks().length - 1]
  );

  // expands tasks on click
  const tasks = document.querySelectorAll(".task");
  let extended = false;

  tasks[tasks.length - 1].addEventListener("click", (event) => {
    if (extended === false) {
      if (DOM.task.change.extend(event)) extended = true;
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
    Project.currentProject.removeTask(event);
  });

  // on Checkbox click
  // removes task
  const checkboxButtons = document.querySelectorAll(".task > input[type=checkbox]");

  checkboxButtons[checkboxButtons.length - 1].addEventListener("click", (event) => {
    event.stopPropagation();

    DOM.task.remove(event);
    Project.currentProject.removeTask(event);
  });
});

// on Projects + button click
// opens form
document
  .querySelector(".sidebar > div:first-child > div:last-child")
  .addEventListener("click", () => {
    DOM.form.renderProjectForm();
  });

// on Project form submit
// creates project, adds it to DOM
document.querySelector(".projectForm").addEventListener("submit", (e) => {
  e.preventDefault();

  Project.projectList.push(
    new Project(document.querySelector(".projectForm #projectName").value)
  );

  DOM.project.create(Project.projectList[Project.projectList.length - 1]);
  DOM.form.unrenderProjectForm();

  projectEventListeners();
});

function projectEventListeners() {
  const projectDeleteButtons = document.querySelectorAll(".project > div:last-of-type");

  // checks if currentProject is
  projectDeleteButtons[projectDeleteButtons.length - 1].addEventListener("click", (event) => {
    if (Project.currentProject.id === event.currentTarget.parentNode.id) return;
    DOM.project.remove(event);
    Project.removeProject(event);
  });
}

Project.projectList.push(new Project("Default"));
DOM.project.create(Project.projectList[Project.projectList.length - 1]);
projectEventListeners();
Project.currentProject = Project.projectList[0];

// make it so it creates the project, then creates the DOM, make the defaultProject
// DOM created on load not in html
