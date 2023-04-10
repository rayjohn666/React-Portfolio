import React from "react";
import {Box, Image, Stack,Heading} from "@chakra-ui/react"
import Navbar from "../components/Navbar";


const Projects = () => {

    const portfolioData = [{
        title: "Tech-Blog",
        img: "my-app123/src/images/Screenshot 2023-04-09 at 9.12.18 PM.png",
        url: "https://tech-blog123666.herokuapp.com/"
    },{
        title: "Boundless Bites",
        img: "h/Users/haydendillon-lloyd/Desktop/Projects/React-Portfolio/React-Portfolio/my-app123/src/images/Screenshot 2023-04-09 at 9.15.26 PM.png",
        url: "https://github.com/rayjohn666/BoundlessBites.git"
    },{
        title: "What to Watch",
        img: "my-app123/src/images/Screenshot 2023-04-09 at 9.59.34 PM.png",
        url: "#"
    },{
        title: "Team Profile Generator",
        img: "my-app123/src/images/Screenshot 2023-04-09 at 10.04.04 PM.png",
        url: "#"
    },{
        title: "Employee Tracker",
        img: "https://place-hold.it/200",
        url: "#"
    },{
        title: "blog",
        img: "https://place-hold.it/200",
        url: "#"
    }]

    const boxStyles = {
        fontFamily: "times new roman",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        textAlign: "center",
        cursor: "pointer" ,
        width: ["100%","100%","32%"],
        border: "solid 1px white"
    }

    return <Box fontFamily="times new roman"color="white" p="20px">
        <Navbar/>
        <Heading fontFamily={"Times New Roman"} mb="30px"> My Portfolio</Heading>
        <Box maxW="900px" margin={"0 auto"}>
        <Box display={"flex"} flexDirection={["column","column","row"]} flexWrap={"wrap"} 
        gap={["30px","30px","10px"]}>
        {
           portfolioData.map(p => {
            return <Box onClick={()=>{
                window.location = p.url
            }} 
            {...boxStyles}
            >
                <Heading as="h2">{p.title}</Heading>
                <Image src={p.img}/>
            </Box>
           }) 

        }
        </Box>
        </Box>
    </Box>;
};

export default Projects;