import { useState, useContext, memo } from "react";
import ThemeContext from "../context/ThemeContext";
const PlayButton = memo(function PlayButton({ message, children, onPlay, onPause }) {
  const theme = useContext(ThemeContext);
  // here console.log should not be used because it is being called and not defined
  // props are read only
  // so when playing variable is changed then the component is not re-rendering
  const [playing, setPlaying] = useState(false);
  //e -> SyntheticBaseEvent for react
  function handleClick(e) {
    console.log(e);
    e.stopPropagation();
    // e.preventDefault();
    if (playing) onPause();
    else onPlay();
    // console.log(playing);
    // playing = !playing;
    setPlaying(!playing);
  }
  //   console.log("enter here", playing);
  return (
    <>
      <button className={theme} onClick={handleClick}>
        {/* {console.log("entered")} */}
        {children} : {playing ? ">" : "||"}
      </button>
    </>
  );
});

export default PlayButton;
