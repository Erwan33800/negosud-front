import React from "react";
import Logout from "./Logout";
import { Flex, Button, chakra, useColorMode } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { NavLink } from "react-router-dom";
import PanierModal from "./PanierModal";

function Header(props) {
  return (
    <chakra.header id="header">
      <Flex
        w="100%"
        px="6"
        py="2"
        align="center"
        justify="space-between"
        bg="#CE5347"
      >
        <NavLink
          style={{ fontSize: "32px", color: "#FFFBFB" }}
          end
          to="/homeAdmin"
          className="regist"
        >
          NEGOSUD
        </NavLink>

        <Flex justify={"center"} align={"center"} mr={5}>
          <Logout />
        </Flex>
      </Flex>
    </chakra.header>
  );
}

export default Header;
