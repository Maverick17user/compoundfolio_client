import homeBg from "./homePageBg.png";
import Image from "next/image";
import { Box, Button } from "@mui/material";
import { AppLogo, AppTitle, SignButton } from "../../views";

const styles = {
  paperContainer: {
    position: "relative",
    background: "#0F1112",
    width: "100vw",
    height: "100vh"
  },
  main: {
    height: "100%",
    padding: "115px 180px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    zIndex: 2
  }
};

const Home = () => {
  return (
    // @ts-ignore
    <Box style={styles.paperContainer}>
      {/* @ts-ignore */}
      <Box component="main" style={styles.main}>
        <AppLogo />
        <AppTitle />
        <SignButton />
      </Box>
      <Image
        style={{ position: "absolute", top: 0, left: 0, zIndex: 1 }}
        alt="Image description"
        src={homeBg}
        layout="fill"
        objectFit="cover"
        priority={true}
      />
    </Box>
  );
};

export default Home;
