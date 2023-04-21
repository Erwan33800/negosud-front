import React from "react";
import { NavLink } from "react-router-dom";

function ForgetPasswordC() {
  return (
    //ecrire le code ici
    <div className="right-part">
      <h1 className="name-app">Négosud</h1>
      <h1>Mot de passe oublié</h1>

  
      <form className="d-flex flex-column align-items-center">
        <input
          type="text"
          id="identifiant"
          placeholder="Email"
          className="auth-input"
          required
        />
        <input
          type="password"
          id="password"
          placeholder="Nouveau mot de passe"
          className="auth-input"
          required
        />
        <button className="auth-btn">Validé</button>
        <NavLink
          style={{ fontSize: "14px" }}
          end
          to="/login"
          className="nav-link-forget-password"
        >
          Retour
        </NavLink>
      </form>
    </div>
  );
}

export default ForgetPasswordC;