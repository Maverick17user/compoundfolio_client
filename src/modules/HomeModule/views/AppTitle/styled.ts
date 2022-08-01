import styled from "@emotion/styled";
import { Typography } from "@mui/material";

export const Title = styled(Typography)({
  color: "white",
  fontFamily: "Montserrat",
  fontStyle: "normal",
  fontWeight: 400,
  fontSize: "80px",
  lineHeight: "111px",
});

export const Heading = styled("small")({
  fontSize: "144px",
});

export const Century = styled("small")({
  fontWeight: 600,
  fontFamily: "Chakra Petch",
});

export const VersionLegend = styled(Typography)({
  fontFamily: "Chakra Petch",
  fontStyle: "normal",
  fontWeight: 400,
  fontSize: "20px",
  color: "white",
  padding: "4px 8px",
  backgroundColor: "#0F6F72",
});

export const Motto = styled(Typography)({
  fontFamily: "Chakra Petch",
  fontStyle: "italic",
  fontWeight: 400,
  fontSize: "20px",
  color: "#D9D9D9",
});
