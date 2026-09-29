import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { CREDIT_PRODUCTS } from "../data/creditsData";
import { calcularCuotaMensual } from "../utils/calculos";
import { validarCampo, validarFormularioCompleto } from "../utils/validaciones";
import { crearSolicitud } from "../services/solicitudesService";
import SolicitudFormulario from "../components/SolicitudFormulario";
import SolicitudResumen from "../components/SolicitudResumen";
import SolicitudExito from "../components/SolicitudExito";
import SolicitarHero from "../components/SolicitarHero";
import "./Solicitar.css";

// Página de solicitud de crédito con validaciones en tiempo real y persistencia en Firestore.
function Solicitar() {
  const [parametros] = useSearchParams();
  const idInicial = parametros.get("credito") || CREDIT_PRODUCTS[0].id;
  const prodInicial = CREDIT_PRODUCTS.find((p) => p.id === idInicial) || CREDIT_PRODUCTS[0];

  const estadoInicial = {
    nombre: "",
    cedula: "",
    email: "",
    telefono: "",
    idCredito: prodInicial.id,
    monto: Number(parametros.get("monto")) || prodInicial.minAmount,
    plazo: Number(parametros.get("plazo")) || prodInicial.minTerm,
  };

  const [formulario, setFormulario] = useState(estadoInicial);
  const [errores, setErrores] = useState({});
  const [enviando, setEnviando] = useState(false);
  const [errorEnvio, setErrorEnvio] = useState(null);
  const [solicitudEnviada, setSolicitudEnviada] = useState(null);

  const productoActual = CREDIT_PRODUCTS.find((p) => p.id === formulario.idCredito) || CREDIT_PRODUCTS[0];
  const cuotaMensual = calcularCuotaMensual(Number(formulario.monto), Number(formulario.plazo), productoActual.rateEA);

  const manejarCambio = (e) => {
    const { name, value } = e.target;
    const nuevoValor = name === "monto" || name === "plazo" ? Number(value) : value;
    setFormulario((prev) => ({ ...prev, [name]: nuevoValor }));
    const errorDetectado = validarCampo(name, nuevoValor, productoActual);
    setErrores((prev) => ({ ...prev, [name]: errorDetectado }));
  };

  const manejarEnvio = async (e) => {
    e.preventDefault();
    const nuevosErrores = validarFormularioCompleto(formulario, productoActual);
    if (Object.keys(nuevosErrores).length > 0) {
      setErrores(nuevosErrores);
      return;
    }

    setEnviando(true);
    setErrorEnvio(null);
    const radicadoInterno = `RAD-${Date.now().toString().slice(-6)}`;
    const datosAGuardar = {
      ...formulario,
      idRadicado: radicadoInterno,
      nombreProducto: productoActual.name,
      tasaEA: productoActual.rateEA,
      cuotaMensual,
    };

    try {
      const idFirestore = await crearSolicitud(datosAGuardar);
      setSolicitudEnviada({ ...datosAGuardar, idFirestore });
      setFormulario(estadoInicial);
      setErrores({});
    } catch (err) {
      setErrorEnvio(err.message || "Error al radicar la solicitud en Firestore.");
    } finally {
      setEnviando(false);
    }
  };

  return (
    <section className="solicitar-section">
      <div className="container">
        <SolicitarHero />

        {errorEnvio && (
          <div className="catalog-alerta-error" style={{ maxWidth: "40rem", margin: "0 auto 1.5rem" }}>
            <p><strong>Error:</strong> {errorEnvio}</p>
          </div>
        )}

        {solicitudEnviada ? (
          <SolicitudExito ultimaSolicitud={solicitudEnviada} onNuevaSolicitud={() => setSolicitudEnviada(null)} />
        ) : (
          <div className="solicitud-layout">
            <SolicitudFormulario
              formulario={formulario}
              errores={errores}
              productoActual={productoActual}
              alCambiar={manejarCambio}
              alEnviar={manejarEnvio}
              enviando={enviando}
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
