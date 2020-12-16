import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import NavBar from "../components/navbar";
import Typewriter from "typewriter-effect";

import Footer from "../components/footer";
import shared from "../styles/Shared.module.css";

export default function Home() {
  const intros = [
      "debugging code",
      "analyzing data",
      "discovering projects",
      "watching shows",
      "listening to music",
      "playing chess"
  ];

  const num = Math.floor(Math.random() * intros.length);

  return (
      <div className={shared.page}>
          <Head>
              <title>Shifa Somji</title>
              <link rel="icon" href="/icon.ico" />
          </Head>
          <NavBar />
          <div
              className={[shared.container, styles.container].join(" ")}
              data-aos="zoom-in"
              data-aos-duration="1000"
          >
              <div>
                  <div className={styles.title}>
                      <Typewriter
                          onInit={(typewriter) => {
                              typewriter
                                  .pauseFor(500)
                                  .typeString("Hi! I'm Shifa and I'm ")
                                  .typeString(intros[num])
                                  .start();
                          }}
                      />
                  </div>

                  <div className={styles.textBox}>
                      <p className="animate__slideInUp">
                          I am a woman in STEM, passionate about applying technology to all 
                          aspects of our lives. I am especially interested in 
                          the intersection of medicine and business 
                          with computer science.  
                      </p>
                  </div>
              </div>
              <div className={styles.tabletDiv}>
                  <img
                      src="/Shifa.jpg"
                      alt="photo of me"
                      className={styles.photo}
                  />
                  <div
                      className={styles.oval}
                      style={{ margin: "auto" }}
                  ></div>
              </div>
          </div>
          <Footer />
      </div>
  );
}

