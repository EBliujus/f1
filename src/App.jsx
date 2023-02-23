import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";
import "./Components/007/Create"
import Create from "./Components/007/Create";






function App() {


  return (
    <div className="container">
      <div className="row">
        <div className="col-4">
          <Create />
        </div>

        <div className="col-8">
          Column
        </div>
      </div>
    </div>

    
  );
}

export default App;
