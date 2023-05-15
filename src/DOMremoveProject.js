import { Project } from "./Classes";

function removeProject(event) {
  for (let i = 0; i < Project.projectList.length; i++) {
    if (Project.projectList[i].id === event.currentTarget.parentNode.id) {
      document.querySelector(".sidebar").removeChild(document.querySelectorAll(".project")[i]);
    }
  }
}

export { removeProject };
