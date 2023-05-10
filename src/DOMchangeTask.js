import { current } from "./Classes";

function extendTask(event) {
  for (let i = 0; i < current.project.getTasks().length; i++) {
    if (current.project.getTasks()[i].id === event.currentTarget.id) {
      const newDiv = document.createElement("div");
      newDiv.id = "desc";
      newDiv.textContent = current.project.getTasks()[i].description;

      event.currentTarget.children[1].insertBefore(
        newDiv,
        event.currentTarget.children[1].children[1]
      );
    }
  }
}

function unextendTask(event) {
  for (let i = 0; i < current.project.getTasks().length; i++) {
    if (current.project.getTasks()[i].id === event.currentTarget.id) {
      event.currentTarget.children[1].removeChild(event.currentTarget.children[1].children[1]);
    }
  }
}

export { extendTask, unextendTask };
