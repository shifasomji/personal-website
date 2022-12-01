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
                                I'm originally from Seattle, WA and currently a senior computer science major at Harvey Mudd College in Claremont, CA. My current research interests include human-computer interaction and more broadly, the application of machine learning to other fields, like computational biology and cognitive science. I am also passionate about encouraging women to pursue their interests in STEM and giving back to my community.

                                Currently, I am applying to graduate programs to pursue my PhD in human-computer interaction and applied machine learning! 
                            </p>
                            <p>
                                In high school, I founded Chess4Girls, a non-profit organization dedicated to closing the gender gap in chess. 
                                Its mission is to encourage girls to continue playing chess. I did so by hosting motivational workshops for all participating girls at the Washington State Elementary Chess Championship. I also ran a monthly chess strategy session for all girls in King County.
                            </p>
                            <p>
                                In college, I have served as the secretary for the Society of Women Engineers and the co-chair for the Women's Chapter of the Association of Computing Machinery at the Claremont Colleges. Through both of these experiences, I have engaged women and allies of women in computer science and other STEM fields.
                            </p>
                            <p>
                                When I'm not constantly struggling with problem sets 
                                or debugging code, you can find me discovering new music,
                                working out, or playing chess.
                            </p>
                            <p>
                                If you're a student who is building a startup or is also interested in the growing field of machine learning and artificial intelligence, I would absolutely love to hear from you! Feel free to email me at{" "}
                                <a href="mailto:ssomji@g.hmc.edu">
                                    ssomji@g.hmc.edu
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
