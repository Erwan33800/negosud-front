import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import ClientsSettings from "./pages/Clients";
import CreateClient from "./components/Clients/CreateClient";
import FournisseursSettings from "./pages/Fournisseurs";
import BottleSettings from "./pages/Bouteilles";
import CreateF from "./components/Fournisseurs/CreateF";
import CommandsSettings from "./pages/Commands";
import CreateCommand from "./components/Commands/CreateCommand";
import StockSettings from "./pages/Stock";
import CreateStock from "./components/Stock/CreateS";
import ForgetPasswordC from "./components/Login/ForgetPasswordC";
import Register from "./pages/Register";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forget-password" element={<ForgetPasswordC />} />

        <Route path="/home" element={<Home />} />

        <Route path="/bouteilles-settings" element={<BottleSettings />} />

        <Route path="/clients-settings" element={<ClientsSettings />} />
        <Route path="/client-create" element={<CreateClient />} />

        <Route
          path="/fournisseurs-settings"
          element={<FournisseursSettings />}
        />
        <Route path="/fournisseur-create" element={<CreateF />} />

        <Route path="/commands-settings" element={<CommandsSettings />} />
        <Route path="/command-create" element={<CreateCommand />} />

        <Route path="/stock-settings" element={<StockSettings />} />
        <Route path="/stock-create" element={<CreateStock />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
