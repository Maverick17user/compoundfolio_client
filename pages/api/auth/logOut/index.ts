import { serialize } from "cookie";
import { NextApiRequest, NextApiResponse } from "next";

const logOut = (
  req: NextApiRequest,
  res: NextApiResponse<any>
) => {
  const { cookies } = req;

  const jwt = cookies.OursiteJWT;

  if (!jwt) {
    return res.json({ message: "Bro you are already not logged in..." });
  } else {
    const serialised = serialize("OursiteJWT", null as any, {
      httpOnly: true,
      secure: process.env.NODE_ENV !== "development",
      sameSite: "strict",
      maxAge: -1,
      path: "/",
    });

    res.setHeader("Set-Cookie", serialised);

    res.status(200).json({ message: "Successfuly logged out!" });
  }
}

export default logOut