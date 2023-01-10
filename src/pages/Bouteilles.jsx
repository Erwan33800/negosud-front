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

function BottleSettings(props) {
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
              Gérer les Footballers
            </Heading>
            <Text fontSize="md">
              Interface qui permet d'ajouter, de modifier ou de supprimer des
              footballers.
            </Text>
          </Box>
          <Box>
            <Link href="/admin/footballer-create">
              <Button colorScheme="green" mr={2}>
                Ajouter un footballer
              </Button>
            </Link>
            <Link href="/admin">
              <Button colorScheme="orange">Retour</Button>
            </Link>
          </Box>
        </Flex>
        <TableContainer ml={20} mr={20} mb={10} pt={5}>
          <Table variant="simple" colorScheme={"teal"} size={"md"}>
            <Thead>
              <Tr>
                <Th>Prénom Nom</Th>
                <Th>Nb de fois sélectionné</Th>
                <Th textAlign={"center"}>Actions</Th>
              </Tr>
            </Thead>
            {/* <FootballerTableSettings /> */}
          </Table>
        </TableContainer>
      </Box>
      <Footer />
    </div>
  );
}

export default BottleSettings;
