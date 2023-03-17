import React, { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";

const LoginComponent = () => {
  const userRef = useRef();
  const errRef = useRef();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [success, setSucess] = useState(false);

  // put the focus on the user input
  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [email, password]);

  async function handleLogin(e) {
    e.preventDefault();

    try {
      const response = await axios.post(
        `http://localhost:5008/login`, // REACT_APP_API_URL
        { email, password },
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true 
        }
      );

      const accessToken = response?.data?.accessToken;

      // remet les inputs à vide
      setEmail("");
      setPassword("");
      if (response.data.user) {
        setSucess(true);
        if (response.data.role === "Student") {
          window.location = "/";
        } else if (response.data.role === "Teacher") {
          window.location = "/teacher";
        }
      }
      // window.location = "/";
    } catch (error) {
      if (!error?.response) {
        setErrMsg("No Server Response");
      } else if (error.response?.status === 400) {
        setErrMsg("Missing Username or Password");
      } else if (error.response?.status === 401) {
        setErrMsg("Unauthorized");
      } else {
        setErrMsg("Login Failed");
      }
      errRef.current.focus();
    }
  }

  return (
    <>
      {success ? (
        <div className="right-part">
          <h1>Vous êtes connecté !</h1>
          <br />
        </div>
      ) : (
        <div className="right-part">
          <p
            ref={errRef}
            className={errMsg ? "errmsg" : "offscreen"}
            aria-live="assertive"
          >
            {errMsg}
          </p>
          <h1 className="name-app">Négosud</h1>
          <h2 className="title">Se connecter :</h2>

          <form
            onSubmit={handleLogin}
            className="d-flex flex-column align-items-center"
          >
            <input
              type="text"
              id="email"
              placeholder="Email"
              ref={userRef}
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              className="auth-input"
              required
            />
            <input
              type="password"
              id="password"
              placeholder="Mot de passe"
              className="auth-input"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              required
            />
            <button className="auth-btn">Connexion</button>
            <NavLink
              style={{ fontSize: "14px" }}
              end
              to="/forget-password"
              className="nav-link"
            >
              Mot de passe oublié ?
            </NavLink>
            <div>
            <NavLink
              style={{ fontSize: "14px" }}
              end
              to="/register"
              className="regist"
            >
              Clique ici pour t'enregistrer
            </NavLink>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default LoginComponent;