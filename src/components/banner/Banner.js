import H4 from "../ui/H4/H4";
import H1 from "../ui/H1/H1";
import BodyReg from "../ui/body-reg/BodyReg";
import styles from "./Banner.module.css";

export default function Banner({ header, text, children }) {
  return (
    <div className={styles.container}>
      <img src="/images/circles.png" alt='circles'/>
      <div className="center">
        <H4>{header}</H4>
        <H1>{children}</H1>
        <BodyReg>{text}</BodyReg>
      </div>
    </div>
  );
}
