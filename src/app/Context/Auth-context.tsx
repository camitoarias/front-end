'use client';
import React, { createContext, useState, useContext, ReactNode } from 'react';

interface AuthContextType {
  isAuthenticated: boolean;
  login: (username: string, password: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  const login = async (username: string, password: string) => {
    try {
      const response = await fetch('http://localhost:9090/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        console.log("hola me he autenticado correctamente");
        const { token } = await response.json();
        console.log(token);
        setIsAuthenticated(true);
        localStorage.setItem('token', token); // Guarda el token en localStorage si es necesario
      } else {
        alert('Credenciales incorrectas');
      }
    } catch (error) {
      console.error('Error en el login', error);
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Hook personalizado para usar el contexto de autenticación
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    console.error('useAuth debe ser usado dentro de un AuthProvider');
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};