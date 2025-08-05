import React, { Suspense, useState } from 'react';
import './App.css';

// El import dinámico no cambia
const RemoteLogin = React.lazy(() => import('mfeAuth/Login'));

function App() {
  // 1. Creamos un estado para almacenar el token
  const [authToken, setAuthToken] = useState<string | null>(null);

  // 2. Esta es la función que pasaremos como callback al MFE
  const handleLoginSuccess = (token: string) => {
    console.log('Host App: ¡Token recibido!', token);
    setAuthToken(token);
  };

  return (
    <div>
      <h1>Host Application</h1>
      <hr />

      {/* 3. Renderizado condicional */}
      {authToken ? (
        <div>
          <h2>¡Login Exitoso!</h2>
          <p>
            Token de autenticación: <strong>{authToken}</strong>
          </p>
        </div>
      ) : (
        <Suspense fallback={<div>Loading Login Component...</div>}>
          <RemoteLogin onLoginSuccess={handleLoginSuccess} />
        </Suspense>
      )}
    </div>
  );
}

export default App;
