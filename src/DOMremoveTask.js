import { current } from "./Classes";

function removeTask(event) {
  for (let i = 0; i < current.project.getTasks().length; i++) {
    if (
      current.project.getTasks()[i].id === event.currentTarget.parentNode.id
    ) {
      document
        .querySelector(".main")
        .removeChild(document.querySelectorAll(".task")[i]);
    }
  }
}

export { removeTask };
