import React from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import "./MusicInformation.css";

function MusicInformation() {
  return (
    <div className="infoContainer">
      <h2>Artiste</h2>
      <h4>Titre</h4>
      <div>
        <AudioPlayer
          src="https://soundcloud.com/flaiy-yt/sch-tempete.mp3"
          style={{
            backgroundColor: "transparent",
          }}
        />
      </div>
    </div>
  );
}
export default MusicInformation;
