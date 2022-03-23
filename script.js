function onChange(event) {
  const password = document.querySelector("#pw");
  const confirm = document.querySelector("#pw2");
  const button = document.querySelector("button");
  const error_msg = document.querySelector(".error__message");
  if (confirm.value === password.value) {
    error_msg.classList.add("invisible");
    password.classList.remove("error");
    confirm.classList.remove("error");
    button.disabled = false;
  } else {
    error_msg.classList.remove("invisible");
    password.classList.add("error");
    confirm.classList.add("error");
    button.disabled = true;
  }
}
