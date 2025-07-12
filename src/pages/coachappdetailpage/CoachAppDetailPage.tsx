import VideoComponent from "../../components/videocomponent/VideoComponent";
import "./coachappdetailpage.scss";
import videoFile from "../../assets/videos/coachapp-demo-video-4.mp4"; // ✅ importeer hier

const CoachAppDetailPage = () => {
  return (
    <div>
      <h1 className="gradient-text">Coaching Applicatie</h1>
      <div className="coach-app-detail-container">
        <div className="coach-app-detail-video">
          <VideoComponent videoPath={videoFile} />
        </div>
        <div className="coach-app-detail-p">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit amet
            minima quo ipsam illum tempora sed enim doloremque omnis. Sequi
            officiis libero reiciendis excepturi natus eum fugiat sint dolores
            soluta!
          </p>
          <br />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit amet
            minima quo ipsam illum tempora sed enim doloremque omnis. Sequi
            officiis libero reiciendis excepturi natus eum fugiat sint dolores
            soluta!
          </p>
        </div>
      </div>
      <div className="coach-app-detail-github-buttons-container">
        <a
          href="https://github.com/Lennert08/pw2-coachapp-frontend"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="button-style">Github code frontend</button>
        </a>
        <a
          href="https://github.com/Lennert08/pw2-coachapp-backend"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="button-style">Github code backend</button>
        </a>
      </div>
    </div>
  );
};

export default CoachAppDetailPage;
