import { Project } from "./Classes";
import { DOM } from "./DOM";

const tasks = document.querySelector(".tasks");

function addColor(newTask, priority) {
  if (priority)
    switch (priority) {
      case "urgent":
        newTask.style.backgroundColor = "rgba(245, 93, 30, 0.3)";
        break;
      case "important":
        newTask.style.backgroundColor = "rgb(253, 152, 0, 0.3)";
        break;
      case "unimportant":
        newTask.style.backgroundColor = "rgb(181, 214, 167, 0.3)";
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
  addColor(newDiv, object.getPriority());

  tasks.appendChild(newDiv);

  // expands tasks on click
  const allTask = document.querySelectorAll(".task");
  let extended = false;

  allTask[allTask.length - 1].addEventListener("click", (event) => {
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
}

export { createTask };
