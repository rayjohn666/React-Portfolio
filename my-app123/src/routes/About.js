import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Box, Heading, Text } from "@chakra-ui/react";

function About() {
  return (
    <>
      <Navbar />
      <Box bg="black" color="white" p={4}>
        <Heading as="h1" textAlign="center" fontFamily="Times New Roman" mb={4}>
          About Me
        </Heading>
        <Text
          textAlign="center"
          display="inline-block"
          fontFamily="Times New Roman"
          textIndent="left"
        >
          My name is Hayden Dillon-Lloyd, and I am a full stack web developer
          based in Portland, Oregon. I enjoy outdoor activities and staying
          physically active, and I find fulfillment in using my skills to create
          useful online tools that are both easy and fun to use. My passion for
          helping people is what drives me to constantly improve my craft and
          stay up-to-date with the latest trends and technologies in web
          development. As a web developer, I am dedicated to bringing my
          client's visions to life. Whether you are looking for a sleek and
          modern website or a complex web application, I have the skills and
          expertise to make it happen. With a strong attention to detail and a
          commitment to delivering high-quality work, I am confident that I can
          exceed your expectations and help you achieve your goals. So if you
          are looking for a talented and dedicated web developer who is
          passionate about creating effective and user-friendly online tools,
          look no further than me, Hayden Dillon-Lloyd. I would be honored to
          help bring your vision to life and create something truly amazing
          together.
        </Text>
      </Box>
      <Footer />
    </>
  );
}

export default About;
