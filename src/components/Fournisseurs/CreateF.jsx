import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import Header from "../Header";
import Footer from "../Footer";
import axios from "axios";

function CreateF(props) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const history = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const fournisseur = {
      firstName,
      lastName,
      email,
      role: 5,
      password: "",
    };
    await axios.post(`https://localhost:7201/api/user`, fournisseur);
    history("/fournisseurs-settings");
  };

  return (
    <>
      <Header />

      <Flex
        minH={"84.6vh"}
        align={"center"}
        justify={"center"}
        bg={useColorModeValue("gray.50", "gray.800")}
      >
        <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
          <Stack align={"center"}>
            <Heading fontSize={"4xl"}>Création d'un fournisseur</Heading>
            <Text fontSize={"lg"} color={"gray.600"} textAlign={"center"}>
              Interface qui permet de créer un fournisseur.
            </Text>
          </Stack>
          <Box
            rounded={"lg"}
            bg={useColorModeValue("white", "gray.700")}
            boxShadow={"lg"}
            p={8}
          >
            <Stack spacing={4}>
              <FormControl
                id="lname"
                required
                onChange={(e) => setLastName(e.target.value)}
              >
                <FormLabel>Nom de famille :</FormLabel>
                <Input type="text" />
              </FormControl>
              <FormControl
                id="fname"
                required
                onChange={(e) => setFirstName(e.target.value)}
              >
                <FormLabel>Prénom :</FormLabel>
                <Input type="text" />
              </FormControl>

              <FormControl
                id="email"
                required
                onChange={(e) => setEmail(e.target.value)}
              >
                <FormLabel>Email :</FormLabel>
                <Input type="text" />
              </FormControl>
              <Flex justify={"space-around"}>
                <Button
                  type="submit"
                  bg={"blue.400"}
                  color={"white"}
                  _hover={{
                    bg: "blue.500",
                  }}
                  onClick={handleSubmit}
                >
                  Créer
                </Button>
                <Button colorScheme="orange">
                  <Link href="/fournisseurs-settings">Retour</Link>
                </Button>
              </Flex>
            </Stack>
          </Box>
        </Stack>
      </Flex>
      <Footer />
    </>
  );
}

export default CreateF;
