import React from "react";
import Navbar from "../components/Navbar";

import Footer from "../components/Footer";
import ProfilePic from "../components/images/Personal-pic.png"
import { Image, Box, Heading } from "@chakra-ui/react";

const Home = () => {
  return (
      <> <Box fontFamily={"times new roman"} >
        <Navbar fontFamily={"times new roman"} />
        <header>
          <Heading color={"white"} fontFamily={"Times New Roman"}>
            Hayden Dillon-Lloyd
          </Heading>
        </header>

        <Box fontFamily={"times new roman"} boxSize="sm">
         <Image src={ProfilePic} alt="Dan Abramov" />
        </Box>
      </Box>
      
        <Footer/></>
    
  );
};

export default Home;
