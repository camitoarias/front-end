// src/components/SignInPage.tsx
'use client'
import React, { useState,useEffect } from 'react';
import { useAuth } from '@/app/Context/Auth-context';
import { Container, Typography, TextField, Button, Box, CssBaseline } from '@mui/material';

const SignInPage: React.FC = () => {
  const { login } = useAuth();
  const {isAuthenticated} = useAuth();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event: React.FormEvent) => {  // Asegúrate de que handleSubmit sea async
    event.preventDefault();
    await login(username, password); // Aquí utilizamos await correctamente
    // Aquí podrías manejar una redirección o alguna lógica adicional después del login.
    console.log(isAuthenticated);
  };


  useEffect(() => {
    if (isAuthenticated) {
      console.log('User is authenticated!');
      // Aquí puedes agregar lógica como redirigir al usuario o mostrar un mensaje
    }
  }, [isAuthenticated]);

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          mt: 8,
          p: 3,
          borderRadius: 1,
          boxShadow: 3,
          bgcolor: 'background.paper',
        }}
      >
        <Typography component="h1" variant="h5">
          Sign In
        </Typography>
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{ mt: 1 }}
        >
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="username"
            label="Username"
            name="username"
            autoComplete="username"
            autoFocus
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default SignInPage;

