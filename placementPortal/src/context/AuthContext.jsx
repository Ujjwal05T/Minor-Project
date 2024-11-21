import React, { createContext, useState, useContext } from 'react';
import {jwtDecode} from 'jwt-decode';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [token, setToken] = useState(null);
  const [role, setRole] = useState(null);

  const login = (token) => {
    setIsAuthenticated(true);
    setToken(token);
    const decodedToken = jwtDecode(token);
    setRole(decodedToken.authorities[0])
  };

  const logout = () => {
    setIsAuthenticated(false);
    setToken(null);
    setRole(null);
    alert('Logged out successfully');
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, token, role, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};