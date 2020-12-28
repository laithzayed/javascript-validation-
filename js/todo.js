let theInput = document.querySelector(".add-task input");
let theAddButton = document.querySelector(".add-task .plus");
let tasksContainer = document.querySelector(".tasks-content");
let tasksCount = document.querySelector(".tasks-count span");
let tasksCompleted = document.querySelector(".tasks-completed span");
const button = document.querySelector('button');
let itemsArray = localStorage.getItem(".tasks-content") ? JSON.parse(localStorage.getItem(".tasks-content")) : [];


window.onload = function () {
  theInput.focus();
};

///Store data.
localStorage.setItem('.tasks-content', JSON.stringify(itemsArray));
const data = JSON.parse(localStorage.getItem('.tasks-content'));

const liMaker = (text) => {
    const li = document.createElement('li');
    li.textContent = text;
    tasksContainer.appendChild(li);
  }
///End

theAddButton.onclick = function () {

  if (theInput.value === '') {

    console.log("No Value");

  } else {

    let noTasksMsg = document.querySelector(".no-tasks-message");

   
    if (document.body.contains(document.querySelector(".no-tasks-message"))) {

    
      noTasksMsg.remove();

    }

  
    let mainSpan = document.createElement("span");
    let deleteElement = document.createElement("span");
    let text = document.createTextNode(theInput.value);
     
    // push data to local storage
    itemsArray.push(theInput.value);
    localStorage.setItem('.tasks-content', JSON.stringify(itemsArray));
   // end 

    // To do add work
    let deleteText = document.createTextNode("Delete");

    mainSpan.appendChild(text);
    mainSpan.className = 'task-box';
    deleteElement.appendChild(deleteText);
    deleteElement.className = 'delete';
    mainSpan.appendChild(deleteElement);
    tasksContainer.appendChild(mainSpan);
    theInput.value = '';
    theInput.focus();

    // Calculate Tasks
    calculateTasks();
  }
};

document.addEventListener('click', function (e) {

  // Delete Task
  if (e.target.className == 'delete') {
    e.target.parentNode.remove();
    if (tasksContainer.childElementCount == 0) {
      createNoTasks();
    }
  }

  // Finish Task
  if (e.target.classList.contains('task-box')) {
    e.target.classList.toggle("finished");
  }
  // Calculate Tasks
  calculateTasks();

});

// Function To Create No Tasks Message
function createNoTasks() {
  // Create Message Span Element
  let msgSpan = document.createElement("span");
  // Create The Text Message
  let msgText = document.createTextNode("No Tasks To Show");
  // Add Text To Message Span Element
  msgSpan.appendChild(msgText);
  // Add Class To Message Span
  msgSpan.className = 'no-tasks-message';
  // Append The Message Span Element To The Task Container
  tasksContainer.appendChild(msgSpan);
}

// Function To Calculate Tasks
function calculateTasks() {
  // Calculate All Tasks
  tasksCount.innerHTML = document.querySelectorAll('.tasks-content .task-box').length;
  // Calculate Completed Tasks
  tasksCompleted.innerHTML = document.querySelectorAll('.tasks-content .finished').length;
}

// Clear All Tasks in the same button 
button.addEventListener('click', function () {
    localStorage.clear();
    while (tasksContainer.firstChild) {
        tasksContainer.removeChild(tasksContainer.firstChild);
    }
    itemsArray = [];
  });


  