import { Link } from "react-router-dom";
import { formatearMoneda } from "../utils/formatos";

// Componente para presentar el resumen financiero del crédito simulado.
// Se desestructuran las props para mantener claridad sobre los datos requeridos.
function SimuladorResumen({ producto, monto, plazo, cuotaMensual }) {
  if (!producto) return null;

  // Cálculos derivados del plan de amortización proyectado
  const totalPagar = cuotaMensual * plazo;
  const totalIntereses = totalPagar > monto ? totalPagar - monto : 0;

  return (
    <div className="summary-card">
      <div className="summary-body">
        <span className="badge badge-primary">{producto.name}</span>
        <h3 style={{ fontSize: "1.25rem", margin: "0.5rem 0 1rem" }}>
          Resumen de Simulación
        </h3>

        {/* Cuota mensual destacada */}
        <div className="cuota-highlight">
          <span className="cuota-highlight-label">
            Cuota mensual fija estimada
          </span>
          <span className="cuota-highlight-val">
            {formatearMoneda(cuotaMensual)}
          </span>
          <span style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>
            Capital + Intereses a tasa fija
          </span>
        </div>

        {/* Desglose de valores proyectados */}
        <div className="summary-list">
          <div className="summary-row">
            <span>Tasa de interés:</span>
            <strong>{producto.rateEA}% E.A.</strong>
          </div>
          <div className="summary-row">
            <span>Monto a financiar:</span>
            <strong>{formatearMoneda(monto)}</strong>
          </div>
          <div className="summary-row">
            <span>Plazo acordado:</span>
            <strong>{plazo} meses</strong>
          </div>
          <div className="summary-row">
            <span>Total intereses estimados:</span>
            <strong>{formatearMoneda(totalIntereses)}</strong>
          </div>
          <div className="summary-row total">
            <span>Total a pagar:</span>
            <strong>{formatearMoneda(totalPagar)}</strong>
          </div>
        </div>

        {/* Botón para transferir los valores simulados a la solicitud */}
        <Link
          to={`/solicitar?credito=${producto.id}&monto=${monto}&plazo=${plazo}`}
          className="btn btn-primary btn-block"
          style={{ marginTop: "1.5rem" }}
        >
          Continuar con la Solicitud
        </Link>
      </div>
    </div>
  );
}

export default SimuladorResumen;
