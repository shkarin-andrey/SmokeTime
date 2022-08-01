import "bootstrap/dist/css/bootstrap.min.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "../styles/style.scss";
import type { AppProps } from "next/app";

import React, { FC, useEffect, useState } from "react";
import { Provider } from "react-redux";
import store from "../store";
import AlertInfo from "../components/AlertInfo/AlertInfo";

const WrappedApp: FC<AppProps> = ({ Component, pageProps }) => {
  const [showChild, setShowChild] = useState(false);
  useEffect(() => {
    setShowChild(true);
  }, []);

  if (!showChild) {
    return null;
  }

  if (typeof window === "undefined") {
    return <></>;
  } else {
    return (
      <Provider store={store}>
        <Component {...pageProps} />
        <AlertInfo />
      </Provider>
    );
  }
};

export default WrappedApp;
