import "./App.css";
import { useEffect, useState } from "react";
import Characters from "./components/Characters";

function App() {
  const [characterList, setCharacterList] = useState([]);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character/")
      .then((response) => response.json())
      .then((response) => setCharacterList(response.results))
      .catch((err) => console.log(err));
  }, []);

  console.log(characterList);

  return (
    <div className="App">
      <div className="App-header">
        <img
          src="https://imagensemoldes.com.br/wp-content/uploads/2021/04/Rick-and-Morty-PNG.png"
          alt=""
          className="title"
        />
        <Characters list={characterList} />
      </div>
    </div>
  );
}

export default App;
