import React from 'react';

const Users = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold text-pink-500">Usuarios</h1>
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Nombre
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Correo
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          <tr>
            <td className="px-6 py-4 whitespace-nowrap">
              <div className="text-sm text-gray-900">Usuario 1</div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              <div className="text-sm text-gray-900">usuario1@example.com</div>
            </td>
          </tr>
          <tr>
            <td className="px-6 py-4 whitespace-nowrap">
              <div className="text-sm text-gray-900">Usuario 2</div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              <div className="text-sm text-gray-900">usuario2@example.com</div>
            </td>
          </tr>
          {/* Añade más usuarios aquí */}
        </tbody>
      </table>
    </div>
  );
};

export default Users;