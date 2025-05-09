import { ConstrainedTitle } from "@/components/SectionTitle";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import styles from "./Experiences.module.css";
import Image from "next/image";

const Experiences: React.FC = () => {
  return (
    <div className={styles.experiences} id="experiences">
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
              <h4 className={styles.role}>Graduate Research Assistant</h4>
              <p className={styles.description}>
                    ⦿&nbsp;Utilized Python for data preprocessing, transforming large FASTA files into neural network-compatible formats.<br/><br/>
                    ⦿&nbsp;Implemented neural networks for bioinformatics applications using deep learning techniques to analyze genomic data.<br/><br/>
                    ⦿&nbsp;Developed and optimized C++ code to generate mutated DNA sequences for training data preparation.<br/><br/>
                    ⦿&nbsp;Processed large-scale genomic datasets using Apache Spark, enhancing data processing efficiency and accelerating large-scale sequence analysis.<br/>
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
                  <h4 className={styles.role}>Data Engineer | Oracle PL/SQL Developer</h4>
                  <p className={styles.description}>
                    ⦿&nbsp;Automated data transfer from GCP to Oracle RMS using PL/SQL, transforming files and loading into stock ledger tables, cutting upload time by 40%.<br/><br/>
                    ⦿&nbsp;Developed a PL/SQL integration to load Oracle Retail Suite invoices into SAP ERP, improving workflow efficiency and data accuracy by 60%.<br/><br/>
                    ⦿&nbsp;Led development of an Oracle Retail Cloud location list creation program, automating ETL of user-uploaded data into Oracle Retail tables and reducing manual creation time by 70%.<br/><br/>
                    ⦿&nbsp;Created BI Reports to present essential data on invoices, stock ledger, and deals, enhancing insights within the Oracle Retail Suite ecosystem.<br/>
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
              <h4 className={styles.company}>Tata Consultanccy Services</h4>
              <h4 className={styles.role}>Data Engineer | Oracle PL/SQL Developer</h4>
              <p className={styles.description}>
                  ⦿&nbsp;Designed robust PL/SQL ETL processes to migrate 80% of Coupa purchase order data into Oracle EBS, automating batch loads and saving 20+ hours/week in manual effort.<br/><br/>
                  ⦿&nbsp;Built automated PL/SQL pipelines for supplier invoice ingestion in Oracle EBS, improving data accuracy by 80% and cutting processing time by 60%.<br/><br/>
                  ⦿&nbsp;Designed a PL/SQL-based data workflow to automate user provisioning in Oracle EBS, integrating with email services to streamline notifications and improve onboarding efficiency by 60%.<br/><br/>
                  ⦿&nbsp;Maintained and enhanced Oracle Forms and Reports, applying advanced debugging and performance tuning techniques to support high-volume transaction processing and improve system reliability.<br/><br/>
                  ⦿&nbsp;Utilized Control-M to schedule and monitor critical data load jobs, ensuring timely and reliable execution of invoice, purchase order, and user data workflows.<br/>
              </p>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default Experiences;
