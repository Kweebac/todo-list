/* 
make a defaultProject project and let them create other projects (you put todo items in projects)

modules: create new todo items, set todo items as complete, change todo priority,
UI: view projects with todos inside, expend each todo, delete a todo
*/

import { Task } from "./Task";
import { Project } from "./Project";

const defaultProject = new Project("Default");
defaultProject.addTask(
  new Task("Melon", "Melons are cool", new Date("2022-03-25"), 3)
);
console.log(defaultProject);
