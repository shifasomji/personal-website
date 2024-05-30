import { linkedinSquare } from "react-icons-kit/fa/linkedinSquare";
import { githubSquare } from "react-icons-kit/fa/githubSquare";
import { envelope } from "react-icons-kit/fa/envelope";
import { filePdfO } from 'react-icons-kit/fa/filePdfO';
import { twitter } from 'react-icons-kit/fa/twitter';
import Icon from "react-icons-kit";
import styles from "../styles/Footer.module.css";
import Typewriter from "typewriter-effect";

const date = new Date();

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <ul className={styles.list}>
                <li className={styles.horizontal}>
                    <a
                        href="https://www.linkedin.com/in/shifasomji/"
                        className={styles.noHighlight}
                        target="_blank"
                    >
                        <Icon icon={linkedinSquare} />
                    </a>
                </li>
                <li className={styles.horizontal}>
                    <a
                        href="https://twitter.com/shifasomji"
                        className={styles.noHighlight}
                        target="_blank"
                    >
                        <Icon icon={twitter} />
                    </a>
                </li>
                <li className={styles.horizontal}>
                    <a
                        href="https://github.com/shifasomji"
                        className={styles.noHighlight}
                        target="_blank"
                    >
                        <Icon icon={githubSquare} />
                    </a>
                </li>
                <li className={styles.horizontal}>
                    <a
                        href="mailto:ssomji@purdue.edu"
                        target="_blank"
                        className={styles.noHighlight}
                    >
                        <Icon icon={envelope} />
                    </a>
                </li>
            </ul>

            <div
                style={{
                    marginLeft: "2.5%",
                    fontStyle: "italic",
                    width: "100%",
                }}
            >
                © {date.getFullYear()} Shifa Somji
            </div>
        </footer>
    );
}