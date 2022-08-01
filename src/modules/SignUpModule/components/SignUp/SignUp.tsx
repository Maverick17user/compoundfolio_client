import { Box } from "@mui/system";
import Image from "next/image";
import React from "react";
import { CenterView, SignView } from "./styled";
import logo from "src/core/images/logo.png";
import { TextField, Typography } from "@mui/material";

export default function SignUp() {
  return (
    <SignView>
      <CenterView component="section" flexGrow={1}>
        <Image
          alt="App logo"
          src={logo}
          width="400px"
          height="400px"
          priority={true}
        />
      </CenterView>
      <CenterView component="section" flexGrow={1}>
        <Box>
          <Typography component="h1">Sign up</Typography>
          <Box component="form" display="flex" flexDirection="column">
            <TextField variant="outlined" placeholder="Name" label="Name" name="name" />
            <TextField variant="outlined" placeholder="Password" label="Password" name="password" />
          </Box>
        </Box>
      </CenterView>
    </SignView>
  );
}
