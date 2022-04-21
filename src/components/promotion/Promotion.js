import styles from "./Promotion.module.css";
import H2 from "../ui/H2/H2";
import BodyReg from "../ui/body-reg/BodyReg";
import Subscription from "../ui/Subscription/Subscription";
import { useState } from "react";
import H3 from "../ui/H3/H3";
import { EmojiProvider, Emoji } from "react-apple-emojis";
import emojiData from "react-apple-emojis/src/data.json";

export default function Promotion() {
  const [isSubscribe, setSubscribe] = useState(false);
  function onSubscribe() {
    setSubscribe(true);
  }
  return (
    <div className={styles.container}>
      <img src="/images/promotion.png" alt="circles" />
      <div className={styles.content}>
        <H2>The workplace for remote contracts gigs.</H2>
        <BodyReg>For Choosing the best way of Contract</BodyReg>
        {!isSubscribe && <Subscription onSubscribe={onSubscribe} />}
        {isSubscribe && (
          <div className={styles.textWithEmoji}>
            <H3>Thank you for subscribing!</H3>
            <EmojiProvider data={emojiData}>
              <Emoji name="party-popper" width={16} />
            </EmojiProvider>
          </div>
        )}
      </div>
    </div>
  );
}
