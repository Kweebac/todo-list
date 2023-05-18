import { Project } from "./Classes";

function saveProjects() {
  localStorage.setItem("projects", JSON.stringify(Project.projectList));
}

function loadStorage() {
  const projects = JSON.parse(localStorage.getItem("projects"));
  console.log(projects);
}

export { saveProjects, loadStorage };
