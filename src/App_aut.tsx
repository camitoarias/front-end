'use client'
import { useRouter } from 'next/router';
import { useAuth } from './app/Context/Auth-context'; // Asegúrate de que la ruta sea correcta
import React, { useEffect } from 'react';

const withAuth = (WrappedComponent: React.ComponentType) => {
    return (props: any) => {
      const { isAuthenticated } = useAuth();
      const router = useRouter();
  
      useEffect(() => {
        if (!isAuthenticated) {
          router.replace('/signin'); // Ajusta la ruta si es necesario
        }
      }, [isAuthenticated, router]);
  
      if (!isAuthenticated) {
        return null;
      }
  
      return <WrappedComponent {...props} />;
    };
  };
  
  export default withAuth;