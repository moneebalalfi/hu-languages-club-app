import jwt from "jsonwebtoken";
import { v4 } from "uuid";

export const app_access_key = "619fd9ccaf3188df33e6b471";
export const app_secret =
  "XnYCebng_9qS8Ub0kL52Ym5rCZUC5vqHiFN35MxonjxUsdB3qe4kKmt1ZTVFdOdtOCoqF3EVKU9Y6MUfla8wxb6sTc05K_-PiCs-2gt-WrBABiNagR821pElBL3IQCFvUs1xJhDnULMG7RNNh5lWIpYeteu6mEnC6SbwndjeFvQ=";

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
