// Funciones utilitarias para formatear datos visuales.

// Da formato a cantidades monetarias en Pesos Colombianos (COP) sin decimales.
// Se usa la API estándar Intl.NumberFormat para evitar dependencias externas como numeral.js.
export function formatearMoneda(monto) {
  const formateador = new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    maximumFractionDigits: 0,
  });

  return formateador.format(monto);
}
