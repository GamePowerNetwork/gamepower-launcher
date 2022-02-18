import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./screens/App/App";
import { HashRouter } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
