import Head from "next/head";
import { FC, useEffect } from "react";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import seoPreviw from "../public/img/smoketime-seo.jpg";
import { useAppDispatch } from "../hooks/useAppDispatch";
import { countActions } from "../store/reducers/cartSlice";
import useLocalStorage from "../hooks/useLocalStorage";
interface iMainLayout {
  children: JSX.Element[] | JSX.Element;
  title?: string;
}

const MainLayout: FC<iMainLayout> = ({
  children,
  title = "Купить жидкости для вейпа оптом",
}) => {
  const dispatch = useAppDispatch();
  const [countLocal, setCountLocal] = useLocalStorage("count", 0);

  useEffect(() => {
    dispatch(countActions(countLocal));
  }, [countLocal]);
  return (
    <>
      <Head>
        <title>{title} | SmokeTime</title>
        <meta name="title" content={`${title} | SmokeTime`} />
        <meta
          name="description"
          content={`Купить жидкости для вейпа оптом по разумным ценам и с быстрой доставкой от компании SmokeTime`}
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://metatags.io/" />
        <meta property="og:title" content={`${title} | SmokeTime`} />
        <meta
          property="og:description"
          content="Купить жидкости для вейпа оптом по разумным ценам и с быстрой доставкой от компании SmokeTime"
        />
        <meta property="og:image" content={seoPreviw.src} />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://metatags.io/" />
        <meta property="twitter:title" content={`${title} | SmokeTime`} />
        <meta
          property="twitter:description"
          content="Купить жидкости для вейпа оптом по разумным ценам и с быстрой доставкой от компании SmokeTime"
        />
        <meta property="twitter:image" content={seoPreviw.src} />
      </Head>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default MainLayout;
