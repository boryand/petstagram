import client from "./client/client";
import "./App.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    client.getEntries().then(function (entries) {
      // log the title for all the entries that have it
      console.log(entries);
    });
  }, []);

  return <div>petstagram</div>;
}

export default App;
