const input = document.getElementById("input");
const password = document.getElementById("password");
const form = document.getElementById("form");
const error = document.getElementById("error");

form.addEventListener("submit", (e) => {
  let messages = [];
  if (input.value === "" || input.value == null) {
    messages.push("Name is required");
  }
  if (password.value.length <= 6) {
    messages.push("Password must be longer than 6 characters");
  }
  if (password.value.length >= 6) {
    messages.push("Password must be less than 20 characters");
  }
  if (messages.length > 0) {
    e.preventDefault();
    error.textContent = messages.join(",");
  }
});
