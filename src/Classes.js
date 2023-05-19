import { saveProjects } from "./localeStorage";

class Project {
  constructor(name) {
    if (document.querySelectorAll(".project").length === 0) {
      this.id = "project0";
    } else {
      this.id = `project${
        +document
          .querySelectorAll(".project")
          [document.querySelectorAll(".project").length - 1].id.split("")[
          document
            .querySelectorAll(".project")
            [document.querySelectorAll(".project").length - 1].id.split("").length - 1
        ] + 1
      }`;
    }

    this.name = name;
    this.tasks = [];

    Project.projectList.push(this);
    saveProjects();
  }

  static currentProject = undefined;
  static projectList = [];

  static removeProject(event) {
    for (let i = 0; i < Project.projectList.length; i++) {
      if (Project.projectList[i].id === event.currentTarget.parentNode.id) {
        Project.projectList.splice(i, 1);
      }
    }
    saveProjects();
  }

  addTask(object) {
    this.tasks.push(object);
  }
  removeTask(event) {
    for (let i = 0; i < this.tasks.length; i++) {
      if (this.tasks[i].id === event.currentTarget.parentNode.id) {
        this.tasks.splice(i, 1);
      }
    }
    saveProjects();
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
    if (document.querySelectorAll(".task").length === 0) {
      this.id = "task0";
    } else {
      this.id = `task${
        +document
          .querySelectorAll(".task")
          [document.querySelectorAll(".task").length - 1].id.split("")[
          document
            .querySelectorAll(".task")
            [document.querySelectorAll(".task").length - 1].id.split("").length - 1
        ] + 1
      }`;
    }

    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;

    Project.currentProject.addTask(this);
    saveProjects();
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

export { Project, Task };
