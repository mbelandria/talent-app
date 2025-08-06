import React, { Suspense } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { useAuthStore } from 'common-state/store';

// Lazy load the remote component
const LoginPage = React.lazy(() => import('mfeAuth/Login'));

const App = () => {
  const user = useAuthStore((state) => state.user);
  const logout = useAuthStore((state) => state.logout);

  return (
    <div style={{ fontFamily: 'sans-serif' }}>
      <h1>Host Application</h1>
      <nav style={{ marginBottom: '1rem' }}>
        <Link to="/">Home</Link>
        {!user && <span style={{ margin: '0 0.5rem' }}>|</span>}
        {!user && <Link to="/login">Login</Link>}
      </nav>
      <hr />
      <div style={{ margin: '1rem 0' }}>
        {user ? (
          <div>
            <p>
              Welcome, <strong>{user.name}</strong>! You are logged in.
            </p>
            <button onClick={logout}>Logout</button>
          </div>
        ) : (
          <p>You are not logged in. Please click the Login link.</p>
        )}
      </div>
      <hr />
      <h2>Page Content:</h2>
      <Suspense fallback={<div>Loading page...</div>}>
        <Routes>
          <Route path="/" element={<div>This is the Home Page.</div>} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
