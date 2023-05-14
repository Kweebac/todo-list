import { Project } from "./Classes";

function extendTask(event) {
  for (let i = 0; i < Project.currentProject.getTasks().length; i++) {
    if (Project.currentProject.getTasks()[i].id === event.currentTarget.id) {
      if (Project.currentProject.getTasks()[i].description === "") {
        return false;
      }

      const newDiv = document.createElement("div");
      newDiv.id = "desc";
      newDiv.textContent = Project.currentProject.getTasks()[i].description;

      event.currentTarget.children[1].insertBefore(
        newDiv,
        event.currentTarget.children[1].children[1]
      );
    }
  }
  return true;
}

function unextendTask(event) {
  for (let i = 0; i < Project.currentProject.getTasks().length; i++) {
    if (Project.currentProject.getTasks()[i].id === event.currentTarget.id) {
      event.currentTarget.children[1].removeChild(event.currentTarget.children[1].children[1]);
    }
  }
}

export { extendTask, unextendTask };
