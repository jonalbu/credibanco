import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import "./Navbar.css";

// Componente de navegación global.
// Se usa NavLink para aprovechar la propiedad isActive de React Router y dar feedback visual de la ruta actual.
function Navbar() {
  // Estado local para abrir o cerrar el menú hamburguesa en pantallas pequeñas
  const [menuAbierto, setMenuAbierto] = useState(false);

  const alternarMenu = () => {
    setMenuAbierto((previo) => !previo);
  };

  const cerrarMenu = () => {
    setMenuAbierto(false);
  };

  const obtenerClaseEnlace = ({ isActive }) =>
    isActive ? "nav-link active" : "nav-link";
  const obtenerClaseMovil = ({ isActive }) =>
    isActive ? "mobile-nav-link active" : "mobile-nav-link";

  return (
    <header className="header">
      <div className="container">
        <nav className="navbar" aria-label="Navegación Principal">
          {/* Logo institucional con enlace a inicio */}
          <Link to="/" className="brand-logo" onClick={cerrarMenu}>
            <div className="brand-icon">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
              </svg>
            </div>
            <span>Banco Amigo</span>
          </Link>

          {/* Enlaces de escritorio resaltados con NavLink */}
          <ul className="nav-links">
            <li>
              <NavLink to="/" className={obtenerClaseEnlace}>
                Inicio
              </NavLink>
            </li>
            <li>
              <NavLink to="/catalogo" className={obtenerClaseEnlace}>
                Catálogo de Créditos
              </NavLink>
            </li>
            <li>
              <NavLink to="/simulador" className={obtenerClaseEnlace}>
                Simulador
              </NavLink>
            </li>
            <li>
              <NavLink to="/solicitar" className={obtenerClaseEnlace}>
                Solicitud Digital
              </NavLink>
            </li>
          </ul>

          {/* Botón de apertura para versión móvil */}
          <div className="nav-actions">
            <button
              type="button"
              className="btn-mobile-toggle"
              onClick={alternarMenu}
              aria-label="Abrir menú de navegación"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <line x1="4" x2="20" y1="12" y2="12" />
                <line x1="4" x2="20" y1="6" y2="6" />
                <line x1="4" x2="20" y1="18" y2="18" />
              </svg>
            </button>
          </div>
        </nav>
      </div>

      {/* Menú desplegable móvil */}
      {menuAbierto && (
        <div className="mobile-menu">
          <NavLink to="/" className={obtenerClaseMovil} onClick={cerrarMenu}>
            Inicio
          </NavLink>
          <NavLink
            to="/catalogo"
            className={obtenerClaseMovil}
            onClick={cerrarMenu}
          >
            Catálogo de Créditos
          </NavLink>
          <NavLink
            to="/simulador"
            className={obtenerClaseMovil}
            onClick={cerrarMenu}
          >
            Simulador
          </NavLink>
          <NavLink
            to="/solicitar"
            className={obtenerClaseMovil}
            onClick={cerrarMenu}
          >
            Solicitud Digital
          </NavLink>
        </div>
      )}
    </header>
  );
}

export default Navbar;
