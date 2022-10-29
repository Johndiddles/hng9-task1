import "./App.css";
import Footer from "./components/Footer/Footer";
import LinksList from "./components/LinksList/LinksList";
import ProfileName from "./components/ProfileName/ProfileName";
import ProfilePicture from "./components/ProfilePicture/ProfilePicture";
import SocialLinks from "./components/SocialLinks/SocialLinks";

function App() {
  return (
    <div className="profile__page">
      <div className="profile__content">
        <ProfilePicture />
        <ProfileName id="twitter" name="DiddlesCode" />
        <ProfileName id="slack" name="Johndiddles" />
        <LinksList />
        <SocialLinks />
      </div>
      <Footer />
    </div>
  );
}

export default App;
