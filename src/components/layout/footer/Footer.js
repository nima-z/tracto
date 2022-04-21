import styles from "./Footer.module.css";
import Logo from "../../ui/icons/Logo";
import { Link } from "react-router-dom";
import Facebook from "../../ui/icons/Facebook";
import Instagram from "../../ui/icons/Instagram";
import Twitter from "../../ui/icons/Twitter";

export default function Footer() {
  return (
    <footer className={styles.container}>
      <div className={styles.info}>
        <Logo />
        <p>@2021 Tracto Inc.</p>
        <p>All Rights Reserved</p>
        <div className={styles.icons}>
          <Facebook />
          <Instagram />
          <Twitter />
        </div>
      </div>
      <div className={styles.links}>
        <div className={styles.link}>
          <h3>Usecases</h3>
          <Link to="/">Contract Creation</Link>
          <Link to="/">Contract Negotiation</Link>
          <Link to="/">Escrow Wallet</Link>
          <Link to="/">Task Management</Link>
          <Link to="/">Service Integrations</Link>
        </div>
        <div className={styles.link}>
          <h3>People</h3>
          <Link to="/">Developers</Link>
          <Link to="/">Freelancers</Link>
          <Link to="/">Clients</Link>
          <Link to="/">Product Manager</Link>
        </div>
        <div className={styles.link}>
          <h3>Company</h3>
          <Link to="/">Terms of Services</Link>
          <Link to="/privacy#header">Privacy Policy</Link>
        </div>
      </div>
    </footer>
  );
}
