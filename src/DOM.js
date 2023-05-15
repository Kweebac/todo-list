import { renderForm, unrenderForm, renderProjectForm, unrenderProjectForm } from "./DOMform";
import { createTask } from "./DOMcreateTask";
import { removeTask } from "./DOMremoveTask";
import { extendTask, unextendTask } from "./DOMchangeTask";
import { createProject } from "./DOMcreateProject";
import { removeProject } from "./DOMremoveProject";

const DOM = {
  form: {
    renderForm,
    unrenderForm,
    renderProjectForm,
    unrenderProjectForm,
  },
  task: {
    create: createTask,
    remove: removeTask,
    change: {
      extend: extendTask,
      unextend: unextendTask,
    },
  },
  project: {
    create: createProject,
    remove: removeProject,
  },
};

export { DOM };
