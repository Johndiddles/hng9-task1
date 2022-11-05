import React from "react";
import LinksList from "../components/LinksList/LinksList";
import ProfileName from "../components/ProfileName/ProfileName";
import ProfilePicture from "../components/ProfilePicture/ProfilePicture";
import ShareButton from "../components/ShareButton/ShareButton";
import SocialLinks from "../components/SocialLinks/SocialLinks";

const HomePage = () => {
  return (
    <>
      <div className="profile__content">
        <ShareButton />
        <ProfilePicture />
        <ProfileName id="twitter" name="DiddlesCode" />
        <ProfileName id="slack" name="Johndiddles" />
        <LinksList />
        <SocialLinks />
      </div>
    </>
  );
};

export default HomePage;
