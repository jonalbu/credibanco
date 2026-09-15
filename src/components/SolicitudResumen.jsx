import { formatearMoneda } from "../utils/formatos";

// Componente para visualizar el resumen de la solicitud en tiempo real antes de radicarla.
function SolicitudResumen({
  producto,
  monto,
  plazo,
  cuotaMensual,
  nombreCompleto,
}) {
  if (!producto) return null;

  const totalEstimado = cuotaMensual * plazo;

  return (
    <aside className="solicitud-resumen-box" aria-label="Resumen de Solicitud">
      <span className="badge badge-primary">{producto.name}</span>
      <h3 style={{ fontSize: "1.25rem", margin: "0.5rem 0 1rem" }}>
        Resumen de tu Solicitud
      </h3>

      <div className="cuota-highlight">
        <span className="cuota-highlight-label">Cuota mensual estimada</span>
        <span className="cuota-highlight-val">
          {formatearMoneda(cuotaMensual)}
        </span>
        <span style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>
          Tasa fija del {producto.rateEA}% E.A.
        </span>
      </div>

      <div className="summary-list">
        <div className="summary-row">
          <span>Titular:</span>
          <strong>{nombreCompleto || "Por diligenciar"}</strong>
        </div>
        <div className="summary-row">
          <span>Monto solicitado:</span>
          <strong>{formatearMoneda(monto)}</strong>
        </div>
        <div className="summary-row">
          <span>Plazo:</span>
          <strong>{plazo} meses</strong>
        </div>
        <div className="summary-row total">
          <span>Total proyectado:</span>
          <strong>{formatearMoneda(totalEstimado)}</strong>
        </div>
      </div>
    </aside>
  );
}

export default SolicitudResumen;
