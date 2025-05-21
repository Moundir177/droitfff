'use client';

import { createContext, useState, useContext, useEffect, ReactNode } from 'react';
import { useRouter, usePathname } from 'next/navigation';

type AuthContextType = {
  isAuthenticated: boolean;
  login: (username: string, password: string) => Promise<boolean>;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | null>(null);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  
  useEffect(() => {
    // Check if the user is authenticated on client-side
    const checkAuth = () => {
      const auth = localStorage.getItem('adminAuth');
      setIsAuthenticated(auth === 'true');
      
      // Redirect if trying to access admin pages without auth or login page when already auth'd
      if (pathname?.startsWith('/admin') && !pathname?.includes('/admin/login')) {
        if (auth !== 'true') {
          router.push('/admin');
        }
      } else if (pathname === '/admin' && auth === 'true') {
        router.push('/admin/dashboard');
      }
    };
    
    checkAuth();
  }, [pathname, router]);

  const login = async (username: string, password: string) => {
    // In a real app, this would make an API call to authenticate
    if (username === 'admin' && password === 'admin123') {
      localStorage.setItem('adminAuth', 'true');
      setIsAuthenticated(true);
      return true;
    }
    return false;
  };

  const logout = () => {
    localStorage.removeItem('adminAuth');
    setIsAuthenticated(false);
    router.push('/admin');
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}; 