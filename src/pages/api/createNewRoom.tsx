import { adminAuth } from "@/config/firebaseAdmin";
import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";
import getManagementToken from "utils/getManagementToken";
import getRoomToken from "../../utils/getRoomToken";

const createNewRoom = async (body: any) => {
  return await axios.post("https://prod-in2.100ms.live/api/v2/rooms", body, {
    headers: {
      "Content-type": "application/json",
      Authorization: "Bearer " + getManagementToken(),
    },
  });
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== "POST") {
    res.status(405).json({ message: "Only POST requests allowed" });
    return;
  }

  const body = req.body;

  const token = req.headers["user-token"] as string;
  try {
    const user = await adminAuth.verifyIdToken(token, true);
    const { data } = await createNewRoom(body);

    const host = user.uid;
    const room = getRoomToken(data, host, user);

    res.json(room);
  } catch (error) {
    res.send(error);
  }
}
