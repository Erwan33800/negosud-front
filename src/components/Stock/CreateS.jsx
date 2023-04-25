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
  const [name, setName] = useState("");
  const [stock, setStock] = useState(1);
  const [price, setPrice] = useState(0);

  const history = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const stockInfo = {
      name,
      stock,
      price,
      userId: 5,
      reference: "string",
      date: "2023-04-12T19:49:57.870Z",
      origin: "string",
    };
    await axios.post(`https://localhost:7201/api/article`, stockInfo);
    history("/stock-settings");
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
                id="name"
                required
                onChange={(e) => setName(e.target.value)}
              >
                <FormLabel>Nom du domaine :</FormLabel>
                <Input type="text" />
              </FormControl>
              <FormControl
                id="stock"
                required
                onChange={(e) => setStock(e.target.value)}
              >
                <FormLabel>Nombre de bouteilles :</FormLabel>
                <Input type="text" />
              </FormControl>

              <FormControl
                id="price"
                required
                onChange={(e) => setPrice(e.target.value)}
              >
                <FormLabel>Prix unitaire :</FormLabel>
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
