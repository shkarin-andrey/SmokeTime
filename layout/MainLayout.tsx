import Head from "next/head";
import { FC, useEffect } from "react";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import seoPreviw from "../public/img/smoketime-seo.jpg";
import { useAppDispatch } from "../hooks/useAppDispatch";
import { countActions } from "../store/reducers/cartSlice";
import useLocalStorage from "../hooks/useLocalStorage";
import { iMainLayout } from "./MainLayout.interface";

const MainLayout: FC<iMainLayout> = ({
  children,
  title = "Купить жидкости для вейпа оптом",
  description = "Купить жидкости для вейпа оптом по разумным ценам и с быстрой доставкой от компании SmokeTime",
}) => {
  const headTitle = `${title} | SmokeTimeOpt`;

  const dispatch = useAppDispatch();
  const [countLocal, setCountLocal] = useLocalStorage("count", 0);

  useEffect(() => {
    dispatch(countActions(countLocal));
  }, [countLocal]);
  return (
    <>
      <Head>
        <title>{headTitle}</title>
        <meta name="title" content={headTitle} />
        <meta name="description" content={description} />

        <meta property="og:type" content="website" />
        <meta property="og:url" content={process.env.BASE_URL} />
        <meta property="og:title" content={headTitle} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={seoPreviw.src} />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={process.env.BASE_URL} />
        <meta property="twitter:title" content={headTitle} />
        <meta property="twitter:description" content={description} />
        <meta property="twitter:image" content={seoPreviw.src} />
      </Head>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default MainLayout;
