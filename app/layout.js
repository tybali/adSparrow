import "@css/animate.css";
import "@css/bootstrap.min.css";
import "@css/font-awesome.css";
import "@css/magnific-popup.css";
import "@css/main.css";
import "@css/meanmenu.css";
import "@css/nice-select.css";
import "@css/swiper-bundle.min.css";
import "./globals.css";
import Head from "next/head";
import { Toaster } from "react-hot-toast";
import AOSProvider from "@/components/AOSProvider";
import { GoogleAnalytics } from "@next/third-parties/google";
import { GoogleTagManager } from "@next/third-parties/google";
// import Preloader from "@/layouts/Preloader";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <meta name="robots" content="all" />
        <meta name="googlebot" content="all" />
        <link
          rel="canonical"
          href="https://www.adsparrow.net/"
          key="canonical"
        />
      </Head>
      <GoogleTagManager gtmId="GTM-NQW6CKGZ" />
      <GoogleAnalytics gaId="G-P1CLG235SD" />
      <body>
        <AOSProvider>
          {/* <Preloader /> */}
          <Toaster position="bottom-center" />
          {children}
        </AOSProvider>
      </body>
    </html>
  );
}
