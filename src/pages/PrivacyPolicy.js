import { Fragment } from "react";
import Privacy1 from "../components/sections/privacy-1/Privacy1";
import Privacy2 from "../components/sections/privacy-2/Privacy2";
import PromotionSection from "../components/sections/promotion/PromotionSection";

export default function PrivacyPolicy() {
  return (
    <Fragment>
      <Privacy1 />
      <Privacy2 />
      <PromotionSection marginTop={176} marginBottom={212} />
    </Fragment>
  );
}
