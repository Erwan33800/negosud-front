import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {
  Heading,
  Flex,
  Box,
  Text,
  Link,
  Button,
  useColorModeValue,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  ButtonGroup,
  Stack,
  Divider,
  Input,
  StackDivider,
  Center,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import axios from "axios";
import config from "../components/Login/config.json";

function Panier(props) {
  const [cart, setCart] = useState([]);

  const cart2 = config.carts;
  const totalPriceCart =
    cart2 && cart2.reduce((acc, cart) => acc + cart.totalPrice, 0);

  useEffect(() => {
    axios.get(`https://localhost:7201/api/cart`).then((response) => {
      setCart(response.data);
    });
  }, []);

  const buyCard = () => {
    alert("Votre commande a bien été prise en compte");
    window.location.href = "/home";
  };

  return (
    <div>
      <Header />
      <Center bg={useColorModeValue("gray.50", "gray.800")}>
        <Box minH={"84.6vh"} justify={"center"}>
          <Flex justify={"space-between"} ml={20} mr={20} pt={10}>
            <Box>
              <Heading as="h2" fontSize="4xl" align={"center"}>
                Mon panier
              </Heading>
              <Flex>
                <Card m={10}>
                  <CardHeader>
                    <Heading size="md">Les bouteilles</Heading>
                  </CardHeader>

                  <CardBody>
                    <Stack divider={<StackDivider />} spacing="4">
                      {cart2 &&
                        cart2.map((cart) => (
                          <Box>
                            <Heading size="xs" textTransform="uppercase">
                              {cart.name}
                            </Heading>
                            <Flex>
                              <Box>
                                <Text pt="2" fontSize="sm">
                                  Quantité: {cart.quantity}
                                </Text>
                              </Box>
                              <Box ml={5}>
                                <Text pt="2" fontSize="sm" as="b">
                                  Prix :{cart.totalPrice} €
                                </Text>
                              </Box>
                            </Flex>
                          </Box>
                        ))}
                    </Stack>
                  </CardBody>
                </Card>
                <Card maxW="sm" m={10}>
                  <CardBody>
                    <Stack mt="6" spacing="3">
                      <Heading size="md">Informations de livraison</Heading>
                    </Stack>
                    <Text mb="8px">Adresse: </Text>
                    <Input size="sm" />
                    <Text mb="8px">Code Postal: </Text>
                    <Input size="sm" />
                    <Text mb="8px">Ville: </Text>
                    <Input size="sm" />
                    <Divider />

                    <Text mb="8px">Numéro de carte: </Text>
                    <Input size="sm" />
                    <Text mb="8px">Date d'expiration: </Text>
                    <Input size="sm" />
                    <Text mb="8px">CVC: </Text>
                    <Input size="sm" />
                  </CardBody>
                  <Divider />

                  <Text color="blue.600" fontSize="2xl" align={"center"}>
                    {totalPriceCart} €
                  </Text>
                  <CardFooter>
                    <Button
                      variant="solid"
                      colorScheme="blue"
                      onClick={buyCard}
                    >
                      Acheter
                    </Button>
                  </CardFooter>
                </Card>
              </Flex>
            </Box>
          </Flex>
        </Box>
      </Center>

      <Footer />
    </div>
  );
}

export default Panier;
