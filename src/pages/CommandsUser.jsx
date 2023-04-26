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
import CommandsTableBody from "../components/TableBody/CommandsTableBody";

function CommandsSettingsUser(props) {
  return (
    <div>
      <Header />
      <Box
        minH={"84.6vh"}
        justify={"center"}
        bg={useColorModeValue("gray.50", "gray.800")}
      >
        <Flex justify={"space-between"} align={"center"} ml={20} mr={20} pt={5}>
          <Box>
            <Heading as="h2" fontSize="4xl">
              Gérer les Commandes
            </Heading>
            <Text fontSize="md">
              Interface qui permet de voir toutes les commandes que vous avez
              passées.
            </Text>
          </Box>
          <Box>            
            <Link href="/home">
              <Button colorScheme="orange">Retour</Button>
            </Link>
          </Box>
        </Flex>
        <TableContainer ml={20} mr={20} mb={10} pt={5}>
          <Table variant="simple" colorScheme={"teal"} size={"md"}>
            <Thead>
              <Tr>
                <Th>Nom de commande</Th>
                <Th>Date</Th>
              </Tr>
            </Thead>
            <CommandsTableBody />
          </Table>
        </TableContainer>
      </Box>
      <Footer />
    </div>
  );
}

export default CommandsSettingsUser;
