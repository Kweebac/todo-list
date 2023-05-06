const form = document.querySelector("form");

function renderForm() {
  form.style.visibility = "visible";
}
function unrenderForm() {
  form.style.visibility = "hidden";
}

export { renderForm, unrenderForm };
