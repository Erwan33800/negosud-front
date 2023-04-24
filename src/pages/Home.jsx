import React from "react";
import { Stack, Box, useColorModeValue } from "@chakra-ui/react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Menu from "../components/Menu";
import vinsHome from "../assets/vinsHome.png";
import MenuAdmin from "../components/MenuAdmin";

function Home(props) {
  const isAdmin = false;
  return (
    <>
      <Box h={"100vh"}>
        <Header />
        <Box
          minH={"84.6vh"}
          justify={"center"}
          bg={useColorModeValue("gray.50", "gray.800")}
        >
          <Stack spacing={8} mb={10} pt={20} align="center">
            <img src={vinsHome} alt="pt_menu" />
          </Stack>
          {isAdmin === false ? <Menu /> : <MenuAdmin />}
        </Box>
        <Footer />
      </Box>
    </>
  );
}

export default Home;
