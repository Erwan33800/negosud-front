import React, { useEffect, useState } from "react";
import { Tbody, Tr, Td, Button, Flex } from "@chakra-ui/react";
import axios from "axios";
import UpdateClient from "../Clients/UpdateClient";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRemove } from "@fortawesome/free-solid-svg-icons";

function ClientsTableBody(props) {
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
                <UpdateClient footballer={footballer} />
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
          <Td>Chateau Latour</Td>
          <Td>50</Td>
          <Td isNumeric>8.5</Td>
          <Td>
            <Flex justify={"space-evenly"}>
              <UpdateClient />
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

export default ClientsTableBody;
