'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import Cookies from 'js-cookie'; // We'll need to install this package

interface AuthContextType {
  isLoggedIn: boolean;
  login: () => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check for the auth cookie on initial load
    const token = Cookies.get('auth_token');
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  const loginUser = () => {
    setIsLoggedIn(true);
    // The server action will set the cookie, this just updates client state
  };

  const logoutUser = () => {
    setIsLoggedIn(false);
    Cookies.remove('auth_token'); // Ensure client-side cookie is removed
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login: loginUser, logout: logoutUser }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}