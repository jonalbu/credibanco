/**
 * BANCO AMIGO - CATÁLOGO DE CRÉDITOS (creditsData.js)
 */

// Base de datos de productos de crédito de Banco Amigo

export const CREDIT_PRODUCTS = [
  {
    id: 'hipotecario',
    name: 'Crédito Hipotecario / Vivienda',
    category: 'vivienda',
    rateEA: 10.5,
    minAmount: 50000000,
    maxAmount: 800000000,
    minTerm: 60,
    maxTerm: 240,
    featured: true,
    description: 'Adquiere tu vivienda nueva o usada con las mejores tasas del mercado financiero y plazos de hasta 20 años.',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80',
    benefits: ['Financiación de hasta el 80% del valor del inmueble', 'Aprobación digital en menos de 48 horas', 'Sin cobro de avalúo inicial', 'Tasa fija durante toda la vigencia del crédito'],
    requirements: ['Ingresos mínimos de 2 SMMLV', 'Antigüedad laboral de 1 año (indefinido) o 2 años (independiente)', 'Extractos bancarios de los últimos 3 meses', 'Certificado de tradición y libertad del inmueble']
  },
  {
    id: 'libre-inversion',
    name: 'Crédito de Libre Inversión',
    category: 'consumo',
    rateEA: 14.5,
    minAmount: 2000000,
    maxAmount: 80000000,
    minTerm: 12,
    maxTerm: 60,
    featured: false,
    description: 'Dinero inmediato de libre destinación para viajes, remodelaciones, compras o proyectos personales.',
    image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=600&q=80',
    benefits: ['Desembolso directo en tu cuenta en 15 minutos', 'Tasa fija preferencial', 'Sin codeudor para montos menores a $20M', 'Posibilidad de abonos extraordinarios a capital sin sanción'],
    requirements: ['Cédula de ciudadanía o extranjería', 'Certificado laboral vigente con antigüedad superior a 6 meses', 'Ingreso mínimo comprobable de 1.5 SMMLV']
  },
  {
    id: 'vehiculo',
    name: 'Crédito de Vehículo',
    category: 'vehiculo',
    rateEA: 12.8,
    minAmount: 15000000,
    maxAmount: 200000000,
    minTerm: 12,
    maxTerm: 84,
    featured: false,
    description: 'Estrena carro o moto particular, híbrido o eléctrico con facilidades de pago y póliza todo riesgo incluida.',
    image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=600&q=80',
    benefits: ['Financia hasta el 90% del valor comercial del vehículo', 'Tasas preferenciales para vehículos híbridos y eléctricos (0.5% descuento adicional)', 'Periodo de gracia de hasta 3 meses', 'Seguro todo riesgo financiado en la cuota'],
    requirements: ['Factura proforma o cotización del concesionario autorizado', 'Carta laboral con asignación salarial o RUT para independientes', 'Extractos bancarios últimos 3 meses']
  },
  {
    id: 'empresarial',
    name: 'Crédito Empresarial y PYME',
    category: 'empresa',
    rateEA: 11.9,
    minAmount: 30000000,
    maxAmount: 500000000,
    minTerm: 12,
    maxTerm: 72,
    featured: false,
    description: 'Capital de trabajo, compra de maquinaria y expansión operativa para pequeñas y medianas empresas en Colombia.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80',
    benefits: ['Líneas de redescuento Bancóldex y FNG disponibles', 'Asesor corporativo especializado asignado', 'Amortizaciones mensuales, trimestrales o semestrales', 'Financiación de proyectos de innovación'],
    requirements: ['Certificado de Cámara de Comercio no mayor a 30 días', 'Estados financieros auditados de los últimos 2 periodos fiscales', 'Declaración de renta de la empresa y socios']
  },
  {
    id: 'educativo',
    name: 'Crédito Educativo',
    category: 'educativo',
    rateEA: 9.8,
    minAmount: 1000000,
    maxAmount: 40000000,
    minTerm: 6,
    maxTerm: 36,
    featured: false,
    description: 'Financia pregrados, posgrados, maestrías o diplomados en Colombia o en el exterior con la tasa de fomento más baja.',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=600&q=80',
    benefits: ['Tasa especial subsidiada de fomento social', 'Renovación semestral automática 100% en línea', 'Convenio activo con más de 120 universidades del país', 'Periodo de gracia durante la época de estudios'],
    requirements: ['Orden de matrícula o recibo de pago de la institución educativa', 'Documento de identidad del estudiante y titular', 'Soporte de ingresos del estudiante o codeudor']
  },
  {
    id: 'cartera',
    name: 'Compra de Cartera',
    category: 'consumo',
    rateEA: 11.5,
    minAmount: 5000000,
    maxAmount: 120000000,
    minTerm: 12,
    maxTerm: 72,
    featured: false,
    description: 'Unifica tus deudas de tarjetas y créditos de otras entidades en una sola cuota mensual más cómoda y con menor tasa.',
    image: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&w=600&q=80',
    benefits: ['Ahorro comprobado de hasta el 40% en intereses mensuales', 'Una sola fecha de corte y pago consolidada', 'Sin cobro de comisiones por giros interbancarios', 'Liberación inmediata de capacidad de endeudamiento'],
    requirements: ['Extractos recientes de las obligaciones a recoger (máximo 30 días)', 'Certificación de saldo para pago proyectado', 'Certificación de ingresos laborales']
  }
];