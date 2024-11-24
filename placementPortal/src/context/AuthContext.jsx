import React, { createContext, useState, useContext ,useEffect} from 'react';
import {jwtDecode} from 'jwt-decode';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [token, setToken] = useState(null);
  const [role, setRole] = useState(null);

  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    const storedRole = localStorage.getItem('role');
    if (storedToken) {
      setIsAuthenticated(true);
      setToken(storedToken);
      setRole(storedRole);
    }
  }, []);

  const login = (token) => {
    setIsAuthenticated(true);
    setToken(token);
    const decodedToken = jwtDecode(token);
    localStorage.setItem('token', token);
    setRole(decodedToken.authorities[0])
    localStorage.setItem('role',decodedToken.authorities[0])
  };

  const logout = () => {
    setIsAuthenticated(false);
    setToken(null);
    setRole(null);
    localStorage.removeItem('token');
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