/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { auth, db } from "@/config/firebase";
import { TUserRole } from "@/types";
import { signOut, User } from "firebase/auth";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { useRouter } from "next/router";
import nookies from "nookies";
import React, {
  createContext,
  FC,
  useContext,
  useEffect,
  useState,
} from "react";
import { TUser } from "types";

interface AuthContextProps {
  user?: User | null;
  userRole?: TUserRole;
  logOut: () => Promise<void>;
  userNotAdmin?: () => void;
  currentUserData: TUser;
}

export const AuthContext = createContext<AuthContextProps>(
  {} as AuthContextProps,
);

export const AuthProvider: FC = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [currentUserData, updateCurrentUserData] = useState<TUser>(null);

  const router = useRouter();

  const logOut = async () => {
    await signOut(auth);

    try {
      await signOut(auth);
      setUser(null);
      updateCurrentUserData(null);
      nookies.set(undefined, "tkn", "");
      router.push("/");
    } catch (err) {
      console.log("Error logging out", err);
    }
  };

  const getUser = async (user: User) => {
    if (!user) return;

    try {
      const q = query(collection(db, "users"), where("uid", "==", user.uid));
      const docSnapshot = await getDocs(q);
      const docId = docSnapshot.docs[0].id;

      const docRef = doc(db, "users", docId);
      const userDoc = await getDoc(docRef);
      return userDoc.data();
    } catch (err: any) {
      console.log("error getting user data", err.message);
    }
  };

  useEffect(() => {
    return auth.onIdTokenChanged(async (user) => {
      if (!user) {
        setUser(null);
        nookies.set(undefined, "tkn", "");
      }

      const token = await user?.getIdToken();
      setUser(user);
      nookies.set(undefined, "tkn", token!);
      const data = await getUser(user as User);
      updateCurrentUserData(data as TUser);
    });
  }, []);

  return (
    <AuthContext.Provider value={{ user, logOut, currentUserData }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
