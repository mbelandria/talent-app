import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { useAuthStore } from 'common-state/store';

// Lazy load the MFE component
const LoginPage = React.lazy(() => import('mfeAuth/Login'));

const Header = () => {
  const { user, setUser } = useAuthStore();

  return (
    <header
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        padding: '1rem',
        backgroundColor: '#f0f0f0',
        alignItems: 'center',
      }}
    >
      <h1>Host Application</h1>
      <nav>
        {user ? (
          <>
            <span>Welcome, {user.name}!</span>
            <button
              onClick={() => setUser(null)}
              style={{ marginLeft: '1rem' }}
            >
              Logout
            </button>
          </>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </nav>
    </header>
  );
};

const HomePage = () => <h2>Home Page - Public Content</h2>;

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <main style={{ padding: '1rem' }}>
        <React.Suspense fallback="Loading component...">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
          </Routes>
        </React.Suspense>
      </main>
    </BrowserRouter>
  );
};

export default App;
