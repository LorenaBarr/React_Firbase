import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebaseConfig";
import { useNavigate } from "react-router-dom";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/dashboard");  // Redirigir al dashboard después de iniciar sesión
    } catch (err: unknown) {
      if (err instanceof Error) {
        console.error("Error de inicio de sesión:", err.message);
      } else {
        console.error("Error desconocido");
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-dark text-light">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg max-w-sm w-full">
        <h2 className="text-2xl font-bold mb-6 text-center text-primary">Iniciar sesión</h2>
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Correo electrónico"
            className="w-full p-3 mb-4 rounded bg-gray-700 text-light focus:outline-primary"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Contraseña"
            className="w-full p-3 mb-4 rounded bg-gray-700 text-light focus:outline-primary"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="submit"
            className="w-full bg-primary hover:bg-accent text-white p-3 rounded font-semibold transition"
          >
            Ingresar
          </button>
        </form>
        <p className="mt-4 text-center text-sm">
          ¿No tienes cuenta?{" "}
          <a href="/register" className="text-primary hover:underline">
            Regístrate
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
