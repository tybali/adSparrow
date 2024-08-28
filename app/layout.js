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
// import Preloader from "@/layouts/Preloader";

export const metadata = {
  robots: {
    index: true,
    googleBot: {
      index: true,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>
          The Ultimate Guide to Choosing the Best Digital Marketing Company for
          Your Business
        </title>
        <meta name="robots" content="all" />
        <meta name="googlebot" content="all" />
        <link rel="canonical" href="https://www.adsparrow.net/" />
      </Head>
      <body>
        {/* <Preloader /> */}
        <Toaster position="bottom-center" />
        {children}
      </body>
    </html>
  );
}
