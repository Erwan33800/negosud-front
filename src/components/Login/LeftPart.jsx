import React from "react";
import vins from "../../assets/vins.jpg";

function LeftPart() {
  return (
    //ecrire le code ici
    <img
      src={vins}
      alt="pt_menu"
      style={{ width: "50%", height: "100vh" }}
    />
  );
}

export default LeftPart;