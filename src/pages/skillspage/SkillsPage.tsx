import SkillBox from "../../components/skillbox/SkillBox";
import "./skillspage.scss";

const SkillsPage = () => {
  return (
    <>
      <div className="skills-main-container">
        <SkillBox
          title="Frontend"
          imageUrl={[
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
          ]}
        />
        <SkillBox
          title="Backend"
          imageUrl={[
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg",
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg",
          ]}
        />
        <SkillBox
          title="Databases"
          imageUrl={[
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg",
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
          ]}
        />
        <SkillBox
          title="DevOps"
          imageUrl={[
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
            "https://www.svgrepo.com/show/448271/azure-devops.svg",
          ]}
        />
      </div>
    </>
  );
};

export default SkillsPage;
