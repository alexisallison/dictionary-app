import logo from "./logo.png";
import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo img-fluid" alt="logo" />
        </header>
        <Dictionary defaultKeyword="dictionary" />
        <footer className="text-center">This <a href="https://github.com/alexisallison/dictionary-app.git" target="_blank" rel="noreferrer">Open-Sourced</a> app was coded by Alexis Allison and hosted on <a href="https://fabulous-marigold-1f0119.netlify.app/" target="_blank" rel="noreferrer">Netlify</a></footer>
      </div>
    </div>
  );
}

export default App;
