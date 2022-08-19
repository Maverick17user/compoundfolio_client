import { sign } from "jsonwebtoken";
import { serialize } from "cookie";
import { NextApiRequest, NextApiResponse } from 'next';

const secret = process.env.FB_MEASUREMENT_ID;
const ONE_DAY = 60 * 60 * 24;

const signIn = (
  req: NextApiRequest,
  res: NextApiResponse<any>
) => {
  const { name, email, password } = req.body;

  // TODO: To check in the database if a user with this username and password exists
  if (name === "a" && password === "a") {
    const token = sign(
      {
        exp: Math.floor(Date.now() / 1000) + ONE_DAY,
        username: name,
      },
      secret as string
    );

    const serialised = serialize("OursiteJWT", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV !== "development",
      sameSite: "strict",
      maxAge: ONE_DAY,
      path: "/",
    });

    res.setHeader("Set-Cookie", serialised);

    res.status(200).json({ message: "Success!" });
  } else {
    res.json({ message: "Invalid credentials!" });
  }
}

export default signIn;