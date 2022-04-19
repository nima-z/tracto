import { Fragment } from "react";
import Section1 from "../components/sections/section-1/Section1";
import Section2 from "../components/sections/section-2/Section2";
import Section3 from "../components/sections/section-3/Section3";
import Section4 from "../components/sections/section-4/Section4";

import styles from "./Homepage.module.css";


export default function HomePage() {
  return (
    <Fragment>
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
    </Fragment>
  );
}
