const userField = document.querySelector("#user-name");
const tab = 13;

userField.addEventListener("keydown", (event) => {
  if (event.key === "Tab") {
    validateLength();
  }
});
userField.addEventListener("blur", () => {
  validateLength();
});

function validateLength() {
  console.log(userField.value);
  if (userField.value.length < 6) {
    userField.classList.remove("success");
    userField.classList.add("error");
  } else {
    userField.classList.remove("error");
    userField.classList.add("success");
  }
  console.log(userField);
}
