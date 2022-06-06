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
    // const { uid, name } = await verifyIdToken(userToken);

    try {
      if (req.query.role === "admin") {
        await adminAuth.setCustomUserClaims(req.query.uid.toString(), {
          type: "admin",
        });
        res.json({ msg: "The user now is admin!" });
        res.end();
      }

      if (req.query.role === "instructor") {
        await adminAuth.setCustomUserClaims(req.query.uid.toString(), {
          type: "instructor",
        });
        res.json({ msg: "The user now is instructor!" });
        res.end();
      }

      if (req.query.role === "student") {
        await adminAuth.setCustomUserClaims(req.query.uid.toString(), {
          type: "student",
        });
        res.json({ msg: "The user now is instructor!" });
        res.end();
      }
    } catch (err: any) {
      res.json({ errorMsg: err.message });
    }
  }
}

// set-user-role End Point;
// '/api/admin/set-user-role
