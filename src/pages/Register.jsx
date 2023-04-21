import React from "react";
import LeftPart from "../components/Login/LeftPart";
import RegisterComponent from "../components/Register/RegisterComponent";
import "../styles/Auth/Auth.css";

function Register(props) {
    return (
        //ecrire le code ici
        <div className="auth-component" >
            <LeftPart />
            <RegisterComponent />
        </div>        
    )
};

export default Register;