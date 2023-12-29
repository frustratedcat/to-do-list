// Projects container
function createProject() {
  const projects = {};

  // Check if projects object is empty
  if (Object.keys(projects).length === 0) {
    Object.assign(projects, { default: [] })
  }

  return { projects }
}

// Add/Edit/Delete projects
function modifyProjects() {
  const projects = createProject().projects;

  // Create new projects
  const newProject = (projectName) => {
    projects[projectName] = [];
    return projects;
  }

  // Edit projects
  const editProject = () => {
  }

  // Delete projects
  function deleteProject() {

  }

  return { projects, newProject, editProject, deleteProject }
}





// Create toDo factory function
function createToDo(title, description, dueDate, priority, notes) {
  const toDo = {
    title: title,
    description: description,
    dueDate: dueDate,
    priority: priority,
    notes: notes,
  };

  return { toDo };
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

// Add DOM element builders
function createDiv() {
  const div = document.createElement("div");
  return div
}


export { createToDo, createProject, modifyProjects, createDiv }
