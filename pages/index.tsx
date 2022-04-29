import type { NextPage } from "next";
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
        <FAQ />
        <Map />
      </MainLayout>
    </>
  );
};

export default Home;
