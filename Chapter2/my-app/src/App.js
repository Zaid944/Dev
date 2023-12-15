// component name should start with capital letter
import "./App.css";
import videoDB from "./data/data";
import { useReducer, useState } from "react";
import AddVideos from "./components/AddVideos";
import VideoList from "./components/VideoList";
import ThemeContext from "./context/ThemeContext";
import VideosContext from "./context/VideosContext";
import VideoDispatchContext from "./context/VideoDispatchContext";
import Counter from "./components/Counter";
function App() {
  const [editableVideo, setEditableVideo] = useState(null);
  const [videos, dispatch] = useReducer(videoReducer, videoDB);
  function editVideo(id) {
    setEditableVideo(videos.find((video) => video.id === id));
  }
  const [mode, setMode] = useState("dark");
  function videoReducer(videos, action) {
    //action : {type : 'ADD', payload : video}
    // returns state
    // returns the next state in above parameter old state is present
    switch (action.type) {
      case "ADD":
        return [...videos, { ...action.payload, id: videos.length + 1 }];
      case "DELETE":
        return videos.filter((video) => video.id !== action.payload);
      default:
        return videos;
      case "UPDATE":
        const index = videos.findIndex((v) => v.id === action.payload.id);
        const newVideos = [...videos];
        newVideos.splice(index, 1, action.payload);
        setEditableVideo(null);
        return newVideos;
      case "LOAD":
        return action.payload;
    }
  }
  // const [videos, setVideos] = useState(videoDB);

  // const themeContext = useContext(ThemeContext);
  // console.log(themeContext);
  return (
    // event bubbling
    <ThemeContext.Provider value={mode}>
      <VideosContext.Provider value={videos}>
        <VideoDispatchContext.Provider value={dispatch}>
          <Counter />
          <button
            onClick={() => {
              setMode(mode === "dark" ? "light" : "dark");
            }}
          >
            Mode
          </button>
          <div className={`App ${mode}`} onClick={() => console.log("app")}>
            <div>
              <AddVideos editableVideo={editableVideo} />
            </div>
            <VideoList editVideo={editVideo} />
          </div>
        </VideoDispatchContext.Provider>
      </VideosContext.Provider>
    </ThemeContext.Provider>
  );
}

export default App;
