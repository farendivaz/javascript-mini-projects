const form = document.getElementById("form");
const input = document.getElementById("input");
const todos = document.getElementById("todos");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  addTodo();
});

function addTodo() {
  const todoText = input.value;
  if (todoText) {
    const todoEl = document.createElement("li");
    const remove = document.createElement("image");
    todoEl.textContent = todoText;
    remove.innerHTML = `      <img src="https://img.icons8.com/ios-glyphs/25/000000/delete-forever.png" />
    `;
    todoEl.addEventListener("click", () => {
      todoEl.classList.toggle("completed");
    });
    remove.addEventListener("click", (e) => {
      e.preventDefault();
      todoEl.remove();
    });
    todos.appendChild(todoEl);
    todoEl.appendChild(remove);
    input.value = "";
  }
}
