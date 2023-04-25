import React from "react";
import { Stack, Box, useColorModeValue } from "@chakra-ui/react";
import Header from "../components/HeaderAdmin";
import Footer from "../components/Footer";
import Menu from "../components/Menu";
import MenuAdmin from "../components/MenuAdmin";

function Home(props) {
  return (
    <>
      <Box h={"100vh"}>
        <Header />
        <Box
          minH={"84.6vh"}
          justify={"center"}
          bg={useColorModeValue("gray.50", "gray.800")}
        >
          <MenuAdmin />
        </Box>
        <Footer />
      </Box>
    </>
  );
}

export default Home;
