import React from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import "./MusicInformation.css";

function MusicInformation({ artist }) {
  return (
    <div className="infoContainer">
      <h2>{artist.artist}</h2>
      <h4>Titre</h4>
      <div>
        <AudioPlayer
          key={artist.id}
          src={artist.sound}
          style={{
            backgroundColor: "transparent",
          }}
        />
      </div>
    </div>
  );
}
export default MusicInformation;
