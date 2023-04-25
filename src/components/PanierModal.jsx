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

function PanierModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [cart, setCart] = useState([]);

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
            <Box></Box>
            <Box>Prix total : 100€</Box>
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
