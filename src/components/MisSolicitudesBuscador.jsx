// src/components/MisSolicitudesBuscador.jsx
// Formulario de búsqueda de solicitudes por correo electrónico.
// Extraído para mantener MisSolicitudes.jsx bajo el límite de 120 líneas.
function MisSolicitudesBuscador({
  emailBuscador,
  setEmailBuscador,
  onBuscar,
  onLimpiar,
  cargando,
}) {
  return (
    <div className="solicitudes-buscador">
      <form onSubmit={onBuscar} className="solicitudes-buscador-form">
        <div className="solicitudes-input-grupo">
          <label htmlFor="inputEmailBusqueda" className="control-etiqueta">
            Buscar por Correo Electrónico (where + orderBy):
          </label>
          <input
            type="email"
            id="inputEmailBusqueda"
            placeholder="Ingresa el correo del solicitante..."
            value={emailBuscador}
            onChange={(e) => setEmailBuscador(e.target.value)}
            className="control-select"
          />
        </div>
        <button type="submit" className="btn btn-primary" disabled={cargando}>
          {cargando ? "Buscando..." : "Buscar por Email"}
        </button>
        <button
          type="button"
          onClick={onLimpiar}
          className="btn btn-outline"
          disabled={cargando}
        >
          Ver todas
        </button>
      </form>
    </div>
  );
}

export default MisSolicitudesBuscador;
