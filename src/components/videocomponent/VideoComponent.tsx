import videoUrl from "../../assets/videos/coachapp-demo-video.mp4";

const VideoComponent = () => {
  return (
    <video loop autoPlay muted playsInline>
      <source src={videoUrl} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};

export default VideoComponent;
