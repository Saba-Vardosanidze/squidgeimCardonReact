import styles from "./Card.module.css";
export default function Card({ children }) {
  return <div className={styles.cardBackground}>{children}</div>;
}
