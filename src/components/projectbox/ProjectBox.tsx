import "./projectbox.scss";
import { Link } from "react-router-dom";

interface ProjectBoxProps {
  imageUrl: string;
  title: string;
  detailpageurl: string;
}

const ProjectBox: React.FC<ProjectBoxProps> = ({
  imageUrl,
  title,
  detailpageurl,
}) => {
  return (
    <>
      <Link to={detailpageurl} className="project-box">
        <img src={imageUrl} alt={title} />
        <h2>{title}</h2>
      </Link>
    </>
  );
};

export default ProjectBox;
