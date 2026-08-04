import React from "react";
import "./index.css";
import ReactDOM from "react-dom/client";
import App from "./App";
import DateCounter from "./DateCounter";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <DateCounter />
    <App />
  </React.StrictMode>,
);
