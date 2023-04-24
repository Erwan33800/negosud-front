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
        py="5"
        align="center"
        justify="space-between"
        bg="#CE5347"
      >
        <NavLink
          style={{ fontSize: "32px", color: "#FFFBFB" }}
          end
          to="/home"
          className="regist"
        >
          NEGOSUD
        </NavLink>
        <NavLink
          style={{ fontSize: "14px", color: "#FFFBFB" }}
          end
          to="/bouteilles-settings"
          className="regist"
        >
          Les vins
        </NavLink>
        <NavLink
          style={{ fontSize: "14px", color: "#FFFBFB" }}
          end
          to="/commands-settings-user"
          className="regist"
        >
          Mes commandes
        </NavLink>
        <Flex justify={"center"} align={"center"} mr={5}>
          <PanierModal />
          <Logout />
        </Flex>
      </Flex>
    </chakra.header>
  );
}

export default Header;
