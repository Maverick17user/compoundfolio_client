import { Box } from "@mui/material";
import React from "react";
import { Heading, Title, Century } from "./styled";

export default function AppTitle() {
  return (
    <Box component="section" zIndex={2}>
      <Title>
        <Heading>Dividend</Heading> <br />
        tracking app <br /> of <Century>XXI</Century> century
      </Title>
    </Box>
  );
}
