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

function CreateCommand(props) {
  const [orderName, setOrderName] = useState("");

  const history = useNavigate();

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
            <Heading fontSize={"4xl"}>Création d'une commande</Heading>
            <Text fontSize={"lg"} color={"gray.600"} textAlign={"center"}>
              Interface qui permet de créer une commande.
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
                id="idCommand"
                required
              >
                <FormLabel>Nom de la commande :</FormLabel>
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
                  <Link href="/commands-settings">Retour</Link>
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

export default CreateCommand;
