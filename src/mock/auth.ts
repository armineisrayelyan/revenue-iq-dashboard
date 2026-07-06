import { EUserRole } from "@/types/auth";
import type { IAuthUser } from "@/types/auth";

export interface IMockAuthUser extends IAuthUser {
  password: string;
}

export const MOCK_AUTH_USERS: IMockAuthUser[] = [
  {
    id: "auth_admin",
    fullName: "Armine Israyelyan",
    email: "admin@revenueiq.com",
    avatar: "",
    role: EUserRole.ADMIN,
    jobTitle: "Founder & Revenue Lead",
    password: "Password123!",
  },
  {
    id: "auth_manager",
    fullName: "Mariam Manager",
    email: "manager@revenueiq.com",
    avatar: "",
    role: EUserRole.MANAGER,
    jobTitle: "Revenue Operations Manager",
    password: "Password123!",
  },
  {
    id: "auth_viewer",
    fullName: "Victor Viewer",
    email: "viewer@revenueiq.com",
    avatar: "",
    role: EUserRole.VIEWER,
    jobTitle: "Finance Analyst",
    password: "Password123!",
  },
];
