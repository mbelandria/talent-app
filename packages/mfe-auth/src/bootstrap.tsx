import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Login';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

// Para desarrollo independiente, renderizamos el componente Login directamente
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Login />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
