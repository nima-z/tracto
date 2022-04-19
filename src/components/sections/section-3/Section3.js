import styles from "./Section3.module.css";
import H4 from "../../ui/H4/H4";
import H2 from "../../ui/H2/H2";
import BodyReg from "../../ui/body-reg/BodyReg";
import FeatureItem from "../../feature-item/FeatureItem";
import Indicator from "../../ui/icons/Indicator";

export default function Section3() {
  return (
    <div className={styles.container}>
      <div>
        <div className={styles.headline}>
          <H4>Helping Digital</H4>
          <div>
            <H2>Talk of the Best Platforms Anywhere</H2>
            <BodyReg>
              The status of a client or freelancer is based on who created the
              contract or who the role is assigned to. In that regard, no
              separate client or freelancer dashboard. Based on one’s status on
              the contract, features would be enabled or hidden on the
              dashboard.
            </BodyReg>
          </div>
        </div>
        <div className={styles.features}>
          <FeatureItem
            icon={<Indicator />}
            header="Contract"
            text="The payment terms, timeline, contract goals, NDA’s, tasks, and everything needed to make sure the work is understood and done."
          />
          <FeatureItem
            icon={<Indicator />}
            header="Pay"
            text="Before contract starts; money is kept till tasks are submitted and work approved"
          />
          <FeatureItem
            icon={<Indicator />}
            header="Contract"
            text="The payment terms, timeline, contract goals, NDA’s, tasks, and everything needed to make sure the work is understood and done."
          />
          <FeatureItem
            icon={<Indicator />}
            header="Approve"
            text="That the job was done as expected and money is released accordingly."
          />
        </div>
      </div>
    </div>
  );
}
