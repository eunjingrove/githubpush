import React from "react";
// import ReactDOM from 'react-dom'; //구버전
import { createRoot } from "react-dom/client";
import App from "./App";
import App3 from "./App3";
import App5 from "./App5";
import { DarkMode } from "./DarkMode";
import ClassLifeCycle from "./ClassLifeCycle"
import Wrap from './HookLifeCycle'
import Test from './Test'

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<Test />);
