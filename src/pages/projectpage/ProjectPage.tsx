import ProjectBox from "../../components/projectbox/ProjectBox";
import "./projectpage.scss";
import coachappPictureURL from "../../assets/images/coachapp-project.png";
import bitnovaPictureURL from "../../assets/images/bitnova-project.png";

const ProjectPage = () => {
  return (
    <div>
      <div className="project-main-container">
        <ProjectBox
          imageUrl={coachappPictureURL}
          title="Coaching App"
          detailpageurl="coachapp"
        />
        <ProjectBox
          imageUrl={bitnovaPictureURL}
          title="Bitnova Exchange"
          detailpageurl="bitnova"
        />
      </div>
    </div>
  );
};

export default ProjectPage;
