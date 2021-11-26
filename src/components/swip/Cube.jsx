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
  const [imageList, setImageList] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const myFilterList = artists.filter(
      (artist) => artist.id === parseInt(id, 10)
    );
    setArtistList(myFilterList);
    const mappingImageList = artistList.map((picture) => picture.image);
    setImageList(mappingImageList);
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
        }}
      >
        <Cube
          index={index}
          onChange={(i) => setIndex(i)}
          width={window.innerWidth - 25}
          height={window.innerHeight - 25}
          lockScrolling
          hasNext={(i) => i < artistList.length - 1}
          renderItem={(i) => (
            <div
              style={{
                backgroundImage: `url(${imageList[i]})`,
                display: "flex",
                flexDirection: "column-reverse",
                backgroundSize: "cover",
                flex: 1,
                borderRadius: "1rem",
                paddingBottom: "3rem",
              }}
            >
              <MusicInformation
                name={artistList[index].artist}
                titreUrl={artistList[index].sound}
              />
            </div>
          )}
        />
      </div>
    </div>
  );
};

export default SwipCube;
