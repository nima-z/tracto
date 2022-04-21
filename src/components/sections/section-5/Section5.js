import H2 from "../../ui/H2/H2";
import H4 from "../../ui/H4/H4";
import styles from "./Section5.module.css";
import TestimonialManager from "../../testimonial/testimonial-manager";
export default function Section4() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <H4>Helping Digital</H4>
        <H2>What Users Say About Us</H2>
      </div>

      <TestimonialManager />
    </div>
  );
}
