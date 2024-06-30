import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./components/Home/Home";
import { NavMovil } from "./components/navbar/NavMovil";
import { Perfil } from "./components/Perfil/Perfil";
import { Buscar } from "./components/buscar/Buscar";
import { Pedido } from "./components/pedido/Pedido";
import "./styles/App.scss";

function App() {
  return (
    <BrowserRouter>
      <NavMovil />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/perfil" element={<Perfil />} />
        <Route path="/buscar" element={<Buscar />} />
        <Route path="/pedido" element={<Pedido />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
