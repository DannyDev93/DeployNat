import "./App.css";
import { Spotify } from "react-spotify-embed";
import barb from "./assets/barb.gif";
import { useRef } from "react";

function App() {
  const topRef = useRef(null);
  const splitTopRef = useRef(null);
  const splitBottomRef = useRef(null);
  const bottomRef = useRef(null);

  const handleClick = (section) => {
    section.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div className="main-container">
        <div id="top" ref={topRef}>
          <p>Hey, what's your name?</p>
          <button
            className="arrow-button"
            onClick={() => {
              handleClick(splitTopRef);
            }}
          >
            Continue<span className="arrow"></span>
          </button>
        </div>
        <div id="split-top" ref={splitTopRef}>
          <p>Just kidding, you're Nata, beautiful!</p>
          <button
            className="arrow-button"
            onClick={() => {
              handleClick(splitBottomRef);
            }}
          >
            Continue<span className="arrow"></span>
          </button>
        </div>
        <div id="split-bottom" ref={splitBottomRef}>
          <p>Here's a dancing Barbie</p>
          <img className="split-img" src={barb} alt="" />
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
          <p>And a new song for you...</p>
          <div>
            <Spotify link="https://open.spotify.com/track/4FU7pMmM75ihU8SRZDZKXP?si=57be2ca106294663" />
          </div>
          <p>Can't wait to be near you!</p>
        </div>
      </div>
    </>
  );
}

export default App;
