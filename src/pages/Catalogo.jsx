import { useState, useEffect } from "react";
import { obtenerCreditos, sembrarCreditosIniciales } from "../services/creditosService";
import { CREDIT_PRODUCTS } from "../data/creditsData";
import CreditCard from "../components/CreditCard";
import CatalogoToolbar from "../components/CatalogoToolbar";
import CatalogoSembrado from "../components/CatalogoSembrado";
import "./Catalogo.css";

// Componente del catálogo conectado a Firestore con carga asíncrona, filtrado y ordenamiento.
function Catalogo() {
  const [creditos, setCreditos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);
  const [sembrando, setSembrando] = useState(false);
  const [categoria, setCategoria] = useState("todas");
  const [criterioOrden, setCriterioOrden] = useState("defecto");

  const cargarCreditos = async () => {
    setCargando(true);
    setError(null);
    try {
      const lista = await obtenerCreditos();
      setCreditos(lista);
    } catch (err) {
      setError(err.message || "Error al conectar con la base de datos.");
    } finally {
      setCargando(false);
    }
  };

  useEffect(() => {
    let activo = true;
    obtenerCreditos()
      .then((lista) => { if (activo) setCreditos(lista); })
      .catch((err) => { if (activo) setError(err.message || "Error de conexión."); })
      .finally(() => { if (activo) setCargando(false); });
    return () => { activo = false; };
  }, []);

  const manejarSembrado = async () => {
    setSembrando(true);
    try {
      await sembrarCreditosIniciales(CREDIT_PRODUCTS);
      await cargarCreditos();
    } catch (err) {
      setError(err.message || "Error al inicializar la base de datos.");
    } finally {
      setSembrando(false);
    }
  };

  // Valores derivados calculados en cada renderizado (NO van en useState para evitar desincronización)
  const categorias = ["todas", ...new Set(creditos.map((c) => c.category))];
  const creditosMostrados = [...creditos]
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
          <span className="badge badge-primary">Portafolio Institucional 2026</span>
          <h1 className="catalog-title">Catálogo de Líneas de Crédito</h1>
          <p className="catalog-subtitle">
            Explora y compara nuestras líneas de crédito conectadas a Firestore.
          </p>
        </div>

        {cargando && <div className="catalog-cargando">Cargando productos de crédito...</div>}

        {error && (
          <div className="catalog-alerta-error">
            <p>{error}</p>
            <button type="button" onClick={cargarCreditos} className="btn btn-outline" style={{ marginTop: "0.5rem" }}>
              Reintentar
            </button>
          </div>
        )}

        {!cargando && !error && creditos.length === 0 && (
          <CatalogoSembrado onSembrar={manejarSembrado} sembrando={sembrando} />
        )}

        {!cargando && !error && creditos.length > 0 && (
          <>
            <CatalogoToolbar
              categoria={categoria}
              setCategoria={setCategoria}
              criterioOrden={criterioOrden}
              setCriterioOrden={setCriterioOrden}
              categorias={categorias}
              onLimpiar={() => { setCategoria("todas"); setCriterioOrden("defecto"); }}
            />
            <p className="catalog-contador">
              Mostrando {creditosMostrados.length} {creditosMostrados.length === 1 ? "crédito disponible" : "créditos disponibles"}
            </p>
            {creditosMostrados.length === 0 ? (
              <div className="catalog-vacio">
                <h3>No hay créditos para los filtros seleccionados</h3>
              </div>
            ) : (
              <div className="catalog-grid">
                {creditosMostrados.map((c) => <CreditCard key={c.id} {...c} />)}
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
}

export default Catalogo;
