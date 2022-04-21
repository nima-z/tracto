import { useEffect, useState } from "react";
import styles from "./ProgressBar.module.css";

export default function ProgressBar() {
  const [scroll, setScroll] = useState(0);

  function progressBarHandler() {
    const totalScroll = document.documentElement.scrollTop;
    const windowHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scroll = `${totalScroll / windowHeight}`;

    setScroll(scroll);
  }

  useEffect(() => {
    window.addEventListener("scroll", progressBarHandler);
    return () => window.removeEventListener("scroll", progressBarHandler);
  });
  return (
    <div className={styles.container}>
      <div
        className={styles.progressBar}
        style={{ transform: `scale(${scroll}, 1)` }}
      ></div>
    </div>
  );
}
