import { Fragment } from "react";
import Section1 from "../components/sections/section-1/Section1";
import Section2 from "../components/sections/section-2/Section2";

export default function HomePage() {
  return (
    <Fragment>
      <Section1 />
      <Section2 />
    </Fragment>
  );
}
