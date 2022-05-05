import type { NextPage } from "next";
import Brands from "../components/BrandsCards/BrandsCards";
import FAQ from "../components/FAQ/FAQ";
import Intro from "../components/Intro/Intro";
import Map from "../components/Map/Map";
import Why from "../components/Why/Why";
import MainLayout from "../layout";
import { context } from "../components/BrandsCards/context";

const Home: NextPage = () => {
  return (
    <>
      <MainLayout>
        <Intro />
        <Why />
        <Brands context={context} btn />
        <FAQ />
        <Map />
      </MainLayout>
    </>
  );
};

export default Home;
