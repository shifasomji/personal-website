import Footer from "../components/footer";
import NavBar from "../components/navbar";
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";

import styles from "../styles/News.module.css";
import Head from "next/head";

import shared from "../styles/Shared.module.css";

import { flask } from 'react-icons-kit/fa/flask'
import { clockO } from 'react-icons-kit/fa/clockO'
import { users } from "react-icons-kit/fa/users";
import { certificate } from 'react-icons-kit/fa/certificate'
import { briefcase } from 'react-icons-kit/fa/briefcase'
import { laptop } from 'react-icons-kit/fa/laptop'
import { home } from "react-icons-kit/fa/home";
import { book } from "react-icons-kit/fa/book";
import { search } from "react-icons-kit/fa/search";
import { desktop } from "react-icons-kit/fa/desktop"
import {truck} from 'react-icons-kit/fa/truck'
import Icon from "react-icons-kit";

const news = [
    {
        date: "Aug 2022 - Dec 2022",
        title: "Project Manager",
        company: "FedEx",
        website: "https://www.fedex.com/en-us/home.html",
        bodyText: "Project Manager for computer science clinic project with FedEx about modeling autonomous-vehicle deliverability. Working in a team of five students to create a model to determine the necessary factors for autonomous vehicle delivery and provide an interpretable decision for FedEx as to which packages to deliver using AVs. As project manager, I plan and moderate meetings, create agendas, coordinate with the FedEx liaisons, and assign tasks and team-members within the overall project.",
        logo: "fedex", 
    },
    {
        date: "May 2022 - Aug 2022",
        title: "SWE Intern",
        company: "Meta",
        website: "https://www.meta.com/",
        bodyText: "Interned on the Curated Ads Data (CAD) team, responsible for building the data platform to enable transparency, control, and purpose in FB advertisements. Created a system that intelligently identified duplicate Curated Data Sources (CDS) requests for curated ads. Using my system, 20% of curated requests were identified as duplicates, significantly improving curation throughput.",
        logo: "promys",
    },
    {
        date: "Sept 2020 - Present",
        title: "Business Development Manager (HMC)",
        company: "Randall Lewis Center for Innovation and Entrepreneurship",
        website: "https://rl-cie.cmc.edu/leadership-team/",
        bodyText:
            "Accepted into the RLCIE Fellows Program at Claremont McKenna to further understand how to be an innovative entrepreneur. Joined the Student Leadership team as the Community Manager and Business Development Manager for Harvey Mudd to focus on engaging Harvey Mudd students for the RLCIE events, Fellows Program, and Startup Marketplace.",
        logo: "cie",
    },
    {
        date: "Sept 2020 - Present",
        title: "Grutor",
        company: "Computer Science Department",
        website: "",
        bodyText:
            "Grutored for various CS classes, which involves holding weekly sessions to help students and grade homework. Grutored for CS60 (Principles of Computer Science, Fall 20), CS70 (Data Structures, Spring 21), CS181AA (Software Engineering, Fall 21) and CS131 (Programming Languages, Spring and Fall 22). Will be the Head Grutor for CS131 in Spring 23.",
        logo: "cie",
    },
    {
        date: "Jan 2020 - Present",
        title: "Researcher",
        company: "AMISTAD Lab",
        website: "https://www.cs.hmc.edu/~montanez/amistad.html",
        bodyText:
            "Researcher in Professor Montanez's AMISTAD Lab. Worked on the Algorithmic Search Framework team and currently on the Mutable Architectures and Mutational Neighborhoods team.",
        logo: "amistad",
    },
    {
        date: "May 2021 - May 2022",
        title: "Co-Chair",
        company: "WACM",
        website: "https://women.acm.org/",
        bodyText:
            "The purpose of the Women’s Chapter of the Association of Computing Machinery at Harvey Mudd is to engage women in computer science through the Claremont colleges through events and networking to create a strong community. We plan events for students to network with companies, professors, and other students, create a safe space for women in computer science to discuss their experiences, and engage women and allies of women in computer science and other STEM fields.",
        logo: "wacm",
    },
    {
        date: "May 2021 - Aug 2021",
        title: "Researcher",
        company: "Bush Lab",
        website: "https://sites.google.com/a/g.hmc.edu/bushlab/?pli=1",
        bodyText: "Developed a new simulator that evolves sequences over a user-provided phylogenetic tree to test xenoGI, a software package that identifies genomic islands, maps their origin within a clade of closely related bacteria while allowing for horizontal transfer of novel genes as well as for genomic scale deletions, duplications and inversions, and amino acid level sequence change. Such information is valuable because it helps us understand the adaptive path that has produced living species.",
        logo: "school",
    },
    {
        date: "Sept 2020 - May 2021",
        title: "Secretary",
        company: "Society of Women Engineers",
        website: "https://hmcswe.weebly.com/",
        bodyText:
            "As the secretary of the Society of Women Engineers, I work together with the other officers to plan events, including a Q&A with female CS/Engineering Professors and a panel with Mudd alumni",
        logo: "community",
    },
    {
        date: "June 2020",
        title: "Student",
        company: "Technology Entrepreneurship: Lab to Market",
        website: "https://www.edx.org/course/technology-entrepreneurship-lab-to-market",
        bodyText:
            "Completed this course from Harvard University to understand how entrepreneurs build successful businesses by moving technology from lab to market",
        logo: "harvardx",
    },
    {
        date: "May 2020 - Aug 2020",
        title: "Co-Founder",
        company: "Team Time",
        website: "https://www.linkedin.com/company/teamtime2020/?viewAsMember=true",
        bodyText:
            "Co-founded TeamTime, a startup where members of a team can set group alarms for better collaboration and enhanced productivity",
        logo: "teamtime",
    },
    {
        date: "Aug 2019 - Present",
        title: "Student",
        company: "Harvey Mudd",
        website: "https://www.hmc.edu/about-hmc/fast-facts/",
        bodyText:
            "Started at Harvey Mudd where I am majoring in Computer Science with a concentration in Cognitive Science",
        logo: "school",
    },
    {
        date: "June 2018 - Aug 2018",
        title: "RISE Scholar",
        company: "Boston University",
        website: "https://www.bu.edu/summer/high-school-programs/rise-internship-practicum/practicum-track/",
        bodyText:
            "Through the Research in Science and Engineering program, I researched the effects of alcohol, opiates, cannabis, and benzodiazepines on the action potential of a cell",
        logo: "rise",
    },
    {
        date: "June 2017 - Aug 2017",
        title: "Student Researcher",
        company: "PROMYS",
        website: "https://promys.org/",
        bodyText:
            "Through the Program in Mathematics for Young Scholars, I researched the Fibonacci and Lucas Sequences and their role in many patterns in nature",
        logo: "promys",
    },
];

