import client from "./client/client";
import "./App.css";
import { useEffect, useState } from "react";
import Posts from './components/posts'
import NavbarComp from './components/navbar'
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [info,setInfo] = useState([])
  

  useEffect(() => {
    client
      .getEntries()
      .then((response) => {
        console.log(response);
        setInfo(response.items)

      })
      .catch(console.error);
  }, []);

  return (
    <div className="App">
      <header>
        <div className="wrapper">
         
        </div>
      </header>
      <main>
        <div className="wrapper">
       <NavbarComp />
      <Posts info={info} />
        

        </div>
      </main>
    </div>
  );
}

export default App;
