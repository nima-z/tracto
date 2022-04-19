import H2 from "../../ui/H2/H2";
import H4 from "../../ui/H4/H4";
import BodyReg from "../../ui/body-reg/BodyReg";
import PrimaryButton from "../../ui/primary-button/PrimaryButton";

import styles from "./Section4.module.css";

export default function Section4() {
  return (
    <section className={styles.container}>
      <div className={styles.title}>
        <H2>
          Best Solutions & <br /> Values for your Work
        </H2>
        <p>
          The status of a client or freelancer is <br /> based on who created
        </p>
      </div>
      <div className={styles.block}>
        <div className={styles.content}>
          <h4>Helping digital</h4>
          <H2>
            With Clear <br />
            agreements.
          </H2>
          <BodyReg>
            No unclear, un-ending, and un-defined work or task, know exactly
            what’s expected.
          </BodyReg>
          <PrimaryButton>Get Started</PrimaryButton>
        </div>
        <img src="./images/SCS2.png" alt="agreement" />
      </div>
      <div className={styles.block}>
        <img src="./images/SCS2.png" alt="agreement" />
        <div className={styles.content}>
          <h4>Helping digital</h4>
          <H2>
            Track work progress <br />
            and velocity.
          </H2>
          <BodyReg>
            No unclear, un-ending, and un-defined work or task, know exactly
            what's expected.
          </BodyReg>
          <PrimaryButton>Get Started</PrimaryButton>
        </div>
      </div>
      <div className={styles.block}>
        <div className={styles.content}>
          <h4>Helping digital</h4>
          <H2>
            Clients and <br /> freelancers money <br /> secured.
          </H2>
          <BodyReg>
            Before work starts, payment is made into the contract. Money is only
            released when work has been done and approved.
          </BodyReg>
          <PrimaryButton>Get Started</PrimaryButton>
        </div>
        <img src="./images/SCS1.png" alt="agreement" />
      </div>
    </section>
  );
}
