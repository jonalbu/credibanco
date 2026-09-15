import { formatearMoneda } from "../utils/formatos";

// Componente para ajustar monto y plazo mediante sliders interactivos.
function SimuladorSliders({
  producto,
  monto,
  alCambiarMonto,
  plazo,
  alCambiarPlazo,
}) {
  if (!producto) return null;

  return (
    <div>
      {/* Slider interactivo de Monto */}
      <div className="slider-group">
        <div className="slider-header">
          <span className="sim-control-label">2. Monto a Solicitar:</span>
          <span className="slider-value">{formatearMoneda(monto)}</span>
        </div>
        <input
          type="range"
          className="slider-range"
          min={producto.minAmount}
          max={producto.maxAmount}
          step={1000000}
          value={monto}
          onChange={(e) => alCambiarMonto(Number(e.target.value))}
        />
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: "0.75rem",
            color: "var(--text-muted)",
          }}
        >
          <span>Mín: {formatearMoneda(producto.minAmount)}</span>
          <span>Máx: {formatearMoneda(producto.maxAmount)}</span>
        </div>
      </div>

      {/* Slider interactivo de Plazo */}
      <div className="slider-group">
        <div className="slider-header">
          <span className="sim-control-label">3. Plazo de Financiación:</span>
          <span className="slider-value">{plazo} meses</span>
        </div>
        <input
          type="range"
          className="slider-range"
          min={producto.minTerm}
          max={producto.maxTerm}
          step={1}
          value={plazo}
          onChange={(e) => alCambiarPlazo(Number(e.target.value))}
        />
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: "0.75rem",
            color: "var(--text-muted)",
          }}
        >
          <span>Mín: {producto.minTerm} meses</span>
          <span>Máx: {producto.maxTerm} meses</span>
        </div>
      </div>
    </div>
  );
}

export default SimuladorSliders;
