import { Link } from "react-router-dom";

// Componente para manejar rutas inexistentes (404).
// Ofrece una navegación de retorno amigable para no dejar al usuario atrapado.
function PaginaNoEncontrada() {
  return (
    <section
      className="container"
      style={{ padding: "4rem 1.5rem", textAlign: "center" }}
    >
      <h2
        style={{
          fontSize: "3rem",
          color: "var(--primary)",
          marginBottom: "1rem",
        }}
      >
        404
      </h2>
      <h3 style={{ marginBottom: "1rem" }}>Página no encontrada</h3>
      <p style={{ color: "var(--text-muted)", marginBottom: "2rem" }}>
        Lo sentimos, la página que buscas no existe o ha sido movida.
      </p>
      <Link to="/" className="btn btn-primary">
        Volver al Inicio
      </Link>
    </section>
  );
}

export default PaginaNoEncontrada;
