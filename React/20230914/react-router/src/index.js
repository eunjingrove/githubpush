import React from "react";
// import ReactDOM from 'react-dom'; //구버전
import { createRoot } from "react-dom/client";
import App from "./App";
import Quiz2 from './Quiz2'
import App5 from "./App5";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App5 />);
