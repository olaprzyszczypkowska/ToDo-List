const currDate = document.querySelector(".date");
const taskInput = document.querySelector(".task__input");
const checkIcon = document.querySelector(".icon");
const taskBox = document.querySelector(".task");
const taskTitle = document.querySelector(".task__title");
const taskTime = document.querySelector(".task__time");
const addTaskBox = document.querySelector(".addTask__box");
const addTaskMain = document.querySelector(".addTask");
const warningText = document.querySelector(".warning-text");
const addTaskTitle = document.querySelector(".addTask__title");
const addTaskDate = document.querySelector(".addTask__date");
const addTaskTime = document.querySelector(".addTask__time");
const addTaskSelect = document.querySelector(".addTask__select");
const addTaskBtn = document.querySelector(".addTask__btn");
const task = document.querySelector(".task");
const tasksContainer = document.querySelector(".allTasks");
// let newTask;
// let newTitle;

const showAddTask = () => {
  addTaskBox.classList.toggle("addTask-show");
};
addTaskMain.addEventListener("click", showAddTask);

const date = new Date();
currDate.textContent =
  date.getDate() + "/" + date.getMonth() + 1 + "/" + date.getFullYear();

const checkbox = () => {
  checkIcon.classList.toggle("icon-active");
  taskBox.classList.toggle("task-done");
  taskTitle.classList.toggle("done-text");
  taskTime.classList.toggle("done-text");
};

const addNewTask = () => {
  if (addTaskTitle.value !== "") {
   let newTask = document.createElement("div");
   let newDate = document.createElement("p");
   let newLabel = document.createElement("label");
   let newTaskCheckbox = document.createElement("input");
   let newCheckbox = document.createElement("div");
   let newIcon = document.createElement("img");
   let newTitle = document.createElement("p");
   let newTime = document.createElement("p");
   let newType = document.createElement("p");
   let newEditBtn = document.createElement("button");
   let newEditIcon = document.createElement("img");
   // append ///
   tasksContainer.append(newTask);
    newTask.append(newDate);
    newTask.append(newLabel);
    newTask.append(newTime);
    newTask.append(newType);
    newTask.append(newEditBtn);
    newLabel.append(newTaskCheckbox);
    newLabel.append(newCheckbox);
    newLabel.append(newTitle);
    newCheckbox.append(newIcon);
    newEditBtn.append(newEditIcon);
    /// class ///
    newTask.classList.add("task")
    newDate.classList.add("task__date");
    newLabel.classList.add("task__box");
    newTaskCheckbox.classList.add("task__input");
    newCheckbox.classList.add("task__checkbox")
    newIcon.classList.add("icon");
    newTitle.classList.add("task__title");
    newTime.classList.add("task__time");
    newType.classList.add("task__type");
    newEditBtn.classList.add("task__edit");
    /// attribute ///
    newTaskCheckbox.setAttribute("type", "checkbox")
    newEditIcon.setAttribute("src", "./img/edit.svg")
    newIcon.setAttribute("src", "./img/done.svg")
    //value//
    newDate.textContent=addTaskDate.value;
    newTime.textContent=addTaskTime.value;
    newTitle.textContent=addTaskTitle.value;
    newType.textContent=addTaskSelect.value;
    warningText.textContent = "";
  } else {
    warningText.textContent = "Your title input is empty";
  }
};
addTaskBtn.addEventListener("click", addNewTask);

taskInput.addEventListener("click", checkbox);
