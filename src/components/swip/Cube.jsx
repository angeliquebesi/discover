import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Cube from "react-cube-navigation";
import NavBar from "../navbar/NavBar";
import MusicInformation from "./MusicInformation";
import { artists } from "../../data/data";
import "./Cube.css";

const SwipCube = () => {
  const [index, setIndex] = useState(0);
  const [artistList, setArtistList] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const myFilterList = artists.filter(
      (artist) => artist.id === parseInt(id, 10)
    );
    setArtistList(myFilterList);
  }, []);

  return (
    <div className="cube">
      <NavBar />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100vw",
          flexDirection: "column",
        }}
      >
        {artistList.length > 0 ? (
          <Cube
            index={index}
            onChange={(i) => setIndex(i)}
            width={window.innerWidth - 25}
            height={window.innerHeight - 25}
            lockScrolling
            hasNext={(i) => i < artistList.length - 1}
            renderItem={() => (
              <div
                style={{
                  backgroundImage: `url("${artistList[index].image}")`,
                  display: "flex",
                  flexDirection: "column-reverse",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  flex: 1,
                  borderRadius: "1rem",
                  paddingBottom: "3rem",
                }}
              />
            )}
          />
        ) : (
          ""
        )}
        {artistList.length > 0 ? (
          <MusicInformation artist={artistList[index]} />
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default SwipCube;
