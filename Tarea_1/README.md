# Banco Amigo - Portal Web de Créditos y Simulación Financiera

Portal web bancario interactivo desarrollado para **Banco Amigo**, que permite a los usuarios explorar un catálogo completo de líneas de crédito, simular cuotas mensuales y realizar solicitudes de crédito digitales a través de una interfaz moderna, semántica y responsiva.

---

## 📁 Estructura del Proyecto y Entregables

El proyecto está organizado siguiendo buenas prácticas de desarrollo web frontend con separación limpia de estructura (**HTML5**) y presentación (**CSS3**):

```text
├── index.html          # Página Principal (Home institucional, portafolio y modal de Banca Virtual)
├── catalogo.html       # Catálogo de Créditos (Filtros por categorías, montos y requisitos)
├── simulador.html      # Simulador de Crédito (Cálculo de cuotas estimadas y tabla de pagos)
├── solicitar.html      # Formulario de Solicitud de Crédito Multi-Paso
├── styles.css          # Hoja de estilos CSS3 profesional, variables y diseño responsive
├── img/                # Recursos multimedia e imágenes del portal
│   ├── alisadyson-family-7257182.jpg
│   └── geralt-family-7678491_1920.jpg
└── README.md           # Documentación completa del proyecto
```

---

## 🛠️ Aspectos Técnicos Implementados

### 1. Estructura HTML5 Semántica y Modular
- **`index.html` (Inicio):** Encabezado con barra de navegación, hero institucional, tarjetas destacadas de las principales líneas de crédito, sección de beneficios *"¿Por qué elegir Banco Amigo?"*, llamadas a la acción (CTA) y modal de acceso seguro a la **Banca Virtual**.
- **`catalogo.html` (Catálogo de Créditos):** Vista detallada del portafolio con tarjetas informativas clasificadas por categoría (*Vivienda, Consumo, Vehículo, Empresa, Educación, Cartera*), tasas de interés, plazos máximos y enlaces directos a simular.
- **`simulador.html` (Simulador de Crédito):** Interfaz interactiva para el cálculo de cuotas mensuales con selector de tipo de crédito, controles deslizantes de monto y plazo, resumen de amortización y plan de pagos detallado.
- **`solicitar.html` (Solicitud Digital):** Formulario guiado multi-paso (*Paso 1: Datos Personales, Paso 2: Información Financiera y Laboral, Paso 3: Configuración del Crédito y Autorizaciones*) con resumen de radicación.
- **Etiquetas Semánticas:** Uso adecuado de `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<footer>`, `<figure>`, `<label>` y `<form>`.
- **Accesibilidad (a11y):** Inclusión de atributos `aria-label`, `aria-expanded`, `role="dialog"`, y vinculación estricta de `<label for="...">` con `<input id="...">`.

### 2. Diseño y Estilos con CSS3 Moderno
- **Sistema de Diseño y Variables CSS (`:root`):**
  - Paleta institucional coherente (`--primary: #674bb5`, `--primary-light: #eff4ff`, `--primary-dark: #3c1989`, `--accent: #9333ea`, etc.).
  - Tipografías modernas importadas desde Google Fonts (`Manrope` para títulos y jerarquías; `Work Sans` para textos de lectura).
  - Sombras suaves (`--shadow-sm`, `--shadow-md`, `--shadow-lg`) y radios de borde estandarizados (`--radius-md`, `--radius-lg`, `--radius-full`).
- **Técnicas de Maquetación Avanzadas:**
  - **CSS Grid:** Grillas adaptables para portafolios de productos (`grid-template-columns`), formularios y estructuras de tarjetas.
  - **Flexbox:** Distribución y alineación de barras de navegación, botones, grupos de inputs y pies de página.
  - **Efectos Visuales:** Transiciones suaves (`transition`), efectos *hover* con elevación (`transform: translateY(-4px)`), modales superpuestos con desenfoque de fondo (`backdrop-filter: blur(4px)`).

### 3. Diseño Responsive (Adaptabilidad Multi-Dispositivo)
Uso de **Media Queries (`@media`)** para garantizar una experiencia de usuario óptima en cualquier resolución:
- **📱 Móvil (< 640px):** Menú desplegable adaptado, cuadrículas a 1 sola columna (`grid-template-columns: 1fr`) para lectura vertical cómoda y áreas táctiles optimizadas.
- **📱 Tablet (640px – 1023px):** Grillas de catálogo y productos organizadas a 2 columnas (`repeat(2, 1fr)`) y formularios distribuidos en dos columnas.
- **💻 Desktop (≥ 1024px):** Menú de navegación horizontal completo visible, distribución en 4 columnas para productos (`repeat(4, 1fr)`), paneles laterales y layouts en doble columna para simuladores y formularios.

### 4. Navegación y Enlaces Interconectados
- Barra de navegación consistente en todas las vistas con indicador de página activa (`active`).
- Enlaces con parámetros de consulta (**Query Parameters**) como `simulador.html?productId=educativo` para interconectar el portafolio y el simulador de manera fluida.
- Pie de página institucional con enlaces legales y modales de información reglamentaria (Superintendencia Financiera de Colombia).

---

## 🚀 Instrucciones de Visualización y Ejecución

### Opción 1: Abrir Directamente en el Navegador
1. Descarga o clona la carpeta del proyecto.
2. Abre el archivo `index.html` haciendo doble clic o arrastrándolo a cualquier navegador web (Google Chrome, Mozilla Firefox, Microsoft Edge, Safari).

### Opción 2: Utilizando Live Server (Visual Studio Code)
1. Abre la carpeta del proyecto en **Visual Studio Code**.
2. Asegúrate de tener instalada la extensión **Live Server**.
3. Haz clic derecho sobre `index.html` y selecciona **"Open with Live Server"**.

---

## 📄 Información del Proyecto
- **Proyecto:** Portal Web de Créditos y Simulación Financiera - Banco Amigo
- **Materia / Asignatura:** Ingeniería Web (Semestre 7)
- **Institución:** IU Digital de Antioquia
- **Tecnologías:** HTML5 Semántico, CSS3 Puro (Variables, Grid, Flexbox, Media Queries)
