import React from "react";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Logout(props) {
  return (
    <div style={{ color: "white" }}>
      <FontAwesomeIcon icon={faLock} />
    </div>
  );
}

export default Logout;
