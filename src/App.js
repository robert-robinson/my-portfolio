import logo from './logo.svg';
import LILogo from './LI-Logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          
          Robert Robinson Presents...
        </p>
        <img src={LIlogo} className="Linkedin-logo" alt="Linkedin" />
        <a
          className="App-link"
          href=""
          target="https://www.linkedin.com/in/robert-robinson-0846a5170/"
          rel="noopener noreferrer"
        >
          Linkedin
        </a>
      </header>
    </div>
  );
}

export default App;
