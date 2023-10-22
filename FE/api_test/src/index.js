import React from "react";
// import ReactDOM from 'react-dom'; //구버전
import { createRoot } from "react-dom/client";
// import App from "./App";
// import App from "./App";
import Test2 from "./Test2";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<Test2 />);
