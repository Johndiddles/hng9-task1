import React from "react";
import { Link } from "react-router-dom";
import styles from "./LinksList.module.css";

const SingleLink = ({ name, link, id, subText, blank, useLink }) => {
  return (
    <>
      {useLink ? (
        <Link to={link} id={id} className={styles.links}>
          {name}
        </Link>
      ) : (
        <a
          id={id}
          className={styles.links}
          href={link}
          target={!blank ? "" : "_blank"}
          rel="noreferrer"
          title={subText}
        >
          {name}
          {/* <sub>{subText}</sub> */}
        </a>
      )}
    </>
  );
};

export default SingleLink;
