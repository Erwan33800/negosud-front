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
  Stack,
  Center,
  HStack,
  Grid,
} from "@chakra-ui/react";
import HospicesDeBeaune from "../assets/HospicesDeBeaune.jpg";
import cognac from "../assets/cognac.jpg";
import tariquet from "../assets/tariquet.jpg";


function BottleSettings(props) {
  return (
    <div>
      <Header />
      <Box
        minH={"84.6vh"}
        bg={useColorModeValue("gray.50", "gray.800")}
      >
        <Flex justify={"space-between"} align={"center"} ml={20} mr={20} pt={10}>
          <Box>
            <Heading as="h2" fontSize="4xl">
              Les vins
            </Heading>
          </Box>
          <Box top={1000}>
            <Link href="">
              <Button variant="ghost" colorScheme="red" >
                Rouge
              </Button>
            </Link>
            <Link href="">
              <Button variant="ghost" colorScheme="blackAlpha">Blanc</Button>
            </Link>
          </Box>
        </Flex>
        <Grid templateColumns="repeat(3, 1fr)" pt={20} gap={6}>
          <Box w="100%" h="100%">
            <Center py={6}>
              <Link href="/one-bottle-settings">
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
                    <img 
                      src={tariquet}
                      alt="pt_menu"
                     />
                  </Heading>

                  <p>Tariquet</p>
                </Stack>
              </Box>
              </Link>
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
                     <img 
                      src={HospicesDeBeaune}
                      alt="pt_menu"
                     />
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
                     <img 
                      src={cognac}
                      alt="pt_menu"
                     />
                  </Heading>

                  <p>Cognac</p>
                </Stack>
              </Box>
            </Center>
          </Box>
      </Grid>
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
                    <img 
                      src={tariquet}
                      alt="pt_menu"
                     />
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
                     <img 
                      src={HospicesDeBeaune}
                      alt="pt_menu"
                     />
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
                     <img 
                      src={cognac}
                      alt="pt_menu"
                     />
                  </Heading>

                  <p>Cognac</p>
                </Stack>
              </Box>
            </Center>
          </Box>
      </Grid>
      </Box>
      
        
      <Footer />
    </div>
  );
}

export default BottleSettings;
