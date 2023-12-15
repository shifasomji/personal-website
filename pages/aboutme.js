import NavBar from "../components/navbar";
import styles from "../styles/AboutMe.module.css";
import shared from "../styles/Shared.module.css";
import Head from "next/head";
import Typewriter from "typewriter-effect";

import Footer from "../components/footer";

export default function AboutMe() {
    return (
        <div className={shared.page}>
            <Head>
                <title>Shifa Somji</title>
                <link rel="icon" href="/icon.ico" />
            </Head>
            <NavBar currPage="aboutMe" />
            <img
                src="/Graduation.jpg"
                alt="grad photo"
                className={styles.photo}
            />
            <div>
                <p className={shared.titleText}>About Me</p>
                <div
                    className={[shared.container, styles.newContainer].join(
                        " "
                    )}
                >
                    <div style={{ marginLeft: "2%" }} data-aos="fade-left">
                        <div
                            style={{
                                marginTop: "5%",
                                fontSize: "18px",
                            }}
                        >
                            <p>
                                I'm originally from Seattle, WA and currently a first-year PhD student at Purdue. I recently graduated from Harvey Mudd College in May with a B.S. in Computer and Cognitive Science. My current interests lie in full-stack robotics with a focus on enabling robots to interact with the physical world safely, fluently and naturally. I am also passionate about encouraging women to pursue their interests in STEM and giving back to my community.
                            </p>
                            <p>
                                I am the CEO of Chess4Girls, a non-profit organization dedicated to closing the gender gap in chess. In college, I served as the secretary for the Society of Women Engineers and the co-chair for the Women's Chapter of the Association of Computing Machinery at the Claremont Colleges. Through both of these experiences, I have engaged women and allies of women in computer science and other STEM fields.
                            </p>
                            <p>
                                In my free time, I enjoy listening to music, reading, and playing chess. Check out my <a href="https://open.spotify.com/user/maycure">Spotify</a> for my playlists and my <a href="https://www.goodreads.com/user/show/166951384-shifa">Goodreads</a> to see what I'm reading currently!
                            </p>
                            <p>
                                I would love to hear from you! Feel free to email me at{" "}
                                <a href="mailto:ssomji@purdue.edu">
                                    ssomji@purdue.edu
                                </a>
                                .
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
