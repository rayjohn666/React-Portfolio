import React, {useState} from "react";
import "./App.css";
import Home from "./routes/Home";
import About from "./routes/About";
import Projects from "./routes/Projects";
import Contact from "./routes/Contact";

import { Route, Routes, NavLink, RouterProvider, createBrowserRouter } from "react-router-dom";






const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/projects",
    element: <Projects />
  },
  {
    path: "/contact",
    element: <Contact />
  },
  {
    path: "/about",
    element: <About />
  }
  ]);



function App() {
  const [activeSection, setActiveSection] = useState('about');

  return (
    <div className="App">
        <RouterProvider router={router} />
    </div>
  );
};




export default App;