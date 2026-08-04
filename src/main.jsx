import React from "react";
import "./index.css";
import "./style.css";
import ReactDOM from "react-dom/client";
// import App from "./App";
// import FlashCards from "./FlashCards";
import DateCounter from "./DateCounter";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <DateCounter />
  </React.StrictMode>,
);
