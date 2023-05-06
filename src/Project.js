import { Task } from "./Task";

class Project {
  constructor(name) {
    this.name = name;
    this.taskList = [];
  }

  addTask(object) {
    this.taskList.push(object);
  }
}

export { Project };
