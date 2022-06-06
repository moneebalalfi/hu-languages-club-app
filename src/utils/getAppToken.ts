import jwt from "jsonwebtoken";
import { v4 } from "uuid";
import { app_access_key, app_secret } from "./getManagementToken";

const getAppToken = (room: any, isHost = false) => {
  const payload = {
    access_key: app_access_key,
    room_id: room.id,
    user_id: room.user,
    role: isHost ? "host" : "guest",
    type: "app",
    version: 2,
    iat: Math.floor(Date.now() / 1000),
    nbf: Math.floor(Date.now() / 1000),
  };

  return jwt.sign(payload, app_secret, {
    algorithm: "HS256",
    expiresIn: "20000000000h",
    jwtid: v4(),
  });
};

export default getAppToken;
