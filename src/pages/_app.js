import moduleName, { Router } from "next/router";
import { ToastContainer } from "react-toastify";
import NProgress from "nprogress";
import "nprogress/nprogress.css";

import "../../tailwindcss/style.css";

NProgress.configure({});
Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplate", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <ToastContainer position="top-center"></ToastContainer>
    </>
  );
}

export default MyApp;
