import jwt from "jsonwebtoken";
import { v4 } from "uuid";

export const app_access_key = ""; // 100ms public key, check https://dashboard.100ms.live/developer
export const app_secret = ""; // 100ms secret key, check https://dashboard.100ms.live/developer;

const getManagementToken = () => {
  const token = jwt.sign(
    {
      access_key: app_access_key,
      type: "management",
      version: 2,
      iat: Math.floor(Date.now() / 1000),
      nbf: Math.floor(Date.now() / 1000),
    },
    app_secret,
    {
      algorithm: "HS256",
      expiresIn: "24h",
      jwtid: v4(),
    },
  );
  return token;
};

export default getManagementToken;
