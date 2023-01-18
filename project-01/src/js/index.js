// your code
form = document.querySelector("#login-form");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log("form submitted");

  // the form will not reload anymore
});
