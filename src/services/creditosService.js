import { collection, getDocs, addDoc } from 'firebase/firestore';
import { db } from '../firebase/config';

const COLECCION_CREDITOS = 'creditos';

// Consulta y retorna todos los créditos almacenados en la colección de Firestore.
// Se extrae doc.id y se fusiona con doc.data() porque Firestore almacena el identificador por separado.
export async function obtenerCreditos() {
  try {
    const referenciaColeccion = collection(db, COLECCION_CREDITOS);
    const instantanea = await getDocs(referenciaColeccion);

    const listaCreditos = instantanea.docs.map((documento) => ({
      id: documento.id,
      ...documento.data(),
    }));

    return listaCreditos;
  } catch (error) {
    console.error('Error al obtener los créditos de Firestore:', error);
    throw new Error('No fue posible cargar los productos de crédito desde el servidor.');
  }
}

// Función utilitaria para sembrar (cargar) la base de datos inicial de créditos una sola vez.
// Lee el listado local y crea un documento en Firestore por cada producto.
export async function sembrarCreditosIniciales(creditosLocales) {
  try {
    const referenciaColeccion = collection(db, COLECCION_CREDITOS);

    for (const credito of creditosLocales) {
      // Excluimos el id local para que Firestore asigne su propio ID único de documento
      const { id, ...datosSinId } = credito;
      await addDoc(referenciaColeccion, {
        ...datosSinId,
        idOriginal: id,
        fechaCreacion: new Date().toISOString(),
      });
    }

    return true;
  } catch (error) {
    console.error('Error al sembrar créditos en Firestore:', error);
    throw new Error('Error al inicializar la base de datos en la nube.');
  }
}
