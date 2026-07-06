export enum EUserRole {
  ADMIN = "Admin",
  MANAGER = "Manager",
  VIEWER = "Viewer",
}

export interface IAuthUser {
  id: string;
  fullName: string;
  email: string;
  avatar: string;
  role: EUserRole;
  jobTitle: string;
}

export interface IAuthSession {
  user: IAuthUser;
  accessToken: string;
  createdAt: string;
}

export interface ILoginCredentials {
  email: string;
  password: string;
}
