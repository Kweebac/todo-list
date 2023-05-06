/* 
make a defaultProject project and let them create other projects (you put todo items in projects)

modules: create new todo items, set todo items as complete, change todo priority,
UI: view projects with todos inside, expend each todo, delete a todo
When clicking each project it removes the current project UI 
and puts the new one

click add task, form pops up, take form answers and put it into a new Task,
 which is saved to project, use it add to DOM
*/

import { DOM } from "./DOM";

document
  .querySelector(".main > div:last-child")
  .addEventListener("click", () => {
    console.log("hi");
    const form = document.querySelector(".form");
    form.setAttribute("visibility", "visible");

    // DOM.form.show();
  });
