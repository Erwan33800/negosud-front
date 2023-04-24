import React from "react";
import { Center, Box, Grid, Heading, Text, Stack } from "@chakra-ui/react";
import tariquet from "../assets/tariquet.jpg";
import HospicesDeBeaune from "../assets/HospicesDeBeaune.jpg";
import cognac from "../assets/cognac.jpg";

function Menu(props) {
  return (
    <>
      <Text fontSize="3xl" align={"center"}>
        Les bouteilles du moment :
      </Text>
      <Grid templateColumns="repeat(3, 1fr)" pt={20} gap={6}>
        <Box w="100%" h="100%">
          <Center py={6}>
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
                  <img src={tariquet} alt="pt_menu" />
                </Heading>

                <p>Tariquet</p>
              </Stack>
            </Box>
          </Center>
        </Box>
        <Box w="100%" h="100%">
          <Center py={6}>
            <Box
              width={200}
              height={230}
              left={245}
              top={637}
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
                  <img src={HospicesDeBeaune} alt="pt_menu" />
                </Heading>

                <p>Hospices de Beaune</p>
              </Stack>
            </Box>
          </Center>
        </Box>
        <Box w="100%" h="100%">
          <Center py={6}>
            <Box
              width={200}
              height={230}
              left={245}
              top={637}
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
                  <img src={cognac} alt="pt_menu" />
                </Heading>

                <p>Cognac</p>
              </Stack>
            </Box>
          </Center>
        </Box>
      </Grid>
    </>
  );
}

export default Menu;
