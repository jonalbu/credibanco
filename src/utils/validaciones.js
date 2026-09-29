// src/utils/validaciones.js
// Funciones de validación de campos para los formularios de la aplicación.
// Se extrae a utilidades para reutilización y mantener los componentes bajo 120 líneas.

export function validarCampo(campo, valor, productoActual) {
  let error = "";
  if (campo === "nombre" && valor.trim().length < 3) {
    error = "Ingresa tu nombre completo (mínimo 3 caracteres)";
  }
  if (campo === "cedula" && (!/^\d+$/.test(valor) || valor.length < 6)) {
    error = "Cédula inválida (mínimo 6 dígitos numéricos)";
  }
  if (campo === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(valor)) {
    error = "Ingresa un correo electrónico válido";
  }
  if (campo === "telefono" && valor.trim().length < 7) {
    error = "Ingresa un número telefónico de contacto válido";
  }
  if (campo === "monto") {
    const num = Number(valor);
    if (num < productoActual.minAmount || num > productoActual.maxAmount) {
      error = "El monto está fuera del rango permitido";
    }
  }
  if (campo === "plazo") {
    const num = Number(valor);
    if (num < productoActual.minTerm || num > productoActual.maxTerm) {
      error = "El plazo está fuera de los meses permitidos";
    }
  }
  return error;
}

export function validarFormularioCompleto(formulario, productoActual) {
  const nuevosErrores = {};
  Object.keys(formulario).forEach((campo) => {
    const err = validarCampo(campo, formulario[campo], productoActual);
    if (err) nuevosErrores[campo] = err;
  });
  return nuevosErrores;
}
