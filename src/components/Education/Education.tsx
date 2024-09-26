import College from "@/components/College";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { ConstrainedTitle } from "@/components/SectionTitle";
import styles from "./Education.module.css";

const COLLEGES = [
    {
        degree: "Master of Science in Computer Science",
        school: "Texas A&M University",
        courses: [
            "Database Systems",
            "Analysis of Algorithms",
            "Foundation of Data Science",
            "Cloud Computing",
            "Artificial Intelligence",
            "Application of Neural Networks",
        ],
        start: 2023,
        end: 2025,
        gpa: "4.0",
        imgSrc: "/images/tamuk-large.png",
    },
    {
        degree: "Bachelor of Technology",
        school: "Government College of Engineering Amravati",
        courses: [
            "Software Engineering",
            "Microprocessor & Microcontrollers",
            "Image Processing",
            "Computer Networks",
            "Operating Systems",
        ],
        start: 2015,
        end: 2019,
        gpa: "3.74",
        imgSrc: "/images/gcoea.png",
    },
];

const Education: React.FC = () => {
  return (
    <div className={styles.education}>
      <MaxWidthWrapper>
        <ConstrainedTitle side="left">Education</ConstrainedTitle>
        <div className={styles.collegeList}>
          <College {...COLLEGES[0]} side="left" />
          <College {...COLLEGES[1]} side="right" />
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default Education;
