import { current } from "./Classes";

function extendTask(event) {
  console.log("Extended task"); //REMOVE
  let tasks = document.querySelectorAll(".task");

  for (let i = 0; i < tasks.length; i++) {
    if (
      tasks[i].getAttribute("data-index") ===
      event.currentTarget.getAttribute("data-index")
    ) {
      console.log(
        // REMOVE
        current.project.getTasks()[tasks[i].getAttribute("data-index")]
      );

      const newDiv = document.createElement("div");
      newDiv.id = "desc";
      newDiv.textContent =
        current.project.getTasks()[
          tasks[i].getAttribute("data-index")
        ].description;

      tasks[i].children[1].insertBefore(
        newDiv,
        tasks[i].children[1].children[1]
      );
    }
  }
}

function unextendTask(event) {
  console.log("Unextended task"); //REMOVE
  let tasks = document.querySelectorAll(".task");

  for (let i = 0; i < tasks.length; i++) {
    if (
      tasks[i].getAttribute("data-index") ===
      event.currentTarget.getAttribute("data-index")
    ) {
      tasks[i].children[1].removeChild(tasks[i].children[1].children[1]);
    }
  }
}

export { extendTask, unextendTask };
