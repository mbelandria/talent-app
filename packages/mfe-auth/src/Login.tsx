import React, { useState } from 'react';
import { useAuthStore } from 'common-state/store';
import { User } from 'common-types';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const setUser = useAuthStore((state) => state.setUser);
  const navigate = useNavigate();
  const [email, setEmail] = useState('monica@example.com');
  const [password, setPassword] = useState('V3neXuela*2025');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // En una app real, validarías las credenciales contra un servidor
    if (email && password) {
      const mockUser: User = {
        id: '123',
        email: email,
        name: 'Monica',
      };
      setUser(mockUser);
      // Navegamos de vuelta al home después del login
      navigate('/');
    }
  };

  return (
    <div>
      <h2>Login Page (from MFE-Auth)</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label>Email: </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div style={{ marginTop: '0.5rem' }}>
          <label>Password: </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" style={{ marginTop: '1rem' }}>
          Log In
        </button>
      </form>
    </div>
  );
};

export default Login;
