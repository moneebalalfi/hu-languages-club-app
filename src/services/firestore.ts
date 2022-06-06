import { db } from "@/config/firebase";
import { TLevel, TUser } from "@/types";
import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import { mutate } from "swr";

const fetchClubs = async () => {
  const q = query(collection(db, "clubs"));

  const docSnapshot = await getDocs(q);

  return docSnapshot.docs.map((doc) => doc.data());
};

const getClub = async (name: string) => {
  const updatedName = name.charAt(0).toUpperCase() + name.slice(1);

  const q = query(collection(db, "clubs"), where("name", "==", updatedName));

  const docSnapshot = await getDocs(q);

  return docSnapshot.docs.map((doc) => doc.data());
};

const fetchPosts = async () => {
  const q = query(collection(db, "posts"));

  const docSnapshot = await getDocs(q);

  return docSnapshot.docs.map((doc) => doc.data());
};

const fetchPostsOfLevel = async (userLevel: TLevel) => {
  const q = query(collection(db, "posts"), where("postLevel", "==", userLevel));

  const docSnapshot = await getDocs(q);

  return docSnapshot.docs.map((doc) => doc.data());
};

const fetchPostsOfUser = async (name: string) => {
  const q = query(collection(db, "posts"), where("userName", "==", name));

  const docSnapshot = await getDocs(q);

  return docSnapshot.docs.map((doc) => doc.data());
};

const deletePost = async (id: string) => {
  try {
    await deleteDoc(doc(db, "posts", id));

    mutate("GET_POSTS");
    mutate("GET_POSTS_OF_LEVEL");
  } catch (error) {
    console.log(error);
  }
};

const fetchUsers = async () => {
  const q = query(collection(db, "users"));

  const docSnapshot = await getDocs(q);

  return docSnapshot.docs.map((doc) => doc.data());
};

const fetchStudentsOfLevel = async (user: TUser) => {
  if (!user) return;
  const q = query(
    collection(db, "users"),
    where("level", "==", user.level),
    where("userType", "==", "student"),
  );

  const docSnapshot = await getDocs(q);

  return docSnapshot.docs.map((doc) => doc.data());
};

const fetchRoomsOfInstructor = async (user: TUser) => {
  if (!user) return;
  const q = query(
    collection(db, "meetings-rooms"),
    where("userId", "==", user.uid),
  );

  const docSnapshot = await getDocs(q);

  return docSnapshot.docs.map((doc) => doc.data());
};

const fetchRoomsOfLevel = async (userLevel: TLevel) => {
  const q = query(
    collection(db, "meetings-rooms"),
    where("roomLevel", "==", userLevel),
  );

  const docSnapshot = await getDocs(q);

  return docSnapshot.docs.map((doc) => doc.data());
};

const fetchAllRooms = async () => {
  const q = query(collection(db, "meetings-rooms"));

  const docSnapshot = await getDocs(q);

  return docSnapshot.docs.map((doc) => doc.data());
};

const fetchAllBooks = async () => {
  const q = query(collection(db, "books"));

  const docSnapshot = await getDocs(q);

  return docSnapshot.docs.map((doc) => doc.data());
};

const fetchBooksOfInstructor = async (user: TUser) => {
  if (!user) return;
  const q = query(collection(db, "books"), where("userId", "==", user.uid));

  const docSnapshot = await getDocs(q);

  return docSnapshot.docs.map((doc) => doc.data());
};

const fetchBooksOfLevel = async (userLevel: TLevel) => {
  const q = query(collection(db, "books"), where("bookLevel", "==", userLevel));

  const docSnapshot = await getDocs(q);

  return docSnapshot.docs.map((doc) => doc.data());
};

const deleteBook = async (id: string) => {
  try {
    await deleteDoc(doc(db, "books", id));

    mutate("GET_BOOKS_OF_INSTRUCTOR");
    mutate("GET_BOOKS_OF_LEVEL");
    mutate("GET_ALL_BOOKS");
  } catch (error) {
    console.log(error);
  }
};

const deleteRoom = async (id: string) => {
  try {
    await deleteDoc(doc(db, "meetings-rooms", id));

    mutate("GET_ROOMS_OF_INSTRUCTOR");
    mutate("GET_ROOMS_OF_LEVEL");
    mutate("GET_ALL_ROOMS");
  } catch (error) {
    console.log(error);
  }
};

// Videos Related

const fetchAllVideos = async () => {
  const q = query(collection(db, "videos"));

  const docSnapshot = await getDocs(q);

  return docSnapshot.docs.map((doc) => doc.data());
};

