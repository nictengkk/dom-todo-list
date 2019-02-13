const tasks = ["Buy milk", "Eat dinner", "Nail javascript", "Give feedback"];

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
    newTask.textContent = input.value; //change li text content to input
    newTask.addEventListener("click", function() {
      newTask.classList.toggle("done");
    });
    trashIcon.addEventListener("click", function() {
      li.remove();
    });
    li.append(newTask, trashIcon);
    ulist.appendChild(li); //append new bullet point to unordered list
    input.value = "";
  }
});

input.addEventListener("keydown", function(event) {
  //   console.log("the event object: ", event);
  if (event.which !== 13) return;
  //   console.log("hello");
  const li = document.createElement("li");
  const newTask = document.createElement("span");
  const trashIcon = document.createElement("i");
  trashIcon.classList.add("fas", "fa-trash");
  if (input.value !== "") {
    newTask.textContent = input.value; //change li text content to input
    newTask.addEventListener("click", function() {
      newTask.classList.toggle("done");
    });
    trashIcon.addEventListener("click", function() {
      li.remove();
    });
    li.append(newTask, trashIcon);
    ulist.appendChild(li); //append new bullet point to unordered list
    input.value = "";
  }
});
