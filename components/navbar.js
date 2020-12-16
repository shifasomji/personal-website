import styles from "../styles/Navbar.module.css";
import Link from "next/link";

export default function NavBar({ currPage }) {
    const active = { opacity: 1 };
    const notActive = { opacity: 0.4 };
    return (
        <div className={styles.outerBar}>
            <ul className={styles.listStyle}>
                <Link href="/">
                    <li
                        className={styles.horizontal}
                        style={currPage == "home" ? active : notActive}
                    >
                        Home
                    </li>
                </Link>
                <Link href="/aboutme">
                    <li
                        className={styles.horizontal}
                        style={currPage == "aboutMe" ? active : notActive}
                    >
                        About Me
                    </li>
                </Link>
                <Link href="/news">
                    <li
                        className={styles.horizontal}
                        style={currPage == "news" ? active : notActive}
                    >
                        News
                    </li>
                </Link>
                <Link href="/projects">
                    <li
                        className={styles.horizontal}
                        style={currPage == "projects" ? active : notActive}
                    >
                        Projects
                    </li>
                </Link>
            </ul>
            <hr className={styles.line} />
        </div>
    );
}