import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Configuración de Firebase obtenida de las variables de entorno de Vite.
// Se usa import.meta.env con el prefijo VITE_ para no exponer claves fijas en el código fuente.
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

// Validación preventiva explicada en clase para alertar si el .env no fue cargado correctamente
if (!firebaseConfig.apiKey) {
  console.error(
    'ADVERTENCIA: No se encontraron las variables de Firebase en .env. Detén el servidor con Ctrl+C y vuelve a ejecutar npm run dev.'
  );
}

// Inicialización de la aplicación Firebase
const app = initializeApp(firebaseConfig);

// Exportación de la instancia de la base de datos Firestore (db)
export const db = getFirestore(app);
export default app;
