import 'bootstrap/dist/css/bootstrap.min.css'
import './App.scss';

const animals = [
    'Racoon',
    'Fox',
    'Moose',
    'Wolf'
];

function App() {

  return (
    <div className="App">
      <header className="App-header">
        
    <div className="card">
        <div className="card-header">
           <h2>Forest Book</h2>
         </div>
         <ul className="list-group list-group-flush">
            <li className="list-group-item">An item</li>
        </ul>
    </div>

      </header>
    </div>
  );
}

export default App;