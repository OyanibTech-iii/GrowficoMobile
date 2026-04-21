import React, { createContext, useState, useContext, ReactNode } from 'react';
import { useDispatch } from 'react-redux';
import { LOGIN_RESET } from '../App/actions';

export const AuthContext = createContext<any>(null);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const dispatch = useDispatch();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState<any>(null); 
  const [isProcessing, setIsProcessing] = useState(false);
  const [isReleasing, setIsReleasing] = useState(false);

  const login = (userData: any) => {
    setUser(userData);
    setIsLoggedIn(true);
  };

  const logout = () => {
    setIsReleasing(true);
    dispatch({ type: LOGIN_RESET });

    setTimeout(() => {
      setUser(null);
      setIsLoggedIn(false);
      setIsReleasing(false);
    }, 1500); 
  };

  const resetLogin = () => {
      // Logic for resetLogin if needed, or it might be coming from actions
  };

  return (
    <AuthContext.Provider 
      value={{
        isLoggedIn, 
        user, 
        login, 
        logout,
        isProcessing, 
        setIsProcessing,
        isReleasing, 
        setIsReleasing,
        resetLogin
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};