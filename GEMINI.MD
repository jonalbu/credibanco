# Proyecto Creditos Banco Amigo Usando Html, CSS y React

Proyecto del curso Ingeniería Web, IU Digital de Antioquia.
Actividad EA2: transformar el diseño estático de Banco Amigo en una app React interactiva.


## Restricciones de stack

Usar únicamente:
- Trabajar con React y JavaScript; no utilizar TypeScript.
- Emplea el CSS de muestra quese encuentra en la ruta `Tarea_1/styles.css`.
- Mantener Vite, que ya se encuentra configurado, sin realizar cambios.
- Utilizar `react-router-dom` para gestionar la navegación.
- Puedes usar Tailwind, pero no es obligatorio. Si decides usarlo, configúralo correctamente y documenta los pasos en el README.

No usar e instalar los siguientes paquetes:
- TypeScript
- Cualquier dependencia distinta de react, react-dom y react-router-dom
- De acuerdo con el 


Si consideras que una librería facilitaría alguna solución, no la instales. Implementa esa funcionalidad con JavaScript y React puros, y agrega un comentario indicando qué librería se emplearía en un proyecto real y cuál sería la razón.

## Restricciones para React

Limítate a utilizar los hooks `useState` y `useEffect`.

NO emplees: `useReducer`, `useContext`, `useMemo`, `useCallback`, `useRef`, hooks
personalizados, `React.memo`, `forwardRef`, `lazy`, `Suspense`, portales, HOCs ni
render props.

Los estudiantes todavía no conocen estas herramientas. Si una solución avanzada
permitiera simplificar el código, implementa en su lugar la alternativa básica y añade
un comentario de una línea que indique qué se usaría en un proyecto de producción.

Utiliza únicamente componentes funcionales; no crees componentes de clase.
Desestructura siempre las props en el parámetro, por ejemplo:
`function CreditCard({ nombre, tasa })`.
Cada archivo debe contener un solo componente y usar `export default` al final.

## Convenciones de código

Escribe en español los nombres de variables, funciones, componentes y archivos, excepto
los términos propios de React y JavaScript. Por ejemplo:
`productosFiltrados`, `manejarEnvio`, `CreditCard`.

Los comentarios deben estar en español y explicar la razón de una decisión, no describir
literalmente lo que hace el código.

Incorrecto:
```js
// Filtra los productos
const filtrados = productos.filter(...)
```

Correcto:
```js
// Este valor NO va en useState: se recalcula solo en cada renderizado.
// Guardarlo en estado duplicaría los datos y se desincronizarían.
const filtrados = productos.filter(...)
```

Evita las cadenas extensas en una sola línea. Cuando una expresión contenga más de dos
operaciones, divídela mediante variables intermedias con nombres descriptivos.

No utilices operadores ternarios anidados ni abreviaturas difíciles de entender.


## Estructura obligatoria de carpetas

```
src/
├── Tarea_1/        archivos de diseño (HTML, CSS, imágenes)
├── components/     componentes reutilizables (Navbar, CreditCard, Footer)
├── pages/          una página por ruta (Home, Catalogo, Simulador, Solicitar)
├── data/           creditsData.js
├── utils/          funciones auxiliares (formato de moneda, cálculo de cuota)
├── App.jsx
├── main.jsx
└── index.css
```

## Referencias visuales y diseño
Los archivos HTML, CSS e imágenes base se encuentran en la carpeta `Tarea_1/`:
- `Tarea_1/index.html` (Inicio)
- `Tarea_1/catalogo.html` (Catálogo)
- `Tarea_1/simulador.html` (Simulador)
- `Tarea_1/solicitar.html` (Solicitud)
- `Tarea_1/styles.css` (Estilos base para replicar)
Considera estos archivos como la única fuente de diseño para mantener la misma paleta de colores, distribución y jerarquía visual.



## Metodología de trabajo

Avanza por fases. Al finalizar cada una:
1. Detente y no sigas a la siguiente sin que te lo pida
2. Resume en un máximo de cinco líneas los archivos modificados y el concepto de React utilizado
3. Sugiere en una sola línea un mensaje de commit en español y en modo imperativo

No realices commits. Yo los realizaré manualmente. Solo sugiere el mensaje de commit.

Si algún archivo supera las 120 líneas, avisa antes de escribirlo y propone una forma de
dividirlo.

Antes de escribir código nuevo, si existe más de una alternativa razonable, pregunta
cuál elegir en lugar de asumir una decisión.