import React from "react";
import {Box, Image, Stack,Heading} from "@chakra-ui/react"
import Navbar from "../components/Navbar";

const Projects = () => {

    const portfolioData = [{
        title: "Tech-Blog",
        img: "https://place-hold.it/200",
        url: "https://tech-blog123666.herokuapp.com/"
    },{
        title: "Boundless Bites",
        img: "https://place-hold.it/200",
        url: "https://github.com/rayjohn666/BoundlessBites.git"
    },{
        title: "blog",
        img: "https://place-hold.it/200",
        url: "#"
    },{
        title: "blog",
        img: "https://place-hold.it/200",
        url: "#"
    },{
        title: "blog",
        img: "https://place-hold.it/200",
        url: "#"
    },{
        title: "blog",
        img: "https://place-hold.it/200",
        url: "#"
    }]

    const boxStyles = {
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        textAlign: "center",
        cursor: "pointer" ,
        width: ["100%","100%","32%"],
        border: "solid 1px white"
    }

    return <Box color="white" p="20px">
        <Navbar/>
        <Heading mb="30px">Portfolio</Heading>
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