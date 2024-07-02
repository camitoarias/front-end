"use client";
import axios from 'axios';
import { Rethink_Sans } from 'next/font/google';
import { redirect } from 'next/navigation';



export async function validation_signin(prevState: any,formData: FormData) {
  console.log("Hello From Register User Action");

  // Función para extraer los campos del formulario
  function login() {
    console.log("Iniciando con el post");
    const fields = {
      username: formData.get("identifier"),
      password: formData.get("password"),
    };
    console.log(fields);
    return fields;
  }

  // Función para realizar el POST
  async function sendPost(fields: any) {
    try {
      const response = await axios.post("http://localhost:8080/test/find", fields);
      return response;
    } catch (error) {
      console.error("Error en el POST:", error);
      return null;
    }
  }

  // Obtener los campos del formulario
  const fields = login();

  // Realizar el POST y esperar la respuesta
  const response = await sendPost(fields);

  // Verificar si la respuesta es 200 OK y redirigir
  if (response && response.status === 200) {
    redirect("/pages");
  }

  // Retornar el estado actualizado
  return {
    ...prevState,
    data: "ok",
  };


  }

