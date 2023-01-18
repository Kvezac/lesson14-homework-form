const keyActive = document.querySelector("#user-name");

keyActive.addEventListener("keyup", event => {
  console.log(`Key up: ${event.key}`);
});

keyActive.addEventListener("keydown", event => {
    console.log(`Key down: ${event.key}`);
  });