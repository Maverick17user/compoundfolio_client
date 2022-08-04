import { Box, Typography, TextField } from "@mui/material";
import { CenterView, SignViewContainer } from "./styled";
import Image from "next/image";
import React from "react";
import logo from "../../images/signWallpaper.png";

export default function SignView() {
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
        <Box>
          <Typography component="h1">Sign up</Typography>
          <Box component="form" display="flex" flexDirection="column">
            <TextField
              variant="outlined"
              placeholder="Name"
              label="Name"
              name="name"
            />
            <TextField
              variant="outlined"
              placeholder="Password"
              label="Password"
              name="password"
            />
          </Box>
        </Box>
      </CenterView>
    </SignViewContainer>
  );
}
