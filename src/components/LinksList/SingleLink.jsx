import React from "react";
import styles from "./LinksList.module.css";

const SingleLink = ({ name, link, id }) => {
  return (
    <a
      id={id}
      className={styles.links}
      href={link}
      target="_blank"
      rel="noreferrer"
    >
      {name}
    </a>
  );
};

export default SingleLink;
