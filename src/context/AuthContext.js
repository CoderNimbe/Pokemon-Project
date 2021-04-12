import { createContext, useState } from 'react';

const AuthContext = createContext();

const AuthState = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState('');

  return (
    <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated, error, setError }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthState as default, AuthContext };
