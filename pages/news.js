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
import Icon from "react-icons-kit";

const news = [
    {
        date: "Jan 2020 - Present",
        title: "Researcher",
        company: "AMISTAD Lab",
        website: "https://www.cs.hmc.edu/~montanez/amistad.html",
        bodyText:
            "Began work with Professor Montanez's AMISTAD Lab. Currently on the Algorithmic Search Framework team.",
        logo: "amistad",
    },
    {
        date: "Sept 2020 - Present",
        title: "Fellow",
        company: "Center for Innovation and Entrepreneurship",
        website: "https://rl-cie.cmc.edu/about/",
        bodyText:
            "Accepted into the CIE Fellows Program at Claremont McKenna to further understand how to be an innovative entrepreneur",
        logo: "cie",
    },
    {
        date: "Sept 2020 - Present",
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
        date: "May 2020 - Present",
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
    school: <Icon icon={book} className={styles.icon} />,
    promys: <Icon icon={laptop} className={styles.icon} />,
    rise: <Icon icon={flask} className={styles.icon} />,
    cie: <Icon icon={briefcase} className={styles.icon} />,
    teamtime: <Icon icon={clockO} className={styles.icon} />,
    community: <Icon icon={users} className={styles.icon} />,
    harvardx: <Icon icon={certificate} className={styles.icon} />,
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
