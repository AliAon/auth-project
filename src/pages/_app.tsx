import "@/styles/globals.css";
import type { AppProps } from "next/app";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ReduxProvider } from "@/lib/redux/redux-provider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { PagesProgressBar as ProgressBar } from "next-nprogress-bar";
import { SessionProvider } from "next-auth/react";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <ReduxProvider>
      <SessionProvider session={session}>
        <Component {...pageProps} />
      </SessionProvider>
      <ToastContainer />
      <ProgressBar
        height="2px"
        color="#003939"
        options={{ showSpinner: false }}
        shallowRouting
      />
    </ReduxProvider>
  );
}
