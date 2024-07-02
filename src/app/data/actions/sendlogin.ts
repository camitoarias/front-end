
import axios from 'axios';

async function loginUser() {
    try {
      const userData = {
        username: "camito",
        password: "camitoarias"
      };
  
      const response = await axios.post('http://localhost:8080/login', userData);
      console.log("intento de envio")
      console.log(response.data)
      fetchData(response.data)
    } catch (error) {
      throw new Error('Login failed');
    }
    console.log("hola")
  }

  async function fetchData(token: String) {
    try {
      const response = await axios.get('http://localhost:8080/api/protected', {
        headers: {
          Authorization: `Bearer ${token}` // Agregar el token JWT a la cabecera Authorization
        }
      });
      return response.data; // Retorna los datos de la respuesta si la solicitud fue exitosa
    } catch (error) {
      throw new Error('Failed to fetch data'); // Lanza un error si la solicitud falla
    }
  }
  
  
  
  export default loginUser;
  