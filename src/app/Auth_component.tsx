
import { ReactNode } from 'react'
import  {useAuth}  from "./Context/Auth-context";
import { redirect } from "next/navigation";


 export const AuthLayout_test = ({ children }: { children: ReactNode }) => {
  const { isAuthenticated } = useAuth(); // Asegúrate de que useAuth esté correctamente implementado
console.log("usuario"+isAuthenticated)
  if (!isAuthenticated) {
    redirect('/pages/Sigin');
    
     // Redirige si no está autenticado
    return null; // No renderiza nada mientras redirige
  }

  return (
    <p>no autenticado</p>
  );
};