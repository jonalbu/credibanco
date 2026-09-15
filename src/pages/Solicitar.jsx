import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { CREDIT_PRODUCTS } from "../data/creditsData";
import { calcularCuotaMensual } from "../utils/calculos";
import SolicitudFormulario from "../components/SolicitudFormulario";
import SolicitudResumen from "../components/SolicitudResumen";
import SolicitudExito from "../components/SolicitudExito";
import "./Solicitar.css";

// Página de solicitud de crédito con validaciones en tiempo real y almacenamiento en memoria.
function Solicitar() {
  const [parametros] = useSearchParams();
  const idInicial = parametros.get("credito") || CREDIT_PRODUCTS[0].id;
  const productoInicial =
    CREDIT_PRODUCTS.find((p) => p.id === idInicial) || CREDIT_PRODUCTS[0];

  const estadoInicial = {
    nombre: "",
    cedula: "",
    email: "",
    telefono: "",
    idCredito: productoInicial.id,
    monto: Number(parametros.get("monto")) || productoInicial.minAmount,
    plazo: Number(parametros.get("plazo")) || productoInicial.minTerm,
  };

  const [formulario, setFormulario] = useState(estadoInicial);
  const [errores, setErrores] = useState({});
  // Array en memoria para almacenar las solicitudes radicadas durante la sesión del usuario
  const [, setSolicitudes] = useState([]);
  const [solicitudEnviada, setSolicitudEnviada] = useState(null);

  const productoActual =
    CREDIT_PRODUCTS.find((p) => p.id === formulario.idCredito) ||
    CREDIT_PRODUCTS[0];
  const cuotaMensual = calcularCuotaMensual(
    Number(formulario.monto),
    Number(formulario.plazo),
    productoActual.rateEA,
  );

  // Validación reactiva por cada campo
  const validarCampo = (campo, valor) => {
    let error = "";
    if (campo === "nombre" && valor.trim().length < 3)
      error = "Ingresa tu nombre completo (mínimo 3 caracteres)";
    if (campo === "cedula" && (!/^\d+$/.test(valor) || valor.length < 6))
      error = "Cédula inválida (mínimo 6 dígitos numéricos)";
    if (campo === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(valor))
      error = "Ingresa un correo electrónico válido";
    if (campo === "telefono" && valor.trim().length < 7)
      error = "Ingresa un número telefónico de contacto válido";
    if (campo === "monto") {
      const num = Number(valor);
      if (num < productoActual.minAmount || num > productoActual.maxAmount)
        error = "El monto está fuera del rango permitido";
    }
    if (campo === "plazo") {
      const num = Number(valor);
      if (num < productoActual.minTerm || num > productoActual.maxTerm)
        error = "El plazo está fuera de los meses permitidos";
    }
    return error;
  };

  const manejarCambio = (e) => {
    const { name, value } = e.target;
    const nuevoValor =
      name === "monto" || name === "plazo" ? Number(value) : value;
    setFormulario((prev) => ({ ...prev, [name]: nuevoValor }));
    const errorDetectado = validarCampo(name, nuevoValor);
    setErrores((prev) => ({ ...prev, [name]: errorDetectado }));
  };

  const manejarEnvio = (e) => {
    e.preventDefault();
    const nuevosErrores = {};
    Object.keys(formulario).forEach((campo) => {
      const err = validarCampo(campo, formulario[campo]);
      if (err) nuevosErrores[campo] = err;
    });

    if (Object.keys(nuevosErrores).length > 0) {
      setErrores(nuevosErrores);
      return;
    }

    const nuevaSolicitud = {
      ...formulario,
      idRadicado: `RAD-${Date.now().toString().slice(-6)}`,
      nombreProducto: productoActual.name,
      cuotaMensual,
    };

    // Almacena la solicitud en el array de memoria y reinicia el formulario automáticamente
    setSolicitudes((prev) => [...prev, nuevaSolicitud]);
    setSolicitudEnviada(nuevaSolicitud);
    setFormulario(estadoInicial);
    setErrores({});
  };

  return (
    <section className="solicitar-section">
      <div className="container">
        <div className="solicitar-hero">
          <span
            className="badge badge-primary"
            style={{ marginBottom: "0.5rem" }}
          >
            Trámite 100% Digital
          </span>
          <h1 style={{ fontSize: "2.25rem", marginBottom: "0.5rem" }}>
            Solicitud de Crédito
          </h1>
          <p style={{ color: "var(--text-muted)" }}>
            Diligencia tu solicitud en minutos y recibe respuesta inmediata.
          </p>
        </div>

        {solicitudEnviada ? (
          <SolicitudExito
            ultimaSolicitud={solicitudEnviada}
            onNuevaSolicitud={() => setSolicitudEnviada(null)}
          />
        ) : (
          <div className="solicitud-layout">
            <SolicitudFormulario
              formulario={formulario}
              errores={errores}
              productoActual={productoActual}
              alCambiar={manejarCambio}
              alEnviar={manejarEnvio}
            />
            <SolicitudResumen
              producto={productoActual}
              monto={Number(formulario.monto)}
              plazo={Number(formulario.plazo)}
              cuotaMensual={cuotaMensual}
              nombreCompleto={formulario.nombre}
            />
          </div>
        )}
      </div>
    </section>
  );
}

export default Solicitar;
