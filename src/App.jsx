import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import "./App.scss";
import "./Components/007/Create"
import Create from "./Components/007/Create";
import { create } from "./Functions/localStorage";


const KEY = 'wishList';



function App() {

  const [createData, setCreateData] = useState(null);
  


  useEffect(() => {
    if (null === createData) {
      return;
    }
    create(KEY, createData);
  }, [createData]);

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
