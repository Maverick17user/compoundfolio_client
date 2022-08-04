import { NextApiRequest, NextApiResponse } from "next";

type ResponseData = {
  message: string;
};

export default function signUp(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  if (req.method === "GET") {
    res.status(200).json({ message: "John Doe" });
  }
}
