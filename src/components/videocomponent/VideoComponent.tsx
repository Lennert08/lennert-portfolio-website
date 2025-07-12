import "./videocomponent.scss";

interface VideoComponentProps {
  videoPath?: string;
}

const VideoComponent: React.FC<VideoComponentProps> = ({ videoPath }) => {
  return (
    <video loop autoPlay muted playsInline className="video-component">
      <source src={videoPath} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};

export default VideoComponent;
