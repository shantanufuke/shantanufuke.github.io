"use client";
import Button from "@/components/Button";
import Highlight from "@/components/Highlight";
import Link from "@/components/Link";
import styles from "./Hero.module.css";

const Hero = () => {
  const scrollToContact = () => {
    const contact = document.getElementById("contact");
    contact!.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className={styles.hero}>
      <p className={styles.text}>
        <Highlight>Hi, My Name is</Highlight>
      </p>
      <h2 className={styles.name}>Shantanu Fuke. &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</h2>
        <h3 className={styles.subText}>I love challenging myself every day
        </h3>
        <p className={styles.description}>
        I’m a Data Engineer with 4+ years of experience in PL/SQL and designing efficient database systems, I am currently pursuing my Master's in Computer Science at, 
            <Link
                href="https://www.tamuk.edu/"
          target="_blank"
          rel="noreferrer noopener"
        >
          <Highlight>Texas A&M University </Highlight>
        </Link>
          with a strong focus on Data Engineering, Software Engineering.
      </p>
      <Button className={styles.callToAction} onClick={scrollToContact}>
        Get In Touch
      </Button>
    </div>
  );
};

export default Hero;
