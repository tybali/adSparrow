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
        {/* <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-P1CLG235SD"
        ></script>

        <script strategy="lazyOnload">
          {` window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-P1CLG235SD');
          `}
          GTM-NQW6CKGZ
        </script> */}

        <meta name="robots" content="all" />
        <meta name="googlebot" content="all" />
        <link rel="canonical" href="https://www.adsparrow.net/" />
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
