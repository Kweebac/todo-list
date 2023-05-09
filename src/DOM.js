import { renderForm, unrenderForm } from "./DOMform";
import { createTask } from "./DOMcreateTask";
import { removeTask } from "./DOMremoveTask";
import { extendTask, unextendTask } from "./DOMchangeTask";

const DOM = {
  form: {
    render: renderForm,
    unrender: unrenderForm,
  },
  task: {
    create: createTask,
    remove: removeTask,
    change: {
      extend: extendTask,
      unextend: unextendTask,
    },
  },
};

export { DOM };
