import { MOCK_AUTH_USERS } from "@/mock/auth";
import { EUserRole } from "@/types/auth";
import type { IAuthSession, IAuthUser, ILoginCredentials } from "@/types/auth";

const AUTH_STORAGE_KEY = "revenueiq.auth.session";
let cachedSessionRaw: string | null | undefined;
let cachedSessionSnapshot: IAuthSession | null = null;

function createToken(userId: string): string {
  return `mock-token-${userId}-${Date.now()}`;
}

function withoutPassword(user: (typeof MOCK_AUTH_USERS)[number]): IAuthUser {
  return {
    id: user.id,
    fullName: user.fullName,
    email: user.email,
    avatar: user.avatar,
    role: user.role,
    jobTitle: user.jobTitle,
  };
}

export function loginWithMockCredentials(
  credentials: ILoginCredentials,
): IAuthSession {
  const user = MOCK_AUTH_USERS.find(
    (candidate) =>
      candidate.email.toLowerCase() === credentials.email.toLowerCase(),
  );

  if (!user || user.password !== credentials.password) {
    throw new Error("Invalid email or password.");
  }

  return {
    user: withoutPassword(user),
    accessToken: createToken(user.id),
    createdAt: new Date().toISOString(),
  };
}

export function saveAuthSession(session: IAuthSession): void {
  const rawSession = JSON.stringify(session);
  cachedSessionRaw = rawSession;
  cachedSessionSnapshot = session;
  window.localStorage.setItem(AUTH_STORAGE_KEY, rawSession);
}

export function getStoredAuthSession(): IAuthSession | null {
  const storedSession = window.localStorage.getItem(AUTH_STORAGE_KEY);

  if (storedSession === cachedSessionRaw) {
    return cachedSessionSnapshot;
  }

  cachedSessionRaw = storedSession;

  if (!storedSession) {
    cachedSessionSnapshot = null;
    return null;
  }

  try {
    cachedSessionSnapshot = JSON.parse(storedSession) as IAuthSession;
    return cachedSessionSnapshot;
  } catch {
    window.localStorage.removeItem(AUTH_STORAGE_KEY);
    cachedSessionRaw = null;
    cachedSessionSnapshot = null;
    return null;
  }
}

export function clearAuthSession(): void {
  cachedSessionRaw = null;
  cachedSessionSnapshot = null;
  window.localStorage.removeItem(AUTH_STORAGE_KEY);
}

export function canAccessDashboardPath(role: EUserRole, pathname: string): boolean {
  if (role === EUserRole.ADMIN) {
    return true;
  }

  if (role === EUserRole.MANAGER) {
    return true;
  }

  return pathname === "/";
}

export function canAccessNavigationItem(
  role: EUserRole,
  allowedRoles: EUserRole[],
): boolean {
  return allowedRoles.includes(role);
}

export function canAccessBilling(role: EUserRole): boolean {
  return role === EUserRole.ADMIN;
}
