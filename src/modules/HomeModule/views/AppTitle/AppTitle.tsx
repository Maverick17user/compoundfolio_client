import { Box } from "@mui/material";
import React from "react";
import { Heading, Title, Century, VersionLegend, Motto } from "./styled";

export default function AppTitle() {
  return (
    <Box maxWidth="661px" component="section" zIndex={2}>
      <Title>
        <Heading>Dividend</Heading> <br />
        tracking app <br /> of <Century>XXI</Century> century
      </Title>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mt={6.5}
      >
        <VersionLegend>V.0.0.1</VersionLegend>
        <Motto>Designed by investors for investors</Motto>
      </Box>
    </Box>
  );
}
