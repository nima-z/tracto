import { NavLink } from "react-router-dom";
import styles from "./Navigation.module.css";

export default function Navigation() {
  return (
    <nav className={styles.container}>
      <NavLink to="/">How it Works</NavLink>
      <NavLink to="/about">About Us</NavLink>
      <a href="#testimonial">Testimonials</a>
    </nav>
  );
}
