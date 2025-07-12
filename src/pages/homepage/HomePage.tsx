import profilePicture from "../../assets/images/profilepicture.png";
import "./homepage.scss";
import { useNavigate } from "react-router-dom";
import lennertCv from "../../assets/images/cv-Lennert-2025.pdf";

const HomePage = () => {
  const navigate = useNavigate();

  const handleNavigateToProjectPage = () => {
    navigate("/projecten");
  };

  return (
    <div>
      <div className="home-main-container">
        <div className="about-me-container">
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
          <button
            className="button-style"
            onClick={handleNavigateToProjectPage}
          >
            Mijn projecten
          </button>
          <br />
          <a href={lennertCv} download="cv-lennert.pdf">
            <button className="button-style">Download mijn CV</button>
          </a>
        </div>
        <div className="photo-container">
          <img
            src={profilePicture}
            alt="profilepicture"
            className="profile-picture"
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
