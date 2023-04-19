import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {
  Heading,
  Flex,
  Box,
  Text,
  Link,
  Table,
  TableContainer,
  Tr,
  Th,
  Thead,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";

function BottleSettings(props) {
  return (
    <div>
      <Header />
      <Box
        minH={"84.6vh"}
        justify={"center"}
        bg={useColorModeValue("gray.50", "gray.800")}
      >
        <Flex justify={"space-between"} align={"center"} ml={20} mr={20} pt={10}>
          <Box>
            <Heading as="h2" fontSize="4xl">
              Les vins
            </Heading>
          </Box>
          <Box top={1000}>
            <Link href="">
              <Button variant="ghost" colorScheme="red" >
                Rouge
              </Button>
            </Link>
            <Link href="">
              <Button variant="ghost" colorScheme="blackAlpha">Blanc</Button>
            </Link>
          </Box>
        </Flex>
      </Box>
      <Footer />
    </div>
  );
}

export default BottleSettings;
