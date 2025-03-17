import styles from "./Header.module.css";
import NetflixLogo from "./img/Netflix Logo.svg";
export default function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li>Home</li>
          <li className={styles.about}>About</li>
          <li>Cast</li>
          <li>Trailer</li>
        </ul>
      </nav>
      <div>
        <img src={NetflixLogo} alt="NetflixLogo" />
      </div>
    </header>
  );
}
