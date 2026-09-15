// Componente de controles de búsqueda y ordenamiento del simulador.
function SimuladorControles({
  busqueda,
  alCambiarBusqueda,
  ordenTasa,
  alCambiarOrden,
  alLimpiar,
}) {
  return (
    <div className="sim-controls-bar">
      <div className="sim-control-item">
        <label htmlFor="busquedaInput" className="sim-control-label">
          Buscar por nombre:
        </label>
        <input
          id="busquedaInput"
          type="text"
          className="input-field"
          placeholder="Ej: Hipotecario, Libre, Vehículo..."
          value={busqueda}
          onChange={(e) => alCambiarBusqueda(e.target.value)}
        />
      </div>

      <div className="sim-control-item">
        <label htmlFor="ordenSelect" className="sim-control-label">
          Tasa de interés:
        </label>
        <select
          id="ordenSelect"
          className="input-field"
          value={ordenTasa}
          onChange={(e) => alCambiarOrden(e.target.value)}
        >
          <option value="ninguno">Orden estándar</option>
          <option value="asc">Tasa: menor a mayor</option>
          <option value="desc">Tasa: mayor a menor</option>
        </select>
      </div>

      <button
        type="button"
        onClick={alLimpiar}
        className="btn btn-outline"
        style={{ alignSelf: "flex-end" }}
      >
        Limpiar búsqueda
      </button>
    </div>
  );
}

export default SimuladorControles;
