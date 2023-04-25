import React, { useEffect, useState } from "react";
import { Tbody, Tr, Td, Button, Flex } from "@chakra-ui/react";
import axios from "axios";
import UpdateS from "../Stock/UpdateS";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRemove } from "@fortawesome/free-solid-svg-icons";

function StockTableBody(props) {
  const [bottles, setBottles] = useState();

  useEffect(() => {
    axios.get("https://localhost:7201/api/article").then((response) => {
      setBottles(response.data);
    });
  }, []);

  const handleDelete = async (id_f) => {
    await axios.delete(`https://localhost:7201/api/user/${id_f}`);
    window.location.reload();
  };
  return (
    <>
      {bottles &&
        bottles.map((bottle) => (
          <Tbody>
            <Tr>
              <Td>{bottle.name}</Td>
              <Td>{bottle.stock}</Td>
              <Td isNumeric>{bottle.price}</Td>
              <Td>
                <Flex justify={"space-evenly"}>
                  <UpdateS bottle={bottle} />
                  <Button
                    size={"sm"}
                    variant="brand"
                    color="red"
                    onClick={() => handleDelete(bottle.id_f)}
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

export default StockTableBody;
