import { mutate } from "swr";
import { auth, db } from "@/config/firebase";
import { updateDoc } from "firebase/firestore";
import { doc } from "firebase/firestore";
import { TUser } from "types";

// To refresh the token after the calims are set, I called this func: getIdToken(true);
// It is awesome!!!

const setStudentRole = async (user: TUser) => {
  if (!user) return null;
  const { docId, uid } = user;

  try {
    await fetch(`/api/admin/set-user-role?uid=${uid}&role=student`);
    await auth.currentUser?.getIdToken(true);
    await updateDoc(doc(db, "users", docId), {
      userType: "student",
    });
    await mutate("GET_USERS");
  } catch (error) {
    console.log(error);
  }
};

const setAdminRole = async (user: TUser) => {
  if (!user) return null;

  const { docId, uid } = user;

  try {
    await fetch(`/api/admin/set-user-role?uid=${uid}&role=admin`);
    await auth.currentUser?.getIdToken(true);

    await updateDoc(doc(db, "users", docId), {
      userType: "admin",
    });
    await mutate("GET_USERS");
  } catch (error) {
    console.log(error);
  }
};

const setInstructorRole = async (user: TUser) => {
  if (!user) return null;
  const { docId, uid } = user;

  try {
    await fetch(`/api/admin/set-user-role?uid=${uid}&role=instructor`);
    await auth.currentUser?.getIdToken(true);
    await updateDoc(doc(db, "users", docId), {
      userType: "instructor",
    });
    await mutate("GET_USERS");
  } catch (error) {
    console.log(error);
  }
};

export { setStudentRole, setInstructorRole, setAdminRole };
