import React from "react";
// import ReactDOM from 'react-dom'; //구버전
import { createRoot } from "react-dom/client";
import App9 from "./App9";
import Test from './Test'

const container = document.getElementById("root");
const root = createRoot(container);

root.render(<Test />);