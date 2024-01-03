// Projects container
function createProject() {
  const projects = {};

  // Check if projects object is empty
  if (Object.keys(projects).length === 0) {
    Object.assign(projects, { default: [{ title: "hi", description: "describe", dueDate: "idk", priority: "high", notes: "nope" }, { title: "yo" }] })
    Object.assign(projects, { test: [{ title: "hey" }, { title: "bro" }] })
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
function createDiv(pText, liText) {
  const div = document.createElement("div");
  div.classList.add("project-item");
  div.appendChild(createP(pText))
  div.appendChild(btnProject());
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
  return btn;
}

function btnProject() {
  const btn = createBtn();
  btn.textContent = "+";
  btn.setAttribute("type", "button");
  btn.classList.add("expand-project-btn")
  return btn;
}

function btnToDo() {
  const btn = createBtn();
  btn.textContent = "+";
  btn.setAttribute("type", "button");
  btn.classList.add("expand-do-do-btn")
  return btn;
}

// Add DOM ul element bulider
function createUl(text) {
  const ul = document.createElement("ul");
  ul.classList.add("project-to-do-list");
  ul.appendChild(createLi(text))
  return ul;
}

// Add DOM li element builder
function createLi(text) {
  const li = document.createElement("li");
  li.textContent = text;
  li.classList.add("project-to-do");
  li.appendChild(btnToDo());
  return li
}

export { createToDo, createProject, ModifyProjects, createDiv, createUl }
