import { NextApiRequest, NextApiResponse } from "next";

type ResponseData = {
  message: string;
};

// TODO: 1
// Choose & Init DB
// Crate DB User schema
// Crate GQL User schema
// [ Front ] Crate GQL User resolver (with JWT, to sign-in the user after req.)

export default function signUp(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  if (req.method === "GET") {
    // TODO: 2
    // Validate the req.body data
    // Return errors
    // Bcrypt the password
    // Add user to the DB
    // Generate JWT
    // Send 200 status with JWT to the client
    res.status(200).json({ message: "John Doe" });
  }
}
