import { styled } from "@mui/material";
import { Box } from "@mui/system";
import { Button } from "@mui/material";
import goButtonBg from "./goButtonBg.png"

export const SignViewContainer = styled(Box)({
  display: "flex",
  height: "100vh",
})

export const CenterView = styled(Box)({
  height: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
})

export const SignButton = styled(Button)({
  fontFamily: 'Montserrat',
  fontStyle: "normal",
  fontWeight: 300,
  fontSize: "64px",
  textAlign: "center",
  letterSpacing: "0.1em",
  backgroundImage: `url(${goButtonBg})`,
  backgroundSize: "cover",
  width: 486,
  height: 114,
  // color: "white",
})