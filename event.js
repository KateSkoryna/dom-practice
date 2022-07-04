const form = document.querySelector(".register-form");

form.addEventListener("submit", (event) => {
    console.log("event: ", event);
     console.log("event type: ", event.type);
  console.log("currentTarget: ", event.currentTarget);
  event.preventDefault();
  const {
    elements: { username, password }
  } = event.currentTarget;
  console.log(username.value, password.value);
});

