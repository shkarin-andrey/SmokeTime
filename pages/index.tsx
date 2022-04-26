import type { NextPage } from "next";
import Brands from "../components/Brands/Brands";
import FAQ from "../components/FAQ/FAQ";
import Intro from "../components/Intro/Intro";
import Why from "../components/Why/Why";
import MainLayout from "../layout";

const Home: NextPage = () => {
  return (
    <>
      <MainLayout>
        <Intro />
        <Why />
        <Brands />
        <FAQ />
      </MainLayout>
    </>
  );
};

export default Home;
