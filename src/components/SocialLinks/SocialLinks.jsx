import React from "react";
import styles from "./SocialLinks.module.css";
import slack from "../../assets/slack.png";
import github from "../../assets/github.png";

const SocialLinks = () => {
  return (
    <div className={styles.socialLinks__wrapper}>
      <a href="https://slack.com">
        <img src={slack} alt="slack" />
      </a>
      <a href="https://github.com/Johndiddles/hng9-task1.git">
        <img src={github} alt="slack" />
      </a>
    </div>
  );
};

export default SocialLinks;
