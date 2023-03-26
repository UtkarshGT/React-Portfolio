import IntroData from "../content/IntroData";
import "./Intro.css";

export default function Intro() {
  return (
    <div className="m-b">
      <div className="flex-container flex-center flex-col tall-80">
        <img className="profile-pic" src={IntroData.PhotoFileName} alt="" />
        <h1 className="name ubuntu-font text-space">{IntroData.Name}</h1>
        <div className="ubuntu-font text-space">{IntroData.Current}</div>
      </div>
      <div>
        <span className="subheader use-font">Hey!</span>
        <p className="welcome-text ubuntu-font">{IntroData.WelcomeText}</p>
      </div>
    </div>
  );
}
