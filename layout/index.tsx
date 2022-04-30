import Head from "next/head";
import { FC } from "react";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";

interface iMainLayout {
  children: JSX.Element[] | JSX.Element;
  title?: string;
}

const MainLayout: FC<iMainLayout> = ({
  children,
  title = "Купить жидкости для вейпа оптом",
}) => {
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
        <meta
          property="og:image"
          content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://metatags.io/" />
        <meta property="twitter:title" content={`${title} | SmokeTime`} />
        <meta
          property="twitter:description"
          content="Купить жидкости для вейпа оптом по разумным ценам и с быстрой доставкой от компании SmokeTime"
        />
        <meta
          property="twitter:image"
          content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png"
        />
      </Head>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default MainLayout;
