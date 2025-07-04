"use client";
import Button from "@/components/Button";
import Highlight from "@/components/Highlight/Highlight";
import SectionTitle from "@/components/SectionTitle/SectionTitle";
import { MIN_WIDTH } from "breakpoints";
import styles from "./About.module.css";
import { useTheme } from "@/context/ThemeContext";


interface Props {
    delegated?: any;
}

const About = ({ ...delegated }: Props) => {
    const downloadResume = () => {
        window.open("/resume", "_blank");
    };

    const { aboutUrl, aboutUrlSmall } = useTheme();

    return (
        <div className={styles.about} {...delegated} id="about">
            <div className={styles.aboutme}>
                <SectionTitle side={"left"}>About Me</SectionTitle>
                <p className={styles.description}>
                Hi there! I’m Shantanu Fuke, a Data Engineer with 4+ years of experience in PL/SQL, ETL development, and building scalable data pipelines. 
                I’m currently pursuing my Master’s in Computer Science at Texas A&M University-Kingsville, with a strong focus on cloud data platforms, big data technologies, and analytics solutions. 
                I’m actively seeking full-time roles in Data Engineering and related domains.
                </p>
                <div className={styles.description}>
                    What I Bring to the Table:<br/>
                    <ul className="mt-2 space-y-2 list-inside">
                        <li className="flex items-start">
                            <svg className="w-4 h-4 mt-1 me-2 text-green-500 dark:text-green-400 flex-shrink-0"
                                 aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                 viewBox="0 0 20 20">
                                <path
                                    d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                            </svg>
                            4+ years of professional experience in Data Engineering, specializing in building scalable ETL pipelines, data integration, and database optimization using SQL, PL/SQL, and Python.

                        </li>
                        <li className="flex items-start">
                            <svg className="w-4 h-4 mt-1 me-2 text-green-500 dark:text-green-400 flex-shrink-0"
                                 aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                 viewBox="0 0 20 20">
                                <path
                                    d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                            </svg>
                            Proficient in data engineering tools and frameworks including Apache Spark, Airflow, Hadoop, Snowflake, BigQuery, and cloud platforms like AWS and Azure.
                        </li>
                        <li className="flex items-start">
                            <svg className="w-4 h-4 mt-1 me-2 text-green-500 dark:text-green-400 flex-shrink-0"
                                 aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                 viewBox="0 0 20 20">
                                <path
                                    d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                            </svg>
                            Skilled in developing APIs with Flask/Django, automating workflows with Docker and Kubernetes, and applying ML workflows using TensorFlow, PyTorch, and Keras.
                        </li>

                    </ul>
                </div>
                <Button className={styles.download} onClick={downloadResume}>
                    Download Resume
                </Button>
            </div>
            <picture className={styles.picture}>
                <source media={MIN_WIDTH.desktop} srcSet={aboutUrl}/>
                <source media={MIN_WIDTH.tablet} srcSet={aboutUrlSmall}/>
                <img src={aboutUrl} alt="Shantanu Fuke"/>
            </picture>
        </div>
    );
};

export default About;
