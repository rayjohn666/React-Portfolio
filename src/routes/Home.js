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
          <Heading display="flex: block"
          justifyContent="center"
          width="400px"
          p={8}
          bg="rgba(255, 255, 255, 0.8)"
          borderRadius="md"
          boxShadow="md"
          mx="auto" // add mx property to center horizontally
          mb={4} color={"Black"} fontFamily={"Times New Roman"}>
            Hayden Dillon-Lloyd
          </Heading>
        </header>

        <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
         <Image src={ProfilePic} alt="Hayden's Portfolio Pic" />
        </Box>
      </Box>
      
        <Footer/></>
    
  );
};

export default Home;
