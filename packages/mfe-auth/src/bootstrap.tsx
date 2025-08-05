import React from 'react';
import ReactDOM from 'react-dom/client';
import Login from './Login';

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <Login
    onLoginSuccess={(token) =>
      console.log(`Login standalone recibió token: ${token}`)
    }
  />,
);
