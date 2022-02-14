const currDate = document.querySelector(".date");
const taskInput = document.querySelector(".task__input");
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
let newTitle;
let newType;
let newDate;
let newTime;
let newIcon;
let newTask;
let newLabel;
let newCheckbox;
let newTaskCheckbox;
let newEditBtn;
let newEditIcon;
let newDeleteBtn;

const showAddTask = () => {
  addTaskBox.classList.toggle("addTask-show");
};
addTaskMain.addEventListener("click", showAddTask);

const date = new Date();
currDate.textContent =
  date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear();

const test = () => {
  newTask = document.createElement("li");
  newDate = document.createElement("p");
  newTitle = document.createElement("p");
  newTime = document.createElement("p");
  newType = document.createElement("p");
  newIcon = document.createElement("img");
  newLabel = document.createElement("label");
  newTaskCheckbox = document.createElement("input");
  newCheckbox = document.createElement("div");
  newEditBtn = document.createElement("button");
  newEditIcon = document.createElement("img");
  // append ///
  tasksContainer.append(newTask);
  newTask.append(newDate, newLabel, newTime, newType, newEditBtn);
  newLabel.append(newTaskCheckbox, newCheckbox, newTitle);
  newCheckbox.append(newIcon);
  newEditBtn.append(newEditIcon);
  /// class ///
  newTask.classList.add("task");
  newDate.classList.add("task__date");
  newLabel.classList.add("task__box");
  newTaskCheckbox.classList.add("task__input");
  newCheckbox.classList.add("task__checkbox");
  newIcon.classList.add("icon");
  newTitle.classList.add("task__title");
  newTime.classList.add("task__time");
  newType.classList.add("task__type");
  newEditBtn.classList.add("task__edit");
  newEditIcon.classList.add("icon__edit");
  /// attribute ///
  newTaskCheckbox.setAttribute("type", "checkbox");
  newEditIcon.setAttribute("src", "./img/edit.svg");
  newIcon.setAttribute("src", "./img/done.svg");
  //value//
  newDate.textContent = addTaskDate.value;
  newTime.textContent = addTaskTime.value;
  newTitle.textContent = addTaskTitle.value;
  newType.textContent = addTaskSelect.value;
  addTaskDate.value = "";
  addTaskTime.value = "";
  addTaskTitle.value = "";
  warningText.textContent = "";
  addTaskBox.classList.remove("addTask-show");
};

const addNewTask = () => {
  if (
    addTaskTitle.value !== "" &&
    addTaskTime.value !== "" &&
    addTaskDate.value !== ""
  ) {
    test();
  } else if (
    addTaskTitle.value == "" &&
    addTaskDate.value == "" &&
    addTaskTime.value == ""
  ) {
    warningText.textContent = "Fill all inputs";
  } else if (addTaskTitle.value == "") {
    warningText.textContent = "Fill title input";
  } else if (addTaskDate.value == "") {
    warningText.textContent = "Fill date input";
  } else if (addTaskTime.value == "") {
    warningText.textContent = "Fill time input";
  }
};

