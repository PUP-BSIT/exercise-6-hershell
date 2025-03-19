function checkForm() {
  const name = document.getElementById("name_comment").value;
  const comment = document.getElementById("comment").value;
  const button = document.getElementById("comment_button");

  if (name && comment) {
    button.disabled = false;
    button.classList.remove("disabled");
    button.classList.add("enabled");
  } else {
    button.disabled = true;
    button.classList.remove("enabled");
    button.classList.add("disabled");
  }
}
