// src/components/CatalogoSembrado.jsx
// Componente que muestra el estado vacío inicial y el botón para sembrar créditos en Firestore.
// Se modulariza para mantener los archivos bajo el límite de 120 líneas.
function CatalogoSembrado({ onSembrar, sembrando }) {
  return (
    <div className="catalog-vacio">
      <h3>No hay productos en Firestore</h3>
      <p style={{ margin: "0.5rem 0 1rem" }}>
        La base de datos está vacía. Haz clic abajo para cargar los 6 créditos institucionales.
      </p>
      <button
        type="button"
        onClick={onSembrar}
        disabled={sembrando}
        className="btn btn-primary"
      >
        {sembrando
          ? "Cargando créditos en Firestore..."
          : "Inicializar catálogo en Firestore"}
      </button>
    </div>
  );
}

export default CatalogoSembrado;
