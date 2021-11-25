import React from "react";
import { useParams } from "react-router-dom";
import Cube from "react-cube-navigation";
import NavBar from "../navbar/NavBar";
import MusicInformation from "./MusicInformation";
import { artists } from "../../data/data";
import "./Cube.css";

const images = [
  "https://images.unsplash.com/photo-1565371557106-c2abcc6fb36a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
  "https://images.unsplash.com/photo-1565361849078-294849288ced?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
  "https://images.unsplash.com/photo-1565279799937-b397e6483124?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
  "https://images.unsplash.com/photo-1565264216052-3c9012481a1f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
  "https://images.unsplash.com/photo-1565274952013-13cecde5c8b1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
  "https://images.unsplash.com/photo-1565287753977-e94d0227c640?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=633&q=80",
  "https://images.unsplash.com/photo-1565340076861-7a6667b36072?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
  "https://images.unsplash.com/photo-1565259901762-b8d797c6f887?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
];

function SwipCube() {
  const [index, setIndex] = React.useState(0);
  const { id } = useParams();

  const artistList = artists.filter((artist) => artist.id === id);

  return (
    <div className="cube">
      <NavBar />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100vw",
        }}
      >
        <Cube
          index={index}
          onChange={(i) => setIndex(i)}
          width={window.innerWidth - 25}
          height={window.innerHeight - 25}
          lockScrolling
          hasNext={(i) => i < images.length - 1}
          renderItem={(i) => (
            <div
              style={{
                backgroundImage: `url(${images[i]})`,
                display: "flex",
                flexDirection: "column-reverse",
                backgroundSize: "cover",
                flex: 1,
                borderRadius: "1rem",
                paddingBottom: "3rem",
              }}
            >
              {artistList.map((artist) => (
                <MusicInformation
                  name={artist.artist}
                  titreUrl={artist.sound}
                />
              ))}
            </div>
          )}
        />
      </div>
    </div>
  );
}

export default SwipCube;
