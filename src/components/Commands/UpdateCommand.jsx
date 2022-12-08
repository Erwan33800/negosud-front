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

function UpdateCommand(props) {
  const { isOpen, onOpen, onClose } = useDisclosure();


  // const id_f = props.footballer.id_f;
  // const [fname, setFname] = useState("");
  // const [lname, setLname] = useState("");
  // const [nb_selection, setNb_selection] = useState("");
  // const [fifa_note, setFifa_note] = useState("");

  // const handleUpdate = async (e) => {
  //   e.preventDefault();
  //   const footballer = {
  //     id_f: id_f,
  //     fname: fname,
  //     lname: lname,
  //     nb_selection: nb_selection,
  //     fifa_note: fifa_note,
  //   };
  //   await axios.put(
  //     `http://localhost:5010/update-footballer/${id_f}`,
  //     footballer
  //   );
  //   onClose();
  //   window.location.reload();
  // };

  return (
    <>
      <Button onClick={onOpen} size={"sm"} variant="brand" color="blue">
        <FontAwesomeIcon icon={faRedo} />
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modifier une commande</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Stack spacing={4}>
              <FormControl
                id="lname"
                required
                // onChange={(e) => setLname(e.target.value)}
              >
                <FormLabel>Nom de famille :</FormLabel>
                <Input type="text" placeholder={"props.fournisseur.lname"} />
              </FormControl>
              <FormControl
                id="fname"
                required
                //onChange={(e) => setFname(e.target.value)}
              >
                <FormLabel>Prénom :</FormLabel>
                <Input type="text" placeholder={"props.fournisseur.fname"} />
              </FormControl>
              <FormControl
                id="fifa_note"
                required
                //onChange={(e) => setFifa_note(e.target.value)}
              >
                <FormLabel>Note Fifa :</FormLabel>
                <Input type="text" placeholder={"props.fournisseur.fifa_note"} />
              </FormControl>
              <FormControl
                id="nb_selection"
                required
                //onChange={(e) => setNb_selection(e.target.value)}
              >
                <FormLabel>Nombre de sélection :</FormLabel>
                <Input
                  type="text"
                  placeholder={"props.fournisseur.nb_selection"}
                />
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

export default UpdateCommand;
