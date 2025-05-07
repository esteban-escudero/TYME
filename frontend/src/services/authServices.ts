import axios from 'axios';

const API_URL = 'http://localhost:3000/auth/login';

export async function loginUser(data: { email: string; contrasena: string }) {
  const response = await axios.post(API_URL, data);
  return response.data;
}
