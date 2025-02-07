import React, { useEffect, useState } from "react";
import { listenToAnimes } from "../services/realtimeDatabaseService";
import { useAuth } from "../contexts/AuthContext";
interface Anime {
  Title: string;
  Status: string;
}
interface AnimeWithId extends Anime {
  id: string;
}
const AnimeList: React.FC = () => {
  const [animes, setAnimes] = useState<AnimeWithId[]>([]);
  const { user } = useAuth();
  useEffect(() => {
    if (!user) return;
    const unsubscribe = listenToAnimes((fetchedAnimes) => {
      if (fetchedAnimes) {
        const animeArray = Object.entries(fetchedAnimes).map(([id, data]) => ({
          id,
          ...(data as Anime),
        }));
        setAnimes(animeArray);
      } else {
        setAnimes([]);
      }
    });
    // Cancela la suscripción al desmontar el componente
    return () => unsubscribe();
  }, [user]);
  return (
 <div className="bg-gray-800 p-4 rounded-lg">
      <h2 className="text-2xl font-bold text-primary mb-4">Lista de Animes/Mangas</h2>
      <ul className="space-y-2">
        {animes.length > 0 ? (
          animes.map((anime) => (
            <li
              key={anime.id}
              className="p-3 bg-gray-700 text-light rounded flex justify-between items-center"
            >
              <span className="font-semibold">{anime.Title}</span>
              <span className="text-accent">{anime.Status}</span>
            </li>
          ))
        ) : (
          <p className="text-gray-500">No hay animes registrados aún.</p>
        )}
      </ul>
    </div>
  );
};
export default AnimeList;
