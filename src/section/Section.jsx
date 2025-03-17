import styles from "./Section.module.css";
import squidgameLogo from "./img/SquidGameLogo.png";
import soldier from "./img/squidgameSoldier.png";
import coock from "./img/coock.png";
export default function Section() {
  return (
    <div className={styles.sectionMainContainer}>
      <div className={styles.halfPartOfSection}>
        <img src={squidgameLogo} alt="Squid Game Logo" />
        <div className={styles.description}>
          <img className={styles.coock} src={coock} />
          <p>
            Life is like a game, there are many players. If you don’t play with
            them, they’ll play with you...
          </p>
        </div>
        <p className={styles.trending}>Trending #1</p>
        <button className={styles.watchButton}>Continue Watching</button>
      </div>
      <img src={soldier} />
    </div>
  );
}
