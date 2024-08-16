'use client'
import Image from "next/image";
import CredentialsSignInPage from "./Featured/Aditional_Components/Signin_Estructure";

// src/App.tsx
import React, { useEffect,ReactNode} from 'react';
import { AuthProvider,useAuth } from "./Context/Auth-context";
import SignInPage from "./Featured/Aditional_Components/Signin_Estructure";
import {AuthLayout_test} from "./Auth_component";
 
 
 import Home_page from "./Home_page";

const App  = ({ children }: { children: ReactNode }) => {
 
  return (

  <SignInPage />


    
     
    
  );
};
/*
    <AuthProvider>
       <AuthLayout_test>{children}</AuthLayout_test>
       <p>intentando autenticar</p>
    </AuthProvider>


*/


export default App;

