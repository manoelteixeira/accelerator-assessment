import { useState } from "react";
import Anime from "./Anime";

const API = process.env.REACT_APP_URL;
function Animes() {
  //fetch all animes from the backend and render them as a list using the Anime component.
  // Make sure to style the animes to look like the screenshot from the README. Feel free to use axios to grab data
  const [animes, setAnimes] = useState(null);

  useState(() => {
    fetch(`${API}/animes`)
      .then((res) => res.json())
      .then((res) => setAnimes(res))
      .catch((err) => console.log(err));
  }, []);

  return (
    <section className="index" id="anime-list">
      {!animes ? (
        <p>No animes to display</p>
      ) : (
        animes.map((anime) => {
          const { id, name, description } = anime;
          return <Anime key={id} name={name} description={description} />;
        })
      )}
    </section>
  );
}

export default Animes;
