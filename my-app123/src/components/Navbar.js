import "./NavbarStyles.css";

import React, { useState } from 'react';
import { Link } from "react-router-dom";



const Navbar =() => {


const [click, setClick] = useState(false);
const handleClick = () => setClick(!click);


    return (
        <div className="header">
            <Link to="/">
                <h1>Portfolio</h1>
            </Link>
            <ul>
                <li>
                    <Link to ="/">Home</Link>
                </li>
                <li>
                    <Link to ="/projects">Projects</Link>
                </li>
                <li>
                    <Link to ="/about">About</Link>
                </li>
                <li>
                    <Link to ="/contact">Contact</Link>
                </li>
            </ul>
            
        </div>
    );
};


export default Navbar