import Head from "next/head";
import styles from "../styles/Home.module.css";
// import Link from "next/link";
import NavBar from "../components/navbar";
import Typewriter from "typewriter-effect";

import Footer from "../components/footer";
import shared from "../styles/Shared.module.css";

export default function Home() {
  const intros = [
      "a woman in STEM"
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
                                  .pauseFor(250)
                                  .changeDelay(40)
                                  .typeString("Hi! I'm Shifa and I am ")
                                  .typeString(intros[num])
                                  .typeString(".")
                                  .start();
                          }}
                      />
                  </div>

                  <div className={styles.textBox}>
                      <p className="animate__slideInUp">
                          I am passionate about applying technology to all 
                          aspects of our lives. I am especially interested in 
                          the intersection of healthcare, business, and biology with computer science.  
                      </p>
                  </div>
              </div>
              <div className={styles.tabletDiv}>
                  <img
                      src="/Shifa3.jpeg"
                      alt="photo of me"
                      className={styles.photo}
                  />
              </div>
          </div>
          <Footer />
      </div>
  );
}

