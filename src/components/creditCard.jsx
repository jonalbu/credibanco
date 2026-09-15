import { Link } from "react-router-dom";
import { formatearMoneda } from "../utils/formatos";
import "./CreditCard.css";

// Componente reutilizable para visualizar cada producto de crédito.
// Se desestructuran las props directamente en el parámetro para clarificar los datos requeridos.
function CreditCard({
  id,
  name,
  category,
  rateEA,
  minAmount,
  maxAmount,
  minTerm,
  maxTerm,
  description,
}) {
  return (
    <article className="credit-card">
      <div>
        {/* Cabecera de la tarjeta con categoría y tasa de interés */}
        <div className="credit-card-header">
          <span className="badge badge-primary">{category}</span>
          <span className="credit-card-rate">{rateEA}% E.A.</span>
        </div>

        <h3 className="credit-card-title">{name}</h3>
        <p className="credit-card-desc">{description}</p>

        {/* Ficha técnica con montos y plazos mínimos y máximos */}
        <div className="credit-spec-box">
          <div className="credit-spec-item">
            <span className="credit-spec-label">Monto mínimo</span>
            <span className="credit-spec-val">
              {formatearMoneda(minAmount)}
            </span>
          </div>
          <div className="credit-spec-item">
            <span className="credit-spec-label">Monto máximo</span>
            <span className="credit-spec-val">
              {formatearMoneda(maxAmount)}
            </span>
          </div>
          <div className="credit-spec-item">
            <span className="credit-spec-label">Plazo mínimo</span>
            <span className="credit-spec-val">{minTerm} meses</span>
          </div>
          <div className="credit-spec-item">
            <span className="credit-spec-label">Plazo máximo</span>
            <span className="credit-spec-val">{maxTerm} meses</span>
          </div>
        </div>
      </div>

      {/* Botones de acción hacia el simulador o el formulario de solicitud con el ID del crédito */}
      <div className="credit-card-actions">
        <Link
          to={`/simulador?credito=${id}`}
          className="btn btn-outline btn-block"
        >
          Simular
        </Link>
        <Link
          to={`/solicitar?credito=${id}`}
          className="btn btn-primary btn-block"
        >
          Solicitar
        </Link>
      </div>
    </article>
  );
}

export default CreditCard;
