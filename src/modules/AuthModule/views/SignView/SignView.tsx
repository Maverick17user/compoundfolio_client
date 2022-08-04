import { Box, Typography } from "@mui/material";
import { CenterView, SignButton, SignViewContainer } from "./styled";
import Image from "next/image";
import React from "react";
import logo from "../../images/signWallpaper.png";
import ISignView from "./ISignView";

export default function SignView({
  children,
  isSignUp = false,
  handleSubmit,
}: ISignView) {
  return (
    <SignViewContainer>
      <Image
        alt="wallpaper"
        src={logo}
        width="1024px"
        height="1024px"
        priority={true}
      />
      <CenterView component="section" flexGrow={1}>
        <Box display="flex" flexDirection="column" alignItems="center">
          <Typography component="h1">Sign up</Typography>
          {/* TODO: Add Google OAuth component */}
          <Typography>- OR -</Typography>
          <form onSubmit={handleSubmit}>
            {children}
            <SignButton type="submit">
              {isSignUp ? "Create Account" : "Sign In"}
            </SignButton>
          </form>
        </Box>
      </CenterView>
    </SignViewContainer>
  );
}
