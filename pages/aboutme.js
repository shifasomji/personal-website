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
                                I'm originally from Seattle, WA and currently attending 
                                Harvey Mudd College in Claremont, CA (although with the current 
                                COVID times, I am back in the rainy city of Seattle!). My research interests 
                                include deep learning analysis of histopathological images and 
                                predicting the presence of cognitive stress in a patient. 
                                Recently, I am also interested in thinking about the theoretical 
                                aspect of machine learning, with more updates coming soon!
                                I also care about encouraging women to pursue their interests
                                in STEM and giving back to my community.
                            </p>
                            <p>
                                In high school, I founded Chess4Girls, a non-profit organization dedicated to 
                                closing the gender gap in chess. 
                                Its mission is to encourage girls to continue playing chess. I did so by hosting
                                motivational workshops for all participating girls at the 
                                Washington State Elementary Chess Championship. I also ran a monthly chess 
                                strategy session for all girls in King County.
                            </p>
                            <p>
                                Other things of interest to me are 
                                learning how to create successful 
                                startups, the history of language, 
                                the intersection of business 
                                and technology, all genres of music, 
                                food, chess, and tv shows.
                            </p>
                            <p>
                                When I'm not constantly struggling with problem sets 
                                or debugging code, 
                                you can find me discovering new music,
                                working out, or playing chess.
                            </p>
                            <p>
                                If you're a student who is building a startup 
                                or is also interested in the growing field of 
                                machine learning and artificial intelligence, 
                                I would absolutely love to hear from you! 
                                Feel free to
                                email me at{" "}
                                <a href="mailto:ssomji@hmc.edu">
                                    ssomji@hmc.edu
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
