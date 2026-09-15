import { CREDIT_PRODUCTS } from "../data/creditsData";
import { formatearMoneda } from "../utils/formatos";

// Componente para los campos del formulario controlado de solicitud de crédito.
function SolicitudFormulario({
  formulario,
  errores,
  productoActual,
  alCambiar,
  alEnviar,
}) {
  return (
    <form onSubmit={alEnviar} className="form-card" noValidate>
      <h2
        style={{
          fontSize: "1.35rem",
          marginBottom: "1.25rem",
          color: "var(--primary-dark)",
        }}
      >
        Datos de la Solicitud
      </h2>

      <div className="form-grid">
        {/* Nombre Completo */}
        <div className="form-group">
          <label htmlFor="nombre" className="form-label">
            Nombre Completo *
          </label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            className={`input-field ${errores.nombre ? "input-error" : ""}`}
            placeholder="Ej: Carlos Gómez"
            value={formulario.nombre}
            onChange={alCambiar}
          />
          <span className="form-error">{errores.nombre}</span>
        </div>

        {/* Cédula */}
        <div className="form-group">
          <label htmlFor="cedula" className="form-label">
            Cédula o Documento *
          </label>
          <input
            type="text"
            id="cedula"
            name="cedula"
            className={`input-field ${errores.cedula ? "input-error" : ""}`}
            placeholder="Ej: 1020304050"
            value={formulario.cedula}
            onChange={alCambiar}
          />
          <span className="form-error">{errores.cedula}</span>
        </div>

        {/* Correo Electrónico */}
        <div className="form-group">
          <label htmlFor="email" className="form-label">
            Correo Electrónico *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className={`input-field ${errores.email ? "input-error" : ""}`}
            placeholder="usuario@correo.com"
            value={formulario.email}
            onChange={alCambiar}
          />
          <span className="form-error">{errores.email}</span>
        </div>

        {/* Teléfono */}
        <div className="form-group">
          <label htmlFor="telefono" className="form-label">
            Teléfono Móvil *
          </label>
          <input
            type="tel"
            id="telefono"
            name="telefono"
            className={`input-field ${errores.telefono ? "input-error" : ""}`}
            placeholder="Ej: 3101234567"
            value={formulario.telefono}
            onChange={alCambiar}
          />
          <span className="form-error">{errores.telefono}</span>
        </div>

        {/* Línea de Crédito */}
        <div className="form-group full-width">
          <label htmlFor="idCredito" className="form-label">
            Línea de Crédito *
          </label>
          <select
            id="idCredito"
            name="idCredito"
            className="input-field"
            value={formulario.idCredito}
            onChange={alCambiar}
          >
            {CREDIT_PRODUCTS.map((prod) => (
              <option key={prod.id} value={prod.id}>
                {prod.name} (Tasa: {prod.rateEA}% E.A.)
              </option>
            ))}
          </select>
        </div>

        {/* Monto */}
        <div className="form-group">
          <label htmlFor="monto" className="form-label">
            Monto Solicitado (COP) *
          </label>
          <input
            type="number"
            id="monto"
            name="monto"
            className={`input-field ${errores.monto ? "input-error" : ""}`}
            value={formulario.monto}
            onChange={alCambiar}
          />
          <span className="form-error">
            {errores.monto ||
              `Permitido: ${formatearMoneda(productoActual.minAmount)} - ${formatearMoneda(productoActual.maxAmount)}`}
          </span>
        </div>

        {/* Plazo */}
        <div className="form-group">
          <label htmlFor="plazo" className="form-label">
            Plazo (Meses) *
          </label>
          <input
            type="number"
            id="plazo"
            name="plazo"
            className={`input-field ${errores.plazo ? "input-error" : ""}`}
            value={formulario.plazo}
            onChange={alCambiar}
          />
          <span className="form-error">
            {errores.plazo ||
              `Permitido: ${productoActual.minTerm} a ${productoActual.maxTerm} meses`}
          </span>
        </div>
      </div>

      <button
        type="submit"
        className="btn btn-primary btn-block"
        style={{ marginTop: "1rem" }}
      >
        Radicar Solicitud Digital
      </button>
    </form>
  );
}

export default SolicitudFormulario;
