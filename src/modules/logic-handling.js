// Projects container
function createProject() {
  const projects = {};

  // Check if projects object is empty
  if (Object.keys(projects).length === 0) {
    Object.assign(projects, { Default: [] });
  }
  return { projects };
}

// Add/Edit/Delete projects
function ModifyProjects() {
  // Set projects based on local storage
  let projects;
  if (localStorage.length === 0) {
    projects = createProject().projects;
    localStorage.setItem("projects", JSON.stringify(projects));
  } else {
    projects = JSON.parse(localStorage.getItem("projects"));
  }
  // Create new projects
  const newProject = (projectName) => {
    projects[projectName] = [];
    return projects;
  };
  return { projects, newProject };
}

// Create toDo factory function
function createToDo(title, description, dueDate, priority, notes) {
  return {
    title: title,
    description: description,
    dueDate: dueDate,
    priority: priority,
    notes: notes,
  };
}

// Add DOM div element builders
function createDiv(pText) {
  const div = document.createElement("div");
  div.classList.add("project-item");
  div.appendChild(createH3(pText));
  div.appendChild(deleteProjectBtn());
  div.appendChild(btnProject());
  return div;
}

// Add DOM h3 element builder
function createH3(text) {
  const h3 = document.createElement("h3");
  h3.textContent = text;
  h3.classList.add("project-h3-text");
  return h3;
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
  btn.classList.add("expand-project-btn");
  return btn;
}

function deleteProjectBtn() {
  const btn = createBtn();
  btn.textContent = "-";
  btn.setAttribute("type", "button");
  btn.classList.add("delete-project-btn");
  return btn;
}

function btnToDo() {
  const btn = createBtn();
  btn.textContent = "+";
  btn.setAttribute("type", "button");
  btn.classList.add("expand-to-do-btn");
  return btn;
}

function deleteToDoBtn() {
  const btn = createBtn();
  btn.textContent = "-";
  btn.setAttribute("type", "button");
  btn.classList.add("delete-to-do-btn");
  return btn;
}

// Add DOM ul element bulider
function createUl(text) {
  const ul = document.createElement("ul");
  ul.classList.add("project-to-do-list", "hide");
  ul.appendChild(createLi(text));
  return ul;
}

// Add DOM li element builder
function createLi(text) {
  const li = document.createElement("li");
  li.classList.add("project-to-do");
  li.appendChild(createP(text));
  li.appendChild(deleteToDoBtn());
  li.appendChild(btnToDo());
  return li;
}

// Add DOM option element builder
function createOption(text) {
  const option = document.createElement("option");
  option.setAttribute("value", text);
  option.textContent = text;
  option.classList.add("project-option");
  return option;
}

export {
  createToDo,
  createProject,
  ModifyProjects,
  createDiv,
  createUl,
  createOption,
};
