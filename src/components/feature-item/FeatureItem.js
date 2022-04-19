import styles from "./FeatureItem.module.css";
import H3 from "../ui/H3/H3";
import BodySmall from "../ui/body-small/BodySmall";
export default function FeatureItem({ icon, header, text }) {
  return (
    <div className={styles.container}>
      <div>{icon}</div>
      <H3>{header}</H3>
      <BodySmall>{text}</BodySmall>
    </div>
  );
}
