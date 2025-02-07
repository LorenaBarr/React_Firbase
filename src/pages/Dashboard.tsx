import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import AddAnime from '../components/AddAnime';
import AnimeList from '../components/AnimeList';

const Dashboard: React.FC = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/login');
    } catch (error) {
      console.error('Error al cerrar sesión:', error);
    }
  };

  return (
    <div className="min-h-screen bg-dark text-light">
      {/* Encabezado */}
      <div className="bg-dark flex justify-between items-center p-4 shadow-md">
        <h1 className="text-primary text-2xl font-bold">AniMan</h1>
        <button
          onClick={handleLogout}
          className="bg-primary hover:bg-accent text-light font-semibold px-4 py-2 rounded"
        >
          Cerrar sesión
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <AddAnime />
        </div>
        <div>
          <AnimeList />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;