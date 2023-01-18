const button = document.querySelector("#my-button");

const handleClick = () => {
  console.log("Click");
};

document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM is ready");
});

button.addEventListener("click", handleClick);

setTimeout(() => {
  // TODO: remove the event listener from above
  console.log("time out");
  button.removeEventListener("click", handleClick);
}, 1500);
