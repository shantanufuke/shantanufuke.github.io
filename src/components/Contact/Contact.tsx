"use client";
import { useState } from "react";
import Highlight from "@/components/Highlight";
import styles from "./Contact.module.css";
import { DesktopTitle, MobileTitle } from "@/components/SectionTitle";
import Button from "@/components/Button";
export interface IProps {
  delegated?: any;
}

const Contact: React.FC<React.PropsWithChildren<IProps>> = ({
  children,
  ...delegated
}) => {
  const [message, setMessage] = useState("");

  return (
    <div className={styles.contact} {...delegated} id="contact">
      <div className={styles.notepadWrapper}>
        <MobileTitle side="left">Get In Touch</MobileTitle>
        <div className={styles.notepad}>
          <div className={styles.sticky} />
          <textarea
            className={styles.input}
            placeholder="Type your message here..."
            onChange={(e) => setMessage(e.target.value)}
            value={message}
          />
        </div>
      </div>
      <div className={styles.info}>
        <DesktopTitle side="left">Get In Touch</DesktopTitle>
        <p className={styles.message}>
          If you would like to work together or discuss an opportunity for work,
          please use the form or send me an email on{" "}
          <Highlight>shantanufuke1997@gmail.com</Highlight>
        </p>
        <Button
          className={styles.styledButton}
          onClick={() => {
          const encodedMessage = encodeURIComponent(message);
          //const mailtoLink = `mailto:shantanufuke1997@gmail.com?subject=Job Opportunity&body=${encodedMessage}`;
          const gmaillink = `https://mail.google.com/mail/?view=cm&fs=1&to=shantanufuke1997@gmail.com&su=Job Opportunity&body=${encodedMessage}`;
          window.open(gmaillink);
          }}
        >
          Send
        </Button>
      </div>
    </div>
  );
};

export default Contact;
