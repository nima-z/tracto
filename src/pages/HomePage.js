import { Fragment } from "react";
import Section1 from "../components/sections/section-1/Section1";
import Section2 from "../components/sections/section-2/Section2";
import Banner from "../components/banner/Banner";
import Subscription from "../components/ui/Subscription/Subscription";
import styles from "./Homepage.module.css";
import Section3 from "../components/sections/section-3/Section3";
import TestimonialManager from "../components/testimonial/testimonial-manager";

export default function HomePage() {
  return (
    <Fragment>
      <Section1 />
      <Section2 />
      <Section3 />
      <TestimonialManager />
    </Fragment>
  );
}
