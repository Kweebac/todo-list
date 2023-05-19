import { DOM } from "./DOM";
import { Project, Task } from "./Classes";
import { pageLoad } from "./pageLoad";

// on Add task click
// shows form
document.querySelector(".main > div:last-child").onclick = () => {
  DOM.form.renderForm();
};

// on Form ✖ click
// hides form
document
  .querySelector("form > div:first-child")
  .addEventListener("click", DOM.form.unrenderForm);

// on submit form click
// converts form inputs into a task inside the current project, then gets rid of the menu, then adds the task in the UI
document.querySelector("form button").addEventListener("click", (e) => {
  if (document.querySelector("form #title").value === "") return;
  e.preventDefault();

  new Task(
    document.querySelector("form #title").value,
    document.querySelector("form #desc").value,
    `Due on ${new Date(document.querySelector("form #dueDate").value)}`,
    document.querySelector("form #priority").value
  );

  DOM.form.unrenderForm();

  DOM.task.create(
    Project.currentProject.getTasks()[Project.currentProject.getTasks().length - 1]
  );
});

// on Projects + button click
// opens form
document
  .querySelector(".sidebar > div:first-child > div:last-child")
  .addEventListener("click", () => {
    DOM.form.renderProjectForm();
  });

// on Project form submit
// creates project, adds it to DOM
document.querySelector(".projectForm").addEventListener("submit", (e) => {
  e.preventDefault();

  new Project(document.querySelector(".projectForm #projectName").value);

  DOM.project.create(Project.projectList[Project.projectList.length - 1]);
  DOM.form.unrenderProjectForm();

  projectEventListeners();
});

function projectEventListeners() {
  const projectDeleteButtons = document.querySelectorAll(".project > div:last-of-type");

  // checks if currentProject is the same, then removes the project
  projectDeleteButtons[projectDeleteButtons.length - 1].addEventListener("click", (event) => {
    event.stopPropagation();

    if (Project.currentProject.id === event.currentTarget.parentNode.id) return;

    DOM.project.remove(event);
    Project.removeProject(event);
  });

  const projects = document.querySelectorAll(".project");

  // sets currentProject to it, then loads the DOM
  projects[projects.length - 1].addEventListener("click", (event) => {
    event.stopPropagation();

    // sets currentProject
    for (let i = 0; i < Project.projectList.length; i++) {
      if (Project.projectList[i].id === event.currentTarget.id) {
        Project.currentProject = Project.projectList[i];
      }
    }

    DOM.main.reset();
    DOM.main.create(event);
  });
}

pageLoad();
