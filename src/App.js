import logo from './logo.svg';
import './App.css';
import LoopThruObjects from "./Components/LoopThruObjects"
import ReactState from './Components/ReactState';
import PassingProps from './Components/PassingProps';
import ReactForms from './Components/ReactForms';

function App() {
  return (
    <div className="App">
      <h1 className="App-header">Welcome to Full Stack Labs!</h1>
      <nav className="App-navBar">
        <ul>
          <li>Java Page!</li>
        </ul>
      </nav>
      <hr/>
      <div className="loop-list-container">
        <LoopThruObjects />
      </div>
      <hr/>
      <div className="react-state-container">
        <ReactState />
      </div>
      <hr/>
      <div className="passing-props-container">
        <h1>Passing Props</h1>
      <PassingProps firstName="Flavien" lastName="Gascard" age={52} pro={true} />

      </div>
<hr />

<ReactForms />

<hr />
    </div>
  );
}

export default App;
