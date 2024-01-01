// Import functions
import { createToDo, ModifyProjects, createDiv } from "./logic-handling";

// Define all DOM objects
function DefineDOMItems() {
  // Btns to open form modals
  const addProjectBtn = document.getElementById("add-project-btn");
  const addToDoBtn = document.getElementById("add-to-do-btn");

  // Form modal objects
  const addProjectForm = document.getElementById("add-project-form");
  const addToDoForm = document.getElementById("add-to-do-form");

  // Btns to submit form modals
  const addProjectSubmitBtn = document.getElementById("add-project-submit-btn");
  const addToDoSubmitBtn = document.getElementById("add-to-do-submit-btn");

  // Project inputs
  const newProjectInput = document.getElementById("new-project-input");

  //Projects container
  const projectsContainer = document.getElementById("projects-container");

  return { addProjectForm, addToDoForm, addProjectBtn, addToDoBtn, addProjectSubmitBtn, addToDoSubmitBtn, newProjectInput, projectsContainer }
}


// Add click event to add-project-btn
function clickAddProjectBtn() {
  console.log('running clickAddProjectBtn')
  const addProjectBtn = DefineDOMItems().addProjectBtn;
  addProjectBtn.addEventListener("click", (e) => {
    console.log(e.target);

    // Show projects form modal
    const addProjectForm = DefineDOMItems().addProjectForm;
    addProjectForm.classList.remove("hide-form");

    // Hide To-Do form modal
    const addToDoForm = DefineDOMItems().addToDoForm;
    addToDoForm.classList.add("hide-form");
  })
}

// Add click event to add-to-do-btn
function clickAddToDoBtn() {
  console.log('running clickAddToDoBtn')
  const addToDoBtn = DefineDOMItems().addToDoBtn;
  addToDoBtn.addEventListener("click", (e) => {
    console.log(e.target);

    // Show To-Do form modal
    const addToDoForm = DefineDOMItems().addToDoForm;
    addToDoForm.classList.remove('hide-form');

    // Hide projects form modal
    const addProjectForm = DefineDOMItems().addProjectForm;
    addProjectForm.classList.add("hide-form");
  })
}

// Add new project
function newProjectValue() {
  console.log('running newProjectValue')
  const newProjectInput = DefineDOMItems().newProjectInput;
  return newProjectInput.value;
}

// Get logic 
function getLogic() {
  // Get modifyProjects 
  const modifyProjects = ModifyProjects();

  // Show projects on page
  const showProjects = () => {
    console.log('running showProjects')
    const projectsContainer = DefineDOMItems().projectsContainer;

    // Remove children in preparation for showing new children
    while (projectsContainer.firstChild) {
      projectsContainer.removeChild(projectsContainer.firstChild);
    }

    console.log(modifyProjects.projects)

    // Show projects on page
    for (const key of Object.keys(modifyProjects.projects)) {
      projectsContainer.appendChild(createDiv(key));
    }
  }

  // Submit new project form
  const submitProjectForm = () => {
    console.log('running submitProjectForm')
    const addProjectSubmitBtn = DefineDOMItems().addProjectSubmitBtn;
    addProjectSubmitBtn.addEventListener("click", (e) => {
      console.log(e.target);
      e.preventDefault();

      const addProjectForm = DefineDOMItems().addProjectForm;
      addProjectForm.classList.add('hide-form');
      console.log(newProjectValue());

      modifyProjects.newProject(newProjectValue());
      showProjects();
    })
  }

  // Submit new to-do form
  const submitToDoForm = () => {
    console.log('running submitToDoForm')
    const addToDoSubmitBtn = DefineDOMItems().addToDoSubmitBtn;
    addToDoSubmitBtn.addEventListener("click", (e) => {
      console.log(e.target);

      const addToDoForm = DefineDOMItems().addToDoForm;
      addToDoForm.classList.add('hide-form');
    })
  }

  // Run all funcitons
  showProjects();
  submitProjectForm();
}



export { clickAddProjectBtn, clickAddToDoBtn, getLogic }
