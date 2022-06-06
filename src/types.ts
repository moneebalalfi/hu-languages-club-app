////////////// Admin types ////////////////////////

import { Timestamp } from "firebase/firestore";
import { IconType } from "react-icons";

export type TInstructorSignInValues = {
  email: string;
  password: string;
};

// SideBar Items type

export type TSideBarItem = {
  id: number;
  title: string;
  pathName: string;
  icon: IconType;
};

/////////////////// Student user types ///////////////////

export type TInstructorSignUpFormValues = {
  fullName: string;
  email: string;
  level: TLevel;
  password: string;
  confirmPassword: string;
};

// Else

export type TUserRole = "student" | "admin" | "instructor";

export type TClub = {
  id: string;
  name: string;
  image: string;
  helloWord: string;
  createdAt: Timestamp;
};

export type TPost = {
  id: string;
  text: string;
  image: string;
  userId: string;
  userName: string;
  userType: "student" | "admin" | "instructor";
  userImage: string;
  postLevel: TLevel;
  createdAt: Timestamp;
  reservationList?: [TUser];
  room?: string;
  likes?: [TUser];
};

export type TUser = {
  docId: string;
  uid: string;
  displayName: string;
  email: string;
  emailVerified: boolean;
  userType: "student" | "admin" | "instructor";
  photoUrl: string;
  level?: TLevel;
  createdAt: string | undefined;
} | null;

export type TLevel = "A" | "B" | "C";
