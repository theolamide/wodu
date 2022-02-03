import logo from './logo.svg';
import './App.css';

import Grid from './Grid';
import Keyboard from './Keyboard';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          wọ́dù
        </p>
      </header>
        <Grid />
        <Keyboard />
    </div>
  );
}

export default App;
