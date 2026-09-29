// src/components/CatalogoToolbar.jsx
// Componente de controles para filtrar por categoría y ordenar productos de crédito.
// Se extrae como componente modular para evitar que Catalogo.jsx exceda el límite de 120 líneas.
function CatalogoToolbar({
  categoria,
  setCategoria,
  criterioOrden,
  setCriterioOrden,
  categorias,
  onLimpiar,
}) {
  return (
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

      <button type="button" onClick={onLimpiar} className="btn btn-outline">
        Limpiar filtros
      </button>
    </div>
  );
}

export default CatalogoToolbar;
