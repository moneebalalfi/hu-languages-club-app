/* eslint-disable @typescript-eslint/no-var-requires */

import admin from "firebase-admin";
const serviceAccount = require("./firebase-admin.secret.json");

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
}

export const verifyIdToken = async (token: string) => {
  return admin
    .auth()
    .verifyIdToken(token)
    .catch((error) => {
      throw error;
    });
};

const adminAuth = admin.auth();
const adminDB = admin.firestore();

export { adminAuth, adminDB };
