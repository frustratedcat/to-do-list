// Import functions
import { createToDo, createProject, createNewProject } from "./logic-handling";


// Add click event to add-project-btn
function clickAddProjectBtn() {
  const addProjectBtn = document.getElementById("add-project-btn");
  const addProjectForm = document.getElementById("add-project-form");
  addProjectBtn.addEventListener("click", (e) => {
    console.log(e.target);
    addProjectForm.classList.remove('hide-form')
  })
}

// Add click event to add-to-do-btn
function clickAddToDoBtn() {
  const addToDoBtn = document.getElementById("add-to-do-btn");
  const addToDoForm = document.getElementById("add-to-do-form");
  addToDoBtn.addEventListener("click", (e) => {
    console.log(e.target)
    addToDoForm.classList.remove('hide-form')
  })
}

export { clickAddProjectBtn, clickAddToDoBtn }
