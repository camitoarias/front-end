import React from 'react';

const Navbar = ({ setPage }: { setPage: (page: string) => void }) => {
  return (
    <nav className="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-2xl">
          Chatbot ISA
        </div>
        <div className="space-x-4">
          <button
            onClick={() => setPage('messages')}
            className="text-white hover:text-gray-200 transition duration-300 ease-in-out transform hover:scale-105"
          >
            Envío de Mensajes
          </button>
          <button
            onClick={() => setPage('users')}
            className="text-white hover:text-gray-200 transition duration-300 ease-in-out transform hover:scale-105"
          >
            Usuarios
          </button>
          <button
            onClick={() => setPage('settings')}
            className="text-white hover:text-gray-200 transition duration-300 ease-in-out transform hover:scale-105"
          >
            Configuraciones
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;





