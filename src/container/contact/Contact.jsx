import React, { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [style, setStyle] = useState("");
  const [chanson, setChanson] = useState("");
  const [file, setFile] = useState("");

  return (
    <div>
      <form>
        <label htmlFor="nom">
          Nom :
          <input
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </label>
        <label htmlFor="syle">
          Style musicale :
          <input
            type="text"
            value={style}
            onChange={(e) => setStyle(e.target.value)}
          />
        </label>
        <label htmlFor="chanson">
          Titre de la chanson :
          <input
            type="chanson"
            value={chanson}
            onChange={(event) => setChanson(event.target.value)}
          />
        </label>
        <label htmlFor="image">
          image :
          <input
            type="file"
            alt="image"
            value={file}
            onChange={(event) =>
              setFile({ [event.target.name]: event.target.files[0] })
            }
          />
        </label>
        <label htmlFor="depot">
          Dépose ta chanson ici :
          <input
            type="file"
            value={file}
            onChange={(event) =>
              setFile({ [event.target.name]: event.target.files[0] })
            }
          />
        </label>
        <button type="submit">Envoyer</button>
      </form>
    </div>
  );
}
