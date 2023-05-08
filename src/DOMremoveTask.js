import { current } from "./Classes";

function removeTask(event) {
  const tasks = document.querySelectorAll(".task > div:last-child");

  for (let i = 0; i < tasks.length; i++) {
    if (
      tasks[i].getAttribute("data-index") ===
      event.target.getAttribute("data-index")
    ) {
      document
        .querySelector(".main")
        .removeChild(document.querySelectorAll(".task")[i]);
    }
  }
}

export { removeTask };
