import styles from "./item.module.css";

export default function TestimonialItem({ text, author, isPrimary }) {
  const primary = isPrimary ? styles.primary : null;
  return (
    <div className={`${styles.container} ${primary}`}>
      <h2>
        {text ||
          "“A bit like building a house, from floor plans to final coat of paint. Our process is very flexible”"}
      </h2>
      <p>{author || "Julie - Product Designer"}</p>
    </div>
  );
}
