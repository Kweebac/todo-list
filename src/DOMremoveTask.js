import { current } from "./Classes";

function removeTask(event) {
  const tasksXButton = document.querySelectorAll(".task > div:last-child");

  for (let i = 0; i < tasksXButton.length; i++) {
    if (
      tasksXButton[i].getAttribute("data-index") ===
      event.currentTarget.getAttribute("data-index")
    ) {
      document
        .querySelector(".main")
        .removeChild(document.querySelectorAll(".task")[i]);
    }
  }
}

export { removeTask };
