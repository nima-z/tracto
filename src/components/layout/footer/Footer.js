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
        <p>2020</p>
        <p>all rights</p>
        <div className={styles.icons}>
          <Facebook />
          <Instagram />
          <Twitter />
        </div>
      </div>
      <div className={styles.links}>
        <div className={styles.link}>
          <h3>Usecases</h3>
          <Link to="/er">Contract Creation</Link>
          <Link to="/er">Contract Negotiation</Link>
          <Link to="/er">Escrow Wallet</Link>
          <Link to="/er">Task Management</Link>
          <Link to="/er">Service Integrations</Link>
        </div>
        <div className={styles.link}>
          <h3>People</h3>
          <Link to="/er">Developers</Link>
          <Link to="/er">Freelancers</Link>
          <Link to="/er">Clients</Link>
          <Link to="/er">Product Manager</Link>
        </div>
        <div className={styles.link}>
          <h3>People</h3>
          <Link to="/er">Terms of Services</Link>
          <Link to="/er">Privacy Policy</Link>
        </div>
      </div>
    </footer>
  );
}
