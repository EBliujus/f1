import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import "./App.scss";
import "./Components/007/Create"
import Create from "./Components/007/Create";
import List from "./Components/007/List";
import { create, read } from "./Functions/localStorage";


const KEY = 'wishList';

function App() {

  const [list, setList] = useState(null);
  const [lastRefresh, setLastResfresh] = useState(Date.now());
  const [createData, setCreateData] = useState(null);

  useEffect(() => {
    // Loading'o imitacija
    setTimeout(() => setList(read(KEY)), 1000);
    // be imitacijos
    // setList(read(KEY));
  }, [lastRefresh]);
  


  useEffect(() => {
    if (null === createData) {
      return;
    }
    create(KEY, createData);
    setLastResfresh(Date.now())
  }, [createData]);

  return (
    <div className="container">
      <div className="row">
        <div className="col-4">
          <Create setCreateData={setCreateData} />
        </div>

        <div className="col-8">
          <List list={list}/>
        </div>
      </div>
    </div>

    
  );
}

export default App;
