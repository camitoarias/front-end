import Image from "next/image";
import CredentialsSignInPage from "./Featured/Aditional_Components/Signin_Estructure";

// src/App.tsx
import React from 'react';
import { AuthProvider } from "./Context/Auth-context";
import SignInPage from "./Featured/Aditional_Components/Signin_Estructure";
 "./Featured/Aditional_Components/Signin_Estructure";

const App: React.FC = () => {
  return (
    <AuthProvider>
      <SignInPage />
    </AuthProvider>
  );
};

export default App;

