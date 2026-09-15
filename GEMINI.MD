# Proyecto Creditos Banco Amigo Usando Html, CSS y React

Proyecto del curso Ingeniería Web, IU Digital de Antioquia.
Actividad EA2: transformar el diseño estático de Banco Amigo en una app React interactiva.


## Restricciones de stack

Usar únicamente:
- React con JavaScript, no uses TypeScript para trabajar 
- CSS plano en archivos .css normales
- Vite (ya está configurado, no lo cambies)
- react-router-dom para la navegación

Está PROHIBIDO instalar o usar:
- Tailwind,Bootstrap, styled-components, Material UI, o cualquier librería de estilos
- Redux, Zustand, Jotai o cualquier gesto de estado externo
- Axios, TanStack Query, SWR
- TypeScript 
- Cualquier dependencia que no sea react, react-dom y react-router-dom


Si crees que algo se resuelve mejor con una librería, no la instales. Resuelvelo con JavaScript y react puros y deja un comentario explicando qué librería usaríaas en un proyecto real y por qué.

## Restricciones de React

Usa solamente estos hooks: useState y useEffect.

NO uses: useReducer, useContext, useMemo, useCallback, useRef, custom hooks,
React.memo, forwardRef, lazy, Suspense, portales, HOCs, render props.

Los estudiantes no han visto nada de eso. Si un patrón avanzado haría el código más
limpio, escribe la versión simple y agrega un comentario de una línea diciendo qué
se usaría en producción.

Componentes funcionales siempre. Nunca componentes de clase.
Props siempre desestructuradas en el parámetro: `function CreditCard({ nombre, tasa })`.
Un componente por archivo. `export default` al final.

## Estilo de código

Nombres de variables, funciones, componentes y archivos en español, salvo las palabras
propias de React y JavaScript. Ejemplo: `productosFiltrados`, `manejarEnvio`, `CreditCard`.

Comentarios en español. Los comentarios explican el POR QUÉ, no el qué.

Mal:
```js
// Filtra los productos
const filtrados = productos.filter(...)
```

Bien:
```js
// Este valor NO va en useState: se recalcula solo en cada renderizado.
// Guardarlo en estado duplicaría los datos y se desincronizarían.
const filtrados = productos.filter(...)
```

Nada de encadenamientos largos en una sola línea. Si una expresión tiene más de dos
operaciones, pártela en variables intermedias con nombre.

Nada de operadores ternarios anidados. Nada de abreviaturas crípticas.


## Estructura de carpetas obligatoria

```
src/
├── components/     componentes reutilizables (Navbar, CreditCard, Footer)
├── pages/          una página por ruta (Home, Catalogo, Simulador, Solicitar)
├── data/           creditsData.js
├── utils/          funciones auxiliares (formato de moneda, cálculo de cuota)
├── App.jsx
├── main.jsx
└── index.css
```

## Referencias de diseño

Los mockups están en `docs/mockups/` como PNG. Léelos antes de escribir estilos y
respeta la disposición, la jerarquía visual y la paleta que muestran.

Si existe `docs/referencia-html/`, es HTML exportado de una herramienta de diseño.
Úsalo SOLO como referencia visual. No copies su estructura ni sus clases: tiene datos
quemados y organización que no sirve para React.

## Forma de trabajar

Trabaja por fases. Al terminar cada fase:
1. Detente y no sigas a la siguiente sin que te lo pida
2. Resume en máximo cinco líneas qué archivos tocaste y qué concepto de React aparece ahí
3. Propón un mensaje de commit en español, en imperativo, de una sola línea

Nunca hagas commits tú mismo. El docente los hace a mano frente a la clase.

Si un archivo va a pasar de 120 líneas, avísame antes de escribirlo y propón cómo partirlo.

Antes de escribir código nuevo, si hay una decisión con más de una salida razonable,
pregunta en vez de asumir.