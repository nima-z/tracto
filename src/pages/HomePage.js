import { Fragment } from "react";
import Section1 from "../components/sections/section-1/Section1";
import Section2 from "../components/sections/section-2/Section2";
import Section4 from "../components/sections/section-4/Section4";

export default function HomePage() {
  return (
    <Fragment>
      <Section1 />
      <Section2 />
      <Section4 />
    </Fragment>
  );
}
