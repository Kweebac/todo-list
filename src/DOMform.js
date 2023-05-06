const formClass = document.querySelector(".form");

function showForm() {
  // formClass.removeAttribute("visibility");
  formClass.setAttribute("visibility", "visible");
}
function hideForm() {
  formClass.setAttribute("visibility", "hidden");
}

export { showForm, hideForm };
