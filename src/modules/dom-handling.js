// Import functions
import { createToDo, createProject, createNewProject } from "./logic-handling";

// Define all DOM objects
function defineDOMItems() {
  // Btns to open form modals
  const addProjectBtn = document.getElementById("add-project-btn");
  const addToDoBtn = document.getElementById("add-to-do-btn");

  // Form modal objects
  const addProjectForm = document.getElementById("add-project-form");
  const addToDoForm = document.getElementById("add-to-do-form");

  // Btns to submit form modals
  const addProjectSubmitBtn = document.getElementById("add-project-submit-btn");
  const addToDoSubmitBtn = document.getElementById("add-to-do-submit-btn");

  return { addProjectForm, addToDoForm, addProjectBtn, addToDoBtn, addProjectSubmitBtn, addToDoSubmitBtn }
}

// Add click event to add-project-btn
function clickAddProjectBtn() {
  const addProjectBtn = defineDOMItems().addProjectBtn;
  addProjectBtn.addEventListener("click", (e) => {
    console.log(e.target);

    // Show projects form modal
    const addProjectForm = defineDOMItems().addProjectForm;
    addProjectForm.classList.remove("hide-form");

    // Hide To-Do form modal
    const addToDoForm = defineDOMItems().addToDoForm;
    addToDoForm.classList.add("hide-form");
  })
}

// Add click event to add-to-do-btn
function clickAddToDoBtn() {
  const addToDoBtn = defineDOMItems().addToDoBtn;
  addToDoBtn.addEventListener("click", (e) => {
    console.log(e.target);

    // Show To-Do form modal
    const addToDoForm = defineDOMItems().addToDoForm;
    addToDoForm.classList.remove('hide-form');

    // Hide projects form modal
    const addProjectForm = defineDOMItems().addProjectForm;
    addProjectForm.classList.add("hide-form");
  })
}

// Submit new project form
function submitProjectForm() {
  const addProjectSubmitBtn = defineDOMItems().addProjectSubmitBtn;
  addProjectSubmitBtn.addEventListener("click", (e) => {
    console.log(e.target);

    const addProjectForm = defineDOMItems().addProjectForm;
    addProjectForm.classList.add('hide-form');

    e.preventDefault();
  })
}

// Submit new to-do form
function submitToDoForm() {
  const addToDoSubmitBtn = defineDOMItems().addToDoSubmitBtn;
  addToDoSubmitBtn.addEventListener("click", (e) => {
    console.log(e.target);

    const addToDoForm = defineDOMItems().addToDoForm;
    addToDoForm.classList.add('hide-form');

    e.preventDefault();
  })
}








export { clickAddProjectBtn, clickAddToDoBtn, submitProjectForm, submitToDoForm }
