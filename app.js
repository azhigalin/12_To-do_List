const toDoItems = document.querySelector(".to-do-items");
const input = document.querySelector("#input");
const trashIcon = document.querySelector("#trash");
const submit = document.querySelector(".submit");

submit.addEventListener("click", () => addItem(input.value));
input.addEventListener("keydown", (event) => {
  if (event.key == "Enter") addItem(input.value);
});

function addItem(input) {
  const item = document.createElement("div");
  const div = document.createElement("div");
  const checkIcon = document.createElement("i");
  const trashIcon = document.createElement("i");
  const text = document.createElement("p");

  item.className = "to-do-item";
  text.textContent = input;

  checkIcon.className = "fas fa-check-square";
  checkIcon.style.color = "lightgray";
  checkIcon.addEventListener("click", () => {
    if (checkIcon.style.color == "lightgray") {
      checkIcon.style.color = "limegreen";
    } else {
      checkIcon.style.color = "lightgray";
    }
  });
  div.appendChild(checkIcon);

  trashIcon.className = "fas fa-trash";
  trashIcon.style.color = "darkgray";
  trashIcon.addEventListener("click", () => {
    item.remove();
  });
  div.appendChild(trashIcon);

  item.appendChild(text);
  item.appendChild(div);

  document.querySelector(".to-do-items").appendChild(item);
  document.querySelector("#input").value = "";
}
