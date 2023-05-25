import React from "react";
import { Box, Image, Heading } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import projectOne from "../components/images/techblog.png";
import projectTwo from "../components/images/Boundless-Bites.png";
import projectThree from "../components/images/What-to-Watch.png";
import projectFour from "../components/images/Team-Profile-Generator.png";
import projectFive from "../components/images/Employee-Tracker.png";
import projectSix from "../components/images/E-commerce123.png";

const Projects = () => {
    const portfolioData = [
    {
    title: "Tech-Blog",
    img: projectOne,
    url: "https://tech-blog123666.herokuapp.com/",
    },
    {
    title: "Boundless Bites",
    img: projectTwo,
    url: "https://github.com/rayjohn666/BoundlessBites.git",
    },
    {
    title: "What to Watch",
    img: projectThree,
    url: "https://ianm1837.github.io/what-to-watch/",
    },
    {
    title: "Team Profile Generator",
    img: projectFour,
    url: "#https://github.com/rayjohn666/Team-Profile-Generator.git",
    },
    {
    title: "Employee Tracker",
    img: projectFive,
    url: "https://github.com/rayjohn666/employee_tracker123.git",
    },
    {
    title: "Portfolio",
    img: projectSix,
    url: "https://github.com/rayjohn666/wags-to-riches",
    },
];

const boxStyles = {
    fontFamily: "times new roman",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    textAlign: "center",
    cursor: "pointer",
    width: ["100%", "100%", "32%"],
    border: "solid 1px white",
};

return (
    <>
    <Box fontFamily="times new roman" color="white" p="20px">
        <Navbar />
        <Heading
        fontFamily={"Times New Roman"}
        mb="30px"
        display="flex: block"
        justifyContent="center"
        width="400px"
        p={8}
        bg="rgba(255, 255, 255, 0.8)"
        borderRadius="md"
        boxShadow="md"
          mx="auto" // add mx property to center horizontally
        color="black"
        >
        {" "}
        My Portfolio
        </Heading>
        <Box maxW="900px" margin={"0 auto"}>
        <Box display={"flex"} flexDirection={["column", "column", "row"]} flexWrap={"wrap"} gap={["30px", "30px", "10px"]}>
            {portfolioData.map((p) => {
            return (
                <Box
                key={p.url}
                onClick={() => {
                    window.location = p.url;
                }}
                {...boxStyles}
                >
                <Heading fontFamily={"Times New Roman"} as="h2">
                    {p.title}
                </Heading>
                <Image src={p.img} />
                </Box>
            );
            })}
        </Box>
        </Box>
    </Box>
    <Footer />
    </>
);
};

export default Projects;
