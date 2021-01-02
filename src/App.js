import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios'; 

function App() {
  const [ advice, setAdvice ] = useState('')
  useEffect(() =>{
    getAdvice()
  },[])
  const getAdvice  = () =>{
    axios.get('https://api.adviceslip.com/advice')
    .then(res =>{
      setAdvice(res.data.slip.advice)
    })
    .catch(err =>{
      console.log(err);
    })
  }

  return (
    <div className="App">
        <div className='container'>
          <div className='inner-text'>
            <p>{advice}</p>
            <button onClick={getAdvice} className='btn'>Get Another</button>
          </div>
        </div>
    </div>
  );
}

export default App;
