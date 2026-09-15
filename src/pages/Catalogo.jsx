import { useState } from "react";
import { CREDIT_PRODUCTS } from "../data/creditsData";
import CreditCard from "../components/CreditCard";
import "./Catalogo.css";

// Componente del catálogo con filtrado y ordenamiento interactivo.
function Catalogo() {
  const [categoria, setCategoria] = useState("todas");
  const [criterioOrden, setCriterioOrden] = useState("defecto");

  // Obtiene dinámicamente las categorías únicas a partir de los datos base
  const categorias = [
    "todas",
    ...new Set(CREDIT_PRODUCTS.map((item) => item.category)),
  ];

  const limpiarFiltros = () => {
    setCategoria("todas");
    setCriterioOrden("defecto");
  };

  // Este valor NO va en useState: es un cálculo derivado que se recalcula en cada render.
  // Se crea una copia con [...CREDIT_PRODUCTS] antes de ordenar porque .sort() muta el arreglo
  // in-situ (en memoria), lo cual violaría la inmutabilidad de React y alteraría la fuente original.
  const creditosMostrados = [...CREDIT_PRODUCTS]
    .filter((c) => categoria === "todas" || c.category === categoria)
    .sort((a, b) => {
      if (criterioOrden === "tasa-asc") return a.rateEA - b.rateEA;
      if (criterioOrden === "tasa-desc") return b.rateEA - a.rateEA;
      if (criterioOrden === "monto-desc") return b.maxAmount - a.maxAmount;
      return 0;
    });

  return (
    <section className="catalog-section">
      <div className="container">
        <div className="catalog-hero">
          <span
            className="badge badge-primary"
            style={{ marginBottom: "0.5rem" }}
          >
            Portafolio Institucional 2026
          </span>
          <h1 className="catalog-title">Catálogo de Líneas de Crédito</h1>
          <p className="catalog-subtitle">
            Explora y compara nuestras líneas de crédito según tasa y monto.
          </p>
        </div>

        {/* Barra de control con selectores y botón de limpieza */}
        <div className="catalog-toolbar">
          <div className="control-grupo">
            <label htmlFor="selectCategoria" className="control-etiqueta">
              Categoría:
            </label>
            <select
              id="selectCategoria"
              value={categoria}
              onChange={(e) => setCategoria(e.target.value)}
              className="control-select"
            >
              {categorias.map((cat) => (
                <option key={cat} value={cat}>
                  {cat === "todas" ? "Todas las categorías" : cat.toUpperCase()}
                </option>
              ))}
            </select>
          </div>

          <div className="control-grupo">
            <label htmlFor="selectOrden" className="control-etiqueta">
              Ordenar por:
            </label>
            <select
              id="selectOrden"
              value={criterioOrden}
              onChange={(e) => setCriterioOrden(e.target.value)}
              className="control-select"
            >
              <option value="defecto">Por defecto</option>
              <option value="tasa-asc">Tasa: menor a mayor</option>
              <option value="tasa-desc">Tasa: mayor a menor</option>
              <option value="monto-desc">Monto máximo: mayor a menor</option>
            </select>
          </div>

          <button
            type="button"
            onClick={limpiarFiltros}
            className="btn btn-outline"
          >
            Limpiar filtros
          </button>
        </div>

        {/* Contador de resultados encontrados */}
        <p className="catalog-contador">
          Mostrando {creditosMostrados.length}{" "}
          {creditosMostrados.length === 1
            ? "crédito disponible"
            : "créditos disponibles"}
        </p>

        {/* Renderizado condicional: mensaje de vacío o lista con .map() */}
        {creditosMostrados.length === 0 ? (
          <div className="catalog-vacio">
            <h3>No hay créditos disponibles</h3>
            <p>
              Intenta restablecer los filtros para volver a ver las opciones.
            </p>
          </div>
        ) : (
          <div className="catalog-grid">
            {creditosMostrados.map((credito) => (
              <CreditCard
                key={credito.id}
                id={credito.id}
                name={credito.name}
                category={credito.category}
                rateEA={credito.rateEA}
                minAmount={credito.minAmount}
                maxAmount={credito.maxAmount}
                minTerm={credito.minTerm}
                maxTerm={credito.maxTerm}
                description={credito.description}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default Catalogo;
