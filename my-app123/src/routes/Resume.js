import { Box, Heading, Link, Text } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Resume() {
  return (
  <><Navbar/> <Box bg="black" color="white" p={4}>
      <Heading color="white" as="h1" textAlign="center" mb={4}>
        
      </Heading>
      <Text textAlign="center" fontFamily="Times New Roman">
        You can download my resume at{" "}
        <Link href="https://docs.google.com/document/d/e/2PACX-1vQoEVmCgFhZwX2j5cgHa4qekdnmdhBCj-nm-27WyGynKpoq2BCoOyLlxiH6pTLZHGUazEfafnPzOMla/pub" color="white">
          this link
        </Link>
        
      </Text>
    </Box><Footer/></>
    
  );
}

export default Resume;