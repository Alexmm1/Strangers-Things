import React from "react";
import ReactDOM from "react-dom/client";
import Main from "./components/Main.jsx";
import LoginForm from "./components/LoginForm.jsx";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

// const router = createBrowserRouter(
//   createRoutesFromElements(<Route path="/" element={<Main />}></Route>)
// );

const container = document.getElementById("app");
const root = ReactDOM.createRoot(container);

root.render(<Main />);
