import { current } from "./Classes";

const mainDiv = document.querySelector(".main");
let i = 0;

function addColor(node) {
  if (current.project.getTasks()[current.project.getTasks().length - 1].priority)
    switch (current.project.getTasks()[current.project.getTasks().length - 1].priority) {
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
  newDiv.id = `${current.project.getTasks()[current.project.getTasks().length - 1].id}`;
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

export { createTask };
