import React from "react";
import SingleLink from "./SingleLink";
import styles from "./LinksList.module.css";

const LinksList = () => {
  return (
    <div className={styles.links__wrapper}>
      <SingleLink
        id="contact"
        name="Contact"
        link="/contact"
        blank={false}
        useLink={true}
      />
      <SingleLink
        id="btn__zuri"
        name="Zuri Team"
        link="https://training.zuri.team/"
        subText="Join the Zuri Team"
      />
      <SingleLink
        id="books"
        name="Zuri Books"
        link="http://books.zuri.team"
        subText="This is where you find books about design and coding"
      />
      <SingleLink
        id="book__python"
        name="Python Books"
        link="https://books.zuri.team/python-for-beginners?ref_id=Johndiddles"
        subText="Find books to help you learn python from the bests"
      />
      <SingleLink
        id="pitch"
        name="Background Check for Coders"
        link="https://background.zuri.team"
        subText="We help you to know more about your coder's background"
      />
      <SingleLink
        id="book__design"
        name="Design Books"
        link="https://books.zuri.team/design-rules"
        subText="Learn Desgin from experts"
      />
    </div>
  );
};

export default LinksList;
