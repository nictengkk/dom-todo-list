const tasks = ["buy milk", "eat dinner", "nail javascript", "give feedback"];

const input = document.querySelector("input");
const addButton = document.querySelector("i");
const ulist = document.querySelector("ul");

const displayTasks = arr => {
  arr.forEach(task => {
    const li = document.createElement("li");
    const newTask = document.createElement("span");
    const trashIcon = document.createElement("i");
    trashIcon.classList.add("fas", "fa-trash");
    newTask.textContent = task;
    li.addEventListener("click", function() {
      newTask.classList.toggle("done");
    });
    trashIcon.addEventListener("click", function() {
      li.remove();
    });
    li.append(newTask, trashIcon);
    ulist.appendChild(li); //reflected in DOM
  });
};

displayTasks(tasks);

addButton.addEventListener("click", function() {
  const li = document.createElement("li");
  const newTask = document.createElement("span");
  const trashIcon = document.createElement("i");
  trashIcon.classList.add("fas", "fa-trash");
  if (input.value !== "") {
    li.textContent = input.value; //change li text content to input
    li.addEventListener("click", function() {
      li.classList.toggle("done");
    });
    trashIcon.addEventListener("click", function() {
      li.remove();
    });
    li.append(newTask, trashIcon);
    ulist.appendChild(li); //append new bullet point to unordered list
  }
});
