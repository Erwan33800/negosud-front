import React, { useEffect, useState } from "react";
import { Tbody, Tr, Td, Button, Flex } from "@chakra-ui/react";
import axios from "axios";
import UpdateF from "../Fournisseurs/UpdateF";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRemove } from "@fortawesome/free-solid-svg-icons";

function CommandsTableBodyUser(props) {
  const [data, setData] = useState([]);
  const getData = async (id) => {
    const { data } = await axios.get(`http://localhost:5010/commands-user/${id}`);
    setData(data);
  };
  useEffect(() => {
    getData();
  }, []);

  const handleDelete = async (id) => {
    await axios.post(`http://localhost:5010/delete-commands-user/${id}`);
    getData();
  };
  return (
    <>
      {data.map((commands) => (
        <Tbody>
          <Tr>
            <Td>
              {commands.id}
            </Td>
            <Td>{commands.nbBottle}</Td>
            <Td isNumeric>{commands.priceGlobal}</Td>
            <Td>
              <Flex justify={"space-evenly"}>
                <UpdateF commands={commands} />
                <Button
                  size={"sm"}
                  variant="brand"
                  color="red"
                  onClick={() => handleDelete(commands.id)}
                >
                  <FontAwesomeIcon icon={faRemove} />
                </Button>
              </Flex>
            </Td>
          </Tr>
        </Tbody>
      ))}
      <Tbody>
        <Tr>
          <Td>Commande 654564</Td>
          <Td>10</Td>
          <Td isNumeric>7</Td>
          <Td>
            <Flex justify={"space-evenly"}>
              <Button size={"sm"} variant="brand" color="red">
                <FontAwesomeIcon icon={faRemove} />
              </Button>
            </Flex>
          </Td>
        </Tr>
      </Tbody>
    </>
  );
}

export default CommandsTableBodyUser;
