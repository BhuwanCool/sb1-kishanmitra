import React, { createContext, useContext } from 'react';
import type { AuthSession } from '../types/database';

interface AuthContextType {
  session: AuthSession;
  loading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Provide a mock session
const mockSession: AuthSession = {
  user: {
    id: 'mock-user-id',
    email: 'demo@example.com'
  },
  error: null
};

export function AuthProvider({ children }: { children: React.ReactNode }) {
  return (
    <AuthContext.Provider value={{ session: mockSession, loading: false }}>
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