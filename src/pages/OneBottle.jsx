import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {
  Flex,
  Box,
  Text,
  Image,
  Button,
  useColorModeValue,
  Center,
} from "@chakra-ui/react";
import tariquet from "../assets/tariquet.jpg";

function OneBottleSettings() {
  const [quantity, setQuantity] = useState(1);

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };
  const price = 15;
  const totalPrice = price * quantity;
  return (
    <div>
      <Header />
      <Box
        minH={"84.6vh"}
        justify={"center"}
        bg={useColorModeValue("gray.50", "gray.800")}
      >
        <Center py={6}>
          <Box
            width={800}
            height={500}
            left={245}
            borderRadius={22}
            maxW={"800px"}
            bg={"white"}
            boxShadow={"lg"}
            overflow={"hidden"}
            p={6}
          >
            <Flex mt={5}>
              <Box boxSize="sm">
                <Image src={tariquet} alt="tariquet" />
              </Box>
              <Box>
                <Text fontSize="3xl" as="b">
                  Château Chante Alouete
                </Text>
                <Box mt={5}>
                  <Text as="i">Bordeaux, Saint Émilion Grand Cru</Text>
                  <Text>2019</Text>
                  <Text>Notes :</Text>
                  <Text>
                    Quantité :
                    <Text as="b">
                      <Button
                        colorScheme="teal"
                        variant="ghost"
                        onClick={handleDecrease}
                      >
                        -
                      </Button>
                      {quantity}
                      <Button
                        colorScheme="teal"
                        variant="ghost"
                        onClick={handleIncrease}
                      >
                        +
                      </Button>
                    </Text>
                  </Text>
                </Box>
                <Text>Prix total : {totalPrice} €</Text>
                <Button mt={10}>Ajouter au panier</Button>
              </Box>
            </Flex>
          </Box>
        </Center>
      </Box>
      <Footer />
    </div>
  );
}

export default OneBottleSettings;
