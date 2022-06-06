import { getAnalytics } from "firebase/analytics";
import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const FireCongig = {
  apiKey: process.env.NEXT_PUBLIC_FB_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FB_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FB_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FB_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FB_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FB_APP_ID,
};

const app = !getApps.length ? initializeApp(FireCongig) : getApp();

if (typeof window !== "undefined") {
  if (app) getAnalytics();
}

const db = getFirestore();
const storage = getStorage();
const auth = getAuth();

export { app, db, storage, auth };
