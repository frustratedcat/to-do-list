"use strict";

import { clickAddProjectBtn, clickAddToDoBtn, clickProjectExpand, getLogic } from "./modules/dom-handling";
import "./style.css";

function run() {
  clickAddProjectBtn();
  clickAddToDoBtn();
  getLogic();
  clickProjectExpand();
}

run();















