import React from "react";
import Logout from "./Logout";
import { Flex, Button, chakra, useColorMode } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

function Header(props) {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <chakra.header id="header">
      <Flex
        w="100%"
        px="6"
        py="5"
        align="center"
        justify="space-between"
        bg="#7c8b73"
      >
        <Button variant="text" color="white">
          {" "}
          NÉGOSUD{" "}
        </Button>
        <Flex justify={"center"} align={"center"} mr={5}>
          <Button variant="brand" onClick={toggleColorMode}>
            {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
          </Button>
          <Logout />
        </Flex>
      </Flex>
    </chakra.header>
  );
}

export default Header;
