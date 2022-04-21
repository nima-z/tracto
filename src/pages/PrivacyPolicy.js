import { Fragment, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Privacy1 from "../components/sections/privacy-1/Privacy1";
import Privacy2 from "../components/sections/privacy-2/Privacy2";
import PromotionSection from "../components/sections/promotion/PromotionSection";

export default function PrivacyPolicy() {
  const location = useLocation();
  useEffect(() => {
    const element = document.getElementById(location.hash.slice(1));
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  return (
    <Fragment>
      <Privacy1 />
      <Privacy2 />
      <PromotionSection marginTop={176} marginBottom={212} />
    </Fragment>
  );
}
