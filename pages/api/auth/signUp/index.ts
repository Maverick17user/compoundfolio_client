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


import { User } from '../../core/types/auth';
import {
  collection,
  doc,
  getDoc,
  setDoc,
} from 'firebase/firestore'
import db from './db'

export async function signUpUser(user: User): Promise<void> {
  const usersRef = collection(db, 'users')
  await setDoc(doc(usersRef, user.id), {
    name: user.name,
    email: user.email,
    password: user.password,
  })
}

export async function signInUser(id: string): Promise<User> {
  const user = await getDoc(doc(db, 'User', id))

  if (user.exists()) {
    return user.data() as User
  } else {
    const json = '{"status":"not found"}'
    return JSON.parse(json)
  }
}

