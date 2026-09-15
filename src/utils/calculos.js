// Funciones matemáticas y financieras de la aplicación.

// Calcula la cuota mensual estimada bajo el Sistema Francés de Amortización con tasa fija.
// Se usa la fórmula estándar: C = [monto * i] / [1 - (1 + i)^(-plazo)]
// donde 'i' es la tasa mes vencido obtenida a partir de la tasa efectiva anual (E.A.).
export function calcularCuotaMensual(monto, plazoMeses, tasaEA) {
  if (!monto || !plazoMeses || !tasaEA || plazoMeses <= 0) {
    return 0;
  }

  // Conversión financiera de tasa anual (E.A.) a tasa mensual vencida (M.V.)
  const tasaMensual = Math.pow(1 + tasaEA / 100, 1 / 12) - 1;
  const denominador = 1 - Math.pow(1 + tasaMensual, -plazoMeses);

  if (denominador === 0) return 0;

  const cuota = (monto * tasaMensual) / denominador;
  return Math.round(cuota);
}
