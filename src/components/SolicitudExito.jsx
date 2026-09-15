import { formatearMoneda } from "../utils/formatos";

// Componente para notificar la radicación exitosa de la solicitud.
function SolicitudExito({ ultimaSolicitud, onNuevaSolicitud }) {
  if (!ultimaSolicitud) return null;

  return (
    <div className="solicitud-exito-box">
      <div className="solicitud-exito-icono">✓</div>
      <h2 style={{ color: "#065f46", marginBottom: "0.5rem" }}>
        ¡Solicitud Radicada con Éxito!
      </h2>
      <p
        style={{
          color: "#047857",
          marginBottom: "1.5rem",
          maxWidth: "30rem",
          marginInline: "auto",
        }}
      >
        Hemos registrado tu solicitud para el{" "}
        <strong>{ultimaSolicitud.nombreProducto}</strong>. Te enviaremos la
        confirmación a <strong>{ultimaSolicitud.email}</strong>.
      </p>

      <div
        style={{
          backgroundColor: "#ffffff",
          borderRadius: "8px",
          padding: "1rem",
          maxWidth: "24rem",
          margin: "0 auto 1.5rem",
          textAlign: "left",
          fontSize: "0.85rem",
        }}
      >
        <div>
          <strong>Radicado:</strong> {ultimaSolicitud.idRadicado}
        </div>
        <div>
          <strong>Titular:</strong> {ultimaSolicitud.nombre}
        </div>
        <div>
          <strong>Documento:</strong> {ultimaSolicitud.cedula}
        </div>
        <div>
          <strong>Monto:</strong> {formatearMoneda(ultimaSolicitud.monto)}
        </div>
        <div>
          <strong>Cuota mensual:</strong>{" "}
          {formatearMoneda(ultimaSolicitud.cuotaMensual)} (
          {ultimaSolicitud.plazo} meses)
        </div>
      </div>

      <button
        type="button"
        onClick={onNuevaSolicitud}
        className="btn btn-primary"
      >
        Radicar otra solicitud
      </button>
    </div>
  );
}

export default SolicitudExito;
