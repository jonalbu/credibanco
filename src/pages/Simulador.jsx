import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { CREDIT_PRODUCTS } from "../data/creditsData";
import { calcularCuotaMensual } from "../utils/calculos";
import SimuladorControles from "../components/SimuladorControles";
import SimuladorSliders from "../components/SimuladorSliders";
import SimuladorResumen from "../components/SimuladorResumen";
import "./Simulador.css";

// Página principal del simulador financiero.
function Simulador() {
  const [parametros] = useSearchParams();
  const idInicial = parametros.get("credito") || CREDIT_PRODUCTS[0].id;

  const [busqueda, setBusqueda] = useState("");
  const [ordenTasa, setOrdenTasa] = useState("ninguno");
  const [idCredito, setIdCredito] = useState(idInicial);

  const productoActual =
    CREDIT_PRODUCTS.find((p) => p.id === idCredito) || CREDIT_PRODUCTS[0];
  const [monto, setMonto] = useState(productoActual.minAmount);
  const [plazo, setPlazo] = useState(productoActual.minTerm);

  // Actualiza los valores iniciales directamente desde el evento para evitar renders en cascada
  const seleccionarCredito = (prod) => {
    setIdCredito(prod.id);
    setMonto(prod.minAmount);
    setPlazo(prod.minTerm);
  };

  // Lista filtrada en tiempo real sin duplicar estado en memoria
  const productosVisibles = [...CREDIT_PRODUCTS]
    .filter((p) => p.name.toLowerCase().includes(busqueda.toLowerCase().trim()))
    .sort((a, b) => {
      if (ordenTasa === "asc") return a.rateEA - b.rateEA;
      if (ordenTasa === "desc") return b.rateEA - a.rateEA;
      return 0;
    });

  // La cuota mensual NO va en useState: se calcula en vivo en cada render con la fórmula francesa
  const cuotaMensual = calcularCuotaMensual(
    monto,
    plazo,
    productoActual.rateEA,
  );

  const limpiarFiltros = () => {
    setBusqueda("");
    setOrdenTasa("ninguno");
  };

  return (
    <section className="sim-section">
      <div className="container">
        <div className="sim-hero">
          <span
            className="badge badge-primary"
            style={{ marginBottom: "0.5rem" }}
          >
            Simulador Oficial
          </span>
          <h1 style={{ fontSize: "2.25rem", marginBottom: "0.5rem" }}>
            Simulador de Créditos
          </h1>
          <p style={{ color: "var(--text-muted)" }}>
            Proyecta tu cuota fija mensual y compara opciones en tiempo real.
          </p>
        </div>

        {/* Controles de búsqueda en tiempo real y ordenamiento */}
        <SimuladorControles
          busqueda={busqueda}
          alCambiarBusqueda={setBusqueda}
          ordenTasa={ordenTasa}
          alCambiarOrden={setOrdenTasa}
          alLimpiar={limpiarFiltros}
        />

        {productosVisibles.length === 0 ? (
          <div className="catalog-vacio">
            <h3>No hay créditos disponibles</h3>
            <p>
              No se encontraron líneas de crédito que coincidan con &quot;
              {busqueda}&quot;.
            </p>
            <button
              type="button"
              onClick={limpiarFiltros}
              className="btn btn-primary"
              style={{ marginTop: "1rem" }}
            >
              Restablecer búsqueda
            </button>
          </div>
        ) : (
          <div className="sim-layout">
            <div>
              <label
                className="sim-control-label"
                style={{ display: "block", marginBottom: "0.75rem" }}
              >
                1. Selecciona la línea de crédito:
              </label>
              <div className="type-select-grid">
                {productosVisibles.map((prod) => (
                  <div
                    key={prod.id}
                    className={`type-radio-card ${idCredito === prod.id ? "active" : ""}`}
                    onClick={() => seleccionarCredito(prod)}
                  >
                    <div>
                      <strong>{prod.name}</strong>
                      <div
                        style={{
                          fontSize: "0.8rem",
                          color: "var(--text-muted)",
                        }}
                      >
                        Tasa: {prod.rateEA}% E.A.
                      </div>
                    </div>
                    <span className="badge badge-primary">{prod.category}</span>
                  </div>
                ))}
              </div>

              {/* Sliders interactivos de monto y plazo */}
              <SimuladorSliders
                producto={productoActual}
                monto={monto}
                alCambiarMonto={setMonto}
                plazo={plazo}
                alCambiarPlazo={setPlazo}
              />
            </div>

            {/* Resumen interactivo de cuota fija */}
            <SimuladorResumen
              producto={productoActual}
              monto={monto}
              plazo={plazo}
              cuotaMensual={cuotaMensual}
            />
          </div>
        )}
      </div>
    </section>
  );
}

export default Simulador;
