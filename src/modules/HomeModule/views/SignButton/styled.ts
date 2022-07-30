import styled from "@emotion/styled";
import { Button } from "@mui/material";
import goButtonBg from "./goButtonBg.png"

export const GoButton = styled(Button)({
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
  color: "white",
})