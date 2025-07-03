import "./projectbox.scss";

interface ProjectBoxProps {
  imageUrl: string;
  title: string;
}

const ProjectBox: React.FC<ProjectBoxProps> = ({ imageUrl, title }) => {
  return (
    <>
      <div className="project-box">
        <img src={imageUrl} alt={title} />
        <h2>{title}</h2>
      </div>
    </>
  );
};

export default ProjectBox;
