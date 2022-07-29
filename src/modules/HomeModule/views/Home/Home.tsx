import homeBg from "../../../../modules/HomeModule/views/Home/homePageBg.png";
import logo from "../../../../modules/HomeModule/views/Home/logo.png";
import Image from "next/image";
import { Box, Button, Typography } from "@mui/material";

const styles = {
  paperContainer: {
    position: "relative",
    background: "#0F1112",
    width: "100vw",
    height: "100vh"
  },
  main: {
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
      11
      {/* <AppLogo withtitle />
      <HomeTitle />
      <LetsTryButton /> */}
      {/* <HomeBg /> */}
      {/* @ts-ignore */}
      <Box component="main" style={styles.main}>
        <Box>
          <Image
            alt="Image description"
            src={logo}
            width="500px"
            height="100px"
            priority={true}
          />
        </Box>
        <Typography>Dividend tracking app of XXI century</Typography>
        <Button variant="contained">LET'S TRY</Button>
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
