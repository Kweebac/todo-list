const form = document.querySelector("form");

function showForm() {
  form.style.visibility = "visible";
}
function hideForm() {
  form.style.visibility = "hidden";
}

export { showForm, hideForm };
