import React from "react";
import styles from "./LinksList.module.css";

const SingleLink = ({ name, link, id, subText }) => {
  return (
    <a
      id={id}
      className={styles.links}
      href={link}
      target="_blank"
      rel="noreferrer"
    >
      {name}
      <sub>{subText}</sub>
    </a>
  );
};

export default SingleLink;
