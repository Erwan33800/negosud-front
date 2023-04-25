import React, { useEffect, useState } from "react";
import { Tbody, Tr, Td, Button, Flex } from "@chakra-ui/react";
import axios from "axios";
import UpdateF from "../Fournisseurs/UpdateF";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRemove } from "@fortawesome/free-solid-svg-icons";

function FournisseursTableBody() {
  const [fournisseurs, setFournisseurs] = useState();

  useEffect(() => {
    axios.get("https://localhost:7201/api/user").then((response) => {
      setFournisseurs(response.data);
    });
  }, []);

  const handleDelete = async (id_f) => {
    await axios.delete(`https://localhost:7201/api/user/${id_f}`);
    window.location.reload();
  };

  return (
    <>
      {fournisseurs &&
        fournisseurs.map((fournisseur) => (
          <Tbody>
            <Tr>
              <Td>{fournisseur.firstName}</Td>
              <Td>{fournisseur.email}</Td>
              <Td>{fournisseur.role}</Td>
              <Td>
                <Flex justify={"space-evenly"}>
                  <UpdateF fournisseur={fournisseur} />
                  <Button
                    size={"sm"}
                    variant="brand"
                    color="red"
                    onClick={() => handleDelete(fournisseur.id)}
                  >
                    <FontAwesomeIcon icon={faRemove} />
                  </Button>
                </Flex>
              </Td>
            </Tr>
          </Tbody>
        ))}
    </>
  );
}

export default FournisseursTableBody;
