import "./skillbox.scss";

interface SkillBoxProps {
  imageUrl: string[];
  title: string;
}

const SkillBox: React.FC<SkillBoxProps> = ({ imageUrl, title }) => {
  return (
    <>
      <div className="skill-box">
        <h2>{title}</h2>
        <div className="skill-icons">
          {imageUrl.map((url, index) => (
            <img key={index} src={url} alt={`${title} icon ${index + 1}`} />
          ))}
        </div>
      </div>
    </>
  );
};

export default SkillBox;
