
// Define a UI Vars
const form = document.querySelector("#task-form");
const taskInput = document.querySelector("#task");
const taskList = document.querySelector(".collection");
const clearBtn = document.querySelector(".clear-tasks");


// Load All Event Listeners
function loadEventListeners(){

    // Add Task Event
    form.addEventListener("submit", addTask);
    
    // Clear Task
    clearBtn.addEventListener("click", clearTask);

    // Remove Task
    taskList.addEventListener("click", removeTask)
}


function addTask(event){

  event.preventDefault();
    
   if(taskInput.value === ""){
     alert("Please Fill the form");
   } else {
    
    // Create li Element
    const li = document.createElement("li");

    // Add a class name
    li.className = "collection-item";

    // Create a Text node
    li.appendChild(document.createTextNode(taskInput.value));

    // Create a link
    const link = document.createElement("a");

    // add a class to link
    link.className = "delete-item secondary-content";

    // Add a icon to link
    link.innerHTML = `<i class="fa fa-remove"></i>`;
 
    // add link to li
    li.appendChild(link);

    // Add li to ul
    taskList.appendChild(li);

    // clear the input value
    taskInput.value = "";

   }
}


function removeTask(event){
  
    if(event.target.parentElement.className === "delete-item secondary-content"){
      if(confirm("Are you Sure")){
        event.target.parentElement.parentElement.remove();
      } 
    }
}

function clearTask() {
    taskList.innerHTML = "";
}

loadEventListeners();

