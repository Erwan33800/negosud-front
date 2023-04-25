import React, { useEffect, useState } from "react";
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  FormControl,
  FormLabel,
  Input,
  Stack,
} from "@chakra-ui/react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRedo } from "@fortawesome/free-solid-svg-icons";

function UpdateS(props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [name, setName] = useState();
  const [stock, setStock] = useState();
  const [price, setPrice] = useState();

  const handleUpdate = async (e) => {
    e.preventDefault();

    const bottle = {
      id: props.bottle.id,
      name: name,
      stock: stock,
      price: price,
      userId: 3,
    };
    await axios.put(`https://localhost:7201/api/article`, bottle);
    onClose();
    window.location.reload();
  };

  return (
    <>
      <Button onClick={onOpen} size={"sm"} variant="brand" color="blue">
        <FontAwesomeIcon icon={faRedo} />
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modifier le stock</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Stack spacing={4}>
              <FormControl
                id="name"
                required
                onChange={(e) => setName(e.target.value)}
              >
                <FormLabel>Nom de la bouteille :</FormLabel>
                <Input type="text" />
              </FormControl>
              <FormControl
                id="price"
                required
                onChange={(e) => setPrice(e.target.value)}
              >
                <FormLabel>Prix de la bouteille :</FormLabel>
                <Input type="text" />
              </FormControl>
              <FormControl
                id="stock"
                required
                onChange={(e) => setStock(e.target.value)}
              >
                <FormLabel>Nouveau stock :</FormLabel>
                <Input type="text" />
              </FormControl>
            </Stack>
          </ModalBody>

          <ModalFooter>
            <Button
              bg={"blue.400"}
              color={"white"}
              _hover={{
                bg: "blue.500",
              }}
              onClick={handleUpdate}
              mr={5}
            >
              Modifier
            </Button>
            <Button colorScheme="orange" onClick={onClose}>
              Annuler
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default UpdateS;
