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

function CommandsSettings(props) {
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
              Interface qui permet d'ajouter, de modifier ou de supprimer des
              commandes.
            </Text>
          </Box>
          <Box>
            <Link href="/">
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
                <Th isNumeric>Prix total</Th>
                <Th>Status</Th>
                <Th textAlign={"center"}>Actions</Th>
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

export default CommandsSettings;
