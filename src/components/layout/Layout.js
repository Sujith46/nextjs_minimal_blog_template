"use client";

import Footer from "../footer/Footer";

const { default: Header } = require("../header/Header");

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
