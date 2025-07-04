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
                    ⦿&nbsp;Built modular Python pipelines to convert large FASTA files into model-ready format, reducing processing time by 60%.<br/><br/>
                    ⦿&nbsp;Applied CNN, RNN, and LSTM models for DNA sequence classification, improving prediction accuracy by 35% over baseline.<br/><br/>
                    ⦿&nbsp;Structured the pipeline for reusability with clear separation of data loading, transformation, and model training stages.<br/><br/>
                    ⦿&nbsp;Developed and optimized C++ code to generate mutated DNA sequences, accelerating synthetic dataset creation by 70%.<br/><br/>
                    ⦿&nbsp;Used Amazon S3 to centralize raw and processed genomic data, streamlining access for preprocessing and training.<br/><br/>
                    ⦿&nbsp;Built a Databricks workflow triggered by DNA file uploads to AWS S3, using PySpark to read sequences and append predictions from a trained Keras model, saving results as a CSV file and reducing manual workload by 80%.<br/>
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
                    ⦿&nbsp;Streamlined GCP to Oracle RMS data transfer using PL/SQL procedures, reducing stock ledger upload time by 40%.<br/><br/>
                    ⦿&nbsp;Built PL/SQL integration to load retail invoices into SAP ERP, improving workflow efficiency and data accuracy by 60%.<br/><br/>
                    ⦿&nbsp;Led development of an Oracle Retail Cloud ETL program to automate location list creation, reducing manual effort by 70%.<br/><br/>
                    ⦿&nbsp;Developed BI Reports for invoices, stock ledger, and deals to enhance insights in the Oracle Retail Suite.<br/><br/>
                    ⦿&nbsp;Replicated Oracle transformations in PySpark/Spark SQL for benchmarking and cloud-readiness testing.<br/><br/>
                    ⦿&nbsp;Simulated PL/SQL batch jobs in Apache Airflow to improve orchestration visibility and recovery.<br/><br/>
                    ⦿&nbsp;Rebuilt legacy Oracle BI logic in Snowflake using modular dbt models as part of a cloud migration initiative.<br/>
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
                  ⦿&nbsp;Built PL/SQL ETL to migrate 80% of Coupa PO data to Oracle EBS, saving 20+ hrs/week via batch automation.<br/><br/>
                  ⦿&nbsp;Automated user creation in Oracle EBS using PL/SQL and email integration, improving onboarding efficiency by 60%.<br/><br/>
                  ⦿&nbsp;Enhanced Oracle Forms/Reports and applied performance tuning to support high-volume transactions.<br/><br/>
                  ⦿&nbsp;Scheduled and monitored data load jobs (invoices, POs, users) using Control-M for timely execution.<br/><br/>
                  ⦿&nbsp;Simulated Control-M workflows in Apache Airflow to assess orchestration, dependencies, and alerting for cloud readiness.<br/><br/>
                  ⦿&nbsp;Prototyped Oracle flat-file ingestion using Azure Data Factory to simulate cloud-native orchestration.<br/>
              </p>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default Experiences;
