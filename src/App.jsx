import "./App.css";
import { Spotify } from "react-spotify-embed";
import n from "./assets/n.png";
import { useRef } from "react";

function App() {
  const topRef = useRef(null);
  const bottomRef = useRef(null);

  const handleClick = (section) => {
    section.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div className="main-container">
        <div id="top" ref={topRef}>
          <img className="split-img" src={n} alt="" />
          <button
            className="arrow-button"
            onClick={() => {
              handleClick(bottomRef);
            }}
          >
            Continue<span className="arrow"></span>
          </button>
        </div>
        <div id="bottom" ref={bottomRef}>
          <p>I'm here for and with you...</p>
          <div>
            <Spotify link="https://open.spotify.com/track/78DwRIo6Vj6wqteyerGetr?si=e76d8afde62e4c7f" />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
