// Import functions
import { createToDo, ModifyProjects, createDiv, createUl, createOption } from "./logic-handling";

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

  // Projects expand btn
  let expandProjectBtn = document.querySelectorAll(".expand-project-btn");

  // Select project for new to-do
  const toDoProjectSelect = document.getElementById("to-do-project-select");

  return { addProjectForm, addToDoForm, addProjectBtn, addToDoBtn, addProjectSubmitBtn, addToDoSubmitBtn, newProjectInput, projectsContainer, expandProjectBtn, toDoProjectSelect }
}


// Add click event to add-project-btn
function clickAddProjectBtn() {
  const addProjectBtn = DefineDOMItems().addProjectBtn;
  addProjectBtn.addEventListener("click", (e) => {
    console.log(e.target);

    // Show projects form modal
    const addProjectForm = DefineDOMItems().addProjectForm;
    addProjectForm.classList.remove("hide");

    // Hide To-Do form modal
    const addToDoForm = DefineDOMItems().addToDoForm;
    addToDoForm.classList.add("hide");

    // Remove project form input values
    const newProjectInput = DefineDOMItems().newProjectInput;
    newProjectInput.value = "";
  })
}

// Add click event to add-to-do-btn
function clickAddToDoBtn() {
  const addToDoBtn = DefineDOMItems().addToDoBtn;
  addToDoBtn.addEventListener("click", (e) => {
    console.log(e.target);

    // Show To-Do form modal
    const addToDoForm = DefineDOMItems().addToDoForm;
    addToDoForm.classList.remove("hide");

    // Hide projects form modal
    const addProjectForm = DefineDOMItems().addProjectForm;
    addProjectForm.classList.add("hide");
  })
}

// Add click event to expand btn on projects
function clickProjectExpand() {
  let expandProjectBtn = DefineDOMItems().expandProjectBtn;
  console.log(expandProjectBtn.length)
  for (let i = 0; i < expandProjectBtn.length; i++) {
    expandProjectBtn[i].addEventListener("click", (e) => {
      console.log(e.target);
    })
  }
}

// Add new project
function newProjectValue() {
  const newProjectInput = DefineDOMItems().newProjectInput;
  return newProjectInput.value;
}

// Get logic 
function getLogic() {
  // Get modifyProjects 
  const modifyProjects = ModifyProjects();

  // Show projects on page
  const showProjects = () => {
    // Get DOM element
    const projectsContainer = DefineDOMItems().projectsContainer;

    // Remove children in preparation for showing new children
    while (projectsContainer.firstChild) {
      projectsContainer.removeChild(projectsContainer.firstChild);
    }

    // Show projects on page
    for (const [key, value] of Object.entries(modifyProjects.projects)) {
      projectsContainer.append(createDiv(key));
      value.map((v) => { projectsContainer.lastElementChild.append(createUl(v.title)) })
    }

    // Test log to delete later
    console.log(modifyProjects.projects)
    return modifyProjects.projects;
  }

  // Show to-do on page
  const showToDos = () => {

  }

  // Submit new project form
  const submitProjectForm = () => {
    const addProjectSubmitBtn = DefineDOMItems().addProjectSubmitBtn;
    addProjectSubmitBtn.addEventListener("click", (e) => {
      console.log(e.target);
      e.preventDefault();

      const addProjectForm = DefineDOMItems().addProjectForm;
      addProjectForm.classList.add("hide");
      console.log(newProjectValue());

      modifyProjects.newProject(newProjectValue());
      showProjects();
      clickProjectExpand();
      addProjectOptions();
    })
  }

  // Add project options
  const addProjectOptions = () => {
    const toDoProjectSelect = DefineDOMItems().toDoProjectSelect;

    // Remove existing options
    while (toDoProjectSelect.firstChild) {
      toDoProjectSelect.removeChild(toDoProjectSelect.firstChild);
    }

    // Add options
    for (const key of Object.keys(modifyProjects.projects)) {
      toDoProjectSelect.append(createOption(key))
    }
  }

  // Submit new to-do form 
  const submitToDoForm = () => {
    const addToDoSubmitBtn = DefineDOMItems().addToDoSubmitBtn;
    addToDoSubmitBtn.addEventListener("click", (e) => {
      console.log(e.target);

      const addToDoForm = DefineDOMItems().addToDoForm;
      addToDoForm.classList.add("hide");
      ul.appendChild(btnToDo());
    })
  }

  // Run all funcitons
  showProjects();
  submitProjectForm();
  addProjectOptions();
}



export { clickAddProjectBtn, clickAddToDoBtn, getLogic, clickProjectExpand }
