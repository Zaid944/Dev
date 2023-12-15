import Video from "./Video";
import PlayButton from "./PlayButton";
import useVideos from "../hooks/Videos";
function VideoList({ deleteVideo, editVideo }) {
  const videos = useVideos();
  return (
    <>
      {videos.map((video) => {
        // id must be used as key->as prop to prevent re-render
        return (
          <Video
            {...video}
            deleteVideo={deleteVideo}
            editVideo={editVideo}
          >
            <PlayButton
              message='hi'
              onPlay={() => console.log("Play", video.title)}
              onPause={() => console.log("Pause", video.title)}
            >
              Video Button
            </PlayButton>
          </Video>
        );
      })}
    </>
  );
}
export default VideoList;
