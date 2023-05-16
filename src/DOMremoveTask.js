import { Project } from "./Classes";

function removeTask(event) {
  for (let i = 0; i < Project.currentProject.getTasks().length; i++) {
    if (Project.currentProject.getTasks()[i].id === event.currentTarget.parentNode.id) {
      document.querySelector(".tasks").removeChild(document.querySelectorAll(".task")[i]);
    }
  }
}

export { removeTask };
