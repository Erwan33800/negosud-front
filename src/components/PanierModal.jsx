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

function PanierModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();
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
              <p>nom bouteille - quantité - prix</p>
              <p>nom bouteille - quantité - prix</p>
              <p>nom bouteille - quantité - prix</p>
              <p>nom bouteille - quantité - prix</p>
            </Box>
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
