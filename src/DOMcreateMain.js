import { Project } from "./Classes";
import { DOM } from "./DOM";

function createMain(event) {
  const projectTitle = document.querySelector(".main > div:first-child");

  // sets project title
  for (let i = 0; i < Project.projectList.length; i++) {
    if (Project.projectList[i].id === event.currentTarget.id) {
      projectTitle.textContent = Project.projectList[i].getName();
    }

    if (Project.currentProject.getTasks()[i])
      DOM.task.create(Project.currentProject.getTasks()[i]);
  }
}

export { createMain };
