import React, { useEffect, useState } from "react";
import { Tbody, Tr, Td, Button, Flex } from "@chakra-ui/react";
import axios from "axios";
import UpdateF from "../Fournisseurs/UpdateF";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRemove } from "@fortawesome/free-solid-svg-icons";

function CommandsTableBody(props) {
  const [data, setData] = useState([]);
  const getData = async () => {
    const { data } = await axios.get(`http://localhost:5010/footballers`);
    setData(data);
  };
  useEffect(() => {
    getData();
  }, []);

  const handleDelete = async (id) => {
    await axios.post(`http://localhost:5010/delete-footballer/${id}`);
    getData();
  };
  return (
    <>
      {data.map((footballer) => (
        <Tbody>
          <Tr>
            <Td>
              {footballer.fname} {footballer.lname}
            </Td>
            <Td>{footballer.nb_selection}</Td>
            <Td isNumeric>{footballer.fifa_note}</Td>
            <Td>
              <Flex justify={"space-evenly"}>
                <UpdateF footballer={footballer} />
                <Button
                  size={"sm"}
                  variant="brand"
                  color="red"
                  onClick={() => handleDelete(footballer.id_f)}
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
          <Td>0</Td>
          <Td isNumeric>0</Td>
          <Td>
            <Flex justify={"space-evenly"}>
              <UpdateF />
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

export default CommandsTableBody;
