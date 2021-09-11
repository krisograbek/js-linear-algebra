import './App.css';
import Iris from './components/Iris';
import Panel from './components/Panel';
import Vectors from './components/Vectors';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Vectors />
        <Iris />
      </header>
    </div>
  );
}

export default App;
