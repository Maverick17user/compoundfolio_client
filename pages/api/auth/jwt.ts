import { NextApiRequest, NextApiResponse } from "next";

type ResponseData = any;

export default async function (
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  const { cookies } = req;

  const jwt = cookies.jwt;

  return res.json(
    jwt
      ? { data: "Top secret data!" }
      : { message: "Top secret data!" }
  ) 
}