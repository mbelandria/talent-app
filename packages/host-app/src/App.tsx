import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Header } from './Header';
import GuestRoute from './GuestRoute';

// Lazy load the remote component
const LoginPage = React.lazy(() => import('mfeAuth/Login'));

const App = () => {
  return (
    <div style={{ fontFamily: 'sans-serif' }}>
      <Header />
      <h2>Page Content:</h2>
      <Suspense fallback={<div>Loading page...</div>}>
        <Routes>
          <Route path="/" element={<div>This is the Home Page.</div>} />
          <Route element={<GuestRoute />}>
            <Route path="/login" element={<LoginPage />} />
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
