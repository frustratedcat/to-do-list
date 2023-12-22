'use strict';

import './style.css';


// Create toDo factory function, which will be called within project arrays
function createToDo(title, description, dueDate, priority, notes) {
  const toDo = {
    title: title,
    description: description,
    dueDate: dueDate,
    priority: priority,
    notes: notes,
  }

  return toDo
}

// Create project factory function
function createNewProject(name) {
  const projectName = [];
  return projectName;
}

// Add toDo to project
function addToDo(name, title, description, dueDate, priority, notes) {
  const newProject = createNewProject(name);
  const newToDo = createToDo(title, description, dueDate, priority, notes);

  newProject.push(newToDo);
  return newProject;
}

// Create projects container array
function projectsContainer() {
  const projects = [];
  return {projects};
}

// Add new projects and toDos to container
function addProjectsAndToDos() {  
  const allProjects = projectsContainer();
  allProjects.projects.push(addToDo('default', 'first to do', 'a bunch of words', 'sometime' ,'high', 'none'));

  return allProjects;
}

console.log(addProjectsAndToDos());
