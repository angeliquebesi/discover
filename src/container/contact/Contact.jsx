import React, { useState } from "react";
import NavBar from "../../components/navbar/NavBar";
import "./Contact.css";

export default function Contact() {
  const [name, setName] = useState("");
  const [style, setStyle] = useState("");
  const [chanson, setChanson] = useState("");
  const [fileImg, setFileImg] = useState("");
  const [fileSound, setFileSound] = useState("");
  const [envoiForm, setEnvoiForm] = useState(false);

  return (
    <div className="container-contact">
      <NavBar />
      <h1 className="item-title-contact">
        <p className="début-h1"> Faites-vous </p> connaître !
      </h1>
      <form
        className="container-form"
        onSubmit={(event) => event.preventDefault()}
      >
        <label htmlFor="nom">
          Nom :
          <input
            type="text"
            placeholder="Naps"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </label>
        <label htmlFor="syle">
          Style musicale :
          <input
            type="text"
            placeholder="pop"
            value={style}
            onChange={(e) => setStyle(e.target.value)}
          />
        </label>
        <label htmlFor="chanson">
          Titre de la chanson :
          <input
            type="chanson"
            placeholder="La Kiffance"
            value={chanson}
            onChange={(event) => setChanson(event.target.value)}
          />
        </label>
        <label htmlFor="image">
          Dépose ton image :
          <input
            type="url"
            alt="image"
            placeholder="https://image.jpeg"
            value={fileImg}
            onChange={(event) => setFileImg(event.target.value)}
          />
        </label>
        <label htmlFor="depot">
          Dépose ta chanson :
          <input
            type="url"
            placeholder="https://sound.mp3"
            value={fileSound}
            onChange={(event) => setFileSound(event.target.value)}
          />
        </label>
        <button
          type="submit"
          onClick={() => setEnvoiForm(!envoiForm)}
          className="btn-envoyer-contact"
        >
          Envoyer
        </button>
        <div className={envoiForm ? "alert_open" : "alert_close"}>
          <button
            className="btn-close"
            type="button"
            onClick={() => setEnvoiForm(!envoiForm)}
          >
            x
          </button>
          <h3>Ta chanson a bien été envoyée</h3>
        </div>
      </form>
    </div>
  );
}
