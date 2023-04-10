import React from "react";
import Navbar from "../components/Navbar";


import Card from "../components/Card";

const Home = () => {
    return <div>
        <Navbar/>
        <header>
        <h1>Hayden Dillon-Lloyd</h1>
       


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
        </div>;
};

export default Home;