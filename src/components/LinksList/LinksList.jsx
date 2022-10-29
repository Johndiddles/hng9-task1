import React from "react";
import SingleLink from "./SingleLink";
import styles from "./LinksList.module.css";

const LinksList = () => {
  return (
    <div className={styles.links__wrapper}>
      <SingleLink
        id=""
        name="Twitter Profile"
        link="https://twitter.com/DiddlesCode"
      />
      <SingleLink
        id="btn__zuri"
        name="Zuri Team"
        link="https://training.zuri.team/"
      />
      <SingleLink id="books" name="Zuri Books" link="http://books.zuri.team " />
      <SingleLink
        id="book__python"
        name="Python Books"
        link="https://books.zuri.team/python-for-beginners?ref_id=Johndiddles"
      />
      <SingleLink
        id="pitch"
        name="Background Check for Coders"
        link="https://background.zuri.team"
      />
      <SingleLink
        id="book__design"
        name="Design Books"
        link="https://books.zuri.team/design-rules"
      />
    </div>
  );
};

export default LinksList;
