import React from "react";
import { Center, Box, Grid, Heading, Link, Stack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faNoteSticky,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";

function Menu(props) {
  return (
    <>
      <Grid templateColumns="repeat(3, 1fr)" pt={20} gap={6}>
        <Link href="/stock-settings">
          <Box w="100%" h="100%">
            <Center py={6}>
              <Box
                maxW={"270px"}
                w={"full"}
                bg={"white"}
                boxShadow={"lg"}
                rounded={"lg"}
                overflow={"hidden"}
                p={6}
              >
                <Stack spacing={0} align={"center"} mb={5}>
                  <Heading
                    fontSize={"6xl"}
                    fontWeight={500}
                    mb={5}
                    fontFamily={"body"}
                  >
                    <FontAwesomeIcon icon={faNoteSticky} />
                  </Heading>

                  <p>Gestion des stocks</p>
                </Stack>
              </Box>
            </Center>
          </Box>
        </Link>
        <Link href="/commands-settings">
          <Box w="100%" h="100%">
            <Center py={6}>
              <Box
                maxW={"270px"}
                w={"full"}
                bg={"white"}
                boxShadow={"lg"}
                rounded={"lg"}
                overflow={"hidden"}
                p={6}
              >
                <Stack spacing={0} align={"center"} mb={5}>
                  <Heading
                    fontSize={"6xl"}
                    fontWeight={500}
                    mb={5}
                    fontFamily={"body"}
                  >
                    <FontAwesomeIcon icon={faNoteSticky} />
                  </Heading>

                  <p>Gestions des commandes</p>
                </Stack>
              </Box>
            </Center>
          </Box>
        </Link>
        <Link href="/fournisseurs-settings">
          <Box w="100%" h="100%">
            <Center py={6}>
              <Box
                maxW={"270px"}
                w={"full"}
                bg={"white"}
                boxShadow={"lg"}
                rounded={"lg"}
                overflow={"hidden"}
                p={6}
              >
                <Stack spacing={0} align={"center"} mb={5}>
                  <Heading
                    fontSize={"6xl"}
                    fontWeight={500}
                    mb={5}
                    fontFamily={"body"}
                  >
                    <FontAwesomeIcon icon={faNoteSticky} />
                  </Heading>

                  <p>Gestions des fournisseurs</p>
                </Stack>
              </Box>
            </Center>
          </Box>
        </Link>
        <Link href="/clients-settings">
          <Box w="100%" h="100%">
            <Center py={6}>
              <Box
                maxW={"270px"}
                w={"full"}
                bg={"white"}
                boxShadow={"lg"}
                rounded={"lg"}
                overflow={"hidden"}
                p={6}
              >
                <Stack spacing={0} align={"center"} mb={5}>
                  <Heading
                    fontSize={"6xl"}
                    fontWeight={500}
                    mb={5}
                    fontFamily={"body"}
                  >
                    <FontAwesomeIcon icon={faUsers} />
                  </Heading>

                  <p>Gestion des clients</p>
                </Stack>
              </Box>
            </Center>
          </Box>
        </Link>
      </Grid>
    </>
  );
}

export default Menu;
