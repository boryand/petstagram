import client from "./client/client";
import "./App.css";
import { useEffect, useState } from "react";
import Posts from "./components/posts";
import PetList from "./components/petlist";

import PetDetails from "./components/petdetails";
import { Switch, Route, Link } from "react-router-dom";
import NavbarNew from "./components/navbar1";

function App() {
  const [info, setInfo] = useState([]);
  const [url, setUrl] = useState();
  const [animalInput, setAnimalInput] = useState("");
  const [animalSearch, setAnimalSearch] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // const searchTopic = document.querySelector("#search").value;
    setAnimalSearch(animalInput);
    setAnimalInput("");
  };

  const handleChange = (e) => {
    setAnimalInput(e.target.value);
  };
  // console.log(client);
  useEffect(() => {
    client
      .getEntries()
      .then((response) => {
        console.log(response);
        setInfo(response.items);
      })
      .catch(console.error);
  }, []);

  const handleClear = () => {
    setAnimalSearch("");
  };

  console.log(animalInput);

  const filteredInfo = animalSearch
    ? info.filter((animal) => {
        return animal.fields.petName.includes(animalSearch);
      })
    : info;

  console.log(filteredInfo);

  return (
    <div className="App">
      <header>
        <div className="wrapper"></div>
      </header>
      <main>
        <div className="wrapper">
          <NavbarNew />
          <form onSubmit={handleSubmit}>
            <input
              id="search"
              placeholder="Search for animal ..."
              onChange={handleChange}
              value={animalInput}
            ></input>
            <button type="submit"> Search</button>
            <button onClick={handleClear}>clear</button>
          </form>

          <Switch>
            <Route exact path="/pets">
              <PetList info={filteredInfo} />
            </Route>
            <Route exact path="/">
              <Posts info={filteredInfo} />
            </Route>
            <Route path="/pets/:nameOfPet">
              <PetDetails info={filteredInfo} />
            </Route>
          </Switch>
        </div>
      </main>
    </div>
  );
}

export default App;
