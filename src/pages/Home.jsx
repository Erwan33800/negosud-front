import React from "react";
import { Stack, Box, useColorModeValue } from "@chakra-ui/react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Menu from "../components/Menu";
import vinsHome from "../assets/vinsHome.png";

function Home() {
  return (
    <>
      <Header />
      <Box
        minH={"84.6vh"}
        justify={"center"}
        bg={useColorModeValue("gray.50", "gray.800")}
      >
        <Stack spacing={8} mb={10} pt={20} align="center">
          <img
           src={vinsHome}
           alt="pt_menu"
          />
        </Stack>
        <Menu />
      </Box>
      <Footer />
    </>
  );
}

export default Home;
