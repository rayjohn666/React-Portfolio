import React from "react";
import "./App.css";
import Home from "./routes/Home";
import About from "./routes/About";
import Projects from "./routes/Projects";
import Contact from "./routes/Contact";
import Resume from "./routes/Resume"


import {   BrowserRouter as Router, Routes, Route } from "react-router-dom";






// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Home />
//   },
//   {
//     path: "/projects",
//     element: <Projects />
//   },
//   {
//     path: "/contact",
//     element: <Contact />
//   },
//   {
//     path: "/about",
//     element: <About />
//   },
//   {
//     path: "/resume",
//     element: <Resume />
//   }
//   ]);



function App() {

  return (
    
    <div className="App">
        <Router>
          <Routes>
            <Route path="/projects" element={<Projects/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/resume" element={<Resume/>}/>
            <Route path="/" element={<Home/>}/>
              

              

            
          </Routes>
          </Router>  
          
        
        
        
        
      
    </div>
  );
};




export default App;