import React, {useState} from "react";
import "./App.css";
import Home from "./routes/Home";
import About from "./routes/About";
import Projects from "./routes/Projects";
import Contact from "./routes/Contact";
import Resume from "./routes/Resume"

import {  RouterProvider, createBrowserRouter } from "react-router-dom";






const router = createBrowserRouter([
  {
    path: "/react-gh-pages",
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
  },
  {
    path: "/resume",
    element: <Resume />
  }
  ]);



function App() {
  const [activeSection, setActiveSection] = useState('about');

  return (
    
    <div className="App">
        <RouterProvider router={router} />
        <p> test 1 {activeSection}</p>
        <p>  test 2 {setActiveSection}</p>
    </div>
  );
};




export default App;