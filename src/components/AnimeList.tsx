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
    <div className="max-w-lg mx-auto p-4">
      <h2 className="text-xl font-semibold mb-4">Lista de Animes</h2>
      <ul className="space-y-2">
        {animes.length > 0 ? (
          animes.map((anime) => (
            <li
              key={anime.id}
              className="p-2 border border-gray-300 rounded flex justify-between items-center"
            >
              <div>
                <strong>{anime.Title}</strong> - {anime.Status}
              </div>
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
