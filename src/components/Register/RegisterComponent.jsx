import React, { useState, useRef } from "react";

const RegisterComponent = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const userRef = useRef();


  const handleSubmit = (event) => {
    event.preventDefault();
    // Ajouter ici la logique d'inscription à votre backend
    console.log('Username:', username);
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    
    <div className="right-part">
      <h1 className="name-app">Négosud</h1>
      <form onSubmit={handleSubmit}            
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
            type="nom"
            id="nom"
            placeholder="Nom"
            className="auth-input"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
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
        <button className="auth-btn">S'inscrire</button>
      </form>
    </div>    
  );
};

export default RegisterComponent;