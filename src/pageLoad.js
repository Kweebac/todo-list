import { loadStorage } from "./localeStorage";
import { DOM } from "./DOM";
import { Project, highestProjectID } from "./Classes";

function storageEventListeners() {
  const projectDeleteButtons = document.querySelectorAll(".project > div:last-of-type");

  // checks if currentProject is the same, then removes the project
  projectDeleteButtons.forEach((item) => {
    item.addEventListener("click", (event) => {
      event.stopPropagation();

      for (let i = 0; i < Project.projectList.length; i++) {
        if (Project.projectList[i].id === event.currentTarget.parentNode.id) {
          if (Project.projectList[i].name === "Default") {
            return;
          }
        }
      }

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

    // add event listeners for each project
    // load default tasks with event listeners?
    Project.projectList.forEach((item) => {
      DOM.project.create(item);
    });
    document.querySelectorAll(".projectForm").forEach(() => {
      storageEventListeners();
    });

    Project.currentProject = Project.projectList[0];
  } else {
    // new Project("Default");
    // DOM.project.create(Project.projectList[0]);
    // storageEventListeners();
    // Project.currentProject = Project.projectList[0];
  }

  // highestProjectID = +localStorage.getItem("highestProjectID");
  // highestTaskID = +localStorage.getItem("highestTaskID");
}

export { pageLoad };
