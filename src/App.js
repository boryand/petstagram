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

  useEffect(() => {
    client
      .getEntries()
      .then((response) => {
        console.log(response);
        setInfo(response.items);
      })
      .catch(console.error);
  }, []);

  return (
    <div className="App">
      <header>
        <div className="wrapper"></div>
      </header>
      <main>
        <div className="wrapper">
          <NavbarNew />
          <Switch>
            <Route exact path="/pets">
              <PetList info={info} />
            </Route>
            <Route exact path="/">
              <Posts info={info} />
            </Route>
            <Route path="/pets/:nameOfPet">
              <PetDetails info={info} />
            </Route>
          </Switch>
        </div>
      </main>
    </div>
  );
}

export default App;
