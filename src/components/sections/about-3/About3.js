import H2 from "../../ui/H2/H2";
import BodyReg from "../../ui/body-reg/BodyReg";
import PrimaryButton from "../../ui/primary-button/PrimaryButton";

import styles from "./About3.module.css";
import { Fragment } from "react";

export default function About3() {
  return (
    <Fragment>
      <div className={styles.container}>
        <img src="./images/img01.jpg" alt="laptop" />
        <div className={styles.content}>
          <h4>Helping digital</h4>
          <H2>
            Great People make <br />
            Great Product
          </H2>
          <BodyReg>
            The status of a client or freelancer is based on who created the
            contract or who the role is assigned to. In that regard, no separate
            client or freelancer dashboard. Based on one’s status on the
            contract, features would be enabled or hidden on the dashboard.
          </BodyReg>
          <PrimaryButton>Work With Us</PrimaryButton>
        </div>
      </div>
      <div className={styles.upperImage}>
        <img src="./images/img02.jpg" alt="presentation" />
      </div>
    </Fragment>
  );
}
