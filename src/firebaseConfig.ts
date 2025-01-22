// Importamos los módulos necesarios de Firebase
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database"; // Importamos Realtime Database

// Tu configuración de Firebase
const firebaseConfig = {
    apiKey: "AIzaSyCu_mGMWSyU_tHf54iPXQlWEPvLm8uJYIA",
    authDomain: "animan-ecfce.firebaseapp.com",
    databaseURL: "https://animan-ecfce-default-rtdb.firebaseio.com", 
    projectId: "animan-ecfce",
    storageBucket: "animan-ecfce.firebasestorage.app",
    messagingSenderId: "43759747486",
    appId: "1:43759747486:web:f2838e68bbc368f265d68f"
};

// Inicializamos Firebase
const app = initializeApp(firebaseConfig);

// Exportamos los servicios necesarios
export const auth = getAuth(app);  // Para la autenticación
export const db = getDatabase(app); // Para Realtime Database
