import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {
  Heading,
  Flex,
  Box,
  Button,
  useColorModeValue,
  Stack,
  Center,
  Grid,
  Input,
  IconButton,
} from "@chakra-ui/react";
import HospicesDeBeaune from "../assets/HospicesDeBeaune.jpg";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { SearchIcon } from "@chakra-ui/icons";

function BottleSettings(props) {
  const [bottles, setBottles] = useState();
  const [searchTerm, setSearchTerm] = useState("");

  const filteredBottles = bottles && bottles.filter((bottle) =>
    bottle.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    axios.get("https://localhost:7201/api/article").then((response) => {
      setBottles(response.data);
    });
  }, []);

  return (
    <Box h="calc(100vh)" bg={useColorModeValue("gray.50", "gray.800")}>
      <Header />
      <Flex justify={"space-between"} align={"center"} ml={20} mr={20} pt={10}>
        <Box>
          <Heading as="h2" fontSize="4xl">
            Les vins
          </Heading>
        </Box>
        <Box top={1000}>
          <Link href="">
            <Button variant="ghost" colorScheme="red">
              Rouge
            </Button>
          </Link>
          <Link href="">
            <Button variant="ghost" colorScheme="blackAlpha">
              Blanc
            </Button>
          </Link>
        </Box>
      </Flex>
      <Input
        w={"30%"}
        ml={20}
        mt={5}
        placeholder="Rechercher une bouteille"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <Grid templateColumns="repeat(4, 1fr)" pt={10} gap={6}>
        {filteredBottles &&
          filteredBottles.map((bottle) => (
            <Box key={bottle.id} w="100%" h="100%" mb={10}>
              <Center py={6}>
                <Link to={`/one-bottle-settings/${bottle.id}`}>
                  <Box
                    width={200}
                    height={230}
                    left={245}
                    borderRadius={22}
                    maxW={"270px"}
                    bg={"white"}
                    boxShadow={"lg"}
                    overflow={"hidden"}
                    p={6}
                  >
                    <Stack spacing={0} align={"center"} mb={5}>
                      <Heading
                        width={147}
                        height={130}
                        left={919}
                        top={637}
                        fontSize={"6xl"}
                        fontWeight={500}
                        mb={5}
                        fontFamily={"body"}
                      >
                        <img src={HospicesDeBeaune} alt="" />
                      </Heading>

                      <p>{bottle.name}</p>
                    </Stack>
                  </Box>
                </Link>
              </Center>
            </Box>
          ))}
      </Grid>

      <Footer />
    </Box>
  );
}

export default BottleSettings;
