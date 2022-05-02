import "bootstrap/dist/css/bootstrap.min.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "../styles/style.scss";
import type { AppProps } from "next/app";

import React, { FC } from "react";
import { Provider } from "react-redux";
import store from "../store";

const WrappedApp: FC<AppProps> = ({ Component, pageProps }) => (
  <Provider store={store}>
    <Component {...pageProps} />
  </Provider>
);

export default WrappedApp;
