import { Fragment, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Section1 from "../components/sections/section-1/Section1";
import Section2 from "../components/sections/section-2/Section2";
import Section3 from "../components/sections/section-3/Section3";
import Section5 from "../components/sections/section-5/Section5";
import Section4 from "../components/sections/section-4/Section4";
import Promotion from "../components/promotion/Promotion";

export default function HomePage() {
  const location = useLocation();
  useEffect(() => {
    const element = document.getElementById(location.hash.slice(1));
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);
  return (
    <Fragment>
      {/* <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 /> */}
      <Promotion />
    </Fragment>
  );
}
