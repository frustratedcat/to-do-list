"use strict";

import { clickAddProjectBtn, clickAddToDoBtn, getLogic } from "./modules/dom-handling";
import "./style.css";

function getAll() {
  clickAddProjectBtn();
  clickAddToDoBtn();
  getLogic();
}

function run() {
  console.log("running");
  getAll();
  console.log("done");
}

run();















