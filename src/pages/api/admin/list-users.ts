import { NextApiRequest, NextApiResponse } from "next";
import { adminAuth } from "@/config/firebaseAdmin";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const userToken = req.cookies.tkn;

  if (!userToken) {
    res.end("You can do nothing here! .. GET OUT!");
  } else {
    //const { uid } = await verifyIdToken(userToken);

    const { users } = await adminAuth.listUsers();

    res.json(users);
  }
}
