import React, { useState } from "react";
import { addAnime } from "../services/realtimeDatabaseService";
const AddAnime: React.FC = () => {
  const [title, setTitle] = useState<string>("");
  const [status, setStatus] = useState<string>("visto");
  const handleAddAnime = async (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim()) {
      await addAnime(title, status);
      setTitle(""); 
      setStatus("visto");
    }
  };
  return (
    <div>
      <form onSubmit={handleAddAnime} className="bg-gray-800 p-4 rounded-lg">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Nombre del anime"
          className="w-full p-2 mb-4 rounded bg-gray-700 text-light"
          required
        />
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="w-full p-2 mb-4 rounded bg-gray-700 text-light"
        >
          <option value="visto">Visto</option>
          <option value="En Progreso">En progreso</option>
          <option value="Pendiente">Pendiente</option>
        </select>
        <button
          type="submit"
          className="w-full bg-primary hover:bg-accent text-white p-3 rounded font-semibold transition"
        >
          Agregar Anime
        </button>
      </form>
    </div>
  );
};
export default AddAnime;