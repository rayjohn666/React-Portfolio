import React, {useState} from "react";
import "./App.css";
import Home from "./routes/Home";
import About from "./routes/About";
import Projects from "./routes/Projects";
import Contact from "./routes/Contact";

import { Route, Routes, NavLink } from "react-router-dom";
import Navbar from "./components/Navbar";
import Card from "./components/Card";


// navbar ------------------------------------
// function App() {
//   return (
//     <Routes>
//       <Route path="/" element={<Home />} />
//       <Route path="/projects" element={<Projects />} />
//       <Route path="/about" element={<About />} />
//       <Route path="/contact" element={<Contact />} />
//     </Routes>
//   );
// }
// // -------------------------------------------




function App() {
  const [activeSection, setActiveSection] = useState('about');

  return (
    <div className="App">
      <header>
        <h1>Developer Name</h1>
        {/* <nav> */}
          {/* <Routes>
            <Route path="/" element={<NavLink to="/" activeClassName="active" onClick={() => setActiveSection('about')}>About Me</NavLink>} />
            <Route path="/projects" element={<NavLink to="/projects" activeClassName="active" onClick={() => setActiveSection('portfolio')}>Portfolio</NavLink>} />
            <Route path="/about" element={<NavLink to="/about" activeClassName="active" onClick={() => setActiveSection('about')}>About Me</NavLink>} />
            <Route path="/contact" element={<NavLink to="/contact" activeClassName="active" onClick={() => setActiveSection('contact')}>Contact</NavLink>} />
          </Routes> */}

        {/* </nav> */}
          <Navbar />

      </header>
      <Card link="https://tech-blog123666.herokuapp.com/" name ="project 1" description = "-tech blog" />
      <Card link="https://youtube.com" name ="project 2" description = "html program" />
      <Card link="https://instagram.com" name ="project 3" description = "css program"  />
  
      {/* // <main>
      //   <Routes>
      //     <Route path="/" element={<Home />} />
      //     <Route path="/projects" element={<Projects />} />
      //     <Route path="/about" element={<About />} />
      //     <Route path="/contact" element={<Contact />} />
      //   </Routes>
      // </main> */}

      <footer>
        <a href="https://github.com/example" target="_blank" rel="noopener noreferrer">
          <i className="fa fa-github"></i>
        </a>
        <a href="https://linkedin.com/in/example" target="_blank" rel="noopener noreferrer">
          <i className="fa fa-linkedin"></i>
        </a>
      </footer>
    </div>
  );
};




export default App;