const editTask = () => {
  let title = newTitle.innerText;
  let date = newDate.innerText;
  let time = newTime.innerText;
  let type = newType.innerText;
  /// remove element ///
  newTitle.remove();
  newDate.remove();
  newTime.remove();
  newType.remove();
  newEditBtn.remove();
  /// create element ///
  let newAddTask__optionalInputs = document.createElement("div");
  let optionalBox__one = document.createElement("div");
  let optionalBox__two = document.createElement("div");
  let dateText = document.createElement("p");
  let newAddTask__date = document.createElement("input");
  let timeText = document.createElement("p");
  let newAddTask__time = document.createElement("input");
  let titleText = document.createElement("p");
  let newAddTask__title = document.createElement("input");
  let typeText = document.createElement("p");
  let select = document.createElement("select");
  let optionTask = document.createElement("option");
  let optionMeeting = document.createElement("option");
  let optionShopping = document.createElement("option");
  let newWarningText = document.createElement("p");
  let btns = document.createElement("div");
  let newAddBtn = document.createElement("button");
  newDeleteBtn = document.createElement("button");
  /// append ///
  newTask.append(
    newAddTask__optionalInputs,
    titleText,
    newAddTask__title,
    typeText,
    select,
    newWarningText,
    btns
  );
  newAddTask__optionalInputs.append(optionalBox__one, optionalBox__two);
  optionalBox__one.append(dateText, newAddTask__date);
  optionalBox__two.append(timeText, newAddTask__time);
  select.append(optionTask, optionMeeting, optionShopping);
  btns.append(newDeleteBtn, newAddBtn);
  /// set attribute ///
  function setAttributes(el, options) {
    Object.keys(options).forEach(function (attr) {
      el.setAttribute(attr, options[attr]);
    });
  }
  setAttributes(newAddTask__optionalInputs, {
    class: "addTask__optionalInputs",
  });
  setAttributes(newAddTask__date, {
    class: "addTask__input addTask__date",
    type: "text",
    placeholder: "Day",
  });
  setAttributes(newAddTask__time, {
    class: "addTask__input addTask__time",
    type: "text",
    placeholder: "Time",
  });
  setAttributes(newAddTask__title, {
    class: "addTask__input addTask__title",
    type: "text",
    placeholder: "Title",
  });
  setAttributes(select, {
    class: "addTask__select",
    name: "type",
  });
  setAttributes(optionTask, {
    class: "addTask__option",
    value: "Task",
  });
  setAttributes(optionMeeting, {
    class: "addTask__option",
    value: "Meeting",
  });
  setAttributes(optionShopping, {
    class: "addTask__option",
    value: "Shopping",
  });
  setAttributes(newWarningText, {
    class: "warning-text",
  });
  setAttributes(btns, {
    class: "addTask__btns",
  });
  setAttributes(newAddBtn, {
    class: "add__btn",
  });
  setAttributes(newDeleteBtn, {
    class: "delete__btn",
  });
  setAttributes(titleText, {
    class: "edit-task",
  });
  setAttributes(timeText, {
    class: "edit-task",
  });
  setAttributes(dateText, {
    class: "edit-task",
  });
  setAttributes(typeText, {
    class: "edit-task",
  });
  /// values ///
  newAddTask__title.value = title;
  newAddTask__time.value = time;
  newAddTask__date.value = date;
  select.value = type;
  titleText.textContent = "Title:";
  dateText.textContent = "Date:";
  timeText.textContent = "Time:";
  typeText.textContent = "Type:";
  newAddBtn.textContent = "Save";
  newDeleteBtn.textContent = "Delete";
  optionTask.textContent = "Task";
  optionMeeting.textContent = "Meeting";
  optionShopping.textContent = "Shopping";
  /// event listeners ///
  newDeleteBtn.addEventListener("click", function () {
    newTask.remove();
  });
  newAddBtn.addEventListener("click", function () {
    newTask.remove();
    test();
    newTitle.textContent = newAddTask__title.value;
    newTime.textContent = newAddTask__time.value;
    newDate.textContent = newAddTask__date.value;
    newType.textContent = select.value;
  });
};

const checkClick = (e) => {
  console.log(e.target.closest("li"));
  if (e.target.matches(".icon__edit")) {
    newCheckbox.style.display = "none";
    newTaskCheckbox.style.display = "none";
    editTask();
  } else if (e.target.matches(".task__checkbox")) {
    e.target.closest("li").classList.toggle("task-done");
    e.target.firstChild.classList.add("icon-active");
    e.target.nextElementSibling.classList.add("done-text");
    e.target.parentElement.nextElementSibling.classList.add("done-text");
  } else if (e.target.matches(".icon-active")) {
    e.target.closest("li").classList.remove("task-done");
    e.target.classList.remove("icon-active");
    e.target.parentElement.nextElementSibling.classList.remove("done-text");
    e.target.parentElement.parentElement.nextElementSibling.classList.remove(
      "done-text"
    );
  }
};

tasksContainer.addEventListener("click", checkClick);

addTaskBtn.addEventListener("click", addNewTask);
