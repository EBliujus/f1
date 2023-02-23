import 'bootstrap/dist/css/bootstrap.min.css'
import './App.scss';
import { useState, useEffect } from 'react';
import Gone10 from './Components/006/Gone10';



function App() {

    const [count, setCount] = useState(0);
    const [stars, setStars] = useState('');

    useEffect(() => {
        console.log('App born');
    }, []);

    useEffect(() => {
        console.log('count changed', count);
        console.log(stars);
        setStars(''.padStart(count, '*'));

        
    }, [count, stars]);

    const add = _ => {
        setCount(c => c + 1);
    }
    const rem = _ => {
        setCount(c => c - 1);
    }


  return (
    <div className="App">
        <header className="App-header">
            {
                count < 11 ? <Gone10 /> : null
            }
        <h1>{count}</h1>
        <h2>{stars}</h2>
        <button type="button" className="btn btn-outline-warning m-4" onClick={(add)}>add</button>
        <button type="button" className="btn btn-outline-warning m-4" onClick={(rem)}>del</button>
      </header>
    </div>
  );
}

export default App;