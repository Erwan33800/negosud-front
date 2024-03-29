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
import FournisseursTableBody from "../components/TableBody/FournisseursTableBody";

function FournisseursSettings(props) {
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
              Gérer les Fournisseurs
            </Heading>
            <Text fontSize="md">
              Interface qui permet d'ajouter, de modifier ou de supprimer des
              fournisseurs.
            </Text>
          </Box>
          <Box>
            <Link href="/fournisseur-create">
              <Button colorScheme="green" mr={2}>
                Ajouter un Fournisseur
              </Button>
            </Link>
            <Link href="/">
              <Button colorScheme="orange">Retour</Button>
            </Link>
          </Box>
        </Flex>
        <TableContainer ml={20} mr={20} mb={10} pt={5}>
          <Table variant="simple" colorScheme={"teal"} size={"md"}>
            <Thead>
              <Tr>
                <Th>Nom du fournissseur</Th>
                <Th textAlign={"center"}>Actions</Th>
              </Tr>
            </Thead>
            <FournisseursTableBody />
          </Table>
        </TableContainer>
      </Box>
      <Footer />
    </div>
  );
}

export default FournisseursSettings;
