import React from 'react';

interface LoginProps {
  onLoginSuccess: (token: string) => void;
}

// Fíjate en la llave de apertura aquí.
const Login: React.FC<LoginProps> = ({ onLoginSuccess }) => {
  const handleLogin = () => {
    // ... tu lógica de login aquí ...
    onLoginSuccess('some-token');
  };

  return (
    <div style={{ border: '2px dashed red', padding: '1rem' }}>
      <h2>Soy el Microfrontend de Login</h2>
      <button onClick={handleLogin}>Iniciar Sesión</button>
    </div>
  );
  // ¡Asegúrate de que esta llave de cierre esté presente!
};

export default Login;
