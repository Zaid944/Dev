// React Fragment -> alternate of div for creating parent
import useVideoDispatch from "../hooks/VideoDispatch";
import "./Video.css";
function Video({
  title,
  channel,
  views,
  time = "1 year ago",
  verified,
  children,
  editVideo,
  id,
}) {
  //   let Topic = "React-JS";
  //   let bg = "dark";
  // let verified = true;
  // let channelJSX;
  // if (verified) {
  //   channelJSX = <div className='channel'>{channel} tick</div>;
  // } else {
  //   channelJSX = <div className='channel'>{channel} no tick</div>;
  // }

  // rendering -> mounting
  // useEffect after rendering
  const dispatch = useVideoDispatch();
  // useEffect(() => {
  //   const idx = setInterval(() => {
  //     console.log("video playing", id);
  //   }, 3000);
  //   return () => {
  //     clearInterval(idx);
  //   };
  // }, [id]);
  return (
    <div className='container'>
      <div>
        <button
          className='close'
          onClick={() => dispatch({ type: "DELETE", payload: id })}
        >
          X
        </button>
        <button className='edit' onClick={() => editVideo(id)}>
          Edit
        </button>
      </div>
      <div className='pic'>
        <img src='https://placekitten.com/640/360' alt='Alt' />
      </div>
      <div className='title'>{title}</div>
      <div className='channel'>
        {/* if verified is number then it will display , this is called as shortcircuting*/}
        {channel} {verified && "tick"}
      </div>
      <div className='views'>
        {views} <span>.</span> {time}
      </div>
      <div>{children}</div>
    </div>
  );
}
// css goes as object

// function Thumb() {
//   return <div>Thumb</div>;
// }
export default Video;
