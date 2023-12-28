import { createToDo, createProject, createNewProject } from "./logic-handling";


// Add click event to add-project-btn
function clickAddProjectBtn() {
  const addProjectBtn = document.getElementById("add-project-btn");
  addProjectBtn.addEventListener("click", (e) => {
    console.log(e.target);
    console.log(createNewProject('hello'));
  })
}

// Add click event to add-to-do-btn
function clickAddToDoBtn() {
  const addToDoBtn = document.getElementById("add-to-do-btn");
  addToDoBtn.addEventListener("click", (e) => {
    console.log(e.target)
  })
}

export { clickAddProjectBtn, clickAddToDoBtn }
