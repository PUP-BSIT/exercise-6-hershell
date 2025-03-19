function validateComment() {
  let comment_name = document.getElementById("comment_name");
  let comment_message = document.getElementById("comment_form");
  let comment_button = document.getElementById("comment_button");

  if (comment_name.value.length < 1 || comment_message.value.length < 1) {
    comment_button.disabled = true;
  } else {
    comment_button.disabled = false;
  }
}

document
  .getElementById("comment_name")
  .addEventListener("input", validateComment);
document
  .getElementById("comment_form")
  .addEventListener("input", validateComment);
