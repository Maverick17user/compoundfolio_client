import { NextApiRequest, NextApiResponse } from "next";

type ResponseData = {
  message: string;
};

export default function signUp(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  res.status(200).json({ message: "John Doe" });
}
