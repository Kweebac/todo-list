import { loadStorage } from "./localeStorage";
import { DOM } from "./DOM";
import { Project } from "./Classes";
import { projectEventListeners } from ".";

function isInProjectArray() {
  for (let i = 0; i < Project.projectList.length; i++) {
    if (Project.projectList[i].getName() === "Default") {
      return true;
    }
  }
  return false;
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
      projectEventListeners();
    });

    Project.currentProject = Project.projectList[0];
  } else {
    new Project("Default");
    DOM.project.create(Project.projectList[0]);
    projectEventListeners();

    Project.currentProject = Project.projectList[0];
  }
}

export { pageLoad };

// load storage
// if there isn't default, add it
