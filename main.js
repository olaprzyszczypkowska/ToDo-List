const currDate = document.querySelector(".date");
const taskInput =document.querySelector(".task__input")
const checkIcon = document.querySelector(".icon")
const taskBox = document.querySelector(".task")
const taskTitle = document.querySelector(".task__title")
const taskTime = document.querySelector(".task__time")
const addTaskBox = document.querySelector(".addTask__box")
const addTaskBtn = document.querySelector(".addTask")

const showAddTask= () => {
addTaskBox.classList.toggle("addTask-show")

}
addTaskBtn.addEventListener("click",showAddTask)

const date = new Date ();
currDate.textContent=date.getDate()+"/"+date.getMonth()+1+"/"+date.getFullYear();


const checkbox = () => {
checkIcon.classList.toggle("icon-active");
taskBox.classList.toggle("task-done")
taskTitle.classList.toggle("done-text")
taskTime.classList.toggle("done-text")

}

taskInput.addEventListener("click",checkbox)


