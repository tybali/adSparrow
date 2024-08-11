"use client";
import { nextUtility } from "@/utility";
import { Fragment, useEffect } from "react";
import Footer from "./Footer";
import Header from "./Header";
const NextLayout = ({ header, footer, children, bgBlack, single }) => {
  useEffect(() => {
    console.log(bgBlack);
    if (bgBlack) {
      document.querySelector("body").classList.add("home-5-body-color");
    } else {
      if (
        document.querySelector("body").classList.contains("home-5-body-color")
      ) {
        document.querySelector("body").classList.remove("home-5-body-color");
      }
    }
  }, []);
  useEffect(() => {
    nextUtility.scrollAnimation();
  }, []);

  return (
    <Fragment>
      <Header header={header} single={single} />
      {children}
      <Footer footer={footer} />
    </Fragment>
  );
};
export default NextLayout;
