import { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  const login = (userData) => {
    setUser(userData);
    setIsLoggedIn(true);
  };

  const logout = () => {
    setUser(null);
    setIsLoggedIn(false);
  };

  const [isProcessing, setIsProcessing] = useState(false);

  return (
    <AuthContext.Provider value={{ isLoggedIn, user, login, logout,isProcessing, setIsProcessing }}>
      {children}
    </AuthContext.Provider>
  );
};