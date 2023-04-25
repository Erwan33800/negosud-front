import React, { useState } from "react";
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Alert,
  AlertIcon,
} from "@chakra-ui/react";
import config from "./config.json";
import axios from "axios";

const LoginComponent = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleLogin = () => {
    // Vérifier si l'utilisateur est présent dans le fichier de configuration
    const user = config.users.find(
      (u) => u.email === email && u.password === password
    );

    if (user) {
      // Stocker le rôle de l'utilisateur dans le local storage
      localStorage.setItem("role", user.role);
      // Rediriger vers la page d'accueil
      if (user.role === "admin") {
        window.location.href = "/homeAdmin";
      } else {
        window.location.href = "/home";
      }
    } else {
      // Afficher un message d'erreur si l'utilisateur n'existe pas
      setErrorMessage("Identifiants incorrects");
    }
  };
  return (
    <>
      <div className="right-part">
        {errorMessage && (
          <Alert status="error" mb="8">
            <AlertIcon />
            {errorMessage}
          </Alert>
        )}

        <h1 className="name-app">Négosud</h1>
        <h2 className="title">Se connecter :</h2>

        <form
          onSubmit={handleLogin}
          className="d-flex flex-column align-items-center"
        >
          <FormControl id="email" isRequired mb="4">
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormControl>
          <FormControl id="password" isRequired mb="8">
            <FormLabel>Mot de passe</FormLabel>
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </FormControl>
          <Button colorScheme="teal" onClick={handleLogin}>
            Se connecter
          </Button>
        </form>
      </div>
    </>
  );
};

export default LoginComponent;
