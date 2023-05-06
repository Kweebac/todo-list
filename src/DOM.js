import { showForm, hideForm } from "./DOMform";
import { createTask } from "./DOMcreateTask";
import { removeTask } from "./DOMremoveTask";

const DOM = {
  form: {
    show: showForm,
    hide: hideForm,
  },
  task: {
    create: createTask,
    remove: removeTask,
  },
};

export { DOM };
