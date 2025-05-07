import { Box, Button, Container, TextField, Typography } from '@mui/material';
import { useState } from 'react';

export default function Login() {
  const [email, setEmail] = useState('');
  const [contrasena, setContrasena] = useState('');

  const handleLogin = () => {
    // Aquí va tu lógica de autenticación
    console.log('Iniciando sesión con:', { email, contrasena });
  };

  return (
    <Container maxWidth="sm">
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        height="100vh"
      >
        <Typography variant="h4" mb={4} color="primary" fontWeight="bold">
          Iniciar sesión
        </Typography>
        <TextField
          label="Correo"
          variant="outlined"
          fullWidth
          margin="normal"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          label="Contraseña"
          type="password"
          variant="outlined"
          fullWidth
          margin="normal"
          value={contrasena}
          onChange={(e) => setContrasena(e.target.value)}
        />
        <Button
          variant="contained"
          color="primary"
          fullWidth
          sx={{ mt: 2 }}
          onClick={handleLogin}
        >
          Ingresar
        </Button>
      </Box>
    </Container>
  );
}
