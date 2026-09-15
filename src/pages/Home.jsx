import { Link } from "react-router-dom";
import { CREDIT_PRODUCTS } from "../data/creditsData";
import CreditCard from "../components/CreditCard";
import "./Home.css";

// Página de inicio con Hero institucional, lista dinámica de créditos destacados y beneficios.
function Home() {
  // Se filtran los primeros cuatro productos para la vitrina inicial sin sobrecargar la pantalla principal.
  const creditosDestacados = CREDIT_PRODUCTS.slice(0, 4);

  const ventajas = [
    {
      id: 1,
      titulo: "Tasas de interés competitivas",
      desc: "Accede a tasas fijas durante toda la vigencia del crédito sin sorpresas ni reajustes.",
    },
    {
      id: 2,
      titulo: "Aprobación digital en tiempo récord",
      desc: "Nuestra plataforma evalúa tu solicitud en línea y te notifica en menos de 24 horas.",
    },
    {
      id: 3,
      titulo: "Transparencia y Cero Comisiones",
      desc: "Sin cobros por estudio de crédito ni penalizaciones por abonos extraordinarios a capital.",
    },
  ];

  return (
    <main>
      {/* 1. Sección Hero */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-grid">
            <div className="hero-content">
              <div style={{ display: "flex", gap: "0.5rem" }}>
                <span className="badge badge-primary">
                  Créditos de Fomento 2026
                </span>
                <span className="badge badge-success">Aprobación en 24h</span>
              </div>
              <h1 className="hero-title">
                El crédito que necesitas para{" "}
                <span className="headline-primary">cumplir tus sueños</span>
              </h1>
              <p className="hero-subtitle">
                Financia tu vivienda, vehículo o educación con las mejores tasas
                del mercado y desembolso 100% digital.
              </p>
              <div className="hero-cta">
                <Link to="/solicitar" className="btn btn-primary">
                  Solicita tu crédito
                </Link>
                <Link to="/simulador" className="btn btn-outline">
                  Simular cuotas en línea
                </Link>
              </div>
              <div className="hero-badges">
                <span>✓ Sin costos ocultos</span>
                <span>✓ Trámite 100% digital</span>
                <span>✓ Firma electrónica segura</span>
              </div>
            </div>

            <div className="hero-media">
              <div className="hero-image-wrapper">
                <img
                  src="/img/alisadyson-family-7257182.jpg"
                  alt="Clientes Banco Amigo"
                />
                <div className="floating-pill">
                  <div>
                    <div className="floating-pill-label">Tasa sugerida</div>
                    <div className="floating-pill-value">Desde 9.8% E.A.</div>
                  </div>
                  <Link
                    to="/simulador"
                    className="btn btn-primary"
                    style={{ padding: "0.4rem 0.8rem" }}
                  >
                    Calcular
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Sección: Lista Dinámica de Productos Destacados */}
      <section className="home-products-section">
        <div className="container">
          <div className="section-title-wrap">
            <span
              className="badge badge-primary"
              style={{ marginBottom: "0.5rem" }}
            >
              Líneas de Financiación
            </span>
            <h2 className="section-title">
              Portafolio de Créditos Banco Amigo
            </h2>
            <p className="section-subtitle">
              Diseñados para adaptarse a tu capacidad de pago con plazos
              flexibles.
            </p>
          </div>

          <div className="home-cards-grid">
            {creditosDestacados.map((credito) => (
              <CreditCard key={credito.id} {...credito} />
            ))}
          </div>

          <div style={{ textAlign: "center" }}>
            <Link to="/catalogo" className="btn btn-primary">
              Explorar todas las {CREDIT_PRODUCTS.length} líneas de crédito en
              el Catálogo
            </Link>
          </div>
        </div>
      </section>

      {/* 3. Sección: Ventajas y CTA */}
      <section className="why-section">
        <div className="container">
          <div className="why-grid">
            <div className="why-list">
              <h2 style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>
                Respaldamos tu futuro con seguridad
              </h2>
              {ventajas.map((v) => (
                <div key={v.id} className="why-item">
                  <div className="why-icon">✓</div>
                  <div>
                    <h3 className="why-title" style={{ fontSize: "1rem" }}>
                      {v.titulo}
                    </h3>
                    <p className="why-desc">{v.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="cta-box">
              <h3 style={{ fontSize: "1.35rem" }}>
                ¿Listo para solicitar tu crédito?
              </h3>
              <p style={{ color: "var(--text-muted)", fontSize: "0.9rem" }}>
                Completa el formulario en 3 sencillos pasos y recibe respuesta
                inmediata en tu correo.
              </p>
              <Link to="/solicitar" className="btn btn-primary btn-block">
                Iniciar Solicitud en Línea
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
