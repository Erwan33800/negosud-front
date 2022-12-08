import React from "react";
import { Heading, Stack, Box, useColorModeValue } from "@chakra-ui/react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Menu from "../components/Menu";

function Home(props) {
  return (
    <>
      <Header />
      <Box
        minH={"84.6vh"}
        justify={"center"}
        bg={useColorModeValue("gray.50", "gray.800")}
      >
        <Stack spacing={8} mb={10} pt={20} align="center">
          <Heading as="h2" size="2xl">
            Bienvenue sur Négosud
          </Heading>
        </Stack>
        <Menu />
      </Box>
      <Footer />
    </>
  );
}

export default Home;
