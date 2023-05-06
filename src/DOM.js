import { showForm, hideForm } from "./DOMform";
import { createTask } from "./DOMcreateTask";

const DOM = {
  form: {
    show: showForm,
    hide: hideForm,
  },
  createTask,
};

export { DOM };
