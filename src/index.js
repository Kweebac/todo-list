/* 
factory functions/classes to create todo items
todo items will have these properties: title, description, dueDate, priority 
make a default project and let them create other projects (you put todo items in projects)

modules: create new todo items, set todo items as complete, change todo priority,
UI: view projects with todos inside, expend each todo, delete a todo
*/

import { Task } from "./createTask";
const task1 = new Task("Melon", "Melons are cool", new Date("2022-03-25"), 3);
console.log(task1);