const fetchVideosOfInstructor = async (user: TUser) => {
  if (!user) return;
  const q = query(collection(db, "videos"), where("userId", "==", user.uid));

  const docSnapshot = await getDocs(q);

  return docSnapshot.docs.map((doc) => doc.data());
};

const fetchVideosOfLevel = async (userLevel: TLevel) => {
  const q = query(
    collection(db, "videos"),
    where("videoLevel", "==", userLevel),
  );

  const docSnapshot = await getDocs(q);

  return docSnapshot.docs.map((doc) => doc.data());
};

const deleteVideo = async (id: string) => {
  try {
    await deleteDoc(doc(db, "videos", id));

    mutate("GET_VIDEOS_OF_INSTRUCTOR");
    mutate("GET_VIDEOS_OF_LEVEL");
    mutate("GET_ALL_VIDEOS");
  } catch (error) {
    console.log(error);
  }
};

async function onReserve(
  postId: string,
  user: TUser,
  currentReservationList: TUser[],
  roomId: string,
  isCancel?: boolean,
) {
  if (!isCancel) {
    await updateDoc(doc(db, "posts", postId), {
      reservationList: [...currentReservationList, user],
    });
    await updateDoc(doc(db, "meetings-rooms", roomId), {
      people: [...currentReservationList, user],
    });
    mutate("GET_POSTS");
    mutate("GET_POSTS_OF_LEVEL");
    mutate("GET_ROOMS_OF_INSTRUCTOR");
    mutate("GET_ROOMS_OF_LEVEL");
    mutate("GET_ALL_ROOMS");
    return {
      msg: "Reservatio Done",
    };
  } else {
    await updateDoc(doc(db, "posts", postId), {
      reservationList: currentReservationList?.filter(
        (u) => u?.uid !== user?.uid,
      ),
    });

    await updateDoc(doc(db, "meetings-rooms", roomId), {
      people: currentReservationList?.filter((u) => u?.uid !== user?.uid),
    });
    mutate("GET_POSTS");
    mutate("GET_POSTS_OF_LEVEL");
    mutate("GET_ROOMS_OF_INSTRUCTOR");
    mutate("GET_ROOMS_OF_LEVEL");
    mutate("GET_ALL_ROOMS");
    return {
      msg: "Cancel Done",
    };
  }
}

async function onLike(
  postId: string,
  user: TUser,
  currentLikesList: TUser[],
  dislike?: boolean,
) {
  if (!dislike) {
    await updateDoc(doc(db, "posts", postId), {
      likes: [...currentLikesList, user],
    });

    mutate("GET_POSTS");
    mutate("GET_POSTS_OF_LEVEL");

    return {
      msg: "Like Done",
    };
  } else {
    await updateDoc(doc(db, "posts", postId), {
      likes: currentLikesList?.filter((u) => u?.uid !== user?.uid),
    });

    mutate("GET_POSTS");
    mutate("GET_POSTS_OF_LEVEL");

    return {
      msg: "Dislike Done",
    };
  }
}

async function changeStudentLevel(user: TUser, to: TLevel) {
  if (to === "A") {
    await updateDoc(doc(db, "users", user?.docId || ""), {
      level: "A",
    });
    mutate("GET_STUDENTS_OF_LEVEL");
    mutate("GET_USERS");
  } else if (to === "B") {
    await updateDoc(doc(db, "users", user?.docId || ""), {
      level: "B",
    });
    mutate("GET_STUDENTS_OF_LEVEL");
    mutate("GET_USERS");
  } else if (to === "C") {
    await updateDoc(doc(db, "users", user?.docId || ""), {
      level: "C",
    });
    mutate("GET_STUDENTS_OF_LEVEL");
    mutate("GET_USERS");
  }
}

export {
  fetchClubs,
  fetchUsers,
  fetchPosts,
  fetchPostsOfLevel,
  deletePost,
  fetchRoomsOfInstructor,
  fetchRoomsOfLevel,
  fetchAllRooms,
  fetchBooksOfInstructor,
  fetchBooksOfLevel,
  fetchAllBooks,
  deleteBook,
  deleteRoom,
  fetchAllVideos,
  fetchVideosOfInstructor,
  fetchVideosOfLevel,
  deleteVideo,
  getClub,
  fetchPostsOfUser,
  onReserve,
  onLike,
  fetchStudentsOfLevel,
  changeStudentLevel,
};
