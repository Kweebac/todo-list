const current = {};

class Project {
  constructor(name) {
    this.name = name;
    this.tasks = [];
  }

  addTask(object) {
    this.tasks.push(object);
  }
  removeTask(event) {
    const tasksXButton = document.querySelectorAll(".task > div:last-child");

    for (let i = 0; i < tasksXButton.length; i++) {
      if (
        tasksXButton[i].getAttribute("data-index") ===
        event.currentTarget.getAttribute("data-index")
      ) {
        this.tasks[event.currentTarget.getAttribute("data-index")] = "";
      }
    }
  }

  getTasks() {
    return this.tasks;
  }
  getName() {
    return this.name;
  }
}

class Task {
  constructor(title, description, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
  }

  getTitle() {
    return this.title;
  }
  getDescription() {
    return this.description;
  }
  getDueDate() {
    return this.dueDate;
  }
  getPriority() {
    return this.priority;
  }
}

export { current, Project, Task };
