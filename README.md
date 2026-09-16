# CreditSmart - Banco Amigo | Aplicación Web Dinámica en React

[![React](https://img.shields.io/badge/React-19-blue.svg)](https://react.dev/)
[![React Router](https://img.shields.io/badge/React_Router-7-red.svg)](https://reactrouter.com/)
[![Vite](https://img.shields.io/badge/Vite-8-purple.svg)](https://vite.dev/)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow.svg)](https://developer.mozilla.org/)

Proyecto desarrollado para el curso **Ingeniería Web** de la **Institución Universitaria Digital de Antioquia (IU Digital)**.  
**Actividad S30 - EA2:** Transformación del diseño estático de *Banco Amigo* en una aplicación web interactiva, responsiva y orientada a componentes funcionales con React.

---

##  Información del Estudiante

* **Estudiante:** Jonathan Alvarez Bustamante
* **Programa:** Ingeniería de Software / Sistemas
* **Institución:** IU Digital de Antioquia
* **Curso:** Ingeniería Web (7° Semestre)
* **Docente:** Jorge Armando

---

##  Descripción del Proyecto

**CreditSmart** es una Single Page Application (SPA) para la gestión, simulación y radicación de productos financieros de Banco Amigo. La aplicación permite a los usuarios explorar 6 líneas de crédito, filtrar y ordenar según tasas de interés y montos, calcular en tiempo real sus cuotas mensuales mediante el Sistema Francés de Amortización y radicar solicitudes digitales mediante formularios controlados con validación instantánea.

---

##  Funcionalidades Principales

### 1. Inicio (`/`)
* **Hero Institucional:** Presentación de la propuesta de valor con botones de acción directa a radicación y simulación.
* **Vitrina Dinámica:** Renderizado reactivo mediante `.map()` de los créditos destacados utilizando el componente reutilizable `CreditCard`.
* **Sección Informativa:** Ventajas competitivas y llamada a la acción rápida.

### 2. Catálogo de Créditos (`/catalogo`)
* **Listado Dinámico Completo:** Visualización de todas las 6 líneas crediticias desde una base de datos centralizada (`creditsData.js`).
* **Filtro por Categoría:** Selector interactivo para filtrar créditos de Vivienda, Consumo, Vehículo, Comercial o Educativo.
* **Ordenamiento Inmutable:** Reorganización por tasa de interés (menor a mayor / mayor a menor) o monto máximo.
* **Contador Reactivo y Estado Vacío:** Conteo automático de productos visibles y mensaje amigable en caso de no encontrar coincidencias.

### 3. Simulador Financiero (`/simulador`)
* **Búsqueda en Tiempo Real:** Filtrado reactivo por palabra clave a medida que el usuario escribe.
* **Calculadora de Amortización:** Sliders interactivos de monto y plazo con límites automáticos por crédito.
* **Cálculo de Cuota en Vivo:** Proyección matemática de la cuota mensual fija bajo la fórmula financiera francesa sin duplicación de estado.
* **Enlace Precargado:** Posibilidad de transferir los valores simulados directamente al formulario de solicitud.

### 4. Solicitud Digital (`/solicitar`)
* **Formulario 100% Controlado:** Captura de datos personales y financieros con `useState`.
* **Validaciones en Tiempo Real:** Comprobación inmediata de cédula, correo electrónico y rangos permitidos de montos y plazos con mensajes de error descriptivos.
* **Resumen Previo:** Visualización lateral instantánea del crédito y cuota estimada antes de enviar.
* **Almacenamiento en Memoria:** Registro de solicitudes en un array en el estado de la aplicación, pantalla de confirmación con radicado y limpieza automática del formulario tras el envío.

### 5. Navegación y Usabilidad
* **Barra de Navegación Sticky:** Menú fijo con enlaces activos mediante `NavLink` (`isActive`) y menú desplegable para dispositivos móviles.
* **Modales Informativos:** Ventanas emergentes de normatividad legal y tasas controladas por estado condicional (sin portales).
* **Ruta Comodín (404):** Captura de URLs inválidas con pantalla de retorno guiada.

---

##  Tecnologías Utilizadas

* **React 19:** Biblioteca principal basada en componentes funcionales y hooks estándar (`useState`, `useEffect`).
* **React Router DOM 7:** Enrutamiento declarativo del lado del cliente (`BrowserRouter`, `Routes`, `Route`, `NavLink`, `useSearchParams`).
* **Vite 8:** Entorno de desarrollo ultrarrápido y empaquetador de módulos.
* **JavaScript Moderno (ES6+):** Métodos de arreglos inmutables (`.map()`, `.filter()`, `.sort()`), desestructuración y plantilla de cadenas.
* **CSS3 Modular:** Sistema de variables globales (`:root`), tipografías de Google Fonts (*Manrope* y *Work Sans*) y diseño responsive sin dependencias de terceros.

---

##  Arquitectura del Proyecto

```text
Proyecto_Credit/
├── public/                     # Archivos estáticos y multimedia
│   └── img/                    # Imágenes institucionales
├── src/
│   ├── components/             # Componentes reutilizables e independientes
│   │   ├── CreditCard.jsx      # Tarjeta de producto de crédito
│   │   ├── CreditCard.css
│   │   ├── Navbar.jsx          # Barra de navegación principal
│   │   ├── Navbar.css
│   │   ├── Footer.jsx          # Pie de página y modales legales
│   │   ├── Footer.css
│   │   ├── SimuladorControles.jsx
│   │   ├── SimuladorSliders.jsx
│   │   ├── SimuladorResumen.jsx
│   │   ├── SolicitudFormulario.jsx
│   │   ├── SolicitudResumen.jsx
│   │   └── SolicitudExito.jsx
│   ├── data/
│   │   └── creditsData.js      # Base de datos de las 6 líneas de crédito
│   ├── pages/                  # Vistas principales de la aplicación
│   │   ├── Home.jsx / Home.css
│   │   ├── Catalogo.jsx / Catalogo.css
│   │   ├── Simulador.jsx / Simulador.css
│   │   ├── Solicitar.jsx / Solicitar.css
│   │   └── PaginaNoEncontrada.jsx
│   ├── utils/                  # Funciones de lógica pura reutilizables
│   │   ├── calculos.js         # Fórmula financiera de amortización
│   │   └── formatos.js         # Formateador de moneda colombiana (COP)
│   ├── App.jsx                 # Configuración de rutas y layout
│   ├── main.jsx                # Punto de entrada de React
│   └── index.css               # Variables globales y reseteo base
├── Tarea_1/                    # Histórico estático de la Actividad 1
├── package.json
└── README.md
```

---

##  Instrucciones de Instalación y Ejecución

Sigue estos pasos para clonar y ejecutar el proyecto localmente:

### Prerrequisitos
Tener instalado [Node.js](https://nodejs.org/) (versión 18 o superior).

### 1. Clonar el repositorio
```bash
git clone https://github.com/tu-usuario/Proyecto_Credit.git
cd Proyecto_Credit
```

### 2. Instalar dependencias
```bash
npm install
```

### 3. Iniciar el servidor de desarrollo
```bash
npm run dev
```
Abre en tu navegador la dirección indicada en la terminal (por defecto: `http://localhost:5173`).

### 4. Compilar para producción (Opcional)
```bash
npm run build
npm run preview
```

---

##  Capturas de Pantalla de la Aplicación

> *(Inserta aquí las capturas de pantalla de tu aplicación antes de la entrega final)*

| Inicio (Hero y Destacados) | Catálogo con Filtros |
| :---: | :---: |
| ![Inicio](docs/mockups/screenshot_home.png) | ![Catálogo](docs/mockups/screenshot_catalogo.png) |

| Simulador Interactivo | Solicitud y Validación en Tiempo Real |
| :---: | :---: |
| ![Simulador](docs/mockups/screenshot_simulador.png) | ![Solicitud](docs/mockups/screenshot_solicitar.png) |

---

##  Decisiones de Diseño y Conceptos de React Aplicados

1. **Constantes Derivadas:**  
   Valores como la cuota mensual, los productos filtrados y el contador de resultados no se almacenan en `useState`. Se calculan en cada renderizado a partir de las entradas del usuario, garantizando una **única fuente de verdad** y previniendo errores de sincronización.
2. **Inmutabilidad en Arreglos:**  
   El ordenamiento con `.sort()` se realiza siempre sobre una copia superficial (`[...arreglo]`) para evitar mutar el array original importado en memoria.
3. **Control Estricto de Modularidad:**  
   Todos los componentes y hojas de estilo se mantienen por debajo de las 120 líneas de código mediante una separación coherente de responsabilidades.

