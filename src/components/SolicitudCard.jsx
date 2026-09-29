// src/components/SolicitudCard.jsx
import { formatearMoneda } from "../utils/formatos";

// Tarjeta para visualizar los datos individuales de una solicitud de crédito almacenada en Firestore.
function SolicitudCard({ solicitud }) {
  const fecha = solicitud.fechaCreacion
    ? new Date(solicitud.fechaCreacion).toLocaleDateString("es-CO", {
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      })
    : "Fecha no disponible";

  return (
    <article className="solicitud-card">
      <div className="solicitud-card-header">
        <div>
          <span className="badge badge-primary">{solicitud.nombreProducto}</span>
          <h3 className="solicitud-card-title">{solicitud.nombre}</h3>
        </div>
        <span className="badge badge-success">
          {solicitud.estado || "Pendiente"}
        </span>
      </div>

      <div className="solicitud-card-body">
        <p className="solicitud-card-id">
          <strong>ID Firestore:</strong> <code>{solicitud.id}</code>
        </p>
        <p>
          <strong>Radicado:</strong> {solicitud.idRadicado}
        </p>
        <p>
          <strong>Cédula:</strong> {solicitud.cedula}
        </p>
        <p>
          <strong>Email:</strong> {solicitud.email}
        </p>
        <p>
          <strong>Monto:</strong> {formatearMoneda(solicitud.monto)}
        </p>
        <p>
          <strong>Cuota estimada:</strong> {formatearMoneda(solicitud.cuotaMensual)} ({solicitud.plazo} meses)
        </p>
        <p className="solicitud-card-fecha">
          <small>Registrado el: {fecha}</small>
        </p>
      </div>
    </article>
  );
}

export default SolicitudCard;
