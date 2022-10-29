import React from "react";
import image from "../../assets/john.png";
import styles from "./ProfilePicture.module.css";

const ProfilePicture = () => {
  return (
    <div className={styles.profileImage__wrapper}>
      <img
        id="profile__img"
        className={styles.profileImage}
        src={image}
        alt="johndiddles"
      />
    </div>
  );
};

export default ProfilePicture;
