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

function UpdateF(fournisseur) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const id_f = fournisseur.id_f;
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const handleUpdate = async (e) => {
    e.preventDefault();
    const fournisseur = {
      id_f: id_f,
      firstName: firstName,
      lastName: lastName,
      email: email,
    };
    await axios.put(`https://localhost:7201/api/user`, fournisseur);
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
          <ModalHeader>Modifier un stock</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Stack spacing={4}>
              <FormControl
                id="lname"
                required
                // onChange={(e) => setLname(e.target.value)}
              >
                <FormLabel>Nom de famille :</FormLabel>
                <Input type="text" />
              </FormControl>
              <FormControl
                id="fname"
                required
                //onChange={(e) => setFname(e.target.value)}
              >
                <FormLabel>Prénom :</FormLabel>
                <Input type="text" />
              </FormControl>
              <FormControl
                id="fifa_note"
                required
                //onChange={(e) => setFifa_note(e.target.value)}
              >
                <FormLabel>Email:</FormLabel>
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
              //onClick={handleUpdate}
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

export default UpdateF;
