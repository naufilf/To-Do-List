 let todoItems = [];
// const toDoListContainer = document.querySelector(".todo-list .js-todo-list")
const toDoListContainer = document.querySelector("#check")
const inputBox = document.querySelector(".js-todo-input")
let count = 0

//Code for input box
document.querySelector(".js-form").addEventListener('keypress', (e) => {
  console.log(e);
  if(e.keyCode == 13) {
    e.preventDefault();
    if(inputBox.value !== "") {
      todoItems.push(inputBox.value)
      // console.log(todoItems)
      count = count + 1
    }
  }
});

//Code for task button
function taskButton (color,task) {
  // console.log("FUnction is working")
  return `<li data-TaskColor = "${color}" style="color:${color};" class="listTask">${task}</li>`
}

//Code for striking out task
window.addEventListener("click", (e) => {
  console.log(e)
  // if I click on a list task slash it
   if (e.path[0].classList.contains("listTask")){
     console.log("found list item")
     console.log(e.path[0]);
       let temp = e.path[0].innerHTML
    e.path[0].innerHTML = `<s style = "color:${e.path[0].dataset.TaskColor};">${temp}</s>`
   }
})


// Easy Task
const easyTask = document.querySelector(".easy-task");

easyTask.addEventListener("click", (e) => {
  if(count === 1){
  toDoListContainer.innerHTML += taskButton("green",todoItems[0])  
  todoItems = []
  count = 0
  inputBox.value = ""; 
  } 
})

// Medium task
const mediumTask = document.querySelector(".medium-task")
const mediumTaskArea = document.querySelector("#medium-tasks")

mediumTask.addEventListener("click", (e) => {
  if (count === 1) {
  mediumTaskArea.innerHTML += taskButton("orange",todoItems[0])
  todoItems = []
  count = 0
  inputBox.value = "";
  }
})

// Hard task
const hardTask = document.querySelector(".hard-task")
const hardTaskArea = document.querySelector("#hard-tasks")
  
hardTask.addEventListener("click", (e) => {
  if(count === 1){
    hardTaskArea.innerHTML += taskButton("red",todoItems[0])
 todoItems = []
  count = 0
  inputBox.value = "";
  }
})


const toDoList = document.querySelectorAll("#check .listTask")
// Use a for loop to listen for any tasks needed to be stricked through i.e done tasks
toDoList.forEach( (item) => {
  console.log("for each loop here")
  item.addEventListener("click", () => {   
    console.log(item);
    let temp = item.innerHTML
    item.innerHTML = `<s style = "color:${item.dataset.TaskColor};">${temp}</s>`    
  })
})

// toDoList.forEach( (item) => {
//   item.addEventListener("click", () => {
//     console.log(item.innerHTML);
//     let temp = item.innerHTML
//     item.innerHTML = `<s style = "color:#;">${temp}</s>`    
//   })
// })

// Random Generator
// let randomArray = []
  