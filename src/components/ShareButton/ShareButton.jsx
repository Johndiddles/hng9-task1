import React from "react";
import styles from "./ShareButton.module.css";
import shareButton from "../../assets/share.png";
import mobileNavButton from "../../assets/mobileShare.png";

const ShareButton = () => {
  return (
    <div className={styles.shareButton__wrapper}>
      <a href="/">
        <img
          src={shareButton}
          className={styles.shareButton}
          alt="share button"
        />
      </a>
      <a href="/">
        <img
          src={mobileNavButton}
          className={styles.mobileNavButton}
          alt="navigation button"
        />
      </a>
    </div>
  );
};

export default ShareButton;
