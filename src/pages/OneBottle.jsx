import React, { useState, useEffect } from "react";
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
import axios from "axios";
import { useParams } from "react-router-dom";

function OneBottleSettings() {
  const { id } = useParams();
  const [bottle, setBottle] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`https://localhost:7201/api/article/${id}`).then((response) => {
      setBottle(response.data);
      setLoading(false);
    });
  }, [id]);

  const price = bottle ? bottle.price : 10;
  const name = bottle ? bottle.name : "";
  const stock = bottle ? bottle.stock : 20;

  const [quantity, setQuantity] = useState(1);
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = () => {
    // Ajouter l'élément au panier ici
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 3000);
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  const setToOneBottle = () => {
    setQuantity(1);
  };

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };
  if (quantity > stock) {
    alert("Stock insuffisant");
    setQuantity(stock);
  }
  const totalPrice = price * quantity;

  const handleSubmitPanier = (e) => {
    e.preventDefault();
    const cart = {
      articleId: parseInt(id),
      quantity: 5,
    };
    axios.post("https://localhost:7201/api/cart", cart);
  };
  return (
    <div>
      <Header />
      <Box
        minH={"84.6vh"}
        justify={"center"}
        bg={useColorModeValue("gray.50", "gray.800")}
      >
        {loading ? (
          <Center>Loading...</Center>
        ) : (
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
                    {name}
                  </Text>
                  <Box mt={5}>
                    <Text as="i">Bordeaux, Saint Émilion Grand Cru</Text>
                    <Text>2019</Text>
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
                        {quantity > 1 ? (
                          <Button
                            colorScheme="teal"
                            onClick={setToOneBottle}
                            size={"sm"}
                            variant={"outline"}
                          >
                            Remettre à 1
                          </Button>
                        ) : (
                          <></>
                        )}
                      </Text>
                    </Text>
                  </Box>
                  <Text>Prix total : {totalPrice} €</Text>
                  <Button mt={10} onClick={handleSubmitPanier}>
                    Ajouter au panier
                  </Button>
                </Box>
              </Flex>
            </Box>
          </Center>
        )}
      </Box>
      <Footer />
    </div>
  );
}

export default OneBottleSettings;
