import { Box, Flex, Link, Text } from "@chakra-ui/react";

function Footer() {
  return (
    <Box bg="black" color="white" p={4} mt="auto">
      <Flex justify="center" alignItems="center">
        <Text fontFamily="Times New Roman" fontSize="lg" mr={4}>
          Connect with me:
        </Text>
        <Link href="https://www.linkedin.com/in/hayden-dillon-lloyd-64266a255/" color="white" mr={4}>
          LinkedIn
        </Link>
        <Link href="https://docs.google.com/document/d/e/2PACX-1vQoEVmCgFhZwX2j5cgHa4qekdnmdhBCj-nm-27WyGynKpoq2BCoOyLlxiH6pTLZHGUazEfafnPzOMla/pub" color="white" mr={4}>
          Resume
        </Link>
        <Link href="https://github.com/rayjohn666" color="white">
          GitHub
        </Link>
      </Flex>
    </Box>
  );
}

export default Footer;
