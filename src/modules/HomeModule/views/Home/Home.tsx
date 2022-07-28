// import { HomeContainer } from "./styled";
import homeBg from "../../../../modules/HomeModule/views/Home/homePageBg.png";
// @ts-ignore
// import Image from "next/image";

import Image from "next/image";

const styles = {
  paperContainer: {
    backgroundImage: "url(./homePageBg.png)"
  }
};
const Home = () => {
  return (
    <div style={styles.paperContainer}>
      {/* <AppLogo withtitle />
      <HomeTitle />
      <LetsTryButton /> */}
      {/* <HomeBg /> */}
      <Image
        alt="Image description"
        src={homeBg}
        layout="fill"
        objectFit="cover"
      />
      {/* <img
        src={homeBg}
        // layout="fill"
        // objectFit="cover"
      /> */}
    </div>
  );
};

export default Home;
