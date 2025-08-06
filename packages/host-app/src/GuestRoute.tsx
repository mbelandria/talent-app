import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuthStore } from 'common-state/store';

const GuestRoute = () => {
  const user = useAuthStore((state) => state.user);
  // Si el usuario existe, redirige a la página principal. Si no, renderiza la ruta anidada (Login).
  return user ? <Navigate to="/" /> : <Outlet />;
};

export default GuestRoute;
