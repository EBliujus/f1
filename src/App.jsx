import './App.css';
import Bebras from './Components/003/Bebras';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <Bebras color="skyblue" lt= "1px" name="Jurgis"/>
        <Bebras color="orange" lt= "7px" name="Linas"/>
        <Bebras color="yellow" lt= "-5px" name="Simonas"></Bebras>

      </header>
    </div>
  );
}

export default App;
