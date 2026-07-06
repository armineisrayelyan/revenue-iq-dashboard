"use client";

import { createContext, useMemo, useState } from "react";
import {
  clearAuthSession,
  getStoredAuthSession,
  loginWithMockCredentials,
  saveAuthSession,
} from "@/services/authService";
import type { IAuthSession, IAuthUser, ILoginCredentials } from "@/types/auth";

interface IAuthContextValue {
  user: IAuthUser | null;
  session: IAuthSession | null;
  loading: boolean;
  login: (credentials: ILoginCredentials) => Promise<void>;
  logout: () => void;
}

export const AuthContext = createContext<IAuthContextValue | null>(null);

interface IAuthProviderProps {
  children: React.ReactNode;
}

export function AuthProvider({ children }: IAuthProviderProps) {
  const [session, setSession] = useState<IAuthSession | null>(() => {
    if (typeof window === "undefined") {
      return null;
    }

    return getStoredAuthSession();
  });
  const loading = false;

  async function login(credentials: ILoginCredentials): Promise<void> {
    const nextSession = loginWithMockCredentials(credentials);
    saveAuthSession(nextSession);
    setSession(nextSession);
  }

  function logout() {
    clearAuthSession();
    setSession(null);
  }

  const value = useMemo<IAuthContextValue>(
    () => ({
      user: session?.user ?? null,
      session,
      loading,
      login,
      logout,
    }),
    [loading, session],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
