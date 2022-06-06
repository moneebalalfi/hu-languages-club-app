import { TUserRole } from "@/types";
import { User } from "firebase/auth";

const isAdmin = async (user: User | null) => {
  if (!user) return null;

  const res = await user.getIdTokenResult();

  if (res.claims.type === "admin") return true;

  return false;
};

const isInstructor = async (user: User | null) => {
  if (!user) return null;
  const res = await user.getIdTokenResult();

  if (res.claims.type === "instructor") return true;

  return false;
};

const getUserRole = async (user: User | null): Promise<TUserRole> => {
  const userType = (await isAdmin(user))
    ? "admin"
    : (await isInstructor(user))
    ? "instructor"
    : "student";

  return userType;
};

export { isAdmin, isInstructor, getUserRole };
