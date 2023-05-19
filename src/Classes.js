import { saveProjects } from "./localeStorage";

let highestProjectID = 0;

class Project {
  constructor(name) {
    this.id = `project${highestProjectID++}`;

    this.name = name;
    this.tasks = [];

    Project.projectList.push(this);
    saveProjects();
    // localStorage.setItem("highestProjectID", `${highestProjectID}`);
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

let highestTaskID = 0;

class Task {
  constructor(title, description, dueDate, priority) {
    this.id = `task${highestTaskID++}`;

    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;

    Project.currentProject.addTask(this);
    saveProjects();
    // localStorage.setItem("highestTaskID", `${highestTaskID}`);
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

export { Project, Task, highestProjectID, highestTaskID };
