"use client";

import { createContext, useMemo, useSyncExternalStore } from "react";
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

const AUTH_SESSION_EVENT = "revenueiq-auth-session-change";

interface IAuthProviderProps {
  children: React.ReactNode;
}

function subscribeToAuthSession(onStoreChange: () => void): () => void {
  window.addEventListener("storage", onStoreChange);
  window.addEventListener(AUTH_SESSION_EVENT, onStoreChange);

  return () => {
    window.removeEventListener("storage", onStoreChange);
    window.removeEventListener(AUTH_SESSION_EVENT, onStoreChange);
  };
}

function getServerSessionSnapshot(): IAuthSession | null {
  return null;
}

function getHydratedSnapshot(): boolean {
  return true;
}

function getServerHydratedSnapshot(): boolean {
  return false;
}

function notifyAuthSessionChange() {
  window.dispatchEvent(new Event(AUTH_SESSION_EVENT));
}

export function AuthProvider({ children }: IAuthProviderProps) {
  const session = useSyncExternalStore(
    subscribeToAuthSession,
    getStoredAuthSession,
    getServerSessionSnapshot,
  );
  const hydrated = useSyncExternalStore(
    () => () => undefined,
    getHydratedSnapshot,
    getServerHydratedSnapshot,
  );
  const loading = !hydrated;

  async function login(credentials: ILoginCredentials): Promise<void> {
    const nextSession = loginWithMockCredentials(credentials);
    saveAuthSession(nextSession);
    notifyAuthSessionChange();
  }

  function logout() {
    clearAuthSession();
    notifyAuthSessionChange();
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
