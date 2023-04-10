
import "./NavbarStyles.css";

import React, { useState } from 'react';
//import { Link } from "react-router-dom";
import {Stack, Link, Box, Button} from '@chakra-ui/react';
import { useNavigate } from "react-router-dom";
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
  } from '@chakra-ui/react'


const Navbar =() => {
    const navigate = useNavigate();

    const LinkStyles = {

    }
// example for testing consts
    // const Something = ({dog}) =>{
    //     return <div>somethign{dog}</div>
    // }
    

const [click, setClick] = useState(false);
const handleClick = () => setClick(!click);


    return <>
    <Stack direction={"row"} color="white" display={["none", "none", "flex"]}>
                <Link onClick={()=> navigate("/")}>Portfolio</Link>
                <Link onClick={()=> navigate("/")}>Home</Link>
                <Link onClick={()=> navigate("/projects")}>Projects</Link>
                <Link onClick={()=> navigate("/about")}>About</Link>
                <Link onClick={()=> navigate("/contact")}>Contact</Link>
                

    </Stack>
    <Box  display={["block", "block", "none"]}>
    <Accordion allowToggle>
  <AccordionItem border="none">

      <AccordionButton textAlign={"center"}>
       Nav
      </AccordionButton>

    <AccordionPanel pb={4}>
    <Stack direction={"column"} color="white">
                <Link {...LinkStyles} onClick={()=> navigate("/")}>Home</Link>
                <Link {...LinkStyles} onClick={()=> navigate("/projects")}>Projects</Link>
                <Link {...LinkStyles} onClick={()=> navigate("/about")}>About</Link>
                <Link  {...LinkStyles} onClick={()=> navigate("/contact")}>Contact</Link>
                <Link {...LinkStyles} onClick={()=> navigate("/")}>Resume</Link>
            </Stack>
    </AccordionPanel>
  </AccordionItem>

 
</Accordion>
    </Box>
    </>;

};





export default Navbar