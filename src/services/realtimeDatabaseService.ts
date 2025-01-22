import { db } from "../firebaseConfig";
import { ref, push, get, onValue, off, child } from "firebase/database";
import { auth } from "../firebaseConfig";

// Función para agregar un nuevo anime
export const addAnime = async (title: string, status: string) => {
    try {
        const animesRef = ref(db, "animes");
        await push(animesRef, {
            Title: title,
            Status: status
        });
        console.log("Anime agregado correctamente");
    } catch (error) {
        console.error("Error al agregar anime:", error);
    }
};

// Función para obtener todos los animes
export const getAnimes = async () => {
    try {
        // Verificar si el usuario está autenticado
        if (!auth.currentUser) {
            console.log("Usuario no autenticado");
            return null;
        }

        const snapshot = await get(child(ref(db), "animes"));
        if (snapshot.exists()) {
            return snapshot.val();
        } else {
            console.log("No hay datos disponibles.");
            return null;
        }
    } catch (error) {
        console.error("Error al obtener los animes:", error);
        return null;
    }
};
// Función para escuchar cambios en la colección "animes"
export const listenToAnimes = (callback: (animes: Record<string, any> | null) => void) => {
    const animesRef = ref(db, "animes");
    const unsubscribe = onValue(animesRef, (snapshot) => {
        if (snapshot.exists()) {
            callback(snapshot.val());
        } else {
            callback(null);
        }
    });

    // Devuelve una función para cancelar la suscripción
    return () => off(animesRef, "value", unsubscribe);
};