const iconMap = {
    amistad: <Icon icon={search} className={styles.icon} />,
    wacm: <Icon icon={desktop} className={styles.icon} />,
    school: <Icon icon={book} className={styles.icon} />,
    promys: <Icon icon={laptop} className={styles.icon} />,
    rise: <Icon icon={flask} className={styles.icon} />,
    cie: <Icon icon={briefcase} className={styles.icon} />,
    teamtime: <Icon icon={clockO} className={styles.icon} />,
    community: <Icon icon={users} className={styles.icon} />,
    harvardx: <Icon icon={certificate} className={styles.icon} />,
    fedex: <Icon icon={truck} className={styles.icon} />,
};

export default function News() {
    return (
        <div className={shared.page}>
            <Head>
                <title>News</title>
                <link rel="icon" href="/icon.ico" />
            </Head>
            <NavBar currPage="news" />
            <p className={shared.titleText}>News</p>
            <div
                className={shared.container}
                style={{ flexDirection: "column" }}
            >

                <VerticalTimeline
                    layout="1-column-left"
                    className={styles.timeline}
                >
                    {news.map((newsItem, i) => {
                        const currColor = i % 2 == 0 ? "#FF9AA2" : "#C7CEEA";
                        const currIcon = iconMap[newsItem.logo];
                        return (
                            <VerticalTimelineElement
                                className="vertical-timeline-element--work"
                                contentStyle={{
                                    boxShadow: "5px 5px",
                                    borderRadius: "10px",
                                    border: "solid",
                                }}
                                contentArrowStyle={{
                                    borderRight: "12px solid " + currColor,
                                }}
                                date={newsItem.date}
                                iconStyle={{
                                    background: currColor,
                                    color: "#fff",
                                }}
                                key={i}
                                icon={currIcon}
                            >
                                <h3 className="vertical-timeline-element-title">
                                    <a href={newsItem.website} target="_blank">
                                        {newsItem.company}
                                    </a>
                                </h3>
                                <h4
                                    className="vertical-timeline-element-subtitle"
                                    style={{ fontStyle: "italic" }}
                                >
                                    {newsItem.title}
                                </h4>
                                <p style={{ fontFamily: "Montserrat" }}>
                                    {newsItem.bodyText}
                                </p>
                            </VerticalTimelineElement>
                        );
                    })}
                </VerticalTimeline>
            </div>
            <Footer />
        </div>
    );
}
