import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Catalogo from "./pages/Catalogo";
import Simulador from "./pages/Simulador";
import Solicitar from "./pages/Solicitar";
import PaginaNoEncontrada from "./pages/PaginaNoEncontrada";

// Componente raíz de la aplicación.
// Implementa BrowserRouter para sincronizar la interfaz de usuario con la URL del navegador.
function App() {
  return (
    <BrowserRouter>
      {/* Barra de navegación superior fija en toda la aplicación */}
      <Navbar />

      {/* Definición declarativa de las rutas disponibles */}
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalogo" element={<Catalogo />} />
          <Route path="/simulador" element={<Simulador />} />
          <Route path="/solicitar" element={<Solicitar />} />
          {/* Ruta comodín para capturar cualquier URL no definida (error 404) */}
          <Route path="*" element={<PaginaNoEncontrada />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
