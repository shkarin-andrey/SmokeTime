import "bootstrap/dist/css/bootstrap.min.css";
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
