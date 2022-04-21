import { Fragment } from "react";
import Section1 from "../components/sections/section-1/Section1";
import Section2 from "../components/sections/section-2/Section2";
import Section3 from "../components/sections/section-3/Section3";
import Section5 from "../components/sections/section-5/Section5";

export default function HomePage() {
  return (
    <Fragment>
      <Section1 />
      <Section2 />
      <Section3 />
      <Section5 />
    </Fragment>
  );
}
