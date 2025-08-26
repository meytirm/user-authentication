import {createContext, ReactNode, useState} from "react";

export const AuthContext = createContext<AuthContextType | null>(null);

function AuthContextProvider({children}: Props) {
  const [authToken, setAuthToken] = useState('');

  function authenticate(token: string) {
    setAuthToken(token);
  }

  function logout() {
    setAuthToken('');
  }

  const value: AuthContextType = {
    token: authToken,
    isAuthenticated: !!authToken,
    authenticate,
    logout
  };

  return (
    <AuthContext value={value}>
      {children}
    </AuthContext>
  )
}

export default AuthContextProvider

interface Props {
  children: ReactNode
}

interface AuthContextType {
  token: string;
  isAuthenticated: boolean;
  authenticate: (token: string) => void;
  logout: () => void;
}