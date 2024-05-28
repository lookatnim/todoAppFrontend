import React, { useState } from "react";
import Register from "./components/Register";
import Login from "./components/Login";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element:  <Login/> ,
  },{
    path: "/register",
    element:  <Register/> ,
  },,{
    path: "/tasklist",
    element:  <TaskList/> ,
  },
]);

const App = () => {
  const [token, setToken] = useState(null);
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  return (
    <div className="container">
      <h1>To-Do List Application</h1>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
