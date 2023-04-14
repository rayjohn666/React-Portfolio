import React from "react";
import {Box, Image, Heading} from "@chakra-ui/react"
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Projects = () => {

    const portfolioData = [{
        title: "Tech-Blog",
        img: "../../images/techblog.png",
        url: "https://tech-blog123666.herokuapp.com/"
    },{
        title: "Boundless Bites",
        img: "../../images/Boundless-Bites.png",
        url: "https://github.com/rayjohn666/BoundlessBites.git"
    },{
        title: "What to Watch",
        img: "../../images/What-to-Watch.png",
        url: "#"
    },{
        title: "Team Profile Generator",
        img: "../../images/Team-Profile-Generator.png",
        url: "#https://github.com/rayjohn666/Team-Profile-Generator.git"
    },{
        title: "Employee Tracker",
        img: "../../images/Employee-Tracker.png",
        url: "https://github.com/rayjohn666/employee_tracker123.git"
    },{
        title: "E-commerce",
        img: "https://place-hold.it/200",
        url: "https://github.com/rayjohn666/E-commerce-back-end.git"
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

    return <><Box fontFamily="times new roman"color="white" p="20px">
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
                <Heading fontFamily={"Times New Roman"} as="h2">{p.title}</Heading>
                <Image src={p.img}/>
            </Box>
           }) 

        }
        </Box>
        </Box>
    </Box>
    <Footer/></>;
};

export default Projects;