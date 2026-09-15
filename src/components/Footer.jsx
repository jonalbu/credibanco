import { useState } from "react";
import "./Footer.css";

// Componente de pie de página institucional.
// Muestra datos de vigilancia regulatoria y modales informativos sobre términos y tasas.
function Footer() {
  // Estado para controlar qué modal legal se encuentra abierto (null si está cerrado)
  const [modalActivo, setModalActivo] = useState(null);

  const datosLegales = {
    tasas: {
      titulo: "Tasas y Tarifas",
      contenido:
        "Nuestras tasas de interés fijas se encuentran reguladas y avaladas por la Superintendencia Financiera de Colombia. No existen comisiones ocultas.",
    },
    datos: {
      titulo: "Protección de Datos Personales",
      contenido:
        "En cumplimiento de la Ley 1581 de 2012 (Habeas Data), tus datos personales están protegidos y solo se emplean para el análisis y estudio de tu crédito.",
    },
    consumidor: {
      titulo: "Defensor del Consumidor Financiero",
      contenido:
        "Puedes contactar a la Defensoría del Consumidor para tramitar inquietudes o quejas sin costo alguno a través de nuestros canales oficiales.",
    },
    seguridad: {
      titulo: "Seguridad Bancaria",
      contenido:
        "Banco Amigo nunca te solicitará tus claves ni códigos de un solo uso por teléfono o mensaje de texto. Tus conexiones están cifradas con SSL de 256 bits.",
    },
  };

  const abrirModal = (clave) => {
    setModalActivo(datosLegales[clave]);
  };

  const cerrarModal = () => {
    setModalActivo(null);
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-inner">
          <div>
            <div className="footer-brand">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
              </svg>
              <span>Banco Amigo S.A.</span>
            </div>
            <p style={{ fontSize: "0.8125rem", color: "var(--text-muted)" }}>
              Vigilado por la{" "}
              <strong>Superintendencia Financiera de Colombia</strong> &bull;
              Nit: 860.002.964-1
            </p>
          </div>

          <nav className="footer-links" aria-label="Enlaces Legales">
            <button
              type="button"
              className="footer-btn"
              onClick={() => abrirModal("tasas")}
            >
              Tasas y Tarifas
            </button>
            <button
              type="button"
              className="footer-btn"
              onClick={() => abrirModal("datos")}
            >
              Protección de Datos
            </button>
            <button
              type="button"
              className="footer-btn"
              onClick={() => abrirModal("consumidor")}
            >
              Defensor del Consumidor
            </button>
            <button
              type="button"
              className="footer-btn"
              onClick={() => abrirModal("seguridad")}
            >
              Seguridad Bancaria
            </button>
          </nav>
        </div>
      </div>

      {/* Renderizado condicional del modal legal sin usar portales para apegarse a las restricciones */}
      {modalActivo && (
        <div className="legal-modal-backdrop" onClick={cerrarModal}>
          <div
            className="legal-modal-card"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="legal-modal-header">
              <h3>{modalActivo.titulo}</h3>
              <button
                type="button"
                className="legal-modal-close"
                onClick={cerrarModal}
                aria-label="Cerrar modal"
              >
                &times;
              </button>
            </div>
            <p
              style={{
                color: "var(--text-muted)",
                lineHeight: "1.5",
                fontSize: "0.9rem",
              }}
            >
              {modalActivo.contenido}
            </p>
            <button
              type="button"
              className="btn btn-primary"
              onClick={cerrarModal}
              style={{ marginTop: "1.25rem", width: "100%" }}
            >
              Entendido
            </button>
          </div>
        </div>
      )}
    </footer>
  );
}

export default Footer;
