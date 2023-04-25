import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Box,
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/hooks";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import config from "./Login/config.json";

function PanierModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [cart, setCart] = useState([]);

  const cart2 = config.carts;
  const totalPriceCart = cart2 && cart2.reduce((acc, cart) => acc + cart.totalPrice, 0);

  useEffect(() => {
    axios.get(`https://localhost:7201/api/cart`).then((response) => {
      setCart(response.data);
    });
  }, []);

  return (
    <>
      <Button
        colorScheme="teal"
        variant="link"
        color={"white"}
        onClick={onOpen}
      >
        Panier
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Mon panier</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Box>
              {cart2 && cart2.map((cart) => (
                <p>
                  {cart.name} - {cart.quantity} - Prix : {cart.totalPrice}
                </p>
              ))}
            </Box>
            <Box>Prix total : {totalPriceCart}</Box>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3}>
              <NavLink end to="/panier">
                Accéder au panier
              </NavLink>
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default PanierModal;
