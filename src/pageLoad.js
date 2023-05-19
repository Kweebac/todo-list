import { loadStorage } from "./localeStorage";
import { DOM } from "./DOM";
import { Project } from "./Classes";

function storageEventListeners() {
  const projectDeleteButtons = document.querySelectorAll(".project > div:last-of-type");

  // checks if currentProject is the same, then removes the project
  projectDeleteButtons.forEach((item) => {
    item.addEventListener("click", (event) => {
      event.stopPropagation();

      if (Project.currentProject.id === event.currentTarget.parentNode.id) return;

      DOM.project.remove(event);
      Project.removeProject(event);
    });
  });

  const projects = document.querySelectorAll(".project");

  // sets currentProject to it, then loads the DOM
  projects.forEach((item) => {
    item.addEventListener("click", (event) => {
      event.stopPropagation();

      // sets currentProject
      for (let i = 0; i < Project.projectList.length; i++) {
        if (Project.projectList[i].id === event.currentTarget.id) {
          Project.currentProject = Project.projectList[i];
        }
      }

      DOM.main.reset();
      DOM.main.create(event);
    });
  });
}

function pageLoad() {
  if (localStorage.getItem("projects")) {
    loadStorage();

    Project.projectList.forEach((item) => {
      DOM.project.create(item);
    });
    document.querySelectorAll(".project").forEach(() => {
      storageEventListeners();
    });

    DOM.main.reset();

    const projectTitle = document.querySelector(".main > div:first-child");

    // sets project title
    for (let i = 0; i < Project.projectList.length; i++) {
      if (Project.projectList[i].id === document.querySelector(".project").id) {
        projectTitle.textContent = Project.projectList[i].getName();
      }
    }

    // adds the tasks
    for (let i = 0; i < Project.currentProject.getTasks().length; i++) {
      if (Project.currentProject.getTasks()[i])
        DOM.task.create(Project.currentProject.getTasks()[i]);
    }
  } else {
    new Project("Default");
    DOM.project.create(Project.projectList[0]);
    storageEventListeners();
    Project.currentProject = Project.projectList[0];
  }
}

export { pageLoad };
