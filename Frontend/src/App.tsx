import { Routes, Route } from "react-router-dom";
import Home from "./paginas/home/home";
import Login from "./paginas/login/login";
import Registro from "./paginas/register/register";
import RecuperarContraseña from "./paginas/rec_contra/rec_contra";
import Perfil from "./paginas/perfil/perfil";   

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Registro />} />
      <Route path="/rec_contra" element={<RecuperarContraseña />} />
      <Route path="/perfil" element={<Perfil />} />
    </Routes>
  );
}
