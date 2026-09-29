import { useState, useEffect } from "react";
import { obtenerSolicitudesPorEmail, obtenerTodasLasSolicitudes } from "../services/solicitudesService";
import SolicitudCard from "../components/SolicitudCard";
import MisSolicitudesBuscador from "../components/MisSolicitudesBuscador";
import "./MisSolicitudes.css";

// Página para consultar solicitudes radicadas mediante consultas compuestas a Firestore.
function MisSolicitudes() {
  const [solicitudes, setSolicitudes] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);
  const [emailBuscador, setEmailBuscador] = useState("");
  const [criterioBusqueda, setCriterioBusqueda] = useState("Todas las radicaciones");

  const cargarTodas = async () => {
    setCargando(true);
    setError(null);
    setCriterioBusqueda("Todas las radicaciones");
    try {
      const datos = await obtenerTodasLasSolicitudes();
      setSolicitudes(datos);
    } catch (err) {
      setError(err.message || "Error al cargar las solicitudes de Firestore.");
    } finally {
      setCargando(false);
    }
  };

  useEffect(() => {
    let activo = true;
    obtenerTodasLasSolicitudes()
      .then((datos) => { if (activo) setSolicitudes(datos); })
      .catch((err) => { if (activo) setError(err.message); })
      .finally(() => { if (activo) setCargando(false); });
    return () => { activo = false; };
  }, []);

  const manejarBuscarPorEmail = async (e) => {
    e.preventDefault();
    if (!emailBuscador.trim()) {
      cargarTodas();
      return;
    }

    setCargando(true);
    setError(null);
    setCriterioBusqueda(`Email: ${emailBuscador.trim()}`);
    try {
      // Consulta compuesta con where() y orderBy() exigida en la rúbrica
      const resultados = await obtenerSolicitudesPorEmail(emailBuscador);
      setSolicitudes(resultados);
    } catch (err) {
      setError(err.message || "Error al buscar por correo en Firestore.");
    } finally {
      setCargando(false);
    }
  };

  return (
    <section className="solicitudes-section">
      <div className="container">
        <div className="solicitudes-hero">
          <span className="badge badge-primary">Consulta en Tiempo Real</span>
          <h1 style={{ fontSize: "2.25rem", margin: "0.5rem 0" }}>Mis Solicitudes</h1>
          <p style={{ color: "var(--text-muted)" }}>
            Consulta las solicitudes radicadas en Firestore mediante filtros por correo.
          </p>
        </div>

        <MisSolicitudesBuscador
          emailBuscador={emailBuscador}
          setEmailBuscador={setEmailBuscador}
          onBuscar={manejarBuscarPorEmail}
          onLimpiar={() => { setEmailBuscador(""); cargarTodas(); }}
          cargando={cargando}
        />

        {cargando && <div className="catalog-cargando">Consultando solicitudes en Firestore...</div>}

        {error && (
          <div className="catalog-alerta-error">
            <p>{error}</p>
            <button type="button" onClick={cargarTodas} className="btn btn-outline" style={{ marginTop: "0.5rem" }}>
              Reintentar
            </button>
          </div>
        )}

        {!cargando && !error && (
          <>
            <p className="catalog-contador">
              Filtro activo: <strong>{criterioBusqueda}</strong> — {solicitudes.length} {solicitudes.length === 1 ? "solicitud encontrada" : "solicitudes encontradas"}
            </p>

            {solicitudes.length === 0 ? (
              <div className="catalog-vacio">
                <h3>No se encontraron solicitudes</h3>
                <p style={{ margin: "0.5rem 0" }}>
                  No existen registros en Firestore que coincidan con la búsqueda.
                </p>
              </div>
            ) : (
              <div className="solicitudes-grid">
                {solicitudes.map((sol) => (
                  <SolicitudCard key={sol.id} solicitud={sol} />
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
}

export default MisSolicitudes;
