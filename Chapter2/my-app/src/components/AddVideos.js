import useVideoDispatch from "../hooks/VideoDispatch";
import "./AddVideos.css";
import { useEffect, useState, useRef } from "react";
function AddVideos({ editableVideo }) {
  const inputRef = useRef(null);
  const initialState = {
    channel: "My Channel",
    time: "1 month ago",
    verified: true,
    title: "",
    views: "",
  };
  const [video, setVideo] = useState(initialState);
  function handleSubmit(e) {
    e.preventDefault();
    // console.log(editableVideo);
    if (editableVideo) {
      dispatch({ type: "UPDATE", payload: video });
    } else {
      dispatch({ type: "ADD", payload: video });
    }
    setVideo(initialState);
  }

  function handleChange(e) {
    console.log(e.target.name, e.target.value);
    setVideo({ ...video, [e.target.name]: e.target.value });
  }

  useEffect(() => {
    console.log("effect");
    if (editableVideo) setVideo(editableVideo);
    // inputRef.current.value = "demo";
    inputRef.current.focus();
    // inputRef.current.placeholder = "";
    // "type here".split("").forEach((char, i) => {
    //   setTimeout(() => {
    //     inputRef.current.placeholder += char;
    //   }, 100 * i );
    // });
  }, [editableVideo]);

  const dispatch = useVideoDispatch();
  return (
    <form>
      <input
        ref={inputRef}
        type='text'
        name='title'
        onChange={handleChange}
        placeholder='title'
        value={video.title}
      />
      <input
        type='text'
        name='views'
        onChange={handleChange}
        placeholder='views'
        value={video.views}
      />
      <button
        onClick={handleSubmit}
        // onClick={() => {
        // setVideos([
        //   ...videos,
        //   {
        //     id: 4,
        //     title: "Express-JS Tutorial",
        //     channel: "My Channel",
        //     views: "10k",
        //     time: "1 month ago",
        //     verified: true,
        //   },
        // ]);
        // }}
      >
        {editableVideo ? "Edit" : "Add"}
      </button>
    </form>
  );
}

export default AddVideos;
