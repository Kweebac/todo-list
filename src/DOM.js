import { renderForm, unrenderForm } from "./DOMform";
import { createTask } from "./DOMcreateTask";
import { removeTask } from "./DOMremoveTask";

const DOM = {
  form: {
    render: renderForm,
    unrender: unrenderForm,
  },
  task: {
    create: createTask,
    remove: removeTask,
  },
};

export { DOM };
