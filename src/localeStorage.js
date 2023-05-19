import { Project } from "./Classes";

function saveProjects() {
  localStorage.setItem("projects", JSON.stringify(Project.projectList));
}

function loadStorage() {
  Project.projectList = JSON.parse(localStorage.getItem("projects"));
  Project.currentProject = Project.projectList[0];

  // Project methods
  Project.projectList.forEach((project) => {
    project.addTask = function (object) {
      this.tasks.push(object);
    };
    project.removeTask = function (event) {
      for (let i = 0; i < this.tasks.length; i++) {
        if (this.tasks[i].id === event.currentTarget.parentNode.id) {
          this.tasks.splice(i, 1);
        }
      }
      saveProjects();
    };
    project.getTasks = function () {
      return this.tasks;
    };
    project.getName = function () {
      return this.name;
    };

    // Task methods
    project.getTasks().forEach((task) => {
      task.getTitle = function () {
        return this.title;
      };
      task.getDescription = function () {
        return this.description;
      };
      task.getDueDate = function () {
        return this.dueDate;
      };
      task.getPriority = function () {
        return this.priority;
      };
    });
  });
}

export { saveProjects, loadStorage };
