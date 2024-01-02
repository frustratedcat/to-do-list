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
function ModifyProjects() {
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

// Add DOM div element builders
function createDiv(text) {
  const div = document.createElement("div");
  div.classList.add("project-item");
  div.appendChild(createP(text))
  div.appendChild(createBtn());
  return div;
}

// Add DOM p element builder
function createP(text) {
  const p = document.createElement("p");
  p.textContent = text;
  p.classList.add("project-text");
  return p;
}

// Add DOM buttom element builder
function createBtn() {
  const btn = document.createElement("button");
  btn.textContent = "Expand";
  btn.setAttribute("type", "button");
  btn.classList.add("expand-project-btn")
  return btn;
}

export { createToDo, createProject, ModifyProjects, createDiv }
