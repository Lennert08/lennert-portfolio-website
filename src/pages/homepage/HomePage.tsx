import profilePicture from "../../assets/images/profilepicture.png";
import "./homepage.scss";

const HomePage = () => {
  return (
    <div>
      <div className="homepage-container">
        <div className="left-side">
          <h1 className="gradient-text">Lennert</h1>
          <h1 className="gradient-text">Van Daele</h1>
          <br />
          <p>
            Hi! I'm Lennert, a Programming student at HoGent with a strong focus
            on backend development using C# and ASP.NET. I enjoy building
            practical, reliable solutions and learning through hands-on
            experience.
          </p>
          <br />
          <button className="hero-button">Mijn projecten</button>
        </div>
        <div className="right-side">
          <img
            className="profile-photo"
            src={profilePicture}
            alt="profilepicture"
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
