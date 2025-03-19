document.addEventListener("DOMContentLoaded", function () {
  const nameInput = document.getElementById("comment_name");
  const commentInput = document.getElementById("comment");
  const commentButton = document.querySelector("#comment_button button");

  function toggleButton() {
    if (nameInput.value.trim() !== "" && commentInput.value.trim() !== "") {
      commentButton.removeAttribute("disabled");
    } else {
      commentButton.setAttribute("disabled", true);
    }
  }

  nameInput.addEventListener("input", toggleButton);
  commentInput.addEventListener("input", toggleButton);
});
