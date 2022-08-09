import { ref, set } from "firebase/database";
import { NextApiRequest, NextApiResponse } from "next";
import { db } from "../graphql";

type ResponseData = {
  message: string;
};

// TODO: 1
// Crate GQL User schema
// [ Front ] Crate GQL User resolver (with JWT, to sign-in the user after req.)

export default function signUp(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  if (req.method === "POST") {
    // TODO: 2
    // Validate the req.body data
    // Return errors
    // Bcrypt the password
    // Add user to the DB
    // Generate JWT
    // Send 200 status with JWT to the client

    const { name, email, password } = req.body

    try {
      const UsersCollection = ref(db, "users");
  
      set(UsersCollection, {
        name, 
        email, 
        password
      });
  
      res.status(200).json({ message: "John Doe" });
    } catch {
      res.status(200).json({ message: "smth. went wrong!" });
    }

  }
}
