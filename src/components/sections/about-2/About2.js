import styles from "./About2.module.css";
import H4 from "../../ui/H4/H4";
import H2 from "../../ui/H2/H2";
import BodyReg from "../../ui/body-reg/BodyReg";
import FeatureItem from "../../feature-item/FeatureItem";
import Indicator from "../../ui/icons/Indicator";

export default function About2() {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <H4>About Us</H4>
        <H2>
          Talk of the Best <br />
          Platforms Anywhere
        </H2>
      </div>
      <div className={styles.infos}>
        <BodyReg>
          The status of a client or freelancer is based on who created the
          contract or who the role is assigned to. In that regard, no separate
          client or freelancer dashboard. Based on one’s status on the contract,
          features would be enabled or hidden on the dashboard.
        </BodyReg>
        <div className={styles.features}>
          <FeatureItem
            icon={<Indicator />}
            header="Accountability"
            text="The payment terms, timeline, contract goals, NDA’s, tasks, and everything needed to make sure the work is understood and done."
          />
          <FeatureItem
            icon={<Indicator />}
            header="Flexibility"
            text="Before contract starts; money is kept till tasks are submitted and work approved"
          />
        </div>
      </div>
    </div>
  );
}
