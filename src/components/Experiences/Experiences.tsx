import { ConstrainedTitle } from "@/components/SectionTitle";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import styles from "./Experiences.module.css";
import Image from "next/image";

const Experiences: React.FC = () => {
  return (
    <div className={styles.experiences}>
      <MaxWidthWrapper>
        <ConstrainedTitle side="left">Experiences</ConstrainedTitle>
        <div className={styles.items}>
          <div className={styles.timeline}/>
          <div className={styles.item}>
            <Image
                className={styles.image}
                height={100}
                width={100}
                src="/images/tamuk.png"
                alt="ASU"
            />
            <div className={styles.dotPrimary}>
              <div className={styles.dotCore}/>
            </div>
            <div className={styles.connector}/>
            <div className={styles.info}>
              <Image
                  height={100}
                  width={100}
                  className={styles.mobileImage}
                  src="/images/tamuk.png"
                  alt="ASU"
              ></Image>
              <p className={styles.time}>Jan 2024 - Dec 2024</p>
              <h4 className={styles.company}>Texas A&M University</h4>
              <h4 className={styles.role}>Research Assistant</h4>
              <p className={styles.description}>
                    ⦿ &nbsp; &nbsp; Designed and implemented neural networks for DNA enhancer prediction, achieving a 20% increase in prediction accuracy.<br/><br/>
                    ⦿ &nbsp; &nbsp; Developed a C++ tool to determine sequence similarity, reducing computation time by 40% and increasing similarity
                    measurement accuracy by 10%.<br/><br/>
                    ⦿ &nbsp; &nbsp; Automated the data pipeline using Python, reducing manual processing time by 40%.<br/><br/>
                    ⦿ &nbsp; &nbsp; Utilized Python for data preprocessing, transforming large FASTA files into neural network-compatible formats, boosting model
                    accuracy by 15%.<br/>
              </p>
            </div>
          </div>

          <div className={styles.item}>
            <Image
                height={100}
                width={100}
                className={styles.image}
                src="/images/deloitte.jpeg"
                alt="Aruba Networks"
            ></Image>
            <div className={styles.connector}/>
            <div className={styles.infos}>
              <div className={styles.bullet}>
                <div className={styles.dotPrimary}>
                  <div className={styles.dotCore}/>
                </div>
                <div className={styles.info}>
                  <Image
                      className={styles.mobileImage}
                      height={100}
                      width={100}
                      src="/images/deloitte.jpeg"
                      alt="Aruba Networks"
                  ></Image>
                  <p className={styles.time}>Oct 2021 - July 2023</p>
                  <h4 className={styles.company}>Deloitte Consulting</h4>
                  <h4 className={styles.role}>Oracle PL/SQL Developer</h4>
                  <p className={styles.description}>
                    ⦿ &nbsp; &nbsp; Developed the "Deals to Stock Ledger Interface" in PL/SQL for 
                    Oracle Retail Merchandising Suite, ensuring efficient deal processing and data integrity 
                    in the stock ledger.<br/><br/>
                    ⦿ &nbsp; &nbsp; Optimized data transfer from Google Cloud Platform (GCP) to Oracle RMS with an 
                    automated PL/SQL program, reducing upload time by 40% and improving scalability.<br/>
                  </p>
                </div>
              </div>
              <div className={styles.bullet}>
                <div className={styles.dotSecondary}>
                  <div className={styles.dotCore}/>
                </div>
                <div className={styles.info}>
                  {/* <p className={styles.time}>January 2022 - June 2022</p> */}
                  <h4 className={styles.role}>Oracle Retail Developer</h4>
                  <p className={styles.description}>
                    ⦿ &nbsp; &nbsp; Integrated Oracle RMS with SAP ERP to automate invoice processing, 
                    improving workflow efficiency by 60% and enhancing data accuracy.<br/><br/>
                    ⦿ &nbsp; &nbsp; Led the design of an Oracle Retail Cloud location list creation program, 
                    reducing user time by 70% and improving team performance.<br/>
                  </p>
                </div>
              </div>

              <div className={styles.bullet}>
                <div className={styles.dotSecondary}>
                  <div className={styles.dotCore}/>
                </div>
                <div className={styles.info}>
                  {/* <p className={styles.time}>October 2021 - Dec 2022</p> */}
                  <h4 className={styles.role}>Oracle BI Developer</h4>

                  <p className={styles.description}>
                    ⦿ &nbsp; &nbsp; Developed Oracle BI reports, utilizing SQL to extract data and 
                    generate comprehensive reports, improving accuracy and operational efficiency.<br/>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.item}>
            <Image
                className={styles.image}
                height={100}
                width={100}
                src="/images/tcs.jpeg"
                alt="Stylumia"
            />
            <div className={styles.dotPrimary}>
              <div className={styles.dotCore}/>
            </div>
            <div className={styles.connector}/>
            <div className={styles.info}>
              <Image
                  className={styles.mobileImage}
                  height={100}
                  width={100}
                  src="/images/tcs.jpeg"
                  alt="Stylumia" 
              />
              <p className={styles.time}>April 2019 - October 2021</p>
              <h4 className={styles.company}>Software Developer</h4>
              <h4 className={styles.role}>
                Oracle SQL Developer
              </h4>
              <p className={styles.description}>
                  ⦿ &nbsp; &nbsp; Automated 80% of Coupa purchase orders into Oracle E-Business Suite using PL/SQL, reducing manual entry by 20 hours per week.<br/><br/>
                  ⦿ &nbsp; &nbsp; Streamlined supplier invoice management in Oracle EBS, improving data accuracy by 80% and reducing processing time by 60%.<br/><br/>
                  ⦿ &nbsp; &nbsp; Cut account creation time by 60% through custom PL/SQL automation for user creation and email notifications.<br/><br/>
                  ⦿ &nbsp; &nbsp; Automated supplier attribute updates using Oracle EBS Supplier API, reducing manual efforts by 80% and improving scalability.<br/><br/>
                  ⦿ &nbsp; &nbsp; Designed efficient data models and managed schemas for Oracle EBS integration with optimized DDLs.<br/><br/>
              </p>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default Experiences;
