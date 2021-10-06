/* eslint-disable no-unused-vars */
import React from "react";
import "./App.css";
import Card from "./Components/Card";
import { BASE_URL, API_KEY } from './Components/Constants'

//   P08fUZCggivWQrHT3pCVuT1SQSuiZu8i7dsMGpsQ API key
// GET https://api.nasa.gov/planetary/apod

function App() {
  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
      <Card/>
    </div>
  );
}

export default App;
