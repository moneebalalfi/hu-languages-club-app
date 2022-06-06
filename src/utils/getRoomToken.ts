import getAppToken from "./getAppToken";

const getRoomToken = (result: any, host: string, user: any) => {
  return {
    meetId: result.name,
    token: getAppToken(result, user.uid === host),
  };
};

export default getRoomToken;
