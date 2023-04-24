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

function Panier(props) {
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
                      <Box>
                        <Heading size="xs" textTransform="uppercase">
                          Nom de la bouteille
                        </Heading>
                        <Flex>
                          <Box>
                            <Text pt="2" fontSize="sm">
                              Description de la bouteille
                            </Text>
                          </Box>
                          <Box ml={5}>
                            <Text as="b">45 €</Text>
                          </Box>
                        </Flex>
                      </Box>
                      <Box>
                        <Heading size="xs" textTransform="uppercase">
                          Nom de la bouteille
                        </Heading>
                        <Flex>
                          <Box>
                            <Text pt="2" fontSize="sm">
                              Description de la bouteille
                            </Text>
                          </Box>
                          <Box ml={5}>
                            <Text as="b">45 €</Text>
                          </Box>
                        </Flex>
                      </Box>
                      <Box>
                        <Heading size="xs" textTransform="uppercase">
                          Nom de la bouteille
                        </Heading>
                        <Flex>
                          <Box>
                            <Text pt="2" fontSize="sm">
                              Description de la bouteille
                            </Text>
                          </Box>
                          <Box ml={5}>
                            <Text as="b">45 €</Text>
                          </Box>
                        </Flex>
                      </Box>
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
                    $450
                  </Text>
                  <CardFooter>
                    <Button variant="solid" colorScheme="blue">
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
