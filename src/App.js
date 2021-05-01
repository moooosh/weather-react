import Weather from "./Weather.js";


import "./styles.css";
import "./weather.css"


function App() {
  return (
    <div className="App">
    <Weather defaultCity="Brisbane" />

    <strong>
      {" "}
      Code by Shanese Mattiske |{" "}
      <a href="/" target="_blank" rel="noreferrer">
        Netlify App
      </a>{" "}
      |{" "}
      <a href="https://github.com/moooosh/weather-react" target="_blank" rel="noreferrer">
        GitHub
      </a>
    </strong>
    </div>
  );
}

export default App;
