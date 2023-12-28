// Create toDo factory function
function createToDo(title, description, dueDate, priority, notes) {
  const toDo = {
    title: title,
    description: description,
    dueDate: dueDate,
    priority: priority,
    notes: notes,
  };

  return toDo;
}

// Create projects container
function createProject() {
  const projects = {
    default: [],
  };

  return { projects };
}

// Creat new projects
function createNewProject(projectName) {
  const allProjects = createProject().projects;
  allProjects[projectName] = [];

  return { allProjects };
}


// Edit projects
function editProject() {
}

// Delete projects
function deleteProject() {

}

// Add toDos
function addToDo() {

}

// Edit toDos
function editToDo() {

}

// Delete toDos
function deleteToDo() {

}

export { createToDo, createProject, createNewProject }
