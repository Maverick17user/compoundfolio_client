import { Box } from "@mui/material";
import React from "react";
import { SIGN_UP_PAGE_PATH } from "../../../../core/consts/routeUrls";
import Router from "next/router";
import { GoButton } from "./styled";

export default function SignButton() {
  const handleSignRedirection = () => {
    Router.push(SIGN_UP_PAGE_PATH);
  };

  return (
    <Box zIndex={2}>
      <GoButton  onClick={handleSignRedirection}>
        LET'S TRY
      </GoButton>
    </Box>
  );
}
