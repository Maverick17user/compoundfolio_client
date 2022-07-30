import { Box } from "@mui/material";
import Image from "next/image";
import logo from "./logo.png";

export default function AppLogo() {
  return (
    <Box zIndex={2}>
      <Image
        alt="Image description"
        src={logo}
        width="500px"
        height="100px"
        priority={true}
      />
    </Box>
  )
}
