import React from "react";
import styles from "./Footer.module.css";

import zuri from "../../assets/zuri.png";
import i4g from "../../assets/I4G.png";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <img
        className={`${styles.footer__img} ${styles.zuri}`}
        src={zuri}
        alt="zuri"
      />
      <div className={styles.footer__text}>HNG Internship 9 Frontend Task</div>
      <img
        className={`${styles.footer__img} ${styles.i4g}`}
        src={i4g}
        alt="i4g"
      />
    </div>
  );
};

export default Footer;
