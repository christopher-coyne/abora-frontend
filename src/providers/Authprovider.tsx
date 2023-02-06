import { createContext, useState } from 'react';

// user, isloggingin, login, checkaccess, logout

type User = {
  name: string;
  email: string;
};

interface AuthContextProps {
  isAuthenticated: boolean;
  login: () => void;
  logout: () => void;
  user: User | null;
  checkAccess: () => boolean;
}

export const AuthContext = createContext<AuthContextProps>({
  isAuthenticated: false,
  login: () => null,
  logout: () => null,
  user: null,
  checkAccess: () => true,
});

type authProps = {
  children: JSX.Element;
};

export const AuthProvider = ({ children }: authProps) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<User | null>(null);

  const login = () => {
    setIsAuthenticated(true);
    setUser({ name: 'chris coyne', email: 'christcoyne@gmail.com' });
  };

  const logout = () => {
    setIsAuthenticated(false);
  };

  const checkAccess = () => {
    return true;
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout, user, checkAccess }}>
      {children}
    </AuthContext.Provider>
  );
};
