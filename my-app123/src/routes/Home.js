import React from "react";
import Navbar from "../components/Navbar";

import Footer from "../components/Footer";
import Card from "../components/Card";
import { Image, Box, Heading } from "@chakra-ui/react";

const Home = () => {
  return (
    <div>
      <Navbar />
      <header>
        <Heading color={"white"} fontFamily={"Times New Roman"}>
          Hayden Dillon-Lloyd
        </Heading>
      </header>

      <Box boxSize="sm">
        <Image src="./images/Personal-pic.png" alt="Dan Abramov" />
      </Box>

      <Footer />
    </div>
  );
};

export default Home;
