
import "./NavbarStyles.css";

import React, { useState } from 'react';
//import { Link } from "react-router-dom";
import {Stack, Link, Box, Popover} from '@chakra-ui/react';
import { useNavigate } from "react-router-dom";
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
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
// eslint-disable-next-line no-unused-vars
const handleClick = () => setClick(!click);


    return <>
    <Stack direction={"row"} color="white" display={["none", "none", "flex"]}>
                
                <Link onClick={()=> navigate("/")}>Home</Link>
                <Link onClick={()=> navigate("/projects")}>Projects</Link>
                <Link onClick={()=> navigate("/about")}>About</Link>
                <Link onClick={()=> navigate("/contact")}>Contact</Link>
                <Link onClick={()=> navigate("/")}>Resume</Link>
                

    </Stack>
    <Box  display={["block", "block", "none"]}>
    <Accordion allowToggle>
        <Popover isLazy>
                <AccordionItem border="none">

                    <AccordionButton id="Nav1" textAlign={"center"} color="white">
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
            </Popover>
 
</Accordion>
    </Box>
    </>;

};





export default Navbar