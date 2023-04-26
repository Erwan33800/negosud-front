import React, { useEffect, useState } from "react";
import { Tbody, Tr, Td, Button, Flex } from "@chakra-ui/react";
import axios from "axios";
import UpdateF from "../Fournisseurs/UpdateF";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRemove } from "@fortawesome/free-solid-svg-icons";

function CommandsTableBody(props) {
  const [commands, setCommands] = useState();

  useEffect(() => {
    axios.get("https://localhost:7201/api/order").then((response) => {
      setCommands(response.data);
    });
  }, []);

  const handleDelete = async (id) => {
    await axios.delete(`https://localhost:7201/api/order/${id}`);
    window.location.reload();
  };
  return (
    <>
      {commands &&
        commands.map((command) => (
          <Tbody>
            <Tr>
              <Td>{command.orderName}</Td>
              <Td>{command.orderDate}</Td>
            </Tr>
          </Tbody>
        ))}
    </>
  );
}

export default CommandsTableBody;
