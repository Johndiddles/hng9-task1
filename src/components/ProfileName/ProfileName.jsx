import React from "react";
import styles from "./ProfileName.module.css";

const ProfileName = ({ name, id }) => {
  return (
    <div
      id={id}
      className={`${styles.profile__name} ${
        id === "slack" ? styles.hidden : ""
      }`}
    >
      {name}
    </div>
  );
};

export default ProfileName;
