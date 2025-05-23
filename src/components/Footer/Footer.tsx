"use client"
import styles from "./Footer.module.css";
import React, {useEffect, useState} from "react";
import FormattedIcon from "../Icons/formattedIcon";
import PropTypes from "prop-types";

type props = React.ComponentProps<"footer">;

const Footer = ({ ...delegated }) => {
    const [githubInfo, setGitHubInfo] = useState({
        stars: null,
        forks: null,
    });

    useEffect(() => {
        fetch('https://api.github.com/repos/shantanufuke/shantanufuke.github.io')
            .then(response => response.json())
            .then(json => {
                const { stargazers_count, forks_count } = json;
                setGitHubInfo({
                    stars: stargazers_count,
                    forks: forks_count,
                });
            })
            .catch(e => console.error(e));
    }, []);

    return (
        <div className={styles.footer}>
            <a className={styles.styledgithublink}
                target="_blank"
                rel="nofollow noopener noreferrer">
                <div>
                </div>
                {githubInfo.stars && githubInfo.forks && (
                    <div className={styles.styledgithubinfo}>
              <span>
                {/* <FormattedIcon  name="Star" /> */}
                {/* <span>&nbsp; {githubInfo.stars} </span> */}
              </span>
                        <span>
                <FormattedIcon name="Fork" />
                <span>
                    {/* &nbsp; {githubInfo.forks}  */}
                    
                </span>
              </span>
                    </div>
                )}
            </a>
        </div>
    );
};

Footer.propTypes = {
    githubInfo: PropTypes.object,
};

export default Footer;
