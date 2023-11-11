import React from "react";

// import Footer from '../components/Footer/Footer'
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

import { Container } from "./styles";

export const Layout = ({ children }) => {
  return (
    <Container>
      <Header />
      <main>{children}</main>
      <Footer />
    </Container>
  );
};
