// src/components/SolicitarHero.jsx
// Encabezado de la página de solicitud digital.
// Modularizado para mantener Solicitar.jsx bajo el límite de 120 líneas.
function SolicitarHero() {
  return (
    <div className="solicitar-hero">
      <span className="badge badge-primary" style={{ marginBottom: "0.5rem" }}>
        Trámite 100% Digital
      </span>
      <h1 style={{ fontSize: "2.25rem", marginBottom: "0.5rem" }}>
        Solicitud de Crédito
      </h1>
      <p style={{ color: "var(--text-muted)" }}>
        Diligencia tu solicitud en minutos y guárdala directamente en Firestore.
      </p>
    </div>
  );
}

export default SolicitarHero;
