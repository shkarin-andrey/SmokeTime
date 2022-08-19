import type { NextPage } from "next";
import Brands from "../components/BrandsCards/BrandsCards";
import FAQ from "../components/FAQ/FAQ";
import Intro from "../components/Intro/Intro";
import Map from "../components/Map/Map";
import Why from "../components/Why/Why";
import MainLayout from "../layout";
import { context } from "../components/BrandsCards/context";
import QuestionsLeft from "../Screens/QuestionsLeft";

const Home: NextPage = () => {
  const title = `Оптовый интернет-магазин жидкостей для вейпа`;
  const description = `Купить брендовые жидкости для вейпа (электронных сигарет) по оптовым ценам от 200 руб. в интернет-магазине SmokeTimeOpt. Огромный выбор жидкостей для электронных сигарет!`;

  return (
    <>
      <MainLayout title={title} description={description}>
        <Intro />
        <Why />
        <Brands context={context} btn />
        <FAQ />
        <Map />
        <QuestionsLeft />
      </MainLayout>
    </>
  );
};

export default Home;
