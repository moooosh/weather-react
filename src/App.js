import Weather from "./Weather.js";


import "./styles.css";
import "./weather.css"


function App() {
  return (
    <div className="App">
    <Weather />

    <strong>
      {" "}
      Code by Shanese Mattiske |{" "}
      <a href="/" target="_blank">
        Netlify App
      </a>{" "}
      |{" "}
      <a href="https://github.com/moooosh/weather-react" target="_blank">
        GitHub
      </a>
    </strong>
    </div>
  );
}

export default App;
