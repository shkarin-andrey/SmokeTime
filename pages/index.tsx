import type { NextPage } from "next";
// import Brands from "../components/Brands/Brands";
import FAQ from "../components/FAQ/FAQ";
import Intro from "../components/Intro/Intro";
import Map from "../components/Map/Map";
import Why from "../components/Why/Why";
import MainLayout from "../layout";

const Home: NextPage = () => {
  return (
    <>
      <MainLayout>
        <Intro />
        <Why />
        {/* <Brands /> */}
        <FAQ />
        <Map />
      </MainLayout>
    </>
  );
};

export default Home;
