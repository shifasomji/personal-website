import NavBar from "../components/navbar";
import shared from "../styles/Shared.module.css";
import Footer from "../components/footer";
import Head from "next/head";
import styles from "../styles/Projects.module.css";

const projects = [
    {
        name: "The Algorithmic Search Framework",
        description: "Compiled a statistical learning paper that assembles past work on the algorithmic search framework, a unifying theory for machine learning and artificial intelligence.",
        website: "/The Algorithmic Search Framework.pdf",
        tags: ["research"],
    },
    {
        name: "xenoGI",
        description: "Developed a new simulator that evolves sequences over a user-provided phylogenetic tree, maps their origin within a clade of closely related bacteria, allowing for horizontal transfers, genomic scale deletions, duplications, inversions, and amino acid level sequence change.",
        website: "https://link.springer.com/article/10.1186/s12859-023-05410-0",
        tags: ["research"],
    },
    {
        name: "Team Time",
        description:
            "A startup where members of a team can set group alarms for better collaboration and enhanced productivity.",
        website: "https://www.linkedin.com/company/teamtime2020/?viewAsMember=true",
        tags: ["startup"],
    },
    {
        name: "Accurate and Early Detection of Metastatic Breast Cancer",
        description:
            "Designed a CNN to discriminate invasive versus benign breast cancer in histopathological images.",
        website: "/Breast Cancer.pdf",
        tags: ["research"],
    },
    {
        name: "Contactless Identification System of Cognitive Stress",
        description:
            "Designed a low-cost contact-free measurement system of cognitive stress. Achieved 92% recall using two different classifiers in predicting whether a given subject is experiencing cognitive stress",
        website: "/Doppler.pdf",
        tags: ["research"],
    },
    {
        name: "The Effects of Alcohol, Opiates, Cannabis, and Benzodiazepines on Grid Cell Firing",
        description: "Researched the effects of various drugs on the action potential of a cell. Such drugs were found to decrease grid cell firing, resulting in impaired memory and and negatively affecting the brain's navigation system. ",
        website: "/The Effects of Alcohol, Opiates, Cannabis, and Benzodiazepines on Grid Cell Firing.pdf",
        tags: ["research"],
    },
    {
        name: "Domination of Queens on a Hexagonal Chess Board",
        description:
            "Determined the minimum number of queens, referred to as the domination number, necessary to dominate all the cells on chessboards of various sizes",
        website: "/chess.pdf",
        tags: ["research"],
    },
    {
        name: "Islamophobia in Seattle’s High Schools: Role of Gender and Social Class",
        description:
            "Full-year reasearch project on effect of gender differences and socioeconomic background on the extent of Islamophobia faced by teens in Seattle",
        website: "/Islamophobia.pdf",
        tags: ["research"],
    },
];

export default function Projects() {
    return (
        <div className={shared.page}>
            <Head>
                <title>Projects</title>
                <link rel="icon" href="/icon.ico" />
            </Head>
            <NavBar currPage="projects" />

            <p className={shared.titleText}>Projects</p>
            <div
                className={shared.container}
                style={{ flexDirection: "column" }}
            >
                <div className={styles.projectContainer}>
                    {projects.map((project, i) => {
                        return (
                            <div className={styles.project} data-aos="fade-up">
                                <div className={styles.name}>
                                    <a href={project.website} target="_blank">
                                        {project.name}
                                    </a>
                                </div>
                                <div style={{ marginBottom: "3%" }}>
                                    {project.tags.map((tag) => {
                                        const currStyle =
                                            tag == "startup"
                                                ? styles.product
                                                : tag == "design"
                                                ? styles.design
                                                : tag == "research"
                                                ? styles.research
                                                : tag == "classwork"
                                                ? styles.classwork
                                                : styles.dev;
                                        return (
                                            <div
                                                className={[
                                                    currStyle,
                                                    styles.resumeTag,
                                                ].join(" ")}
                                            >
                                                {tag}
                                            </div>
                                        );
                                    })}
                                </div>

                                <div>
                                    <div className={styles.description}>
                                        {project.description}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            <Footer />
        </div>
    );
}