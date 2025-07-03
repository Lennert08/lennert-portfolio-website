import ProjectBox from "../../components/projectbox/ProjectBox";
import "./projectpage.scss";
import coachappPictureURL from "../../assets/images/coachapp-project.png";

const ProjectPage = () => {
  return (
    <div>
      <div className="project-main-container">
        <ProjectBox imageUrl={coachappPictureURL} title="Coachingapplicatie" />
      </div>
    </div>
  );
};

export default ProjectPage;
