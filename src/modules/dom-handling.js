// Import functions
import { createToDo, createProject, createNewProject } from "./logic-handling";

function defineDOMItems() {
  const addProjectForm = document.getElementById("add-project-form");
  const addToDoForm = document.getElementById("add-to-do-form");

  return { addProjectForm, addToDoForm }
}

// Add click event to add-project-btn
function clickAddProjectBtn() {
  const addProjectBtn = document.getElementById("add-project-btn");
  addProjectBtn.addEventListener("click", (e) => {
    console.log(e.target);

    const addProjectForm = defineDOMItems().addProjectForm;
    addProjectForm.classList.remove('hide-form');
  })
}

// Add click event to add-to-do-btn
function clickAddToDoBtn() {
  const addToDoBtn = document.getElementById("add-to-do-btn");
  addToDoBtn.addEventListener("click", (e) => {
    console.log(e.target);

    const addToDoForm = defineDOMItems().addToDoForm;
    addToDoForm.classList.remove('hide-form');
  })
}

// Submit new project form
function submitProjectForm() {
  const addProjectSubmitBtn = document.getElementById("add-project-submit-btn");
  addProjectSubmitBtn.addEventListener("click", (e) => {
    console.log(e.target);

    const addProjectForm = defineDOMItems().addProjectForm;
    addProjectForm.classList.add('hide-form');

    e.preventDefault();
  })
}

// Submit new to-do form
function submitToDoForm() {
  const addToDoSubmitBtn = document.getElementById("add-to-do-submit-btn");
  addToDoSubmitBtn.addEventListener("click", (e) => {
    console.log(e.target);

    const addToDoForm = defineDOMItems().addToDoForm;
    addToDoForm.classList.add('hide-form');

    e.preventDefault();
  })
}








export { clickAddProjectBtn, clickAddToDoBtn, submitProjectForm, submitToDoForm }
