import React from "react";
import ReactDOM from "react-dom/client";
import Main from "./components/Main.jsx";
import "bootstrap/dist/css/bootstrap.min.css";

const container = document.getElementById("app");
const root = ReactDOM.createRoot(container);

root.render(<Main />);
