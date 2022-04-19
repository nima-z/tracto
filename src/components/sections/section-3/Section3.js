import styles from "./Section3.module.css";
import H4 from "../../ui/H4/H4";
import H2 from "../../ui/H2/H2";
import BodyReg from "../../ui/body-reg/BodyReg";

export default function Section3() {
  return (
    <div className={styles.container}>
      <div className={styles.headline}>
        <H4>Helping Digital</H4>
        <div>
          <H2>Talk of the Best Platforms Anywhere</H2>
          <BodyReg>
            The status of a client or freelancer is based on who created the
            contract or who the role is assigned to. In that regard, no separate
            client or freelancer dashboard. Based on one’s status on the
            contract, features would be enabled or hidden on the dashboard.
          </BodyReg>
        </div>
        {/* regbody */}
      </div>
      <div className={styles.features}>
        {/* feature item1 */}
        {/* feature item2 */}
        {/* feature item3 */}
        {/* feature item4 */}
      </div>
    </div>
  );
}
