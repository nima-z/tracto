import { Fragment } from "react";

import Header from "./header/Header";
import Footer from "./footer/Footer";

export default function Layout(props) {
  return (
    <Fragment>
      <Header />
      <main>{props.children}</main>
      <Footer />
    </Fragment>
  );
}
