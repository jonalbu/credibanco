# CreditSmart - Banco Amigo | Integración con Backend Firebase

[![React](https://img.shields.io/badge/React-19-blue.svg)](https://react.dev/)
[![Firebase](https://img.shields.io/badge/Firebase-12.19.0-orange.svg)](https://firebase.google.com/)
[![Firestore](https://img.shields.io/badge/Firestore-NoSQL-yellow.svg)](https://firebase.google.com/docs/firestore)
[![React Router](https://img.shields.io/badge/React_Router-7-red.svg)](https://reactrouter.com/)
[![Vite](https://img.shields.io/badge/Vite-8-purple.svg)](https://vite.dev/)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow.svg)](https://developer.mozilla.org/)

Proyecto desarrollado para el curso **Ingeniería Web** de la **Institución Universitaria Digital de Antioquia (IU Digital)**.  
**Actividad S40 - EA3:** Integración de la aplicación web React con el backend de base de datos en la nube Google Cloud Firestore (Firebase).

---

## Información del Estudiante y Curso

* **Estudiante:** Jonathan Alvarez Bustamante
* **Programa:** Ingeniería de Software / Sistemas
* **Institución:** IU Digital de Antioquia
* **Curso:** Ingeniería Web (7° Semestre)
* **Docente:** Jorge Armando Julio Cruz

---

## Descripción del Proyecto

**CreditSmart** es una Single Page Application (SPA) financiera para Banco Amigo que evoluciona de un estado en memoria a una plataforma conectada en tiempo real a una base de datos documental no relacional en la nube (**Google Cloud Firestore**).

La plataforma permite explorar líneas de crédito almacenadas en la nube, proyectar cuotas mediante el Sistema Francés de Amortización, radicar solicitudes formales persistidas de inmediato en Firestore y consultar las radicaciones mediante filtros en tiempo real y consultas compuestas (`where` y `orderBy`).

---

## Operaciones con Firestore (Criterios de Evaluación)

En cumplimiento estricto de la rúbrica de evaluación (100 puntos), se implementaron las siguientes operaciones backend:

### 1. Configuración y Conexión de Firebase (20 Puntos)
* **Base de datos Firestore:** Creada en la consola de Firebase en modo de prueba (`test mode`) bajo el proyecto `creditsmart-banco-amigo`.
* **Inicialización Centralizada:** Configuración modularizada en `src/firebase/config.js` que exporta la instancia `db` (`getFirestore(app)`).
* **Variables de Entorno:** Credenciales parametrizadas mediante variables de entorno de Vite con el prefijo obligatorio `VITE_`.
* **Plantilla de Entorno:** Archivo `.env.example` en la raíz del repositorio con los placeholders institucionales.

### 2. Operación de Lectura — READ (15 Puntos)
* **Implementación:** Función `obtenerCreditos()` en `src/services/creditosService.js` utilizando `getDocs()`.
* **Mapeo con Document ID:** Cada crédito mapea explícitamente el identificador nativo de Firestore (`{ id: doc.id, ...doc.data() }`) para su uso como `key` en React.
* **Estados Visuales:** Manejo reactivo de estado de carga (`cargando`) con mensajes amigables y captura de excepciones con `try/catch`.
* **Sembrado Interactivo:** Si la colección está vacía al conectar, se provee un botón para inicializar la base de datos con los créditos base mediante `sembrarCreditosIniciales()`.

### 3. Operación de Creación — CREATE (20 Puntos)
* **Formulario Controlado:** Pantalla `Solicitar.jsx` que captura la información del titular, contacto, monto y plazo.
* **Validación en Cliente:** Validación previa al envío (cédula numérica, email válido, nombre completo y rangos permitidos) mediante `validaciones.js`.
* **Persistencia con `addDoc()`:** La función `crearSolicitud()` registra el documento en la colección `solicitudes` con estado `"Pendiente"` y fecha ISO.
* **Limpieza y Confirmación:** El formulario se restablece a su estado inicial tras el registro exitoso y se muestra la pantalla de confirmación (`SolicitudExito.jsx`) resaltando el **ID único generado por Firestore** (`docRef.id`).

### 4. Consultas y Filtros Compuestos (15 Puntos)
* **Página "Mis Solicitudes" (`/mis-solicitudes`):** Vista dedicada para el seguimiento y auditoría de créditos radicados.
* **Consulta Compuesta:** Búsqueda por correo electrónico combinando `query()`, `where("email", "==", ...)` y `orderBy("fechaCreacion", "desc")`.
* **Soporte de Índices:** Manejo preparado para índices compuestos en Firestore y fallback reactivo.
* **Visualización:** Tarjetas detalladas (`SolicitudCard.jsx`) con el ID de Firestore, radicado interno, cuota estimada y estado.

### 5. Manejo de Errores y Experiencia de Usuario (10 Puntos)
* Bloques `try/catch` con propagación de errores controlada en la capa de servicios.
* Indicadores visuales durante llamadas asíncronas (deshabilitación de botones y textos informativos).
* Mensajes de alerta claros con botón de "Reintentar" en caso de pérdida de conexión.

### 6. Seguridad y Variables de Entorno (10 Puntos)
* Implementación de archivo `.env` para desarrollo local y `.env.example` para documentación.
* Ninguna clave de Firebase está expuesta de manera fija o quemada en el código fuente.

---

## Arquitectura del Software

El código se organiza bajo el principio de separación de responsabilidades y modularidad estricta (ningún archivo supera las 120 líneas de código):

```text
Proyecto_Credit/
├── public/                     # Archivos estáticos y multimedia
│   └── img/                    # Imágenes institucionales
├── src/
│   ├── firebase/
│   │   └── config.js           # Inicialización de Firebase App y exportación de db
│   ├── services/               # Capa de servicios desacoplada de la UI
│   │   ├── creditosService.js  # Métodos getDocs() y sembrado de créditos
│   │   └── solicitudesService.js # Métodos addDoc() y query() con where() y orderBy()
│   ├── components/             # Componentes modulares reutilizables (< 120 líneas)
│   │   ├── CreditCard.jsx      # Tarjeta individual de crédito
│   │   ├── CatalogoToolbar.jsx # Filtros y ordenamiento del catálogo
│   │   ├── CatalogoSembrado.jsx# Botón de inicialización para Firestore vacío
│   │   ├── SolicitudCard.jsx   # Tarjeta de solicitud con ID de Firestore
│   │   ├── MisSolicitudesBuscador.jsx # Barra de búsqueda por email
│   │   ├── SolicitudFormulario.jsx    # Formulario controlado de solicitud
│   │   ├── SolicitudResumen.jsx       # Resumen lateral de amortización
│   │   ├── SolicitudExito.jsx         # Confirmación con ID de documento
│   │   ├── SolicitarHero.jsx          # Encabezado modular de solicitud
│   │   ├── SimuladorControles.jsx
│   │   ├── SimuladorSliders.jsx
│   │   ├── SimuladorResumen.jsx
│   │   ├── Navbar.jsx          # Navegación global responsive
│   │   └── Footer.jsx          # Pie institucional y modales legales
│   ├── pages/                  # Vistas principales de rutas
│   │   ├── Home.jsx            # Página de inicio institucional
│   │   ├── Catalogo.jsx        # Catálogo sincronizado con Firestore
│   │   ├── Simulador.jsx       # Simulador interactivo en tiempo real
│   │   ├── Solicitar.jsx       # Radicación digital conectada a addDoc()
│   │   ├── MisSolicitudes.jsx  # Consulta con where() y orderBy()
│   │   └── PaginaNoEncontrada.jsx # Manejo de error 404
│   ├── utils/                  # Lógica pura reutilizable
│   │   ├── calculos.js         # Fórmula francesa de cuota fija
│   │   ├── formatos.js         # Formateo de moneda (COP)
│   │   └── validaciones.js     # Validaciones de campos de formulario
│   ├── data/
│   │   └── creditsData.js      # Datos base para sembrado inicial en Firestore
│   ├── App.jsx                 # Configuración de rutas con React Router
│   ├── main.jsx                # Montaje de la aplicación React
│   └── index.css               # Variables de diseño y reseteo global
├── .env                        # Variables de entorno con credenciales activas
├── .env.example                # Plantilla de variables de entorno
├── package.json
└── README.md
```

---

## ⚙️ Variables de Entorno

El proyecto requiere las siguientes variables en el archivo `.env`:

```env
VITE_FIREBASE_API_KEY=AIzaSy...
VITE_FIREBASE_AUTH_DOMAIN=creditsmart-banco-amigo.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=creditsmart-banco-amigo
VITE_FIREBASE_STORAGE_BUCKET=creditsmart-banco-amigo.firebasestorage.app
VITE_FIREBASE_MESSAGING_SENDER_ID=279154584119
VITE_FIREBASE_APP_ID=1:279154584119:web:ddeb1748a77ccd4c41edb2
```

> **Nota para la evaluación:** Siguiendo las directrices del docente en la sesión sincrónica de la Semana 7, el archivo `.env` se mantiene configurado con las credenciales de prueba activas para que el evaluador pueda ejecutar la aplicación y comprobar la base de datos sin requerir configuraciones adicionales.

---

## Instrucciones de Instalación y Ejecución Local

### Prerrequisitos
* [Node.js](https://nodejs.org/) (versión 18 o superior).
* Conexión a internet activa para sincronizar con Firestore.

### Pasos

1. **Clonar el repositorio:**
   ```bash
   git clone https://github.com/jonalbu/credibanco.git
   cd credibanco
   ```

2. **Instalar dependencias:**
   ```bash
   npm install
   ```

3. **Verificar variables de entorno:**
   Asegurarse de que el archivo `.env` contenga las claves de Firebase (ver `.env.example`).

4. **Iniciar el servidor de desarrollo:**
   ```bash
   npm run dev
   ```
   Abrir en el navegador: `http://localhost:5173`.

5. **Construir para producción (verificación de build):**
   ```bash
   npm run build
   ```



---
