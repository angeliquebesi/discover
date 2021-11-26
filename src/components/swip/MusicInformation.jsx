import React from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import "./MusicInformation.css";

function MusicInformation({ name, titreUrl }) {
  return (
    <div className="infoContainer">
      <h2>{name}</h2>
      <h4>Titre</h4>
      <div>
        <AudioPlayer
          src={titreUrl}
          style={{
            backgroundColor: "transparent",
          }}
        />
      </div>
    </div>
  );
}
export default MusicInformation;
