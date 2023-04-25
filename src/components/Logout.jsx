import React from "react";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";

function Logout(props) {
  return (
    <div style={{ color: "white" }}>
      <NavLink
        style={{ fontSize: "14px", color: "#FFFBFB" }}
        end
        to="/login"
        className="regist"
      >
        <FontAwesomeIcon icon={faLock} />
      </NavLink>
    </div>
  );
}

export default Logout;
