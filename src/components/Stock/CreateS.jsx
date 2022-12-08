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

function CreateS(props) {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [nb_selection, setNb_selection] = useState("");
  const [fifa_note, setFifa_note] = useState("");

  const history = useNavigate();

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const fournisseur = {
  //     fname,
  //     lname,
  //     nb_selection,
  //     fifa_note,
  //   };
  //   await axios.post(`http://localhost:5010/create-fournisseur`, fournisseur);
  //   history("/admin/fournisseurs-settings");

  // };

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
            <Heading fontSize={"4xl"}>Création d'un stock</Heading>
            <Text fontSize={"lg"} color={"gray.600"} textAlign={"center"}>
              Interface qui permet de créer un stock.
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
                //onChange={(e) => setLname(e.target.value)}
              >
                <FormLabel>Nom de famille :</FormLabel>
                <Input type="text" />
              </FormControl>
              <FormControl
                id="fname"
                required
                //onChange={(e) => setFname(e.target.value)}
              >
                <FormLabel>Prénom :</FormLabel>
                <Input type="text" />
              </FormControl>

              <FormControl
                id="fifa_note"
                required
                //onChange={(e) => setFifa_note(e.target.value)}
              >
                <FormLabel>Note Fifa :</FormLabel>
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
                  //onClick={handleSubmit}
                >
                  Créer
                </Button>
                <Button colorScheme="orange">
                  <Link href="/stock-settings">Retour</Link>
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

export default CreateS;
