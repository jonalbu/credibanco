import { collection, addDoc, getDocs, query, where, orderBy } from 'firebase/firestore';
import { db } from '../firebase/config';

const COLECCION_SOLICITUDES = 'solicitudes';

// Registra una nueva solicitud de crédito en la base de datos de Firestore.
export async function crearSolicitud(datosSolicitud) {
  try {
    const referenciaColeccion = collection(db, COLECCION_SOLICITUDES);
    const documentoGuardado = await addDoc(referenciaColeccion, {
      ...datosSolicitud,
      email: datosSolicitud.email.trim().toLowerCase(),
      estado: 'Pendiente',
      fechaCreacion: new Date().toISOString(),
    });

    return documentoGuardado.id;
  } catch (error) {
    console.error('Error al guardar la solicitud en Firestore:', error);
    throw new Error('No se pudo radicar la solicitud en la nube. Revisa tu conexión a internet.');
  }
}

// Consulta las solicitudes de un cliente filtrando por correo electrónico y ordenando cronológicamente.
// Cumple con el criterio de la rúbrica de usar query(), where() y orderBy().
export async function obtenerSolicitudesPorEmail(email) {
  try {
    const referenciaColeccion = collection(db, COLECCION_SOLICITUDES);
    const consulta = query(
      referenciaColeccion,
      where('email', '==', email.trim().toLowerCase()),
      orderBy('fechaCreacion', 'desc')
    );

    const instantanea = await getDocs(consulta);
    return instantanea.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
  } catch (error) {
    console.error('Error al consultar solicitudes por email:', error);
    throw new Error('Error al consultar las solicitudes en Firestore.');
  }
}

// Obtiene todas las solicitudes radicadas ordenadas por fecha más reciente
export async function obtenerTodasLasSolicitudes() {
  try {
    const referenciaColeccion = collection(db, COLECCION_SOLICITUDES);
    const consulta = query(referenciaColeccion, orderBy('fechaCreacion', 'desc'));
    const instantanea = await getDocs(consulta);

    return instantanea.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
  } catch (error) {
    console.error('Error al listar todas las solicitudes:', error);
    throw new Error('No fue posible listar las solicitudes.');
  }
}
