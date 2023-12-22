"use strict";

import "./style.css";

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

// Create projects
function createProject() {
  const projects = {
    default: [],
  };

  return { projects };
}

// Add new projects
function addNewProjects(projectName) {
  const allProjects = createProject().projects;
  allProjects[projectName] = [];

  return { allProjects };
}

console.log(addNewProjects("hi"));

// Edit projects

// Delete projects

// Add toDos

// Edit toDos

// Delete toDos
